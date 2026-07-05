import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, TrendingUp, BookOpen, Sparkles } from "lucide-react";
import Reveal from "../Reveal";
import { PORTRAIT } from "../../assets";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative grid backdrop */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(#D8CFBE 1px, transparent 1px), linear-gradient(90deg, #D8CFBE 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 65% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 65% 40%, black 20%, transparent 70%)",
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="eyebrow">Vol. IX · Digital Headquarters</span>
                <span className="hairline flex-1" />
                <span className="eyebrow">Est. 2021</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif text-[46px] sm:text-[64px] lg:text-[92px] leading-[0.98] tracking-[-0.02em] ink">
                Understanding the <em className="italic font-light">economics</em> behind U.S. healthcare.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed ink-muted">
                Helping healthcare leaders understand the financial incentives shaping pharmacy, Medicare, PBMs, specialty pharmacy, reimbursement, and healthcare policy — through practical frameworks and evidence-based analysis.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/newsletter" className="group inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-7 py-4 text-sm tracking-wide hover:bg-[#132a4a] transition-colors shadow-[0_10px_30px_-12px_rgba(11,28,51,0.5)]">
                  Subscribe to the Newsletter
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link to="/insights" className="inline-flex items-center gap-2 border border-[#0B1C33] px-7 py-4 text-sm tracking-wide hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors">
                  Explore Latest Insights
                </Link>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F6F1E7] bg-[#0B1C33] flex items-center justify-center text-[10px] font-mono-editorial text-[#F6F1E7]">
                      {["KH","MR","JS","AL"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-xs ink-muted">
                  <span className="font-mono-editorial ink">37,000+</span> healthcare leaders read Bryce weekly
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} y={40}>
              <div className="relative">
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EFE7D5] shadow-[0_40px_80px_-30px_rgba(11,28,51,0.35)]">
                  <img
                    src={PORTRAIT}
                    alt="Bryce Platt, PharmD"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/30 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F6F1E7]">
                    <div>
                      <div className="font-mono-editorial text-[10px] opacity-80">PORTRAIT · 2025</div>
                      <div className="font-serif text-xl mt-0.5">Bryce Platt, PharmD</div>
                    </div>
                    <div className="text-[10px] font-mono-editorial opacity-80 text-right">DCI<br/>Director</div>
                  </div>
                </div>

                {/* Floating stat: followers */}
                <div className="absolute -top-5 -left-6 hidden sm:block bg-[#F6F1E7] border border-[#D8CFBE] p-4 pr-6 shadow-[0_14px_40px_-14px_rgba(11,28,51,0.25)] w-[220px] animate-[fadeUp_1s_ease_.5s_both]">
                  <div className="flex items-center gap-2 eyebrow"><TrendingUp className="w-3.5 h-3.5" /> LinkedIn</div>
                  <div className="font-serif text-3xl ink mt-2 leading-none">37,000+</div>
                  <div className="text-[11px] ink-muted mt-1">Healthcare leaders following</div>
                </div>

                {/* Floating stat: streak */}
                <div className="absolute -bottom-6 -right-4 hidden sm:block bg-[#0B1C33] text-[#F6F1E7] p-4 pr-6 shadow-[0_14px_40px_-14px_rgba(11,28,51,0.4)] w-[220px] animate-[fadeUp_1s_ease_.75s_both]">
                  <div className="flex items-center gap-2 eyebrow text-[#B7C3D5]"><Sparkles className="w-3.5 h-3.5" /> Streak</div>
                  <div className="font-serif text-3xl mt-2 leading-none">1,400+</div>
                  <div className="text-[11px] text-[#B7C3D5] mt-1">Days publishing without a break</div>
                </div>

                {/* Floating stat: role */}
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:block bg-[#F6F1E7] border border-[#D8CFBE] p-4 pr-6 shadow-[0_14px_40px_-14px_rgba(11,28,51,0.25)] w-[220px] animate-[fadeUp_1s_ease_1s_both]">
                  <div className="flex items-center gap-2 eyebrow"><BookOpen className="w-3.5 h-3.5" /> Role</div>
                  <div className="font-serif text-lg ink mt-2 leading-tight">Director,<br/>Drug Channels Institute</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={500}>
          <div className="mt-24 flex items-center gap-4">
            <ArrowDown className="w-4 h-4 ink-muted animate-bounce" />
            <span className="eyebrow">Scroll to explore — Insights, Frameworks, Research</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
