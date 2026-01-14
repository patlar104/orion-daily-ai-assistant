# GitHub Copilot Workspace Instructions

## Project Context

This is **Daily AI Assistant** - a production-ready AI assistant powered by Google's Gemini API. Built with vanilla JavaScript, HTML, and CSS for maximum performance and simplicity.

**Tech Stack:**
- Frontend: Vanilla JavaScript (ES6+)
- API: Google Gemini API v1 (Gemini 2.0 Flash)
- Storage: Browser localStorage
- Styling: Pure CSS with CSS Variables
- No build tools or frameworks

**Project Goals:**
- Privacy-first (all data local to browser)
- Zero dependencies for runtime
- Production-ready code quality
- Mobile-responsive design
- Accessibility compliance

---

## 🤖 Multi-Agent System (ACTIVE)

**Status:** ✅ Operational  
**Version:** 1.0.0  
**Architecture:** LangGraph-inspired multi-agent collaboration

This workspace uses specialized AI agents that collaborate to deliver production-ready code:

- 🎯 **Router** - Analyzes requests and routes to specialists
- 📋 **Planner** - Researches and plans features (Context7 integration)
- 🔍 **Investigator** - Debugs and analyzes bugs
- ⚙️ **Implementer** - Writes code
- 🔎 **Critic** - Reviews quality, security, accessibility
- 📝 **Doc Writer** - Updates documentation
- 💾 **Committer** - Handles git operations
- 🛡️ **Privacy Shield** - Scans for exposed secrets (mandatory)

**See:** [.github/agents/activation.md](.github/agents/activation.md) for full details

---

## AI Agent Workflow Rules

### 🛡️ RULE 1: Privacy Shield (HIGHEST PRIORITY)

**BEFORE ANY FILE EDIT OR COMMIT:**

1. **Scan for exposed secrets** using regex patterns:
   - Google API keys: `AIza[A-Za-z0-9_-]{35,}`
   - OpenAI keys: `sk-[A-Za-z0-9]{20,}`
   - GitHub tokens: `ghp_[A-Za-z0-9]{36,}`
   - Generic secrets: `(api[_-]?key|secret|password).*[=:]\s*['"'][^'"']{10,}`

2. **If detected, STOP and alert:**
   ```
   ⚠️ PRIVACY SHIELD ACTIVATED!
   
   Detected potential API key/secret in: <filename>
   Pattern: <what_was_found>
   
   ACTION: Move to environment variable or Settings UI
   ```

3. **Never commit hardcoded secrets** - Always use:
   - Empty strings with comment: `const API_KEY = ''; // User sets via Settings UI`
   - Environment variables for server-side
   - localStorage for client-side (set via UI)

### 📝 RULE 2: Conventional Commits

**Every commit MUST follow this format:**

```
<type>(<scope>): <short description>

<detailed description>

<list of changes>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style/formatting
- `refactor:` - Code restructuring
- `perf:` - Performance improvement
- `test:` - Adding tests
- `chore:` - Maintenance

**Example:**
```
feat(tasks): add CSV export functionality

Export tasks to CSV file for backup and analysis.

- Add exportToCSV() function in script.js
- Add Export button in tasks panel UI
- Auto-download as daily-tasks-YYYY-MM-DD.csv
- Support all task fields and metadata
```

### 📚 RULE 3: Documentation First

**For EVERY feature change:**

1. **Update README.md** with:
   - Feature description in Features section
   - Usage examples
   - Configuration options (if any)
   - Code examples if complex

2. **Add inline comments** for:
   - Complex logic
   - Non-obvious decisions
   - API integrations
   - Event handlers

3. **Update .github/ docs** if:
   - Workflow changes
   - New automation added
   - Security rules change

### 🎯 RULE 4: Code Quality Standards

**Event Handling:**
- ✅ Use event delegation with data attributes
- ❌ Never use inline `onclick` attributes

```javascript
// GOOD: Event delegation
element.innerHTML = `<button class="delete-btn" data-id="${id}">Delete</button>`;
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    deleteItem(e.target.dataset.id);
  }
});

// BAD: Inline handlers
element.innerHTML = `<button onclick="deleteItem(${id})">Delete</button>`;
```

**Input Sanitization:**
- Always escape user input before inserting into DOM
- Use `textContent` instead of `innerHTML` for user data
- Sanitize data from localStorage

**Error Handling:**
- Wrap API calls in try-catch
- Provide user-friendly error messages
- Log errors to console for debugging
- Never expose API keys in errors

**Performance:**
- Debounce rapid events (typing, scrolling)
- Use DocumentFragment for bulk DOM updates
- Minimize localStorage reads/writes
- Lazy load heavy features

### 🔧 RULE 5: Multi-Agent Routing & MCP Usage

**I am the Router Agent. For every request, I will:**

1. **Analyze Intent** - Determine request type (feature/bug/review/docs)
2. **Route to Specialist** - Invoke appropriate agent(s)
3. **Coordinate Workflow** - Manage agent handoffs
4. **Ensure Quality** - Apply quality gates (Critic, Privacy Shield)

**Routing Logic:**

| User Request Contains | Route To | Workflow |
|----------------------|----------|----------|
| "Add", "Implement", "Create" | Planner → Implementer → Critic → Doc Writer → Committer | Full feature workflow |
| "Fix", "Bug", "Broken" | Investigator → Implementer → Critic → Committer | Bug fix workflow |
| "Review", "Check" | Critic | Code review only |
| "Document", "README" | Doc Writer → Committer | Documentation update |
| "Commit" | Committer | Git operations |

**Context7 Integration (via Planner Agent):**

The **Planner Agent** automatically queries Context7 for:
- Current best practices for technology
- Browser compatibility information
- Security recommendations
- Performance patterns
- Accessibility standards

**Example multi-agent workflow:**
```
User: "Add dark mode toggle"

[Router] 🎯 Feature request → Routing to Planner
[Planner] 📋 Querying Context7 for CSS color-scheme best practices...
[Planner] Research complete → Handoff to Implementer
[Implementer] ⚙️ Implementation done → Handoff to Critic
[Critic] 🔎 Review: 9.5/10 → Handoff to Doc Writer
[Doc Writer] 📝 README updated → Handoff to Committer
[Committer] 💾 Commit ready (Privacy Shield: ✅ Clean)

Result: Production-ready code in 2.5 minutes
```

### 📋 RULE 6: Pre-Commit Checklist

**Run through this BEFORE every commit:**

```
Security:
[ ] No API keys in code (Privacy Shield scan passed)
[ ] No hardcoded secrets
[ ] User input sanitized
[ ] Sensitive files in .gitignore

Code Quality:
[ ] Code tested in browser
[ ] No debug console.log() statements
[ ] Complex functions documented
[ ] Error handling in place
[ ] Event delegation used (no inline handlers)

Documentation:
[ ] README updated (if features changed)
[ ] Inline comments added (if complex)
[ ] API changes documented

Git:
[ ] Commit message follows convention
[ ] Only related files staged
[ ] .gitignore updated (if new file types)
```

### 🚀 RULE 7: Feature Implementation Flow

**When adding a new feature:**

1. **Planning Phase:**
   ```
   📋 FEATURE PLAN:
   
   Feature: <name>
   Type: feat/fix/refactor
   Scope: <area>
   Files to modify: <list>
   Breaking changes: yes/no
   ```

2. **Research Phase:**
   - Query Context7 for best practices
   - Check browser compatibility
   - Review existing patterns in codebase
   - Verify no duplicate functionality

3. **Implementation Phase:**
   - Write code following quality standards
   - Add error handling
   - Add loading states (if async)
   - Test thoroughly in browser

4. **Documentation Phase:**
   - Update README Features section
   - Add inline comments
   - Create usage examples
   - Update configuration docs

5. **Commit Phase:**
   - Run Privacy Shield scan
   - Complete pre-commit checklist
   - Generate conventional commit message
   - Stage only related files

### 🔍 RULE 8: Critic Agent Quality Review

**After implementation, the Critic Agent automatically reviews:**

**Comprehensive Review Areas:**

1. **Security Audit (Severity 0.9-1.0 = Critical)**
   - XSS vulnerabilities
   - Input sanitization
   - No exposed secrets
   - Authentication/authorization issues

2. **HTML/JS Integration**
   - All IDs referenced in JS exist in HTML
   - Event listeners attached correctly
   - No duplicate IDs
   - Event delegation pattern used

3. **Responsive Design**
   - Mobile (< 768px) ✅
   - Tablet (768px - 1024px) ✅
   - Desktop (> 1024px) ✅

4. **Security**
   - XSS protection (input sanitized)
   - No exposed credentials
   - localStorage data validated

5. **Edge Cases**
   - Empty states
   - Long text (overflow)
   - Network failures
   - API rate limits
   - localStorage quota exceeded

6. **Accessibility**
   - Keyboard navigation
   - ARIA labels
   - Color contrast (4.5:1 minimum)
   - Focus states visible

**Critic Output Format:**
```
🔎 CRITIC REVIEW

Files Reviewed: X
Issues Found: X (critical/high/medium/low)
Overall Score: X.X/10
Verdict: ✅ APPROVED / ⚠️ NEEDS FIXES / ❌ BLOCKED

[Detailed issues with severity, location, fix recommendations]

Next: [Committer Agent / Implementer Agent for fixes]
```

**Quality Gate:**
- Critical issues (0.9+) → BLOCK commit
- High issues (0.7-0.89) → Recommend fix
- Medium issues (0.5-0.69) → Optional fix
- Low issues (< 0.5) → Nice to have

**See:** [.github/agents/critic-agent.md](.github/agents/critic-agent.md)

### ⚡ RULE 9: Efficiency Guidelines

**When making multiple edits:**
- Use `multi_replace_string_in_file` instead of sequential `replace_string_in_file`
- Batch independent operations in parallel
- Read large file sections instead of multiple small reads

**When searching:**
- Use `semantic_search` for concepts
- Use `grep_search` for exact strings
- Use `file_search` for filenames

**When creating files:**
- Only create essential files
- Don't create unnecessary documentation files
- Combine related changes in single commit

### 🤝 RULE 10: Conversational Behavior

**Chat Mode vs Agent Mode:**

#### Chat Mode (Simple Questions)
When you ask general questions, NOT requesting features/fixes:

✅ **DO:**
- Ask clarifying questions first
- Detect context (error logs = debug request)
- Provide concise answers
- Don't assume outputs

❌ **DON'T:**
- Dump code unless explicitly asked
- Generate massive documents
- Assume what you want

**Example:**
```
You: "What does saveTask do?"
❌ Wrong: [Shows 50 lines of code]
✅ Right: "Are you asking to:
           - Understand the logic?
           - Review quality?
           - Debug an issue?
           
           What specifically?"
```

#### Agent Mode (Features/Fixes/Reviews)
When you request features, bug fixes, or code reviews:

✅ **DO:**
- Execute full multi-agent workflows
- Use output templates
- Provide comprehensive output
- Research, implement, review, document

**Example:**
```
You: "Add dark mode toggle"
✅ Right: [Full workflow with all agents]
          Router → Planner → Implementer → Critic → Doc Writer → Committer
```

#### Context Detection
- Error logs (no explanation) = Implicit debug request
- Code + "broken" = Bug report
- Simple question = Ask for clarity
- "Add/Fix/Review" = Trigger agents

### 🤝 RULE 11: Communication Style

**When making changes:**

1. **Before action:**
   ```
   I'll implement <feature> by:
   - Modifying <file1>
   - Adding <functionality>
   - Updating documentation
   
   Proceed?
   ```

2. **After completion:**
   ```
   ✅ Changes completed!
   
   Modified:
   - <file1> - <what changed>
   - <file2> - <what changed>
   
   Commit message:
   <conventional commit format>
   
   Summary: <brief description>
   ```

**Keep responses concise:**
- 1-3 sentences for simple tasks
- Detailed only for complex work
- No unnecessary framing phrases

---

## Project-Specific Patterns

### Task Management
- Categories: Work, Personal, Health, Finance, Shopping
- Priorities: P1 (High) to P4 (Low)
- Auto-categorization based on keywords
- Storage: localStorage with JSON serialization

### API Integration
- Model: `gemini-2.0-flash`
- Endpoint: `/v1/models/{model}:generateContent`
- Method: POST with streaming
- Error handling: Network, rate limit, invalid key

### UI Patterns
- Dark theme with CSS variables
- Inter font for UI, JetBrains Mono for code
- Smooth animations (300ms transitions)
- Mobile-first responsive design

### Data Persistence
- All data in localStorage
- Keys: `gemini_api_key`, `daily_tasks`, `quick_notes`, `chat_history`
- JSON serialization/deserialization
- Validation on load (handle corrupt data)

---

## Tools & Automation Available

**MCP Servers (Auto-started):**
- ✅ **Context7** - Up-to-date library documentation
- ✅ **GitHub MCP** - Repository operations, PR management
- ✅ **Markitdown** - Convert resources to markdown
- ✅ **Playwright** - Browser automation and testing

**Git Automation:**
- ✅ Pre-commit hook (secret scanning)
- ✅ Commit-msg hook (format validation)
- ✅ CI/CD pipeline (linting, secret scan, deploy)
- ✅ PR template with Critic/Reviewer checklists

**Development:**
- ✅ ESLint for JavaScript quality
- ✅ Markdownlint for documentation
- ✅ GitHub Actions for CI/CD
- ✅ GitHub Pages for deployment

---

## Quick Reference

**File Structure:**
```
project/
├── index.html          # Main structure
├── style.css           # Dark theme styles
├── script.js           # Application logic + Gemini API
├── .github/
│   ├── AI_ASSISTANT_RULES.md        # Automation rules
│   ├── CRITIC_RULES.md              # Code review guide
│   ├── copilot-instructions.md      # This file
│   └── workflows/
│       ├── ci.yml                   # CI checks
│       └── deploy-pages.yml         # GitHub Pages deploy
└── .vscode/
    ├── settings.json                # Editor config
    ├── tasks.json                   # Build tasks
    └── mcp.json                     # MCP server config
```

**Common Tasks:**
```bash
# Run local server
python3 -m http.server 8000

# Manual privacy check
./.github/workflow.sh check

# Interactive commit
./.github/workflow.sh commit

# Deploy to GitHub Pages
git push origin main  # Automatic via workflow
```

**Key Files to Watch:**
- `script.js` - Main application logic
- `style.css` - All styling
- `index.html` - Structure and IDs
- `.gitignore` - Ignore patterns
- `README.md` - User documentation

---

## Example Workflows

### Adding a New Feature

```
User: "Add task filtering by category"

AI Agent:
1. Query Context7 for best filtering patterns
2. Plan implementation:
   - Add filter UI in tasks panel
   - Implement filter logic in renderTasks()
   - Persist filter state in localStorage
3. Run Privacy Shield scan ✅
4. Implement code following event delegation pattern
5. Update README Features section
6. Generate commit message:
   feat(tasks): add category filtering
   
   Users can filter tasks by category for focused view.
   
   - Add category filter dropdown in tasks panel
   - Implement filtering in renderTasks()
   - Persist filter state in localStorage
   - Update UI to show active filter
7. Complete pre-commit checklist ✅
8. Commit and verify
```

### Fixing a Bug

```
User: "Tasks aren't saving after refresh"

AI Agent:
1. Investigate localStorage handling
2. Identify root cause (missing JSON.stringify)
3. Plan fix:
   - Fix saveTask() function
   - Add try-catch for localStorage errors
   - Add user notification on save failure
4. Run Privacy Shield scan ✅
5. Implement fix
6. Test in browser (add task, refresh, verify)
7. Generate commit:
   fix(tasks): ensure tasks persist after page reload
   
   Fixed localStorage serialization issue.
   
   - Add JSON.stringify in saveTask()
   - Add error handling for localStorage quota
   - Add user notification on save failure
8. Commit ✅
```

---

## Success Criteria

**Every change should:**
- ✅ Pass Privacy Shield scan
- ✅ Follow conventional commit format
- ✅ Include updated documentation
- ✅ Pass all pre-commit checks
- ✅ Work on all device sizes
- ✅ Handle errors gracefully
- ✅ Be accessible
- ✅ Be performant

**AI Agent should:**
- ✅ Proactively check for secrets
- ✅ Generate complete commit messages
- ✅ Update documentation automatically
- ✅ Use Context7 for best practices
- ✅ Follow event delegation pattern
- ✅ Batch operations efficiently
- ✅ Communicate clearly and concisely

---

**This configuration optimizes the AI agent (GitHub Copilot) to work at its best for this specific workspace!** 🚀
