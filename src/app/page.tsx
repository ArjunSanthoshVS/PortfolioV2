"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_DETAILS } from "@/data/portfolioData";
import {
  Briefcase,
  User,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui";

export default function Home() {
  const [activeNav, setActiveNav] = useState<string>("work");

  const navItems = [
    { id: "work", index: "01", label: "WORK", href: "/work" },
    { id: "about", index: "02", label: "ABOUT", href: "/about" },
    { id: "contact", index: "03", label: "CONTACT", href: "/contact" },
  ];

  // Dynamic counter reflecting active/hovered section (01 / 03, 02 / 03, 03 / 03)
  const activeCounter =
    activeNav === "work"
      ? "01 / 03"
      : activeNav === "about"
      ? "02 / 03"
      : "03 / 03";

  return (
    <main id="home-canvas" className="home-canvas-root">
      {/* =========================================================================
          1. LEFT VERTICAL RAIL
          - Top: 3 Destination Icons (Briefcase active card with tick, User, Mail)
          - Bottom: Rotated Vertical Copyright
          ========================================================================= */}
      <aside aria-label="Quick navigation and copyright rail" className="home-rail">
        <div className="home-rail-icons">
          {/* Work: Destination Icon */}
          <div className={activeNav === "work" ? "home-rail-active-wrap" : ""}>
            <Link
              href="/work"
              className={activeNav === "work" ? "home-rail-icon-box" : "home-rail-icon-btn"}
              aria-label="View Projects and Work"
              onMouseEnter={() => setActiveNav("work")}
            >
              <Briefcase size={16} strokeWidth={1.8} />
            </Link>
            {activeNav === "work" && <span className="home-rail-tick" aria-hidden="true" />}
          </div>

          {/* About / Profile Icon */}
          <div className={activeNav === "about" ? "home-rail-active-wrap" : ""}>
            <Link
              href="/about"
              className={activeNav === "about" ? "home-rail-icon-box" : "home-rail-icon-btn"}
              aria-label="Read About Arjun Santhosh"
              onMouseEnter={() => setActiveNav("about")}
            >
              <User size={18} strokeWidth={1.75} />
            </Link>
            {activeNav === "about" && <span className="home-rail-tick" aria-hidden="true" />}
          </div>

          {/* Contact / Email Icon */}
          <div className={activeNav === "contact" ? "home-rail-active-wrap" : ""}>
            <Link
              href="/contact"
              className={activeNav === "contact" ? "home-rail-icon-box" : "home-rail-icon-btn"}
              aria-label="Get in touch via Contact"
              onMouseEnter={() => setActiveNav("contact")}
            >
              <Mail size={18} strokeWidth={1.75} />
            </Link>
            {activeNav === "contact" && <span className="home-rail-tick" aria-hidden="true" />}
          </div>
        </div>

        {/* Bottom vertical copyright */}
        <div className="home-rail-copyright">
          © {PERSONAL_DETAILS.year} {PERSONAL_DETAILS.name.toUpperCase()}
        </div>
      </aside>

      {/* =========================================================================
          2. MAIN CONTENT WRAPPER: TWO COLUMNS (EDITORIAL LEFT + MEGA NAV RIGHT)
          ========================================================================= */}
      <div className="home-content-container">
        {/* ---------------------------------------------------------------------
            LEFT EDITORIAL COLUMN
            --------------------------------------------------------------------- */}
        <section aria-label="Portfolio overview and biography" className="home-editorial-col">
          {/* Top: Index & Display Name */}
          <div className="home-editorial-header">
            <span className="home-index-tag font-mono blur-reveal-load blur-delay-1">
              (01) PORTFOLIO — 2026
            </span>
            <h1 className="home-name-title font-primary blur-reveal-load blur-delay-2">
              {PERSONAL_DETAILS.name}
            </h1>
          </div>

          {/* Middle: Editorial Bio & Headline Block */}
          <div className="home-editorial-body">
            {/* Eyebrow with hairline rule extending right */}
            <div className="home-eyebrow-strip blur-reveal-load blur-delay-3">
              <span className="home-eyebrow-text font-mono">
                {PERSONAL_DETAILS.eyebrow}
              </span>
              <span className="home-eyebrow-rule" aria-hidden="true" />
            </div>

            {/* Prominent Headline */}
            <h2 className="home-hero-headline font-primary blur-reveal-load blur-delay-4">
              {PERSONAL_DETAILS.headline}
            </h2>

            {/* Bio description */}
            <div className="home-bio-statement-wrap font-sans blur-reveal-load blur-delay-5">
              <p className="home-bio-statement font-sans">
                I’m a software developer working across web, mobile, and backend systems—building digital products from idea to production with modern AI workflows.
              </p>
            </div>

            {/* Technical specializations */}
            <p className="home-tech-stack font-sans blur-reveal-load blur-delay-6">
              {PERSONAL_DETAILS.techLine}
            </p>

            {/* CTA action buttons */}
            <div className="home-cta-group blur-reveal-load blur-delay-7">
              <Button href="/work" variant="primary" size="md" arrow="up-right">
                Explore my work
              </Button>

              <Button href="/about" variant="primary" size="md" arrow="up-right">
                A little about me
              </Button>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            RIGHT COLUMN: NUMBERED MEGA NAVIGATION + STATUS BAR
            --------------------------------------------------------------------- */}
        <section aria-label="Primary portfolio destinations" className="home-nav-col">
          <nav aria-label="Main navigation menu" className="home-nav-menu">
            {navItems.map((item, idx) => {
              const isActive = activeNav === item.id;
              const delayClass = `blur-delay-${idx + 3}`;
              return (
                <div key={item.id} className={`home-nav-row blur-reveal-load ${delayClass}`}>
                  <Link
                    href={item.href}
                    className={`home-nav-item-link ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveNav(item.id)}
                    aria-label={`${item.label} section (${item.index})`}
                  >
                    <span className="home-nav-item-num font-mono">
                      {item.index} <span className="home-nav-dash">—</span>
                    </span>
                    <span className="home-nav-item-title font-primary">
                      {item.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Bottom Status Bar */}
          <div className="home-status-bar blur-reveal-load blur-delay-6">
            <span className="home-status-counter font-mono" style={{ marginLeft: "auto" }}>
              {activeCounter}
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
