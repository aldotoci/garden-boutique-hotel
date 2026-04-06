type SelectedStayPricing = {
  rangeLabel: string;
  nights: number;
  totalDisplay: string;
};

type RoomDetailsIntroProps = {
  price: string;
  title: string;
  person: string;
  selectedStayPricing?: SelectedStayPricing;
};

export default function RoomDetailsIntro({
  price,
  title,
  person,
  selectedStayPricing,
}: RoomDetailsIntroProps) {
  return (
    <>
      <header className="room-details-info-header border-b border-neutral-200/70 pb-4 sm:pb-5 md:border-0 md:pb-0">
        <h2 className="room__title min-w-0 max-w-full !text-[clamp(1.45rem,2.4vw+0.9rem,2.5rem)] !leading-snug sm:!leading-tight break-words text-balance text-neutral-900">
          {title}
        </h2>

        {/* One band: meta + rate stay grouped (no full-width justify-between gap) */}
        <div className="mt-2.5 flex flex-col gap-2.5 sm:mt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:gap-x-4">
          <div
            className="room__meta !mt-0 !mb-0 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-neutral-600 !text-[0.875rem] sm:!text-[0.9375rem] md:!text-[1rem]"
            role="list"
          >
            <span className="inline-flex items-center gap-1.5" role="listitem">
              <i className="flaticon-user shrink-0 text-[0.9em] text-neutral-500" aria-hidden />
              <span className="whitespace-nowrap">{person} Person</span>
            </span>
          </div>

          <span
            className="hidden h-3.5 w-px shrink-0 bg-neutral-200 sm:block"
            aria-hidden
          />

          <div
            className="inline-flex w-fit max-w-full flex-col gap-0.5 rounded-lg border px-3 py-2 sm:flex-row sm:items-baseline sm:gap-2 sm:px-3.5 sm:py-2"
            style={{
              borderColor: "rgba(171, 138, 98, 0.35)",
              background: "rgba(171, 138, 98, 0.07)",
            }}
            role="group"
            aria-label={`Nightly rate ${price}`}
          >
            <span className="text-[0.6rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#8f734f] sm:sr-only">
              Nightly rate
            </span>
            <p className="m-0 flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
              <span
                className="text-[clamp(1.35rem,2vw+0.75rem,1.85rem)] font-normal leading-none tracking-tight text-neutral-900"
                style={{ fontFamily: '"Gilda Display", Georgia, serif' }}
              >
                {price}
              </span>
              <span className="text-sm font-medium leading-none text-neutral-500">/ night</span>
            </p>
          </div>
        </div>

        {selectedStayPricing ? (
          <div
            className="mt-3 max-w-xl rounded-lg border border-neutral-200/90 bg-neutral-50 px-3.5 py-3 sm:mt-3.5 sm:px-4 sm:py-3"
            role="status"
          >
            <p className="text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.1em] text-[#ab8a62]">
              Your selected dates
            </p>
            <p className="mt-1 text-sm leading-snug text-neutral-700">
              {selectedStayPricing.rangeLabel}
            </p>
            <p className="mt-1.5 text-[0.9375rem] font-semibold leading-snug text-neutral-900">
              {selectedStayPricing.totalDisplay}
              <span className="font-normal text-neutral-600">
                {" "}
                · {selectedStayPricing.nights} night{selectedStayPricing.nights === 1 ? "" : "s"} (estimate)
              </span>
            </p>
          </div>
        ) : null}
      </header>

      <p className="mt-4 max-w-prose text-pretty !text-base !leading-relaxed text-neutral-800 sm:mt-5 sm:!text-[1.0625rem] sm:!leading-[1.65] md:mt-6 md:!text-[1.125rem] md:!leading-[1.7]">
        Our {title} is thoughtfully designed for guests who prefer comfort and practicality without compromising on
        comfort or style. Each bed features high-quality linens and plush pillows, ensuring a restful night&apos;s sleep.
        <br />
        <br />
        The room offers warm lighting, a functional work area, and ample storage, making it ideal for both short and
        extended stays. Large windows invite natural light and a calming view, creating a welcoming atmosphere to unwind
        after your day.
      </p>
    </>
  );
}
