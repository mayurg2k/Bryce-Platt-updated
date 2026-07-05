import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const benefits = [
  "Executive summaries of the week's healthcare developments",
  "Framework-driven analysis of drug channels, PBMs, and Medicare",
  "Policy interpretation with operational implications",
  "Access to Bryce's evergreen visual library",
  "Practical takeaways you can bring to your next meeting",
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("bp_subscribed", "1");
    toast({ title: "You're subscribed.", description: "Welcome to The Drug Channels Brief." });
    setEmail(""); setName("");
  };

  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">The Drug Channels Brief</div>
            <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading">
              Insight, weekly. <em className="italic font-light">Evidence-first.</em>
            </h1>
            <p className="mt-8 text-lg ink-muted leading-relaxed max-w-xl">
              A weekly analysis helping healthcare leaders understand pharmacy economics, reimbursement, and policy.
            </p>
            <ul className="mt-10 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 ink flex-shrink-0 mt-0.5" />
                  <span className="ink leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="paper-dark p-10">
              <div className="eyebrow text-[#B7C3D5]">Subscribe</div>
              <h3 className="font-serif text-3xl mt-3 text-[#F6F1E7] leading-tight">Join 37,000+ healthcare professionals.</h3>
              <form onSubmit={submit} className="mt-8 space-y-4">
                <div>
                  <label className="eyebrow text-[#B7C3D5]">First Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full bg-transparent border-b border-[#3a4d6b] focus:border-[#F6F1E7] outline-none py-3 text-sm text-[#F6F1E7] placeholder:text-[#7a8aa3]" placeholder="Alex" />
                </div>
                <div>
                  <label className="eyebrow text-[#B7C3D5]">Work Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full bg-transparent border-b border-[#3a4d6b] focus:border-[#F6F1E7] outline-none py-3 text-sm text-[#F6F1E7] placeholder:text-[#7a8aa3]" placeholder="alex@company.com" />
                </div>
                <button className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-[#F6F1E7] text-[#0B1C33] px-6 py-4 text-sm tracking-wide hover:bg-white">
                  Subscribe <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-[#8697b3] mt-6">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
