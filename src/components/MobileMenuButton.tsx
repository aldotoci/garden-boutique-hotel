"use client";

import { useMobileMenu } from "@/components/MobileMenuProvider";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function MobileMenuButton({ className, children }: Props) {
  const { toggleMenu, open } = useMobileMenu();

  return (
    <button
      type="button"
      className={className}
      onClick={toggleMenu}
      aria-controls="offcanvasRight"
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {children}
    </button>
  );
}
