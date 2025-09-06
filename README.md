<div>
 <br />
  <div align="center">
     <img src="public/images/Final.png" style="border-radius:10px;" alt="Splyt Banner">
  </div>
 <br />
 <br />

 <div align="center">
   <img src="https://img.shields.io/badge/-React_19-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
   <img src="https://img.shields.io/badge/-Tailwind_CSS_v4-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
   <img src="https://img.shields.io/badge/-GSAP_3-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="gsap" />
   <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
 </div>

 <h3 align="center" style="font-weight:700;font-size:30px;">Splyt — GSAP‑powered Single‑Page Experience</h3>

  <div align="center">
    I built <b>Splyt</b> as a modern, single‑page front‑end using <b>React</b>, <b>Tailwind CSS</b>, and <b>GSAP</b> for smooth, scroll‑based transitions and timeline animations.  
    The goal is to deliver a fast, immersive UI with <b>Vite</b> as the build tool.
   </div>
</div>

---

## 📋 Table of Contents

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. ✨ [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🧩 [Usage Notes](#usage-notes)
6. 🖼️ [Preview](#preview)
7. 🗂️ [Project Structure](#project-structure)
8. 📝 [License](#license)

---

## 🚀 Introduction

**Splyt** showcases how to create crisp **scroll transitions**, **pinned sections**, and **micro‑interactions** with **GSAP** in a **React** single‑page app.  
Styling is handled with **Tailwind CSS**, and the development workflow is powered by **Vite** for instant HMR and fast builds.

---

## ⚙️ Tech Stack

- ⚛️ **React 19**
- 🎨 **Tailwind CSS v4**
- 🌀 **GSAP 3** (timelines, scroll‑based animations)
- ⚡ **Vite** (dev server & build)

---

## ✨ Features

- Smooth **scroll‑driven transitions** (e.g., fades, transforms, parallax)
- **Timeline‑based** choreography for complex sequences
- **Pinned** / staged sections triggered on scroll
- Responsive, utility‑first styling with **Tailwind CSS**
- **Single‑Page** front‑end (no backend)

---

## 🤸 Quick Start

```bash
# 1) Clone
git clone https://github.com/your-username/Splyt.git
cd Splyt

# 2) Install
npm install
# or
yarn
# or
pnpm i

# 3) Dev server
npm run dev
# (Vite will print the local URL, typically http://localhost:5173)

# 4) Production build (optional)
npm run build
npm run preview
```

---

## 🧩 Usage Notes

- **GSAP setup**
  ```bash
  npm i gsap
  ```
  In your React component:
  ```jsx
  import { useLayoutEffect, useRef } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  export default function Hero() {
    const root = useRef(null);

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(".hero-title", { y: 60, opacity: 0, duration: 0.8, ease: "power2.out" });

        gsap.to(".pin-section", {
          scrollTrigger: {
            trigger: ".pin-section",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 0.6,
          },
          opacity: 1,
        });
      }, root);

      return () => ctx.revert();
    }, []);

    return (
      <section ref={root} className="min-h-dvh flex-center">
        <h1 className="hero-title text-5xl md:text-7xl font-bold">Splyt</h1>
        <div className="pin-section h-[200vh]" />
      </section>
    );
  }
  ```

- **Tailwind CSS v4**
  - Ensure your CSS includes Tailwind:
    ```css
    /* src/index.css */
    @import "tailwindcss";
    ```
  - Use utility classes directly in JSX. (If you’re using custom themes, add them via the `@theme` block in v4.)

---

## 🖼️ Preview

![Splyt Preview](public/images/Final.png "Splyt — GSAP-powered single-page experience")

---

## 🗂️ Project Structure

```bash
Splyt/
├─ public/
│  └─ images/
│     └─ Final.png
├─ src/
│  ├─ components/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## 📝 License

This project is released under the MIT License. Feel free to fork and adapt.
