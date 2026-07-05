import React from "react";
import { featuredInsights } from "../../mock";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function FeaturedInsights() {
  const [hero, ...rest] = featuredInsights;
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="eyebrow mb-4">Section I · Latest Analysis</div>
              <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink max-w-3xl editorial-heading">
                Evidence-based perspectives on the forces shaping healthcare today.
              </h2>
            </div>
            <Link to="/insights" className="eyebrow inline-flex items-center gap-2 ink hover:opacity-70">
              View all insights <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal delay={120} className="lg:col-span-7">
            <Link to={`/insights/${hero.id}`} className="group card-hover block">
              <div className="relative overflow-hidden bg-[#EFE7D5] aspect-[16/10] flex items-center justify-center border border-[#D8CFBE]">
                <img src={hero.image} alt={hero.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <div className="absolute top-4 left-4 bg-[#F6F1E7] px-3 py-1 text-[10px] font-mono-editorial tracking-widest ink">FEATURED</div>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs">
                <span className="eyebrow ink">{hero.category}</span>
                <span className="hairline flex-1" />
                <span className="font-mono-editorial ink-muted">{hero.date} · {hero.readTime}</span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl mt-4 ink leading-tight group-hover:opacity-80 transition-opacity">
                {hero.title}
              </h3>
              <p className="ink-muted mt-4 max-w-2xl leading-relaxed">{hero.summary}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm ink font-medium">
                Read Analysis <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </Reveal>

          <Reveal delay={240} className="lg:col-span-5">
            <div className="flex flex-col divide-y divide-[#D8CFBE]">
              {rest.slice(0, 4).map((a) => (
                <Link to={`/insights/${a.id}`} key={a.id} className="group py-6 flex gap-5 first:pt-0 last:pb-0 hover:pl-2 transition-[padding] duration-500">
                  <div className="w-28 h-28 flex-shrink-0 bg-[#EFE7D5] border border-[#D8CFBE] overflow-hidden">
                    <img src={a.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="eyebrow ink">{a.category}</span>
                      <span className="font-mono-editorial ink-muted">{a.readTime}</span>
                    </div>
                    <h4 className="font-serif text-lg mt-2 ink leading-snug group-hover:opacity-70 transition-opacity">{a.title}</h4>
                    <div className="mt-2 text-[11px] ink-muted">Read Analysis →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
