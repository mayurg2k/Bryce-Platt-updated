import React, { useEffect, useState } from "react";

export default function ScrollProgress({ target }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = target?.current || document.documentElement;
      const total = (el.scrollHeight || document.documentElement.scrollHeight) - window.innerHeight;
      const y = window.scrollY;
      setP(Math.max(0, Math.min(1, y / Math.max(1, total))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [target]);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none">
      <div className="h-full bg-[#0B1C33]" style={{ width: `${p * 100}%`, transition: "width 120ms linear" }} />
    </div>
  );
}
