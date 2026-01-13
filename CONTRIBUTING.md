# Development Workflow & Git Guidelines

## 🛡️ Privacy Shield - API Key Protection

**⚠️ CRITICAL: Never commit API keys or secrets to version control!**

### ✅ Safe Practices

```javascript
// GOOD - Use empty string, let users add via Settings UI
const CONFIG = {
    GEMINI_API_KEY: '',  // User adds via UI
};

// GOOD - Use environment variables (if using Node.js)
const API_KEY = process.env.GEMINI_API_KEY;

// GOOD - Load from .env file (gitignored)
// In .env file:
GEMINI_API_KEY=your-key-here
```

### ❌ Unsafe Practices

```javascript
// BAD - Hardcoded key in code
const CONFIG = {
   GEMINI_API_KEY: 'YOUR_KEY',  // ❌ NEVER commit secrets
};
```

### If You Accidentally Commit a Key

1. **Revoke the key immediately** at <https://makersuite.google.com/app/apikeys>
2. Generate a new key
3. Use `git rebase` or `git filter-branch` to remove it from history
4. Force push with `git push --force`

---

## 📋 Commit Message Guidelines

We follow **Conventional Commits** format:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature for the user
- `fix:` - Bug fix for the user
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring (no feature/fix)
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks (deps, config, etc.)
- `build:` - Build system changes
- `ci:` - CI/CD changes

### Examples

```bash
# Feature addition
git commit -m "feat: add voice input support for chat interface"

# Bug fix
git commit -m "fix: resolve task deletion not persisting to localStorage"

# Documentation
git commit -m "docs: update README with voice input instructions"

# Multiple changes
git commit -m "feat: implement task search and filtering

- Add search input in tasks panel
- Filter tasks by category and priority
- Update UI to show filtered results
- Add clear filters button"

# Breaking change
git commit -m "feat!: migrate to Gemini 2.5 Flash API

BREAKING CHANGE: Old API endpoints no longer supported.
Users must update API keys and configuration."
```

---

## 🔄 Git Workflow

### Daily Development

1. **Check status before working**

   ```bash
   git status
   git pull origin main
   ```

2. **Create feature branch**

   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Make changes and commit frequently**

   ```bash
   git add <files>
   git commit -m "feat: your commit message"
   ```

4. **Push and create PR**

   ```bash
   git push origin feat/your-feature-name
   ```

### Before Each Commit Checklist

- [ ] **Privacy Check**: No API keys or secrets in code?
- [ ] **Linting**: Code follows style guidelines?
- [ ] **Testing**: Does it work in the browser?
- [ ] **README**: Updated features list if needed?
- [ ] **Gitignore**: New files/folders need ignoring?
- [ ] **Commit Message**: Follows conventional commits?

---

## 📦 .gitignore Maintenance

### When to Update .gitignore

1. **Adding new dependencies**

   ```bash
   # If you add npm packages
   node_modules/
   package-lock.json
   ```

2. **New build tools**

   ```bash
   # If you add a bundler
   dist/
   build/
   .parcel-cache/
   ```

3. **New local config**

   ```bash
   # If you add local config files
   .env.local
   config.local.json
   ```

4. **IDE/Editor changes**

   ```bash
   # If team uses new editor
   .fleet/
   .zed/
   ```

### Current .gitignore Covers

✅ Environment files (.env, *.key)  
✅ OS files (.DS_Store, Thumbs.db)  
✅ Editor configs (.vscode, .idea)  
✅ Dependencies (node_modules)  
✅ Build outputs (dist/, *.min.*)  
✅ Temporary files (*.tmp, *.log)  

---

## 🚀 Feature Addition Workflow

### Example: Adding Local Storage Feature

1. **Create feature branch**

   ```bash
   git checkout -b feat/local-storage-persistence
   ```

2. **Implement feature**
   - Write code in script.js
   - Test thoroughly

3. **Update README**
   Add to Features section:

   ```markdown
   ### 💾 Data Persistence
   - **Local Storage** - All data persists across sessions
   - **Auto-save** - Tasks and notes saved automatically
   - **Export/Import** - Download your data as JSON
   ```

4. **Commit with proper message**

   ```bash
   git add script.js README.md
   git commit -m "feat: add localStorage persistence for tasks and notes
   
   - Implement auto-save on task/note changes
   - Add export/import functionality
   - Update README with new features
   - Ensure data survives browser refresh"
   ```

5. **Push and review**

   ```bash
   git push origin feat/local-storage-persistence
   ```

---

## 🔍 Pre-Commit Privacy Audit

Run this before committing:

```bash
# Search for potential API keys
git diff --cached | grep -i "api.*key"
# Use a scrambled pattern to avoid matching real keys in hooks
git diff --cached | grep -i "AI-ZA"

# Check for secrets
git diff --cached | grep -i "secret"
git diff --cached | grep -i "password"

# Verify .gitignore is working
git status --ignored
```

---

## 📊 Commit Message Examples for This Project

### Features

```bash
feat: add task due date picker
feat: implement dark/light theme toggle
feat: add export tasks to CSV functionality
feat: integrate voice-to-text for chat input
```

### Fixes

```bash
fix: resolve task checkbox not updating state
fix: correct API error handling for rate limits
fix: prevent XSS in task descriptions
fix: fix mobile responsive layout overflow
```

### Documentation

```bash
docs: add API rate limiting information
docs: update installation steps for Windows
docs: add troubleshooting section to README
docs: document keyboard shortcuts
```

### Chores

```bash
chore: update .gitignore for Vite builds
chore: upgrade Gemini API to v2
chore: remove unused CSS classes
chore: add prettier config for code formatting
```

---

## 🎯 README Maintenance

### Current Features in README

✅ AI Chat Interface  
✅ Smart Task Management  
✅ Auto-categorization (5 categories)  
✅ Priority Scoring (P1-P4)  
✅ Quick Notes  
✅ Chat History  
✅ Quick Actions  
✅ Dark Theme  
✅ Responsive Design  
✅ Local Storage Persistence  
✅ XSS Protection  

### When to Update README

- Adding a new major feature → Update "Features" section
- Changing configuration → Update "Configuration" section
- Adding dependencies → Update "Technical Stack"
- New setup steps → Update "Quick Start"
- Security changes → Update "Privacy & Data"

---

**Remember: Security First, Commit Often, Document Everything!** 🛡️
