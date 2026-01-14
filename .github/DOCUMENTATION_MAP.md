# Documentation Map - Consolidated & Organized

**Last Updated:** January 14, 2026

Your workflow documentation has been consolidated and organized into a clear hierarchy. Here's what goes where:

**🔄 For recent changes:** See [REFACTOR_SUMMARY.md](../REFACTOR_SUMMARY.md) for the latest repository refactor details.

---

## 🎯 Core Workflow (Start Here)

### [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) - **PRIMARY GUIDE**
**For:** Day-to-day development with AI agent

**Contains:**
- ✅ MCP servers explained (Context7, GitHub, Markitdown, Playwright)
- ✅ VS Code tasks reference (with keyboard shortcuts)
- ✅ How the AI agent works
- ✅ Privacy Shield details
- ✅ Pre-commit checklist
- ✅ Commit types reference table
- ✅ Commit message examples for this project
- ✅ Example workflows (feature + bug fix)
- ✅ Best practices (Do's & Don'ts)
- ✅ Troubleshooting guide
- ✅ Keyboard shortcuts

**When to read:** First thing when starting development

---

## 🤖 AI Agent Configuration

### [copilot-instructions.md](copilot-instructions.md)
**For:** AI agent behavior and rules

**Contains:**
- ✅ 10 mandatory workflow rules
- ✅ Privacy Shield protocol
- ✅ Conventional commit format
- ✅ Code quality standards
- ✅ Event handling patterns
- ✅ MCP & Context7 usage
- ✅ Pre-commit checklist
- ✅ Feature implementation flow
- ✅ Self-review (Critic Loop)
- ✅ Efficiency guidelines
- ✅ Communication style

**When to read:** Understanding AI agent constraints and behavior

---

### [AI_ASSISTANT_RULES.md](AI_ASSISTANT_RULES.md)
**For:** Detailed automation rules (reference)

**Contains:**
- ✅ Detailed breakdown of all 11 automation rules
- ✅ Example regex patterns for secret detection
- ✅ Breaking change protocol
- ✅ Code quality patterns with examples
- ✅ Incremental commit strategies
- ✅ Documentation standards
- ✅ User communication templates

**When to read:** Deep dive into how AI agent works

---

## 📋 Templates & Examples

### [TEMPLATES.md](TEMPLATES.md)
**For:** Copy-paste commit and planning templates

**Contains:**
- ✅ Commit message templates (all types)
- ✅ README update templates
- ✅ Feature planning template
- ✅ Self-review checklist
- ✅ Post-commit summary template

**When to read:** Need a template for something

---

## 👥 Code Review & Contribution

### [CRITIC_RULES.md](CRITIC_RULES.md)
**For:** Code review and self-critique

**Contains:**
- ✅ Critic checklist (author self-review)
- ✅ Reviewer checklist (peer review)
- ✅ Prompt templates for reviews
- ✅ Code patterns & best practices
- ✅ Event delegation examples
- ✅ No suppression principle

**When to read:** Reviewing code or doing self-review

---

### [../CONTRIBUTING.md](../CONTRIBUTING.md)
**For:** Contributing to the project

**Contains:**
- ✅ Quick start (tasks, server, AI agent)
- ✅ Workflow rules summary
- ✅ Privacy commitments
- ✅ Code quality requirements
- ✅ Testing checklist
- ✅ Documentation standards
- ✅ Success criteria

**When to read:** Contributing changes to the project

---

## 🔍 Quick References

### [../SETUP_COMPLETE.md](../SETUP_COMPLETE.md)
**For:** What was configured in the AI workflow setup

**Contains:**
- ✅ Summary of all changes made
- ✅ Before/after comparison
- ✅ How to use the new setup
- ✅ Files changed list
- ✅ Next steps

**When to read:** Understanding the setup changes

---

### [AUTOMATION_QUICKSTART.md](AUTOMATION_QUICKSTART.md)
**For:** Quick overview of automated systems

**Contains:**
- ✅ Links to main documentation
- ✅ Key points summary
- ✅ Quick start tasks

**When to read:** Need quick orientation

---

## 📚 Complete Documentation Structure

```
project/
├── README.md                          # Main project overview
├── CONTRIBUTING.md                    # How to contribute
├── SETUP_COMPLETE.md                  # Setup summary
│
├── .github/
│   ├── DOCUMENTATION_MAP.md           # THIS FILE
│   ├── copilot-instructions.md        # AI agent rules
│   ├── AI_AGENT_WORKFLOW.md           # PRIMARY: Day-to-day guide
│   ├── AI_ASSISTANT_RULES.md          # Detailed automation rules
│   ├── CRITIC_RULES.md                # Code review guide
│   ├── TEMPLATES.md                   # Copy-paste templates
│   ├── AUTOMATION_QUICKSTART.md       # Quick reference
│   ├── PULL_REQUEST_TEMPLATE.md       # PR template
│   ├── CODEOWNERS                     # Default reviewers
│   ├── workflow.sh                    # Helper script
│   └── workflows/                     # GitHub Actions
│       ├── ci.yml                     # CI pipeline
│       └── deploy-pages.yml           # Deployment
│
└── .vscode/
    ├── settings.json                  # AI-optimized editor config
    ├── tasks.json                     # Automated tasks
    └── mcp.json                       # MCP server config
```

---

## 🗺️ Documentation by Use Case

### "I want to add a feature"
1. Read: [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) → Example Workflows section
2. Ask: "Add [feature] to the app"
3. AI agent handles everything

### "I want to fix a bug"
1. Read: [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) → Troubleshooting
2. Ask: "Fix [bug description]"
3. AI agent handles everything

### "I need to review code"
1. Read: [CRITIC_RULES.md](CRITIC_RULES.md) → Critic/Reviewer checklist
2. Apply checklist to PR changes
3. Provide feedback

### "I'm contributing changes"
1. Read: [CONTRIBUTING.md](../CONTRIBUTING.md)
2. Read: [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md)
3. Follow the workflow

### "I need to commit changes"
1. Read: [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) → Commit Types Reference
2. Or copy template from: [TEMPLATES.md](TEMPLATES.md)
3. Follow conventional commits format

### "I want to understand the workflow"
1. Start: [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) → "How the AI Agent Works"
2. Deep dive: [copilot-instructions.md](copilot-instructions.md) → Workflow Rules
3. Details: [AI_ASSISTANT_RULES.md](AI_ASSISTANT_RULES.md)

### "I need to check something quickly"
1. Check: [AUTOMATION_QUICKSTART.md](AUTOMATION_QUICKSTART.md)
2. Or: [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) table of contents
3. Or: [TEMPLATES.md](TEMPLATES.md) for templates

---

## 📊 Documentation Changes Made

### Created (New Files)
- ✅ [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) - Consolidated, comprehensive guide
- ✅ [copilot-instructions.md](copilot-instructions.md) - Workspace AI rules
- ✅ [DOCUMENTATION_MAP.md](DOCUMENTATION_MAP.md) - THIS FILE
- ✅ [../SETUP_COMPLETE.md](../SETUP_COMPLETE.md) - Setup summary
- ✅ [../vscode/mcp.json](../../.vscode/mcp.json) - MCP server config
- ✅ [../vscode/settings.json](../../.vscode/settings.json) - AI-optimized settings
- ✅ [../vscode/tasks.json](../../.vscode/tasks.json) - Automation tasks

### Updated (Consolidated)
- ✅ [AUTOMATION_QUICKSTART.md](AUTOMATION_QUICKSTART.md) - Now links to main guides
- ✅ [../.github-workflow-quick-ref.md](../.github-workflow-quick-ref.md) - Now links to main guides
- ✅ [TEMPLATES.md](TEMPLATES.md) - Now has introductory note
- ✅ [../CONTRIBUTING.md](../CONTRIBUTING.md) - Completely rewritten, much clearer
- ✅ [../README.md](../README.md) - Added AI Agent Workflow section

### Kept (Unchanged Purpose)
- ✅ [AI_ASSISTANT_RULES.md](AI_ASSISTANT_RULES.md) - Detailed reference
- ✅ [CRITIC_RULES.md](CRITIC_RULES.md) - Code review guide
- ✅ [PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md) - PR checklist

---

## 🎯 Key Points

**Primary Guide:** [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md)
- 90% of your needs answered here
- All tasks explained with examples
- Troubleshooting included

**AI Agent Rules:** [copilot-instructions.md](copilot-instructions.md)
- How AI agent behaves
- What it will/won't do
- Communication style

**Automation Rules:** [AI_ASSISTANT_RULES.md](AI_ASSISTANT_RULES.md)
- Deep technical details
- Reference only (usually not needed)
- For understanding the "why"

**Code Review:** [CRITIC_RULES.md](CRITIC_RULES.md)
- Self-review checklist
- Peer review checklist
- Code patterns

**Contributing:** [../CONTRIBUTING.md](../CONTRIBUTING.md)
- How to contribute
- What the workflow expects
- Quality standards

**Templates:** [TEMPLATES.md](TEMPLATES.md)
- Copy-paste ready
- All commit types
- Planning templates

---

## ⚡ Quick Commands

```bash
# Start development
Cmd+Shift+B              # Start local server (port 8000)
Cmd+Shift+T              # Run quality checks
Cmd+Shift+P              # Command palette

# View documentation
open .github/AI_AGENT_WORKFLOW.md        # Main guide
open .github/copilot-instructions.md     # AI rules
open CONTRIBUTING.md                     # Contributing guide
```

---

## 💡 Remember

- **Use AI Agent:** Ask for features naturally
- **AI Does:** Research, implementation, testing, docs, commits
- **You Focus On:** Ideas and direction
- **Privacy:** Automatic secret scanning on every commit
- **Quality:** Automatic checks on every commit
- **Docs:** Automatically maintained

---

**Everything is documented and consolidated.** 🎉

Start with [AI_AGENT_WORKFLOW.md](AI_AGENT_WORKFLOW.md) and ask the AI agent for what you need!
