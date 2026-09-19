"use client";

import { useCallback, useState } from "react";
import { CurtainLoader } from "@/components/CurtainLoader";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Navigation } from "@/components/Navigation";
import { PortraitOverlay } from "@/components/PortraitOverlay";
import { MENU_SECTIONS, NAV_ITEMS } from "@/data/menu";
import { useLenis } from "@/hooks/useLenis";
import { useActiveSection, useIdleReset } from "@/hooks/useNavigation";
import { useOrientationLock } from "@/hooks/useOrientationLock";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroActive, setHeroActive] = useState(false);
  const showPortraitOverlay = useOrientationLock();
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const { activeSection, navigateTo } = useActiveSection(sectionIds);

  useLenis();
  useIdleReset(isLoading);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
    document.body.classList.remove("loading-state");
    window.setTimeout(() => setHeroActive(true), 100);
  }, []);

  return (
    <>
      {showPortraitOverlay && <PortraitOverlay />}
      {isLoading && <CurtainLoader onComplete={handleLoaderComplete} />}

      <Hero isActive={heroActive} />

      <div className="scrolling-wrapper">
        <Navigation items={NAV_ITEMS} activeSection={activeSection} onNavigate={navigateTo} />

        <main className="menu-container">
          {MENU_SECTIONS.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
          <Footer />
        </main>
      </div>
    </>
  );
}
