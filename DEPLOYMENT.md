# SAIRA - Deployment Guide

## 🚀 Deploying to Render

This project uses both **Node.js (Next.js)** and **Python (scikit-learn)** and can be deployed on Render as a single web service.

### Prerequisites
- A [Render](https://render.com) account
- MongoDB Atlas database
- API keys (Hugging Face, Gemini, Google OAuth)

---

## Deployment Steps

### 1. Prepare Your Repository
Commit all the deployment files:
```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

### 2. Create Web Service on Render

#### Option A: Using render.yaml (Blueprint)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository
4. Render will detect `render.yaml` and set up automatically
5. Add your environment variables when prompted

#### Option B: Manual Setup
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `saira-recipe-assistant`
   - **Region**: Oregon (or closest to you)
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm run render-build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 3. Add Environment Variables

In Render dashboard, add these environment variables:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Auth Secret (generate new one: openssl rand -base64 32)
AUTH_SECRET=your_generated_secret_here

# API Keys
HUGGING_FACE_API_KEY=your_key
GEMINI_API_KEY=your_key

# OAuth (optional)
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

### 4. Deploy
- Render will automatically build and deploy
- Build process installs both Python and Node.js dependencies
- First deploy takes ~5-10 minutes

---

## How It Works

The deployment uses a **hybrid approach**:

1. **`build.sh`** - Installs both Python and Node.js dependencies
2. **`requirements.txt`** - Python packages (pandas, scikit-learn)
3. **`package.json`** - Node.js packages
4. **Next.js API routes** call Python scripts using `child_process.exec()`

### Build Process
```bash
build.sh
├── pip install -r requirements.txt  # Python deps
├── npm install                       # Node deps
└── npm run build                     # Next.js build
```

---

## Important Notes

### ⚠️ Free Tier Limitations
- Service spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free

### 🔒 Security
- Never commit `.env` file
- Use `.env.example` as template
- Rotate all API keys if they were exposed
- Use environment variables in Render dashboard

### 🐍 Python Version
Render uses Python 3.7+ by default. To specify a version, create `runtime.txt`:
```
python-3.11.0
```

### 📦 Large Files
If your pickle files (`tfidf_model.pkl`, `tfidf_matrix.pkl`) or CSV are large (>100MB):
- Consider using Git LFS
- Or store them in cloud storage (S3, Cloudinary)
- Or compress them

---

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure `build.sh` has execute permissions
- Verify Python dependencies are correct versions

### Python Script Not Found
- Check file paths are relative to project root
- Use `path.resolve()` in Node.js code

### Cold Starts
- Free tier services spin down when idle
- First request takes longer (30-60s)
- Consider paid plan for always-on service

---

## Alternative: Separate Services

If you prefer, deploy as two services:

### Service 1: Python API (Flask/FastAPI)
Convert `search_recipe.py` to a REST API:
```python
# app.py
from flask import Flask, request, jsonify
import search_recipe

app = Flask(__name__)

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    results = search_recipe.search_recipes(data['input'])
    return jsonify(results)
```

### Service 2: Next.js App
Call the Python API instead of running script locally:
```typescript
const response = await fetch('https://your-python-api.onrender.com/search', {
  method: 'POST',
  body: JSON.stringify({ input: userInput })
});
```

---

## Testing Locally

Test the build process:
```bash
chmod +x ./build.sh
./build.sh
npm start
```

---

## Support

- [Render Documentation](https://render.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Note**: The current setup deploys both Node.js and Python in a single service, which is the simplest approach for your project structure.
