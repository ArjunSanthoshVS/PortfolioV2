# Hubomed - Clinic & Hospital Management Ecosystem

## Project Overview
Hubomed is an integrated, end-to-end clinic and hospital management ecosystem designed to streamline outpatient operations and improve the patient care journey. The platform connects key healthcare roles—Admins, Receptionists, Doctors, Lab Technicians, and Pharmacists—with patient-facing web and mobile applications in a unified system. It coordinates the complete clinical lifecycle from registration and real-time queue management to clinical consultation, structured diagnostic workflows, and digital prescription dispensing.

## Problem Solved
Traditional clinic management systems frequently operate in functional silos, relying on disconnected paper records, manual handovers, and static queues that create operational bottlenecks and patient anxiety. Hubomed bridges these gaps with an event-driven architecture that delivers real-time queue tracking, structured clinical handovers between departments, paperless prescription workflows, and direct, secure doctor-patient communication.

## Key Features
- **Role-Based Portals**: Dedicated operational workspaces tailored for Administrators, Receptionists (Front Desk), Doctors, Lab Technicians, Pharmacists, and Patients.
- **Real-Time Queue & Token Tracking**: Live patient queue monitoring with token status updates across clinic display boards and patient mobile devices.
- **Doctor Consultation Workspace**: Split-screen clinical console featuring vitals tracking, structured clinical notes (complaints, examinations, medical history, care plans), and integrated diagnosis recording.
- **Diagnostic & Lab Management**: Sample collection tracking (specimen status, collection time), structured parameter data entry (avoiding unsearchable raw PDFs), and critical result alerts for physicians.
- **Pharmacy & Inventory System**: Real-time drug inventory tracking, low-stock threshold notifications, and direct dispensing based on doctor prescriptions.
- **Cross-Platform Patient Experience**: Responsive web portal and mobile app supporting online appointment booking, digital prescription downloads, structured lab result access, and secure messaging.
- **Reception & Billing Ledger**: Guided patient registration wizard, provisional emergency check-ins, fee collections across multiple payment methods (Cash, Card, UPI, Insurance), and automated receipt generation.
- **Automated Prescription Sharing**: Multi-channel distribution of secure, time-limited prescription links via WhatsApp, SMS, or Email.

## Technology Stack

### Frontend (Web Portal)
- **Framework & Language**: React 18, TypeScript
- **Build Tool**: Vite
- **UI Components & Styling**: Material-UI (MUI v5), Emotion
- **Routing & State**: React Router v7, Formik & Yup (form handling and schema validation)
- **Data Visualization**: Recharts
- **Real-Time Client**: Socket.io Client

### Mobile Application
- **Framework & Platform**: React Native (0.81), React 19, Expo (~54) with Expo Router
- **Language**: TypeScript
- **Real-Time Client**: Socket.io Client

### Backend
- **Runtime & Framework**: Node.js, Express 4
- **Real-Time Engine**: Socket.io (WebSocket event handling)
- **Authentication & Security**: JSON Web Tokens (JWT), bcryptjs, Helmet, Express Rate Limit, CORS
- **Document & PDF Generation**: Puppeteer, PDFKit
- **File Handling**: Multer

### Database & Storage
- **Database**: MongoDB (via Mongoose 8)
- **File Storage**: Local file system upload storage with static asset serving

## Third-Party Services, APIs & Integrations
- **Database Hosting**: MongoDB Atlas
- **Payment Processing**: Stripe (`@stripe/stripe-js`)
- **Messaging & Notifications**: Webhook-based integration architecture for SMS, Email, and WhatsApp communication services
- **Hosting & Deployment**: Vercel (frontend / serverless endpoints) and Render (backend real-time WebSockets and services)

