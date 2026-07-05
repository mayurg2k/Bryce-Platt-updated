import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/insights", label: "Insights" },
  { to: "/frameworks", label: "Frameworks" },
  { to: "/research", label: "Research" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/speaking", label: "Speaking" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${scrolled ? "bg-[#F6F1E7]/90 border-b border-[#D8CFBE]" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-[#0B1C33] text-[#F6F1E7] flex items-center justify-center font-serif text-lg">B</div>
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-tight ink">Bryce Platt</div>
            <div className="eyebrow text-[10px]">PharmD · Healthcare Economist</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm tracking-wide link-underline transition-colors ${isActive ? "ink" : "ink-muted hover:ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="text-sm ink-muted hover:ink link-underline">Contact</Link>
          <Link
            to="/newsletter"
            className="group inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-5 py-2.5 text-sm tracking-wide hover:bg-[#132a4a] transition-colors"
          >
            Subscribe
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <button className="lg:hidden ink" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#D8CFBE] bg-[#F6F1E7]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 ink text-base">
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 ink text-base">Contact</Link>
            <Link to="/newsletter" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-5 py-3 text-sm">
              Subscribe <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
