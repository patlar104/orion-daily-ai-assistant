# AI Agent Workflow Quick Reference

## What This Setup Does

Your workspace now has an **optimized AI agent workflow** that:

1. **Automatically uses MCP servers** for up-to-date documentation (Context7)
2. **Integrates with GitHub** for PR/issue management
3. **Enforces security** with Privacy Shield scanning
4. **Maintains code quality** with automated linting
5. **Follows conventional commits** for clean git history
6. **Updates documentation** automatically

---

## MCP Servers Available

Your AI agent (me) can now use these tools:

### 1. Context7 (`io.github.upstash/context7`)
**Purpose:** Get up-to-date library and framework documentation

**How I use it:**
- Before suggesting code patterns, I query Context7 for current best practices
- When recommending libraries, I verify they're up-to-date
- For security-sensitive code, I check latest recommendations

**Example:**
```
You: "Add dark mode toggle"
Me: [Queries Context7 for CSS color-scheme best practices]
    → Implements using current standard
    → References documentation in comments
```

### 2. GitHub MCP (`io.github.github/github-mcp-server`)
**Purpose:** Repository operations, PR management, issue tracking

**How I use it:**
- Check PR status and reviews
- Create issues for tracked work
- Search repository code
- Manage branches and commits

### 3. Markitdown (`microsoft/markitdown`)
**Purpose:** Convert various file formats to markdown

**How I use it:**
- Process documentation files
- Convert resources for better context
- Parse external documents

### 4. Playwright (`microsoft/playwright-mcp`)
**Purpose:** Browser automation and testing

**How I use it:**
- Test UI changes in browser
- Verify responsive design
- Automate end-to-end tests

---

## VS Code Tasks

Run these tasks via Command Palette (`Cmd+Shift+P` → "Tasks: Run Task"):

### Development Tasks

1. **Start Local Server** (Default Build Task: `Cmd+Shift+B`)
   - Starts Python HTTP server on port 8000
   - Access at `http://localhost:8000`
   - Runs in background

2. **Start MCP Servers**
   - Auto-runs when folder opens
   - Initializes all MCP connections
   - Silent execution

### Quality Assurance Tasks

1. **Privacy Shield Scan**
   - Scans for hardcoded API keys/secrets
   - Blocks commits with exposed credentials
   - Run before committing sensitive changes

2. **Lint JavaScript**
   - Checks `script.js` for code quality issues
   - Uses ESLint with best practices
   - Shows problems in Problems panel

3. **Lint Markdown**
   - Validates all `.md` files
   - Ensures documentation quality
   - Checks links and formatting

4. **Run All Quality Checks** (Default Test Task: `Cmd+Shift+T`)
   - Runs Privacy Shield + JavaScript lint + Markdown lint
   - Comprehensive pre-commit verification
   - Use before opening PRs

### Git Tasks

1. **Interactive Commit**
   - Opens commit helper with templates
   - Guides conventional commit format
   - Includes privacy checks

---

## How the AI Agent Works Now

### When You Ask for a Code Change

**Step 1: Planning**
```
Me: 📋 FEATURE PLAN:
    - Feature: <what you asked for>
    - Files to modify: <list>
    - MCP servers to use: <Context7, GitHub, etc.>
    - Privacy check: <status>
```

**Step 2: Research (Using Context7)**
```
Me: [Queries Context7 for best practices]
    → Found current pattern for <feature>
    → Verifying browser compatibility
    → Checking security recommendations
```

**Step 3: Implementation**
```
Me: [Implements code following best practices]
    → Added feature with error handling
    → Used event delegation pattern
    → Included loading states
```

**Step 4: Quality Checks**
```
Me: [Runs automated checks]
    ✅ Privacy Shield scan passed
    ✅ ESLint checks passed
    ✅ Responsive design verified
    ✅ Accessibility tested
```

**Step 5: Documentation**
```
Me: [Updates documentation]
    ✅ README Features section updated
    ✅ Inline comments added
    ✅ Usage examples included
```

**Step 6: Commit**
```
Me: SUGGESTED COMMIT MESSAGE:
    feat(scope): short description
    
    Detailed explanation of changes.
    
    - Change 1
    - Change 2
    
    Ready to commit? (y/n)
```

### When You Report a Bug

**Step 1: Investigation**
```
Me: [Uses semantic search to find related code]
    → Found issue in <file>:<line>
    → Root cause: <explanation>
```

**Step 2: Context Research**
```
Me: [Queries Context7 for solution patterns]
    → Recommended fix: <pattern>
    → Best practice: <reference>
```

**Step 3: Fix + Test**
```
Me: [Implements fix]
    → Fixed <issue>
    → Added error handling
    → Tested edge cases
```

**Step 4: Verification**
```
Me: [Runs quality checks]
    ✅ Bug fixed
    ✅ Tests pass
    ✅ No regressions
```

---

## Privacy Shield (Automatic Protection)

**What it does:**
- Scans all files before commits
- Blocks any exposed API keys/secrets
- Suggests secure alternatives

**Patterns detected:**
```regex
- AIza[A-Za-z0-9_-]{35,}      # Google API keys
- sk-[A-Za-z0-9]{20,}          # OpenAI keys
- ghp_[A-Za-z0-9]{36,}         # GitHub tokens
- api[_-]?key.*[=:]\s*['"]    # Generic API keys
```

**If detected:**
```
⚠️ PRIVACY SHIELD ACTIVATED!

Detected: Google API key in script.js:12
Pattern: AIzaSyC1c1...

ACTION REQUIRED:
- Move to environment variable
- Use empty string in code
- Set via Settings UI

SUGGESTED FIX:
const API_KEY = ''; // User sets via Settings UI
```

---

## Conventional Commits (Enforced)

**Format:**
```
<type>(<scope>): <description>

<body>

<footer>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `perf:` - Performance
- `test:` - Tests
- `chore:` - Maintenance

**Example:**
```
feat(tasks): add CSV export

Users can export tasks to CSV for backup.

- Add exportToCSV() function
- Add Export button in UI
- Auto-download with date in filename
```

---

## File Structure

```
project/
├── .vscode/
│   ├── settings.json              # AI-optimized editor config
│   ├── tasks.json                 # Automated tasks
│   └── mcp.json                   # MCP server configuration
├── .github/
│   ├── copilot-instructions.md    # AI agent rules (THIS FILE)
│   ├── AI_ASSISTANT_RULES.md      # Detailed automation rules
│   ├── CRITIC_RULES.md            # Code review guidelines
│   └── workflows/
│       ├── ci.yml                 # CI/CD pipeline
│       └── deploy-pages.yml       # GitHub Pages deploy
├── index.html                     # Main app structure
├── style.css                      # Styling
├── script.js                      # App logic + Gemini API
└── README.md                      # User documentation
```

---

## Best Practices for Working with AI Agent

### Do's ✅

1. **Ask for features in natural language**
   ```
   "Add task filtering by category"
   "Fix the bug where tasks don't save"
   "Improve mobile responsiveness"
   ```

2. **Let the AI handle documentation**
   - README updates
   - Inline comments
   - Commit messages

3. **Use Context7 for modern patterns**
   - AI queries automatically
   - Gets latest best practices
   - Ensures up-to-date code

4. **Trust the quality checks**
   - Privacy Shield blocks secrets
   - ESLint catches code issues
   - Markdown lint ensures docs quality

5. **Review suggested commits**
   - Conventional format enforced
   - All changes documented
   - Breaking changes flagged

### Don'ts ❌

1. **Don't bypass Privacy Shield**
   ```bash
   # Never do this with secrets:
   git commit --no-verify
   ```

2. **Don't hardcode secrets**
   ```javascript
   // BAD:
   const API_KEY = 'AIzaSyC1c1...';
   
   // GOOD:
   const API_KEY = ''; // User sets via Settings UI
   ```

3. **Don't skip documentation updates**
   - AI handles it automatically
   - Keeps docs in sync with code

4. **Don't use inline event handlers**
   ```javascript
   // BAD:
   element.innerHTML = `<button onclick="fn()">Click</button>`;
   
   // GOOD:
   element.innerHTML = `<button class="btn" data-id="1">Click</button>`;
   container.addEventListener('click', handleClick);
   ```

---

## Keyboard Shortcuts

### VS Code
- `Cmd+Shift+B` - Run default build task (Start Local Server)
- `Cmd+Shift+T` - Run default test task (All Quality Checks)
- `Cmd+Shift+P` - Command Palette
- `Cmd+K Cmd+S` - Keyboard Shortcuts reference

### Git (with AI assistance)
- Ask: "Commit these changes with privacy check"
- AI runs Privacy Shield → generates commit → stages files → commits

---

## Commit Types Reference

| Type | Use For | Example |
|------|---------|---------|
| `feat:` | New feature | "feat: add voice input to chat" |
| `fix:` | Bug fix | "fix: resolve task not saving" |
| `docs:` | Documentation | "docs: update README features" |
| `style:` | Formatting, CSS | "style: fix button alignment" |
| `refactor:` | Code restructuring | "refactor: extract API module" |
| `perf:` | Performance | "perf: optimize task filtering" |
| `test:` | Tests/testing | "test: add unit tests" |
| `chore:` | Maintenance | "chore: update dependencies" |

---

## Pre-Commit Checklist

**Run through before every commit:**

### Security
- [ ] No API keys in code (Privacy Shield scan)
- [ ] No hardcoded secrets or passwords
- [ ] User input properly sanitized
- [ ] Sensitive files in .gitignore

### Code Quality
- [ ] Code tested in browser
- [ ] No debug console.log() statements
- [ ] Error handling implemented
- [ ] Loading states for async operations
- [ ] Edge cases handled

### Documentation
- [ ] README updated (if features changed)
- [ ] Inline comments for complex logic
- [ ] Function JSDoc comments added
- [ ] API changes documented

### Git Hygiene
- [ ] Commit message follows conventional format
- [ ] Only related files staged
- [ ] .gitignore updated (if needed)
- [ ] No merge conflicts
- [ ] Commits are atomic (one logical change)

---

## Troubleshooting

### MCP Servers Not Starting
```bash
# Check MCP server status
cat ~/.vscode-insiders/User/mcp.json

# Verify credentials
# Context7: CONTEXT7_API_KEY
# GitHub: GITHUB_TOKEN
```

### Privacy Shield False Positive
```
If hook blocks a safe commit:
1. Review the detected pattern
2. If it's documentation/example, it's safe
3. Use: git commit --no-verify (only if sure)
```

### Tasks Not Running
```
# Reload VS Code window
Cmd+Shift+P → "Developer: Reload Window"

# Check tasks.json syntax
Cmd+Shift+P → "Tasks: Run Task" → verify list
```

### Context7 Not Working
```
# Verify API key is set
Check: .vscode/mcp.json → inputs → CONTEXT7_API_KEY

# Restart MCP servers
Reload VS Code window
```

---

## Example Workflows

### Adding a Feature
```
You: "Add dark mode toggle"

Me: 📋 Planning feature...
    [Queries Context7 for CSS color-scheme]
    [Implements using prefers-color-scheme]
    [Tests on all devices]
    [Updates README]
    [Generates commit]
    
    ✅ Ready to commit!
    feat(ui): add dark mode toggle
    
    Users can switch between light and dark themes.
    
    - Add theme toggle button in header
    - Implement CSS color-scheme
    - Persist preference in localStorage
    - Support prefers-color-scheme media query
```

### Fixing a Bug
```
You: "Tasks aren't saving"

Me: 🔍 Investigating...
    [Searches codebase for saveTask]
    [Identifies missing JSON.stringify]
    [Queries Context7 for localStorage best practices]
    [Implements fix with error handling]
    [Tests edge cases]
    
    ✅ Fixed!
    fix(tasks): ensure tasks persist after reload
    
    Fixed localStorage serialization issue.
    
    - Add JSON.stringify in saveTask()
    - Add error handling for quota exceeded
    - Add user notification on save failure
```

---

## Commit Message Examples (This Project)

### Features
```bash
feat: add task due date picker
feat: implement dark/light theme toggle
feat: add export tasks to CSV functionality
feat: integrate voice-to-text for chat input
feat(tasks): add category filtering

# With detailed description:
feat(ui): add dark mode toggle

Users can switch between light and dark themes.

- Add theme toggle button in header
- Implement CSS color-scheme
- Persist preference in localStorage
- Support prefers-color-scheme media query
```

### Fixes
```bash
fix: resolve task checkbox not updating state
fix: correct API error handling for rate limits
fix: prevent XSS in task descriptions
fix: fix mobile responsive layout overflow

# With detailed description:
fix(tasks): ensure tasks persist after reload

Fixed localStorage serialization issue.

- Add JSON.stringify in saveTask()
- Add error handling for quota exceeded
- Add user notification on save failure
```

### Documentation
```bash
docs: add API rate limiting information
docs: update installation steps for Windows
docs: add troubleshooting section to README
docs: document keyboard shortcuts
```

### Other Types
```bash
# Refactoring
refactor: extract API calls into separate module
refactor: simplify task categorization logic

# Performance
perf: optimize API calls with caching
perf: reduce bundle size by 20%

# Maintenance
chore: update .gitignore for build files
chore: upgrade to Gemini 2.0 Flash

# Style/formatting
style: improve mobile responsiveness
style: update color scheme for accessibility
```

---

## What Changed?

### Before This Setup
- No MCP servers configured
- Basic VS Code settings
- Manual commit messages
- No automated quality checks
- Limited AI context

### After This Setup
- ✅ 4 MCP servers configured and auto-started
- ✅ AI-optimized VS Code settings
- ✅ Automated commit message generation
- ✅ Comprehensive quality checks
- ✅ Rich AI context from Context7
- ✅ GitHub integration for PR/issues
- ✅ Privacy Shield protection
- ✅ Conventional commits enforced
- ✅ Documentation auto-updated

---

## Next Steps

1. **Reload VS Code** to activate all changes:
   ```
   Cmd+Shift+P → "Developer: Reload Window"
   ```

2. **Test the workflow:**
   ```
   Ask: "Add a simple feature to test the workflow"
   → Watch the AI agent use MCP servers
   → See automated quality checks
   → Review generated commit message
   ```

3. **Run quality checks:**
   ```
   Cmd+Shift+T
   → Runs all quality checks
   → Verifies everything works
   ```

4. **Try the local server:**
   ```
   Cmd+Shift+B
   → Starts server on port 8000
   → Open http://localhost:8000
   ```

---

**Your AI agent is now optimized and ready to work!** 🚀

All MCP servers are configured, quality checks are automated, and documentation is maintained automatically.

Just ask for what you need, and the AI agent will:
- Research best practices (Context7)
- Implement the feature
- Run quality checks
- Update documentation
- Generate proper commits

**Focus on ideas. Let the AI handle the execution.** ✨
