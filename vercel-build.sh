#!/bin/bash
echo "Building XAUUSD Trading Platform..."

# Install dependencies for frontend
cd frontend
npm install

# Build frontend
npm run build

# Go back to root
cd ..

# Create necessary directories and copy API files
mkdir -p api
cp -r backend/api/* api/

echo "Build completed successfully!"