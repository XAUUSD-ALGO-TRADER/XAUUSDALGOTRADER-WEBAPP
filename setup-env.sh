#!/bin/bash

echo "🚀 Setting up environment files for XAU/USD Algo Trader..."

# Create frontend .env file
if [ ! -f "frontend/.env" ]; then
    echo "📁 Creating frontend .env file..."
    cp frontend/env.example frontend/.env
    echo "✅ Frontend .env created from env.example"
else
    echo "⚠️  Frontend .env already exists, skipping..."
fi

# Create backend .env file
if [ ! -f "backend/.env" ]; then
    echo "📁 Creating backend .env file..."
    cp backend/env.example backend/.env
    echo "✅ Backend .env created from env.example"
else
    echo "⚠️  Backend .env already exists, skipping..."
fi

echo ""
echo "🎉 Environment setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run install:all' to install dependencies"
echo "2. Run 'npm run dev' to start both frontend and backend"
echo ""
echo "Frontend will be available at: http://localhost:3000"
echo "Backend will be available at: http://localhost:8080"
