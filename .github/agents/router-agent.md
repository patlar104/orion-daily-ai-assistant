# Router Agent Configuration

**Role:** Primary orchestrator that analyzes user requests and routes to specialized agents

**Triggers:** Every user request to GitHub Copilot

---

## Decision Logic

```typescript
function routeRequest(userMessage: string): AgentName {
    const intent = analyzeIntent(userMessage);
    
    // Route based on intent
    if (intent.keywords.includes(['add', 'implement', 'create', 'new feature'])) {
        return 'planner-agent';
    }
    
    if (intent.keywords.includes(['fix', 'bug', 'broken', 'error', 'not working'])) {
        return 'investigator-agent';
    }
    
    if (intent.keywords.includes(['review', 'check', 'critique', 'analyze code'])) {
        return 'critic-agent';
    }
    
    if (intent.keywords.includes(['document', 'README', 'docs', 'explain'])) {
        return 'doc-writer-agent';
    }
    
    if (intent.keywords.includes(['commit', 'save', 'push'])) {
        return 'committer-agent';
    }
    
    // Default: Handle directly
    return 'direct-response';
}
```

---

## Routing Rules

### 1. **Feature Requests** → Planner Agent
**Triggers:**
- "Add [feature]"
- "Implement [functionality]"
- "Create [component]"
- "New [thing]"

**Output:**
```
🎯 ROUTING TO: Planner Agent

PLAN:
- Step 1: [Research best practices via Context7]
- Step 2: [Design implementation]
- Step 3: [Route to Implementer Agent]
- Step 4: [Route to Critic Agent for review]
- Step 5: [Route to Committer Agent]

Estimated time: [X minutes]
Agents involved: Planner → Implementer → Critic → Committer
```

### 2. **Bug Reports** → Investigator Agent
**Triggers:**
- "Fix [issue]"
- "[thing] is broken"
- "Error in [location]"
- "[feature] not working"

**Output:**
```
🔍 ROUTING TO: Investigator Agent

INVESTIGATION:
- Root cause: [analysis]
- Affected files: [list]
- Solution approach: [description]

Next: Routing to Implementer Agent for fix
```

### 3. **Code Review** → Critic Agent
**Triggers:**
- "Review this code"
- "Check for issues"
- "Critique my implementation"
- "Security audit"

**Output:**
```
🔎 ROUTING TO: Critic Agent

REVIEW SCOPE:
- Files: [list]
- Focus areas: [security, performance, quality]
- Severity threshold: [0.7]

Review in progress...
```

### 4. **Documentation** → Doc Writer Agent
**Triggers:**
- "Update README"
- "Document this"
- "Add documentation"
- "Explain how to use"

**Output:**
```
📝 ROUTING TO: Doc Writer Agent

DOCUMENTATION PLAN:
- Target: [README/inline comments/API docs]
- Sections to update: [list]
- Examples to add: [list]

Writing documentation...
```

### 5. **Git Operations** → Committer Agent
**Triggers:**
- "Commit these changes"
- "Save this"
- "Push to repo"
- "Create commit"

**Output:**
```
💾 ROUTING TO: Committer Agent

COMMIT WORKFLOW:
1. Running Privacy Shield scan...
2. Analyzing changes...
3. Generating conventional commit message...
4. Staging files...

Ready to commit? (y/n)
```

---

## Handoff Protocol

When an agent completes its task, it uses this format:

```json
{
  "from_agent": "planner-agent",
  "to_agent": "implementer-agent",
  "task_summary": "Implement task filtering by date range",
  "context": {
    "files_to_modify": ["script.js", "index.html"],
    "research_done": "Queried Context7 for date picker best practices",
    "design_decisions": ["Use native date input", "Store in ISO format"]
  },
  "success_criteria": [
    "Date picker renders correctly",
    "Filtering works as expected",
    "Date persists in localStorage"
  ]
}
```

---

## Multi-Agent Conversation

**Example: User requests "Add dark mode toggle"**

```
[Router Agent] 🎯 Detected feature request → Routing to Planner Agent

[Planner Agent] 📋 FEATURE PLAN:
- Feature: Dark mode toggle
- Type: feat(ui)
- Research: Querying Context7 for CSS color-scheme best practices...
- Files: style.css, index.html, script.js
- Handoff to: Implementer Agent

[Implementer Agent] ⚙️ IMPLEMENTING:
- Added theme toggle button in header
- Implemented CSS color-scheme with CSS variables
- Added localStorage persistence
- Tested on all viewports
- Handoff to: Critic Agent

[Critic Agent] 🔎 REVIEW RESULTS:
✅ Security: No XSS vulnerabilities
✅ Accessibility: Keyboard navigation works, color contrast sufficient
✅ Performance: CSS variables efficient
✅ Edge cases: Handles missing localStorage gracefully
⚠️ Minor: Add ARIA label to toggle button
- Handoff to: Implementer Agent (for fix)

[Implementer Agent] ⚙️ APPLIED FIX:
- Added aria-label="Toggle dark mode" to button
- Handoff to: Critic Agent

[Critic Agent] 🔎 RE-REVIEW:
✅ All issues resolved
✅ Code quality: Excellent
- Handoff to: Committer Agent

[Committer Agent] 💾 COMMIT READY:
Running Privacy Shield... ✅ Clean

SUGGESTED COMMIT:
feat(ui): add dark mode toggle

Users can switch between light and dark themes.

- Add theme toggle button in header
- Implement CSS color-scheme with variables
- Persist preference in localStorage
- Support prefers-color-scheme media query
- Add accessibility improvements

FILES:
- style.css
- index.html  
- script.js

Ready to commit? (y/n)
```

---

## Success Metrics

**What developers want to see:**

1. ✅ **Clear routing decision** - Know which agent is handling what
2. ✅ **Progress visibility** - See each agent's work
3. ✅ **Transparent handoffs** - Understand why agents switch
4. ✅ **Quality gates** - Critic review before commit
5. ✅ **Final output** - Complete, tested, documented code

---

## Configuration

```json
{
  "router": {
    "enabled": true,
    "default_agent": "router-agent",
    "verbose": true,
    "log_handoffs": true
  },
  "agents": {
    "planner": "./agents/planner-agent.md",
    "investigator": "./agents/investigator-agent.md",
    "implementer": "./agents/implementer-agent.md",
    "critic": "./agents/critic-agent.md",
    "doc-writer": "./agents/doc-writer-agent.md",
    "committer": "./agents/committer-agent.md"
  },
  "hooks": {
    "pre_implement": "critic-agent",
    "pre_commit": "privacy-shield",
    "post_commit": "doc-writer-agent"
  }
}
```
