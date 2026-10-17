"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { ArrowRight, ChevronDown, CloseIcon, MailIcon, MenuIcon, PinIcon } from "./icons";
import { mainNav } from "@/content/navigation";
import { company } from "@/content/company";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open panel when the route changes, adjusted during render rather
  // than in an effect so the new page never paints with the old menu open.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Small delay on close keeps the dropdown usable while the pointer travels.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-white/65 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-[0.75rem]">
          <div className="flex items-center gap-7">
            <span className="inline-flex items-center gap-2">
              <PinIcon className="h-3.5 w-3.5 text-accent-300" />
              Sharjah, UAE
              <span className="text-white/25">·</span>
              London, UK
            </span>
            <span className="text-white/40">{company.tagline}</span>
          </div>
          <div className="flex items-center gap-7">
            <Link
              href="/faq"
              className="transition-colors hover:text-white"
            >
              Client FAQ
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <MailIcon className="h-3.5 w-3.5 text-accent-300" />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "border-line shadow-[0_1px_20px_rgba(7,22,39,0.06)]" : "border-line/70"
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const hasChildren = Boolean(item.children?.length);

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    if (hasChildren) setOpenMenu(item.label);
                  }}
                  onMouseLeave={hasChildren ? scheduleClose : undefined}
                >
                  <Link
                    href={item.href}
                    aria-expanded={hasChildren ? openMenu === item.label : undefined}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.875rem] font-medium transition-colors ${
                      active ? "text-accent-600" : "text-ink/80 hover:text-accent-600"
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {hasChildren && openMenu === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="animate-menu w-[30rem] border border-line bg-white p-2 shadow-[0_24px_60px_-20px_rgba(7,22,39,0.28)]">
                        <div className="grid grid-cols-2 gap-1">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block px-3.5 py-3 transition-colors hover:bg-paper"
                            >
                              <span className="flex items-center justify-between gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-accent-600">
                                {child.label}
                                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={item.href}
                          className="mt-1 flex items-center gap-2 border-t border-line px-3.5 py-3 text-[0.75rem] font-semibold tracking-[0.08em] text-navy-900 uppercase transition-colors hover:text-accent-600"
                        >
                          View all {item.label.toLowerCase()}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-2 bg-navy-900 px-5 py-3 text-[0.75rem] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-accent-600 sm:inline-flex"
            >
              Book a consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent-600 xl:hidden"
            >
              {mobileOpen ? <MenuIconSwap open /> : <MenuIconSwap />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="animate-menu fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-line bg-white xl:hidden">
          <nav aria-label="Mobile" className="container-page py-6">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-line py-1">
                <Link
                  href={item.href}
                  className="block py-3.5 font-serif text-xl text-ink transition-colors hover:text-accent-600"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="grid gap-px pb-3 sm:grid-cols-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2 text-[0.875rem] text-slate-ink transition-colors hover:text-accent-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8 space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-navy-900 px-6 py-4 text-[0.8125rem] font-semibold tracking-[0.06em] text-white uppercase"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center justify-center gap-2 border border-line px-6 py-4 text-[0.8125rem] font-medium text-ink"
              >
                <MailIcon className="h-4 w-4 text-accent-500" />
                {company.email}
              </a>
            </div>

            <div className="mt-8 grid gap-6 border-t border-line pt-8 text-[0.8125rem] leading-relaxed text-slate-ink sm:grid-cols-2">
              <div>
                <div className="mb-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-ink uppercase">
                  Sharjah
                </div>
                Shamas Business Center
                <br />
                Al Messaned, Sharjah, UAE
              </div>
              <div>
                <div className="mb-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-ink uppercase">
                  London
                </div>
                71–75 Shelton Street
                <br />
                WC2H 9JQ, United Kingdom
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIconSwap({ open = false }: { open?: boolean }) {
  return open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />;
}
