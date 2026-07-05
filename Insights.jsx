import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { featuredInsights, topics } from "../mock";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const filters = ["All", ...topics.map((t) => t.name)];

export default function Insights() {
  const [active, setActive] = useState("All");
  const list = useMemo(() => {
    if (active === "All") return featuredInsights;
    return featuredInsights.filter((a) => a.category === active);
  }, [active]);

  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-4">Insights · The Analysis Archive</div>
          <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-4xl">
            Healthcare <em className="italic font-light">insights</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg ink-muted leading-relaxed">
            Analysis of the policies, incentives, and market dynamics shaping pharmacy and healthcare.
          </p>

          <div className="mt-14 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-sm border transition-colors ${
                  active === f ? "bg-[#0B1C33] text-[#F6F1E7] border-[#0B1C33]" : "border-[#D8CFBE] ink hover:border-[#0B1C33]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((a, i) => (
              <Reveal key={a.id} delay={i * 50}>
                <Link to={`/insights/${a.id}`} className="group card-hover block">
                  <div className="overflow-hidden bg-[#EFE7D5] border border-[#D8CFBE] aspect-[4/3]">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-[11px]">
                    <span className="eyebrow ink">{a.category}</span>
                    <span className="hairline flex-1" />
                    <span className="font-mono-editorial ink-muted">{a.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-3 ink leading-tight group-hover:opacity-70">{a.title}</h3>
                  <p className="ink-muted text-sm mt-3 leading-relaxed">{a.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 ink text-sm">
                    Read Analysis <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </Reveal>
            ))}
            {list.length === 0 && <p className="ink-muted">No articles in this category yet.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
