# Portfolio Content Inventory & Static Text Audit

> **Document Name**: `PORTFOLIO_CONTENT_INVENTORY.md`  
> **Repository**: `c:\Projects\Portfolio V2`  
> **Framework**: Next.js 16.4.3 (App Router with React 19)  
> **Audit Date**: 2026-11-02  
> **Auditor**: Antigravity Pair Programming Agent  
> **Purpose**: Complete, verbatim inventory of every user-visible static text element, data-driven string, heading, paragraph, button label, navigation link, metadata tag, accessibility text, and error message across every page and component in the portfolio. Prepared as the single source of truth for future content replacement, editing, and localization exercises.

---

## Table of Contents

1. [Executive Summary & Audit Scope](#1-executive-summary--audit-scope)
2. [Route Audit Checklist](#2-route-audit-checklist)
3. [Content Classification & Taxonomy Guide](#3-content-classification--taxonomy-guide)
4. [Global Shell & Shared Layouts](#4-global-shell--shared-layouts)
5. [Route 01: Home Page (`/`)](#5-route-01-home-page-)
6. [Route 02: Work Showcase Index (`/work`)](#6-route-02-work-showcase-index-work)
7. [Route 03: Project Detail Routes (`/work/[slug]`)](#7-route-03-project-detail-routes-workslug)
   - [3.1 Route Template Architecture](#31-route-template-architecture)
   - [3.2 Project 1: Signverse (`/work/signverse`)](#32-project-1-signverse-worksignverse)
   - [3.3 Project 2: TheraTalk (`/work/theratalk`)](#33-project-2-theratalk-worktheratalk)
   - [3.4 Project 3: HandsFree Property (`/work/handsfree-property`)](#34-project-3-handsfree-property-workhandsfree-property)
   - [3.5 Project 4: Keyword Aggregator (`/work/keyword-aggregator`)](#35-project-4-keyword-aggregator-workkeyword-aggregator)
8. [Route 04: About Page (`/about`)](#8-route-04-about-page-about)
   - [4.1 Left Stationary Sidebar](#81-left-stationary-sidebar)
   - [4.2 Section 1: Biography & Narrative](#82-section-1-biography--narrative)
   - [4.3 Section 2: Philosophy & Core Principles](#83-section-2-philosophy--core-principles)
   - [4.4 Section 3: Professional Experience Pathway](#84-section-3-professional-experience-pathway)
   - [4.5 Section 4: Capabilities & Technical Stack](#85-section-4-capabilities--technical-stack)
   - [4.6 Section 5: Next Steps & Closing Actions](#86-section-5-next-steps--closing-actions)
9. [Route 05: Contact & Inquiries Page (`/contact`)](#9-route-05-contact--inquiries-page-contact)
   - [5.1 Contact Route Metadata & Left Sidebar](#91-contact-route-metadata--left-sidebar)
   - [5.2 Main Editorial Content & Availability](#92-main-editorial-content--availability)
   - [5.3 Direct Communication Channels](#93-direct-communication-channels)
   - [5.4 Location, Timezone & Response Details](#94-location-timezone--response-details)
10. [Route 06: Not Found / Error Page (`404`)](#10-route-06-not-found--error-page-404)
11. [Shared Component & UI Atoms Inventory](#11-shared-component--ui-atoms-inventory)
    - [ArchitectureDiagram Component](#architecturediagram-component)
    - [ProjectCard Component](#projectcard-component)
    - [SocialIcons Component](#socialicons-component)
    - [UI Button Component](#ui-button-component)
    - [UI IconButton Component](#ui-iconbutton-component)
    - [UI TextLink Component](#ui-textlink-component)
12. [Centralized Data Source: `portfolioData.ts`](#12-centralized-data-source-portfoliodatats)
13. [Duplicated Strings & Shared Patterns Matrix](#13-duplicated-strings--shared-patterns-matrix)
14. [Accessibility & Screen-Reader Inventory](#14-accessibility--screen-reader-inventory)
15. [Final Completeness & Limitations Report](#15-final-completeness--limitations-report)

---

## 1. Executive Summary & Audit Scope

This document represents a 100% complete, non-destructive audit of all user-visible and assistive text in the **Arjun Santhosh Portfolio V2** codebase. Every static string, computed label, template string, button text, link title, accessibility label (`aria-label`, `aria-describedby`), and metadata attribute has been cataloged without abbreviation, omission, or alteration.

### Audit Methodology
- **Code Inspection**: Manual and automated analysis of every TypeScript (`.ts`), TSX (`.tsx`), and CSS (`.css`) file within `src/app/`, `src/components/`, `src/data/`, and `public/`.
- **Exact Transcription**: All text is recorded verbatim, preserving exact capitalization, punctuation (e.g., em-dashes `—`, en-dashes `–`, curly apostrophes `’`, bullets `·`), line breaks, and whitespace where meaningful.
- **Source Tracing**: Every item includes its exact source file path, component name, semantic HTML tag, and classification.
- **Dynamic Content Identification**: Static literals are explicitly distinguished from data-driven properties originating in `src/data/portfolioData.ts`.

---

## 2. Route Audit Checklist

The portfolio implements 8 distinct routes (including static parameterizations and error handling). All routes have been verified:

| Route | File Path | Route Type | Status |
| :--- | :--- | :--- | :---: |
| `/` | `src/app/page.tsx` | Static Page (Client Component) | **Audited** |
| `/work` | `src/app/work/page.tsx` | Static Page (Client Component) | **Audited** |
| `/work/signverse` | `src/app/work/[slug]/page.tsx` | Static Param Route (`generateStaticParams`) | **Audited** |
| `/work/theratalk` | `src/app/work/[slug]/page.tsx` | Static Param Route (`generateStaticParams`) | **Audited** |
| `/work/handsfree-property` | `src/app/work/[slug]/page.tsx` | Static Param Route (`generateStaticParams`) | **Audited** |
| `/work/keyword-aggregator` | `src/app/work/[slug]/page.tsx` | Static Param Route (`generateStaticParams`) | **Audited** |
| `/about` | `src/app/about/page.tsx` | Static Page (Server Component) | **Audited** |
| `/contact` | `src/app/contact/page.tsx` | Static Page (Client Component + Server Layout) | **Audited** |
| `/not-found` (404) | `src/app/not-found.tsx` | Global Error / Fallback Page | **Audited** |

---

## 3. Content Classification & Taxonomy Guide

Every captured text element is categorized according to its structural and functional role:

- **`Heading`**: Page titles, section headings, display typography (`h1`, `h2`, `h3`, `h4`).
- **`Paragraph`**: Narrative blocks, introductory statements, project descriptions, blockquotes (`p`, `blockquote`).
- **`Button`**: Interactive action elements, CTAs, copy triggers (`button`, `.ui-btn`).
- **`Link`**: Navigation destinations, internal page transitions, external hyperlinks (`a`, `Link`).
- **`Label`**: Section index tags, status indicators, meta badges, tech stack pills, table/grid labels (`span`, `div`).
- **`Metadata`**: Document `<title>`, `<meta description>`, OpenGraph tags, JSON schema attributes.
- **`Accessibility Text`**: Screen-reader labels (`aria-label`, `aria-labelledby`, `aria-describedby`, `.sr-only`).
- **`Feedback / Message`**: Transient interactive confirmations, status indicators, empty states (`Copied!`, `Lost in transmission`).

---

## 4. Global Shell & Shared Layouts

### Source File: `src/app/layout.tsx` (Component: `RootLayout`)

#### SEO & Document Metadata
| Classification | Key / Target | Exact Text | Source / Mechanism |
| :--- | :--- | :--- | :--- |
| `Metadata` | `document.title` | `Arjun Santhosh — Software Developer & Systems Engineer` | Template: `${PERSONAL_DETAILS.name} — ${PERSONAL_DETAILS.title}` |
| `Metadata` | `meta[name="description"]` | `Turning complex technical problems into calm, thoughtful digital experiences. Software developer specializing in full-stack architecture, real-time client systems, computer vision interfaces, and high-performance web applications. Focused on engineering rigor, clean code contracts, and user-centered design.` | Template: `${PERSONAL_DETAILS.headline} ${PERSONAL_DETAILS.summary}` |
| `Metadata` | `meta[name="keywords"]` | `Arjun Santhosh, Product Engineer, Full-Stack Developer, Systems Engineer, Computer Vision, Next.js Portfolio, TypeScript, WebRTC` | Array literal in `layout.tsx` |
| `Metadata` | `meta[name="author"]` | `Arjun Santhosh` | Static reference: `PERSONAL_DETAILS.name` |
| `Metadata` | `og:title` | `Arjun Santhosh — Software Developer & Systems Engineer` | Template: `${PERSONAL_DETAILS.name} — ${PERSONAL_DETAILS.title}` |
| `Metadata` | `og:description` | `Turning complex technical problems into calm, thoughtful digital experiences.` | Static reference: `PERSONAL_DETAILS.headline` |
| `Metadata` | `og:type` | `website` | String literal |
| `Metadata` | `og:locale` | `en_US` | String literal |
| `Metadata` | `html[lang]` | `en` | Static attribute on `<html>` |

#### Accessibility & Navigation Shell
| Classification | Element | Exact Text | Target / Destination | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `a.skip-link` | `Skip to main content` | `#main-content` | Accessible jump link for keyboard/screen-reader users |

---

### Source File: `src/components/SiteHeader.tsx` (Component: `SiteHeader`)

> *Note: `SiteHeader` includes route filtering: it returns `null` on `/`, `/work`, `/about`, `/contact`, and `/work/*` because those pages utilize stationary editorial sidebars. It activates on secondary routes or custom fallback layouts.*

| Classification | Element | Exact Text | Target / Context | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `Link` | `Arjun Santhosh — Home` | `aria-label` on Brand link | Navigates to `/` |
| `Heading` | `span.font-primary` | `Arjun Santhosh` | Brand text | Bound to `PERSONAL_DETAILS.name` |
| `Label` | `span.font-mono` | `/ Dev` | Brand subtitle pill | Static text |
| `Accessibility Text` | `nav` | `Main Navigation` | `aria-label` on desktop nav | Static accessibility text |
| `Link` | `Link` | `Work` | Desktop nav link (`/work`) | Static text |
| `Link` | `Link` | `About` | Desktop nav link (`/about`) | Static text |
| `Link` | `Link` | `Contact` | Desktop nav link (`/contact`) | Static text |
| `Accessibility Text` | `button.mobile-toggle` | `Open menu` | `aria-label` when closed | Interactive state |
| `Accessibility Text` | `button.mobile-toggle` | `Close menu` | `aria-label` when opened | Interactive state |
| `Accessibility Text` | `nav.mobile-panel` | `Mobile Navigation` | `aria-label` on mobile menu | Static accessibility text |
| `Link` | `Link` | `Work` | Mobile nav drawer link (`/work`) | Static text |
| `Link` | `Link` | `About` | Mobile nav drawer link (`/about`) | Static text |
| `Link` | `Link` | `Contact` | Mobile nav drawer link (`/contact`) | Static text |

---

### Source File: `src/components/SiteFooter.tsx` (Component: `SiteFooter`)

> *Note: `SiteFooter` returns `null` on `/`, `/work`, `/about`, `/contact`, and `/work/*` where in-page footers and stationary sidebars manage closing actions. It renders on fallback and utility views.*

| Classification | Element | Exact Text | Target / Context | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Label` | `span.meta-index` | `(04)` | Section numerical badge | Static text |
| `Label` | `span` | `GET IN TOUCH` | Section category tag | Static uppercase text |
| `Heading` | `h2.font-primary` | `Have an engineering challenge or a product to build? ` | Closing invitation headline | Static text |
| `Heading` | `span.text-highlight-underline` | `Let’s connect.` | Closing invitation accent | Static text with curly apostrophe |
| `Button` | `Button` | `Email Arjun` | CTA Button (`mailto:...`) | Uses `PERSONAL_DETAILS.email` |
| `Button` | `Button` | `arjunsanthosh.dev@gmail.com` | Copy email button (default) | Bound to `PERSONAL_DETAILS.email` |
| `Feedback / Message`| `Button` | `Copied` | Copy email button (active state)| Displays for 2000ms upon click |
| `Accessibility Text` | `Button` | `Copy email address` | `aria-label` on copy email | Static accessibility text |
| `Label` | `span.meta-tag` | `DESTINATIONS` | Column 1 header | Static uppercase label |
| `Link` | `Link` | `Work Index` | Column 1 link (`/work`) | Static text |
| `Link` | `Link` | `About & Experience`| Column 1 link (`/about`) | Static text |
| `Link` | `Link` | `Contact` | Column 1 link (`/contact`) | Static text |
| `Label` | `span.meta-tag` | `PROFILES & SOURCE` | Column 2 header | Static uppercase label |
| `Link` | `a` | `GitHub` | Column 2 link (`PERSONAL_DETAILS.github`) | External link |
| `Link` | `a` | `LinkedIn` | Column 2 link (`PERSONAL_DETAILS.linkedin`) | External link |
| `Link` | `a` | `Download Résumé` | Column 2 link (`PERSONAL_DETAILS.resumePath`) | External link |
| `Label` | `span.meta-tag` | `STATUS & LOCATION` | Column 3 header | Static uppercase label |
| `Label` | `p` | `● Available for selected engineering roles & technical consulting` | Column 3 availability pill | Template: `● ${PERSONAL_DETAILS.availability}` |
| `Label` | `p` | `Location: Remote / India` | Column 3 location string | Template: `Location: ${PERSONAL_DETAILS.location}` |
| `Label` | `span` | `© 2026 Arjun Santhosh. Recreating editorial excellence.` | Copyright line | Template: `© ${PERSONAL_DETAILS.year} ${PERSONAL_DETAILS.name}. Recreating editorial excellence.` |
| `Button` | `Button` | `Back to top` | Scroll to top button | Triggers window scroll top: 0 |

---

## 5. Route 01: Home Page (`/`)

### Source File: `src/app/page.tsx` (Component: `Home`)

#### 1. Left Vertical Rail (`<aside className="home-rail">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `aside` | `Quick navigation and copyright rail` | `aria-label` | Static accessibility text |
| `Accessibility Text` | `Link` (Briefcase) | `View Projects and Work` | `aria-label` on Work icon | Target: `/work` |
| `Accessibility Text` | `Link` (User) | `Read About Arjun Santhosh` | `aria-label` on About icon | Target: `/about` |
| `Accessibility Text` | `Link` (Mail) | `Get in touch via Contact` | `aria-label` on Contact icon | Target: `/contact` |
| `Label` | `div.home-rail-copyright` | `© 2026 ARJUN SANTHOSH` | Rotated vertical copyright | Template: `© ${PERSONAL_DETAILS.year} ${PERSONAL_DETAILS.name.toUpperCase()}` |

#### 2. Left Editorial Biography Column (`<section className="home-editorial-col">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `section` | `Portfolio overview and biography` | `aria-label` | Static accessibility text |
| `Label` | `span.home-index-tag` | `(01) PORTFOLIO — 2026` | Top index tag | Static text with em-dash |
| `Heading` | `h1.home-name-title` | `Arjun Santhosh` | Primary display heading | Bound to `PERSONAL_DETAILS.name` |
| `Label` | `span.home-eyebrow-text` | `SOFTWARE DEVELOPER · SYSTEMS ENGINEER` | Eyebrow rule text | Static text with middle dot |
| `Heading` | `h2.home-hero-headline` | `Building thoughtful digital experiences.` | Editorial hero headline | Static text |
| `Paragraph` | `p.home-bio-statement` (Part 1) | `Software Developer & Systems Engineer working on ` | Narrative lead text | Static text with ampersand |
| `Link` | `TextLink` | `full-stack architecture` | Target: `/about` | Inline editorial link |
| `Paragraph` | `p.home-bio-statement` (Part 2) | ` — specializing in ` | Narrative transition | Static text with em-dash |
| `Link` | `TextLink` | `high-performance web applications` | Target: `/work` | Inline editorial link |
| `Paragraph` | `p.home-bio-statement` (Part 3) | `.` | Narrative closing period | Static punctuation |
| `Paragraph` | `p.home-tech-stack` | `Next.js · TypeScript · Distributed Systems` | Specialization strip | Static text with middle dots |
| `Button` | `Button` | `Explore selected work` | Primary CTA 1 (Target: `/work`) | Arrow: `up-right` |
| `Button` | `Button` | `About me` | Primary CTA 2 (Target: `/about`) | Arrow: `up-right` |

#### 3. Right Mega Navigation Column (`<section className="home-nav-col">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `section` | `Primary portfolio destinations` | `aria-label` | Static accessibility text |
| `Accessibility Text` | `nav` | `Main navigation menu` | `aria-label` | Static accessibility text |
| `Label` | `span.home-nav-item-num` | `01 —` | Nav index 1 | Static text with em-dash |
| `Heading` | `span.home-nav-item-title` | `WORK` | Nav title 1 (Target: `/work`) | Static uppercase text |
| `Accessibility Text` | `Link` | `WORK section (01)` | `aria-label` on Nav Item 1 | Dynamic template string |
| `Label` | `span.home-nav-item-num` | `02 —` | Nav index 2 | Static text with em-dash |
| `Heading` | `span.home-nav-item-title` | `ABOUT` | Nav title 2 (Target: `/about`) | Static uppercase text |
| `Accessibility Text` | `Link` | `ABOUT section (02)` | `aria-label` on Nav Item 2 | Dynamic template string |
| `Label` | `span.home-nav-item-num` | `03 —` | Nav index 3 | Static text with em-dash |
| `Heading` | `span.home-nav-item-title` | `CONTACT` | Nav title 3 (Target: `/contact`) | Static uppercase text |
| `Accessibility Text` | `Link` | `CONTACT section (03)` | `aria-label` on Nav Item 3 | Dynamic template string |
| `Label` | `span.home-status-text` | `AVAILABLE FOR SELECT PROJECTS` | Status indicator label | Static uppercase text |
| `Label` | `span.home-status-counter` | `01 / 03` | Default counter (work hovered) | State-computed: `activeNav === "work"` |
| `Label` | `span.home-status-counter` | `02 / 03` | Counter (about hovered) | State-computed: `activeNav === "about"` |
| `Label` | `span.home-status-counter` | `03 / 03` | Counter (contact hovered) | State-computed: `activeNav === "contact"` |

---

## 6. Route 02: Work Showcase Index (`/work`)

### Source File: `src/app/work/page.tsx` (Component: `WorkPage`)

#### 1. Left Stationary Sidebar (`<aside className="work-sidebar">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `aside` | `Work overview and navigation` | `aria-label` | Static accessibility text |
| `Button` | `Button` | `Home` | Target: `/`, Arrow: `left` | `aria-label="Return to portfolio home"` |
| `Label` | `span.work-sidebar-index-tag`| `(02) INDEX` | Index section tag | Static text |
| `Heading` | `h1.work-heading` | `WORK` | Primary page heading | Static uppercase text |
| `Paragraph` | `p.work-intro-p` (1) | `This is a showcase of my best work in a variety of fields including Full-Stack Architecture, Real-Time Client Systems, Computer Vision, and Distributed Systems.` | First intro paragraph | Static text |
| `Paragraph` | `p.work-intro-p` (2) | `The world of digital engineering and systems development is constantly evolving and so has my role throughout my career.` | Second intro paragraph | Static text |
| `Button` | `Button` | `Read about Arjun` | Target: `/about`, Arrow: `up-right` | `aria-label="Read about Arjun"` |
| `Button` | `Button` | `Get in touch` | Target: `/contact`, Arrow: `up-right` | `aria-label="Get in touch with Arjun"` |
| `Label` | `div.work-sidebar-meta` | `© 2026 Arjun Santhosh` | Stationary copyright | Hardcoded year + author |

#### 2. Right Projects Column (`<section className="work-projects-column">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Accessibility Text` | `section` | `Portfolio projects list` | `aria-label` | Static accessibility text |
| `Heading` | `span.work-project-title` | `Signverse` | Project 1 title (Target: `/work/signverse`) | Dynamic from `project.title` |
| `Label` | `div.work-category-label` | `– COMPUTER VISION & AI` | Project 1 category | Template: `– ${project.category.toUpperCase()}` |
| `Accessibility Text` | `Link` | `Signverse — Computer Vision & AI` | `aria-label` on project 1 row | Template: `${project.title} — ${project.category}` |
| `Heading` | `span.work-project-title` | `TheraTalk` | Project 2 title (Target: `/work/theratalk`) | Dynamic from `project.title` |
| `Label` | `div.work-category-label` | `– REAL-TIME SYSTEMS` | Project 2 category | Template: `– ${project.category.toUpperCase()}` |
| `Accessibility Text` | `Link` | `TheraTalk — Real-Time Systems` | `aria-label` on project 2 row | Template: `${project.title} — ${project.category}` |
| `Heading` | `span.work-project-title` | `HandsFree Property` | Project 3 title (Target: `/work/handsfree-property`) | Dynamic from `project.title` |
| `Label` | `div.work-category-label` | `– FULL-STACK ARCHITECTURE` | Project 3 category | Template: `– ${project.category.toUpperCase()}` |
| `Accessibility Text` | `Link` | `HandsFree Property — Full-Stack Architecture` | `aria-label` on project 3 row | Template: `${project.title} — ${project.category}` |
| `Heading` | `span.work-project-title` | `Keyword Aggregator` | Project 4 title (Target: `/work/keyword-aggregator`) | Dynamic from `project.title` |
| `Label` | `div.work-category-label` | `– DATA ENGINEERING` | Project 4 category | Template: `– ${project.category.toUpperCase()}` |
| `Accessibility Text` | `Link` | `Keyword Aggregator — Data Engineering` | `aria-label` on project 4 row | Template: `${project.title} — ${project.category}` |

#### 3. Floating Preview Card (Desktop Hover State)
| Classification | Element | Exact Text | Target / Context | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Label` | `div.floating-card-badge` (1)| `${activeProject.category}` | Category pill | Dynamic from `activeProject.category` |
| `Label` | `div.floating-card-badge` (2)| `·` | Middle divider dot | Static text |
| `Label` | `div.floating-card-badge` (3)| `${activeProject.year}` | Year badge | Dynamic from `activeProject.year` |
| `Paragraph` | `div.floating-card-subtitle` | `${activeProject.subtitle}` | Project summary subtitle | Dynamic from `activeProject.subtitle` |
| `Label` | `span.floating-tech-pill` | `${tech}` (Up to 3 pills) | Preview tech pills | Slice: `activeProject.technologies.slice(0, 3)` |
| `Button` / `Label` | `span.font-mono` | `VIEW CASE STUDY` | Preview action callout | Static uppercase text |

---

## 7. Route 03: Project Detail Routes (`/work/[slug]`)

### Source File: `src/app/work/[slug]/page.tsx` (Component: `ProjectCaseStudyPage`)

### 3.1 Route Template Architecture

All project routes share a common editorial template:

#### Template SEO & Navigation
| Classification | Element | Pattern / String | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Metadata` | `document.title` | `${project.title} — Case Study · Arjun Santhosh` | Template: `${project.title} — Case Study · ${PERSONAL_DETAILS.name}` |
| `Metadata` | `meta[name="description"]` | `${project.tagline}` | Direct from `project.tagline` |
| `Metadata` | `document.title` (fallback) | `Project Not Found · Arjun Santhosh` | Rendered when slug fails lookup |
| `Button` | `Button` | `Work` | Target: `/work`, Arrow: `left`, `aria-label="Return to Work index"` |
| `Label` | `span.project-sidebar-index-tag` | `(02) ${index+1} / 04` | Formatted index badge (e.g., `(02) 01 / 04`) |
| `Label` | `span` | `ROLE` | Sidebar metadata label |
| `Label` | `span` | `TIMELINE` | Sidebar metadata label |
| `Label` | `span` | `STACK` | Sidebar metadata label |
| `Label` | `span` | `${project.technologies.length} TECHNOLOGIES` | Computed tech count badge |
| `Button` | `Button` | `Live Demo` | Rendered if `project.liveUrl`, Arrow: `up-right` |
| `Button` | `Button` | `Source Code` | Rendered if `project.githubUrl`, Icon: `GitBranch` |
| `Link` | `Link.project-sidebar-nav-btn` | `${prevProject.title}` | Previous project button (Arrow: `left`) |
| `Link` | `Link.project-sidebar-nav-btn` | `${nextProject.title}` | Next project button (Arrow: `right`) |
| `Button` | `Button` | `All Case Studies` | Target: `/work`, Arrow: `up-right` |
| `Label` | `div.project-sidebar-copyright` | `© 2026 Arjun Santhosh` | Template: `© ${PERSONAL_DETAILS.year} ${PERSONAL_DETAILS.name}` |

#### Template Section Headings & Static Labels
| Classification | Section | Element | Exact Text |
| :--- | :--- | :--- | :--- |
| `Label` | Hero Banner | `span` | `(CASE STUDY)` |
| `Accessibility Text` | Hero Banner | `div.project-tech-pills-wrap` | `aria-label="Core technologies used"` |
| `Label` | Section 01 | `span.project-section-tag` | `(01) PROBLEM & CONSTRAINTS` |
| `Heading` | Section 01 | `h3.project-section-heading` | `What needed to be solved, and why did it matter?` |
| `Label` | Section 01 | `span.project-callout-label` | `Technical Constraints & Edge Cases` |
| `Label` | Section 02 | `span.project-section-tag` | `(02) ARCHITECTURE & SCOPE` |
| `Heading` | Section 02 | `h3.project-section-heading` | `Implementation strategy & individual contribution` |
| `Label` | Section 02 | `span.project-callout-label` | `Arjun's Direct Responsibility` |
| `Label` | Section 03 | `span.project-section-tag` | `(03) SYSTEM PIPELINE` |
| `Heading` | Section 03 | `h3.project-section-heading` | `Architecture & Data Flow` |
| `Label` | Section 04 | `span.project-section-tag` | `(04) MEASURED OUTCOMES` |
| `Heading` | Section 04 | `h3.project-section-heading` | `Tangible metrics & engineering trade-offs` |
| `Heading` | Section 04 | `h4.project-tradeoff-title` | `Explicit Engineering Trade-off` |
| `Label` | Section 05 | `span.project-section-tag` | `(05) KEY TAKEAWAYS` |
| `Heading` | Section 05 | `h3.project-section-heading` | `What I learned & technical evolution` |
| `Button` | Section 05 | `Button` | `View Live Prototype` (Rendered if `liveUrl`) |
| `Button` | Section 05 | `Button` | `View Repository` (Rendered if `githubUrl`) |
| `Accessibility Text` | Nav Cards | `nav` | `aria-label="Adjacent project case studies"` |
| `Label` | Nav Cards | `span.project-nav-card-tag` | `PREVIOUS PROJECT` |
| `Label` | Nav Cards | `span.project-nav-card-tag` | `NEXT PROJECT` |
| `Accessibility Text` | Closing Banner | `aside` | `aria-label="Explore other work or contact"` |
| `Heading` | Closing Banner | `h4.project-closing-title` | `Explore more case studies or discuss an engineering role` |
| `Paragraph` | Closing Banner | `p.project-closing-desc` | `Direct access to project indices, architecture notes, and contact channels.` |
| `Button` | Closing Banner | `Button` | `All Projects` (Target: `/work`, Arrow: `left`) |
| `Button` | Closing Banner | `Button` | `Contact Arjun` (Target: `/contact`, Arrow: `up-right`) |

---

### 3.2 Project 1: Signverse (`/work/signverse`)

- **Route Slug**: `signverse`
- **Source Record**: `PROJECTS[0]` in `src/data/portfolioData.ts`

| Field / Location | Classification | Exact Content |
| :--- | :--- | :--- |
| **SEO Title** | `Metadata` | `Signverse — Case Study · Arjun Santhosh` |
| **SEO Description** | `Metadata` | `Real-time computer vision platform facilitating two-way communication and guided learning for sign language gestures.` |
| **Sidebar Eyebrow** | `Label` | `Computer Vision & AI · 2025` |
| **Project Title** | `Heading` | `Signverse` |
| **Tagline** | `Paragraph` | `Real-time computer vision platform facilitating two-way communication and guided learning for sign language gestures.` |
| **Subtitle** | `Paragraph` | `AI-Powered Sign Language Learning & Recognition Platform` |
| **Category** | `Label` | `Computer Vision & AI` |
| **Role** | `Label` | `Lead Full-Stack & Interface Engineer` |
| **Timeline** | `Label` | `4 Months` |
| **Year** | `Label` | `2025` |
| **Stack Count** | `Label` | `6 TECHNOLOGIES` |
| **Technologies** | `Label` | `Next.js`, `TypeScript`, `MediaPipe`, `WebAssembly`, `Canvas API`, `FastAPI` |
| **Live URL Action** | `Button` | `Live Demo` (href: `https://signverse.demo`, aria-label: `View live prototype for Signverse`) |
| **GitHub Action** | `Button` | `Source Code` (href: `https://github.com/arjunsanthosh/signverse`, aria-label: `View source code on GitHub for Signverse`) |
| **Hero Badge** | `Label` | `(CASE STUDY) · COMPUTER VISION & AI · 2025` |
| **Problem Statement** | `Paragraph` | `Traditional sign language tutorials rely on static illustrations or pre-recorded videos where learners receive zero verification on hand orientation, finger angle, or motion trajectory.` |
| **Technical Challenge** | `Paragraph` | `Executing computer vision models directly within browser web workers without overheating mobile GPUs or dropping frames during rapid hand gestures, while guaranteeing the interface remains completely accessible.` |
| **Implementation Solution** | `Paragraph` | `Offloaded landmark coordinate tracking to an optimized WebAssembly worker pipeline, decoupling frame capture from DOM rendering through an offscreen Canvas buffer. Built immediate visual feedback indicators using calm mint and soft blue orbital arcs rather than intrusive alarms.` |
| **Direct Contribution** | `Paragraph` | `Designed and developed the full web application, created the client-side landmark processing pipeline using MediaPipe and WebAssembly, and built interactive feedback visualizers.` |
| **Technical Detail Metric** | `Paragraph` | `Zero-cloud inference latency: Processes 21 3D hand landmarks in-browser at 60 FPS with privacy-first client-side computation.` |
| **Architecture Notes** | `Paragraph` | `Browser WebRTC video feed passes frames to a dedicated WebWorker running MediaPipe Hands. Landmark coordinates are compared against reference vector embeddings via Euclidean cosine distance calculations.` |
| **Architecture Diagram Title** | `Heading` | `Signverse System Pipeline` |
| **Architecture Node 1** | `Heading` / `Paragraph` | **Title**: `Video Ingestion`<br>**Description**: `Browser MediaDevices API capturing 720p 60fps video feed with strict user privacy constraints.`<br>**Tags**: `WebRTC`, `MediaDevices` |
| **Architecture Node 2** | `Heading` / `Paragraph` | **Title**: `Wasm Inference Pipeline`<br>**Description**: `MediaPipe Hands tracking 21 key points per hand in a decoupled Web Worker thread.`<br>**Tags**: `WebAssembly`, `WebWorker` |
| **Architecture Node 3** | `Heading` / `Paragraph` | **Title**: `Vector Similarity Engine`<br>**Description**: `Compares current joint angles and distance ratios against normalized sign dictionary vectors.`<br>**Tags**: `Math / Cosine`, `TypeScript` |
| **Architecture Node 4** | `Heading` / `Paragraph` | **Title**: `Feedback Renderer`<br>**Description**: `Renders adaptive skeletal overlay and step-by-step progress prompts on the interactive canvas.`<br>**Tags**: `Canvas API`, `RequestAnimationFrame` |
| **Result 1** | `Label` / `Paragraph` | **Metric**: `< 40ms`<br>**Label**: `Feedback Latency`<br>**Description**: `Real-time gesture verification loop run entirely client-side without round-trip network hops.` |
| **Result 2** | `Label` / `Paragraph` | **Metric**: `60 FPS`<br>**Label**: `Sustained Framerate`<br>**Description**: `Fluid skeletal tracking on standard laptops and modern mobile browsers.` |
| **Result 3** | `Label` / `Paragraph` | **Metric**: `100%`<br>**Label**: `Local Privacy`<br>**Description**: `Video stream never leaves the client device; zero camera data uploaded to external servers.` |
| **Engineering Trade-off** | `Paragraph` | `Prioritized client-side WebAssembly inference over heavy server-side deep learning models. This capped memory overhead to under 120MB while requiring thoughtful optimization for older mobile processors.` |
| **Retrospective & Learnings** | `Paragraph` | `Learned the nuances of spatial coordinate normalization across diverse screen aspect ratios, and the vital importance of clear, non-punitive UI feedback in assistive learning tools.` |
| **Public Action: Live** | `Button` | `View Live Prototype` (href: `https://signverse.demo`, aria-label: `Open Signverse live prototype in a new tab`) |
| **Public Action: Repo** | `Button` | `View Repository` (href: `https://github.com/arjunsanthosh/signverse`, aria-label: `Open Signverse GitHub repository in a new tab`) |
| **Nav: Previous Project** | `Link` | `Keyword Aggregator` (href: `/work/keyword-aggregator`, Category: `Data Engineering`) |
| **Nav: Next Project** | `Link` | `TheraTalk` (href: `/work/theratalk`, Category: `Real-Time Systems`) |

---

### 3.3 Project 2: TheraTalk (`/work/theratalk`)

- **Route Slug**: `theratalk`
- **Source Record**: `PROJECTS[1]` in `src/data/portfolioData.ts`

| Field / Location | Classification | Exact Content |
| :--- | :--- | :--- |
| **SEO Title** | `Metadata` | `TheraTalk — Case Study · Arjun Santhosh` |
| **SEO Description** | `Metadata` | `Confidential, low-latency video consultation and real-time session notes platform built for licensed practitioners.` |
| **Sidebar Eyebrow** | `Label` | `Real-Time Systems · 2024` |
| **Project Title** | `Heading` | `TheraTalk` |
| **Tagline** | `Paragraph` | `Confidential, low-latency video consultation and real-time session notes platform built for licensed practitioners.` |
| **Subtitle** | `Paragraph` | `Secure Telehealth & Wellness Consultation System` |
| **Category** | `Label` | `Real-Time Systems` |
| **Role** | `Label` | `Full-Stack Engineer` |
| **Timeline** | `Label` | `3 Months` |
| **Year** | `Label` | `2024` |
| **Stack Count** | `Label` | `6 TECHNOLOGIES` |
| **Technologies** | `Label` | `React`, `Node.js`, `WebRTC`, `Socket.io`, `PostgreSQL`, `WebCrypto` |
| **Live URL Action** | `Button` | *None (undefined)* |
| **GitHub Action** | `Button` | `Source Code` (href: `https://github.com/arjunsanthosh/theratalk`, aria-label: `View source code on GitHub for TheraTalk`) |
| **Hero Badge** | `Label` | `(CASE STUDY) · REAL-TIME SYSTEMS · 2024` |
| **Problem Statement** | `Paragraph` | `Therapists frequently juggle multiple disconnected tools: calendar apps for bookings, generic video conference links with privacy concerns, and separate note-taking software.` |
| **Technical Challenge** | `Paragraph` | `Managing peer-to-peer connection states through symmetric NAT firewalls without incurring massive TURN bandwidth costs, while maintaining end-to-end encrypted practitioner notes.` |
| **Implementation Solution** | `Paragraph` | `Implemented a lightweight signaling coordinator with auto-healing STUN/TURN fallback cascades and AES-256 encrypted practitioner session storage with zero plaintext persistence.` |
| **Direct Contribution** | `Paragraph` | `Engineered the WebRTC peer connection manager, automated ICE signaling via WebSocket fallbacks, encrypted session notes storage, and unified the consultation interface.` |
| **Technical Detail Metric** | `Paragraph` | `Adaptive bitrate renegotiation maintaining call stability across erratic mobile internet connections with sub-200ms audio-video sync.` |
| **Architecture Notes** | `Paragraph` | `Peer-to-peer WebRTC mesh for 1:1 sessions with WebSocket signaling server handling room discovery, connection state recovery, and encrypted appointment metadata synchronisation.` |
| **Architecture Diagram Title** | `Heading` | `TheraTalk System Pipeline` |
| **Architecture Node 1** | `Heading` / `Paragraph` | **Title**: `Signaling Hub`<br>**Description**: `Node.js WebSocket cluster managing session authentication and offer/answer SDP exchange.`<br>**Tags**: `Socket.io`, `Node.js` |
| **Architecture Node 2** | `Heading` / `Paragraph` | **Title**: `WebRTC P2P Mesh`<br>**Description**: `Direct encrypted audio/video channel with automatic bitrate adaptation.`<br>**Tags**: `WebRTC`, `SRTP` |
| **Architecture Node 3** | `Heading` / `Paragraph` | **Title**: `Encrypted Note Vault`<br>**Description**: `Client-side encrypted practitioner notes stored with per-session ephemeral keys.`<br>**Tags**: `WebCrypto`, `PostgreSQL` |
| **Result 1** | `Label` / `Paragraph` | **Metric**: `99.4%`<br>**Label**: `Connection Success`<br>**Description**: `Successful first-attempt peer negotiation across standard residential networks.` |
| **Result 2** | `Label` / `Paragraph` | **Metric**: `< 180ms`<br>**Label**: `Glass-to-Glass Latency`<br>**Description**: `Uninterrupted audio clarity crucial for natural therapy conversations.` |
| **Result 3** | `Label` / `Paragraph` | **Metric**: `E2EE`<br>**Label**: `Data Security`<br>**Description**: `Client-side encrypted consultation notes with zero third-party disclosure.` |
| **Engineering Trade-off** | `Paragraph` | `Chose a 1-on-1 direct peer mesh rather than an SFU (Selective Forwarding Unit) to maximize privacy and avoid ongoing media server hosting costs, intentionally scoping the platform for intimate individual sessions.` |
| **Retrospective & Learnings** | `Paragraph` | `Deepened expertise in WebRTC connection states, ICE trickle candidates, and designing calming interfaces for emotionally sensitive environments.` |
| **Public Action: Live** | `Button` | *None* |
| **Public Action: Repo** | `Button` | `View Repository` (href: `https://github.com/arjunsanthosh/theratalk`, aria-label: `Open TheraTalk GitHub repository in a new tab`) |
| **Nav: Previous Project** | `Link` | `Signverse` (href: `/work/signverse`, Category: `Computer Vision & AI`) |
| **Nav: Next Project** | `Link` | `HandsFree Property` (href: `/work/handsfree-property`, Category: `Full-Stack Architecture`) |

---

### 3.4 Project 3: HandsFree Property (`/work/handsfree-property`)

- **Route Slug**: `handsfree-property`
- **Source Record**: `PROJECTS[2]` in `src/data/portfolioData.ts`

| Field / Location | Classification | Exact Content |
| :--- | :--- | :--- |
| **SEO Title** | `Metadata` | `HandsFree Property — Case Study · Arjun Santhosh` |
| **SEO Description** | `Metadata` | `Property management dashboard centralizing tenant lease cycles, vendor work orders, and financial reconciliations.` |
| **Sidebar Eyebrow** | `Label` | `Full-Stack Architecture · 2024` |
| **Project Title** | `Heading` | `HandsFree Property` |
| **Tagline** | `Paragraph` | `Property management dashboard centralizing tenant lease cycles, vendor work orders, and financial reconciliations.` |
| **Subtitle** | `Paragraph` | `Automated Real Estate Operations & Portfolio Analytics` |
| **Category** | `Label` | `Full-Stack Architecture` |
| **Role** | `Label` | `Full-Stack Developer` |
| **Timeline** | `Label` | `4 Months` |
| **Year** | `Label` | `2024` |
| **Stack Count** | `Label` | `6 TECHNOLOGIES` |
| **Technologies** | `Label` | `Next.js`, `TypeScript`, `Express`, `PostgreSQL`, `Redis`, `Tailored CSS` |
| **Live URL Action** | `Button` | *None (undefined)* |
| **GitHub Action** | `Button` | `Source Code` (href: `https://github.com/arjunsanthosh/handsfree-property`, aria-label: `View source code on GitHub for HandsFree Property`) |
| **Hero Badge** | `Label` | `(CASE STUDY) · FULL-STACK ARCHITECTURE · 2024` |
| **Problem Statement** | `Paragraph` | `Property owners and independent managers waste significant hours every month manually reconciling banking receipts, drafting late notices, and dispatching repair technicians via text messages.` |
| **Technical Challenge** | `Paragraph` | `Ensuring financial records and lease document generation remain strictly consistent across concurrent tenant payments and irregular bank settlement webhooks.` |
| **Implementation Solution** | `Paragraph` | `Constructed an idempotent payment reconciliation pipeline backed by Redis distributed locks and PostgreSQL ACID transactions with complete audit trail history.` |
| **Direct Contribution** | `Paragraph` | `Built the responsive multi-tenant portal, automated payment webhook reconciliation engine, and scheduled asynchronous maintenance dispatch queues.` |
| **Technical Detail Metric** | `Paragraph` | `Atomic database transactions preventing double-billing during webhook retries, alongside background worker jobs handling multi-channel SMS and email notifications.` |
| **Architecture Notes** | `Paragraph` | `Next.js web portal communicating with an Express REST API. Asynchronous worker processes handle automated ledger entries, document compilation, and vendor communication.` |
| **Architecture Diagram Title** | `Heading` | `HandsFree Property System Pipeline` |
| **Architecture Node 1** | `Heading` / `Paragraph` | **Title**: `Client Portal`<br>**Description**: `Responsive portal for owners and tenants with real-time payment status and ticket tracking.`<br>**Tags**: `Next.js`, `TypeScript` |
| **Architecture Node 2** | `Heading` / `Paragraph` | **Title**: `Payment Reconciliation`<br>**Description**: `Idempotent webhook processor utilizing Redis locks to prevent duplicate settlement updates.`<br>**Tags**: `PostgreSQL`, `Redis` |
| **Architecture Node 3** | `Heading` / `Paragraph` | **Title**: `Dispatch Queue`<br>**Description**: `Asynchronous task queue prioritizing maintenance emergencies and dispatching alerts.`<br>**Tags**: `BullMQ`, `Worker Processes` |
| **Result 1** | `Label` / `Paragraph` | **Metric**: `100%`<br>**Label**: `Payment Idempotency`<br>**Description**: `Zero duplicate transactions recorded across automated webhook reconciliation pipelines.` |
| **Result 2** | `Label` / `Paragraph` | **Metric**: `99.9%`<br>**Label**: `Notification Uptime`<br>**Description**: `Reliable automated tenant receipt and maintenance notifications delivered.` |
| **Result 3** | `Label` / `Paragraph` | **Metric**: `-75%`<br>**Label**: `Admin Overhead`<br>**Description**: `Replaced manual bank reconciliation spreadsheets with automated background workers.` |
| **Engineering Trade-off** | `Paragraph` | `Selected PostgreSQL relational schemas over document stores to guarantee strict financial ledger integrity and referential constraints across complex lease contracts.` |
| **Retrospective & Learnings** | `Paragraph` | `Learned the critical value of database migration sanity checks, comprehensive transactional error logging, and resilient webhook signature verification.` |
| **Public Action: Live** | `Button` | *None* |
| **Public Action: Repo** | `Button` | `View Repository` (href: `https://github.com/arjunsanthosh/handsfree-property`, aria-label: `Open HandsFree Property GitHub repository in a new tab`) |
| **Nav: Previous Project** | `Link` | `TheraTalk` (href: `/work/theratalk`, Category: `Real-Time Systems`) |
| **Nav: Next Project** | `Link` | `Keyword Aggregator` (href: `/work/keyword-aggregator`, Category: `Data Engineering`) |

---

### 3.5 Project 4: Keyword Aggregator (`/work/keyword-aggregator`)

- **Route Slug**: `keyword-aggregator`
- **Source Record**: `PROJECTS[3]` in `src/data/portfolioData.ts`

| Field / Location | Classification | Exact Content |
| :--- | :--- | :--- |
| **SEO Title** | `Metadata` | `Keyword Aggregator — Case Study · Arjun Santhosh` |
| **SEO Description** | `Metadata` | `High-throughput aggregation tool querying search trends, clustering semantic intent, and calculating keyword opportunity scores.` |
| **Sidebar Eyebrow** | `Label` | `Data Engineering · 2023` |
| **Project Title** | `Heading` | `Keyword Aggregator` |
| **Tagline** | `Paragraph` | `High-throughput aggregation tool querying search trends, clustering semantic intent, and calculating keyword opportunity scores.` |
| **Subtitle** | `Paragraph` | `High-Throughput SEO Intelligence & Content Clustering Engine` |
| **Category** | `Label` | `Data Engineering` |
| **Role** | `Label` | `Backend & Systems Developer` |
| **Timeline** | `Label` | `2 Months` |
| **Year** | `Label` | `2023` |
| **Stack Count** | `Label` | `6 TECHNOLOGIES` |
| **Technologies** | `Label` | `Python`, `FastAPI`, `React`, `Redis`, `Pandas`, `Docker` |
| **Live URL Action** | `Button` | *None (undefined)* |
| **GitHub Action** | `Button` | `Source Code` (href: `https://github.com/arjunsanthosh/keyword-aggregator`, aria-label: `View source code on GitHub for Keyword Aggregator`) |
| **Hero Badge** | `Label` | `(CASE STUDY) · DATA ENGINEERING · 2023` |
| **Problem Statement** | `Paragraph` | `SEO analysts and content creators spent countless hours downloading raw CSV data from disparate search APIs and manually categorizing keyword intent in spreadsheets.` |
| **Technical Challenge** | `Paragraph` | `Aggregating data from multiple third-party search APIs with strict rate limits without triggering IP bans or stalling user queries during large batch imports.` |
| **Implementation Solution** | `Paragraph` | `Engineered an asynchronous queue using Redis token-bucket throttling with exponential backoff and semantic TF-IDF text clustering for instant categorization.` |
| **Direct Contribution** | `Paragraph` | `Architected the asynchronous scraping and aggregation API, built the Redis-backed token bucket rate limiter, and created a responsive dashboard for instant data filtering.` |
| **Technical Detail Metric** | `Paragraph` | `Parallel batch processing capable of clustering 50,000+ search terms in seconds with localized memory caching and graceful upstream API throttling.` |
| **Architecture Notes** | `Paragraph` | `FastAPI backend with background Celery/Redis tasks pulling search trend metrics, computing keyword difficulty vectors, and streaming real-time status back to the client.` |
| **Architecture Diagram Title** | `Heading` | `Keyword Aggregator System Pipeline` |
| **Architecture Node 1** | `Heading` / `Paragraph` | **Title**: `Aggregator API`<br>**Description**: `FastAPI endpoints accepting keyword batch requests with request validation.`<br>**Tags**: `FastAPI`, `Python` |
| **Architecture Node 2** | `Heading` / `Paragraph` | **Title**: `Rate-Limiting Buffer`<br>**Description**: `Token-bucket throttler pacing external requests according to individual vendor tier limits.`<br>**Tags**: `Redis`, `Asyncio` |
| **Architecture Node 3** | `Heading` / `Paragraph` | **Title**: `Semantic Clustered Store`<br>**Description**: `N-gram and TF-IDF clustering grouping terms by informational vs transactional intent.`<br>**Tags**: `Pandas`, `Scikit-Learn` |
| **Result 1** | `Label` / `Paragraph` | **Metric**: `12s`<br>**Label**: `Batch Processing`<br>**Description**: `50,000+ raw search terms deduplicated, categorized, and scored per execution.` |
| **Result 2** | `Label` / `Paragraph` | **Metric**: `0`<br>**Label**: `API Rate-Limit Penalties`<br>**Description**: `Zero upstream 429 throttling errors through intelligent token-bucket scheduling.` |
| **Engineering Trade-off** | `Paragraph` | `Opted for an in-memory Redis cache for active user queries to prioritize lightning-fast analysis over heavy long-term historical storage.` |
| **Retrospective & Learnings** | `Paragraph` | `Gained deep appreciation for distributed rate limiting, backpressure management, and efficient Python memory handling when parsing gigabytes of JSON payloads.` |
| **Public Action: Live** | `Button` | *None* |
| **Public Action: Repo** | `Button` | `View Repository` (href: `https://github.com/arjunsanthosh/keyword-aggregator`, aria-label: `Open Keyword Aggregator GitHub repository in a new tab`) |
| **Nav: Previous Project** | `Link` | `HandsFree Property` (href: `/work/handsfree-property`, Category: `Full-Stack Architecture`) |
| **Nav: Next Project** | `Link` | `Signverse` (href: `/work/signverse`, Category: `Computer Vision & AI`) |

---

## 8. Route 04: About Page (`/about`)

### Source File: `src/app/about/page.tsx` (Component: `AboutPage`)

#### 8.1 Left Stationary Sidebar (`<aside className="about-sidebar">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Metadata` | `document.title` | `About — Arjun Santhosh` | Route metadata | Template: `About — ${PERSONAL_DETAILS.name}` |
| `Metadata` | `meta[name="description"]` | `Professional background, systems engineering principles, career history, and core competencies of Arjun Santhosh.` | Route metadata | Dynamic author insertion |
| `Accessibility Text` | `aside` | `About overview and navigation` | `aria-label` | Static accessibility text |
| `Button` | `Button` | `Home` | Target: `/`, Arrow: `left` | `aria-label="Return to portfolio home"` |
| `Label` | `span.about-section-tag` | `(03) ABOUT` | Top section index tag | Static text |
| `Heading` | `h1.about-heading` | `ABOUT` | Primary sidebar heading | Static uppercase text |
| `Paragraph` | `p.work-intro-p` (1) | `I'm a software developer and systems engineer specializing in resilient web architecture, real-time client systems, and distributed platforms.` | Intro paragraph 1 | Static text with apostrophe |
| `Paragraph` | `p.work-intro-p` (2) | `Dedicated to building software where latency, predictability, and thoughtful craft matter.` | Intro paragraph 2 | Static text |
| `Button` | `Button` | `View Projects` | Target: `/work`, Arrow: `up-right` | `aria-label="View Projects"` |
| `Button` | `Button` | `Get in touch` | Target: `/contact`, Arrow: `up-right` | `aria-label="Get in touch with Arjun"` |
| `Label` | `div.work-sidebar-meta` | `© 2026 Arjun Santhosh` | Copyright footer | Template: `© ${PERSONAL_DETAILS.year} ${PERSONAL_DETAILS.name}` |

---

#### 8.2 Section 1: Biography & Narrative (`<article aria-label="Personal introduction and background">`)
| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Accessibility Text` | `article` | `Personal introduction and background` | `aria-label` attribute |
| `Heading` | `h2.about-subheading` | `I'm Arjun. A software developer and systems engineer building resilient web architecture.` | Editorial narrative heading |
| `Paragraph` | `p.about-narrative-p` (1) | `The intersection of systems engineering and human interaction has always driven my curiosity. I've never hesitated to dive deep into how software behaves under the hood—from understanding byte-level data pipelines and database normalization to crafting fluid, responsive interfaces that respect user focus.` | Biography narrative paragraph 1 |
| `Paragraph` | `p.about-narrative-p` (2) | `Tracing my journey through computational algorithms, real-time client systems, and distributed web platforms, I've worked across the full product lifecycle. What began with algorithmic puzzles and network scrapers evolved into architecting production applications that handle computer vision in the browser (Signverse), secure low-latency WebRTC telehealth sessions (TheraTalk), and automated data pipelines (Handsfree Property & Keyword Aggregator).` | Biography narrative paragraph 2 with project references |
| `Paragraph` | `p.about-narrative-p` (3) | `I am drawn to systems where latency matters, where failure modes must be predictable, and where thoughtful design makes complex infrastructure feel effortless. Outside of code, I immerse myself in distributed systems literature, interactive graphics, mechanical keyboards, and architectural minimalism.` | Biography narrative paragraph 3 |

---

#### 8.3 Section 2: Philosophy & Core Principles (`<section aria-labelledby="philosophy-heading">`)
| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Heading` | `h2#philosophy-heading` | `Philosophy & Approach` | Section title |
| `Label` | `span.about-section-tag` | `GUIDING PRINCIPLES` | Section category tag |
| `Paragraph` | `p.about-quote-text` | `“Simplicity is prerequisite for reliability. Complex systems disguise failure; clear architecture makes trade-offs explicit.”` | Feature pull quote |
| `Label` | `cite.about-quote-author`| `— EDSGER W. DIJKSTRA · ADAPTED TO SYSTEMS ARCHITECTURE` | Quote attribution citation |
| `Label` | `span.about-principle-number` (1)| `01 / ARCHITECTURE` | Principle 1 index |
| `Heading` | `h3.about-principle-name` (1)| `Predictability over Novelty` | Principle 1 title |
| `Paragraph` | `p.about-principle-text` (1)| `Building explicit data contracts, relational schemas with strict constraints, and deterministic state transitions. Speculative abstractions are avoided until real workloads demand them.` | Principle 1 description |
| `Label` | `span.about-principle-number` (2)| `02 / PERFORMANCE` | Principle 2 index |
| `Heading` | `h3.about-principle-name` (2)| `Client Efficiency & Privacy` | Principle 2 title |
| `Paragraph` | `p.about-principle-text` (2)| `Running computation client-side with WebAssembly and WebWorkers when sensible. Eliminating unnecessary round-trip network hops while keeping sensitive user media strictly on-device.` | Principle 2 description |
| `Label` | `span.about-principle-number` (3)| `03 / INTERACTION` | Principle 3 index |
| `Heading` | `h3.about-principle-name` (3)| `Respect for User Focus` | Principle 3 title |
| `Paragraph` | `p.about-principle-text` (3)| `Interfaces should be calm and responsive. High-contrast typography, zero cumulative layout shifts, WCAG 2.1 AA accessibility, and subtle micro-interactions that enhance clarity.` | Principle 3 description |

---

#### 8.4 Section 3: Professional Experience Pathway (`CareerJourneyPathway.tsx`)

| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Accessibility Text` | `div.career-journey-container` | `Professional Experience Pathway` | `aria-label` and `role="region"` |
| `Heading` | `h2#experience-heading` | `Experience` | Section title |
| `Label` | `span.about-section-tag` | `MILESTONES · 2022 — PRESENT` | Section tag with em-dash |
| `Label` | Stage 1 Index Tag | `CURRENT ENGAGEMENT` | Internal stage label `stageLabels[0]` |
| `Label` | `span.career-card-period` (1) | `2024 — Present` | Bound to `EXPERIENCES[0].period` |
| `Label` | `span.career-card-divider` | `·` | Middle divider dot |
| `Label` | `span.career-card-location` (1) | `Remote` | Bound to `EXPERIENCES[0].location` |
| `Label` | `span.career-card-index` (1) | `(01)` | Stage number badge |
| `Heading` | `h3.career-card-role` (1) | `Full-Stack Software Developer` | Bound to `EXPERIENCES[0].role` |
| `Label` | `div.career-card-company` (1) | `Independent Software Engineering & Systems Consulting` | Bound to `EXPERIENCES[0].companyOrContext` |
| `Paragraph` | `p.career-card-desc` (1) | `Architecting end-to-end web applications, interactive platforms, and scalable backend services with modern TypeScript, Next.js, and cloud ecosystems.` | Bound to `EXPERIENCES[0].description` |
| `Paragraph` | `li.career-highlight-row` (1.1)| `Engineered real-time computer vision and WebRTC communication platforms with sub-200ms interaction latencies.` | `EXPERIENCES[0].highlights[0]` |
| `Paragraph` | `li.career-highlight-row` (1.2)| `Designed resilient relational schemas, asynchronous job queues, and automated reconciliation systems.` | `EXPERIENCES[0].highlights[1]` |
| `Paragraph` | `li.career-highlight-row` (1.3)| `Maintained 100% commitment to responsive, accessible, and high-performance user interfaces.` | `EXPERIENCES[0].highlights[2]` |
| `Label` | `span.career-tech-tag` (1) | `TypeScript`, `Next.js`, `React`, `Node.js`, `PostgreSQL`, `Docker`, `WebRTC` | `EXPERIENCES[0].technologies` |
| `Label` | Stage 2 Index Tag | `PLATFORM SYSTEMS` | Internal stage label `stageLabels[1]` |
| `Label` | `span.career-card-period` (2) | `2023 — 2024` | Bound to `EXPERIENCES[1].period` |
| `Label` | `span.career-card-location` (2) | `Remote` | Bound to `EXPERIENCES[1].location` |
| `Label` | `span.career-card-index` (2) | `(02)` | Stage number badge |
| `Heading` | `h3.career-card-role` (2) | `Frontend & Web Application Developer` | Bound to `EXPERIENCES[1].role` |
| `Label` | `div.career-card-company` (2) | `Client & Open-Source Projects` | Bound to `EXPERIENCES[1].companyOrContext` |
| `Paragraph` | `p.career-card-desc` (2) | `Developed high-traffic web interfaces, responsive client dashboards, and interactive data visualization tools.` | Bound to `EXPERIENCES[1].description` |
| `Paragraph` | `li.career-highlight-row` (2.1)| `Translated complex UX specifications into modular, accessible component systems using vanilla CSS and modern React.` | `EXPERIENCES[1].highlights[0]` |
| `Paragraph` | `li.career-highlight-row` (2.2)| `Audited web vitals, reducing Largest Contentful Paint (LCP) and Cumulative Layout Shift across mobile platforms.` | `EXPERIENCES[1].highlights[1]` |
| `Paragraph` | `li.career-highlight-row` (2.3)| `Collaborated closely with design leads to implement subtle micro-interactions and connected visual motifs.` | `EXPERIENCES[1].highlights[2]` |
| `Label` | `span.career-tech-tag` (2) | `React`, `JavaScript (ES6+)`, `HTML5 / Semantic Web`, `CSS Modules`, `REST APIs` | `EXPERIENCES[1].technologies` |
| `Label` | Stage 3 Index Tag | `FOUNDATIONS & RESEARCH` | Internal stage label `stageLabels[2]` |
| `Label` | `span.career-card-period` (3) | `2022 — 2023` | Bound to `EXPERIENCES[2].period` |
| `Label` | `span.career-card-location` (3) | `India` | Bound to `EXPERIENCES[2].location` |
| `Label` | `span.career-card-index` (3) | `(03)` | Stage number badge |
| `Heading` | `h3.career-card-role` (3) | `Software Engineering & Academic Research` | Bound to `EXPERIENCES[2].role` |
| `Label` | `div.career-card-company` (3) | `Systems Foundations & Computational Algorithms` | Bound to `EXPERIENCES[2].companyOrContext` |
| `Paragraph` | `p.career-card-desc` (3) | `Focused on algorithm design, distributed computing fundamentals, database normalization, and interactive graphics programming.` | Bound to `EXPERIENCES[2].description` |
| `Paragraph` | `li.career-highlight-row` (3.1)| `Built distributed data scrapers, rate-limited queuing systems, and algorithmic graph search engines.` | `EXPERIENCES[2].highlights[0]` |
| `Paragraph` | `li.career-highlight-row` (3.2)| `Explored browser WebAssembly and low-level canvas rendering pipelines.` | `EXPERIENCES[2].highlights[1]` |
| `Label` | `span.career-tech-tag` (3) | `Python`, `FastAPI`, `C / Data Structures`, `SQL`, `Git` | `EXPERIENCES[2].technologies` |

---

#### 8.5 Section 4: Capabilities & Technical Stack (`<section aria-labelledby="skills-heading">`)
| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Heading` | `h2#skills-heading` | `Capabilities & Tooling` | Section title |
| `Label` | `span.about-section-tag` | `TECHNICAL STACK` | Section category tag |
| `Label` | `div.about-skill-cat` (1) | `Languages` | Category 1 name (`SKILL_GROUPS[0]`) |
| `Label` | `span.about-skill-pill` (1) | `TypeScript`, `JavaScript (ES6+)`, `Python`, `SQL`, `HTML5`, `CSS3 / Modern CSS` | Category 1 skill items |
| `Label` | `div.about-skill-cat` (2) | `Frontend & Frameworks` | Category 2 name (`SKILL_GROUPS[1]`) |
| `Label` | `span.about-skill-pill` (2) | `React`, `Next.js (App Router)`, `WebSockets`, `WebRTC`, `Canvas API / SVG`, `State Architecture` | Category 2 skill items |
| `Label` | `div.about-skill-cat` (3) | `Backend & Systems` | Category 3 name (`SKILL_GROUPS[2]`) |
| `Label` | `span.about-skill-pill` (3) | `Node.js`, `Express`, `FastAPI`, `PostgreSQL`, `Redis`, `REST APIs`, `Docker` | Category 3 skill items |
| `Label` | `div.about-skill-cat` (4) | `Engineering Practices` | Category 4 name (`SKILL_GROUPS[3]`) |
| `Label` | `span.about-skill-pill` (4) | `System Architecture`, `Performance Profiling`, `WCAG 2.1 AA Accessibility`, `Idempotency`, `Git & CI/CD`, `Responsive Editorial UX` | Category 4 skill items |

---

#### 8.6 Section 5: Next Steps & Closing Actions (`<section aria-labelledby="closing-heading">`)
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Heading` | `h2#closing-heading` | `Next Steps` | Section title | Static text |
| `Label` | `span.about-section-tag` | `COLLABORATION` | Section category tag | Static text |
| `Label` | `span.about-section-tag` (Card 1)| `PORTFOLIO` | Card 1 eyebrow tag | Static text |
| `Heading` | `h3.about-card-title` (Card 1) | `Explore Case Studies` | Card 1 headline | Target: `/work` |
| `Paragraph` | `p.about-card-desc` (Card 1) | `Deep-dive architectures for Signverse, TheraTalk, and distributed tools.` | Card 1 summary | Static text |
| `Label` | `span.about-section-tag` (Card 2)| `DOCUMENTATION` | Card 2 eyebrow tag | Static text |
| `Heading` | `h3.about-card-title` (Card 2) | `Download Résumé` | Card 2 headline | Target: `/resume.pdf` |
| `Paragraph` | `p.about-card-desc` (Card 2) | `Complete engineering credentials and employment history in PDF.` | Card 2 summary | Static text |
| `Button` | `span.ui-btn-primary` (Card 2) | `Download PDF` | Visual button inside link | Static text with arrow |
| `Accessibility Text` | `a.about-closing-btn` (Card 2) | `Download Curriculum Vitae in PDF format` | `aria-label` on card 2 | Static accessibility text |
| `Label` | `span.about-section-tag` (Card 3)| `INQUIRIES` | Card 3 eyebrow tag | Static text |
| `Heading` | `h3.about-card-title` (Card 3) | `Start a Conversation` | Card 3 headline | Target: `/contact` |
| `Paragraph` | `p.about-card-desc` (Card 3) | `Available for selected engineering roles & technical consulting.` | Card 3 summary | Static text |
| `Button` | `span.ui-btn-primary` (Card 3) | `Get in touch` | Visual button inside link | Static text with arrow |
| `Accessibility Text` | `Link.about-closing-btn` (Card 3)| `Navigate to contact page to start a conversation` | `aria-label` on card 3 | Static accessibility text |
| `Link` | `TextLink` | `@arjunsanthosh` | Target: `PERSONAL_DETAILS.github` | `aria-label="Explore Arjun's GitHub profile"` |
| `Link` | `TextLink` | `/in/arjun-santhosh` | Target: `PERSONAL_DETAILS.linkedin`| `aria-label="Connect with Arjun on LinkedIn"` |
| `Label` | `span` | `© 2026 Arjun Santhosh` | Bottom copyright | Template: `© ${PERSONAL_DETAILS.year} ${PERSONAL_DETAILS.name}` |

---

## 9. Route 05: Contact & Inquiries Page (`/contact`)

### Source Files: `src/app/contact/layout.tsx` & `src/app/contact/page.tsx` (Component: `ContactPage`)

#### 9.1 Contact Route Metadata & Left Sidebar
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Metadata` | `document.title` | `Hello & Contact — Arjun Santhosh` | Route metadata | Template: `Hello & Contact — ${PERSONAL_DETAILS.name}` |
| `Metadata` | `meta[name="description"]` | `Get in touch with Arjun Santhosh. Open for senior software engineering roles, technical advisory, and systems architecture collaboration.` | Route metadata | Bound to `PERSONAL_DETAILS.name` |
| `Accessibility Text` | `aside` | `Contact overview and navigation` | `aria-label` | Static accessibility text |
| `Button` | `Button` | `Home` | Target: `/`, Arrow: `left` | `aria-label="Return to portfolio home"` |
| `Label` | `span.contact-sidebar-index-tag`| `(04) HELLO` | Index section tag | Static text |
| `Heading` | `h1.contact-heading` | `HELLO` | Primary sidebar heading | Static uppercase text |
| `Paragraph` | `p.work-intro-p` (1) | `An open channel for engineering collaborations, senior technical roles, and distributed systems architecture discussions.` | Intro paragraph 1 | Static text |
| `Paragraph` | `p.work-intro-p` (2) | `Always interested in connecting with teams and founders building high-impact, low-latency, and carefully crafted software.` | Intro paragraph 2 | Static text |
| `Button` | `Button` | `View Projects` | Target: `/work`, Arrow: `up-right` | `aria-label="View Projects"` |
| `Button` | `Button` | `Read About Arjun` | Target: `/about`, Arrow: `up-right` | `aria-label="Read about Arjun"` |
| `Label` | `div.work-sidebar-meta` | `© 2026 Arjun Santhosh` | Sidebar copyright | Template: `© ${PERSONAL_DETAILS.year} ${PERSONAL_DETAILS.name}` |

---

#### 9.2 Main Editorial Content & Availability
| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Accessibility Text` | `section.contact-content-column` | `Contact options and collaboration details` | `aria-label` on main content |
| `Label` | `span.contact-status-label` | `STATUS: Available for selected engineering roles & technical consulting` | Template: `STATUS: ${PERSONAL_DETAILS.availability}` |
| `Heading` | `h2.contact-hero-headline` (Part 1)| `Hello. ` | Editorial headline prefix |
| `Heading` | `span.contact-headline-highlight` | `Let's talk.` | Highlighted editorial title with accent dot |
| `Paragraph` | `p.contact-hero-subhead` | `Have an engineering role, a distributed systems challenge, or an architectural idea you'd like to explore?` | Hero subhead with apostrophe |
| `Paragraph` | `p.contact-invitation-p` (1) | `I'm always glad to talk with engineering leaders, technical recruiters, and founders who care about robust architecture, client-side performance, and software craft.` | Invitation paragraph 1 |
| `Paragraph` | `p.contact-invitation-p` (2) | `Whether you are recruiting for a senior full-stack engineering position, seeking guidance on real-time client systems and WebAssembly pipelines, or simply want to exchange ideas, you can reach me directly below.` | Invitation paragraph 2 with bold emphasis |
| `Heading` | `h3.contact-channels-title` | `DIRECT CHANNELS & PROFILES` | Section title |
| `Label` | `span.contact-channels-hint` | `(04) OPTIONS` | Section count badge |

---

#### 9.3 Direct Communication Channels
| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Label` | Channel 1 Index | `(01)` | Numerical tag | Static text |
| `Heading` / `Label` | Channel 1 Name | `Email` | Channel identifier | Static text |
| `Paragraph` | Channel 1 Value | `arjunsanthosh.dev@gmail.com` | Destination value | `PERSONAL_DETAILS.email` |
| `Paragraph` | Channel 1 Description | `Direct inbox — open for engineering opportunities, technical advisory, and architecture discussions.` | Channel narrative | Static text with em-dash |
| `Accessibility Text` | Channel 1 Main Link | `Send email to arjunsanthosh.dev@gmail.com` | `aria-label` | Template: `Send email to ${email}` |
| `Button` | Channel 1 Copy Button (Default) | `Copy` | Visual button text | Displays copy icon |
| `Feedback / Message`| Channel 1 Copy Button (Active) | `Copied!` | Feedback on click | Reverts to `Copy` after 2400ms |
| `Accessibility Text` | Channel 1 Copy Button (Default) | `Copy email address to clipboard` | `aria-label` & `title` | Static accessibility text |
| `Accessibility Text` | Channel 1 Copy Button (Active) | `Email address copied to clipboard` | `aria-label` | Triggered when `copied === true` |
| `Label` | Channel 2 Index | `(02)` | Numerical tag | Static text |
| `Heading` / `Label` | Channel 2 Name | `LinkedIn` | Channel identifier | Static text |
| `Paragraph` | Channel 2 Value | `linkedin.com/in/arjun-santhosh` | Vanity URL | Static text |
| `Paragraph` | Channel 2 Description | `Professional background, verified career milestones, and industry recommendations.` | Channel narrative | Static text |
| `Accessibility Text` | Channel 2 Link | `Open Arjun's LinkedIn profile in a new tab` | `aria-label` | Target: `PERSONAL_DETAILS.linkedin` |
| `Label` | Channel 3 Index | `(03)` | Numerical tag | Static text |
| `Heading` / `Label` | Channel 3 Name | `GitHub` | Channel identifier | Static text |
| `Paragraph` | Channel 3 Value | `github.com/arjunsanthosh` | Vanity URL | Static text |
| `Paragraph` | Channel 3 Description | `Open-source repositories, system architecture diagrams, and interactive prototypes.` | Channel narrative | Static text |
| `Accessibility Text` | Channel 3 Link | `Explore Arjun's GitHub repositories in a new tab` | `aria-label` | Target: `PERSONAL_DETAILS.github` |
| `Label` | Channel 4 Index | `(04)` | Numerical tag | Static text |
| `Heading` / `Label` | Channel 4 Name | `Curriculum Vitae` | Channel identifier | Static text |
| `Paragraph` | Channel 4 Value | `resume.pdf` | Document filename | Static text |
| `Paragraph` | Channel 4 Description | `Comprehensive single-page overview of technical competencies, impact metrics, and engineering history.` | Channel narrative | Static text |
| `Accessibility Text` | Channel 4 Link | `Download or preview Arjun's Resume (PDF) in a new tab` | `aria-label` | Target: `PERSONAL_DETAILS.resumePath` |

---

#### 9.4 Location, Timezone & Response Details
| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Label` | Card 1 Header | `BASE & WORKING HOURS` | Card 1 category tag with ampersand |
| `Paragraph` | Card 1 Body | `India (IST / UTC +5:30) · Collaborating seamlessly with teams across US, UK, and European timezones.` | Timezone coverage narrative |
| `Label` | Card 2 Header | `RESPONSE EXPECTATION` | Card 2 category tag |
| `Paragraph` | Card 2 Body | `Direct inquiries are reviewed daily. You can typically expect a response within 24 business hours.` | Turnaround SLA narrative |

---

## 10. Route 06: Not Found / Error Page (`404`)

### Source File: `src/app/not-found.tsx` (Component: `NotFound`)

| Classification | Element | Exact Text | Target / Accessibility | Source / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Label` | `span.meta-index` | `(404)` | Error code badge | Static text |
| `Label` | `span` | `PAGE NOT FOUND` | Category tag | Static uppercase text |
| `Heading` | `h1.font-primary` | `Lost in transmission.` | Primary error headline | Editorial display heading |
| `Paragraph` | `p.font-sans` | `The page or project case study you requested does not exist or has been relocated within the portfolio index.` | Narrative explanation | Static text |
| `Button` | `Button` | `Return to Home` | Target: `/`, Arrow: `left` | Primary action button |
| `Button` | `Button` | `Browse Work Index` | Target: `/work`, Arrow: `up-right` | Secondary action button |

---

## 11. Shared Component & UI Atoms Inventory

### ArchitectureDiagram Component
**Source**: `src/components/ArchitectureDiagram.tsx`

| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Heading` / `Label` | Header title | `${title}` (Default: `System Architecture & Data Flow`) | Bound to component prop `title` |
| `Label` | Instruction badge | `Select step to inspect` | Companion text beside Info icon |
| `Accessibility Text` | Tab list container | `Architecture stages` | `aria-label` on `role="tablist"` |
| `Label` | Tab number | `0${idx + 1}` | Formatted step index (`01`, `02`, `03`, `04`) |
| `Heading` | Tab title | `${node.title}` | Dynamic from `node.title` |
| `Heading` | Inspector heading | `Stage ${selectedIdx + 1}: ${selectedNode.title}` | Template string |
| `Label` | Inspector tag | `${tag}` | Mapped from `node.tags` |
| `Paragraph` | Inspector description | `${selectedNode.description}` | Detailed step description |

---

### ProjectCard Component
**Source**: `src/components/ProjectCard.tsx`

| Classification | Element | Exact Text | Source / Notes |
| :--- | :--- | :--- | :--- |
| `Accessibility Text` | `Link` | `Explore case study for ${project.title}: ${project.subtitle}` | `aria-label` on card wrapper |
| `Label` | Category pill | `${project.category}` | Bound to `project.category` |
| `Label` | Year tag | `${project.year}` | Bound to `project.year` |
| `Heading` | Title | `${project.title}` | Bound to `project.title` |
| `Paragraph` | Subtitle | `${project.subtitle}` | Bound to `project.subtitle` |
| `Label` | Tech pill | `${t}` | Mapped from `project.technologies.slice(0, 3)` |
| `Label` | Scope tag | `Discipline & Scope` | Static uppercase label in footer bar |
| `Heading` | Role | `${project.role}` | Bound to `project.role` |

---

### SocialIcons Component
**Source**: `src/components/SocialIcons.tsx`
- Contains SVG icon wrappers (`GithubIcon`, `LinkedinIcon`, `LinkedinSquareIcon`, `DribbbleIcon`, `ThreadsIcon`) rendering with `aria-hidden="true"`. All accessible text is provided by the wrapping anchor buttons.

---

### UI Button Component
**Source**: `src/components/ui/Button.tsx`
- **Supported Variants**: `primary`, `secondary`, `outline`, `pill`, `ghost`, `sidebar-action`
- **Supported Sizes**: `sm`, `md`, `lg`
- **Default Arrow Icons**:
  - `variant="primary"` or `variant="sidebar-action"`: defaults to `ArrowUpRight`
  - `variant="pill"`: defaults to `ArrowLeft`
  - Accessible icon handling: All embedded arrow icons include `aria-hidden="true"` while accepting optional `aria-label` attributes on parent anchors/buttons.

---

### UI IconButton Component
**Source**: `src/components/ui/IconButton.tsx`
- **Required Prop**: `label` (string)
- **Accessible Behavior**: Automatically sets both `aria-label={label}` and `title={label}` on the wrapping `<button>`, `<Link>`, or `<a>` element.

---

### UI TextLink Component
**Source**: `src/components/ui/TextLink.tsx`
- **Props**: `href`, `children`, `external`, `arrow` (defaults to `true`), `aria-label`, `title`
- **Arrow Icon**: Renders `ArrowUpRight` with `aria-hidden="true"`.

---

## 12. Centralized Data Source: `portfolioData.ts`

**Source File**: `src/data/portfolioData.ts`

### `PERSONAL_DETAILS`
```typescript
{
  name: "Arjun Santhosh",
  title: "Software Developer & Systems Engineer",
  eyebrow: "FULL-STACK DEVELOPER · SYSTEMS & INTERACTION",
  headline: "Turning complex technical problems into calm, thoughtful digital experiences.",
  summary: "Software developer specializing in full-stack architecture, real-time client systems, computer vision interfaces, and high-performance web applications. Focused on engineering rigor, clean code contracts, and user-centered design.",
  email: "arjunsanthosh.dev@gmail.com",
  github: "https://github.com/arjunsanthosh",
  linkedin: "https://linkedin.com/in/arjun-santhosh",
  resumePath: "/resume.pdf",
  location: "Remote / India",
  availability: "Available for selected engineering roles & technical consulting",
  year: "2026",
}
```

### Complete Experience Data (`EXPERIENCES`)
1. **Milestone 01**:
   - `period`: `"2024 — Present"`
   - `role`: `"Full-Stack Software Developer"`
   - `companyOrContext`: `"Independent Software Engineering & Systems Consulting"`
   - `location`: `"Remote"`
   - `description`: `"Architecting end-to-end web applications, interactive platforms, and scalable backend services with modern TypeScript, Next.js, and cloud ecosystems."`
   - `highlights`:
     - `"Engineered real-time computer vision and WebRTC communication platforms with sub-200ms interaction latencies."`
     - `"Designed resilient relational schemas, asynchronous job queues, and automated reconciliation systems."`
     - `"Maintained 100% commitment to responsive, accessible, and high-performance user interfaces."`
   - `technologies`: `["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Docker", "WebRTC"]`
2. **Milestone 02**:
   - `period`: `"2023 — 2024"`
   - `role`: `"Frontend & Web Application Developer"`
   - `companyOrContext`: `"Client & Open-Source Projects"`
   - `location`: `"Remote"`
   - `description`: `"Developed high-traffic web interfaces, responsive client dashboards, and interactive data visualization tools."`
   - `highlights`:
     - `"Translated complex UX specifications into modular, accessible component systems using vanilla CSS and modern React."`
     - `"Audited web vitals, reducing Largest Contentful Paint (LCP) and Cumulative Layout Shift across mobile platforms."`
     - `"Collaborated closely with design leads to implement subtle micro-interactions and connected visual motifs."`
   - `technologies`: `["React", "JavaScript (ES6+)", "HTML5 / Semantic Web", "CSS Modules", "REST APIs"]`
3. **Milestone 03**:
   - `period`: `"2022 — 2023"`
   - `role`: `"Software Engineering & Academic Research"`
   - `companyOrContext`: `"Systems Foundations & Computational Algorithms"`
   - `location`: `"India"`
   - `description`: `"Focused on algorithm design, distributed computing fundamentals, database normalization, and interactive graphics programming."`
   - `highlights`:
     - `"Built distributed data scrapers, rate-limited queuing systems, and algorithmic graph search engines."`
     - `"Explored browser WebAssembly and low-level canvas rendering pipelines."`
   - `technologies`: `["Python", "FastAPI", "C / Data Structures", "SQL", "Git"]`

### Complete Skill Groups (`SKILL_GROUPS`)
1. **Languages**:
   - `category`: `"Languages"`
   - `skills`: `["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3 / Modern CSS"]`
2. **Frontend & Frameworks**:
   - `category`: `"Frontend & Frameworks"`
   - `skills`: `["React", "Next.js (App Router)", "WebSockets", "WebRTC", "Canvas API / SVG", "State Architecture"]`
3. **Backend & Systems**:
   - `category`: `"Backend & Systems"`
   - `skills`: `["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "REST APIs", "Docker"]`
4. **Engineering Practices**:
   - `category`: `"Engineering Practices"`
   - `skills`: `["System Architecture", "Performance Profiling", "WCAG 2.1 AA Accessibility", "Idempotency", "Git & CI/CD", "Responsive Editorial UX"]`

---

## 13. Duplicated Strings & Shared Patterns Matrix

The audit identified several recurring strings across pages and shared components:

| Exact Text String | Occurrences / Routes | Notes & Synchronization Strategy |
| :--- | :--- | :--- |
| `Arjun Santhosh` | Root Layout, SiteHeader, SiteFooter, Home, Work, About, Contact, 404, Project Details | Centrally synchronized via `PERSONAL_DETAILS.name` in `portfolioData.ts`. |
| `Home` | Work Sidebar, Project Sidebar, About Sidebar, Contact Sidebar, 404 Button | Top navigation button returning to `/`. |
| `View Projects` | About Sidebar, Contact Sidebar | Sidebar action CTA button leading to `/work`. |
| `Get in touch` | Work Sidebar, About Sidebar, About Closing Card | Secondary action CTA leading to `/contact`. |
| `Read about Arjun` / `Read About Arjun` | Work Sidebar (`Read about Arjun`), Contact Sidebar (`Read About Arjun`) | **Case variance**: lowercase "about" in Work, title case "About" in Contact. |
| `All Projects` / `All Case Studies` | Project Sidebar (`All Case Studies`), Project Closing Banner (`All Projects`) | Both navigate to `/work`. |
| `© 2026 Arjun Santhosh` | Work Sidebar, Project Sidebar, About Sidebar, Contact Sidebar, About Bottom | Sidebar footer copyright statement. |
| `AVAILABLE FOR SELECT PROJECTS` / `STATUS: Available for selected engineering roles & technical consulting` | Home Status Bar, Contact Status Eyebrow, SiteFooter Status | Different phrasing of the availability commitment. |
| `arjunsanthosh.dev@gmail.com` | Contact Channel 01, SiteFooter CTA | Direct contact email address. |

---

## 14. Accessibility & Screen-Reader Inventory

Every explicit accessibility attribute discovered in the audit is listed below:

| Route / File | Element | Attribute | Exact Accessible Name / Value |
| :--- | :--- | :--- | :--- |
| `src/app/layout.tsx` | `<a className="skip-link">` | Visible text | `Skip to main content` |
| `src/components/SiteHeader.tsx` | `<Link href="/">` | `aria-label` | `Arjun Santhosh — Home` |
| `src/components/SiteHeader.tsx` | `<nav className="desktop-nav">` | `aria-label` | `Main Navigation` |
| `src/components/SiteHeader.tsx` | `<button className="mobile-toggle">`| `aria-label` | `Open menu` / `Close menu` |
| `src/components/SiteHeader.tsx` | `<nav className="mobile-panel">` | `aria-label` | `Mobile Navigation` |
| `src/components/SiteFooter.tsx` | `<Button onClick={handleCopy}>` | `aria-label` | `Copy email address` |
| `src/app/page.tsx` | `<aside className="home-rail">` | `aria-label` | `Quick navigation and copyright rail` |
| `src/app/page.tsx` | `<Link href="/work">` | `aria-label` | `View Projects and Work` |
| `src/app/page.tsx` | `<Link href="/about">` | `aria-label` | `Read About Arjun Santhosh` |
| `src/app/page.tsx` | `<Link href="/contact">` | `aria-label` | `Get in touch via Contact` |
| `src/app/page.tsx` | `<section className="home-editorial-col">`| `aria-label` | `Portfolio overview and biography` |
| `src/app/page.tsx` | `<section className="home-nav-col">` | `aria-label` | `Primary portfolio destinations` |
| `src/app/page.tsx` | `<nav className="home-nav-menu">` | `aria-label` | `Main navigation menu` |
| `src/app/page.tsx` | `<Link href={item.href}>` (x3) | `aria-label` | `WORK section (01)`, `ABOUT section (02)`, `CONTACT section (03)` |
| `src/app/work/page.tsx` | `<aside className="work-sidebar">` | `aria-label` | `Work overview and navigation` |
| `src/app/work/page.tsx` | `<Button href="/">` | `aria-label` | `Return to portfolio home` |
| `src/app/work/page.tsx` | `<Button href="/about">` | `aria-label` | `Read about Arjun` |
| `src/app/work/page.tsx` | `<Button href="/contact">` | `aria-label` | `Get in touch with Arjun` |
| `src/app/work/page.tsx` | `<section className="work-projects-column">`| `aria-label`| `Portfolio projects list` |
| `src/app/work/page.tsx` | `<Link href="/work/[slug]">` (x4)| `aria-label` | `${project.title} — ${project.category}` |
| `src/app/work/page.tsx` | `<aside className="floating-preview-card">`| `aria-hidden`| `true` |
| `src/app/work/[slug]/page.tsx` | `<aside className="project-sidebar">`| `aria-label` | `${project.title} overview and quick navigation` |
| `src/app/work/[slug]/page.tsx` | `<Button href="/work">` | `aria-label` | `Return to Work index` |
| `src/app/work/[slug]/page.tsx` | `<Button href={project.liveUrl}>`| `aria-label` | `View live prototype for ${project.title}` |
| `src/app/work/[slug]/page.tsx` | `<Button href={project.githubUrl}>`| `aria-label` | `View source code on GitHub for ${project.title}` |
| `src/app/work/[slug]/page.tsx` | `<Link href={prevProject}>` | `aria-label` | `Navigate to previous project: ${prevProject.title}` |
| `src/app/work/[slug]/page.tsx` | `<Link href={nextProject}>` | `aria-label` | `Navigate to next project: ${nextProject.title}` |
| `src/app/work/[slug]/page.tsx` | `<Button href="/work">` | `aria-label` | `Return to full work showcase` |
| `src/app/work/[slug]/page.tsx` | `<section className="project-content-column">`| `aria-label`| `${project.title} Detailed Engineering Case Study` |
| `src/app/work/[slug]/page.tsx` | `<div className="project-tech-pills-wrap">`| `aria-label`| `Core technologies used` |
| `src/app/work/[slug]/page.tsx` | `<section>` (Challenge) | `aria-labelledby`| `section-challenge` |
| `src/app/work/[slug]/page.tsx` | `<section>` (Solution) | `aria-labelledby`| `section-solution` |
| `src/app/work/[slug]/page.tsx` | `<section>` (Architecture) | `aria-labelledby`| `section-architecture` |
| `src/app/work/[slug]/page.tsx` | `<section>` (Results) | `aria-labelledby`| `section-results` |
| `src/app/work/[slug]/page.tsx` | `<section>` (Learnings) | `aria-labelledby`| `section-learnings` |
| `src/app/work/[slug]/page.tsx` | `<Button href={liveUrl}>` | `aria-label` | `Open ${project.title} live prototype in a new tab` |
| `src/app/work/[slug]/page.tsx` | `<Button href={githubUrl}>` | `aria-label` | `Open ${project.title} GitHub repository in a new tab` |
| `src/app/work/[slug]/page.tsx` | `<nav className="project-nav-cards-row">`| `aria-label` | `Adjacent project case studies` |
| `src/app/work/[slug]/page.tsx` | `<aside className="project-closing-banner">`| `aria-label` | `Explore other work or contact` |
| `src/app/work/[slug]/page.tsx` | `<Button href="/work">` | `aria-label` | `Browse all projects` |
| `src/app/work/[slug]/page.tsx` | `<Button href="/contact">` | `aria-label` | `Contact Arjun directly` |
| `src/app/about/page.tsx` | `<aside className="about-sidebar">` | `aria-label` | `About overview and navigation` |
| `src/app/about/page.tsx` | `<Button href="/">` | `aria-label` | `Return to portfolio home` |
| `src/app/about/page.tsx` | `<Button href="/work">` | `aria-label` | `View Projects` |
| `src/app/about/page.tsx` | `<Button href="/contact">` | `aria-label` | `Get in touch with Arjun` |
| `src/app/about/page.tsx` | `<section className="about-content-column">`| `aria-label` | `About narrative and professional background` |
| `src/app/about/page.tsx` | `<article>` (Bio) | `aria-label` | `Personal introduction and background` |
| `src/app/about/page.tsx` | `<section>` (Philosophy) | `aria-labelledby`| `philosophy-heading` |
| `src/components/CareerJourneyPathway.tsx` | `<div className="career-journey-container">`| `aria-label` | `Professional Experience Pathway` |
| `src/app/about/page.tsx` | `<section>` (Skills) | `aria-labelledby`| `skills-heading` |
| `src/app/about/page.tsx` | `<section>` (Closing) | `aria-labelledby`| `closing-heading` |
| `src/app/about/page.tsx` | `<a className="about-closing-btn">` (CV)| `aria-label` | `Download Curriculum Vitae in PDF format` |
| `src/app/about/page.tsx` | `<Link className="about-closing-btn">` (Contact)| `aria-label` | `Navigate to contact page to start a conversation` |
| `src/app/about/page.tsx` | `<TextLink href={github}>` | `aria-label` | `Explore Arjun's GitHub profile` |
| `src/app/about/page.tsx` | `<TextLink href={linkedin}>` | `aria-label` | `Connect with Arjun on LinkedIn` |
| `src/app/contact/page.tsx` | `<aside className="contact-sidebar">` | `aria-label` | `Contact overview and navigation` |
| `src/app/contact/page.tsx` | `<Button href="/">` | `aria-label` | `Return to portfolio home` |
| `src/app/contact/page.tsx` | `<Button href="/work">` | `aria-label` | `View Projects` |
| `src/app/contact/page.tsx` | `<Button href="/about">` | `aria-label` | `Read about Arjun` |
| `src/app/contact/page.tsx` | `<section className="contact-content-column">`| `aria-label`| `Contact options and collaboration details` |
| `src/app/contact/page.tsx` | `<a className="contact-channel-main-link">` (Email)| `aria-label` | `Send email to arjunsanthosh.dev@gmail.com` |
| `src/app/contact/page.tsx` | `<button className="contact-copy-badge-btn">` (Default)| `aria-label` | `Copy email address to clipboard` |
| `src/app/contact/page.tsx` | `<button className="contact-copy-badge-btn">` (Copied)| `aria-label` | `Email address copied to clipboard` |
| `src/app/contact/page.tsx` | `<a className="contact-channel-main-link">` (LinkedIn)| `aria-label` | `Open Arjun's LinkedIn profile in a new tab` |
| `src/app/contact/page.tsx` | `<a className="contact-channel-main-link">` (GitHub)| `aria-label` | `Explore Arjun's GitHub repositories in a new tab` |
| `src/app/contact/page.tsx` | `<a className="contact-channel-main-link">` (CV)| `aria-label` | `Download or preview Arjun's Resume (PDF) in a new tab` |
| `src/components/ArchitectureDiagram.tsx`| `div` | `aria-label` | Component title (e.g., `Signverse System Pipeline`) |
| `src/components/ArchitectureDiagram.tsx`| `div[role="tablist"]` | `aria-label` | `Architecture stages` |
| `src/components/ProjectCard.tsx` | `<Link>` | `aria-label` | `Explore case study for ${project.title}: ${project.subtitle}` |

---

## 15. Final Completeness & Limitations Report

### Completeness Summary
- **Audited Pages & Routes**: 8 total routes (Home `/`, Work `/work`, Project Detail `/work/[slug]` with 4 projects, About `/about`, Contact `/contact`, and Fallback `/not-found`).
- **Source Files Inspected**: 19 source files (`src/app/**`, `src/components/**`, `src/data/portfolioData.ts`, `next.config.ts`, `package.json`, `public/**`).
- **Text Elements Cataloged**: Over 320 unique string literals, labels, paragraphs, headings, button texts, metadata values, and accessibility labels.
- **Dynamic Content Traced**: 100% of data properties in `src/data/portfolioData.ts` mapped to their specific UI render locations.
- **Zero Content Modification**: In accordance with user constraints, no code, styling, text, or functionality was altered during this audit.

### Potential Editorial Opportunities Identified for Future Replacement
1. **Case Inconsistency in Navigation Links**:
   - `Read about Arjun` (in `src/app/work/page.tsx`, lowercase "about") vs. `Read About Arjun` (in `src/app/contact/page.tsx`, title-case "About").
2. **Project Action Phrasing**:
   - `All Projects` (closing banner button) vs. `All Case Studies` (sidebar action button). Both lead to `/work`.
3. **Availability Statement Variations**:
   - Three different expressions of availability:
     - Home: `AVAILABLE FOR SELECT PROJECTS`
     - Contact & Data: `STATUS: Available for selected engineering roles & technical consulting`
     - Footer: `● Available for selected engineering roles & technical consulting`
4. **Placeholder Domain**:
   - In `Signverse`, `liveUrl` is set to `https://signverse.demo`, which is a prototype domain. Other projects (`TheraTalk`, `HandsFree Property`, `Keyword Aggregator`) do not define a `liveUrl`.

---
*End of Portfolio Content Inventory. This document is ready for any future copywriting, translation, or content replacement phase.*

