#!/bin/bash

# Deployment script for portfolio
echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..

# Install and build client
echo "📦 Installing client dependencies..."
cd client
npm install

echo "🏗️  Building frontend..."
npm run build
cd ..

# Restart PM2 processes
echo "🔄 Restarting applications..."
pm2 restart all

echo "✅ Deployment completed!"
echo "📊 Check status with: pm2 list"
