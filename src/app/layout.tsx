import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import { PERSONAL_DETAILS } from "@/data/portfolioData";

// Primary Display Font loaded from public/fonts
const intradeFont = localFont({
  src: [
    {
      path: "../../public/fonts/intrade-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/intrade-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/intrade-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/intrade-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-intrade",
  display: "swap",
});

// Best readable font for all body copy and UI elements
const interFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Monospace font for metadata, indexes, and technical tags
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_DETAILS.name} — ${PERSONAL_DETAILS.title}`,
  description:
    "Arjun Santhosh is a software developer based in Bengaluru, India, working across web applications, mobile apps, backend systems and AI-powered digital products.",
  keywords: [
    "Arjun Santhosh",
    "Software Developer",
    "Web Developer",
    "Mobile App Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AI Integration",
    "Bengaluru",
  ],
  authors: [{ name: PERSONAL_DETAILS.name }],
  icons: {
    icon: "data:,",
  },
  openGraph: {
    title: `${PERSONAL_DETAILS.name} — ${PERSONAL_DETAILS.title}`,
    description:
      "Arjun Santhosh is a software developer based in Bengaluru, India, working across web applications, mobile apps, backend systems and AI-powered digital products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${intradeFont.variable} ${interFont.variable} ${monoFont.variable}`}
    >
      <body>
        <PageTransitionProvider />
        <ScrollRevealProvider />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
