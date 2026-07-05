import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight, Rss, Mic, LayoutGrid, BookOpen, FileText, MessageSquare } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { PORTRAIT } from "../assets";

const topicsLinks = ["Drug Channels", "PBMs", "Medicare", "Specialty Pharmacy", "Drug Pricing", "340B", "Employer Benefits", "Healthcare Policy"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("bp_subscribed", "1");
    toast({ title: "You're on the list.", description: "Confirmation sent to " + email });
    setEmail("");
  };

  return (
    <footer className="paper-dark mt-32 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#F6F1E7 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }} />

      {/* Masthead */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-14 border-b border-[#1e3556]">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow text-[#B7C3D5]">The Drug Channels Brief</div>
            <h3 className="font-serif text-4xl lg:text-6xl mt-4 leading-[1.02] text-[#F6F1E7]">
              Read by 37,000+ <em className="italic font-light">healthcare leaders</em>.
            </h3>
            <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@work-email.com"
                className="flex-1 bg-transparent border border-[#3a4d6b] focus:border-[#F6F1E7] outline-none px-4 py-3 text-sm text-[#F6F1E7] placeholder:text-[#7a8aa3]"
                required
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#F6F1E7] text-[#0B1C33] px-6 py-3 text-sm tracking-wide hover:bg-white transition-colors">
                Subscribe <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-[#8697b3] mt-3">No spam. Unsubscribe anytime.</p>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <div className="flex items-center gap-5">
              <img src={PORTRAIT} alt="Bryce" className="w-16 h-16 object-cover object-top rounded-full border border-[#1e3556]" />
              <div>
                <div className="font-serif text-2xl text-[#F6F1E7] leading-tight">Bryce Platt, PharmD</div>
                <div className="text-xs text-[#8697b3] mt-1">Director, Drug Channels Institute</div>
                <div className="flex items-center gap-3 mt-3">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 border border-[#3a4d6b] hover:border-[#F6F1E7] flex items-center justify-center text-[#F6F1E7] transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                  <a href="mailto:hello@bryceplatt.com" className="w-9 h-9 border border-[#3a4d6b] hover:border-[#F6F1E7] flex items-center justify-center text-[#F6F1E7] transition-colors" aria-label="Email"><Mail className="w-4 h-4" /></a>
                  <a href="/newsletter" className="w-9 h-9 border border-[#3a4d6b] hover:border-[#F6F1E7] flex items-center justify-center text-[#F6F1E7] transition-colors" aria-label="Newsletter"><Rss className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial nav grid */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-sm border-b border-[#1e3556]">
        <div>
          <div className="eyebrow text-[#B7C3D5] mb-4 flex items-center gap-2"><BookOpen className="w-3 h-3" /> Topics</div>
          <ul className="space-y-2.5 text-[#B7C3D5]">
            {topicsLinks.map((t) => (
              <li key={t}><Link to="/insights" className="link-underline hover:text-[#F6F1E7]">{t}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[#B7C3D5] mb-4 flex items-center gap-2"><LayoutGrid className="w-3 h-3" /> Frameworks</div>
          <ul className="space-y-2.5 text-[#B7C3D5]">
            <li><Link to="/frameworks" className="link-underline hover:text-[#F6F1E7]">Specialty Pharmacies</Link></li>
            <li><Link to="/frameworks" className="link-underline hover:text-[#F6F1E7]">PBM Incentives</Link></li>
            <li><Link to="/frameworks" className="link-underline hover:text-[#F6F1E7]">Drug Channels</Link></li>
            <li><Link to="/frameworks" className="link-underline hover:text-[#F6F1E7]">Part D Simplified</Link></li>
            <li><Link to="/frameworks" className="link-underline hover:text-[#F6F1E7]">Value Chain</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[#B7C3D5] mb-4 flex items-center gap-2"><FileText className="w-3 h-3" /> Newsletter</div>
          <ul className="space-y-2.5 text-[#B7C3D5]">
            <li><Link to="/newsletter" className="link-underline hover:text-[#F6F1E7]">Subscribe</Link></li>
            <li><Link to="/newsletter" className="link-underline hover:text-[#F6F1E7]">Latest Issue</Link></li>
            <li><Link to="/newsletter" className="link-underline hover:text-[#F6F1E7]">Archive</Link></li>
            <li><Link to="/newsletter" className="link-underline hover:text-[#F6F1E7]">RSS</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[#B7C3D5] mb-4 flex items-center gap-2"><Mic className="w-3 h-3" /> Speaking</div>
          <ul className="space-y-2.5 text-[#B7C3D5]">
            <li><Link to="/speaking" className="link-underline hover:text-[#F6F1E7]">Topics</Link></li>
            <li><Link to="/speaking" className="link-underline hover:text-[#F6F1E7]">Keynotes</Link></li>
            <li><Link to="/speaking" className="link-underline hover:text-[#F6F1E7]">Podcasts</Link></li>
            <li><Link to="/contact" className="link-underline hover:text-[#F6F1E7]">Book Bryce</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[#B7C3D5] mb-4 flex items-center gap-2"><Linkedin className="w-3 h-3" /> LinkedIn</div>
          <ul className="space-y-2.5 text-[#B7C3D5]">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-underline hover:text-[#F6F1E7]">Follow → 37K+</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-underline hover:text-[#F6F1E7]">Daily posts</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-underline hover:text-[#F6F1E7]">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[#B7C3D5] mb-4 flex items-center gap-2"><MessageSquare className="w-3 h-3" /> Contact</div>
          <ul className="space-y-2.5 text-[#B7C3D5]">
            <li><Link to="/contact" className="link-underline hover:text-[#F6F1E7]">General inquiry</Link></li>
            <li><Link to="/contact" className="link-underline hover:text-[#F6F1E7]">Media & press</Link></li>
            <li><Link to="/contact" className="link-underline hover:text-[#F6F1E7]">Speaking</Link></li>
            <li><a href="mailto:hello@bryceplatt.com" className="link-underline hover:text-[#F6F1E7]">hello@bryceplatt.com</a></li>
          </ul>
        </div>
      </div>

      {/* Colophon */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8697b3]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm bg-[#F6F1E7] text-[#0B1C33] flex items-center justify-center font-serif text-sm">B</div>
          <span>© {new Date().getFullYear()} Bryce Platt, PharmD · All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 font-mono-editorial">
          <span>Vol. IX · Iss. 07</span>
          <span>·</span>
          <span>Digital Headquarters</span>
          <span>·</span>
          <span>Made with intention.</span>
        </div>
      </div>
    </footer>
  );
}
