import React from "react";
import { frameworks } from "../mock";
import { LayoutGrid, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function FrameworkLibrary() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow mb-4">Framework Library · Visual Models</div>
            <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-4xl">
              Frameworks that make healthcare <em className="italic font-light">understandable</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg ink-muted leading-relaxed">
              Practical mental models designed to simplify pharmacy economics, drug channels, and healthcare policy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((f, i) => (
              <Reveal key={f.id} delay={i * 60}>
                <div className="group bg-[#F6F1E7] border border-[#D8CFBE] overflow-hidden hover:border-[#0B1C33] hover:shadow-[0_40px_80px_-30px_rgba(11,28,51,0.35)] hover:-translate-y-1 transition-all duration-500">
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 aspect-square md:aspect-auto bg-[#EFE7D5] border-b md:border-b-0 md:border-r border-[#D8CFBE] overflow-hidden">
                      <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </div>
                    <div className="md:col-span-3 p-8">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-editorial text-xs ink-muted">Framework {f.number}</span>
                        <LayoutGrid className="w-4 h-4 ink-muted" />
                      </div>
                      <h3 className="font-serif text-2xl mt-4 ink leading-tight">{f.title}</h3>
                      <p className="mt-3 text-sm ink-muted leading-relaxed">{f.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {f.tags.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-1 border border-[#D8CFBE] ink-muted">{t}</span>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-[#D8CFBE] flex items-center justify-between">
                        <Link to="/newsletter" className="inline-flex items-center gap-2 ink text-sm link-underline">
                          Read overview <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <button className="inline-flex items-center gap-2 ink-muted text-sm hover:ink">
                          <Download className="w-4 h-4" /> PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
