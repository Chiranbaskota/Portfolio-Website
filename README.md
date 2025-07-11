# 💼 Chiranjivi Baskota – Developer Portfolio

This is my personal portfolio website built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It showcases my skills, projects, and ways to connect with me professionally.

🔗 **Live Site:** [https://chiranbaskota.github.io/Portfolio-Website/](https://chiranbaskota.github.io/Portfolio-Website/)

---

## 🛠️ Tech Stack

- **React** – Frontend framework  
- **TypeScript** – Static typing for JS  
- **Vite** – Fast build tool and dev server  
- **Tailwind CSS** – Utility-first CSS framework  
- **Lucide React** – Icon library  
- **EmailJS (optional)** – Contact form email integration  
- **GitHub Pages** – Hosting and deployment  

---

## 📁 Project Structure

```
Portfolio-Website/
├── src/
│   ├── components/         # React UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles (Tailwind imports)
│   ├── main.tsx            # React entry point
│   ├── vite-env.d.ts       # Vite type declarations
├── .gitignore
├── README.md
├── eslint.config.js        # ESLint config
├── index.html              # HTML template
├── package-lock.json
├── package.json
├── postcss.config.js       # PostCSS config for Tailwind
├── tailwind.config.js      # Tailwind config
├── tsconfig.app.json
├── tsconfig.json           # TypeScript config
├── tsconfig.node.json
└── vite.config.ts          # Vite config (including base path for GitHub Pages)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above)  
- npm or yarn

### Installation

```bash
git clone https://github.com/Chiranbaskota/Portfolio-Website.git
cd Portfolio-Website
npm install
```

### Run Locally (Development)

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This site is deployed on **GitHub Pages** with the base path set in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/Portfolio-Website/',
  plugins: [react()],
})
```

To deploy:

1. Run the production build:

   ```bash
   npm run build
   ```

2. Push the contents of the `dist/` folder to the `gh-pages` branch, or configure GitHub Actions for automatic deployment.

---

## 🎯 Features

- 🌐 Responsive and mobile-friendly design
- 🧑‍💼 Hero section with typewriter animation for job titles
- 🧱 Project showcase with hover effects and icons
- 🛠️ Skills section highlighting core competencies
- 📧 Contact form integrated with EmailJS for email sending
- 🌙 Dark/light theme support via React context (`ThemeContext.tsx`)
- 🧩 Clean and modular React component structure
- 🔗 Icons powered by Lucide React

---

## 📬 Contact Me

Feel free to reach out!

- **Email:** baskotachiran48@gmail.com
- **GitHub:** [@Chiranbaskota](https://github.com/Chiranbaskota)
