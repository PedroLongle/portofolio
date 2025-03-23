# Pedro Longle's Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my work as a software engineer.

![Portfolio Screenshot](/public/projects/portofolio-thumb.svg)

## 🚀 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Internationalization**: Support for multiple languages (English, Portuguese, Spanish)
- **Dark/Light Mode**: Toggle between color schemes
- **Modern UI**: Clean, professional interface with subtle animations
- **Performance Optimized**: High Lighthouse scores (98+ in all categories)
- **Accessibility Focused**: WCAG compliant with semantic HTML
- **Interactive Elements**: Custom cursor effects, animated components
- **Contact Form**: Fully functional form with validation
- **Project Showcase**: Detailed case studies of past work

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Yup](https://github.com/jquense/yup)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: Custom i18n implementation
- **Deployment**: Vercel/Firebase

## 📦 Project Structure

```
portfolio/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   ├── forms/         # Form components and validation
│   ├── i18n/          # Internationalization setup
│   │   ├── client.ts  # Client-side translations
│   │   ├── config.ts  # i18n configuration
│   │   ├── messages/  # Translation files
│   │   └── server.ts  # Server-side translations
│   ├── lib/           # Utility functions
│   └── styles/        # Global styles
└── package.json       # Dependencies and scripts
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

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
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment

The site is set up for easy deployment on Vercel or Firebase Hosting:

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📱 Performance

- **Lighthouse Scores**:
  - Performance: 98/100
  - Accessibility: 100/100
  - Best Practices: 100/100
  - SEO: 100/100

- **Key Metrics**:
  - First Contentful Paint: 0.8s
  - Largest Contentful Paint: 1.2s
  - Cumulative Layout Shift: 0.01
  - Total Blocking Time: 0ms

## 🌍 i18n Support

The site currently supports:

- 🇬🇧 English (default)
- 🇵🇹 Portuguese
- 🇪🇸 Spanish

Adding a new language is simple - just add a new translation file in `src/i18n/messages/`.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- Email: pedro.longle.dev@gmail.com
- LinkedIn: [Pedro Longle](https://www.linkedin.com/in/pedrolongle/)
- GitHub: [PedroLongle](https://github.com/PedroLongle)

---

Designed and built with ❤️ by Pedro Longle
