# Commit Message Templates

## Feature Addition
```
feat(<scope>): <short description>

<Detailed explanation of what the feature does>

Changes:
- <Change 1>
- <Change 2>
- <Change 3>

Related: <issue/PR if any>
```

## Bug Fix
```
fix(<scope>): <short description>

<Explanation of what was broken and how it's fixed>

Root cause: <why the bug happened>
Solution: <how it was fixed>

Fixes #<issue-number>
```

## Documentation Update
```
docs(<scope>): <what was documented>

<Description of documentation changes>

Updated sections:
- <Section 1>
- <Section 2>
```

## Performance Improvement
```
perf(<scope>): <short description>

<What was optimized and expected impact>

Metrics:
- Before: <metric>
- After: <metric>
- Improvement: <percentage>

Changes:
- <Optimization 1>
- <Optimization 2>
```

## Refactoring
```
refactor(<scope>): <short description>

<Why refactoring was needed>

Changes:
- <Structural change 1>
- <Structural change 2>

Note: No functional changes, tests still pass
```

## Breaking Change
```
feat(<scope>)!: <short description>

BREAKING CHANGE: <clear explanation of what breaks>

<Why this breaking change was necessary>

Migration guide:
1. <Step 1>
2. <Step 2>
3. <Step 3>

Affected: <who/what is affected>
```

## Chore/Maintenance
```
chore(<scope>): <short description>

<What maintenance was performed>

Updated:
- <Dependency/tool 1>
- <Dependency/tool 2>
```

---

## README Update Template

### When Adding a Feature

```markdown
### ✨ Features

[... existing features ...]

#### 🆕 <Feature Name>
- **<Sub-feature 1>** - Description
- **<Sub-feature 2>** - Description
- **<Sub-feature 3>** - Description

**Usage:**
\`\`\`javascript
// Example code showing how to use the feature
\`\`\`

**Benefits:**
- Benefit 1
- Benefit 2
```

### When Fixing a Bug

Update relevant section with:
```markdown
**Fixed in v<version>:**
- ✅ <Bug description> - Now works correctly
```

---

## Pre-Commit Checklist Template

```markdown
## Pre-Commit Checklist

### Security ✅
- [ ] No API keys in code (scanned by hook)
- [ ] No hardcoded secrets
- [ ] Sensitive files in .gitignore
- [ ] XSS protection in place (if user input)

### Code Quality ✅
- [ ] Code tested in browser
- [ ] No console.log() statements
- [ ] Error handling implemented
- [ ] Loading states for async operations
- [ ] Edge cases handled

### Documentation ✅
- [ ] README updated (if features changed)
- [ ] Inline comments for complex logic
- [ ] Function JSDoc comments added
- [ ] API changes documented

### Git Hygiene ✅
- [ ] Commit message follows conventional commits
- [ ] Only related files staged
- [ ] .gitignore updated (if needed)
- [ ] No merge conflicts
- [ ] Commits are atomic (one logical change)

### Testing ✅
- [ ] Tested in Chrome
- [ ] Tested in Firefox (if significant change)
- [ ] Tested on mobile view (if UI change)
- [ ] localStorage working correctly
- [ ] API integration working
```

---

## Feature Planning Template

```markdown
## 📋 Feature Plan: <Feature Name>

### Overview
**What:** <Brief description>
**Why:** <Reason for adding this>
**When:** <Timeline>

### Technical Details
**Type:** feat / fix / refactor / perf
**Scope:** <What part of app>
**Files to modify:**
- <file1>
- <file2>

**New dependencies:**
- <dependency> (if any)

**Breaking changes:**
- [ ] Yes - <explain>
- [x] No

### Implementation Steps
1. <Step 1>
2. <Step 2>
3. <Step 3>

### Documentation Updates Needed
- [ ] README Features section
- [ ] Inline code comments
- [ ] Usage examples
- [ ] Configuration docs

### Testing Checklist
- [ ] Unit tests (if applicable)
- [ ] Browser testing
- [ ] Mobile testing
- [ ] Edge case testing

### Commit Message Draft
\`\`\`
feat(<scope>): <description>

<body>
\`\`\`
```

---

## Self-Review Template (Critic Loop)

```markdown
## 🔍 Self-Review Checklist

### 1. ANALYZE
- [ ] HTML IDs match JavaScript selectors
- [ ] Event listeners properly attached
- [ ] Data flow is logical
- [ ] State management is correct

### 2. CRITICIZE
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Functions are single-purpose
- [ ] Variable names are descriptive
- [ ] No magic numbers/strings
- [ ] Proper error handling

### 3. VERIFY
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] Accessibility features present
- [ ] Security: XSS prevention
- [ ] Security: API key protection
- [ ] Performance: No unnecessary re-renders
- [ ] Edge cases handled

### 4. CORRECT
Issues found:
- <Issue 1> → <Fix>
- <Issue 2> → <Fix>

All issues resolved: [ ]
```

---

## Post-Commit Summary Template

```markdown
## ✅ Commit Summary

**Commit Hash:** <hash>
**Type:** <feat/fix/docs/etc>
**Scope:** <scope>

### Files Changed
- <file1> (+X/-Y lines)
- <file2> (+X/-Y lines)

### What Changed
<Brief description>

### Why
<Reason for change>

### Next Steps
- <Action item 1>
- <Action item 2>

### Testing Notes
<How to test this change>
```
