import React from "react";
import { publications } from "../mock";
import { FileText, ArrowUpRight } from "lucide-react";

export default function Research() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-4">Research & Publications</div>
          <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-4xl">
            The <em className="italic font-light">research</em> archive.
          </h1>
          <p className="mt-8 max-w-2xl text-lg ink-muted leading-relaxed">
            Original reports, white papers, and collaborative industry publications on U.S. healthcare economics.
          </p>

          <div className="mt-14 divide-y divide-[#D8CFBE] border-y border-[#D8CFBE]">
            {publications.map((p, i) => (
              <div key={p.id} className="grid lg:grid-cols-12 gap-6 py-10">
                <div className="lg:col-span-1 font-mono-editorial text-xs ink-muted">{String(i + 1).padStart(2, "0")}</div>
                <div className="lg:col-span-3">
                  <div className="eyebrow ink">{p.outlet}</div>
                  <div className="font-mono-editorial text-xs ink-muted mt-2">{p.date}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 border border-[#D8CFBE] ink-muted">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="font-serif text-3xl ink leading-tight">{p.title}</h3>
                  <p className="ink-muted mt-3 leading-relaxed">{p.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 ink text-sm link-underline">
                    <FileText className="w-4 h-4" /> Read publication <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
