import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Insights from "./pages/Insights";
import FrameworkLibrary from "./pages/FrameworkLibrary";
import Newsletter from "./pages/Newsletter";
import Speaking from "./pages/Speaking";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Article from "./pages/Article";
import SiteChrome from "./components/SiteChrome";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteChrome>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<Article />} />
            <Route path="/frameworks" element={<FrameworkLibrary />} />
            <Route path="/research" element={<Research />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </SiteChrome>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
