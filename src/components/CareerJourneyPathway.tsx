"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { CheckCircle2 } from "lucide-react";
import type { ExperienceItem } from "@/data/portfolioData";

interface CareerJourneyPathwayProps {
  experiences: ExperienceItem[];
}

export default function CareerJourneyPathway({
  experiences,
}: CareerJourneyPathwayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spineFillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track reached milestones (milestone 0 is active on load)
  const [reachedStates, setReachedStates] = useState<boolean[]>(() =>
    experiences.map((_, i) => i === 0)
  );
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const stageLabels = [
    { num: "01", label: "TECHNICAL LEAD" },
    { num: "02", label: "SOFTWARE ENGINEER" },
    { num: "03", label: "SOFTWARE DEVELOPER" },
    { num: "04", label: "FULL STACK INTERN" },
  ];

  // Helper: locate nearest scroll container (.about-content-column on desktop, window on mobile)
  const getScrollContainer = useCallback((): HTMLElement | Window => {
    if (typeof window === "undefined" || !containerRef.current) return window;
    // On viewports <= 860px, .about-content-column has overflow: visible; the window is the active scroller
    if (window.innerWidth <= 860) return window;
    const scrollParent = containerRef.current.closest(".about-content-column");
    return (scrollParent as HTMLElement) || window;
  }, []);

  // Listen for reduced motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Scroll detection to advance the timeline path continuously at exact scroll speed
  const checkScrollProgress = useCallback(() => {
    if (isReducedMotion) {
      setReachedStates(experiences.map(() => true));
      spineFillRefs.current.forEach((fillEl) => {
        if (fillEl) fillEl.style.height = "100%";
      });
      return;
    }

    const viewportHeight = window.innerHeight;
    // Reading focus line at 65% of viewport height (natural reading eye level)
    const focusLine = viewportHeight * 0.65;
    let newActive = 0;

    // Measure exact screen Y coordinates of all milestone nodes
    const nodeCenters: (number | null)[] = rowRefs.current.map((rowEl) => {
      if (!rowEl) return null;
      const nodeEl = rowEl.querySelector<HTMLElement>(".career-node-wrap");
      if (nodeEl) {
        const rect = nodeEl.getBoundingClientRect();
        return rect.top + rect.height / 2;
      }
      const rect = rowEl.getBoundingClientRect();
      return rect.top + 29;
    });

    // Update continuous, 1:1 scroll-linked spine fill for each segment between nodes
    for (let i = 0; i < experiences.length - 1; i++) {
      const fillEl = spineFillRefs.current[i];
      if (!fillEl) continue;

      const yStart = nodeCenters[i];
      const yEnd = nodeCenters[i + 1];

      if (yStart === null || yEnd === null || yEnd <= yStart) {
        continue;
      }

      if (focusLine <= yStart) {
        fillEl.style.height = "0%";
      } else if (focusLine >= yEnd) {
        fillEl.style.height = "100%";
      } else {
        // Continuous, 1:1 real-time progress tied directly to scroll speed
        const progress = (focusLine - yStart) / (yEnd - yStart);
        fillEl.style.height = `${(progress * 100).toFixed(2)}%`;
      }
    }

    // Determine milestone revealed states and currently focused stage
    setReachedStates((prev) => {
      const next = [...prev];
      let changed = false;

      nodeCenters.forEach((centerY, idx) => {
        if (centerY === null) return;
        // Node is reached once its center is approached by the reading line
        if (centerY <= focusLine + 30) {
          newActive = idx;
          if (!next[idx]) {
            next[idx] = true;
            changed = true;
          }
        }
      });

      return changed ? next : prev;
    });

    setActiveStageIdx(newActive);
  }, [experiences, isReducedMotion]);

  // Hardware-accelerated IntersectionObserver for instant visibility
  useEffect(() => {
    if (isReducedMotion) {
      setReachedStates(experiences.map(() => true));
      return;
    }

    if (typeof IntersectionObserver === "undefined") return;

    const scrollContainer = getScrollContainer();
    const isWindow = scrollContainer === window;

    const observer = new IntersectionObserver(
      (entries) => {
        setReachedStates((prev) => {
          const next = [...prev];
          let changed = false;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Number(entry.target.getAttribute("data-index"));
              if (!isNaN(idx) && !next[idx]) {
                next[idx] = true;
                changed = true;
              }
            }
          });
          return changed ? next : prev;
        });
      },
      {
        root: isWindow ? null : (scrollContainer as HTMLElement),
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.1,
      }
    );

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [experiences, isReducedMotion, getScrollContainer]);

  // RequestAnimationFrame scroll binding: Coalesces scroll events to match exact refresh rate with zero lag
  useEffect(() => {
    const scrollContainer = getScrollContainer();
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        checkScrollProgress();
        rafId = null;
      });
    };

    // Initial check on mount
    checkScrollProgress();

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("orientationchange", onScroll, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      scrollContainer.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
    };
  }, [checkScrollProgress, getScrollContainer]);

  return (
    <div
      ref={containerRef}
      className="career-journey-container"
      role="region"
      aria-label="Professional Experience Pathway"
    >
      {/* Editorial Section Header */}
      <div className="about-section-header career-editorial-header blur-reveal-scroll">
        <h2 id="experience-heading" className="about-section-title font-primary">
          Experience
        </h2>
        <span className="about-section-tag font-mono">
          MILESTONES · 2022 — PRESENT
        </span>
      </div>

      {/* Pathway Milestones Workspace */}
      <div className="career-timeline-workspace">
        {experiences.map((exp, idx) => {
          const isReached = isReducedMotion || reachedStates[idx];
          const isActive = idx === activeStageIdx;
          const isLast = idx === experiences.length - 1;
          const stage = stageLabels[idx] || { num: `0${idx + 1}`, label: "MILESTONE" };

          return (
            <div
              key={exp.period + exp.role}
              ref={(el) => {
                rowRefs.current[idx] = el;
              }}
              data-index={idx}
              className="career-milestone-row"
            >
              {/* Timeline Track Column (Continuous Spine, Node, Connector) */}
              <div className="career-timeline-track" aria-hidden="true">
                {/* Continuous Vertical Spine Line to Next Milestone */}
                {!isLast && (
                  <div className="career-spine-line">
                    <div
                      ref={(el) => {
                        spineFillRefs.current[idx] = el;
                      }}
                      className="career-spine-fill"
                    />
                  </div>
                )}

                {/* Milestone Node Marker: Outer Ring + Centered Inner Dot */}
                <div
                  className={`career-node-wrap ${isReached ? "is-reached" : ""} ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <div className="career-node-outer-ring">
                    <div className="career-node-inner-dot" />
                  </div>
                  {isActive && !isReducedMotion && <div className="career-node-halo" />}
                </div>

                {/* Precise Horizontal Connector Line into Card Border */}
                <div
                  className={`career-connector-line ${
                    isReached ? "is-reached" : ""
                  }`}
                />
              </div>

              {/* Experience Card */}
              <article
                className={`career-editorial-card ${
                  isReached ? "is-revealed" : "is-pending"
                } ${isActive ? "is-active" : ""}`}
                tabIndex={0}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveStageIdx(idx)}
                onFocus={() => setActiveStageIdx(idx)}
              >
                {/* Card Top Metadata Bar */}
                <div className="career-card-header-row">
                  <div className="career-card-meta-left">
                    <span className="career-card-period font-mono">{exp.period}</span>
                    <span className="career-card-divider" aria-hidden="true">·</span>
                    <span className="career-card-location font-mono">{exp.location}</span>
                  </div>

                  <span className="career-card-index font-mono" aria-hidden="true">
                    ({stage.num})
                  </span>
                </div>

                {/* Role and Organization */}
                <div className="career-card-title-block">
                  <h3 className="career-card-role font-primary">{exp.role}</h3>
                  <div className="career-card-company font-sans">{exp.companyOrContext}</div>
                </div>

                {/* Narrative Summary */}
                <p className="career-card-desc font-sans">{exp.description}</p>

                {/* Concise Responsibilities & Highlights */}
                <ul className="career-card-highlights">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="career-highlight-row">
                      <CheckCircle2
                        size={14}
                        className="career-highlight-icon"
                        strokeWidth={2}
                      />
                      <span className="font-sans">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Core Tooling Pills */}
                <div className="career-card-tech-wrap">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="career-tech-tag font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
