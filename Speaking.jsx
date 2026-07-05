import React from "react";
import { Link } from "react-router-dom";
import { speakingTopics, speakingFormats, speakingEngagements } from "../mock";
import { Mic, ArrowUpRight, Calendar } from "lucide-react";

export default function Speaking() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-4">Speaking & Executive Education</div>
          <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-5xl">
            Keynotes, panels, and <em className="italic font-light">executive briefings</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg ink-muted leading-relaxed">
            Practical, framework-driven presentations for healthcare boards, health plans, industry associations, and executive teams.
          </p>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-8">Signature Topics</div>
          <ul className="grid md:grid-cols-2 gap-4">
            {speakingTopics.map((t, i) => (
              <li key={t} className="group flex items-center gap-5 bg-[#F6F1E7] border border-[#D8CFBE] p-6 hover:border-[#0B1C33] transition-colors">
                <span className="font-mono-editorial text-xs ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <Mic className="w-4 h-4 ink-muted" />
                <span className="font-serif text-xl ink flex-1">{t}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            ))}
          </ul>

          <div className="mt-14 eyebrow mb-4">Formats</div>
          <div className="flex flex-wrap gap-2">
            {speakingFormats.map((f) => (
              <span key={f} className="px-4 py-2 border border-[#0B1C33] text-sm ink">{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-8">Selected Engagements</div>
          <div className="divide-y divide-[#D8CFBE] border-y border-[#D8CFBE]">
            {speakingEngagements.map((e) => (
              <div key={e.event + e.year} className="grid lg:grid-cols-12 gap-6 py-6 items-baseline">
                <div className="lg:col-span-1 font-mono-editorial text-sm ink-muted">{e.year}</div>
                <div className="lg:col-span-6 font-serif text-2xl ink">{e.event}</div>
                <div className="lg:col-span-3 ink-muted">{e.role}</div>
                <div className="lg:col-span-2 text-sm ink-muted flex items-center gap-2"><Calendar className="w-4 h-4" /> {e.location}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-7 py-4 text-sm hover:bg-[#132a4a]">
              Book Bryce for Your Event <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
