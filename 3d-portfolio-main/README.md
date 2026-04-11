# 🌟 Umair Ghaffar - 3D Interactive Portfolio

**Professional Python Developer | AI Automation Specialist | Digital Marketer**

Welcome to the source code of my personal 3D interactive portfolio. This repository showcases a premium, high-performance web experience built with React and Three.js, reflecting my focus on cutting-edge aesthetics (like Glassmorphism) and seamless user experiences with zero-lag loading.

🌐 **Live Experience:** [umair-ghaffar-portfolio.vercel.app](https://umair-ghaffar-portfolio.vercel.app/)

![Portfolio Preview](public/images/preview1.png)

---

## 🚀 About Me

I am a tech enthusiast and developer based in Lahore, Pakistan, specializing in building AI-driven automation systems and scalable backend architectures. Whether it's integrating LLMs into web apps or driving digital growth, I focus on delivering high-end, functional solutions.

**🏆 Key Highlights & Achievements:**
- **Global Top 20% Finalist:** International Research Olympiad (IRO) & current Student Ambassador.
- **Creator of LensForge:** Developed and deployed a cinematic AI prompt generator utilizing the Groq API, Flask backend, and React.
- **Certified Professional:** Holds certifications in AI Automation and Digital Marketing from JDC Free IT City.
- **Content & Growth:** Managing automated visual storytelling channels across YouTube and TikTok.

## ⚙️ Tech Stack & Expertise

### My Primary Arsenal
- **AI & Backend:** Python, Flask, Groq API, Ollama, Google AI Studio
- **Growth & Automation:** Digital Marketing, SEO, Social Media Automation, Crypto Technical Analysis
- **Design:** High-end UI/UX, Glassmorphism, Tailwind CSS

### Portfolio Repository Stack (Frontend & 3D)
- **Core:** React 18, TypeScript, Vite
- **3D Rendering:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** GSAP + @gsap/react (for scroll-driven storytelling)

---

## 📂 Project Structure

```text
.
├── public/                    # Static assets
├── src/
│   ├── assets/                # Local media/assets
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic
│   │   ├── styles/            # Section CSS files
│   │   ├── MainContainer.tsx  # Main page composition
│   │   └── ... (About, Career, Contact, Landing, Work)
│   ├── context/               # Global providers
│   ├── data/                  # Static content definitions
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or compatible)

### Installation

1. Clone the repository:
   git clone https://github.com/umairghaffar759/umair-ghaffar-portfolio.git
   cd umair-ghaffar-portfolio

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open the URL shown in the terminal (typically http://localhost:5173).

## Available Scripts

- npm run dev
  Starts Vite dev server and exposes host for local network testing.

- npm run build
  Type-checks and builds a production-ready bundle.

- npm run preview
  Serves the production build locally for verification.

- npm run lint
  Runs ESLint checks across the project.

## GSAP License Note

This project uses the standard gsap package, including bonus plugins now available in the core package.

- Install dependencies with npm install.
- If migrating from older setups, remove gsap-trial from your project.

Read official installation guidance here: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## Customization Guide

You can adapt this portfolio to your own profile by updating the following areas:

- Content sections: Edit files in src/components/ such as About.tsx, Career.tsx, WhatIDo.tsx, and Work.tsx.
- Data source: Update static values in files under src/data/.
- Styling: Modify component styles in src/components/styles/ and global styles in src/index.css / src/App.css.
- 3D scene behavior: Adjust scene logic in src/components/Character/ and related utilities.
- Animations: Tweak GSAP utilities under src/components/utils/.

## Troubleshooting

- Blank screen in development: Check browser console for module import errors and verify all dependencies are installed.
- 3D performance issues on low-end devices: Reduce scene complexity and post-processing effects in the character/scene utilities.
- GSAP plugin errors: Ensure you have the correct plugin package and license configuration for your target environment.
- TypeScript build failures: Run npm run build and address reported type errors before deploying.

## 📜 Deployment & Scripts

npm run build - Builds a production-ready bundle.

npm run preview - Serves the production build locally.

Deploy the dist/ folder to platforms like Vercel or Netlify.

## 🤝 Let's Connect
Open to freelance projects, AI automation consulting, and digital marketing collaborations.

Email: umairghaffar759@gmail.com]

LinkedIn: https://www.linkedin.com/in/umairghaffar759/

GitHub:  https://github.com/umairghaffar759/

Base 3D portfolio template originally created by Akash Malhotra. Customized and optimized by Umair Ghaffar.

## License

This project is open source and available under the [MIT License](LICENSE).

