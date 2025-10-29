#!/bin/bash
# Optional: Download large data files from cloud storage
# Usage: Set DATA_FILE_URL environment variable in Render

set -e

if [ -z "$DATA_FILE_URL" ]; then
  echo "⚠️  DATA_FILE_URL not set, skipping download"
  echo "ℹ️  Using files from Git LFS or repo"
  exit 0
fi

echo "📥 Downloading RAW_recipes.csv from cloud storage..."
echo "   URL: $DATA_FILE_URL"

TARGET_DIR="src/app/api/generate-recipe"
TARGET_FILE="$TARGET_DIR/RAW_recipes.csv"

# Download with curl (with retry)
curl -L --retry 3 --retry-delay 5 -o "$TARGET_FILE" "$DATA_FILE_URL"

# Verify download
if [ -f "$TARGET_FILE" ]; then
  FILE_SIZE=$(stat -f%z "$TARGET_FILE" 2>/dev/null || stat -c%s "$TARGET_FILE" 2>/dev/null)
  echo "✅ Download complete! File size: $(numfmt --to=iec $FILE_SIZE 2>/dev/null || echo $FILE_SIZE bytes)"
else
  echo "❌ Download failed!"
  exit 1
fi
