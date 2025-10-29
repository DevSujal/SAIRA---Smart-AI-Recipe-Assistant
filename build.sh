#!/bin/bash
set -e

echo "� Python version:"
python3 --version || python --version

echo "�📦 Installing Python dependencies..."
pip3 install -r requirements.txt || pip install -r requirements.txt

echo "📦 Installing Node.js dependencies..."
npm install

echo "🔨 Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
