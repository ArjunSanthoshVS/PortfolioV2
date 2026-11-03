import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "620px", textAlign: "center" }}>
        <div className="meta-tag blur-reveal-load blur-delay-1" style={{ justifyContent: "center", marginBottom: "16px" }}>
          <span className="meta-index">(404)</span>
          <span>PAGE NOT FOUND</span>
        </div>

        <h1
          className="font-primary blur-reveal-load blur-delay-2"
          style={{
            fontFamily: "var(--font-primary)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "20px",
          }}
        >
          Lost in transmission.
        </h1>

        <p
          className="font-sans blur-reveal-load blur-delay-3"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: "var(--text-muted)",
            marginBottom: "36px",
          }}
        >
          The page or project case study you requested does not exist or has been relocated within the portfolio index.
        </p>

        <div className="blur-reveal-load blur-delay-4" style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <Button href="/" variant="primary" size="md" arrow="left">
            Return to Home
          </Button>

          <Button href="/work" variant="primary" size="md" arrow="up-right">
            Browse Work Index
          </Button>
        </div>
      </div>
    </main>
  );
}
