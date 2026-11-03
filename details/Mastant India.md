# Project Overview: TanaBana (Mastant India)

## What the Application Does
TanaBana (Mastant India) is an on-demand tailoring and artisan services platform connecting customers with verified tailoring professionals. It supports both itemized custom tailoring services and hourly/shift-based artisan bookings, coordinating real-time dispatch, job lifecycle tracking, and digital payments. The ecosystem consists of a Customer Mobile App, a Partner (Artisan) Mobile App, an Admin Web Portal, and a centralized real-time REST/WebSocket Backend.

## Problem It Solves
The custom tailoring and alterations market is traditionally fragmented and offline, leaving customers with unreliable turnaround times, lack of transparent pricing, and difficulty finding skilled artisans. Tailors and artisans simultaneously lack predictable job matching, digital scheduling tools, and guaranteed payment settlement. TanaBana solves this by modernizing artisan dispatch, providing end-to-end operational visibility, and streamlining payment flows for all stakeholders.

## Main Features
- **Customer Mobile Application**:
  - Service selection for individual garment tailoring, alterations, and hourly artisan shifts.
  - Interactive address selection and Google Maps place autocomplete.
  - Live order tracking with real-time status updates and partner location tracking.
  - In-app chat, OTP/PIN-based arrival confirmation, and customer reviews/ratings.
  - Secure digital payments via Razorpay and automated digital invoices.

- **Partner (Artisan) Mobile Application**:
  - Real-time job/shift dispatch offers with quick accept/reject controls.
  - In-app geolocation sharing and route navigation to customer locations.
  - Digital job execution milestones (arrival PIN verification, completion photo uploads).
  - Earnings dashboard, shift management, and multi-language support (i18n).

- **Admin Web Dashboard**:
  - Live operational map monitoring active partner locations and in-progress jobs.
  - Partner onboarding, KYC document verification, and activation workflows.
  - Service catalog, category pricing, and platform configuration management.
  - Automated shift assignment oversight, manual interventions, and payment audit tracking.

- **Backend Platform & Services**:
  - Real-time event pub/sub via Socket.IO with MongoDB adapter support for distributed scaling.
  - Automated background schedulers for offer redispatch loops, job expiration, and reminders.
  - Automated PDF receipt generation and webhook-driven payment state synchronization.

## Technology Stack
- **Frontend (Web - Admin)**: Next.js 16 (React 19, TypeScript), Tailwind CSS v4, Framer Motion, Lucide React.
- **Frontend (Mobile - Customer & Partner)**: React Native 0.84 (React 19, TypeScript), React Navigation (Native Stack & Bottom Tabs), React Native Reanimated.
- **Backend API**: Node.js, Express.js, Socket.IO, Joi (validation), JWT & bcrypt (auth).
- **Database**: MongoDB (via Mongoose ODM) with MongoDB Atlas.

## Third-Party Services, APIs, and Integrations
- **Payment Processing**: Razorpay (React Native SDK, backend order creation, signature verification, and webhooks).
- **Authentication & SMS**: Twilio (OTP verification via Twilio Verify API and SMS dispatch).
- **Push Notifications**: Firebase Cloud Messaging (FCM via Firebase Admin SDK and `@react-native-firebase`).
- **Maps & Geolocation**: Google Maps Platform (`@react-google-maps/api`, `react-native-maps`, Places Autocomplete, and Geolocation APIs).
- **Media Storage**: Cloudinary (cloud storage for profile images, service thumbnails, and KYC documentation).
- **Document Generation**: PDFKit (server-side generation of customer booking receipts and invoices).
- **Hosting & Infrastructure**: Vercel (Backend API and Admin Dashboard) and MongoDB Atlas (cloud database).

