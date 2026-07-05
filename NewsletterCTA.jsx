import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock, Mail, Sparkles } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import Reveal from "../Reveal";

const bullets = [
  { icon: Sparkles, title: "One idea per week", body: "A single framework, unpacked with clarity." },
  { icon: Clock, title: "5–10 minute read", body: "Written for busy executives." },
  { icon: Mail, title: "Direct to inbox", body: "No feed algorithms. No noise." },
];

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("bp_subscribed", "1");
    toast({ title: "Subscribed.", description: "Your first brief will arrive Monday." });
    setEmail("");
  };

  return (
    <section className="paper-dark py-24 lg:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#F6F1E7 1px, transparent 1px)",
        backgroundSize: "1px 44px",
      }} />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-[#B7C3D5]">The Drug Channels Brief · Vol. IX</div>
              <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] mt-6 text-[#F6F1E7] editorial-heading">
                A weekly briefing on the <em className="italic font-light">economics</em> of healthcare.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-[#B7C3D5] text-lg leading-relaxed max-w-xl">
                Read by directors, actuaries, journalists, and policymakers. Bryce distills the week&rsquo;s most consequential pharmacy and drug channel news into one clear framework you can bring to your Monday meeting.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-10 space-y-5">
                {bullets.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#1e3556] flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-4 h-4 text-[#F6F1E7]" />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-[#F6F1E7]">{b.title}</div>
                      <div className="text-sm text-[#8697b3] mt-0.5">{b.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={260}>
              <div className="bg-[#F6F1E7] p-8 lg:p-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between">
                  <div className="eyebrow">Issue No. 217</div>
                  <div className="font-mono-editorial text-[10px] ink-muted">July 21, 2025</div>
                </div>
                <h3 className="font-serif text-2xl ink mt-4 leading-tight">
                  “Why PBM transparency reform rarely lowers prices.”
                </h3>
                <div className="mt-4 rule" />
                <ul className="mt-4 space-y-2 text-sm ink-muted">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 ink mt-0.5" /> The incentive map behind the headlines</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 ink mt-0.5" /> One framework: rebates vs. net cost</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 ink mt-0.5" /> What to watch next quarter</li>
                </ul>
                <form onSubmit={submit} className="mt-6 space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@work-email.com"
                    className="w-full bg-transparent border border-[#D8CFBE] focus:border-[#0B1C33] outline-none px-4 py-3 text-sm ink placeholder:text-[#8a9bb6]"
                    required
                  />
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-6 py-4 text-sm tracking-wide hover:bg-[#132a4a] transition-colors">
                    Read This Week&rsquo;s Issue <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
                <div className="mt-5 flex items-center justify-between text-[10px] font-mono-editorial ink-muted">
                  <span>37,000+ subscribers</span>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
