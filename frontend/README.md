# XAU/USD Algo Trader - Frontend

This is the React frontend for the XAU/USD Algo Trader platform built with Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for routing
- **React Query** for API state management
- **Supabase** for authentication and data

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── contexts/      # React contexts
├── hooks/         # Custom hooks
├── lib/           # Utility libraries
└── assets/        # Static assets
```

## Environment Variables

Create a `.env` file in the frontend directory by copying from `env.example`:

```bash
cp env.example .env
```

Or create a `.env` file manually with these variables:

```env
VITE_API_URL=http://localhost:8080
VITE_SUPABASE_URL=https://iudwtjnzxmkfqjfsputx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZHd0am56eG1rZnFqZnNwdXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTA3MjMsImV4cCI6MjA3Mzc4NjcyM30.v5fi2U8Z_kpJG8z1IgqupgTUK6JCy4dkygGfEmY3eso
VITE_APP_URL=https://xauusdalgotrader.com
VITE_SUPPORT_EMAIL=support@xauusdalgotrader.com
VITE_SUPPORT_PHONE=+91-8249969556
VITE_SUPPORT_TELEGRAM=https://t.me/goldtraderindia
VITE_SUPPORT_YOUTUBE=https://www.youtube.com/@XAUUSDAlgoTrader
VITE_FRONTEND_URL=http://localhost:8080
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
