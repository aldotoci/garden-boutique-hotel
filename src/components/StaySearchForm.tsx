"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  addDaysYmd,
  localYmd,
  parseYmd,
  stayQueryString,
  type StaySearchNormalized,
} from "@/lib/stayDates";

function openDatePicker(input: HTMLInputElement | null) {
  if (!input) return;
  if (typeof input.showPicker === "function") {
    try {
      input.showPicker();
    } catch {
      input.focus();
    }
  } else {
    input.focus();
    input.click();
  }
}

function calendarIconKeyDown(
  e: React.KeyboardEvent,
  input: HTMLInputElement | null,
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openDatePicker(input);
  }
}

function defaultHomeDates(): Pick<StaySearchNormalized, "checkIn" | "checkOut"> {
  const t = localYmd(new Date());
  return { checkIn: t, checkOut: addDaysYmd(t, 2) };
}

export type StaySearchFormProps = {
  layout: "home" | "sidebar";
  /** From URL on /rooms — keeps sidebar in sync with query string */
  seed?: StaySearchNormalized;
  action?: string;
  submitLabel?: string;
  formClassName?: string;
  childrenBeforeSubmit?: ReactNode;
  /** On /rooms sidebar: keep the URL in sync so the server can filter room cards */
  syncQueryToUrl?: boolean;
};

export default function StaySearchForm({
  layout,
  seed,
  action = "/rooms",
  submitLabel,
  formClassName,
  childrenBeforeSubmit,
  syncQueryToUrl = false,
}: StaySearchFormProps) {
  const formId = useId();
  const router = useRouter();
  const pathname = usePathname();
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const skipRoomsUrlReplace = useRef(true);

  const [checkIn, setCheckIn] = useState(() => {
    if (seed) return seed.checkIn;
    return defaultHomeDates().checkIn;
  });
  const [checkOut, setCheckOut] = useState(() => {
    if (seed) return seed.checkOut;
    return defaultHomeDates().checkOut;
  });
  const [adults, setAdults] = useState(() => seed?.adults ?? "2");
  const [children, setChildren] = useState(() => seed?.children ?? "0");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!seed) return;
    setCheckIn(seed.checkIn);
    setCheckOut(seed.checkOut);
    setAdults(seed.adults);
    setChildren(seed.children);
    setError("");
  }, [
    seed?.checkIn,
    seed?.checkOut,
    seed?.adults,
    seed?.children,
  ]);

  useEffect(() => {
    if (pathname !== "/rooms") {
      skipRoomsUrlReplace.current = true;
    }
  }, [pathname]);

  useEffect(() => {
    if (!syncQueryToUrl || pathname !== "/rooms") return;
    if (!checkIn || !checkOut) return;
    if (skipRoomsUrlReplace.current) {
      skipRoomsUrlReplace.current = false;
      return;
    }
    const q = stayQueryString({ checkIn, checkOut, adults, children });
    router.replace(`/rooms?${q}`, { scroll: false });
  }, [
    syncQueryToUrl,
    pathname,
    checkIn,
    checkOut,
    adults,
    children,
    router,
  ]);

  const checkOutMin = useMemo(() => {
    if (!checkIn) return localYmd(new Date());
    return addDaysYmd(checkIn, 1);
  }, [checkIn]);

  const onCheckInChange = (value: string) => {
    setCheckIn(value);
    setError("");
    if (!value) return;
    const minOut = addDaysYmd(value, 1);
    if (!checkOut || checkOut <= value) {
      setCheckOut(minOut);
      return;
    }
    if (checkOut < minOut) {
      setCheckOut(minOut);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    const inD = parseYmd(checkIn);
    const outD = parseYmd(checkOut);
    if (!inD || !outD) {
      e.preventDefault();
      setError("Please choose both check-in and check-out dates.");
      return;
    }
    if (outD <= inD) {
      e.preventDefault();
      setError("Check-out must be at least one day after check-in.");
      return;
    }
  };

  const todayMin = localYmd(new Date());

  const defaultSubmit =
    layout === "sidebar" ? (
      <span>
        <i className="flaticon-search-1" aria-hidden /> Search
      </span>
    ) : (
      <span>Check availability</span>
    );

  const dateField = (
    kind: "in" | "out",
    ref: React.RefObject<HTMLInputElement | null>,
    value: string,
    onChange: (v: string) => void,
    min: string,
    label: string,
    wowDelay?: string,
  ) => {
    const id = `${formId}-${kind}`;
    const inputEl = (
      <input
        ref={ref}
        type="date"
        name={kind === "in" ? "checkIn" : "checkOut"}
        id={id}
        className="advance-search-date"
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => openDatePicker(e.currentTarget)}
        required
      />
    );
    const icon = (
      <div
        className="query__input__icon advance-search-calendar-hit"
        role="button"
        tabIndex={0}
        aria-label={kind === "in" ? "Open check-in calendar" : "Open check-out calendar"}
        onClick={() => openDatePicker(ref.current)}
        onKeyDown={(e) => calendarIconKeyDown(e, ref.current)}
      >
        <i className="flaticon-calendar" aria-hidden />
      </div>
    );

    const inner =
      layout === "sidebar" ? (
        <div className="query__input__position">
          {inputEl}
          {icon}
        </div>
      ) : (
        <>
          {inputEl}
          {icon}
        </>
      );

    return (
      <div
        className="query__input wow fadeInUp"
        {...(wowDelay ? { "data-wow-delay": wowDelay } : {})}
      >
        <label htmlFor={id} className="query__label">
          {label}
        </label>
        {inner}
      </div>
    );
  };

  const selectField = (
    name: string,
    idSuffix: string,
    label: string,
    value: string,
    onChange: (v: string) => void,
    options: React.ReactNode,
    wowDelay?: string,
  ) => {
    const id = `${formId}-${idSuffix}`;
    const selectEl = (
      <select
        name={name}
        id={id}
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options}
      </select>
    );
    const icon = (
      <div className="query__input__icon">
        <i className="flaticon-user" aria-hidden />
      </div>
    );
    const inner =
      layout === "sidebar" ? (
        <div className="query__input__position">
          {selectEl}
          {icon}
        </div>
      ) : (
        <>
          {selectEl}
          {icon}
        </>
      );

    return (
      <div
        className="query__input wow fadeInUp"
        {...(wowDelay ? { "data-wow-delay": wowDelay } : {})}
      >
        <label htmlFor={id} className="query__label">
          {label}
        </label>
        {inner}
      </div>
    );
  };

  return (
    <form
      id={formId}
      action={action}
      method="get"
      className={formClassName ?? "advance__search"}
      onSubmit={onSubmit}
    >
      {layout === "sidebar" ? <h5>Book Your Stay</h5> : null}
      <div className="advance__search__wrapper">
        {dateField(
          "in",
          checkInRef,
          checkIn,
          onCheckInChange,
          todayMin,
          "Check-in",
        )}
        {dateField(
          "out",
          checkOutRef,
          checkOut,
          (v) => {
            setCheckOut(v);
            setError("");
          },
          checkOutMin,
          "Check-out",
          layout === "sidebar" ? "0.3s" : undefined,
        )}
        {selectField(
          "adults",
          "adult",
          layout === "sidebar" ? "Adults" : "Adults",
          adults,
          setAdults,
          <>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>
                {layout === "sidebar"
                  ? `${n} ${n === 1 ? "Person" : "Persons"}`
                  : `${n} ${n === 1 ? "adult" : "adults"}`}
              </option>
            ))}
          </>,
          layout === "sidebar" ? "0.4s" : undefined,
        )}
        {selectField(
          "children",
          "child",
          layout === "sidebar" ? "Children" : "Children",
          children,
          setChildren,
          <>
            {Array.from({ length: 10 }, (_, i) => i).map((n) => (
              <option key={n} value={String(n)}>
                {layout === "sidebar"
                  ? n === 0
                    ? "No children"
                    : `${n} ${n === 1 ? "Child" : "Children"}`
                  : n === 0
                    ? "No children"
                    : `${n} ${n === 1 ? "child" : "children"}`}
              </option>
            ))}
          </>,
          layout === "sidebar" ? "0.5s" : undefined,
        )}
        {childrenBeforeSubmit}
        <button
          type="submit"
          className={`theme-btn btn-style fill no-border search__btn${layout === "sidebar" ? " wow fadeInUp" : ""}`}
          {...(layout === "sidebar" ? { "data-wow-delay": "0.6s" } : {})}
        >
          {submitLabel ? <span>{submitLabel}</span> : defaultSubmit}
        </button>
      </div>

      {error ? (
        <p
          className="text-danger small mb-0 mt-3 px-1 text-center text-md-start"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </form>
  );
}
