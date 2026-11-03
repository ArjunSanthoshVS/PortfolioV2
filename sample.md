# Lauren Waller Portfolio — MVP Breakdown and Website Cloning Specification

The website at [lauren-waller.com](https://lauren-waller.com/?utm_source=chatgpt.com) is a personal portfolio for a product designer and Framer developer. It combines a professional introduction, a visual showcase of projects, an About page, a shop for digital products, and a contact page. The homepage links to these main destinations through its navigation.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com

+3



To clone it effectively, you need to recreate three things separately:

1. The visual system — typography, colors, spacing, project imagery and page layouts.
2. The interaction system — navigation, hover states, scrolling, page transitions and clickable project cards.
3. The content structure — projects, project details, biography, shop links and contact information.

The goal of the MVP is to reproduce the website's essential experience and visual identity without unnecessarily rebuilding every feature of its original implementation.

[Circus App Case Study](https://images.openai.com/static-rsc-4/oiztl0TDGKVm6Hte0qfjWCcihke0Zvc6VczHDcnCYMvP25orJ2Wap1R1hIqAtE4ULv8taMW4u8Aafe6A66uZp10P8mez0d0577UG-h_bWhIaYCYj4jefGsvnWGCbEM98Iya5raqFhBRd6q7_Qlqkh4cUR4adOf8RVN7hwTEvsc4?purpose=inline)

1\. Homepage

Route: `/`

Introduces Lauren, establishes her professional positioning, and directs visitors toward her work, About page, shop and contact details.

[Henry Desroches - landing.love](https://images.openai.com/static-rsc-4/Yx6PO1823Hos8Vo4yI36cObaqnZN4vR4Qr5UkK8A5DI0WxiPeAJRXYgLJ2Uz1P5TC-1Gg73E4NVOyUWDKhWDpn6ox-mPfos8LmYsr_5KpphokBe6nFXS58pqQvpRQGUbnqfMdaPCrABoWd67Il9oS-sLUN5M7rEtoSX88SFVhsA?purpose=inline)

2\. Work portfolio

Route: `/work`

A visual project index featuring work across product design, websites, no-code development and product management.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



[Okalpha - Lauren Waller](https://images.openai.com/static-rsc-4/-J0onqGmxB0typlqnaavEMyogYFpcq21_hgQF3DzW-t4bfHUw9MOmhwBKM0BEzDoMhlP95eOmsH7LAI-NuzitcxiINnCn3WT4OsrSylpOOqaogoFBhx1quRPzCmflVl8-e9RliruxIyuTxb2Rq9O2lZzpmiKBLBmUEuG30EXUFo?purpose=inline)

3\. About

Route: `/about`

A biography, professional experience, skills and acknowledgements page.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



The references above are for visual orientation; they are not verified screenshots of every live interaction. The live homepage confirms the main navigation destinations, but the precise animation timings, easing curves and some hover details need to be inspected directly in a browser before they can be reproduced pixel-for-pixel.

## 1. Complete page structure

The core website has four primary navigation destinations, plus a project index and individual project pages. The shop is an external destination rather than necessarily a page hosted on the portfolio itself.

Homepage — `/`

Introduction, identity, visual presentation and navigation

Work — `/work`

Project gallery and case-study links

About — `/about`

Biography, experience and skills

Shop — external

Digital products and templates

Contact — `/contact`

Email and professional social links

Individual project detail pages

Project context, visuals, contribution, outcomes and next/previous navigation

The Work page currently lists eight projects in its indexed content: Ward Ward, Superlink, Okalpha, Karoo, Studio, Margravine, Cssco and YumYuck.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



For the MVP, use this page inventory:

| Page                    | MVP priority | Purpose                            |
| ----------------------- | ------------ | ---------------------------------- |
| Homepage                | Essential    | First impression and navigation    |
| Work index              | Essential    | Browse projects                    |
| Project detail template | Essential    | Explore an individual project      |
| About                   | Essential    | Establish credibility              |
| Contact                 | Essential    | Make contact easy                  |
| Shop                    | Link out     | Send visitors to the existing shop |
| 404 page                | Recommended  | Handle invalid routes gracefully   |

You do not need to build eight different project layouts. Create one reusable project-detail template and populate it with project-specific content.

## 2. Homepage — section-by-section layout

The homepage's indexed content confirms the designer introduction and the Work, About, Shop and Contact destinations. The following is the recommended implementation structure; it distinguishes the site's confirmed content from layout details that must be checked visually in the live browser.

[Rhode - website design](https://images.openai.com/static-rsc-4/zJBps_UNQXzHd90QH7yT8DRSWga9Pu_ppgEC8uWDM4jU4LhKDJEPj4F7CeFdUqBpKPsBozcTp5ny5qxrVnKouWY-X28u0tH-fgRBb4RIXD2eAH_OnOavKk41FKuHOPDiTzu6gcC3FEVla7uKZoOv56giGULYoT1JU67Y7H1s_cQ?purpose=inline)

Section 01 — Header and identity

- Name or logo on the left.
- Navigation on the right or in the site's observed positions.
- Work, About, Shop and Contact destinations.
- Consistent header behavior across routes.

Clone requirement: reproduce the actual alignment, spacing and sticky/static behavior after checking the live site.

[Ari Ahokas  \[Website\] <> No-Code Supply Co.](https://images.openai.com/static-rsc-4/MN7bMS_oG7WAybxjC57DzmLE_JoHTzRC0stZgji0LQ-rnVYGy9L08fLtXirMIAbkZjE2yKdM0eew1XSMC9rG25ySL_Lzpx2JViZ1GZk7I0yH18AobiCQD3LAvNCLHJhAXotDC-o6tLonhRYK70ZS1Y5Y8foXoFV0ngwdl2UvIS4?purpose=inline)

Section 02 — Introductory hero

- Designer's name.
- Professional positioning and current role.
- Short supporting statement.
- Strong visual typography and whitespace.

The live page identifies Lauren as an award-winning product designer at Detail Technologies and a Framer Developer and Partner.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



[Work Layout Grid - Awwwards](https://images.openai.com/static-rsc-4/CJD8xghG5nQR4AIeA5tmp9SDQH1lnf0lbykVfC22Ei9IaEaHlaSheeoUiuCb_mU4wPzLOZg1Monc10jf2bdL_4sFHPPaVRY-CcizSAd7CjgsXQ9sqgd-JZOj3-lNzgec2mEb62pNEKm2HlNV9K12FiUAyalZ1o00datVamjrMvA?purpose=inline)

Section 03 — Featured work

- Large project thumbnails or preview panels.
- Project title and discipline.
- Consistent image treatment.
- Click-through to each project.

Project visuals should carry most of the visual weight. Avoid generic placeholder cards if the goal is a close recreation.

[Satz: Responsive Portfolio Website Template by Aathif Thajudeen — Framer Marketplace](https://images.openai.com/static-rsc-4/H_4cerOWNKmM_-jfI8pR9fOQ09D7kV787_-ebQLSeQay4vzN59ddqioK-KmCpwAyfWeDroT-OBp0jJuYUzs1LStKSAD3nE-_vqCmpf4V2_-n-o5WZ7rYcegcZS2C639wozw5OJh022gf4Qpbpv08rXP3AZrvzYLjjVssgr0bxR4?purpose=inline)

Section 04 — About / professional context

- Brief background.
- Design philosophy.
- Link to the full About page.

Keep the homepage introduction concise; reserve detailed career history and skills for `/about`.

[Chiara Luzzana sound designer portfolio - Awwwards](https://images.openai.com/static-rsc-4/kUZlrpRDaec2h6OpkW7LxJvRf7Kp2ncezF9A6Mj0PhUrj0evP6clU65jbo8D9qPREVmZQa-ux4nTgor75av3vEIhMbOaDneccj1Z6U26HCq-7kcjHip6QLu4Da_CU8Lzg5_D-yP7-gOaTZt0WBWLjKIRBRIArqjsmzXhhtQLKAk?purpose=inline)

Section 05 — Closing CTA and footer

- Contact invitation.
- Email and social destinations.
- Shop link where appropriate.
- Copyright and consistent navigation.

The contact page itself includes email, LinkedIn, Dribbble, Threads and GitHub links.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



Important: Treat these as the implementation blueprint, not a verified pixel-by-pixel transcription of the homepage. For a true clone, capture the actual viewport at desktop and mobile widths and compare each section's order, dimensions, image crop and typography.

## 3. Work page — project gallery

Route: `/work`

This is one of the most important pages because it demonstrates the portfolio owner's actual work. The live page describes a range of graphic design, web design, no-code development, product design and product management projects.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



PAGE INTRODUCTION

# WORK

A concise introduction explaining the variety of projects and disciplines.

[Modern Website Design Examples | Modern Website Ideas | Wix.com](https://images.openai.com/static-rsc-4/YaVOqwqUj5Uq0x-LHc2roH4VwN4IkCE9KRXq0Qn-nPfGvma9OBbUmEBSk8nzDmdAhrGyV0WEqdZ-U1isgJ3NqRT66Leu_w4UPILDVDrFfbo18L_lxw8tfysz9JZyK8huxxbqDOwtmwzuTsoqbs5H3m6pc6IzmSnNBGAdW9vS_mw?purpose=inline)

Ward Ward

Webflow development

[Design Portfolio of Anton Suprunenko, product designer and art-director from Ukraine](https://images.openai.com/static-rsc-4/uXu2_MS6U87slmd7jjITUPL6fT3PsL3BxEqGuJISRnvTtv0UW4qmi6H6LX9jrqVrBY2werQ36iGs-HgVipV8DjeGsXfGfNgxP3dVDtLWo_gwYVsy2cd8sV69kME0Fk93hId_CbIxcv5p2L5-xh4m4R5gDhgjtxdGrK-Xa5yivS0?purpose=inline)

Superlink

Framer development

[Okalpha - Lauren Waller](https://images.openai.com/static-rsc-4/Q1UP5u-MOk_wULFGLJfYlgG-zuzSD91JKdzgkmC_bzpapNlZZFXK4Tz39Jj8ElhkQmBT3X1wyvS3KY6si2qA2cvsPiQjx0qQy0Q9GANY54nFf_lfehbrGc7iAJtKt7ZNSDE0Lq6Kq058WECnfgzsUVnABsFSB4W2i_sRVRKEqnU?purpose=inline)

Okalpha

Webflow development

[Karoo - Lauren Waller](https://images.openai.com/static-rsc-4/U7IFzssHO3Uy_f5x9xNVdF9xf8GLfTxZFSJNFS3T5qL9iAEWs8oupoew05HMVjLNTwQte0Hu5PpOgSjtVNBr4f6jiAhDjCUtEgOWa3V1V4uYXXMb_9Ieiq2Qq7a3BnzTDN7ipIjU1Z3Xdd98JazMzaDGpiXtaydLccKwkl7qu54?purpose=inline)

Karoo

Webflow development

Illustrative project imagery only. These are not verified screenshots of the actual project cards.

### Project card behavior

Each card should have the following states:

[Grid System and layout - Awwwards](https://images.openai.com/static-rsc-4/6BdpgQd_7StYGEURkRneZDdtik53xqd2a7L36XTw84MNf2xoj4cW2MAiUG2Rf9cC5voO5Z9q8EVvubUiaU5qwwEmhDfQCvJHWHxdcmSVn1gPH193vW2YnOvihKW2JYPlexvRxDEqu1HIlTOlq5MW5C85M0Xp75l7Le8l2idYN5w?purpose=inline)

Default state

Image, project name and discipline are visible. The card has the exact resting appearance used in the reference site.

[Oblica](https://images.openai.com/static-rsc-4/q8AYi3V071QfzlllxpDbzh9sq2UahAYAqzN-TnI_gGP0UPE57em1xG_vGMAUczVCX5j8T0o4zzX995bkbRs4QxB0e5vQmBlacrCEw8AxRJKNK4ZaZAJwGgTakQTPaKDCuGjjAtLEJeAg8okyBtYWBLgmy6ByGSMpaTuiByyhzwk?purpose=inline)

Hover state

Use a subtle image zoom, image shift, text reveal or color change only if observed on the original card. Avoid adding arbitrary effects.

Click state

Open the relevant project detail page or the original external project, according to the source site's actual link behavior.

### Recommended project detail template

Every project should use the same underlying structure, with content varying per project.

1. Project hero: title, category, large cover image and concise summary.
2. Project information: role, responsibilities, timeline and collaborators where known.
3. Problem and context: what needed to be solved.
4. Approach: research, design decisions, development and iteration.
5. Visual showcase: full-width images, interface mockups, responsive views or video.
6. Results: measurable outcomes only when supported by real data.
7. Navigation: previous project, next project and return to Work.

Do not fabricate project descriptions, performance metrics or testimonials. If you do not have the original case-study content, use your own work and accurate descriptions.

## 4. About page

Route: `/about`

The About page is a professional biography rather than simply another gallery. The indexed page contains the designer's background, experience, skills, design philosophy and acknowledgements.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



Recommended content order:

1. Opening statement: name, current professional identity and what the person does.
2. Biography: background, career progression and motivation.
3. Experience: roles, years of experience and key responsibilities.
4. Skills: grouped capabilities such as product design, UX, development and strategy.
5. Recognition and acknowledgements: awards, collaborators or professional references, if applicable.
6. Contact CTA: email and links to the Contact page.

Use a long-form editorial layout with clear heading hierarchy and comfortable reading width. Match the original page's image placement, column structure and whitespace rather than imposing a generic résumé template.

## 5. Contact page

Route: `/contact`

The source page uses a simple “Hello” introduction, a short invitation to get in touch, an email address and external professional links.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



For the MVP, implement:

- A large, visually distinctive opening heading.
- One concise contact message.
- A working `mailto:` email link.
- External social links that open the correct profiles.
- A route back to the homepage or main navigation.
- The same footer and visual language as the rest of the site.

A contact form is optional. If the reference does not have one, do not add one just to make the clone feel more complex.

## 6. Shop page

The live homepage links to a shop hosted on Gumroad, where Lauren promotes Framer website templates.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com



For an MVP, do not build a separate e-commerce system. Reproduce the visible Shop navigation item and point it to the actual shop URL.

If you are cloning the structure for your own portfolio, use your own product destination. You can add checkout, customer accounts and product management later if needed.

## 7. Transitions and animations — the most important part of the clone

A good recreation is not just a collection of pages with matching colors. The navigation and visual changes between pages must feel consistent.

The exact motion specifications below are recommended starting values, not measured values from Lauren's live site.

## Transition specification

A. Navigation click

Trigger: user selects Work, About or Contact.

- Update the route.
- Preserve the correct browser history.
- Transition the outgoing page out and the incoming page in.
- Prevent double-clicks from triggering conflicting transitions.

Suggested motion: 250–450 ms, ease-in-out.

B. Page entrance

Trigger: a new page becomes active.

- Fade in the main content.
- Use a small vertical movement if appropriate.
- Reveal the heading before or alongside the content.
- Avoid making visitors wait for decorative animations.

Suggested motion: 300–500 ms; movement around 8–16 px.

C. Project card hover

Trigger: pointer enters or leaves a project card.

- Smoothly animate the image or overlay.
- Keep the project title readable.
- Restore the original appearance on pointer exit.
- Support keyboard focus and touch devices.

Suggested motion: 200–300 ms.

D. Scroll reveal

Trigger: content enters the viewport.

- Reveal sections or project items as they appear.
- Use short, restrained stagger intervals.
- Do not animate every line of text independently.
- Do not hide essential content if animation fails.

Suggested stagger: 40–80 ms between items.

E. Mobile navigation

Trigger: user opens or closes the mobile menu.

- Show a clear menu panel.
- Animate its entrance and exit.
- Close the menu after navigation.
- Maintain focus behavior and an accessible close control.

Suggested motion: 200–300 ms.

### How the transitions should work together

\#chatgpt-mermaid-\_r_1up\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(237, 237, 237);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_1up\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1up\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_1up\_ .error-icon{fill:rgb(48, 48, 48);}#chatgpt-mermaid-\_r_1up\_ .error-text{fill:rgb(237, 237, 237);stroke:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_1up\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_1up\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_1up\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_1up\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_1up\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1up\_ .marker.cross{stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1up\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_1up\_ p{margin:0;}#chatgpt-mermaid-\_r_1up\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ .cluster-label text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ .cluster-label span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_1up\_ .label text,#chatgpt-mermaid-\_r_1up\_ span{fill:rgb(237, 237, 237);color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ .node rect,#chatgpt-mermaid-\_r_1up\_ .node circle,#chatgpt-mermaid-\_r_1up\_ .node ellipse,#chatgpt-mermaid-\_r_1up\_ .node polygon,#chatgpt-mermaid-\_r_1up\_ .node path{fill:rgb(9, 23, 44);stroke:rgb(31, 78, 148);stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .rough-node .label text,#chatgpt-mermaid-\_r_1up\_ .node .label text,#chatgpt-mermaid-\_r_1up\_ .image-shape .label,#chatgpt-mermaid-\_r_1up\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_1up\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .rough-node .label,#chatgpt-mermaid-\_r_1up\_ .node .label,#chatgpt-mermaid-\_r_1up\_ .image-shape .label,#chatgpt-mermaid-\_r_1up\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_1up\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_1up\_ .root .anchor path{fill:rgb(175, 175, 175)!important;stroke-width:0;stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1up\_ .arrowheadPath{fill:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1up\_ .edgePath .path{stroke:rgb(175, 175, 175);stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .flowchart-link{stroke:rgb(175, 175, 175);fill:none;}#chatgpt-mermaid-\_r_1up\_ .edgeLabel{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1up\_ .edgeLabel p{background-color:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1up\_ .edgeLabel rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1up\_ .labelBkg{background-color:rgba(0, 0, 0, 0.5);}#chatgpt-mermaid-\_r_1up\_ .cluster rect{fill:rgb(48, 48, 48);stroke:rgba(255, 255, 255, 0.15);stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .cluster text{fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ .cluster span{color:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(48, 48, 48);border:1px solid rgba(255, 255, 255, 0.15);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_1up\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(237, 237, 237);}#chatgpt-mermaid-\_r_1up\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_1up\_ .icon-shape,#chatgpt-mermaid-\_r_1up\_ .image-shape{background-color:rgb(0, 0, 0);text-align:center;}#chatgpt-mermaid-\_r_1up\_ .icon-shape p,#chatgpt-mermaid-\_r_1up\_ .image-shape p{background-color:rgb(0, 0, 0);padding:2px;}#chatgpt-mermaid-\_r_1up\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_1up\_ .image-shape .label rect{opacity:0.5;background-color:rgb(0, 0, 0);fill:rgb(0, 0, 0);}#chatgpt-mermaid-\_r_1up\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_1up\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_1up\_ .node .neo-node{stroke:rgb(31, 78, 148);}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_1up\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_1up\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node .neo-line path{stroke:rgb(31, 78, 148);filter:none;}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_1up\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_1up\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1up\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_1up\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_1up\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1up\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(153, 206, 255);}#chatgpt-mermaid-\_r_1up\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_1up\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_1up\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .node rect,#chatgpt-mermaid-\_r_1up\_ .node circle,#chatgpt-mermaid-\_r_1up\_ .node ellipse,#chatgpt-mermaid-\_r_1up\_ .node polygon,#chatgpt-mermaid-\_r_1up\_ .node path{fill:rgb(0, 40, 77);stroke:rgba(255, 255, 255, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_1up\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_1up\_ .node.mermaid-decision .label-container{fill:rgb(0, 14, 26);stroke:rgb(26, 62, 95);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_1up\_ .edgePaths .flowchart-link{stroke:rgb(175, 175, 175);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_1up\_ .marker{fill:rgb(175, 175, 175);stroke:rgb(175, 175, 175);}#chatgpt-mermaid-\_r_1up\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}User opens homepageRender page and navigationUser selects WorkRun exit transitionUpdate route to /workReset scroll when appropriateRun entrance transitionShow project galleryUser selects a projectOpen project detailBrowse project contentReturn to Work or select nextproject

### Transition implementation rules

- Use actual route navigation, not buttons that only replace visible text.
- Direct visits to `/work`, `/about`, `/contact` and project URLs must work.
- Browser Back and Forward must restore the correct page.
- Avoid full-page reloads unless the source implementation requires them.
- If using shared layout animations, ensure the header does not flicker or remount unnecessarily.
- Respect `prefers-reduced-motion`; disable nonessential movement for users who request reduced motion.
- Do not leave invisible elements blocking clicks after an exit animation.
- Use real links so navigation remains accessible and crawlable.

## 8. Visual design system to recreate

The website should be treated as an editorial, typography-led portfolio. Do not choose fonts, colors or animation styles arbitrarily; inspect the live site and record the actual values wherever possible.

## Design tokens

Color system

Warm light

Near black

Muted grey

Example palette for prototyping only; these are not verified source-site colors.

Typography hierarchy

# Large display heading

## Section heading

Body copy for project descriptions and biography content.

Small labels for project disciplines, metadata and footer details.

Use the actual source fonts and weights after inspecting the website.

### Layout specifications

These are practical initial values for a desktop implementation, to be calibrated against the live reference.

| Element             | Initial specification                              |
| ------------------- | -------------------------------------------------- |
| Main content width  | 1,200–1,400 px maximum                             |
| Page side padding   | 32–64 px desktop                                   |
| Mobile side padding | 16–24 px                                           |
| Header height       | 64–96 px                                           |
| Display typography  | Large, responsive, tightly controlled line height  |
| Grid                | Match the source card arrangement                  |
| Image handling      | Consistent aspect ratios and source-matching crops |
| Section spacing     | Generous, responsive vertical rhythm               |
| Corners and borders | Match actual image containers and UI details       |
| Footer              | Consistent across internal routes                  |

Do not implement every value as a fixed pixel measurement. Use responsive units, `clamp()`, grid and flexbox where appropriate.

## 9. Responsive behavior

A desktop-perfect clone can still fail if its mobile version changes the layout incorrectly.

[23 portfolio website examples, plus best practices to attract clients | Webflow Blog](https://images.openai.com/static-rsc-4/jx_jBkJVszYGQGByOOSDV_5zGKvt3Xj44Mvkj0lVfXR7Al8g1Bf-hQJB_c5ibgUIkADeSsAXxnKc_idfP_XWBIVVJelBJAW-TziTxHsXKBTIL2d1ASmW-nHUYNiReoNJ_jqp9M8lHMR-fmrHHiYFsimoPH4qBfz7fDuw83pnzKA?purpose=inline)

Desktop — 1024 px and above

- Match the original navigation.
- Use the observed multi-column project layout.
- Preserve large type and generous margins.
- Avoid excessively wide text blocks.

[Grafik — Archive](https://images.openai.com/static-rsc-4/48tw2uEDQpgRUgsDvLTE05nPOFrWW0irvuLFIktpTqGJLawb_ZA2MOn4VAIBCHYjOYXvPs32_Ix_lp515d_QqB3o_v-28DNYP3m_d63AovXtFbFdImGANlEL278ryifV6auSSg_KNpV7-57BdT41t5hohmVKp3RnDlTabHKDksc?purpose=inline)

Tablet — 768 to 1023 px

- Reduce outer spacing.
- Adjust the project grid to available width.
- Prevent headings from colliding with navigation.
- Preserve image proportions.

[NORRA: Responsive Real Estate Website Template by Volodymyr F. — Framer Marketplace](https://images.openai.com/static-rsc-4/66MNl2O-otiqWoWNb8lVt3AFYiB7VP8zAS5Hb855exYRSC5QdSh8snhHTbdlKMUviysTwaQHbvJyLNsOkiHTvO6FrYjdsZVzh-FC9fX3t1cF1629-YlHgLEfT2JA0ruoys4eq5MlJG7ufB38SqnjF8muVhOgQYoWHz_qixBnRx4?purpose=inline)

Mobile — below 768 px

- Use the source site's mobile menu behavior.
- Stack cards if necessary.
- Scale display type to prevent clipping.
- Replace hover-only information with visible or tap-accessible content.

These are recommended responsive breakpoints, not confirmed breakpoints from the original website.

## 10. Technical implementation for the clone

For a maintainable MVP, use a component-based frontend and a small project data structure.

| Layer      | Recommended approach                                         |
| ---------- | ------------------------------------------------------------ |
| Framework  | React with Next.js, or another framework with proper routing |
| Styling    | CSS modules, plain CSS or Tailwind CSS                       |
| Animation  | Framer Motion or native CSS transitions                      |
| Content    | Local structured data for the initial project set            |
| Images     | Optimized local assets or authorized image URLs              |
| Navigation | Real route links with direct URL support                     |
| Hosting    | Vercel or equivalent                                         |
| CMS        | Optional later; not necessary for the first MVP              |

The reference website is associated with Framer and Webflow in its professional positioning and project content, but that does not mean your clone must use either platform.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://lauren-waller.com\&sz=32)

lauren-waller.com

+1



### Recommended component architecture

```

src/
  app/
    page.tsx                 # Homepage
    work/
      page.tsx               # Project index
    projects/
      [slug]/
        page.tsx             # Reusable project detail
    about/
      page.tsx
    contact/
      page.tsx
    not-found.tsx

  components/
    SiteHeader.tsx
    SiteFooter.tsx
    MobileNavigation.tsx
    PageTransition.tsx
    ProjectCard.tsx
    ProjectGrid.tsx
    ProjectHero.tsx
    ProjectNavigation.tsx
    ScrollReveal.tsx

  data/
    projects.ts
    site.ts

  styles/
    globals.css

```

This is an example Next.js App Router structure, not the original website's source-code architecture.

### Example project data model

```

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  coverImage: string;
  role?: string;
  year?: string;
  sections: {
    heading: string;
    body: string;
    images?: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "Sample Project",
    category: "Product Design",
    summary: "A concise project introduction.",
    coverImage: "/images/sample-project-cover.webp",
    role: "Design and development",
    sections: [
      {
        heading: "Overview",
        body: "Describe the project, its context and the work performed.",
        images: ["/images/sample-project-detail.webp"]
      }
    ]
  }
];

```

The sample data is illustrative. Replace it with your actual portfolio content and authorized visuals.

### Image and asset requirements

For a high-fidelity recreation, assets matter as much as code.

- Capture the reference website's page layouts at a consistent viewport size.
- Collect project thumbnails and detail images from authorized sources.
- Identify fonts and font weights using browser inspection.
- Record image aspect ratios, cropping, background colors and whitespace.
- Inspect logos, icons, links and footer details.
- Avoid using unrelated images just because they match the same broad category.
- Optimize images and lazy-load below-the-fold content.

If exact original assets are unavailable, use your own comparable work rather than copying proprietary case-study imagery without permission.

## 11. Build workflow — from reference to working MVP

Follow this order rather than building every page and animation simultaneously.

1. Phase 1 — Reference audit

   Inspect the original website at desktop and mobile widths. Record page screenshots, fonts, colors, spacing, project card layouts, navigation behavior and actual URLs. Test hover states and browser navigation.
2. Phase 2 — Visual foundation

   Implement global typography, spacing tokens, page containers, image rules, header and footer. Verify the homepage's overall appearance before adding complex motion.
3. Phase 3 — All routes

   Build `/`, `/work`, `/about`, `/contact` and `/projects/[slug]`. Make every route work when opened directly, not just after clicking from the homepage.
4. Phase 4 — Content and imagery

   Populate the project grid and reusable project detail template. Add the actual biography, contact destinations and shop link.
5. Phase 5 — Interaction and transitions

   Add page transitions, hover states, scroll reveals and mobile navigation. Match the source site's observed behavior rather than inventing effects.
6. Phase 6 — Responsive QA

   Test desktop, tablet and mobile. Check keyboard access, reduced-motion preferences, image loading, route errors, Back/Forward behavior and performance.

## 12. MVP acceptance checklist

Use this as the final definition of done.

## Implementation checklist

### 0/23

Pages

Homepage renders correctly

Work page displays all required projects

Reusable project detail pages work

About page contains complete biography sections

Contact links and external shop link work

404 page handles invalid routes

Interactions

Navigation works from every page

Project cards have correct click destinations

Hover and focus states work

Page transitions do not cause layout flashes

Back and Forward navigation work

Mobile menu opens, closes and navigates correctly

Visual quality

Fonts and color tokens match the reference

Desktop spacing and section order match

Images use correct assets and crops

Mobile layouts have no clipping or overflow

Footer and shared elements remain consistent

Technical quality

Direct route access works

Images are optimized

No broken links or console errors

Reduced-motion preference is respected

Page titles and metadata are set

Responsive and accessibility checks pass

Copy checklist

## 13. What to prioritize and what to skip

| Build now                        | Leave for later                       |
| -------------------------------- | ------------------------------------- |
| Accurate homepage and navigation | Complex custom cursor                 |
| Complete project index           | Elaborate 3D effects                  |
| Reusable project pages           | Custom CMS administration             |
| About and Contact pages          | E-commerce checkout                   |
| Source-matching transitions      | Decorative animation on every element |
| Responsive layouts               | Advanced analytics dashboards         |
| Working external links           | Unnecessary backend APIs              |

The most important rule: prioritize visual fidelity and reliable navigation before animation complexity. A clone with correct content, spacing, images and route behavior will be more convincing than one with impressive transitions but inaccurate layouts.

For a public portfolio inspired by this website, recreate the interaction patterns and overall design approach, but use your own branding, project content and appropriately licensed assets.