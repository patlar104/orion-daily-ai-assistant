# Contributing to Daily AI Assistant

Thank you for your interest in contributing! This project uses an optimized AI agent workflow with automated quality checks and documentation.

## 🚀 Quick Start

**See the full workflow guide:** [AI Agent Workflow Guide](.github/AI_AGENT_WORKFLOW.md)

### Development

```bash
# Start local server
Cmd+Shift+B    # or npm run serve

# Run quality checks
Cmd+Shift+T    # Privacy scan + ESLint + Markdown lint
```

### Working with AI Agent

**Just ask naturally:**
```
"Add task filtering by category"
"Fix the bug where tasks don't save"
"Improve mobile responsiveness"
```

The AI agent will:
1. ✅ Research best practices (Context7)
2. ✅ Implement the feature
3. ✅ Run security & quality checks
4. ✅ Update documentation
5. ✅ Generate conventional commits

## 📋 Workflow Rules

**Privacy Shield** - All commits scanned for secrets:
- Google API keys (AIza...)
- OpenAI keys (sk-...)
- GitHub tokens (ghp_...)
- Hardcoded secrets

**Conventional Commits:**
```
feat: new feature
fix: bug fix
docs: documentation
style: formatting/CSS
refactor: code restructuring
perf: performance
test: tests
chore: maintenance
```

**Pre-commit Checklist:**
- [ ] No secrets in code
- [ ] Code tested in browser
- [ ] No debug console.log()
- [ ] README updated (if features changed)
- [ ] Commit message follows format

## 📚 Documentation

Key files:
- [AI Agent Workflow](.github/AI_AGENT_WORKFLOW.md) - Complete reference
- [Copilot Instructions](.github/copilot-instructions.md) - AI rules
- [AI Assistant Rules](.github/AI_ASSISTANT_RULES.md) - Detailed automation
- [Critic Rules](.github/CRITIC_RULES.md) - Code review guide

## 🛠️ Tools Available

**VS Code Tasks** (`Cmd+Shift+P` → "Tasks: Run Task"):
- Start Local Server
- Privacy Shield Scan
- Lint JavaScript
- Lint Markdown
- Run All Quality Checks
- Interactive Commit

## 💡 Example Contributions

### Adding a Feature
```
You: "Add dark mode toggle"

AI Agent:
1. Query Context7 for CSS best practices
2. Implement using latest standards
3. Test on all devices
4. Update README
5. Generate commit message
```

### Fixing a Bug
```
You: "Tasks aren't saving"

AI Agent:
1. Search for related code
2. Identify root cause
3. Implement fix with error handling
4. Run tests
5. Generate commit
```

## 🔒 Privacy Commitments

- ❌ No API keys committed
- ❌ No hardcoded secrets
- ✅ All credentials in localStorage or .env
- ✅ Pre-commit hook blocks exposed keys
- ✅ Security review enforced

## ✨ Code Quality

**Event Handling:**
- ✅ Use event delegation with data attributes
- ❌ Never use inline `onclick` attributes

**Input Handling:**
- Always sanitize user input
- Use `textContent` instead of `innerHTML` for data
- Validate localStorage data

**Error Handling:**
- Wrap API calls in try-catch
- Provide friendly error messages
- Log errors for debugging

## 🧪 Testing

Before committing:
```bash
1. Test in Chrome
2. Test on mobile view (UI changes)
3. Test localStorage (data changes)
4. Test API integration (API changes)
5. Verify responsive design
```

## 📖 Documentation Standards

**Every feature needs:**
- README section in Features list
- Inline code comments (complex logic)
- Usage examples
- Configuration options (if any)

**Every commit includes:**
- Why the change was made
- What was changed
- Any side effects

## 🎯 Success Criteria

Every change should:
- ✅ Pass Privacy Shield scan
- ✅ Follow conventional commit format
- ✅ Include updated documentation
- ✅ Work on all device sizes
- ✅ Handle errors gracefully
- ✅ Be accessible
- ✅ Be performant

## 📞 Questions?

**See these files for detailed guidance:**
- [AI Agent Workflow](.github/AI_AGENT_WORKFLOW.md) - How the workflow works
- [Critic Rules](.github/CRITIC_RULES.md) - Code review checklist
- [AI Assistant Rules](.github/AI_ASSISTANT_RULES.md) - Automation rules

---

**Thanks for contributing!** 🚀

Focus on features. The AI agent handles quality, security, and documentation.

