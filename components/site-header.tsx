"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import SpecularButton from "@/components/specular-button";

type NavigationItem = {
  href: string;
  key: "portfolio" | "services" | "about" | "contact";
  index: string;
};

const navigationItems: NavigationItem[] = [
  { href: "/portfolio", key: "portfolio", index: "01" },
  { href: "/services", key: "services", index: "02" },
  { href: "/about", key: "about", index: "03" },
  { href: "/contact", key: "contact", index: "04" },
];

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");
  const localize = (href: string) => (locale === "es" ? href : `/${locale}${href}`);
  const routePath = (href: string) => localize(href);
  const socialLinks = [
    { href: "mailto:web7canarias@gmail.com", label: t("email") },
    { href: "tel:+34620463759", label: t("callJose") },
    { href: "tel:+34627187274", label: t("callSergio") },
  ];
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  const shouldRestoreFocus = useRef(false);
  const hasMounted = useRef(false);

  const closeMenu = useCallback((restoreFocus = false) => {
    shouldRestoreFocus.current = restoreFocus;
    setOpen(false);
  }, []);

  useEffect(() => {
    closeMenu(false);

    // The menu locks the body at its current offset while it is open. On a
    // route change, restore the destination at its beginning instead of that
    // saved offset. Deferring one frame lets the menu cleanup finish first.
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, closeMenu]);

  useEffect(() => {
    let frame = 0;
    const updateScrolledState = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 32;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      if (shouldRestoreFocus.current) triggerRef.current?.focus();
      shouldRestoreFocus.current = false;
      return;
    }

    scrollPosition.current = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const body = document.body;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition.current}px`;
    body.style.width = "100%";
    body.style.paddingRight = `${scrollbarWidth}px`;

    const firstLink = overlayRef.current?.querySelector<HTMLElement>(
      "[data-menu-autofocus]",
    );
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = [
        triggerRef.current,
        ...Array.from(
          overlayRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
        ),
      ].filter(
        (element): element is HTMLElement =>
          element !== null && !element.hasAttribute("disabled"),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.paddingRight = previous.paddingRight;
      window.scrollTo(0, scrollPosition.current);
    };
  }, [open, closeMenu]);

  const isActive = (href: string) => pathname === routePath(href);
  const nextLocale = locale === "es" ? "en" : locale === "en" ? "cs" : "es";
  const switchLocale = () => {
    document.cookie = `web7_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
  };
  const basePath = pathname.replace(/^\/(en|cs)(?=\/|$)/, "") || "/";
  const languageHref = nextLocale === "es" ? basePath : `/${nextLocale}${basePath}`;
  const overlayTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.48, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <header className="site-header" data-scrolled={scrolled || open}>
      <div className="site-header__frame">
        <nav className="site-header__bar" aria-label="Primary navigation">
          <Link href={localize("/")} className="site-header__brand" aria-label="Web7 home">
            WEB7
          </Link>

          <div className="site-header__quick-links" aria-label="Quick links">
            {navigationItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={localize(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="site-header__quick-link"
              >
                {t(`nav.${item.key}.label`)}
              </Link>
            ))}
          </div>

          <div className="site-header__controls">
            <Link href={localize("/contact")} className="site-header__contact-link">
              <span>{t("start")}</span>
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
            </Link>
            <a
              href={languageHref}
              onClick={switchLocale}
              className="text-[10px] uppercase tracking-[.12em] text-white/75 transition-colors hover:text-[#ff0000]"
              aria-label={t("switch")}
            >
              {locale.toUpperCase()}
            </a>
            <SpecularButton
              ref={triggerRef}
              type="button"
              className="site-header__menu-button"
              size="custom"
              radius={11}
              tint="#ffffff"
              tintOpacity={0.06}
              textColor="#f3efe8"
              lineColor="#ffffff"
              baseColor="#333333"
              onClick={() => (open ? closeMenu(true) : setOpen(true))}
              aria-label={open ? t("close") : t("open")}
              aria-expanded={open}
              aria-controls="site-navigation-overlay"
            >
              <span className="site-header__menu-label">{open ? t("closeLabel") : t("menu")}</span>
              <span className="site-header__menu-glyph" aria-hidden="true">
                <i />
                <i />
              </span>
            </SpecularButton>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            id="site-navigation-overlay"
            className="site-menu"
            initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={overlayTransition}
          >
            <div className="site-menu__glow" aria-hidden="true" />
            <div className="site-menu__grid" aria-hidden="true" />
            <div className="site-menu__content">
              <div className="site-menu__topline">
                <span>{t("navigation")}</span>
                <span>Web7 / 28.00° N</span>
              </div>

              <div className="site-menu__main">
                <nav className="site-menu__primary" aria-label="Site navigation">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      className="site-menu__item-wrap"
                      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      transition={
                        reduceMotion
                          ? { duration: 0.01 }
                          : { duration: 0.42, delay: 0.13 + index * 0.055, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      <Link
                        href={localize(item.href)}
                        className="site-menu__item"
                        onClick={() => closeMenu(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        data-menu-autofocus={index === 0 ? true : undefined}
                      >
                        <span className="site-menu__item-index">{item.index}</span>
                        <span className="site-menu__item-label" data-label={t(`nav.${item.key}.label`)}>
                          {t(`nav.${item.key}.label`)}
                        </span>
                        <span className="site-menu__item-detail">{t(`nav.${item.key}.detail`)}</span>
                        <ArrowUpRight className="site-menu__item-arrow" aria-hidden="true" strokeWidth={1.3} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.aside
                  className="site-menu__aside"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={reduceMotion ? { duration: 0.01 } : { duration: 0.42, delay: 0.43, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <p className="site-menu__eyebrow">Web7 Studio</p>
                    <p className="site-menu__statement">
                      {t("statement")}
                    </p>
                  </div>
                  <div className="site-menu__contact-block">
                    <p className="site-menu__eyebrow">{t("contact")}</p>
                    <a href="mailto:web7canarias@gmail.com">web7canarias@gmail.com</a>
                    <p>Canary Islands, Spain</p>
                  </div>
                </motion.aside>
              </div>

              <motion.div
                className="site-menu__footer"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={reduceMotion ? { duration: 0.01 } : { duration: 0.36, delay: 0.51 }}
              >
                <span>{t("built")}</span>
                <div className="site-menu__socials">
                  {socialLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
                <Link href={localize("/contact")} className="site-menu__enquiry" onClick={() => closeMenu(false)}>
                  {t("enquiry")} <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
