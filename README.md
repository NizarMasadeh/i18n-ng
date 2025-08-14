# Angular i18n SSR Application

<p align="center">
  <img src="docs/angular.gif" alt="Angular" width="100" height="100"/>
</p>

A modern, production-ready Angular application demonstrating advanced internationalization (i18n) with Server-Side Rendering (SSR) support. This project showcases seamless bilingual functionality with English and Arabic locales, complete with RTL support and dynamic language switching.

## 🌟 Features

### 🌍 Internationalization (i18n)
- **Bilingual Support**: English (en-US) and Arabic (ar-JO) locales
- **XLIFF Translation Format**: Industry-standard translation workflow
- **Dynamic Language Switching**: Client-side locale switching without page reload
- **RTL Support**: Full right-to-left text direction for Arabic
- **Locale-Specific Builds**: Separate optimized builds for each language

### 🚀 Server-Side Rendering (SSR)
- **Angular Universal**: Full SSR implementation with Express.js
- **SEO Optimized**: Pre-rendered content for better search engine visibility
- **Performance**: Faster initial page loads and improved Core Web Vitals
- **Prerendering**: Static generation for optimal performance

### 🎨 Modern Architecture
- **Angular 20**: Latest Angular framework with standalone components
- **TypeScript**: Full type safety and modern JavaScript features
- **SCSS**: Advanced styling with preprocessor support
- **Route Animations**: Smooth page transitions with custom animations
- **Responsive Design**: Mobile-first approach with modern CSS

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/           # Feature pages (Home, About, Services, Contact)
│   ├── shared/          # Shared utilities and animations
│   ├── app.ts           # Root component with i18n logic
│   ├── app.html         # Main template with navigation
│   ├── app.routes.ts    # Client-side routing configuration
│   └── app.config.ts    # Application configuration
├── locale/              # Translation files
│   ├── messages.xlf     # English source translations
│   └── messages.ar.xlf  # Arabic translations
├── main.ts              # Application bootstrap
├── main.server.ts       # SSR bootstrap
└── server.ts            # Express server configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 22.16.x
- npm or yarn

### 🐳 Docker

```bash
docker-compose up -d

# Available at http://localhost:8070
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd angular-i18n-ssr

# Install dependencies
npm install

# Start development server (English)
npm start

# Start development server (Arabic)
npm run start:ar

# For arabic.. it'll be available at http://localhost:4200/ar-JO
```

### Development Commands

```bash
# Development
npm start                    # Serve English locale
npm run serve:ar            # Serve Arabic locale

# Building
npm run build               # Build all locales
npm run build:en           # Build English only
npm run build:ar           # Build Arabic only
npm run build:i18n         # Build both locales

# Production
npm run start:prod         # Start production server

# i18n Management
npm run extract-i18n       # Extract translatable strings
```

## 🌐 Internationalization Workflow

### 1. Adding Translatable Content

Mark text for translation using Angular i18n attributes:

```html
<h1 i18n="@@page.title">Welcome to Our Application</h1>
<p i18n="@@page.description">This is a description</p>
```

### 2. Extracting Messages

Extract translatable strings to XLIFF files:

```bash
npm run extract-i18n
```

### 3. Translation Process

1. **Source File**: `src/locale/messages.xlf` contains all extractable text
2. **Translation File**: `src/locale/messages.ar.xlf` contains Arabic translations
3. **Update Translations**: Modify target elements in translation files

### 4. Language Switching

The application supports dynamic language switching:

```typescript
switchLanguage(targetLocale: string): void {
  // Intelligent URL rewriting for locale switching
  // Preserves current route while changing locale
}
```

## 🏗️ Architecture Highlights

### Component Structure
- **Standalone Components**: Modern Angular architecture without NgModules
- **Route-based Code Splitting**: Lazy loading for optimal performance
- **Shared Animations**: Reusable animation system for page transitions

### SSR Implementation
- **Express Integration**: Custom server with Angular Universal
- **Locale-aware Routing**: Server handles locale-specific routes
- **Static Generation**: Pre-rendered pages for production

### Build Configuration
- **Multi-locale Builds**: Separate optimized bundles per language
- **Bundle Optimization**: Tree-shaking and code splitting
- **Asset Management**: Locale-specific assets and configurations

## 📱 Responsive Design

The application features a mobile-first responsive design:

- **Breakpoint System**: Consistent responsive behavior
- **Touch-friendly**: Optimized for mobile interactions
- **Cross-browser**: Compatible with modern browsers
- **Accessibility**: WCAG compliant with proper ARIA attributes

## 🔧 Configuration

### Angular Configuration (`angular.json`)
- **Source Locale**: `en-US` (default)
- **Target Locales**: `ar-JO` (Arabic - Jordan)
- **Build Targets**: Separate configurations for each locale
- **SSR Setup**: Server-side rendering configuration

### Locale-specific Features
- **Arabic (ar-JO)**: RTL layout, Arabic typography, cultural adaptations
- **English (en-US)**: LTR layout, Western typography, standard formatting

## 🚀 Deployment

### Production Build
```bash
npm run build:i18n
```

This creates optimized builds in:
- `dist/en-US/` - English version
- `dist/ar-JO/` - Arabic version

### Server Deployment
```bash
npm run start:prod
```

## 📈 Performance

- **Lighthouse Score**: Optimized for Core Web Vitals
- **Bundle Size**: Efficient code splitting and tree-shaking
- **Loading Speed**: SSR for faster initial page loads
- **SEO**: Pre-rendered content for search engines

## 📄 License

This project is licensed under the MIT License.

## 🔗 Resources

- [Angular i18n Guide](https://angular.io/guide/i18n)
- [Angular Universal](https://angular.io/guide/universal)
- [XLIFF Format Specification](http://docs.oasis-open.org/xliff/xliff-core/v2.1/xliff-core-v2.1.html)

---

**Built with ❤️ using Angular 20, TypeScript, and modern web technologies.**
