# Sonia Rodrigues - Massoterapeuta | Professional Massage Therapy Website

A modern, responsive professional website for Sonia Rodrigues, a licensed and certified massage therapist specializing in therapeutic massage, myofascial release, lymphatic drainage, and body sculpting treatments. Built with cutting-edge web technologies to deliver an exceptional user experience with fast performance and beautiful aesthetics.

## 🎯 Project Overview

This is a full-featured professional services website designed to showcase massage therapy services, build client trust, and facilitate appointment bookings. The website presents the therapist's expertise, services offered, client testimonials, and provides multiple contact options for potential clients.

**Key Features:**
- **Professional Hero Section** - Impactful landing section with trust indicators (10+ years experience, 2,500+ clients served, 98% satisfaction rate)
- **Services Showcase** - Detailed descriptions of massage services including myofascial release, lymphatic drainage, and body sculpting
- **About Section** - Background and expertise of the therapist
- **Benefits Highlight** - Key benefits of massage therapy
- **Client Testimonials** - Social proof from satisfied clients
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI Components** - Built with shadcn/ui (Radix UI) for accessibility and consistency
- **Fast Performance** - Vite-powered with optimized build and HMR during development

## 🛠️ Technology Stack

### Core Framework
- **React 18.3** - Modern UI library with hooks and concurrent features
- **TypeScript 5.8** - Type-safe JavaScript for better code quality and developer experience
- **Vite 5.4** - Lightning-fast build tool with HMR (Hot Module Replacement)

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework for rapid UI development
- **PostCSS** - Tool for transforming CSS with plugins
- **shadcn/ui** - High-quality React component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives (25+ components)
- **Lucide React** - Beautiful, consistent icon library
- **class-variance-authority** - Type-safe CSS class management

### Forms & Validation
- **React Hook Form 7.61** - Performant, flexible form validation
- **Zod 3.25** - TypeScript-first schema validation with static type inference
- **@hookform/resolvers** - Bridge between Hook Form and validation libraries

### Routing & Navigation
- **React Router DOM 6.30** - Client-side routing with nested routes and layouts

### Data Management
- **TanStack React Query 5.83** - Powerful data fetching and caching library
- **Recharts 2.15** - Composable charting library built on React components

### UI Enhancements
- **Sonner 1.7** - Toast notification system
- **next-themes 0.3** - Theme management (light/dark mode support)
- **Embla Carousel React 8.6** - Carousel/slider component
- **react-resizable-panels** - Resizable layout panels
- **React Day Picker 8.10** - Date picker component
- **Input OTP 1.4** - OTP input component

### Utilities
- **date-fns 3.6** - Modern date utility library
- **clsx 2.1** - Utility for constructing CSS class strings
- **tailwind-merge 2.6** - Merge Tailwind CSS classes without conflicts
- **vaul 0.9** - Drawer component

### Development Tools
- **ESLint 9.32** - Code linting and style enforcement
- **TypeScript ESLint** - TypeScript support for ESLint
- **Vitest 3.2** - Unit and integration testing (Vite-native)
- **Playwright 1.57** - End-to-end testing framework
- **@testing-library/react** - React component testing utilities
- **@vitejs/plugin-react-swc** - React plugin using SWC for faster builds
- **Autoprefixer** - Parse CSS and add vendor prefixes

## 📁 Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # About the therapist
│   │   ├── BenefitsSection.tsx     # Massage benefits overview
│   │   ├── Footer.tsx              # Footer with contact info
│   │   ├── HeroSection.tsx         # Hero landing section
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── NavLink.tsx             # Navigation link component
│   │   ├── ServicesSection.tsx     # Services offered
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   └── ui/                     # shadcn/ui component library
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       └── ... (20+ more UI components)
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── pages/
│   │   ├── Index.tsx               # Main landing page
│   │   └── NotFound.tsx            # 404 error page
│   ├── test/
│   │   ├── example.test.ts         # Example test cases
│   │   └── setup.ts                # Test configuration
│   ├── assets/                     # Static images and media
│   ├── App.tsx                     # Root application component
│   ├── App.css                     # Global styles
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global CSS
├── public/                         # Static files
├── index.html                      # HTML entry point
├── vite.config.ts                  # Vite configuration
├── vitest.config.ts                # Vitest configuration
├── tsconfig.json                   # TypeScript base configuration
├── tsconfig.app.json               # TypeScript app-specific configuration
├── tsconfig.node.json              # TypeScript build-tools configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── eslint.config.js                # ESLint configuration
├── playwright.config.ts            # Playwright E2E testing configuration
├── playwright-fixture.ts           # Playwright fixtures
├── components.json                 # shadcn/ui components registry
└── package.json                    # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.x or higher
- **npm** 8.x or higher (or yarn/pnpm)
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Installation

1. **Clone or download the project**
   ```bash
   cd vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` with hot module replacement enabled.

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR). Code changes will automatically refresh in the browser.

### Building for Production
```bash
npm run build
```
Compiles the TypeScript, bundles the React application, and optimizes assets for production. Output is generated in the `dist/` directory.

### Development Build
```bash
npm run build:dev
```
Creates a production build but in development mode for debugging purposes.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deploying. Useful for testing production bundle in a local environment.

### Linting
```bash
npm run lint
```
Runs ESLint to check code for style violations and potential errors. Helps maintain code consistency across the project.

### Testing
```bash
npm run test
```
Runs all unit and integration tests using Vitest in run mode (single execution).

```bash
npm run test:watch
```
Runs tests in watch mode for continuous testing during development. Re-runs tests when files change.

## 🧪 Testing

The project uses two testing frameworks:

### Unit & Integration Tests (Vitest)
- Located in `src/test/`
- Configuration in `vitest.config.ts`
- Run with `npm run test` or `npm run test:watch`

### End-to-End Tests (Playwright)
- Configuration in `playwright.config.ts`
- Fixtures defined in `playwright-fixture.ts`
- Run with `npx playwright test`

## 🎨 Styling & Theming

### Tailwind CSS
The project uses Tailwind CSS for all styling. Configuration is in `tailwind.config.ts`.

**Key Features:**
- Utility-first approach for rapid development
- Responsive design breakpoints (sm, md, lg, xl, 2xl)
- Custom color palette and gradients
- Animation utilities for smooth transitions

### Component Library
- **shadcn/ui** provides pre-built, customizable components
- All components are accessible (WCAG compliant)
- Located in `src/components/ui/`
- Easy to customize through component source files

### Dark Mode
- Managed by `next-themes` for persistent theme preference
- Supports automatic detection based on system preferences

## 🔧 Configuration

### Vite (`vite.config.ts`)
- React plugin with SWC for faster builds
- Path alias `@` for `src/` directory
- Optimized build settings

### TypeScript (`tsconfig.json`)
- Strict mode enabled for type safety
- Modern ES2020 target
- JSX support for React

### ESLint (`eslint.config.js`)
- Enforces code quality and consistency
- React and React Hooks rules enabled
- TypeScript support

### Tailwind CSS (`tailwind.config.ts`)
- Responsive design configuration
- Custom theme extensions
- Animation and gradient utilities

## 📦 Dependencies Overview

### Production Dependencies (24 packages)
- **UI Components**: Radix UI suite (25+ components)
- **Styling**: Tailwind CSS, class-variance-authority
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router for client-side navigation
- **State Management**: React Query for data fetching
- **Utilities**: date-fns, clsx, tailwind-merge
- **Notifications**: Sonner for toast messages
- **Icons**: Lucide React

### Development Dependencies (18 packages)
- **Linting**: ESLint with TypeScript support
- **Testing**: Vitest, Playwright, Testing Library
- **Build Tools**: Vite, SWC plugin
- **CSS Processing**: PostCSS, Autoprefixer
- **Type Support**: TypeScript

## 🚀 Deployment

### Build Optimization
- The production build is automatically optimized by Vite
- Code splitting for efficient chunk loading
- Asset compression and minification
- Lazy loading of routes where applicable

### Recommended Deployment Platforms
- **Vercel** - Optimal for React/Vite projects with zero-config deployment
- **Netlify** - Git-based deployment with automatic builds
- **GitHub Pages** - Free static hosting
- **AWS Amplify** - Full-featured deployment platform
- **DigitalOcean** - Virtual private servers or app platform

### Build Command for CI/CD
```bash
npm install && npm run build
```
Ensure `dist/` directory is deployed.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Code Quality

The project follows best practices for code quality:
- **TypeScript** - Type safety throughout the application
- **ESLint** - Automated code linting
- **Prettier** - Code formatting (ready to integrate)
- **Component-Based Architecture** - Modular, reusable components
- **Testing** - Unit tests, integration tests, and E2E tests

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [React Router Documentation](https://reactrouter.com)

## 🔐 Security

- **TypeScript** enforces type safety to prevent runtime errors
- **Zod** validates all form inputs on client and can be extended to server
- **React Router** provides client-side routing security
- Regular dependency updates recommended via `npm audit`

## 📄 License

This project is private and created for professional services.

---

**Last Updated:** April 2026
**Version:** 1.0.0
