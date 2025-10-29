# 🚀 Deployment Checklist

## ✅ Pre-Deployment (All Done!)

- [x] Fixed NextAuth secret error (AUTH_SECRET added)
- [x] Fixed MongoDB connection (added database name to URI)
- [x] Fixed scikit-learn version mismatch (1.5.2)
- [x] Compressed RAW_recipes.csv (281MB → 82MB)
- [x] Updated Python script to read compressed CSV
- [x] Updated Node.js route to handle compressed CSV
- [x] Created deployment files (build.sh, requirements.txt, render.yaml)
- [x] Created .env.example template

## 📝 Before Pushing to GitHub

- [ ] Delete the original RAW_recipes.csv (keep only .csv.gz)
- [ ] Verify .env is in .gitignore (don't commit secrets!)
- [ ] Test locally one more time

```bash
# Remove original CSV (we have compressed version)
rm src/app/api/generate-recipe/RAW_recipes.csv

# Test the app
npm run dev
# Visit http://localhost:3000 and test recipe generation

# If all works, proceed to commit
```

## 🔐 Prepare Secrets for Render

Copy these from your `.env` file:

```
MONGODB_URI=mongodb+srv://your_username:
AUTH_SECRET=X16px/bSDZCk5RV0mkHbi6Yxkymtel5NHvabQwnsPlg=
HUGGING_FACE_API_KEY=(your key)
GEMINI_API_KEY=(your key)
GOOGLE_CLIENT_ID=(your id)
GOOGLE_CLIENT_SECRET=(your secret)
```

## 📤 Push to GitHub

```bash
# Stage all files
git add .

# Check what will be committed (verify .env is NOT in the list!)
git status

# Commit
git commit -m "Add deployment configuration and compressed data files"

# Push
git push origin main
```

## 🌐 Deploy on Render

### Step 1: Create Web Service
1. Go to https://dashboard.render.com
2. Sign in with GitHub
3. Click **"New +"** → **"Web Service"**
4. Select your repository: `SAIRA---Smart-AI-Recipe-Assistant`

### Step 2: Configure Service
- **Name**: `saira-recipe-assistant` (or your choice)
- **Region**: Oregon (or closest to you)
- **Branch**: `main`
- **Runtime**: `Node`
- **Build Command**: `npm run render-build`
- **Start Command**: `npm start`
- **Instance Type**: Free

### Step 3: Add Environment Variables
Click **"Add Environment Variable"** for each:

| Key | Value |
|-----|-------|
| MONGODB_URI | (paste from .env) |
| AUTH_SECRET | (paste from .env) |
| HUGGING_FACE_API_KEY | (paste from .env) |
| GEMINI_API_KEY | (paste from .env) |
| GOOGLE_CLIENT_ID | (paste from .env) |
| GOOGLE_CLIENT_SECRET | (paste from .env) |
| NODE_ENV | production |

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Wait for build to complete (~5-10 minutes)
3. Watch the logs for any errors

## ✅ Post-Deployment

### Test Your Deployment

```bash
# Test the deployed API (replace with your Render URL)
curl -X POST https://your-app.onrender.com/api/generate-recipe \
  -H "Content-Type: application/json" \
  -d '{"input": "paneer biryani"}'
```

### Update OAuth Callbacks (If Using Google/GitHub Login)

1. **Google Cloud Console**: Add your Render URL to authorized redirect URIs:
   - `https://your-app.onrender.com/api/auth/callback/google`

2. **GitHub OAuth App**: Add callback URL:
   - `https://your-app.onrender.com/api/auth/callback/github`

## 🐛 Troubleshooting

### Build Fails
- Check Render logs
- Verify all files were pushed to GitHub
- Ensure RAW_recipes.csv.gz exists in repo

### MongoDB Connection Fails
- Verify MONGODB_URI in Render environment variables
- Check MongoDB Atlas Network Access (allow 0.0.0.0/0 or Render IPs)
- Verify database user credentials

### Python Script Fails
- Check if scikit-learn version matches (1.5.2)
- Verify .pkl and .csv.gz files are in the repo
- Check build logs for pip install errors

### App is Slow
- Free tier spins down after 15 min of inactivity
- First request after spin-down takes 30-60 seconds
- Upgrade to paid tier for always-on service

## 📊 Files Being Deployed

| File | Size | Purpose |
|------|------|---------|
| RAW_recipes.csv.gz | 82MB | Recipe database (compressed) |
| tfidf_matrix.pkl | 8.5MB | ML model matrix |
| tfidf_model.pkl | 56KB | ML model |
| + Source code | ~10MB | Next.js app |
| **Total** | **~100MB** | ✅ Under limits |

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Build completes without errors
- ✅ Service shows "Live" status (green dot)
- ✅ You can access the homepage
- ✅ Recipe generation works
- ✅ Login/signup works (if using auth)

## 📈 Next Steps After Deployment

1. **Monitor**: Check Render dashboard for errors
2. **Domain**: Add custom domain (optional, in Render settings)
3. **Analytics**: Add Google Analytics or similar
4. **Error Tracking**: Consider Sentry.io for error monitoring
5. **Performance**: Monitor response times and optimize if needed

---

**Need Help?**
- Render Docs: https://render.com/docs
- Check `DEPLOYMENT.md` for detailed guides
- Check `LARGE_FILES_GUIDE.md` for alternative file storage options

**Ready to deploy? Follow the steps above!** 🚀
