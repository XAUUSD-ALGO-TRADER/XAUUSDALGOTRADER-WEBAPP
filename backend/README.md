# XAU/USD Algo Trader - Backend

This is the Express.js backend API for the XAU/USD Algo Trader platform.

## Tech Stack

- **Node.js** with Express.js
- **Supabase** for database and authentication
- **JWT** for token-based authentication
- **bcryptjs** for password hashing
- **Nodemailer** for email services
- **Google APIs** for OAuth integration

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account and project

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The backend will be available at `http://localhost:8080`

### Production

```bash
npm start
```

## Project Structure

```
backend/
├── server/
│   ├── index.js           # Main server file
│   ├── lib/               # Utility libraries
│   ├── routes/            # Express routes
│   ├── emails/            # Email templates
│   └── scripts/           # Utility scripts
├── api/                   # Vercel serverless functions
└── email_queue.json       # Email queue data
```

## Environment Variables

Create a `.env` file in the backend directory by copying from `env.example`:

```bash
cp env.example .env
```

Or create a `.env` file manually with these variables:

```env
# Server Configuration
NODE_ENV=development
PORT=8080
MODE=production
JWT_SECRET=AEgooXQGpy/4gGkUyg76AzIahF6MR20rJJBp6hQ9HBZZ62h6VlpQwp32wqaVL3+hUfL0ux76gbwsejoYNhlIDw==

# Frontend URL for CORS
FRONTEND_URL=http://localhost:8080
VITE_FRONTEND_URL=http://localhost:8080

# Supabase Configuration
SUPABASE_URL=https://iudwtjnzxmkfqjfsputx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZHd0am56eG1rZnFqZnNwdXR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODIxMDcyMywiZXhwIjoyMDczNzg2NzIzfQ.j5IoMhL54w9wPHE9LeUu647JMNTMUKdU-sOAeADsdao

# Gmail OAuth Configuration
GMAIL_CLIENT_ID=1042850185639-b5o99ie1tm3bacm9vfbhgsa89v80dtir.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=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
GMAIL_REFRESH_TOKEN=1//0gj2pngFRJlFUCgYIARAAGBASNwF-L9IrMcli0He8iQvwGQdhjQWsQ0gLUayDwVM9igsdmCt9Fe-cvvMqFE1uSsKPEA7RqKmZbcI
GMAIL_ACCESS_TOKEN=ya29.a0AQQ_BDRapQzfq_LnZFj7_oY6wJNsrv-eO3LGP3DzvkKQc1extpcoKsXC-V7wHXoKI0jkqCripH1PwCPZo6VL0kvxaAZvlJwcuKYdZN8mpzmsxtnyZkhRRonUnJgXHjXL8HZZCfKtp4n3RMuST7By3BIIzwa-TBmbBmnyVoUUa01D2w1Z-v8dL-EMyPAxZDQITbWdjRcaCgYKAV4SARUSFQHGX2MiJe-7pfmej-wif8VyPd7luA0206

# Email Settings
FROM_EMAIL=xauusdalgotrader@gmail.com
FROM_NAME="XAU/USD Algo Trader"
SUPPORT_EMAIL=support@xauusdalgotrader.com
SUPPORT_PHONE=+91-8249969556

# App Settings
APP_URL=https://xauusdalgotrader.com
SUPPORT_TELEGRAM=https://t.me/goldtraderindia
SUPPORT_YOUTUBE=https://www.youtube.com/@XAUUSDAlgoTrader
```

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/admin/login` - Admin login

### User Management (Admin)
- `GET /api/admin/pending-users` - Get pending users
- `GET /api/admin/users` - Get all users with pagination
- `POST /api/admin/users/:id/approve` - Approve user
- `POST /api/admin/users/:id/reject` - Reject user

### User Profile
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Health Check
- `GET /api/health` - Health check endpoint

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests (placeholder)

## Database Schema

The backend uses Supabase with the following main tables:
- `users` - User accounts
- `admins` - Admin accounts
- `user_approval_history` - User approval/rejection history
- `subscription_plans` - Subscription plans
- `user_subscriptions` - User subscriptions
