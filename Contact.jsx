import React, { useState } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", topic: "General inquiry", message: "" });
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    toast({ title: "Message sent.", description: "Bryce will respond within 2 business days." });
    setForm({ name: "", email: "", org: "", topic: "General inquiry", message: "" });
  };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Contact</div>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[0.98] ink editorial-heading">
              Let&rsquo;s start the <em className="italic font-light">conversation</em>.
            </h1>
            <p className="mt-8 ink-muted text-lg leading-relaxed max-w-md">
              Whether you&rsquo;re interested in speaking engagements, collaborations, media opportunities, or healthcare discussions, I&rsquo;d be happy to connect.
            </p>
            <div className="mt-10 space-y-5">
              <a href="mailto:hello@bryceplatt.com" className="flex items-center gap-3 ink hover:opacity-70">
                <Mail className="w-5 h-5" /> hello@bryceplatt.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 ink hover:opacity-70">
                <Linkedin className="w-5 h-5" /> LinkedIn · 37,000+ followers
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 border border-[#D8CFBE] p-8 lg:p-10 bg-[#F6F1E7]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="eyebrow ink-muted">Name</label>
                <input value={form.name} onChange={set("name")} className="mt-2 w-full bg-transparent border-b border-[#D8CFBE] focus:border-[#0B1C33] outline-none py-3 text-sm ink" placeholder="Your name" />
              </div>
              <div>
                <label className="eyebrow ink-muted">Email</label>
                <input required type="email" value={form.email} onChange={set("email")} className="mt-2 w-full bg-transparent border-b border-[#D8CFBE] focus:border-[#0B1C33] outline-none py-3 text-sm ink" placeholder="you@company.com" />
              </div>
              <div>
                <label className="eyebrow ink-muted">Organization</label>
                <input value={form.org} onChange={set("org")} className="mt-2 w-full bg-transparent border-b border-[#D8CFBE] focus:border-[#0B1C33] outline-none py-3 text-sm ink" placeholder="Company / association" />
              </div>
              <div>
                <label className="eyebrow ink-muted">Topic</label>
                <select value={form.topic} onChange={set("topic")} className="mt-2 w-full bg-transparent border-b border-[#D8CFBE] focus:border-[#0B1C33] outline-none py-3 text-sm ink">
                  <option>General inquiry</option>
                  <option>Speaking engagement</option>
                  <option>Media / podcast</option>
                  <option>Executive briefing</option>
                  <option>Research collaboration</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="eyebrow ink-muted">Message</label>
              <textarea required value={form.message} onChange={set("message")} rows={5} className="mt-2 w-full bg-transparent border-b border-[#D8CFBE] focus:border-[#0B1C33] outline-none py-3 text-sm ink resize-none" placeholder="Tell Bryce a bit about your event, publication, or question..." />
            </div>
            <button className="mt-8 inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-7 py-4 text-sm hover:bg-[#132a4a]">
              Send Message <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
