import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WelcomeModal from "./WelcomeModal";
import ScrollProgress from "./ScrollProgress";
import { useLocation } from "react-router-dom";

export default function SiteChrome({ children }) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const seen = localStorage.getItem("bp_welcome_seen");
    if (!seen && location.pathname === "/") {
      const t = setTimeout(() => setShowModal(true), 900);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const dismiss = (subscribed = false) => {
    localStorage.setItem("bp_welcome_seen", "1");
    if (subscribed) localStorage.setItem("bp_subscribed", "1");
    setShowModal(false);
  };

  return (
    <div className="paper min-h-screen">
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <WelcomeModal open={showModal} onClose={dismiss} />
    </div>
  );
}
