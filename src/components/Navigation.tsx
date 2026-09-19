"use client";

import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  hot: (
    <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  cold: (
    <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20" />
      <path d="M12 2v20" />
      <path d="M20 20L4 4" />
      <path d="M4 20L20 4" />
    </svg>
  ),
  drip: (
    <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  sweets: (
    <svg className="nav-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v2" />
      <path d="M12 8v2" />
      <path d="M17 8v2" />
      <path d="M7 4h.01" />
      <path d="M12 4h.01" />
      <path d="M17 4h.01" />
    </svg>
  ),
};

type NavigationProps = {
  items: ReadonlyArray<{ id: string; label: string; icon: string }>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

export function Navigation({ items, activeSection, onNavigate }: NavigationProps) {
  return (
    <nav id="main-nav">
      <div className="nav-capsule">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item ${activeSection === item.id ? "active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.id);
            }}
          >
            {ICONS[item.icon]}
            <span className="text">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
