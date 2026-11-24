# JCT Education Center (مركز جي سي تي للتعليم)

Official frontend web application for **JCT Education Center**, a premier language education institution based in Amman, Jordan.

The platform provides complete multilingual information and course discovery across three flagship language programs:
1. **Chinese (Mandarin)** — HSK 1–6, Comprehensive foundations, and Business Chinese
2. **English Language** — General fluency, Workplace/Executive English, and IELTS Preparation
3. **Arabic for Non-Native Speakers** — Modern Standard Arabic (MSA), Levantine/Jordanian colloquial dialect, and specialized cohorts for diplomats and NGOs.

---

## 🛠 Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Internationalization (i18n)**: `i18next` & `react-i18next` with complete English & Arabic locale files
- **Directionality / RTL**: Native bidirectional support (`dir="ltr"` and `dir="rtl"`) with dynamic typography (`Cairo` for Arabic, `Inter` for English)
- **Icons**: Lucide React
- **Hosting / Deployment**: Cloudflare Pages (100% Free, static SPA with `public/_redirects`)

---

## 🎨 Brand Design System

Built on JCT Education Center's brand palette:
- **Primary Brand**: Deep Teal Green (`#0B4D49`, `#073330`, `#146B65`)
- **Accent 1**: Flame Red (`#DC2626`, `#B91C1C`)
- **Accent 2**: Golden Yellow (`#F59E0B`, `#D97706`)
- **Surface**: Warm Sand & Pure White (`#FAF9F6`, `#FFFFFF`)

---

## 📁 Project Directory Structure

```text
JCT/
├── public/
│   ├── _redirects                         # Cloudflare Pages SPA rewrite rule
│   └── images/
│       ├── branding/                      # Logos (color, dark-mode/white, favicon)
│       │   ├── jct-logo.svg
│       │   ├── jct-logo-white.svg
│       │   └── jct-favicon.svg
│       ├── home/                          # Hero & institutional home graphics
│       │   ├── hero-banner.svg
│       │   ├── why-choose-us.svg
│       │   └── global-reach.svg
│       ├── about/                         # Campus & mission illustrations
│       │   ├── institution-building.svg
│       │   ├── mission-vision.svg
│       │   └── cultural-exchange.svg
│       ├── courses/
│       │   ├── chinese/                   # Mandarin & HSK visual graphics
│       │   │   ├── chinese-general.svg
│       │   │   ├── chinese-business.svg
│       │   │   └── chinese-hsk.svg
│       │   ├── english/                   # English & IELTS visual graphics
│       │   │   ├── english-general.svg
│       │   │   ├── english-business.svg
│       │   │   └── english-ielts.svg
│       │   └── arabic/                    # MSA & Levantine visual graphics
│       │       ├── arabic-msa.svg
│       │       ├── arabic-colloquial.svg
│       │       └── arabic-diplomats.svg
│       ├── approach/                      # Methodology & pedagogy graphics
│       │   ├── communicative-method.svg
│       │   ├── small-groups.svg
│       │   ├── cultural-immersion.svg
│       │   └── continuous-assessment.svg
│       └── contact/                       # Amman map & support graphics
│           ├── location-amman.svg
│           └── contact-support.svg
├── src/
│   ├── components/
│   │   ├── common/                        # Reusable UI primitives
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── home/                          # Homepage section components
│   │   │   ├── CallToActionSection.tsx
│   │   │   ├── CulturalBridgeSection.tsx
│   │   │   ├── FeaturedCourses.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   └── layout/                        # Shared layout wrappers
│   │       ├── Footer.tsx
│   │       ├── MainLayout.tsx
│   │       └── Navbar.tsx
│   ├── features/
│   │   ├── contact/                       # Contact & inquiry feature modules
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactInfo.tsx
│   │   └── courses/                       # Courses catalog feature modules
│   │       ├── CourseCard.tsx
│   │       ├── CourseFilter.tsx
│   │       ├── coursesData.ts
│   │       └── types.ts
│   ├── hooks/
│   │   └── useLanguage.ts                 # Language & RTL synchronization hook
│   ├── i18n/
│   │   ├── i18n.ts                        # i18next configuration
│   │   └── locales/
│   │       ├── ar.json                    # Arabic translations
│   │       └── en.json                    # English translations
│   ├── lib/
│   │   └── utils.ts                       # Class merging helper (clsx + tailwind-merge)
│   ├── pages/                             # 5 Primary route pages
│   │   ├── AboutPage.tsx
│   │   ├── ApproachPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── CoursesPage.tsx
│   │   └── HomePage.tsx
│   ├── styles/
│   │   └── index.css                      # Global styles, fonts, and scrollbars
│   ├── App.tsx                            # React Router DOM configuration
│   └── main.tsx                           # App entry point
├── index.html                             # HTML template with Cairo & Inter webfonts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript checking (`tsc`) followed by Vite's production bundler, producing optimized static assets in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## ☁️ Free Deployment to Cloudflare Pages

This project is 100% static and zero-maintenance, designed to deploy directly on **Cloudflare Pages** at no cost:

1. Push this repository to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

The included `public/_redirects` file automatically instructs Cloudflare Pages to route all deep links (e.g., `/courses`, `/about`, `/contact`) to `index.html` with HTTP 200, enabling seamless client-side routing on hard refreshes.
