"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "@/hooks/useLenis";

type HeroProps = {
  isActive: boolean;
};

export function Hero({ isActive }: HeroProps) {
  const { scrollY } = useScroll();
  const filter = useTransform(scrollY, [0, 500], ["brightness(0.3) blur(0px)", "brightness(0.3) blur(20px)"]);
  const scale = useTransform(scrollY, [0, 800], [1.1, 0.98]);
  const heroY = useTransform(scrollY, [0, 600], [0, 240]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const scrollTriggerOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  return (
    <header className="hero-fixed">
      <motion.div className="hero-image-container" style={{ filter, scale }} />
      <div className="hero-spotlight-overlay" />

      <motion.div
        className={`hero-content ${isActive ? "active" : ""}`}
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <h1 className="main-logo laco-300">LACO</h1>
        <div className="gold-line-shimmer" />
        <p className="hero-tagline-classy">your favorite place</p>
      </motion.div>

      <motion.button
        type="button"
        className="scroll-trigger-luxury"
        style={{ opacity: isActive ? scrollTriggerOpacity : 0 }}
        onClick={() => scrollToSection("#hot")}
        aria-label="اسحب للأعلى للاستكشاف"
      >
        <span className="scroll-text">اسحب للأعلى للاستكشاف</span>
        <div className="scroll-visual">
          <div className="scroll-line">
            <div className="scroll-drop" />
          </div>
          <div className="scroll-arrow-icon" />
        </div>
      </motion.button>
    </header>
  );
}
