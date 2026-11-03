import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found — Arjun Santhosh",
  description: "The page you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      role="main"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        height: "100dvh",
        maxHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-primary, #FAFAF7)",
        padding: "clamp(20px, 4vw, 40px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {/* Subtle Minimal Editorial Tag */}
        <div
          className="meta-tag blur-reveal-load blur-delay-1"
          style={{
            marginBottom: "clamp(12px, 2vh, 18px)",
          }}
        >
          <span className="meta-index font-mono">(404)</span>
          <span className="font-mono">PAGE NOT FOUND</span>
        </div>

        {/* Clear, Human-Friendly Heading */}
        <h1
          className="font-primary blur-reveal-load blur-delay-2"
          style={{
            fontFamily: "var(--font-primary)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "var(--text-primary, #1A1A1A)",
            marginBottom: "clamp(12px, 2vh, 16px)",
          }}
        >
          Oops! Page not found.
        </h1>

        {/* Simple, Understandable Description */}
        <p
          className="font-sans blur-reveal-load blur-delay-3"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
            lineHeight: 1.6,
            color: "var(--text-muted, #6B7280)",
            maxWidth: "440px",
            marginBottom: "clamp(24px, 4vh, 32px)",
          }}
        >
          The page you&#39;re looking for doesn&#39;t exist or may have been moved.
        </p>

        {/* Clear Navigation Actions */}
        <div
          className="blur-reveal-load blur-delay-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Button href="/" variant="primary" size="md" arrow="left">
            Back to Home
          </Button>

          <Button href="/work" variant="primary" size="md" arrow="up-right">
            Explore My Work
          </Button>
        </div>
      </div>
    </main>
  );
}
