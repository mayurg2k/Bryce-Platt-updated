import React, { useEffect, useRef } from "react";

/**
 * <Reveal> - premium scroll-triggered fade+lift.
 * Uses IntersectionObserver, respects prefers-reduced-motion.
 */
export default function Reveal({ as: Tag = "div", delay = 0, y = 24, once = true, className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.style.opacity = "1"; el.style.transform = "none"; return; }

    el.style.opacity = "0";
    el.style.transform = `translate3d(0, ${y}px, 0)`;
    el.style.transition = `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
    el.style.willChange = "opacity, transform";

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          if (once) io.unobserve(el);
        } else if (!once) {
          el.style.opacity = "0";
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -60px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, once]);

  return <Tag ref={ref} className={className} {...rest}>{children}</Tag>;
}
