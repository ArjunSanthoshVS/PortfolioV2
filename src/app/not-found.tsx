import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found — Arjun Santhosh",
  description: "The page you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <main id="main-content" role="main" className="not-found-viewport">
      <div className="not-found-content">
        {/* Subtle Minimal Editorial Tag */}
        <div
          className="meta-tag blur-reveal-load blur-delay-1"
          style={{ marginBottom: "clamp(12px, 2vh, 18px)" }}
        >
          <span className="meta-index font-mono">(404)</span>
          <span className="font-mono">PAGE NOT FOUND</span>
        </div>

        {/* Clear, Human-Friendly Heading */}
        <h1 className="not-found-heading blur-reveal-load blur-delay-2">
          Oops! Page not found.
        </h1>

        {/* Simple, Understandable Description */}
        <p className="not-found-desc blur-reveal-load blur-delay-3">
          The page you&#39;re looking for doesn&#39;t exist or may have been moved.
        </p>

        {/* Clear Navigation Actions */}
        <div className="not-found-actions blur-reveal-load blur-delay-4">
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
