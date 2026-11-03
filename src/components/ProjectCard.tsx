"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card"
      aria-label={`Explore project ${project.title}: ${project.summary}`}
    >
      {/* Visual Preview Container */}
      <div className="project-visual">
        <div
          className="project-visual-inner"
          style={{
            backgroundColor: project.themeColor.secondary,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(24px, 4vw, 36px)",
            position: "relative",
          }}
        >
          {/* Subtle architectural background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.08,
              backgroundImage:
                "radial-gradient(circle at 2px 2px, var(--text-primary) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
            aria-hidden="true"
          />

          {/* Top Tag & Metric Badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: project.themeColor.accent,
                fontWeight: 600,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "4px 10px",
                borderRadius: "9999px",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {project.category}
            </span>

            <span
              className="font-mono"
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              {project.period}
            </span>
          </div>

          {/* Middle Typographic Title Graphic */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              margin: "24px 0",
            }}
          >
            <h3
              className="font-primary"
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                lineHeight: 1.1,
                color: project.themeColor.primary,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                maxWidth: "420px",
                lineHeight: 1.5,
              }}
            >
              {project.summary}
            </p>
          </div>

          {/* Bottom Stack Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {project.technologies.slice(0, 3).map((t) => (
              <span
                key={t}
                className="font-mono"
                style={{
                  fontSize: "0.68rem",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  color: "var(--text-primary)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Bar */}
      <div
        style={{
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-color)",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            className="font-mono"
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-subtle)",
              display: "block",
            }}
          >
            {project.role}
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: "0.74rem",
              color: "#7E8F9E",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              marginTop: "2px",
            }}
          >
            <Lock size={11} strokeWidth={2} />
            NDA Protected
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {project.liveUrl && (
            <span
              className="font-mono"
              style={{
                fontSize: "0.76rem",
                color: "#2F7C66",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Visit Live Website
              <ArrowUpRight size={13} />
            </span>
          )}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
            }}
          >
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
}
