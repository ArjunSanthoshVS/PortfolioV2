"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  "aria-label"?: string;
  title?: string;
  style?: React.CSSProperties;
}

export default function TextLink({
  href,
  children,
  external,
  arrow = true,
  className = "",
  target,
  rel,
  onClick,
  onMouseEnter,
  "aria-label": ariaLabel,
  title,
  style,
}: TextLinkProps) {
  const isExternal =
    external ??
    (href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.endsWith(".pdf"));

  const combinedClass = `ui-text-link ${className}`.trim();

  const content = (
    <>
      <span className="ui-text-link-body">{children}</span>
      {arrow && (
        <ArrowUpRight
          size={13}
          strokeWidth={2}
          className="ui-text-link-arrow"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
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
      className={combinedClass}
      aria-label={ariaLabel}
      title={title}
      style={style}
    >
      {content}
    </Link>
  );
}
