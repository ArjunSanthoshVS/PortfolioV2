# Arjun's Portfolio — Experience & Wireframe Specification

**Version:** 1.0  
**Purpose:** Build-ready product, UX, layout, and interaction brief for Gravity  
**Direction:** Light futuristic · Exploratory navigation · Balanced motion  
**Primary audiences:** Recruiters, hiring managers, and independent clients

---

## 1. Product vision

Build a software developer portfolio that feels like an interactive experience rather than a conventional template. It should be visually calm, readable, distinctive, and alive through purposeful motion and connected visual elements.

The site must communicate Arjun's professional identity, strongest work, engineering judgment, experience, and contact options quickly. Visitors should be able to explore freely without being forced through a sequence.

### Core principle

> **Make the experience unpredictable; keep the usability predictable.**

Visitors may discover surprising layouts, animated transitions, and interactive diagrams, but they should never be confused about where they are, what a project does, how to find experience details, or how to contact Arjun.

### Design goals

- Light, calm, and futuristic—not dark cyberpunk or a generic AI landing page.
- Clear typography, generous whitespace, strong contrast, and short readable content.
- A coherent visual motif that connects the hero, discovery section, projects, timeline, and closing section.
- Balanced motion: meaningful scroll transitions, responsive controls, and a few memorable surprises.
- Exploratory structure with familiar navigation and direct links.
- Strong credibility for recruiters and practical confidence for potential clients.
- Responsive, accessible, and fast on desktop, tablet, and mobile.

---

## 2. Reference websites and design lessons

Use these as inspiration, not as templates to copy.

1. **Kobe Michael** — https://www.kobemichael.dev/  
   Learn from its visual atmosphere, restrained 3D depth, and professional storytelling.

2. **Lauren Waller** — https://lauren-waller.com/  
   Learn from its creative identity, visual expression, and navigation that feels integrated with the design.

3. **Devon Stank** — https://devonstank.com/  
   Learn from direct messaging, clear service communication, and visible calls to action.

4. **Tim Gesemann** — https://www.tim-gesemann.dev/#work  
   Learn from scannable project details, technical credibility, and accessible work/experience navigation.

### Combine the lessons

- Atmosphere and continuity from Kobe Michael.
- Personality and expressive transitions from Lauren Waller.
- Direct communication from Devon Stank.
- Project evidence and technical clarity from Tim Gesemann.

Do not copy any site's exact layout, graphics, text, or animations. Create an original visual identity and interaction system.

---

## 3. Information architecture

Build:

- One exploratory landing page.
- Individual, shareable project case-study pages.
- Direct links to résumé, GitHub, LinkedIn, and email.

### Primary navigation

- **Work**
- **Approach**
- **About**
- **Contact**

The personal mark/logo links to the top of the landing page. Résumé access should be available from the navigation or About section.

### Navigation requirements

- Keep the navigation compact and available while scrolling.
- Show a subtle indicator for the currently viewed section.
- Allow visitors to jump directly to any major section.
- Do not force a prescribed sequence, onboarding tour, or animation.
- Project case studies must have their own URLs and a clear route back to Work.
- Make contact accessible at all times.

---

## 4. Landing-page walkthrough

The landing page contains seven narrative scenes. These are not seven locked steps: users can scroll naturally, skip sections, or jump through navigation.

### Scene 01 — Arrival / Hero

**Purpose:** Explain who Arjun is and what he builds within a few seconds.

**Content:**
- Small personal mark and compact navigation.
- Eyebrow label such as `SOFTWARE DEVELOPER · PROBLEM SOLVER`.
- Large headline. Initial copy direction:  
  **“I turn complex problems into thoughtful digital experiences.”**
- A short, truthful introduction to Arjun's engineering focus.
- Primary action: `Explore selected work`.
- Secondary action: `About me`.
- A restrained abstract graphic using fine lines, connected nodes, or orbital geometry.

**Motion:**
- The abstract graphic has slow, subtle ambient movement.
- As the user scrolls, the graphic shifts or transforms to lead into the next scene.
- Text enters with a short fade/slide, without delaying access.

**Usability:**
- No loading screen, forced intro, or full-screen animation.
- Visitors can see what Arjun does and reach Work immediately.
- The headline must remain readable on small screens.

### Scene 02 — Discovery / How I think

**Purpose:** Replace a conventional About paragraph with a small, useful interactive moment.

**Concept:** Three connected ideas:
- **Build** — turning requirements into working software.
- **Solve** — investigating difficult technical problems.
- **Refine** — improving usability, performance, and reliability.

**Interaction:**
- Selecting a node reveals a short explanation and, where possible, a real example from a project.
- Connected lines can animate into the visual language used in the project section.
- All labels remain visible without interaction.

**Usability:**
- Every node must be a real button or link with an accessible label.
- Support keyboard focus and touch input.
- Do not hide essential information behind hover-only interactions.
- Keep the section optional; users can skip it.

### Scene 03 — Selected work

**Purpose:** Make the strongest projects the primary evidence of skill.

**Content:**
- Section heading: `Selected work`.
- A visible `View all` option if there are more projects than the featured set.
- One featured project with a larger visual treatment.
- Two or more supporting projects as space and actual portfolio content allow.
- Each project shows:
  - Name and purpose.
  - Problem solved.
  - Arjun's contribution.
  - One relevant technical detail or result.
  - Clear `Explore project` link.
  - Relevant technology tags, if useful.

**Layout:**
- Use an editorial, slightly asymmetric composition rather than identical template cards.
- Keep typography, spacing, and interaction behavior consistent.
- Use real screenshots, product previews, or accurate diagrams where available.
- Use restrained pale-blue, mint, or lavender accents on a warm-white background.

**Motion:**
- Cards respond subtly to hover or focus.
- A card may reveal secondary details or transition to its case study.
- The shared line/node motif can connect project previews.
- Do not make users drag, hover, or guess to discover a project's name or purpose.

### Scene 04 — Project case study

**Purpose:** Turn curiosity into evidence of technical capability.

Each project opens a dedicated route, for example `/work/project-name`.

**Recommended case-study order:**
1. Project title and concise value statement.
2. Role, duration, and technologies where relevant.
3. The problem.
4. Constraints and challenges.
5. Arjun's individual contribution.
6. Solution and important technical decisions.
7. Architecture or data-flow diagram, where useful.
8. Results and evidence.
9. Lessons learned or future improvements.
10. Links to demo/source code when public and appropriate.
11. Previous/next project navigation and a clear return-to-Work link.

**Motion:**
- Diagrams may progressively reveal components or data flow as the user reads.
- Screenshots, code snippets, and architecture illustrations appear where they clarify a point.
- Keep normal scrolling and reading fully under user control.

**Usability and truthfulness:**
- Never invent metrics, testimonials, business outcomes, or responsibilities.
- If a project is confidential, explain the contribution without exposing sensitive details.
- If no measurable outcome exists, describe the result honestly.
- Case studies must work without animation.

### Scene 05 — Engineering approach

**Purpose:** Show how Arjun makes decisions, not just which technologies he knows.

**Suggested principles, to be confirmed against real experience:**
- Understand the problem before choosing the tool.
- Build maintainable systems.
- Consider performance and usability together.
- Make trade-offs explicit and avoid unnecessary complexity.

**Interaction:**
- Use a simple process diagram such as `Understand → Design → Build → Refine`.
- Selecting a stage can reveal its purpose, dependencies, and a real example.
- Optional advanced details should expand on demand.

**Usability:**
- The default view must be simple and scannable.
- Do not present a wall of text or an enormous technology-logo grid.
- Do not claim expertise in technologies that Arjun has not used.

### Scene 06 — Experience and credibility

**Purpose:** Give recruiters and clients the professional context they need.

**Content:**
- Work history and dates.
- Role and responsibilities.
- Relevant achievements or projects.
- Core skills grouped meaningfully.
- Education if relevant.
- Genuine testimonials or measurable outcomes only where available.
- Résumé, GitHub, and LinkedIn links.

**Layout and motion:**
- A clean vertical timeline connected by a fine line.
- The timeline indicator can progress as the user scrolls.
- Entries remain readable whether the animation runs or not.

**Usability:**
- Dates, job titles, responsibilities, and links must be easy to scan.
- No essential content may depend on the timeline animation.

### Scene 07 — Contact / Closing resolution

**Purpose:** End with a memorable visual resolution and an obvious next action.

**Copy direction:**  
**“Have something interesting to build?”**  
“Let's discuss a project, a role, or an idea.”

**Actions:**
- Email Arjun.
- View/download résumé.
- Visit GitHub.
- Visit LinkedIn.

A contact form is optional; a direct email link is sufficient for the first release.

**Motion:**
- The connected lines introduced in the hero gradually resolve into a simple final composition.
- Keep the movement understated and avoid delaying the contact actions.

**Usability:**
- Contact must remain accessible from the persistent navigation.
- Every action must have a clear destination.
- No required form submission or animation should stand between a visitor and contact details.

---

## 5. Exploratory navigation and visitor paths

The same site should support multiple visitor goals without asking visitors to choose a mode.

### Path A — Recruiter or hiring manager
Hero → Work → Case study → Experience → Résumé or Contact.

This path should be quick, clear, and easy to scan.

### Path B — Curious explorer
Hero → Discovery → Projects → Engineering approach → Additional work → About.

This path rewards exploration without requiring it.

### Path C — Independent client
Hero → Relevant project → Case study → Approach and evidence → Contact.

This path should make it easy to understand what Arjun can deliver and how to start a conversation.

All three paths must work using the same landing page and navigation.

---

## 6. Visual design system

### Color palette

Use the following as the starting palette:

| Token | Color | Usage |
|---|---|---|
| Warm white | `#FAFAF7` | Main page background |
| Charcoal | `#303841` | Primary text and strong actions |
| Ice blue | `#EAF2F7` | Soft panels and graphic surfaces |
| Mint | `#CDEFE5` | Secondary accents and selected states |
| Soft blue | `#7F9FC3` | Lines, small highlights, and interactive details |
| Muted text | `#536575` | Supporting text, with contrast checked before use |

Avoid large neon gradients, black/purple AI aesthetics, heavy glassmorphism, and decorative blur everywhere.

### Typography

- Choose a clean, highly readable sans-serif.
- Use large expressive headings sparingly.
- Keep body text comfortable and line lengths controlled.
- Maintain consistent type scale, weight, and spacing.
- Use uppercase eyebrow labels sparingly for structure, not decoration.

### Layout

- Spacious editorial composition.
- Consistent alignment grid and spacing scale.
- Varied section layouts to avoid repetitive template cards.
- One consistent navigation and link behavior.
- Responsive project cards and diagrams.
- Adequate whitespace around interactive elements.

### Visual motif

Use fine connected lines, nodes, and simple geometric/orbital forms as a recurring motif. Reuse and transform the motif across the hero, discovery scene, project transitions, timeline, and closing section. It should provide continuity without distracting from content.

---

## 7. Interaction and motion specification

Every animation must have a purpose: explain, connect, respond, or reward.

| Element | Default | Interaction |
|---|---|---|
| Navigation | Compact and visible | Direct section navigation; current section indicator |
| Hero graphic | Slow ambient movement | Subtle response to scroll or pointer where appropriate |
| Discovery nodes | Labels always visible | Select to reveal supporting explanation |
| Project cards | Title and summary visible | Small hover/focus response; open case study |
| Section transitions | Subtle fade/slide | Connect the outgoing and incoming motif |
| Timeline | Content readable | Progress indicator follows scroll |
| Technical diagrams | Simple overview | Reveal components or dependencies on selection |
| Contact actions | Clearly visible | Open the intended destination immediately |

### Motion principles

- Use CSS transitions for simple UI feedback.
- Keep common interactions short and smooth.
- Reserve richer motion for the hero, featured project transition, and closing motif.
- Do not animate every element.
- Never hijack scrolling or make visitors wait for an animation.
- Respect `prefers-reduced-motion`.
- Provide keyboard focus states and touch-friendly alternatives.
- Avoid expensive continuous rendering when the graphic is not visible.

---

## 8. Responsive behavior

### Desktop
- Spacious editorial layouts.
- Optional pointer-responsive detail in the hero or project cards.
- Two-column or asymmetric project compositions where useful.
- Persistent compact navigation.

### Tablet
- Simplify overlapping graphics and multi-column layouts.
- Preserve comfortable reading widths.
- Reduce decorative motion and complex pointer effects.

### Mobile
- Single-column reading flow.
- Compact navigation that remains understandable.
- Tap-friendly controls; no hover-only information.
- Simplified or static versions of complex graphics.
- Avoid horizontal scrolling, tiny labels, and oversized animation.
- Keep project names, summaries, and actions visible.
- Ensure direct access to Work and Contact.

---

## 9. Accessibility, usability, and performance requirements

These are non-negotiable.

### Usability
- Visitors can identify what Arjun does quickly.
- Visitors can find the strongest project without completing the full page.
- Every project card has a clear title, summary, and destination.
- Navigation and contact are always straightforward.
- Essential content remains available with animations disabled.

### Accessibility
- Semantic headings and landmarks.
- Keyboard-accessible navigation and controls.
- Visible focus indicators.
- Sufficient color contrast.
- Accessible names for interactive graphics and buttons.
- Respect reduced-motion preferences.
- Never communicate information through color or animation alone.

### Performance
- Load text and core page structure first.
- Optimize images and use responsive image sizes.
- Lazy-load below-the-fold images and heavy media.
- Avoid unnecessary large animation libraries.
- Defer or simplify 3D effects if they hurt performance.
- Avoid layout shifts as images and fonts load.
- Test on real mobile devices and slower connections.

---

## 10. Project case-study wireframe

Use this structure consistently, while allowing each project to have a distinct visual presentation.

```text
WORK / PROJECT 01

[Project name]
[One-sentence value statement]

[Role] [Duration] [Technologies]

01 — THE CHALLENGE
What needed to be solved, and why did it matter?

02 — THE SOLUTION
Product preview, implementation, and key decisions.

03 — HOW IT WORKS
Architecture, data flow, or technical detail where useful.

04 — RESULTS
Evidence, outcomes, limitations, and trade-offs.

05 — WHAT I LEARNED
What would be improved or explored next?

[Previous project]                 [Next project]

[Back to selected work]
[Contact Arjun]
```

Only include sections that make sense for the actual project. Use real screenshots, code, diagrams, and metrics where available.

---

## 11. Build workflow for Gravity

Build in stages. Do not attempt the entire animation system before the page structure and content are correct.

### Phase 1 — Content inventory
Collect:
- Existing portfolio URL or source files.
- Project names, descriptions, screenshots, and public links.
- Actual responsibilities and technical contributions.
- Work history and dates.
- Skills and technologies actually used.
- Résumé, GitHub, LinkedIn, and contact details.

### Phase 2 — Wireframe
- Create all seven landing-page scenes.
- Define navigation, hierarchy, content width, and responsive behavior.
- Add the case-study page template.
- Verify the site makes sense with all motion disabled.

### Phase 3 — Visual system
- Implement the warm-white palette and typography.
- Establish spacing, grids, buttons, cards, and connected-line graphics.
- Design varied but consistent section compositions.

### Phase 4 — Interactions
- Add scroll-aware transitions.
- Add project-card hover/focus behavior.
- Build accessible discovery nodes and technical diagrams.
- Add current-section navigation state.
- Implement reduced-motion alternatives.

### Phase 5 — Case studies and content
- Replace placeholders with verified project information.
- Add detailed case-study routes.
- Connect demos, source code, and professional profiles where available.

### Phase 6 — Quality assurance
Test:
- Desktop, tablet, and mobile layouts.
- Keyboard navigation and focus states.
- Reduced-motion behavior.
- All links and project routes.
- Loading performance and layout stability.
- Whether a first-time visitor can find Work, understand a project, and contact Arjun without assistance.

---

## 12. Definition of done

The portfolio is ready for launch when:

- [ ] The opening clearly communicates Arjun's professional focus.
- [ ] Work, About, and Contact are easy to reach from anywhere.
- [ ] Visitors can explore sections in any order.
- [ ] The featured projects explain the problem, contribution, and outcome.
- [ ] Case studies have shareable URLs and clear return navigation.
- [ ] The visual motif connects sections without competing with the content.
- [ ] Animations feel responsive and purposeful rather than decorative.
- [ ] Essential content remains accessible without animation or hover.
- [ ] The design works on mobile and with keyboard navigation.
- [ ] Reduced-motion preferences are respected.
- [ ] The site remains performant on typical mobile connections.
- [ ] No fake metrics, testimonials, skills, or project claims remain.
- [ ] Email, résumé, GitHub, and LinkedIn links work.

---

## 13. Build instruction for Gravity

Use this document as the source of truth. First inspect the existing portfolio and available project content before replacing anything.

Implement the information architecture and responsive wireframe before adding advanced animations. Preserve the light futuristic design direction, the exploratory navigation model, and the usability requirements. Use original graphics and interactions inspired by the principles of the reference sites; do not copy their assets or layouts.

Use real portfolio content wherever it is available. If information is missing, retain clearly marked placeholders rather than inventing personal details, projects, metrics, or experience.

Prioritize in this order:

1. Correct content and information hierarchy.
2. Clear navigation and project discovery.
3. Responsive visual design.
4. Purposeful motion and connected interactions.
5. Performance, accessibility, and polish.

**Final principle:** Make the experience memorable, but make the work effortless to understand.
