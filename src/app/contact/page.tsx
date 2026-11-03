"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Briefcase,
  GitBranch,
  FileText,
  Copy,
  Check,
  MapPin,
  Clock,
} from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";
import { Button } from "@/components/ui";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const contactChannels = [
    {
      id: "email",
      label: "Email",
      index: "(01)",
      value: PERSONAL_DETAILS.email,
      href: `mailto:${PERSONAL_DETAILS.email}`,
      description: "Direct inbox for project inquiries and engineering discussions.",
      icon: Mail,
      isExternal: false,
      hasCopy: true,
      ariaLabel: `Send email to ${PERSONAL_DETAILS.email}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      index: "(02)",
      value: PERSONAL_DETAILS.linkedinDisplay,
      href: PERSONAL_DETAILS.linkedin,
      description: "Professional background, verified credentials, and networking.",
      icon: Briefcase,
      isExternal: true,
      hasCopy: false,
      ariaLabel: "Open Arjun's LinkedIn profile in a new tab",
    },
    {
      id: "github",
      label: "GitHub",
      index: "(03)",
      value: PERSONAL_DETAILS.githubDisplay,
      href: PERSONAL_DETAILS.github,
      description: "Source code repositories, personal projects, and code contributions.",
      icon: GitBranch,
      isExternal: true,
      hasCopy: false,
      ariaLabel: "Explore Arjun's GitHub repositories in a new tab",
    },
    {
      id: "resume",
      label: "Résumé",
      index: "(04)",
      value: PERSONAL_DETAILS.resumeDisplay,
      href: PERSONAL_DETAILS.resumePath,
      description: "Comprehensive overview of work history and engineering capabilities.",
      icon: FileText,
      isExternal: true,
      hasCopy: false,
      ariaLabel: "Download or preview Arjun's Resume (PDF) in a new tab",
    },
  ];

  return (
    <main id="main-content" className="contact-viewport-root">
      {/* =========================================================================
          LEFT STATIONARY SIDEBAR
          ========================================================================= */}
      <aside
        aria-label="Contact overview and navigation"
        className="contact-sidebar work-rail-anim"
      >
        <div className="contact-sidebar-top-bar blur-reveal-load blur-delay-1">
          <Button
            href="/"
            variant="primary"
            size="sm"
            arrow="left"
            aria-label="Return to portfolio home"
          >
            Home
          </Button>
          <span className="contact-sidebar-index-tag font-mono" aria-hidden="true">
            (04) CONTACT
          </span>
        </div>

        <div className="contact-sidebar-intro">
          <h1 className="contact-heading font-primary blur-reveal-load blur-delay-2">
            LET’S TALK
          </h1>

          <div className="work-intro-paragraphs">
            <p className="work-intro-p font-sans blur-reveal-load blur-delay-3">
              Have a project in mind, need help building something, or want to discuss an idea? Feel free to reach out.
            </p>
          </div>
        </div>

        <div className="contact-sidebar-bottom blur-reveal-load blur-delay-5">
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
              href="/about"
              variant="sidebar-action"
              size="sm"
              arrow="up-right"
              aria-label="A little about me"
            >
              A little about me
            </Button>
          </div>
          <div className="work-sidebar-meta font-mono">
            <span>© {PERSONAL_DETAILS.year} {PERSONAL_DETAILS.name}</span>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT COLUMN: EDITORIAL CONTENT
          ========================================================================= */}
      <section
        aria-label="Contact options and collaboration details"
        className="contact-content-column"
      >
        <div className="contact-content-wrap">
          {/* Welcoming Display Headline */}
          <div className="contact-hero-block contact-anim-1">
            <h2 className="contact-hero-headline font-primary">
              LET’S TALK
              <span className="contact-highlight-accent">.</span>
            </h2>
            <p className="contact-hero-subhead font-sans">
              Have a project in mind, need help building something, or want to discuss an idea? Feel free to reach out.
            </p>
          </div>

          {/* Contact Channels List */}
          <div className="contact-channels-section contact-anim-2">
            <div className="contact-channels-header">
              <h3 className="contact-channels-title font-mono">
                DIRECT CHANNELS
              </h3>
            </div>

            <ul className="contact-channels-list" role="list">
              {contactChannels.map((channel, idx) => {
                const IconComponent = channel.icon;
                const delayClass = `contact-item-delay-${idx}`;

                return (
                  <li
                    key={channel.id}
                    className={`contact-channel-item ${delayClass}`}
                  >
                    <div className="contact-channel-row">
                      <a
                        href={channel.href}
                        target={channel.isExternal ? "_blank" : undefined}
                        rel={channel.isExternal ? "noopener noreferrer" : undefined}
                        className="contact-channel-main-link"
                        aria-label={channel.ariaLabel}
                      >
                        <div className="contact-channel-identity">
                          <span className="contact-channel-index font-mono">
                            {channel.index}
                          </span>
                          <div className="contact-channel-icon-wrap" aria-hidden="true">
                            <IconComponent size={17} strokeWidth={1.8} />
                          </div>
                          <span className="contact-channel-name">
                            {channel.label}
                          </span>
                        </div>

                        <div className="contact-channel-detail">
                          <span className="contact-channel-value font-sans">
                            {channel.value}
                          </span>
                          <p className="contact-channel-desc font-sans">
                            {channel.description}
                          </p>
                        </div>
                      </a>

                      <div className="contact-channel-actions">
                        {channel.hasCopy && (
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            className={`contact-copy-badge-btn ${copied ? "copied" : ""}`}
                            aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                            title="Copy email address to clipboard"
                          >
                            {copied ? (
                              <>
                                <Check size={13} strokeWidth={2.4} />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} strokeWidth={1.8} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}

                        <a
                          href={channel.href}
                          target={channel.isExternal ? "_blank" : undefined}
                          rel={channel.isExternal ? "noopener noreferrer" : undefined}
                          aria-label={channel.ariaLabel}
                          className="contact-action-arrow"
                          tabIndex={-1}
                        >
                          <ArrowUpRight size={19} strokeWidth={1.75} />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Secondary Details: Location & Response Expectation */}
          <div className="contact-secondary-strip contact-anim-3">
            <div className="contact-meta-card">
              <div className="contact-meta-card-header">
                <MapPin size={15} className="contact-meta-icon" />
                <span className="contact-meta-label font-mono">
                  LOCATION
                </span>
              </div>
              <p className="contact-meta-value font-sans">
                {PERSONAL_DETAILS.location}
              </p>
            </div>

            <div className="contact-meta-card">
              <div className="contact-meta-card-header">
                <Clock size={15} className="contact-meta-icon" />
                <span className="contact-meta-label font-mono">
                  RESPONSE EXPECTATION
                </span>
              </div>
              <p className="contact-meta-value font-sans">
                {PERSONAL_DETAILS.responseExpectation}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
