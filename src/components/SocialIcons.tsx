import React from "react";
import { GitBranch, Briefcase, Globe, MessageSquare } from "lucide-react";

export function GithubIcon({ size = 16, className }: { size?: number; className?: string }) {
  return <GitBranch size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}

export function LinkedinIcon({ size = 16, className }: { size?: number; className?: string }) {
  return <Briefcase size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}

export function LinkedinSquareIcon({ size = 18, className }: { size?: number; className?: string }) {
  return <Briefcase size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}

export function DribbbleIcon({ size = 18, className }: { size?: number; className?: string }) {
  return <Globe size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}

export function ThreadsIcon({ size = 18, className }: { size?: number; className?: string }) {
  return <MessageSquare size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
}
