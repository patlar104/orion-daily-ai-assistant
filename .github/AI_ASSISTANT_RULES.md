# AI Assistant Automation Rules

## 🤖 Role & Responsibilities

As the AI assistant working on this project, I MUST follow these rules for every code change:

---

## 🛡️ RULE 1: Privacy Shield (CRITICAL - HIGHEST PRIORITY)

### Before ANY commit or file edit:

✅ **SCAN for exposed secrets:**
```regex
Patterns to detect and BLOCK:
- AIza[A-Za-z0-9_-]{35,}  (Google API keys)
- sk-[A-Za-z0-9]{20,}      (OpenAI keys)
- ghp_[A-Za-z0-9]{36,}     (GitHub tokens)
- api[_-]?key.*[=:]\s*['"'][^'"']{10,}
- secret.*[=:]\s*['"'][^'"']{10,}
- password.*[=:]\s*['"'][^'"']{10,}
```

✅ **IF DETECTED:**
1. **STOP IMMEDIATELY** - Do not proceed with commit
2. **ALERT USER** with message:
   ```
   ⚠️ PRIVACY SHIELD ACTIVATED!
   
   Detected potential API key/secret in: <filename>
   Line: <line_number>
   Pattern: <what_was_found>
   
   ACTION REQUIRED:
   - Move this to environment variable
   - Use empty string '' in code
   - Add to .gitignore if it's a config file
   ```
3. **SUGGEST FIX:**
   ```javascript
   // Instead of:
   const API_KEY = 'AIzaSyC1c1...';
   
   // Use:
   const API_KEY = ''; // User adds via Settings UI
   // OR
   const API_KEY = process.env.GEMINI_API_KEY;
   ```

---

## 📝 RULE 2: Commit Message Automation

### For EVERY code change, I will:

1. **Analyze the change type:**
   - New feature → `feat:`
   - Bug fix → `fix:`
   - Documentation → `docs:`
   - Style/CSS → `style:`
   - Refactoring → `refactor:`
   - Performance → `perf:`
   - Maintenance → `chore:`

2. **Generate commit message following this template:**
   ```
   <type>(<scope>): <short description>
   
   <detailed description>
   
   <list of changes>
   ```

3. **Example output:**
   ```bash
   SUGGESTED COMMIT MESSAGE:
   
   feat(tasks): add task filtering by date range
   
   Implement date range picker for task filtering functionality.
   Users can now filter tasks by creation date or due date.
   
   - Add date picker component to tasks panel
   - Implement filtering logic in renderTasks()
   - Update UI to show active filters
   - Persist filter state in localStorage
   
   READY TO COMMIT? (y/n)
   ```

---

## 📚 RULE 3: README Maintenance

### After EVERY feature addition:

✅ **I will provide updated README section:**

```markdown
UPDATED README SECTION:

### ✨ Features

[Previous features...]

#### 🆕 NEW FEATURE: <Feature Name>
- **Description** - What it does
- **Usage** - How to use it
- **Benefits** - Why it's useful

COPY THIS TO README.md Features section
```

### Update checklist:
- [ ] Features list updated
- [ ] Usage examples added (if applicable)
- [ ] Configuration docs updated (if new settings)
- [ ] API changes documented (if endpoints changed)

---

## 🔍 RULE 4: Pre-Commit Checklist Automation

### Before EVERY commit, verify:

```bash
PRE-COMMIT CHECKLIST:

Security:
[x] No API keys in code (scanned)
[x] No hardcoded secrets
[x] Sensitive files in .gitignore

Code Quality:
[ ] Code tested in browser
[ ] No debug console.log() statements
[ ] Functions documented (if complex)
[ ] Error handling in place

Documentation:
[ ] README updated (if features changed)
[ ] Inline comments for complex logic
[ ] API changes documented

Git Hygiene:
[ ] Commit message follows convention
[ ] Only related files staged
[ ] .gitignore updated (if new file types)
```

---

## 📋 RULE 5: .gitignore Updates

### I will check and update .gitignore when:

1. **New dependencies added:**
   ```bash
   # Example: User adds npm
   → Add: node_modules/, package-lock.json
   ```

2. **New build tools:**
   ```bash
   # Example: User adds Webpack
   → Add: dist/, .webpack/
   ```

3. **New environment files:**
   ```bash
   # Example: User creates .env.production
   → Add: .env.production, .env.*.local
   ```

4. **New cache/temp files:**
   ```bash
   # Example: New tool creates .cache/
   → Add: .cache/, *.cache
   ```

**I will announce:**
```
🔧 .gitignore UPDATE REQUIRED:

New file type detected: <file_type>
Suggested addition to .gitignore:

<suggested_pattern>

Would you like me to add this? (y/n)
```

---

## 🎯 RULE 6: Feature Addition Workflow

### When implementing a new feature:

**STEP 1: Planning**
```
📋 FEATURE PLAN:

Feature: <name>
Type: <feat/fix/refactor>
Files to modify: <list>
New dependencies: <if any>
Breaking changes: <yes/no>
```

**STEP 2: Implementation**
- Write code
- Add error handling
- Add loading states (if async)
- Test in browser

**STEP 3: Documentation**
```
📝 DOCUMENTATION UPDATES:

1. README.md - Features section
   [Show updated text]

2. Inline comments added:
   - <filename>:<function> - <purpose>

3. Usage example:
   [Show example code]
```

**STEP 4: Git Commit**
```
SUGGESTED COMMIT:

<conventional commit message>

FILES TO STAGE:
- <list of modified files>

VERIFY AND COMMIT? (y/n)
```

**STEP 5: Post-commit verification**
```
✅ COMMIT SUCCESSFUL!

Summary:
- Commit hash: <hash>
- Files changed: <count>
- Lines added/removed: +<n>/-<n>

NEXT STEPS:
- Test feature in browser
- Update any related documentation
- Consider adding tests
```

---

## 🚨 RULE 7: Breaking Change Protocol

### If a change breaks existing functionality:

✅ **I MUST:**

1. **Alert with clear warning:**
   ```
   ⚠️ BREAKING CHANGE DETECTED!
   
   This change will affect:
   - <what breaks>
   - <migration required>
   
   Impact: <describe>
   ```

2. **Use BREAKING CHANGE footer in commit:**
   ```
   feat!: migrate to Gemini 2.5 Flash API
   
   BREAKING CHANGE: Old API endpoints deprecated.
   
   Migration guide:
   - Update API_URL in config
   - Regenerate API keys
   - Update all fetch() calls
   ```

3. **Update README with migration guide**

---

## 📊 RULE 8: Code Review Self-Check

### After writing code, I perform:

**The Critic Loop:**

1. **ANALYZE**: Does the HTML have correct IDs for JavaScript?
2. **CRITICIZE**: Is the code responsive? Secure? Accessible?
3. **VERIFY**: Are there edge cases not handled?
4. **CORRECT**: Fix issues before user sees them

**Report format:**
```
🔍 SELF-REVIEW RESULTS:

✅ HTML/JS connections verified
✅ Responsive design tested (mobile/tablet/desktop)
✅ Security: XSS protection in place
✅ Edge cases handled: <list>
⚠️ Potential issue: <if any>
```

---

## 🔄 RULE 9: Incremental Commits

### When making large changes:

✅ **DO:** Break into logical commits
```bash
git commit -m "feat: add date picker component"
git commit -m "feat: implement date filtering logic"
git commit -m "feat: add UI for active filters"
git commit -m "docs: update README with filtering feature"
```

❌ **DON'T:** Single massive commit
```bash
git commit -m "add everything" # BAD!
```

---

## 📖 RULE 10: Documentation Standards

### Every function/feature needs:

**Inline Comments:**
```javascript
/**
 * Categorizes a task into one of 5 categories based on keywords
 * @param {string} text - The task description
 * @returns {string} Category name: Work, Personal, Health, Finance, or Shopping
 */
function categorizeTask(text) {
    // Implementation...
}
```

**README Updates:**
- What it does
- How to use it
- Example usage
- Configuration options (if any)

**Commit Message:**
- Why the change was made
- What was changed
- Any side effects

---

## 🤝 RULE 11: User Communication

### When making changes, I will:

✅ **Always announce:**
```
I'm about to:
- <action 1>
- <action 2>

This will:
- <outcome>

Suggested commit message:
<message>

Proceed? (y/n)
```

✅ **After completion:**
```
✅ Changes completed!

Files modified:
- <file 1>
- <file 2>

Commit: <hash>
Message: <commit message>

Summary:
<what was done>
```

---

## 🎯 AUTOMATION CHECKLIST (For AI)

Before responding to ANY code change request:

```
[ ] 1. Privacy Shield scan for secrets
[ ] 2. Determine conventional commit type
[ ] 3. Check if .gitignore needs update
[ ] 4. Prepare README update (if feature)
[ ] 5. Generate commit message
[ ] 6. Perform self-review (Critic Loop)
[ ] 7. Prepare pre-commit checklist
[ ] 8. Verify all files are tracked correctly
[ ] 9. Check for breaking changes
[ ] 10. Communicate plan to user
```

---

## 🚀 Quick Command Reference (For AI Use)

```bash
# Privacy scan
git diff --cached | grep -E "(AIza|sk-|ghp_|api.*key|secret)" -i

# Stage files
git add <files>

# Commit with message
git commit -m "<conventional message>"

# Check status
git status

# View last commit
git log -1 --stat
```

---

**These rules are MANDATORY for every code change.**
**Privacy Shield is NON-NEGOTIABLE - ALWAYS check first.**
