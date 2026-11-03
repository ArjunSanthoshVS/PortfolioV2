# Project Overview: Ding Dong Digital (DDD)

## What the Application Does
Ding Dong Digital (DDD) is an AI-powered agency operating system and digital transformation platform for small-to-medium businesses (SMBs). It automates the creation of a complete digital business presence—from voice brief transcription and brand identity generation to multi-page website building, domain registration, and custom email setup. Clients manage their live presence, e-commerce store, customer inquiries, and AI-assisted updates directly through a dedicated mobile application and PWA.

## What Problem It Solves
Building a complete digital presence traditionally requires hiring separate designers, developers, sysadmins, and copywriters across weeks or months using fragmented tooling. Ding Dong Digital eliminates this operational bottleneck and high cost by automating brand asset creation, website development, domain/DNS orchestration, and infrastructure provisioning into a single, cohesive workflow.

## Main Features
* **AI Discovery & Brand Generation:** Audio discovery brief recording with AI transcription, business profile synthesis, AI logo generation with SVG vectorization, and brand kit design.
* **Automated Website Generation & Editing:** Multi-page website generation with automated royalty-free stock imagery, interactive live iframe preview, and in-place AI chat editing.
* **Infrastructure & Domain Automation:** Automated domain availability search and registration, Cloudflare DNS configuration, automated SSL certificates, and one-click Cloudflare Pages deployment.
* **Custom Email Hosting:** Automated business mailbox setup via Migadu with custom domain DNS records, plus an in-app IMAP/SMTP email client.
* **Automated E-Commerce Deployment:** Automated provisioning of WordPress + WooCommerce stores on dedicated VPS servers via SSH2, with full mobile store management (products, orders, customers).
* **Client Mobile App & PWA:** Native Expo/React Native mobile app and offline-ready PWA featuring OTP authentication, website form submission tracking with direct email reply, and appointment scheduling.
* **Financial Ledger & Billing:** Credit balance system with pay-per-action deduction, Razorpay payment links, and per-token AI cost and expense tracking.

## Technology Stack
* **Frontend (`DDD_Client`):** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, GSAP, Chart.js, i18next (English & Japanese), Vitest.
* **Mobile / PWA (`DDD_Mobile`):** React Native 0.81, React 19, Expo 54 (New Architecture enabled), Expo Router v6, React Native Reanimated, Expo SecureStore, Jest.
* **Backend (`DDD_Server`):** Node.js, Express 4, TypeScript, MongoDB (Mongoose 8), Helmet, CORS, Rate Limit, Node-Cron, Vitest, Autocannon.
* **Database & Storage:** MongoDB (primary database), Cloudflare R2 via AWS S3 SDK (asset & media object storage).

## Third-Party Services, APIs & Integrations
* **Google Gemini AI (`@google/genai`):** Multimodal AI for audio brief transcription (`gemini-3-flash-preview`), website code generation (`gemini-3.1-pro-preview`), and image/style synthesis.
* **Cloudflare Ecosystem:** Cloudflare Pages (static site hosting via Wrangler direct upload), Cloudflare R2 (media storage), Cloudflare DNS (zone and record management), and Cloudflare Origin CA (SSL certificates).
* **Namecheap API:** Automated domain availability search, pricing, and domain registration via XML API.
* **Migadu API & Mail Services:** Automated business email mailbox provisioning via REST API, IMAP (`imapflow`) for mailbox reading, and SMTP (`nodemailer`) for outbound messaging.
* **Recraft AI:** Logo background removal and raster-to-SVG vectorization.
* **Razorpay:** Payment processing for credit top-ups and service packages.
* **Twilio / Twilio Verify:** SMS OTP mobile authentication.
* **Pexels & Pixabay APIs:** Royalty-free stock photo search and automated placement in generated websites.
* **Linux VPS via SSH2 (`ssh2`):** Remote shell execution for automated WordPress/WooCommerce site deployment.
* **OpenStreetMap & Photon:** Address autocompletion (Photon API) and reverse geocoding (Nominatim) for appointment and client locations.
* **Browserless / Puppeteer-Core:** Headless browser rendering for automated brand guidelines and invoice PDF generation.
