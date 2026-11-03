"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "pill"
  | "ghost"
  | "sidebar-action";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  arrow?: "up-right" | "left" | "right" | "none";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  title?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  iconPosition = "right",
  arrow,
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
  title,
  style,
}: ButtonProps) {
  // Determine variant class
  const variantClass = `ui-btn-${variant}`;
  const sizeClass = `ui-btn-${size}`;
  const fullWidthClass = fullWidth ? "ui-btn-full" : "";
  const combinedClass = `ui-btn ${variantClass} ${sizeClass} ${fullWidthClass} ${className}`.trim();

  // Determine icon size
  const iconSize = size === "sm" ? 13 : size === "lg" ? 16 : 14;

  // Resolve default arrow icon based on prop or variant
  let resolvedArrow = arrow;
  if (!resolvedArrow) {
    if (variant === "pill") {
      resolvedArrow = "left";
    } else if (variant === "primary" || variant === "sidebar-action") {
      resolvedArrow = "up-right";
    } else {
      resolvedArrow = "none";
    }
  }

  const renderIcon = () => {
    if (icon) return icon;
    if (resolvedArrow === "up-right") {
      return (
        <ArrowUpRight
          size={iconSize}
          strokeWidth={2.2}
          className="ui-btn-icon-right"
          aria-hidden="true"
        />
      );
    }
    if (resolvedArrow === "left") {
      return (
        <ArrowLeft
          size={iconSize}
          strokeWidth={2.2}
          className="ui-btn-icon-left"
          aria-hidden="true"
        />
      );
    }
    if (resolvedArrow === "right") {
      return (
        <ArrowRight
          size={iconSize}
          strokeWidth={2.2}
          className="ui-btn-icon-right"
          aria-hidden="true"
        />
      );
    }
    return null;
  };

  const iconElement = renderIcon();
  const effectiveIconPosition =
    resolvedArrow === "left" ? "left" : iconPosition;

  const content = (
    <>
      {iconElement && effectiveIconPosition === "left" && iconElement}
      {children && <span className="ui-btn-text">{children}</span>}
      {iconElement && effectiveIconPosition === "right" && iconElement}
    </>
  );

  // If href is provided, render as external <a> or Next.js <Link>
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
          onMouseLeave={onMouseLeave}
          className={combinedClass}
          aria-label={ariaLabel}
          title={title}
          style={style}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={combinedClass}
        aria-label={ariaLabel}
        title={title}
        style={style}
      >
        {content}
      </Link>
    );
  }

  // Otherwise render standard <button>
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={combinedClass}
      aria-label={ariaLabel}
      title={title}
      style={style}
    >
      {content}
    </button>
  );
}
