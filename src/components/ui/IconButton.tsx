"use client";

import React from "react";
import Link from "next/link";

export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  active?: boolean;
  target?: string;
  rel?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "active" | "pill" | "ghost";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function IconButton({
  icon,
  label,
  href,
  onClick,
  onMouseEnter,
  active = false,
  target,
  rel,
  size = "md",
  variant = "default",
  className = "",
  disabled = false,
  style,
}: IconButtonProps) {
  const combinedClass = `ui-icon-btn ui-icon-btn-${size} ui-icon-btn-${variant} ${
    active ? "is-active" : ""
  } ${className}`.trim();

  if (href) {
    const isExternal =
      target === "_blank" ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          className={combinedClass}
          aria-label={label}
          title={label}
          style={style}
        >
          {icon}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={combinedClass}
        aria-label={label}
        title={label}
        style={style}
      >
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
      className={combinedClass}
      aria-label={label}
      title={label}
      style={style}
    >
      {icon}
    </button>
  );
}

