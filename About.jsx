import React from "react";
import { Link } from "react-router-dom";
import { timeline, values } from "../mock";
import { ArrowUpRight } from "lucide-react";
import OrgLogo from "../components/OrgLogo";
import Reveal from "../components/Reveal";
import { PORTRAIT } from "../assets";

export default function About() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow mb-4">About · The Story Behind the Insights</div>
            <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-4xl">
              From community pharmacy to <em className="italic font-light">national thought leadership</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
              <p className="lg:col-span-7 text-lg lg:text-xl ink-muted leading-relaxed">
                Bryce&rsquo;s career has been dedicated to understanding — and explaining — the systems that shape member access, affordability, and healthcare economics. He built one of the fastest-growing educational brands in healthcare by choosing clarity over commentary and evidence over opinion.
              </p>
              <div className="lg:col-span-5">
                <img src={PORTRAIT} alt="Bryce Platt" className="w-full aspect-[4/5] object-cover object-top shadow-[0_30px_60px_-30px_rgba(11,28,51,0.4)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow mb-8">Career Timeline</div>
          </Reveal>
          <div className="relative">
            <div aria-hidden className="absolute left-[22px] top-2 bottom-2 w-px bg-[#D8CFBE]" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 60}>
                  <div className="grid lg:grid-cols-12 gap-6 items-center relative">
                    <div className="lg:col-span-2 flex items-center gap-4">
                      <div className="relative z-10"><OrgLogo code={t.code} label={t.label} /></div>
                      <div className="font-mono-editorial text-sm ink">{t.year}</div>
                    </div>
                    <div className="lg:col-span-4 font-serif text-2xl ink">{t.label}</div>
                    <div className="lg:col-span-6 ink-muted">{t.detail}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow mb-4">Mission</div>
            <p className="font-serif text-3xl lg:text-5xl leading-[1.1] ink editorial-heading max-w-4xl">
              To make the economics of U.S. healthcare understandable — so leaders can make better decisions that improve affordability, access, and long-term sustainability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal><div className="eyebrow mb-8">Core Values</div></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="border border-[#D8CFBE] bg-[#F6F1E7] p-8 hover:border-[#0B1C33] hover:shadow-[0_20px_40px_-20px_rgba(11,28,51,0.25)] transition-all">
                  <div className="font-mono-editorial text-xs ink-muted">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-serif text-2xl mt-4 ink">{v.title}</h3>
                  <p className="mt-3 text-sm ink-muted leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-wrap gap-4">
          <Link to="/newsletter" className="inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-7 py-4 text-sm hover:bg-[#132a4a]">
            Subscribe to the Newsletter <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/speaking" className="inline-flex items-center gap-2 border border-[#0B1C33] px-7 py-4 text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7]">
            Speaking & Executive Education
          </Link>
        </div>
      </section>
    </div>
  );
}
