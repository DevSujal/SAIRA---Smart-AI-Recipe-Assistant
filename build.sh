#!/bin/bash
set -e

echo "🐍 Python version:"
python3 --version || python --version

echo "📦 Upgrading pip, setuptools and wheel"
python3 -m pip install --upgrade pip setuptools wheel

echo "📦 Installing Python dependencies..."
python3 -m pip install -r requirements.txt

echo "📦 Installing Node.js dependencies..."
npm ci

echo "🔨 Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
