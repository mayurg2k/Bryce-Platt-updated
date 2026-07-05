import React from "react";
import { frameworks } from "../../mock";
import { Link } from "react-router-dom";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import Reveal from "../Reveal";

export default function FrameworksSection() {
  return (
    <section className="paper-dark py-24 lg:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#F6F1E7 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-8">
              <div className="eyebrow text-[#B7C3D5] mb-4">Section III · Framework Library</div>
              <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] editorial-heading text-[#F6F1E7]">
                Visual models that <em className="italic font-light">simplify</em> complex systems.
              </h2>
            </div>
            <p className="lg:col-span-4 text-[#B7C3D5] leading-relaxed">
              Practical mental models used across executive briefings, industry reports, and conference keynotes.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((f, i) => (
            <Reveal key={f.id} delay={i * 70}>
              <Link
                to="/frameworks"
                className="group relative block border border-[#1e3556] overflow-hidden bg-[#0B1C33] transition-all duration-500 hover:border-[#F6F1E7] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#0F2340] relative border-b border-[#1e3556]">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B1C33] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>
                <div className="p-7 relative">
                  <div className="flex items-start justify-between">
                    <span className="font-mono-editorial text-xs text-[#8697b3]">Framework {f.number}</span>
                    <LayoutGrid className="w-4 h-4 text-[#8697b3] group-hover:text-[#F6F1E7] transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl lg:text-[22px] mt-4 leading-snug text-[#F6F1E7]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#B7C3D5] leading-relaxed line-clamp-2">{f.summary}</p>
                  <div className="mt-6 pt-5 border-t border-[#1e3556] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {f.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 border border-[#1e3556] text-[#B7C3D5]">{t}</span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#B7C3D5] group-hover:text-[#F6F1E7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex justify-center">
            <Link to="/frameworks" className="inline-flex items-center gap-2 border border-[#F6F1E7] px-7 py-4 text-sm tracking-wide text-[#F6F1E7] hover:bg-[#F6F1E7] hover:text-[#0B1C33] transition-colors">
              View Full Framework Library <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
