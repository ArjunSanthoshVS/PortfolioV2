import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  FileText,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import {
  PERSONAL_DETAILS,
  EXPERIENCES,
  SKILL_GROUPS,
  PRINCIPLES,
  EDUCATION,
  CURRENT_COLLABORATION,
} from "@/data/portfolioData";
import CareerJourneyPathway from "@/components/CareerJourneyPathway";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: `About — ${PERSONAL_DETAILS.name}`,
  description: `${PERSONAL_DETAILS.name} is a software developer based in Bengaluru, India, working across web applications, mobile apps, backend systems and AI-powered digital products.`,
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-viewport-root">
      {/* =========================================================================
          LEFT STATIONARY SIDEBAR
          ========================================================================= */}
      <aside aria-label="About overview and navigation" className="about-sidebar work-rail-anim">
        <div className="about-sidebar-top-bar blur-reveal-load blur-delay-1">
          <Button
            href="/"
            variant="primary"
            size="sm"
            arrow="left"
            aria-label="Return to portfolio home"
          >
            Home
          </Button>
          <span className="about-section-tag" aria-hidden="true">
            (03) ABOUT
          </span>
        </div>

        <div className="about-sidebar-intro">
          <h1 className="about-heading font-primary blur-reveal-load blur-delay-2">ABOUT</h1>

          <div className="work-intro-paragraphs">
            <p className="work-intro-p font-sans blur-reveal-load blur-delay-3">
              I’m a software developer based in Bengaluru, India, building digital products across web, mobile, and backend systems.
            </p>
          </div>
        </div>

        <div className="about-sidebar-bottom blur-reveal-load blur-delay-5">
          <div className="work-sidebar-links">
            <Button
              href="/work"
              variant="sidebar-action"
              size="sm"
              arrow="up-right"
              aria-label="Explore my work"
            >
              Explore my work
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
            <span>© {PERSONAL_DETAILS.year} {PERSONAL_DETAILS.name}</span>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT COLUMN: INDEPENDENTLY SCROLLABLE CONTENT COLUMN
          ========================================================================= */}
      <section
        aria-label="About narrative and professional background"
        className="about-content-column"
      >
        <div className="about-content-wrap">
          {/* =====================================================================
              1. PERSONAL BIOGRAPHY (CONCISE, FIRST-PERSON)
              ===================================================================== */}
          <article aria-label="Personal introduction and background">
            <h2 className="about-subheading font-primary blur-reveal-load blur-delay-2">
              Hi, I’m Arjun. I’m a software developer based in Bengaluru, India.
            </h2>

            <p className="about-narrative-p blur-reveal-load blur-delay-3">
              I build web applications, mobile apps, and backend systems. Over the years, I’ve taken digital products from idea through architecture, development, and deployment—both independently and with engineering teams across education, healthcare, marketplaces, and business platforms.
            </p>

            <p className="about-narrative-p blur-reveal-load blur-delay-4">
              I integrate modern AI workflows and tools into development to build faster and more reliably. Currently collaborating with Brandsly on digital products and open to select independent projects.
            </p>
          </article>

          {/* =====================================================================
              CURRENT COLLABORATION
              ===================================================================== */}
          <section aria-labelledby="collaboration-heading" className="blur-reveal-scroll">
            <div className="about-section-header">
              <h2 id="collaboration-heading" className="about-section-title font-primary">
                Current Work
              </h2>
              <span className="about-section-tag font-mono">COLLABORATION</span>
            </div>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DDE4E8",
                borderLeft: "3px solid #2F7C66",
                borderRadius: "4px",
                padding: "20px 24px",
                boxShadow: "0 1px 3px rgba(48, 56, 65, 0.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "6px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <h3
                  className="font-primary"
                  style={{
                    fontSize: "1.3rem",
                    color: "#303841",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  {CURRENT_COLLABORATION.company}
                </h3>
                <span
                  className="font-mono"
                  style={{ fontSize: "0.74rem", color: "#7E8F9E" }}
                >
                  {CURRENT_COLLABORATION.context}
                </span>
              </div>

              <p
                className="font-sans"
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.55,
                  color: "#536575",
                  margin: 0,
                }}
              >
                {CURRENT_COLLABORATION.description}
              </p>
            </div>
          </section>

          {/* =====================================================================
              2. PERSONAL PRINCIPLES
              ===================================================================== */}
          <section aria-labelledby="principles-heading">
            <div className="about-section-header blur-reveal-scroll">
              <h2 id="principles-heading" className="about-section-title font-primary">
                Personal Principles
              </h2>
              <span className="about-section-tag font-mono">APPROACH</span>
            </div>

            <div className="about-principles-row">
              {PRINCIPLES.map((p, pIdx) => {
                const delayClass = `blur-delay-${pIdx + 1}`;
                return (
                  <div key={p.number} className={`about-principle-item blur-reveal-scroll ${delayClass}`}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                        <span className="about-principle-number font-mono">{p.number}</span>
                        <CheckCircle size={15} color="#2F7C66" />
                      </div>
                      <h3 className="about-principle-name font-primary">{p.title}</h3>
                    </div>
                    <p className="about-principle-text font-sans">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================================================
              3. PROFESSIONAL EXPERIENCE (PATHWAY)
              ===================================================================== */}
          <CareerJourneyPathway experiences={EXPERIENCES} />

          {/* =====================================================================
              4. EDUCATION
              ===================================================================== */}
          <section aria-labelledby="education-heading" className="blur-reveal-scroll">
            <div className="about-section-header">
              <h2 id="education-heading" className="about-section-title font-primary">
                Education
              </h2>
              <span className="about-section-tag font-mono">ACADEMIC BACKGROUND</span>
            </div>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DDE4E8",
                borderLeft: "2px solid #DDE4E8",
                borderRadius: "4px",
                padding: "20px 24px",
                boxShadow: "0 1px 3px rgba(48, 56, 65, 0.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <GraduationCap size={16} color="#476C8F" />
                  <span
                    className="font-mono"
                    style={{ fontSize: "0.75rem", color: "#476C8F", fontWeight: 600 }}
                  >
                    {EDUCATION.period}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{ fontSize: "0.75rem", color: "#7E8F9E" }}
                >
                  CGPA: {EDUCATION.cgpa}
                </span>
              </div>

              <h3
                className="font-primary"
                style={{
                  fontSize: "1.25rem",
                  color: "#303841",
                  margin: "0 0 4px 0",
                  fontWeight: 600,
                }}
              >
                {EDUCATION.qualification}
              </h3>

              <div
                className="font-sans"
                style={{
                  fontSize: "0.92rem",
                  color: "#536575",
                  fontWeight: 500,
                }}
              >
                {EDUCATION.institution} · {EDUCATION.location}
              </div>
            </div>
          </section>

          {/* =====================================================================
              5. CAPABILITIES & TOOLING
              ===================================================================== */}
          <section aria-labelledby="skills-heading">
            <div className="about-section-header blur-reveal-scroll">
              <h2 id="skills-heading" className="about-section-title font-primary">
                Capabilities &amp; Tooling
              </h2>
              <span className="about-section-tag font-mono">TECHNICAL STACK</span>
            </div>

            <div className="about-skills-container">
              {SKILL_GROUPS.map((group, gIdx) => {
                const delayClass = `blur-delay-${(gIdx % 4) + 1}`;
                return (
                  <div key={group.category} className={`about-skill-row blur-reveal-scroll ${delayClass}`}>
                    <div className="about-skill-cat font-mono">{group.category}</div>
                    <div className="about-skill-tags-wrap">
                      {group.skills.map((skill) => (
                        <span key={skill} className="about-skill-pill font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================================================
              6. CLOSING SECTION: WORK, RESUME, GET IN TOUCH
              ===================================================================== */}
          <section aria-labelledby="closing-heading" className="about-closing-section">
            <div className="about-section-header blur-reveal-scroll">
              <h2 id="closing-heading" className="about-section-title font-primary">
                Next Steps
              </h2>
              <span className="about-section-tag font-mono">COLLABORATION</span>
            </div>

            <div className="about-closing-cards blur-reveal-scroll blur-delay-1">
              <Link href="/work" className="about-closing-btn">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span className="about-section-tag font-mono">PORTFOLIO</span>
                  <ArrowUpRight className="about-card-arrow" size={17} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="about-card-title font-primary">Explore my work</h3>
                  <p className="about-card-desc font-sans">
                    Browse selected projects across web applications, mobile apps and backend services.
                  </p>
                </div>
              </Link>

              <a
                href={PERSONAL_DETAILS.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="about-closing-btn"
                aria-label="Download Curriculum Vitae in PDF format"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span className="about-section-tag font-mono">DOCUMENTATION</span>
                  <FileText className="about-card-arrow" size={17} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="about-card-title font-primary">Download résumé</h3>
                  <p className="about-card-desc font-sans">
                    Complete engineering credentials and work history in PDF.
                  </p>
                </div>
                <div style={{ marginTop: "16px" }}>
                  <span className="ui-btn ui-btn-primary ui-btn-sm" style={{ pointerEvents: "none" }}>
                    Download résumé
                    <ArrowUpRight size={13} strokeWidth={2.2} />
                  </span>
                </div>
              </a>

              <Link
                href="/contact"
                className="about-closing-btn"
                aria-label="Navigate to contact page to start a conversation"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span className="about-section-tag font-mono">INQUIRIES</span>
                  <ArrowUpRight className="about-card-arrow" size={17} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="about-card-title font-primary">Get in touch</h3>
                  <p className="about-card-desc font-sans">
                    Open to independent client projects and freelance collaborations.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
