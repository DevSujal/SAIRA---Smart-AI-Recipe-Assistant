#!/bin/bash
# Compress large CSV files for easier storage
# Run this locally before committing

set -e

SOURCE_FILE="src/app/api/generate-recipe/RAW_recipes.csv"
TARGET_FILE="${SOURCE_FILE}.gz"

if [ ! -f "$SOURCE_FILE" ]; then
  echo "❌ Source file not found: $SOURCE_FILE"
  exit 1
fi

echo "🗜️  Compressing $SOURCE_FILE..."
ORIGINAL_SIZE=$(stat -f%z "$SOURCE_FILE" 2>/dev/null || stat -c%s "$SOURCE_FILE")

gzip -k "$SOURCE_FILE"

COMPRESSED_SIZE=$(stat -f%z "$TARGET_FILE" 2>/dev/null || stat -c%s "$TARGET_FILE")
REDUCTION=$((100 - (COMPRESSED_SIZE * 100 / ORIGINAL_SIZE)))

echo "✅ Compression complete!"
echo "   Original:   $(numfmt --to=iec $ORIGINAL_SIZE 2>/dev/null || echo $ORIGINAL_SIZE bytes)"
echo "   Compressed: $(numfmt --to=iec $COMPRESSED_SIZE 2>/dev/null || echo $COMPRESSED_SIZE bytes)"
echo "   Reduction:  ${REDUCTION}%"
echo ""
echo "📝 Next steps:"
echo "   1. Update search_recipe.py to read the .gz file"
echo "   2. Delete the original .csv file"
echo "   3. Commit the .csv.gz file"
