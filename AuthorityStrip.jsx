import React from "react";
import { authorityStats } from "../../mock";
import Reveal from "../Reveal";

export default function AuthorityStrip() {
  return (
    <section className="paper-alt border-y border-[#D8CFBE]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {authorityStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="border-l border-[#0B1C33]/20 pl-5 group">
                <div className="font-serif text-4xl lg:text-5xl ink leading-none group-hover:translate-x-0.5 transition-transform">{s.value}</div>
                <div className="mt-3 text-sm ink font-medium">{s.label}</div>
                <div className="text-xs ink-muted mt-1">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
