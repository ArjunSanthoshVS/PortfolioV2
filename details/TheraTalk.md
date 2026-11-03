# Project Overview: TheraTalk

## What It Does
TheraTalk is a multi-platform tele-counseling and mental health consultation ecosystem connecting users with licensed counselors ("Buddies"). The platform delivers immediate on-demand matching and scheduled appointments across real-time text chat, audio calls, and video calls. It features dedicated mobile apps for clients and counselors, supported by web portals for practice administration, counselor management, and automated session intelligence.

## Problem It Solves
Accessing timely, affordable, and stigma-free mental health support often involves long wait times, rigid scheduling, and high upfront commitments. TheraTalk eliminates these friction points by providing immediate, flexible consultation modes (chat, audio, video) with transparent minute-based pricing and wallet top-ups, while automating administrative tasks like scheduling, reminders, and clinical session transcription for counselors.

## Main Features
* **Multi-Modal Real-Time Consultations:** In-app text chat, voice calls, and video sessions powered by real-time WebRTC and chat protocols.
* **On-Demand Matching & Scheduled Appointments:** Instant counselor request dispatching via WebSocket matching, alongside calendar-based appointment booking with automated reminder and no-show workers.
* **Dual Mobile Applications:** Dedicated cross-platform client and counselor ("TheraTalk Buddy") apps with incoming call overlays, status toggles, and notification routing.
* **Administrative & Counselor Web Portals:** Next.js portals enabling counselor management, session tracking, financial rollups, moderation, and dispute resolution.
* **Session Intelligence & Recording:** Secure cloud recording storage with asynchronous OpenAI-driven transcription and clinical session summaries.
* **Flexible Billing & Monetization:** Wallet top-ups and minute packages managed through Razorpay and Apple In-App Purchases (IAP), with gift card redemption support.
* **Compliance & Trust:** OTP mobile authentication, granular user consent tracking, content moderation, and configurable data retention lifecycles.

## Technology Stack

### Frontend
* **Mobile (User & Counselor Apps):** React Native (0.86), React 19, React Navigation, Notifee, Agora RTC & Agora Chat React Native SDKs, Axios, Socket.IO Client.
* **Web Portals & Marketing:** Next.js (16), React 19, Tailwind CSS (v4), Recharts, GSAP, Lucide Icons, Agora RTC NG & Agora Chat Web SDKs.

### Backend
* **Runtime & Framework:** Node.js (>=22), Express.js (v4), TypeScript (v5).
* **Real-Time Communication:** Socket.IO (v4) with Redis adapter for distributed socket state.
* **Background Tasks & Scheduling:** BullMQ (v5) worker queues and node-cron for scheduled jobs and session intelligence pipelines.
* **Security & Observability:** Helmet, XSS Clean, Winston logger, Zod schema validation, Swagger UI.

### Database & Caching
* **Primary Database:** MongoDB via Mongoose (v8).
* **In-Memory Cache & Message Broker:** Redis via ioredis (v5) for rate limiting, distributed lock state, BullMQ job queues, and WebSocket cluster synchronization.

## Third-Party Services, APIs, and Integrations
* **Agora:** Real-time communications (RTC audio/video calls), Agora Chat (in-session messaging), and Agora Cloud Recording.
* **Cloudflare R2 / AWS S3:** Object storage for session recording files (HLS) and media assets.
* **Razorpay:** Payment gateway processing for user wallet top-ups, minute packages, and webhook verifications.
* **Apple StoreKit (App Store Server Library):** In-app purchase verification for iOS mobile users.
* **OpenAI:** Asynchronous speech-to-text transcription and automated consultation session summaries.
* **Twilio Verify:** Mobile phone number OTP generation and verification.
* **Google Firebase (FCM) & Apple APNs:** Cross-platform push notifications for incoming call rings, session requests, and reminders.
* **Zoho Desk:** Two-way customer support ticketing integration and webhook synchronization.
* **Cloudinary:** Screenshot and user feedback image hosting.

