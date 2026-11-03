# Learnese - Project Overview

## What the Application Does
Learnese is an AI-powered Japanese language learning platform designed to guide learners from foundational basics to advanced proficiency through structured JLPT-aligned curricula (N5–N1) and Business Japanese. The platform comprises a cross-platform mobile application, an administrative web dashboard, a real-time Node.js backend, and a dedicated live-streaming media service. It combines an interactive AI tutor persona ("Tanaka-sensei"), live interactive classrooms, community study groups, and gamified daily progress tracking.

## What Problem It Solves
Learning Japanese is notoriously challenging for non-native speakers due to complex multi-script writing systems (Hiragana, Katakana, and Kanji), nuanced grammar patterns, and strict politeness levels (Keigo). Conventional learning tools often lack interactive conversational practice, real-time pronunciation guidance, and localized instruction tailored to native languages. Learnese addresses this by providing a unified mobile ecosystem featuring structured lesson tracks, dynamic multilingual support, real-time Text-to-Speech (TTS) exercises, AI-guided conversational practice, and live virtual classes.

## Main Features
- **Structured JLPT & Business Curricula**: Step-by-step modular courses spanning JLPT N5 through N1, alongside specialized Business Japanese modules.
- **AI Tutor ("Tanaka-sensei")**: Conversational AI assistant powered by OpenAI delivering dynamic feedback, dialogue practice, and context-aware motivation.
- **Multi-Skill Practice Engine**: Interactive quizzes, reading, writing, and listening drills integrated with Text-to-Speech (TTS) audio playback.
- **Live Virtual Classes**: Real-time video/audio streaming and peer-to-peer classroom sessions powered by WebRTC and MediaMTX (RTMP-to-HLS).
- **Gamification & Motivation**: Daily streaks, daily goals, animated tutor reactions, and comprehensive progress dashboards.
- **Dynamic Multilingual Localization**: In-app UI translation supporting multiple languages including English, Hindi, Punjabi, and Gujarati.
- **Community & Social Learning**: Collaborative study groups, forums, and real-time chat channels.
- **Administrative Portal**: Web dashboard for course creation, student enrollment management, live session scheduling, and subscription/coupon administration.

## Technology Stack

### Mobile Application
- **Framework**: React Native (Expo SDK 52, Expo Router)
- **Styling**: NativeWind (Tailwind CSS), React Native Reanimated
- **State & Networking**: TanStack React Query, Axios, AsyncStorage
- **Media & Real-Time**: React Native WebRTC, Expo AV, Expo Speech, Socket.io Client

### Admin Web Application
- **Framework**: React 18, TypeScript, Vite
- **UI & Components**: Material UI (MUI), Tailwind CSS, Framer Motion, Lucide React
- **Data Visualization**: Recharts

### Backend Server
- **Runtime & Framework**: Node.js, Express.js
- **Real-Time Communication**: Socket.io (WebSockets)
- **Security & Validation**: JWT (JSON Web Tokens), bcryptjs, Helmet, Express Rate Limit, Joi

### Media & Streaming Service
- **Streaming Server**: MediaMTX (Dockerized RTMP to HLS conversion)
- **Transcoding & Media Utilities**: FFmpeg (`fluent-ffmpeg`)

### Database & Caching
- **Primary Database**: MongoDB (via Mongoose ODM)
- **Caching & Pub/Sub**: Redis (`ioredis`, `redis`)

## Third-Party Services, APIs, and Integrations
- **OpenAI API**: Powers the conversational AI tutor persona and personalized feedback generation.
- **Stripe**: Processes subscription billing, one-time payments, and coupon workflows across mobile and web.
- **Twilio**: SMS and mobile user verification services.
- **Nodemailer**: Transactional email dispatch for onboarding and account security.
- **Firebase**: App analytics and tracking (`@react-native-firebase/analytics`).
- **Sentry**: Real-time error tracking and crash reporting (`@sentry/react-native`).
- **Bing Translate API / i18next**: Machine translation support and client-side multi-language localization.
- **MediaMTX / WebRTC**: Video streaming ingestion and distribution for live online classes.

