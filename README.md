# Nandhini N — Portfolio Website

A modern, responsive personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
cd d:\PROJECT\Portfolio
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
public/
  images/profile.jpg          ← Your profile photo (Action Required: placing image here)
  images/*.png                ← Project screenshots (add here)
  assets/Nandhini_N_Resume.pdf ← Your resume PDF (place here)
src/
  data/portfolio.ts           ← ALL content lives here — edit this file
  components/                 ← All section components
  app/                        ← Next.js App Router (layout, page, css)
```

---

## 📸 Profile Photo
To add your profile photo:
1. Rename your photo to `profile.jpg`
2. Place it inside the `public/images/` directory.

---

## 📄 Resume
1. Name your file: `Nandhini_N_Resume.pdf`
2. Place it in: `public/assets/Nandhini_N_Resume.pdf`

The Download Resume button will work automatically.

---

## 🔗 Updating Links (GitHub / LinkedIn / Projects)

All links are in **`src/data/portfolio.ts`**:

```ts
// Personal links
export const personalInfo = {
  github: "https://github.com/nandhu0424",
  linkedin: "https://www.linkedin.com/in/nandhini-n-43532633b",
};

// Project links — replace "#" with real URLs
export const projects = [
  { githubUrl: "#", liveUrl: "#", ... },
];
```

---

## 🖼️ Project Screenshots

Place files in `public/images/` with these names:

| Project | Filename |
|---|---|
| AI Knowledge Assistant | `college-knowledge-assistant.png` |
| Lifeline360 | `lifeline360.png` |
| Drug Interaction | `drug-interaction.png` |
| Library Management | `library-management.png` |
| Reservation System | `reservation-system.png` |
| Contact Management | `contact-management.png` |

If an image is missing, the card shows a clean placeholder automatically.

---

## 📊 Updating Skills
In `src/data/portfolio.ts`, find the `skills` array and change `percentage` values (0–100).

---

## 🏅 Adding Certifications / Projects
Append to the `certifications` or `projects` arrays in `src/data/portfolio.ts`.

---

## 📬 Contact Form
The form uses a **mailto fallback** — it opens the user's email client with the message pre-filled. No backend or API keys required.

To upgrade to a real email service, install [EmailJS](https://www.emailjs.com) or use [Formspree](https://formspree.io) and update the `handleSubmit` function in `src/components/Contact.tsx`.

---

## 🌐 Deployment (Vercel)

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Next.js → Click **Deploy**

---

## 🏗️ Production Build

```bash
npm run build
npm start
```
