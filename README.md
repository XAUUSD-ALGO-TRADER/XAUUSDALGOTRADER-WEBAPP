# XAU/USD Algo Trader Platform

A comprehensive trading platform for XAU/USD algorithmic trading with user management, premium signals, and educational resources.

## Project Structure

This is a monorepo containing both frontend and backend applications:

```
├── frontend/          # React frontend application
├── backend/           # Express.js backend API
├── package.json       # Root package.json with monorepo scripts
├── vercel.json        # Vercel deployment configuration
└── README.md          # This file
```

## Technologies Used

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for routing
- **React Query** for API state management

### Backend
- **Node.js** with Express.js
- **Supabase** for database and authentication
- **JWT** for token-based authentication
- **Nodemailer** for email services

## Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation
```bash
# 1. Setup environment files
npm run setup

# 2. Install dependencies for all projects
npm run install:all
```

### Development
```bash
# Run both frontend and backend in development mode
npm run dev
```

This will start:
- Frontend at `http://localhost:3000`
- Backend at `http://localhost:8080`

### Individual Development
```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

### Production Build
```bash
# Build frontend for production
npm run build
```

## Environment Setup

### Quick Setup
```bash
# Copy environment files from examples
cd frontend && cp env.example .env && cd ..
cd backend && cp env.example .env && cd ..
```



## Available Scripts

- `npm run setup` - Setup environment files from examples
- `npm run dev` - Run both frontend and backend
- `npm run build` - Build frontend for production
- `npm run install:all` - Install dependencies for all projects
- `npm run clean` - Clean all node_modules and build files
- `npm run lint` - Run linting
- `npm run type-check` - Run TypeScript type checking

## Deployment

This project is configured for deployment on Vercel:
- Frontend is deployed as a static site
- Backend API routes are deployed as serverless functions

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
