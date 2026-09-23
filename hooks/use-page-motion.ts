"use client";

import { useEffect, useRef, useState } from "react";

const revealTargets = [
  ".section-heading", ".about-grid > div", ".values-strip > div",
  ".cycle-card", ".event-card", ".gallery-item", ".fees-table",
  ".fee-card", ".enrollment-notes > article", ".contact-panel",
].join(",");

export function usePageMotion(galleryExpanded: boolean) {
  const contentRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const revealed = useRef(new WeakSet<Element>());
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const root = contentRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        if (revealed.current.has(element)) continue;
        revealed.current.add(element);
        if (preference.matches || !element.animate || element.contains(document.activeElement)) continue;
        const siblings = Array.from(element.parentElement?.children ?? []);
        const stagger = element.matches(".cycle-card, .event-card, .gallery-item, .enrollment-notes > article, .values-strip > div");
        const animation = element.animate(
          [{ opacity: 0, transform: "translate3d(0, 22px, 0)" }, { opacity: 1, transform: "translate3d(0, 0, 0)" }],
          {
            duration: 620,
            delay: stagger ? (Math.max(0, siblings.indexOf(element)) % 3) * 65 : 0,
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "backwards",
          },
        );
        animations.set(element, animation);
        animation.onfinish = () => animations.delete(element);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    root.querySelectorAll(revealTargets).forEach(element => {
      if (!revealed.current.has(element)) observer.observe(element);
    });
    const cancelAnimations = () => {
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const preferenceChanged = () => { if (preference.matches) cancelAnimations(); };
    // Keep focused controls visible, even when a staggered animation is pending.
    const focusChanged = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const [element, animation] of animations) {
        if (element.contains(event.target)) {
          animation.cancel();
          animations.delete(element);
        }
      }
    };
    preference.addEventListener("change", preferenceChanged);
    root.addEventListener("focusin", focusChanged);
    return () => {
      observer.disconnect();
      cancelAnimations();
      preference.removeEventListener("change", preferenceChanged);
      root.removeEventListener("focusin", focusChanged);
    };
  }, [galleryExpanded]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>(":scope > section[id]"));
    let frame = 0;
    let lastActive = "";
    let lastScrolled: boolean | undefined;
    let lastBackToTop: boolean | undefined;
    const update = () => {
      frame = 0;
      const position = window.scrollY;
      const distance = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const progress = distance ? Math.min(1, Math.max(0, position / distance)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      let active = "accueil";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) active = section.id;
      }
      if (distance > 0 && position >= distance - 2) active = sections[sections.length - 1]?.id ?? active;
      if (active !== lastActive) { lastActive = active; setActiveSection(active); }
      const hasScrolled = position > 20;
      if (hasScrolled !== lastScrolled) { lastScrolled = hasScrolled; setScrolled(hasScrolled); }
      const backToTop = position > 700;
      if (backToTop !== lastBackToTop) { lastBackToTop = backToTop; setShowBackToTop(backToTop); }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    resizeObserver?.observe(root);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { contentRef, progressRef, activeSection, scrolled, showBackToTop };
}
