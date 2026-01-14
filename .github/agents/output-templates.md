# Developer-Friendly Output Templates

**Purpose:** Standardize agent outputs for maximum developer clarity and actionability

**Last Updated:** 2026-01-14

---

## Core Principles

1. **Scannable** - Developers should grasp status in < 3 seconds
2. **Actionable** - Clear next steps, no ambiguity
3. **Contextual** - Include relevant details, hide noise
4. **Consistent** - Same format across all agents
5. **Visual** - Use icons, colors, formatting effectively

---

## Universal Output Format

```markdown
[Agent Name] Icon Status Message
→ Sub-action 1 [progress indicator if applicable]
→ Sub-action 2
→ Sub-action 3

[Results Section with clear headers]

Next: [Clear next step or agent handoff]
```

---

## Icons & Indicators

### Agent Icons

| Agent | Icon | Meaning |
|-------|------|---------|
| Router | 🎯 | Directing traffic |
| Planner | 📋 | Planning & research |
| Investigator | 🔍 | Debugging & analysis |
| Implementer | ⚙️ | Building code |
| Critic | 🔎 | Quality review |
| Doc Writer | 📝 | Documentation |
| Committer | 💾 | Git operations |
| Privacy Shield | 🛡️ | Security scan |

### Status Indicators

| Icon | Meaning |
|------|---------|
| ✅ | Success / Passed |
| ⚠️ | Warning / Needs attention |
| ❌ | Error / Blocked |
| 🔴 | Critical issue |
| 🟠 | High priority |
| 🟡 | Medium priority |
| 🟢 | Low priority / Info |
| 🔄 | In progress |
| ⏸️ | Paused / Waiting |

### Progress Indicators

```
[Agent] ████████░░ 80% - Current action
[Agent] 🔄 Processing... (3/5 files analyzed)
[Agent] ⏳ Querying Context7...
```

---

## Agent-Specific Templates

### Router Agent Output

```markdown
🎯 ROUTER ANALYSIS

Request: "[user request verbatim]"

Intent Detected: [Feature Request / Bug Fix / Code Review / Documentation]
Complexity: [Low / Medium / High]
Estimated Time: [X minutes]

Routing Decision:
→ Primary Agent: [Agent Name]
→ Expected Workflow: [Agent1] → [Agent2] → [Agent3]
→ Quality Gates: [list automatic gates]

Reasoning: [1-2 sentence explanation]

---

Handoff to: [Agent Name]
```

### Planner Agent Output

```markdown
📋 FEATURE PLAN: [Feature Name]

## Quick Summary
Type: [feat/fix/refactor]
Files: [count] files
Complexity: [Low/Medium/High]
Time Estimate: [X min]

## Research Findings 🔍
Context7 Query: [library/framework]
✅ Best Practice: [summary]
✅ Browser Support: [version info]
⚠️ Security: [considerations]
♿ Accessibility: [requirements]

## Implementation Plan
1. [Step 1] - [File]
2. [Step 2] - [File]
3. [Step 3] - [File]

## Success Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Edge Cases to Handle
⚠️ [Case 1]
⚠️ [Case 2]
⚠️ [Case 3]

---

Ready for Implementation ✅
Handoff to: Implementer Agent
```

### Implementer Agent Output

```markdown
⚙️ IMPLEMENTATION: [Feature/Fix Name]

Status: 🔄 In Progress / ✅ Complete

Progress:
[Task 1] ✅ Complete
[Task 2] ✅ Complete  
[Task 3] 🔄 In Progress
[Task 4] ⏸️ Pending

Files Modified:
→ [file1.js] (+45, -12 lines)
→ [file2.html] (+8, -2 lines)
→ [file3.css] (+23, -5 lines)

Key Changes:
- [Change 1 description]
- [Change 2 description]
- [Change 3 description]

Testing:
✅ Tested on Chrome
✅ Tested on Firefox
✅ Tested on Safari
✅ Mobile responsive verified
✅ Keyboard navigation works

---

Implementation Complete ✅
Handoff to: Critic Agent
```

### Critic Agent Output

```markdown
🔎 CODE REVIEW: [Feature/Fix Name]

## Quick Summary
Files Reviewed: [count]
Issues Found: [count] ([critical]/[high]/[medium]/[low])
Overall Score: [X.X]/10
Verdict: ✅ APPROVED / ⚠️ NEEDS FIXES / ❌ BLOCKED

---

## Issues Found

### 🔴 Critical (Severity 0.9+)
None found ✅

### 🟠 High Priority (Severity 0.7-0.89)
None found ✅

### 🟡 Medium Priority (Severity 0.5-0.69)

**Issue #1: Missing ARIA Label**
📍 Location: index.html:45
📊 Severity: 0.6

Current Code:
```html
<button class="toggle">🌙</button>
```

Fix:
```html
<button class="toggle" aria-label="Toggle dark mode">🌙</button>
```

Action: Should fix before commit

### 🟢 Low Priority (Severity < 0.5)
[Issue #2 description]

---

## Quality Scores

| Category | Score | Status |
|----------|-------|--------|
| Security | 10/10 | ✅ |
| Performance | 9/10 | ✅ |
| Accessibility | 7/10 | ⚠️ |
| Code Quality | 9/10 | ✅ |
| **OVERALL** | **8.8/10** | **⚠️** |

---

## Recommendations

Must Fix:
- [ ] [None]

Should Fix:
- [ ] Add ARIA label (Issue #1)
- [ ] [Other fixes]

---

Decision: ⚠️ NEEDS MINOR FIXES
Handoff to: Implementer Agent (for fixes)
```

### Doc Writer Agent Output

```markdown
📝 DOCUMENTATION UPDATE: [Feature Name]

Status: ✅ Complete

Updated Sections:
→ README.md - Features section
→ README.md - Usage examples
→ script.js - Inline comments (3 functions)

---

## README Update Preview

### ✨ Features

#### 🆕 [Feature Name]
**Description:** [What it does in 1 sentence]

**Usage:**
```javascript
// Code example
```

**Benefits:**
- [Benefit 1]
- [Benefit 2]

---

## Inline Comments Added

[file.js:123-145]
```javascript
/**
 * [Function description]
 * @param {type} param - Description
 * @returns {type} Description
 */
```

---

Documentation Complete ✅
Handoff to: Committer Agent
```

### Committer Agent Output

```markdown
💾 COMMIT PREPARATION

## Privacy Shield Scan
🛡️ Scanning for exposed secrets...
→ Scanned 3 files
→ No secrets detected ✅
Safe to commit!

## Changes Summary
Files Changed: 3
Lines: +76, -18
Commits: Conventional format ✅

---

## Suggested Commit Message

```
feat(tasks): add date range filtering

Users can filter tasks by creation or due date.

- Add date picker component to UI
- Implement date filtering logic in renderTasks()
- Add UI controls for date range selection
- Persist filter state in localStorage
- Add accessibility improvements (ARIA labels)

BREAKING CHANGE: None
```

## Files to Commit
→ script.js (+45, -12)
→ index.html (+8, -2)
→ style.css (+23, -4)
→ README.md (+12, -0)

---

## Quality Gate Checklist
- [x] Privacy Shield passed
- [x] Conventional commit format
- [x] All related files included
- [x] Documentation updated
- [x] No debug code left

Ready to Commit ✅

Commit these changes? (y/n)
```

### Privacy Shield Output

```markdown
🛡️ PRIVACY SHIELD SCAN

Scanning for exposed secrets...

Files Scanned: 5
Patterns Checked: 8
Duration: 125ms

---

## Results

✅ **NO SECRETS DETECTED**

Checked patterns:
- [x] Google API keys (AIza...)
- [x] OpenAI keys (sk-...)
- [x] GitHub tokens (ghp_...)
- [x] Generic API keys
- [x] Passwords
- [x] AWS credentials
- [x] Private keys
- [x] OAuth tokens

All files clean! Safe to commit ✅

---

Proceed with commit? (y/n)
```

**OR IF SECRETS FOUND:**

```markdown
🛡️ PRIVACY SHIELD SCAN

⚠️ **SECRETS DETECTED - COMMIT BLOCKED**

---

## 🔴 Critical Issues Found

### Secret #1: Google API Key
📍 Location: script.js:12
🔍 Pattern: AIzaSyC1c1Mp8k9...
⚠️ Severity: CRITICAL

Current Code:
```javascript
const GEMINI_API_KEY = 'AIzaSyC1c1Mp8k9...';
```

Recommended Fix:
```javascript
// Load from Settings UI
const GEMINI_API_KEY = localStorage.getItem('gemini_api_key') || '';
```

---

### Secret #2: GitHub Token
📍 Location: .github/workflow.sh:45
🔍 Pattern: ghp_A1b2C3d4...
⚠️ Severity: CRITICAL

Recommended Fix:
Use GitHub Secrets instead of hardcoding.

---

## Action Required

❌ **COMMIT BLOCKED**

You must:
1. Remove all detected secrets
2. Use environment variables or Settings UI
3. Add secret files to .gitignore
4. Re-run commit

Never commit secrets to the repository!

---

Need help fixing this? (y/n)
```

---

## Multi-Agent Conversation Display

### Full Workflow Example

```markdown
═══════════════════════════════════════════════════════════
🤖 MULTI-AGENT WORKFLOW
═══════════════════════════════════════════════════════════

User Request: "Add dark mode toggle"

---

[Router] 🎯 Analyzing request...
→ Detected: Feature request
→ Complexity: Medium
→ Routing to: Planner Agent

┌─────────────────────────────────────────────────────────┐
│ Planner Agent → Implementer Agent                        │
└─────────────────────────────────────────────────────────┘

[Planner] 📋 Creating implementation plan...
→ Querying Context7 for CSS color-scheme best practices...
→ Research complete
→ Browser compatibility verified
→ Implementation plan ready ✅

Plan Summary:
- Use CSS variables + prefers-color-scheme
- 3 files to modify
- 8 success criteria defined

Handoff to: Implementer Agent

---

┌─────────────────────────────────────────────────────────┐
│ Implementer Agent → Critic Agent                         │
└─────────────────────────────────────────────────────────┘

[Implementer] ⚙️ Implementing dark mode...
→ Added CSS variables to style.css ✅
→ Added toggle button to header ✅
→ Added theme switching logic ✅
→ Tested on all viewports ✅
→ Tested keyboard navigation ✅

Changes:
- style.css (+45 lines)
- index.html (+12 lines)
- script.js (+38 lines)

Handoff to: Critic Agent

---

┌─────────────────────────────────────────────────────────┐
│ Critic Agent → Implementer Agent (Fix Loop)              │
└─────────────────────────────────────────────────────────┘

[Critic] 🔎 Reviewing implementation...
→ Security audit: ✅ Passed
→ Performance check: ✅ Passed
→ Accessibility audit: ⚠️ 1 issue found

Issue #1: Missing ARIA label on toggle button
Severity: 0.6 (Medium)
Action: Should fix

Overall Score: 8.8/10
Verdict: ⚠️ NEEDS MINOR FIX

Handoff to: Implementer Agent

---

[Implementer] ⚙️ Applying fix...
→ Added aria-label="Toggle dark mode" ✅

Handoff to: Critic Agent

---

┌─────────────────────────────────────────────────────────┐
│ Critic Agent → Doc Writer Agent                          │
└─────────────────────────────────────────────────────────┘

[Critic] 🔎 Re-reviewing...
→ All issues resolved ✅
→ Overall Score: 9.5/10
→ Verdict: ✅ APPROVED

Handoff to: Doc Writer Agent

---

┌─────────────────────────────────────────────────────────┐
│ Doc Writer Agent → Committer Agent                       │
└─────────────────────────────────────────────────────────┘

[Doc Writer] 📝 Updating documentation...
→ README Features section updated ✅
→ Usage example added ✅
→ Inline comments added (2 functions) ✅

Handoff to: Committer Agent

---

┌─────────────────────────────────────────────────────────┐
│ Committer Agent → Privacy Shield → Git                   │
└─────────────────────────────────────────────────────────┘

[Committer] 💾 Preparing commit...
→ Running Privacy Shield scan...

[Privacy Shield] 🛡️ Scanning...
→ 3 files scanned
→ No secrets detected ✅

[Committer] Generating commit message...

═══════════════════════════════════════════════════════════
✅ WORKFLOW COMPLETE
═══════════════════════════════════════════════════════════

SUGGESTED COMMIT:

feat(ui): add dark mode toggle

Users can switch between light and dark themes.

- Add theme toggle button in header
- Implement CSS color-scheme with variables
- Persist preference in localStorage
- Support prefers-color-scheme media query
- Add ARIA labels for accessibility

FILES:
- style.css (+45, -0)
- index.html (+12, -0)
- script.js (+38, -0)
- README.md (+15, -0)

QUALITY SCORE: 9.5/10
AGENTS INVOLVED: 5 (Router, Planner, Implementer, Critic, Doc Writer, Committer)
TOTAL TIME: 2.3 minutes

───────────────────────────────────────────────────────────

Ready to commit? (y/n) _
```

---

## Progress Indicators

### Simple Progress Bar

```
[Agent] ████████░░ 80% - Analyzing code quality
```

### Detailed Progress

```
[Critic] Reviewing Implementation...

Security Audit:     ████████████ 100% ✅
Performance Check:  ████████████ 100% ✅
Accessibility:      ████████░░░░  75% 🔄
Code Quality:       ░░░░░░░░░░░░   0% ⏳
Edge Cases:         ░░░░░░░░░░░░   0% ⏳

Overall: 35% complete
```

### File Processing

```
[Implementer] Processing files...

script.js        ✅ Complete (+45, -12)
index.html       ✅ Complete (+8, -2)
style.css        🔄 In Progress...
README.md        ⏳ Pending

2/4 files processed
```

---

## Error & Warning Messages

### Error Format

```markdown
❌ ERROR: [Error Title]

What Happened:
[Clear explanation of what went wrong]

Why It Happened:
[Root cause analysis]

How to Fix:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Need Help? [Link to docs or support]
```

### Warning Format

```markdown
⚠️ WARNING: [Warning Title]

Issue:
[Description of the concern]

Impact:
[What could go wrong if ignored]

Recommendation:
[Suggested action]

Continue Anyway? (y/n) _
```

---

## Color Coding (Terminal)

When possible, use ANSI colors for emphasis:

- **Green:** Success, passed checks
- **Yellow:** Warnings, needs attention
- **Red:** Errors, critical issues
- **Blue:** Information, progress updates
- **Cyan:** Agent names, headers
- **Magenta:** User prompts, questions

---

## Accessibility Considerations

1. **Don't rely solely on color** - Use icons + text
2. **Screen reader friendly** - Meaningful text descriptions
3. **Structured headings** - Proper markdown hierarchy
4. **Clear links** - Descriptive link text
5. **Alt text for diagrams** - Mermaid diagrams have text descriptions

---

## Best Practices

### Do's ✅

- Use consistent formatting across all agents
- Include progress indicators for long operations
- Provide actionable next steps
- Use emojis/icons for quick visual scanning
- Keep summaries concise (< 5 lines)
- Include relevant code snippets
- Show file paths clearly
- Highlight breaking changes

### Don'ts ❌

- Don't use walls of text
- Don't hide critical information
- Don't use ambiguous language
- Don't overuse emojis (max 1-2 per line)
- Don't skip quality scores
- Don't omit file change counts
- Don't assume context - always clarify

---

## Customization

Teams can customize output templates by:

1. Editing agent config files (.github/agents/*.md)
2. Adjusting verbosity level (minimal / standard / verbose)
3. Choosing icon sets (emoji / ASCII / none)
4. Setting output format (markdown / JSON / plain text)

---

**These templates ensure developers get clear, actionable output from every agent interaction.** ✨
