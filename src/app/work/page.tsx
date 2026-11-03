"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import { Button } from "@/components/ui";

export default function WorkPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <main id="main-content" className="work-viewport-root">
      {/* =========================================================================
          LEFT STATIONARY SIDEBAR
          - Pinned/stationary in viewport (does NOT scroll when browsing projects)
          - Prominent Home navigation link + Index indicator
          - Editorial introduction & WORK title visible at all times
          - Action links ("About", "Get in touch") + copyright at bottom
          - Internal overflow-y: auto ensures zero clipping on short viewports
          ========================================================================= */}
      <aside aria-label="Work overview and navigation" className="work-sidebar work-rail-anim">
        {/* Top bar: Distinct, prominent Home Link Button and Index Tag */}
        <div className="work-sidebar-top-bar blur-reveal-load blur-delay-1">
          <Button
            href="/"
            variant="primary"
            size="sm"
            arrow="left"
            aria-label="Return to portfolio home"
          >
            Home
          </Button>
          <span className="work-sidebar-index-tag font-mono" aria-hidden="true">
            (02) INDEX
          </span>
        </div>

        {/* Editorial introduction content visible at all times */}
        <div className="work-sidebar-intro">
          <h1 className="work-heading font-primary blur-reveal-load blur-delay-2">WORK</h1>

          <div className="work-intro-paragraphs">
            <p className="work-intro-p font-sans blur-reveal-load blur-delay-3">
              Selected digital products, platforms, and applications engineered across education, healthcare, marketplaces, and AI integrations.
            </p>
          </div>
        </div>

        {/* Bottom Section: Action links & copyright */}
        <div className="work-sidebar-bottom blur-reveal-load blur-delay-5">
          <div className="work-sidebar-links">
            <Button
              href="/about"
              variant="sidebar-action"
              size="sm"
              arrow="up-right"
              aria-label="About Arjun"
            >
              About
            </Button>
            <Button
              href="/contact"
              variant="sidebar-action"
              size="sm"
              arrow="up-right"
              aria-label="Get in touch with Arjun"
            >
              Get in touch
            </Button>
          </div>
          <div className="work-sidebar-meta font-mono">
            <span>© 2026 Arjun Santhosh</span>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT COLUMN: INDEPENDENTLY SCROLLABLE PROJECTS
          - Clean editorial project list
          - Proper spacing, alignment, and hover treatments (no floating tooltips)
          ========================================================================= */}
      <section
        aria-label="Portfolio projects list"
        className="work-projects-column"
      >
        <div className="work-projects-list">
          {PROJECTS.map((project, idx) => {
            const isHovered = hoveredSlug === project.slug;
            const isAnyHovered = hoveredSlug !== null;
            const itemOpacity = isHovered ? 1 : isAnyHovered ? 0.4 : 1;
            const staggerDelay = `${120 + idx * 60}ms`;

            return (
              <article
                key={project.slug}
                className={`work-project-item work-project-item-anim ${isHovered ? "is-hovered" : ""}`}
                style={{
                  opacity: itemOpacity,
                  animationDelay: staggerDelay,
                }}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="work-project-link"
                  aria-label={`${project.title} — ${project.category}`}
                >
                  <div className="work-title-wrap">
                    <span className="work-project-title font-primary">
                      {project.title}
                    </span>
                  </div>

                  <div className="work-category-label">
                    <span>– {project.category.toUpperCase()}</span>
                    {project.liveUrl && (
                      <span
                        className="font-mono"
                        style={{
                          marginLeft: "10px",
                          fontSize: "0.7rem",
                          color: "#2F7C66",
                          letterSpacing: "0.04em",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        · LIVE ↗
                      </span>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
