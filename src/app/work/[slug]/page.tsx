import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  Lock,
} from "lucide-react";
import { PROJECTS, PERSONAL_DETAILS } from "@/data/portfolioData";
import { Button } from "@/components/ui";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Allow blocking route for URL data access outside Suspense with Cache Components
export const instant = false;

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found · Arjun Santhosh",
    };
  }

  return {
    title: `${project.title} — Arjun Santhosh`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  const indexString = `(02) ${String(projectIndex + 1).padStart(2, "0")} / ${String(
    PROJECTS.length
  ).padStart(2, "0")}`;

  return (
    <main id="main-content" className="project-viewport-root">
      {/* =========================================================================
          LEFT STATIONARY SIDEBAR
          ========================================================================= */}
      <aside
        aria-label={`${project.title} overview and navigation`}
        className="project-sidebar work-rail-anim"
      >
        <div className="project-sidebar-top-bar blur-reveal-load blur-delay-1">
          <Button
            href="/work"
            variant="primary"
            size="sm"
            arrow="left"
            aria-label="Return to Work index"
          >
            Work
          </Button>
          <span className="project-sidebar-index-tag font-mono" aria-hidden="true">
            {indexString}
          </span>
        </div>

        <div className="project-sidebar-intro">
          <div className="project-sidebar-eyebrow font-mono blur-reveal-load blur-delay-1">
            <span>{project.category}</span>
          </div>

          <h1 className="project-sidebar-title font-primary blur-reveal-load blur-delay-2">
            {project.title}
          </h1>

          <p className="project-sidebar-tagline font-sans blur-reveal-load blur-delay-3">
            {project.summary}
          </p>

          {project.liveUrl && (
            <div style={{ marginTop: "16px" }}>
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                arrow="up-right"
                aria-label={`Visit live website for ${project.title}`}
              >
                Visit Live Website
              </Button>
            </div>
          )}
        </div>

        <div className="project-sidebar-bottom blur-reveal-load blur-delay-6">
          <div className="project-sidebar-nav-row">
            <Link
              href={`/work/${prevProject.slug}`}
              className="project-sidebar-nav-btn"
              aria-label={`Navigate to previous project: ${prevProject.title}`}
            >
              <ArrowLeft size={13} strokeWidth={2} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {prevProject.title}
              </span>
            </Link>
            <Link
              href={`/work/${nextProject.slug}`}
              className="project-sidebar-nav-btn"
              aria-label={`Navigate to next project: ${nextProject.title}`}
            >
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {nextProject.title}
              </span>
              <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>

          <Button
            href="/work"
            variant="sidebar-action"
            size="sm"
            arrow="up-right"
            aria-label="Return to full work showcase"
          >
            All Projects
          </Button>

          <div className="project-sidebar-copyright font-mono">
            <span>© {PERSONAL_DETAILS.year} {PERSONAL_DETAILS.name}</span>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT COLUMN: CASE STUDY CONTENT
          ========================================================================= */}
      <section
        aria-label={`${project.title} Project Details`}
        className="project-content-column"
      >
        <div className="project-content-wrap">
          {/* Lead Header */}
          <header className="project-hero-block">
            <div className="project-hero-badge font-mono blur-reveal-load blur-delay-1">
              <span>PROJECT</span>
              <span aria-hidden="true">·</span>
              <span>{project.category.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>

            <h2 className="project-hero-title font-primary blur-reveal-load blur-delay-2">
              {project.title}
            </h2>

            <div
              className="font-sans blur-reveal-load blur-delay-3"
              style={{
                fontSize: "1.05rem",
                color: "#476C8F",
                fontWeight: 500,
                marginBottom: "16px",
              }}
            >
              {project.company} · {project.role}
            </div>

            <div className="project-tech-pills-wrap blur-reveal-load blur-delay-4" aria-label="Core technologies used">
              {project.technologies.map((t) => (
                <span key={t} className="project-tech-pill font-mono">
                  {t}
                </span>
              ))}
            </div>

            {/* Public Live Action & Confidentiality Note */}
            <div
              className="blur-reveal-load blur-delay-5"
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  arrow="up-right"
                  aria-label={`Visit live website for ${project.title}`}
                >
                  Visit Live Website
                </Button>
              )}

              <div
                className="font-mono"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  color: "#7E8F9E",
                  letterSpacing: "0.03em",
                }}
              >
                <Lock size={12} strokeWidth={2} />
                <span>Private Project · NDA Protected</span>
              </div>
            </div>
          </header>

          {/* Problem Statement */}
          {project.problemStatement && (
            <section aria-labelledby="section-problem" className="project-section-block blur-reveal-scroll">
              <div className="project-section-header">
                <h3 id="section-problem" className="project-section-heading font-primary">
                  The Problem
                </h3>
                <span className="project-section-tag font-mono">CHALLENGE &amp; CONTEXT</span>
              </div>

              <div className="project-card-container">
                <p className="project-narrative-text">
                  {project.problemStatement}
                </p>
              </div>
            </section>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section aria-labelledby="section-features" className="project-section-block blur-reveal-scroll">
              <div className="project-section-header">
                <h3 id="section-features" className="project-section-heading font-primary">
                  Key Features
                </h3>
                <span className="project-section-tag font-mono">CORE CAPABILITIES</span>
              </div>

              <div className="project-card-container">
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {project.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "0.94rem",
                        lineHeight: 1.55,
                        color: "#303841",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        strokeWidth={2}
                        style={{
                          color: "#2F7C66",
                          flexShrink: 0,
                          marginTop: "3px",
                        }}
                        aria-hidden="true"
                      />
                      <span className="font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Scope and Responsibilities */}
          <section aria-labelledby="section-scope" className="project-section-block blur-reveal-scroll">
            <div className="project-section-header">
              <h3 id="section-scope" className="project-section-heading font-primary">
                What I worked on
              </h3>
              <span className="project-section-tag font-mono">SCOPE &amp; RESPONSIBILITIES</span>
            </div>

            <div className="project-card-container">
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {project.whatIWorkedOn.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "0.94rem",
                      lineHeight: 1.55,
                      color: "#303841",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={2}
                      style={{
                        color: "#2F7C66",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                      aria-hidden="true"
                    />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Third-Party Services & Integrations */}
          {project.integrations && project.integrations.length > 0 && (
            <section aria-labelledby="section-integrations" className="project-section-block blur-reveal-scroll">
              <div className="project-section-header">
                <h3 id="section-integrations" className="project-section-heading font-primary">
                  Third-Party Services &amp; APIs
                </h3>
                <span className="project-section-tag font-mono">INTEGRATIONS &amp; INFRASTRUCTURE</span>
              </div>

              <div className="project-card-container">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {project.integrations.map((item, idx) => (
                    <span
                      key={idx}
                      className="project-tech-pill font-mono"
                      style={{
                        fontSize: "0.76rem",
                        padding: "6px 12px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Context Notes */}
          {(project.contributionNote || project.publicationNote) && (
            <section aria-labelledby="section-notes" className="project-section-block blur-reveal-scroll">
              <div className="project-section-header">
                <h3 id="section-notes" className="project-section-heading font-primary">
                  Project Notes
                </h3>
                <span className="project-section-tag font-mono">CONTEXT</span>
              </div>

              <div className="project-card-container">
                {project.contributionNote && (
                  <div className="project-callout-box highlight" style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <Info size={14} color="#476C8F" />
                      <span className="project-callout-label font-mono">
                        Contribution
                      </span>
                    </div>
                    <p className="project-callout-text font-sans">
                      {project.contributionNote}
                    </p>
                  </div>
                )}

                {project.publicationNote && (
                  <div className="project-callout-box" style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <Info size={14} color="#7E8F9E" />
                      <span className="project-callout-label font-mono">
                        Publication
                      </span>
                    </div>
                    <p className="project-callout-text font-sans">
                      {project.publicationNote}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Navigation Action Buttons */}
          <section className="project-section-block blur-reveal-scroll">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
                paddingTop: "24px",
                borderTop: "1px solid #DDE4E8",
              }}
            >
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  arrow="up-right"
                  aria-label={`Visit live website for ${project.title}`}
                >
                  Visit Live Website
                </Button>
              )}
              <Button href="/work" variant="primary" size="md" arrow="left">
                All Projects
              </Button>
              <Button href="/contact" variant="primary" size="md" arrow="up-right">
                Get in touch
              </Button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
