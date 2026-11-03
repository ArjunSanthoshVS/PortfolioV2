"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Copy, Check, ArrowUp, GitBranch, Briefcase } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";
import { Button, TextLink } from "@/components/ui";

export default function SiteFooter() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  if (
    pathname === "/" ||
    pathname === "/work" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname.startsWith("/work/")
  ) {
    return null;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        backgroundColor: "var(--bg-primary)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "48px",
      }}
    >
      <div className="container">
        {/* Massive Closing Invitation */}
        <div className="blur-reveal-scroll" style={{ maxWidth: "980px", marginBottom: "clamp(48px, 6vw, 80px)" }}>
          <div className="meta-tag" style={{ marginBottom: "16px" }}>
            <span className="meta-index">(04)</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2
            className="font-primary"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              wordSpacing: "-0.045em",
              color: "var(--text-primary)",
              marginBottom: "24px",
            }}
          >
            Have an engineering challenge or a product to build?{" "}
            <span className="text-highlight-underline">Let’s connect.</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Button
              href={`mailto:${PERSONAL_DETAILS.email}`}
              variant="primary"
              size="md"
              arrow="up-right"
            >
              Email Arjun
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleCopy}
              icon={copied ? <Check size={14} /> : <Copy size={14} />}
              iconPosition="left"
              arrow="none"
              aria-label="Copy email address"
            >
              {copied ? "Copied" : PERSONAL_DETAILS.email}
            </Button>
          </div>
        </div>

        <hr className="hairline-divider" style={{ marginBottom: "40px" }} />

        {/* Footer Metadata Columns */}
        <div
          className="blur-reveal-scroll"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "36px",
            marginBottom: "60px",
          }}
        >
          {/* Col 1: Navigation Links */}
          <div>
            <span className="meta-tag" style={{ display: "block", marginBottom: "14px" }}>
              DESTINATIONS
            </span>
            <ul
              className="font-mono"
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.85rem",
              }}
            >
              <li>
                <Link href="/work">Work Index</Link>
              </li>
              <li>
                <Link href="/about">About & Experience</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Social Links */}
          <div>
            <span className="meta-tag" style={{ display: "block", marginBottom: "14px" }}>
              PROFILES & SOURCE
            </span>
            <ul
              className="font-mono"
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.85rem",
              }}
            >
              <li>
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <GitBranch size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <Briefcase size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_DETAILS.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <span>Download Résumé</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Availability & Time */}
          <div>
            <span className="meta-tag" style={{ display: "block", marginBottom: "14px" }}>
              STATUS & LOCATION
            </span>
            <div className="font-mono" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <p style={{ marginBottom: "8px", color: "var(--text-primary)" }}>
                ● {PERSONAL_DETAILS.availability}
              </p>
              <p style={{ margin: 0 }}>Location: {PERSONAL_DETAILS.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          className="font-mono"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.75rem",
            color: "var(--text-subtle)",
            paddingTop: "24px",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <span>
            © {PERSONAL_DETAILS.year} {PERSONAL_DETAILS.name}. Recreating editorial excellence.
          </span>

          <Button
            variant="primary"
            size="sm"
            onClick={scrollToTop}
            icon={<ArrowUp size={14} />}
            iconPosition="right"
            arrow="none"
          >
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
