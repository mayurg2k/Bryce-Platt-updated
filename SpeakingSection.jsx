import React from "react";
import { speakingTopics, speakingFormats } from "../../mock";
import { Link } from "react-router-dom";
import { Mic, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

export default function SpeakingSection() {
  return (
    <section className="py-24 lg:py-32 paper-alt border-y border-[#D8CFBE]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-4">Section V · Speaking</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink editorial-heading">
              Executive briefings and conference <em className="italic font-light">keynotes</em>.
            </h2>
            <p className="mt-6 ink-muted leading-relaxed max-w-md">
              Bryce regularly presents on drug channels, PBM economics, Medicare, specialty pharmacy, and healthcare policy — for boards, health plans, and industry associations.
            </p>
            <div className="mt-8 relative overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,28,51,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwwfHx8fDE3ODMyMDM5MDl8MA&ixlib=rb-4.1.0&q=85"
                alt="Speaking engagement"
                className="w-full aspect-[4/3] object-cover grayscale-[20%]"
              />
              <div className="absolute bottom-4 left-4 bg-[#F6F1E7] px-3 py-1.5 text-[10px] font-mono-editorial ink">ASEMBIA 2025 · LAS VEGAS</div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="eyebrow ink mb-4">Signature Topics</div>
              <ul className="divide-y divide-[#D8CFBE] border-y border-[#D8CFBE]">
                {speakingTopics.map((t, i) => (
                  <li key={t} className="group flex items-center gap-6 py-5 transition-all hover:pl-2 duration-500">
                    <span className="font-mono-editorial text-xs ink-muted w-8">{String(i + 1).padStart(2, "0")}</span>
                    <Mic className="w-4 h-4 ink-muted flex-shrink-0" />
                    <span className="font-serif text-xl lg:text-2xl ink leading-tight flex-1">{t}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ink" />
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10">
                <div className="eyebrow ink mb-4">Formats</div>
                <div className="flex flex-wrap gap-2">
                  {speakingFormats.map((f) => (
                    <span key={f} className="px-4 py-2 border border-[#0B1C33] text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors cursor-default">{f}</span>
                  ))}
                </div>
                <div className="mt-10 flex gap-4">
                  <Link to="/speaking" className="inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-6 py-3 text-sm hover:bg-[#132a4a] transition-colors">
                    Speaking Topics <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 border border-[#0B1C33] px-6 py-3 text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors">
                    Book Bryce
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
