import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { featuredInsights, articleBody, frameworks } from "../mock";
import { ArrowUpRight, ArrowLeft, Clock, Share2, Bookmark, Link as LinkIcon, LayoutGrid } from "lucide-react";
import Reveal from "../components/Reveal";
import { useToast } from "../hooks/use-toast";

function useReadingProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(1, total));
      setP(Math.max(0, Math.min(1, scrolled / Math.max(1, total))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [ref]);
  return p;
}

export default function Article() {
  const { id } = useParams();
  const article = featuredInsights.find((a) => a.id === id) || featuredInsights[0];
  const articleRef = useRef(null);
  const progress = useReadingProgress(articleRef);
  const [active, setActive] = useState(articleBody[0].id);
  const { toast } = useToast();

  // Track which section is in view
  useEffect(() => {
    const els = articleBody.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const copyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    toast({ title: "Link copied.", description: "Share this article anywhere." });
  };

  const relatedFrameworks = frameworks.slice(0, 3);
  const moreArticles = featuredInsights.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div ref={articleRef}>
      {/* Reading progress bar (article-specific, sits below site progress bar) */}
      <div className="fixed top-[2px] left-0 right-0 h-[2px] z-40 pointer-events-none">
        <div className="h-full bg-[#4A5A72]" style={{ width: `${progress * 100}%`, transition: "width 120ms linear" }} />
      </div>

      {/* Header */}
      <section className="pt-14 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Link to="/insights" className="inline-flex items-center gap-2 eyebrow ink-muted hover:ink">
              <ArrowLeft className="w-3 h-3" /> Back to Insights
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex items-center gap-4 text-xs">
              <span className="eyebrow ink">{article.category}</span>
              <span className="hairline flex-1" />
              <span className="font-mono-editorial ink-muted flex items-center gap-2"><Clock className="w-3 h-3" /> {article.readTime}</span>
              <span className="font-mono-editorial ink-muted">{article.date}</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-6 leading-[1.02] ink editorial-heading max-w-4xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg ink-muted leading-relaxed">{article.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Reveal delay={200}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="w-full bg-[#EFE7D5] border border-[#D8CFBE] shadow-[0_30px_60px_-30px_rgba(11,28,51,0.4)] flex items-center justify-center p-4 md:p-8">
            <img src={article.image} alt="" className="max-h-[540px] w-auto max-w-full object-contain" />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px]">
            <div className="font-mono-editorial ink-muted">Fig. — Original framework by Bryce Platt</div>
            <div className="flex items-center gap-3">
              <button onClick={copyLink} className="inline-flex items-center gap-1.5 ink-muted hover:ink text-xs"><LinkIcon className="w-3.5 h-3.5" /> Copy link</button>
              <button className="inline-flex items-center gap-1.5 ink-muted hover:ink text-xs"><Bookmark className="w-3.5 h-3.5" /> Save</button>
              <button className="inline-flex items-center gap-1.5 ink-muted hover:ink text-xs"><Share2 className="w-3.5 h-3.5" /> Share</button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Body + Sticky TOC */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow mb-4">In this article</div>
              <nav className="space-y-3">
                {articleBody.map((s, i) => (
                  <a key={s.id} href={`#${s.id}`} className={`group flex items-start gap-3 text-sm transition-colors ${active === s.id ? "ink" : "ink-muted hover:ink"}`}>
                    <span className={`mt-1 h-px transition-all ${active === s.id ? "w-8 bg-[#0B1C33]" : "w-4 bg-[#D8CFBE] group-hover:w-6"}`} />
                    <span className="font-serif leading-snug">{s.heading}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-10 pt-6 border-t border-[#D8CFBE]">
                <div className="eyebrow mb-3">Progress</div>
                <div className="h-1 bg-[#D8CFBE]">
                  <div className="h-full bg-[#0B1C33]" style={{ width: `${progress * 100}%` }} />
                </div>
                <div className="font-mono-editorial text-[10px] ink-muted mt-2">{Math.round(progress * 100)}% read</div>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-6">
            {articleBody.map((s, i) => (
              <section key={s.id} id={s.id} className="mb-14 scroll-mt-28">
                <Reveal>
                  <div className="eyebrow mb-3">Chapter {String(i + 1).padStart(2, "0")}</div>
                  <h2 className="font-serif text-3xl lg:text-4xl ink editorial-heading">{s.heading}</h2>
                </Reveal>
                <div className="mt-6 space-y-5">
                  {s.content.map((p, j) => (
                    <Reveal key={j} delay={j * 60}>
                      <p className="text-[17px] leading-[1.75] ink">{p}</p>
                    </Reveal>
                  ))}
                </div>
                {i === 1 && (
                  <Reveal delay={100}>
                    <blockquote className="my-10 py-8 border-y border-[#D8CFBE]">
                      <p className="font-serif italic text-2xl lg:text-3xl leading-snug ink">
                        &ldquo;Transparency without incentive redesign is the healthcare policy equivalent of installing a window on a locked vault.&rdquo;
                      </p>
                    </blockquote>
                  </Reveal>
                )}
              </section>
            ))}

            {/* Author card */}
            <Reveal>
              <div className="mt-20 border-y border-[#D8CFBE] py-8 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0B1C33] text-[#F6F1E7] flex items-center justify-center font-serif text-lg">BP</div>
                <div className="flex-1">
                  <div className="font-serif text-lg ink">Bryce Platt, PharmD</div>
                  <div className="text-xs ink-muted mt-0.5">Director, Drug Channels Institute · Healthcare Economist</div>
                </div>
                <Link to="/newsletter" className="hidden sm:inline-flex items-center gap-2 border border-[#0B1C33] px-5 py-2.5 text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors">
                  Subscribe <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </article>

          {/* Related frameworks */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow mb-4">Related Frameworks</div>
              <div className="space-y-3">
                {relatedFrameworks.map((f) => (
                  <Link to="/frameworks" key={f.id} className="group block border border-[#D8CFBE] p-4 hover:border-[#0B1C33] transition-colors bg-[#F6F1E7]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-editorial text-[10px] ink-muted">{f.number}</span>
                      <LayoutGrid className="w-3.5 h-3.5 ink-muted" />
                    </div>
                    <div className="font-serif text-base ink mt-3 leading-tight">{f.title}</div>
                    <div className="mt-3 flex items-center gap-1 text-[11px] ink-muted group-hover:ink">
                      View framework <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Continue reading */}
      <section className="paper-alt border-y border-[#D8CFBE] py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-8">Continue Reading</div>
          <div className="grid md:grid-cols-3 gap-6">
            {moreArticles.map((a) => (
              <Link to={`/insights/${a.id}`} key={a.id} className="group block card-hover">
                <div className="overflow-hidden bg-[#EFE7D5] aspect-[4/3]">
                  <img src={a.image} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </div>
                <div className="mt-4 flex items-center gap-3 text-[11px]"><span className="eyebrow ink">{a.category}</span><span className="font-mono-editorial ink-muted">{a.readTime}</span></div>
                <h3 className="font-serif text-xl ink mt-2 leading-snug group-hover:opacity-70 transition-opacity">{a.title}</h3>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs ink">Read Analysis <ArrowUpRight className="w-3.5 h-3.5" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* End-of-article Newsletter CTA */}
      <section className="paper-dark py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <div className="eyebrow text-[#B7C3D5]">The Drug Channels Brief</div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] mt-5 text-[#F6F1E7] editorial-heading">
            Enjoyed this analysis?
          </h2>
          <p className="mt-5 text-[#B7C3D5] text-lg max-w-xl mx-auto leading-relaxed">
            Get one framework-driven briefing like this one delivered every week. Read by 37,000+ healthcare leaders.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/newsletter" className="inline-flex items-center gap-2 bg-[#F6F1E7] text-[#0B1C33] px-7 py-4 text-sm tracking-wide hover:bg-white transition-colors">
              Subscribe to the Newsletter <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/frameworks" className="inline-flex items-center gap-2 border border-[#F6F1E7] px-7 py-4 text-sm tracking-wide text-[#F6F1E7] hover:bg-[#F6F1E7] hover:text-[#0B1C33] transition-colors">
              Browse Frameworks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
