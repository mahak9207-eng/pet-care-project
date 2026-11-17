# PetCare360 - Comprehensive Pet Health & Vet Clinic Platform

A modern, responsive, frontend-only React.js web application built with **React Router**, **reusable components**, **mock JSON datasets**, and **localStorage persistence**. Features interactive veterinary booking, clinical health records, pet care routines, and rule-based AI behavioral insights.

---

## 🚀 Key Features & Development Tasks

### 1. Home & Discovery Interface (`/`)
- **Hero & Status Summary:** Overview of registered household pets, partner clinics, due care reminders, and confirmed upcoming appointments.
- **Species Care Categories:** Interactive guide cards for Canines (Dogs), Felines (Cats), Avians (Birds), Small Mammals (Rabbits), and Reptiles/Aquatics detailing lifespans, key biological needs, and daily routines.
- **Care Resources Library:** Filterable clinical articles across Preventive Health, Emergency & Safety, Dental Care, and Routine Fitness with in-depth reading modals.
- **Clinic Highlights & Services:** Service cards covering 24/7 Emergency Care, Dental Suites, Soft-Tissue Surgery, In-House Diagnostics, Routine Vaccines, and Therapeutic Grooming with estimated consultation fees.

### 2. Directory & Filtering Interface (`/pets`)
- **Pet Identity Cards:** Multi-species profile cards with breed, age, gender, weight, microchip ID, primary vet, known food/contact allergies, and behavioral preferences.
- **Active Care Routines:** Dedicated routines for diet/feeding, physical exercise, medication/parasite control, and grooming cycles.
- **Vaccination History Mockups:** Electronic immunization ledger displaying vaccine name, administration date, next due date, batch number, and status badges (`Up to Date`, `Due Soon`, `Overdue`).
- **Clinical Health Records:** Chronological exam logs detailing physical findings, recorded vitals (weight, temperature, heart rate, respiration), prescriptions, and follow-up directives.

### 3. Details & Management Interface (`/clinics`)
- **Veterinary Directory:** Browse certified veterinary hospitals and emergency centers.
- **Specialty & Location Filters:** Filter clinics by medical specialties (General Practice, Surgery, Dermatology, Dentistry, Emergency, Cardiology, Exotic Pets) and geographic areas (Downtown Metro, Westside Heights, North Suburbs, Oakwood Park).
- **Clinic Profiles:** Certified badges, review scores, operating hours, consultation fees, lead clinicians, and listed facility amenities.
- **Available Appointment Slots:** Clickable consultation time slots that directly trigger the booking modal prefilled with that facility and attending doctor.

### 4. Workflow & Tracking Interface (`/appointments`)
- **Appointment Scheduler:** Schedule visits by selecting companion pet, veterinary facility, service type, date, time slot, and reason/symptoms.
- **Upcoming & Past Visits:** View confirmed booking reference codes (`PET-2026-XXXX`), attendee clinician, and instant cancellation options.
- **Prioritized Care Reminders:** Track and toggle completion of routine care tasks (vaccine boosters, medication chews, fountain filter replacement, grooming).
- **Pet-Care Diary:** Historical consultation logs and diagnostic summaries.

### 5. AI — Behavior & Data Insights (`/ai-insights`)
- **AI Routine Optimizer:** Generates tailored, non-diagnostic daily wellness routines and advice based on pet age (Puppy/Kitten, Adult, Senior), species biological requirements, allergies, and logged tasks.
- **5 Core AI Data Displays:**
  1. **Popular Veterinary Services:** Percentage distribution, consultation volume, and seasonal trend shifts across primary care services.
  2. **Preferred Clinics:** Facility rankings by client satisfaction index, market share, and average turnaround time.
  3. **Appointment Patterns:** Day-of-week morning vs. afternoon booking volume distributions and peak hours.
  4. **Upcoming Routine Care Reminders:** Algorithmic urgency-ranked timeline with severity badges and due dates.
  5. **Pet Care Activity Summaries:** Key metrics including Household Wellness Index, 96% Medication Adherence Rate, Weekly Canine Activity Miles, and Monthly Logged Care Tasks.

---

## 🛠️ Functional Requirements Walkthrough

1. **Create a Pet Profile:** Click **"Add Pet"** in the top navigation or **"Create Pet Profile"** on the Pet Profiles page. Fill in the modal form with name, species, breed, age, weight, routines, and allergies. The new pet is added to state and saved to `localStorage`.
2. **Find and Filter Veterinarians:** Navigate to **"Vet Clinics"** (`/clinics`). Use the live search bar, specialty dropdown, and city dropdown to filter clinics.
3. **Add a Sample Health Record:** On the Pet Profiles page (`/pets`), click **"Add Health Record"** to log vitals, examination notes, and prescriptions for any pet.
4. **Book a Demonstration Appointment:** Click **"Book Visit"** from the navigation bar, from any clinic's available time slot, or from the Appointments page. A booking reference number is generated and automatically adds a corresponding reminder to your calendar.
5. **View Pet Care Reminders & Insights:** Access **"Appointments & Reminders"** (`/appointments`) to check off active care tasks, or **"AI Pet Insights"** (`/ai-insights`) to explore the 5 data displays and personalized AI care routines.

---

## 💻 Tech Stack
- **React.js 18**
- **React Router DOM 6**
- **Lucide React** (Icons)
- **Vite 5** (Build Tool)
- **HTML5 & Modern CSS3** with design tokens and responsive CSS Grid/Flexbox
- **Web Storage API** (`localStorage`)

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.
