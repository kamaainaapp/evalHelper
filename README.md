# evalHelper - Setup & User Guide

## 📋 Overview


**Current Version:** evalHelper.html 

---

## 🚨 CORS Issue & Proxy Setup

The Anthropic API doesn't allow direct browser calls due to CORS (Cross-Origin Resource Sharing) restrictions. 

**Solution:** Use the included proxy server to forward requests.

---

## 🚀 Quick Start (2 Steps)

### Step 1: Start the Proxy Server

```bash
node proxy-server.js
```

You should see:
```
✅ Proxy server running on http://localhost:3000
📝 Open webevalstudio.html in your browser now!
```

### Step 2: Open the App

Open **`FINAL.html`** in Chrome or Edge (for voice features)

That's it! 🎉

---

## 📦 Files Included

- **`FINAL.html`** - Main application (all features, optimized)
- **`proxy-server.js`** - Local proxy server (handles CORS)
- **`README.md`** - This file

---

## ✨ Features

### Core Features
- ✅ **6 Website Slots (A-F)** - Evaluate up to 6 sites simultaneously
- ✅ **Screenshot Upload** - Auto-resizes images to prevent size issues
- ✅ **HTML Code Upload** - Analyze code for spec compliance, if mentioned in prompt
- ✅ **Text Notes** - Type or paste observations for each site 
- ✅ **Voice Recording** - Real-time voice-to-text (basic chrome one)


### Evaluation System
- ✅ **4 Category Rankings**: Overall, Aesthetic, Functionality, Relevance
- ✅ **Comprehensive UI/UX Criteria** - Detailed design analysis
- ✅ **Editable System Prompt** - Customize evaluation criteria
- ✅ **Editable Results** - Modify rankings after generation

### Export & Storage
- ✅ **CSV Export** - Download results as spreadsheet (doesnt work yet :/ )
- ✅ **Copy to Clipboard** - Quick copy for each category
- ✅ **Session Save/Load** - Auto-saves to localStorage
- ✅ **Clear All** - Reset everything with one click

---

## 🎯 How to Use

### 1. API Configuration

Enter your Claude API key from [console.anthropic.com](https://console.anthropic.com/)

Click **"Test Connection"** - you should see:
```
✅ Connection successful! API key is valid.
```

### 2. Enter Project Requirements

```
Example:
- Mobile responsive design required
- Should look like Spotify (dark theme, green accents)
- Must include contact form with validation
- Navigation menu with dropdown
- Hero section with background image
```

### 3. Add Data for Each Site (A-F)

**For each website you're evaluating:**

- **📸 Upload Screenshot** (Optional)
  - Click "Upload Screenshot"
  - Image is automatically resized to 800px width
  - Shows "(optimized)" tag
  - Click **✕** to remove

- **💻 Upload HTML Code** (Optional)
  - Click "Upload HTML File"
  - Upload .html file
  - Click **✕** to remove

- **📝 Add Notes** 
  - Type observations directly, OR
  - Use voice recording (Chrome/Edge only)

**Voice Recording:**
- Click **⏺️ Record** to start
- Speak your observations
- Real-time transcription appears as you speak
- Click **⏹️ Stop** when done
- Click **↶ Undo** to remove last entry
- Click **✕** to clear all notes
(or use mac mic button)
### 4. Customize Evaluation

Click **"System Prompt (Evaluation Criteria)"** to:
- View comprehensive UI/UX evaluation criteria
- Edit or add custom grading rubrics
- Reset to default if needed
- Changes save automatically

### 5. Evaluate!

Click **🚀 Evaluate All Sites**

Wait for results (usually 30-60 seconds)

### 6. Review Results

View rankings in 4 tabs:
- **Overall** - Combined assessment
- **Aesthetic** - Visual design quality
- **Functionality** - Features and bugs
- **Relevance** - Requirement compliance

**For each category:**
- Edit rankings directly in the text box
- Click **📋 Copy** to copy results
- Results are editable even after generation

### 7. Export

- **📊 Export CSV** - Download all results as spreadsheet
- **💾 Save Session** - Save everything to localStorage
- **📂 Load Session** - Restore previous work
- **🗑️ Clear All** - Reset and start over

---

## 🔧 Troubleshooting

### "Failed to fetch" error
- Make sure proxy is running: `node proxy-server.js`
- Check it's on port 3000
- Restart the proxy server

### API key shows "Invalid"
- Test your key with curl first
- Copy key carefully (no extra spaces)
- Verify key is active at console.anthropic.com

### Voice recording not working
- Use Chrome or Edge (Safari/Firefox don't support Web Speech API)
- Grant microphone permissions when prompted

### Evaluation returns no results
- Screenshots are now auto-resized (should fix this)
- Check browser console (F12) for errors
- Try with fewer sites first

### Proxy server won't start
- Check if port 3000 is in use: `lsof -i :3000` (Mac/Linux)
- Kill the process or edit proxy-server.js to use different port

---

## 💡 Tips for Best Results

### Screenshots:
- Upload for accurate aesthetic evaluation
- Images auto-optimized (800px, 85% quality)
- Shows design issues like overlapping, misalignment

### Code Files:
- Upload HTML for spec compliance checking
- Catches prohibited libraries
- Verifies technical requirements

### Voice Notes:
- Great for capturing observations while testing
- Real-time transcription lets you monitor for errors
- Can edit manually after recording

### Design References:
When requirements mention "looks like Spotify":
- AI compares specific design elements
- Identifies exact differences (margins, colors, fonts)
- More detailed than generic evaluation

---
