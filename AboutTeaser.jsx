import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import Reveal from "../Reveal";
import { PORTRAIT } from "../../assets";

export default function AboutTeaser() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <img
                src={PORTRAIT}
                alt="Bryce Platt"
                className="w-full aspect-[4/5] object-cover object-top shadow-[0_30px_60px_-30px_rgba(11,28,51,0.4)]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F6F1E7] border border-[#D8CFBE] p-4 max-w-[240px] shadow-lg">
                <Quote className="w-5 h-5 ink-muted" />
                <p className="font-serif ink mt-2 text-sm leading-snug italic">&ldquo;Explain the incentives, and the market makes sense.&rdquo;</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-7">
            <div className="eyebrow mb-4">Section VI · About</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink editorial-heading">
              Meet Bryce <em className="italic font-light">Platt</em>.
            </h2>
            <p className="mt-8 ink-muted text-lg leading-relaxed max-w-2xl">
              Bryce is Director at Drug Channels Institute and one of the leading educators explaining the economics of pharmacy, reimbursement, and healthcare policy. His work helps executives, consultants, providers, researchers, and policymakers understand how incentives shape healthcare markets.
            </p>
            <p className="mt-4 ink-muted leading-relaxed max-w-2xl">
              He has published educational content every day for more than four consecutive years, cultivating one of the fastest-growing healthcare audiences on LinkedIn — not through personality, but through clarity.
            </p>
            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 border border-[#0B1C33] px-7 py-4 text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors">
                Read Full Biography <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
