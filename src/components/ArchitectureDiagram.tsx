"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, Info } from "lucide-react";

interface NodeItem {
  title: string;
  description: string;
  tags: string[];
}

interface ArchitectureDiagramProps {
  nodes: NodeItem[];
  title?: string;
}

export default function ArchitectureDiagram({
  nodes,
  title = "System Architecture & Data Flow",
}: ArchitectureDiagramProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const selectedNode = nodes[selectedIdx] || nodes[0];

  return (
    <div
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-medium)",
        padding: "28px",
        boxShadow: "var(--shadow-card)",
      }}
      aria-label={title}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          paddingBottom: "14px",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "var(--accent-blue-deep)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Layers size={16} />
          {title}
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-subtle)",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Info size={13} /> Select step to inspect
        </span>
      </div>

      {/* Visual Pipeline Flow */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${nodes.length}, 1fr)`,
          gap: "12px",
          marginBottom: "24px",
          overflowX: "auto",
          paddingBottom: "8px",
        }}
        role="tablist"
        aria-label="Architecture stages"
      >
        {nodes.map((node, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <button
              key={node.title}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedIdx(idx)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "14px",
                borderRadius: "var(--radius-sm)",
                border: isSelected
                  ? "2px solid var(--accent-blue-deep)"
                  : "1px solid var(--border-light)",
                backgroundColor: isSelected ? "var(--bg-ice)" : "var(--bg-ice-subtle)",
                cursor: "pointer",
                textAlign: "left",
                minWidth: "160px",
                transition: "all var(--transition-fast)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: isSelected ? "var(--accent-blue-deep)" : "var(--text-subtle)",
                  }}
                >
                  0{idx + 1}
                </span>
                {idx < nodes.length - 1 && (
                  <ArrowRight size={13} color="var(--accent-blue)" aria-hidden="true" />
                )}
              </div>
              <strong
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-primary)",
                  fontWeight: 650,
                  marginBottom: "4px",
                }}
              >
                {node.title}
              </strong>
            </button>
          );
        })}
      </div>

      {/* Selected Step Deep Dive */}
      <div
        style={{
          backgroundColor: "var(--bg-primary)",
          borderRadius: "var(--radius-sm)",
          padding: "20px 24px",
          border: "1px solid var(--border-medium)",
          borderLeft: "4px solid var(--accent-blue-deep)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
          <h4
            className="font-primary"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "1.05rem",
              fontWeight: 650,
              color: "var(--text-primary)",
            }}
          >
            Stage {selectedIdx + 1}: {selectedNode.title}
          </h4>
          <div style={{ display: "flex", gap: "6px" }}>
            {selectedNode.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--bg-ice)",
                  color: "var(--accent-blue-deep)",
                  border: "1px solid rgba(127, 159, 195, 0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          {selectedNode.description}
        </p>
      </div>
    </div>
  );
}
