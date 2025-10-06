import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import contactRoutes from '../server/routes/contact.js'

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Get the frontend URL from environment variables or use default
const FRONTEND_URL = process.env.VITE_FRONTEND_URL || 'http://localhost:3000';

// Middleware - Fix CORS configuration
app.use(cors({
  origin: FRONTEND_URL, // Specific origin instead of wildcard
  credentials: true, // Allow credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(express.static('public'));


// Import routes
import apiRoutes from './routes/api.js';
app.use('/api', apiRoutes);
app.use('/api', contactRoutes);


// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend URL: ${FRONTEND_URL}`);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Auto-refresh token every 45 minutes (tokens expire in 1 hour)
setInterval(async () => {
  try {
    const { refreshAccessToken } = await import('./scripts/refresh-token.js');
    await refreshAccessToken();
    console.log('Auto-refreshed OAuth token at:', new Date().toISOString());
  } catch (error) {
    console.error('Auto token refresh failed:', error);
  }
}, 45 * 60 * 1000);