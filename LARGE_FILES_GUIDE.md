# Handling Large Files (240MB CSV) for Deployment

Your `RAW_recipes.csv` is **281MB**, which exceeds GitHub's 100MB limit. Here are your options:

---

## ✅ **Option 1: Git LFS (Recommended - Already Set Up!)**

Git Large File Storage stores large files outside the main repo and works seamlessly with Render.

### What I Did:
- ✅ Created `.gitattributes` to track `*.csv` and `*.pkl` with LFS
- ✅ Removed `*.csv` and `*.pkl` from `.gitignore`
- ✅ Initialized Git LFS in your repo

### How to Use:

```bash
# 1. Add your files (Git LFS will handle them automatically)
git add .gitattributes
git add src/app/api/generate-recipe/*.csv
git add src/app/api/generate-recipe/*.pkl

# 2. Commit
git commit -m "Add large files with Git LFS"

# 3. Push to GitHub
git push origin main
```

### On Render:
Render automatically supports Git LFS - no extra configuration needed! ✨

### Pros:
- ✅ Works automatically with Render
- ✅ Version control for large files
- ✅ No code changes needed
- ✅ Free for files up to 1GB on GitHub

### Cons:
- ⚠️ GitHub free tier: 1GB storage, 1GB bandwidth/month
- ⚠️ If you exceed limits, need to pay ($5/month for 50GB)

---

## 🌐 **Option 2: Cloud Storage (S3/Google Cloud/Cloudflare R2)**

Store the CSV in cloud storage and download it during build or runtime.

### Setup with Cloudflare R2 (Free 10GB):

1. **Upload to R2:**
   - Sign up at https://cloudflare.com
   - Create R2 bucket
   - Upload `RAW_recipes.csv`
   - Make it public or generate access token

2. **Download during build:**

Create `download-data.sh`:
```bash
#!/bin/bash
echo "📥 Downloading large data files..."
curl -o src/app/api/generate-recipe/RAW_recipes.csv "YOUR_R2_PUBLIC_URL"
echo "✅ Download complete"
```

3. **Update `build.sh`:**
```bash
#!/bin/bash
set -e

echo "📥 Downloading data files..."
chmod +x ./download-data.sh && ./download-data.sh

echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

echo "📦 Installing Node.js dependencies..."
npm install

echo "🔨 Building Next.js application..."
npm run build
```

### Pros:
- ✅ No GitHub LFS limits
- ✅ Cheaper at scale (Cloudflare R2 is free for 10GB)
- ✅ Can serve files globally via CDN

### Cons:
- ⚠️ Need to set up cloud storage account
- ⚠️ Download time during each build

---

## 📦 **Option 3: Compress the CSV**

Reduce file size significantly with compression.

```bash
# Compress the CSV
gzip -k src/app/api/generate-recipe/RAW_recipes.csv
# Creates RAW_recipes.csv.gz (probably ~30-50MB)

# Then use Git LFS or commit directly if <100MB
git add src/app/api/generate-recipe/RAW_recipes.csv.gz
```

**Update Python script to read compressed file:**
```python
import gzip
import pandas as pd

# Read compressed CSV
with gzip.open('RAW_recipes.csv.gz', 'rt', encoding='ISO-8859-1') as f:
    df_subset = pd.read_csv(f)
```

### Pros:
- ✅ Reduces size by 70-90%
- ✅ Faster downloads
- ✅ May fit under 100MB (no LFS needed)

### Cons:
- ⚠️ Need to modify Python code
- ⚠️ Slight decompression overhead (minimal)

---

## 🗄️ **Option 4: Use PostgreSQL/MongoDB**

Store recipes in your database instead of CSV.

### One-time migration:
```python
import pandas as pd
import pymongo

# Read CSV
df = pd.read_csv('RAW_recipes.csv')

# Connect to MongoDB
client = pymongo.MongoClient(MONGODB_URI)
db = client['receipe']
collection = db['recipes']

# Insert recipes
recipes = df.to_dict('records')
collection.insert_many(recipes)
```

**Update search to query database instead of CSV.**

### Pros:
- ✅ No file storage issues
- ✅ Better for production (scalable)
- ✅ Can index for faster queries

### Cons:
- ⚠️ Requires code refactoring
- ⚠️ MongoDB Atlas free tier: 512MB limit (your CSV is 281MB uncompressed)

---

## 🚀 **My Recommendation**

### For Quick Deployment: **Option 1 (Git LFS)** ⭐
- Already set up for you
- Just commit and push
- Works automatically with Render
- No code changes

### For Long-term/Scale: **Option 2 (Cloud Storage)** or **Option 4 (Database)**
- More flexible
- Better performance
- No LFS bandwidth limits

---

## 📝 Next Steps (Using Git LFS):

```bash
# 1. Verify LFS is tracking your files
git lfs ls-files

# 2. Add the files
git add .gitattributes .gitignore
git add src/app/api/generate-recipe/RAW_recipes.csv
git add src/app/api/generate-recipe/*.pkl

# 3. Commit
git commit -m "Add large data files with Git LFS"

# 4. Push to GitHub
git push origin main

# 5. Deploy on Render (it will automatically pull LFS files)
```

---

## ⚠️ Git LFS Bandwidth Limits

- **GitHub Free:** 1GB storage + 1GB bandwidth/month
- **Each Render deploy:** Downloads the 281MB file
- **~3 deploys/month** before hitting limit
- If exceeded: Pay $5/month for 50GB pack

---

## 🔍 Check Current File Status

```bash
# See which files will use LFS
git lfs ls-files

# Check LFS file sizes
git lfs ls-files --size
```

**Ready to proceed? Just follow the commands above!** 🚀
