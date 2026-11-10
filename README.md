# 🚀 Danilo Isaac | Full-Stack Web Developer Portfolio

![Portfolio Banner](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18+-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)
![i18next](https://img.shields.io/badge/i18next-Multilingual-orange)
![License](https://img.shields.io/badge/License-MIT-green)

Welcome to the official repository of my personal professional portfolio. Built from the ground up to showcase my journey, technical expertise, and scalable full-stack web applications tailored for the modern tech market (US Nearshoring & Latin America).

🌐 **Live Demo:** [View Portfolio Live](https://danilsmit.github.io/MyPorfolio/)

---

## ✨ Key Features

* **Bilingual Support (i18n):** Fully integrated multi-language system (`English` / `Español`) powered by `react-i18next` and automatic browser language detection.
* **Modern UI & Glassmorphism:** Custom-designed components with responsive layouts, smooth hover animations, and a sleek language-switcher dropdown featuring country flags (🇪🇨/🇺🇸).
* **Dynamic Project Rendering:** Projects are decoupled from components and mapped dynamically using JSON data architecture, ensuring clean maintenance and easy scalability.
* **Optimized Performance:** Bundled with **Vite** for lightning-fast HMR (Hot Module Replacement) and optimized production builds.

---

## 🛠️ Tech Stack

* **Frontend Library:** React (Functional Components, Hooks)
* **Bundler & Tooling:** Vite
* **Internationalization:** `i18next`, `react-i18next`, `i18next-browser-languagedetector`
* **Styling:** CSS3, BEM Methodology, Flexbox/Grid, Glassmorphism UI
* **Deployment:** GitHub Pages

---

## 📁 Project Structure

Here is the modular and clean architecture of the project:

```text
mi-portafolio-react/
 ├── dataBase/             # Localization JSON dictionaries (en.json, es.json)
 │    ├── en.json
 │    └── es.json
 ├── public/               # Static assets & project thumbnails
 │    └── imagenes/
 ├── src/                  # Application source code
 │    ├── blocks/          # Reusable UI structural blocks
 │    ├── components/      # Independent React components (Header, About, Projects, Footer)
 │    │    └── language.css# Scoped styling for the language dropdown
 │    ├── App.jsx          # Main application orchestrator
 │    ├── language.js      # i18next configuration and browser detector setup
 │    ├── main.jsx         # React DOM entry point
 │    └── index.css        # Global styles and CSS imports
 ├── .gitignore
 ├── package.json
 └── vite.config.js
```

---

## 🚀 Getting Started Locally

To run this project on your local machine for development or testing:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DanilsMIT/MyPorfolio.git
   cd MyPorfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

* **Email:** daniloisaacdm@gmail.com
* **WhatsApp:** [+593 994179193](https://wa.me/593994179193)
* **LinkedIn:** [Danilo Isaac Melgar](https://linkedin.com/in/daniloisaacmelgar)
* **GitHub:** [@DanilsMIT](https://github.com/DanilsMIT)

---
*Developed with passion, precision, and clean architecture by Danilo Isaac.*