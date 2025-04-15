# Pedro Longle Portfolio

<div align="center">
  <img src="/public/projects/portofolio/mockup.svg" alt="Portfolio Mockup" width="85%" />
</div>

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS, showcasing my professional work, projects, and skills as a software engineer.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## 📌 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Internationalization](#-internationalization)
- [Support and Contributions](#-support-and-contributions)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Internationalization** - Multi-language support with English, Portuguese, and Spanish
- **Theme Switching** - Toggle between dark and light mode
- **Modern UI/UX** - Clean, professional interface with subtle animations and transitions
- **Performance Optimized** - High Lighthouse scores across all categories
- **Accessibility Focused** - WCAG compliant with semantic HTML
- **Interactive Elements** - Custom animations using Framer Motion
- **Contact Form** - Fully functional form with validation using React Hook Form and Yup
- **Project Showcase** - Detailed case studies of recent work
- **SEO Optimized** - Meta tags, structured data, and sitemap
- **Responsive Images** - Optimized image loading with Next.js Image component
- **Support Section** - Multiple ways to support the developer

## 🔍 Live Demo

Visit the live portfolio at: [pedrolongle.com](https://pedrolongle.com)

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)

### UI Components & Styling
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Powerful animation library
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark/light mode support
- **CSS Utilities**: [tailwind-merge](https://github.com/dcastil/tailwind-merge) & [clsx](https://github.com/lukeed/clsx)

### Form & Validation
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant form management
- **Validation**: [Yup](https://github.com/jquense/yup) - Schema validation

### Internationalization
- **i18n Support**: [next-intl](https://next-intl-docs.vercel.app/) - Multi-language support
- **Language Detection**: [accept-language](https://github.com/tinganho/accept-language) - Browser language detection

### Email & Communication
- **Email Service**: [Nodemailer](https://nodemailer.com/) - For contact form submissions

## 📦 Project Structure

```
portofolio/
├── public/                  # Static assets (images, icons, etc.)
│   ├── projects/            # Project screenshots and assets
│   ├── illustrations/       # SVG illustrations
│   ├── logos/               # Logo files
│   └── ...
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── projects/        # Projects showcase
│   │   ├── support/         # Support options
│   │   ├── page.tsx         # Home page
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Reusable UI components
│   │   ├── shadcn/          # shadcn/ui components
│   │   ├── ui/              # Custom UI components
│   │   └── ...
│   ├── forms/               # Form components and validation
│   ├── hooks/               # Custom React hooks
│   ├── i18n/                # Internationalization
│   │   ├── client.ts        # Client-side translations
│   │   ├── config.ts        # i18n configuration
│   │   ├── messages/        # Translation files
│   │   └── server.ts        # Server-side translations
│   └── _email/              # Email templates
├── .env                     # Environment variables
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/PedroLongle/portofolio.git
   cd portofolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## 🌐 Deployment

The site is configured for easy deployment on Vercel, Firebase, or similar platforms:

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Deployment Options

- **Vercel**: Recommended for Next.js applications
  ```bash
  npm install -g vercel
  vercel
  ```

- **Firebase Hosting**: Alternative deployment option
  ```bash
  npm install -g firebase-tools
  firebase login
  firebase init
  firebase deploy
  ```

## 📱 Performance

### Lighthouse Scores

- **Performance**: 98/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

### Key Web Vitals

- **First Contentful Paint (FCP)**: 0.8s
- **Largest Contentful Paint (LCP)**: 1.2s
- **Cumulative Layout Shift (CLS)**: 0.01
- **Total Blocking Time (TBT)**: 0ms
- **Time to Interactive (TTI)**: 1.3s

### Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF format support
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Self-hosted fonts with font-display: swap
- **Lazy Loading**: Components and images loaded as needed
- **Server Components**: Leveraging React Server Components for improved load times

## 🌍 Internationalization

The site currently supports:

- 🇬🇧 English (default)
- 🇵🇹 Portuguese
- 🇪🇸 Spanish

Adding a new language is simple:

1. Create a new translation file in `src/i18n/messages/`
2. Add the language code to the supported locales in `src/i18n/config.ts`
3. Update language selector in the navigation component

## 💝 Support and Contributions

If you find this project helpful or would like to support its development:

- **Hire Me**: For web development projects or consultations
- **Buy Me a Coffee**: Support ongoing development and maintenance
- **Star the Repo**: Show your appreciation with a GitHub star
- **Share**: Recommend to others who might find it useful

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: pedro.longle.dev@gmail.com
- **LinkedIn**: [Pedro Longle](https://www.linkedin.com/in/pedrolongle/)
- **GitHub**: [PedroLongle](https://github.com/PedroLongle)
- **Portfolio**: [pedrolongle.com](https://pedrolongle.com)

---

<div align="center">
  <p>Designed and built with ❤️ by Pedro Longle</p>
</div>
