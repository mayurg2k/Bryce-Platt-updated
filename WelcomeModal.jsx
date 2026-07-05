import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { ArrowRight, X, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function WelcomeModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "Welcome aboard.", description: "Your first brief will arrive Monday." });
    onClose(true);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose(false)}>
      <DialogContent className="max-w-2xl p-0 border-0 overflow-hidden bg-[#F6F1E7]">
        <div className="relative">
          <button onClick={() => onClose(false)} aria-label="Close" className="absolute right-4 top-4 ink-muted hover:ink z-10">
            <X className="w-5 h-5" />
          </button>
          <div className="p-10 lg:p-14">
            <div className="eyebrow">The Drug Channels Brief · Vol. IX</div>
            <h2 className="font-serif text-3xl lg:text-5xl mt-4 leading-[1.05] ink">
              Stay ahead of U.S.<br/>drug channels.
            </h2>
            <p className="ink-muted mt-5 max-w-md text-[15px] leading-relaxed">
              One concise briefing. Delivered regularly. Helping healthcare leaders understand pharmacy economics, PBMs, Medicare, reimbursement, specialty pharmacy, and healthcare policy.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm ink">
              <li className="flex items-center gap-2.5"><Sparkles className="w-3.5 h-3.5 ink-muted" /> One idea per week, unpacked with clarity</li>
              <li className="flex items-center gap-2.5"><Clock className="w-3.5 h-3.5 ink-muted" /> 5–10 minute read, written for busy executives</li>
              <li className="flex items-center gap-2.5"><ShieldCheck className="w-3.5 h-3.5 ink-muted" /> Evidence-based. No spam. Unsubscribe anytime.</li>
            </ul>

            <form onSubmit={submit} className="mt-7 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@work-email.com"
                className="flex-1 bg-transparent border border-[#D8CFBE] focus:border-[#0B1C33] outline-none px-4 py-3 text-sm ink placeholder:text-[#8a9bb6]"
                required
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-6 py-3 text-sm tracking-wide hover:bg-[#132a4a]">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <button onClick={() => onClose(false)} className="mt-6 text-sm ink-muted hover:ink link-underline">
              Continue to website →
            </button>
            <div className="mt-8 pt-6 border-t border-[#D8CFBE] flex items-center gap-6 text-xs ink-muted font-mono-editorial">
              <span>37,000+ readers</span>
              <span>·</span>
              <span>Weekly · 5–10 min</span>
              <span>·</span>
              <span>Evidence-first</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
