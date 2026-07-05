import React from "react";
import Hero from "../components/home/Hero";
import AuthorityStrip from "../components/home/AuthorityStrip";
import FeaturedInsights from "../components/home/FeaturedInsights";
import TopicExplorer from "../components/home/TopicExplorer";
import FrameworksSection from "../components/home/FrameworksSection";
import PublicationsSection from "../components/home/PublicationsSection";
import SpeakingSection from "../components/home/SpeakingSection";
import NewsletterCTA from "../components/home/NewsletterCTA";
import AboutTeaser from "../components/home/AboutTeaser";
import PullQuote from "../components/home/PullQuote";

export default function Home() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <FeaturedInsights />
      <PullQuote />
      <TopicExplorer />
      <FrameworksSection />
      <PublicationsSection />
      <SpeakingSection />
      <AboutTeaser />
      <NewsletterCTA />
    </>
  );
}
