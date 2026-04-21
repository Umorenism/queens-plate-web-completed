import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import {Menu} from "../pages/Menu";
import Services from "../pages/Services";
import About from "../pages/About"
import Contact from "../pages/Contact";

import Home from "../pages/Home";

import ScrollToTop from "../hooks/useScroll";
import { Footer } from "../component/layout/Footer";
import { Navbar } from "../component/layout/Navbar";
import PrivatePolicy from "../private/PrivatePolicy";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivatePolicy />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <AnimatedRoutes />

      {/* Global Footer */}
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRoutes;