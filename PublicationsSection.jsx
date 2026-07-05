import React from "react";
import { publications } from "../../mock";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function PublicationsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-4">Section IV · Research & Publications</div>
              <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink editorial-heading">
                Original reports and industry-leading <em className="italic font-light">research</em>.
              </h2>
            </div>
            <p className="lg:col-span-4 ink-muted leading-relaxed">
              White papers, annual reports, and collaborative research exploring the economics of U.S. healthcare.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link to="/research" className="group block border border-[#D8CFBE] bg-[#F6F1E7] card-hover hover:border-[#0B1C33] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(11,28,51,0.35)] hover:-translate-y-1">
                <div className="aspect-[4/3] bg-[#EFE7D5] border-b border-[#D8CFBE] overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="absolute top-3 left-3 bg-[#F6F1E7]/95 backdrop-blur px-2.5 py-1 text-[10px] font-mono-editorial tracking-widest ink">REPORT</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="eyebrow ink">{p.outlet}</span>
                    <span className="font-mono-editorial ink-muted">{p.date}</span>
                  </div>
                  <h3 className="font-serif text-xl mt-3 ink leading-snug group-hover:opacity-80 transition-opacity">{p.title}</h3>
                  <p className="text-sm ink-muted mt-3 leading-relaxed line-clamp-2">{p.summary}</p>
                  <div className="mt-5 pt-5 border-t border-[#D8CFBE] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0,2).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 border border-[#D8CFBE] ink-muted">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs ink group-hover:translate-x-0.5 transition-transform">Read Analysis <ArrowUpRight className="w-3.5 h-3.5" /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
