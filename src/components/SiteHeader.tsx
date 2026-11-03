"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolioData";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (
    pathname === "/" ||
    pathname === "" ||
    !pathname ||
    pathname === "/work" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname.startsWith("/work/")
  ) {
    return null;
  }

  const navLinks: { label: string; href: string; isExternal?: boolean }[] = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/work") {
      return pathname.startsWith("/work");
    }
    return pathname === href;
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        backgroundColor: "rgba(250, 250, 247, 0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-color)",
        transition: "all var(--duration-normal) var(--ease-editorial)",
      }}
    >
      <div
        className="container"
        style={{
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: "10px",
            color: "var(--text-primary)",
          }}
          aria-label={`${PERSONAL_DETAILS.name} — Home`}
        >
          <span
            className="font-primary"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {PERSONAL_DETAILS.name}
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            / Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const active = isActive(item.href);
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-primary)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontWeight: 500,
                    opacity: 0.85,
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono"
                style={{
                  position: "relative",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-primary)",
                  fontWeight: active ? 600 : 500,
                  opacity: active ? 1 : 0.75,
                }}
              >
                <span>{item.label}</span>
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "1px",
                      backgroundColor: "var(--text-primary)",
                    }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            background: "transparent",
            border: "1px solid var(--border-color)",
            borderRadius: "4px",
            color: "var(--text-primary)",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            borderBottom: "1px solid var(--border-color)",
            padding: "24px",
          }}
          className="mobile-panel"
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
            aria-label="Mobile Navigation"
          >
            {navLinks.map((item) => (
              <div key={item.label}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    style={{
                      fontSize: "1.1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--text-primary)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px 0",
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-mono"
                    style={{
                      fontSize: "1.1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--text-primary)",
                      display: "block",
                      padding: "8px 0",
                      fontWeight: isActive(item.href) ? 700 : 500,
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
