# Git Hooks

This directory contains git hooks for the Orion Daily AI Assistant repository.

## Available Hooks

### `pre-commit` - Privacy Shield
**Purpose:** Blocks commits containing exposed secrets and API keys

**Detects:**
- Google API keys (AIza...)
- OpenAI keys (sk-...)
- GitHub tokens (ghp_, gho_, github_pat_...)
- Generic secrets in code

**Action on detection:**
- ❌ Blocks the commit
- Shows matched patterns
- Suggests fixes

### `commit-msg` - Conventional Commits
**Purpose:** Enforces conventional commit message format

**Required format:**
```
type(scope): description
```

**Valid types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `perf:` - Performance
- `test:` - Tests
- `chore:` - Maintenance

**Examples:**
```bash
feat: add dark mode toggle
fix(tasks): resolve save issue
docs: update README
```

## Installation

### Automatic (Recommended)
```bash
./.githooks/install.sh
```

### Manual
```bash
cp .githooks/pre-commit .git/hooks/pre-commit
cp .githooks/commit-msg .git/hooks/commit-msg
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/commit-msg
```

## Bypassing Hooks

**⚠️ Not recommended** - Only use if you're absolutely sure

```bash
git commit --no-verify
```

## Troubleshooting

### Hook not running
```bash
# Verify hook is executable
ls -la .git/hooks/pre-commit
# Should show -rwxr-xr-x

# If not, make it executable
chmod +x .git/hooks/pre-commit
```

### False positive detection
If Privacy Shield incorrectly detects a secret:
1. Verify it's not actually a secret
2. If it's documentation/example, it may be safe to bypass
3. Consider rewording to avoid the pattern

## Integration

These hooks are part of the AI Agent Workflow system. They work together with:
- VS Code tasks (Privacy Shield Scan)
- .github/workflow.sh script
- AI agent automation rules

**See:** [../.github/AI_AGENT_WORKFLOW.md](../.github/AI_AGENT_WORKFLOW.md) for complete workflow
