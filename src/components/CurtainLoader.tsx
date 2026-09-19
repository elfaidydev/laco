"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CurtainLoaderProps = {
  onComplete: () => void;
};

export function CurtainLoader({ onComplete }: CurtainLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const progressTimer = window.setTimeout(() => setProgress(100), 300);
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 2800);
    const slideTimer = window.setTimeout(() => {
      setSlideUp(true);
      window.setTimeout(onComplete, 700);
    }, 3700);

    return () => {
      window.clearTimeout(progressTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(slideTimer);
    };
  }, [onComplete]);

  return (
    <div className={`curtain-loader ${slideUp ? "slide-up" : ""}`}>
      <div className={`loader-content ${fadeOut ? "fade-out-content" : ""}`}>
        <motion.h1
          className="loader-logo laco-300"
          initial={{ letterSpacing: "2px", opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ letterSpacing: "25px", opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          LACO
        </motion.h1>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
