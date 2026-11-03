import type { Metadata } from "next";
import { PERSONAL_DETAILS } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Contact — ${PERSONAL_DETAILS.name}`,
  description: `Get in touch with ${PERSONAL_DETAILS.name}. ${PERSONAL_DETAILS.availability}.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
