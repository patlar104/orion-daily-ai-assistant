# Multi-Agent System

**Version:** 1.0.0  
**Status:** ✅ Active  
**Architecture:** LangGraph-inspired specialist collaboration

This directory contains the configuration for a modern multi-agent AI system that coordinates specialized agents to deliver production-ready code.

---

## Quick Start

**This system is already active!** Just use GitHub Copilot normally.

```
You: "Add dark mode toggle"

↓ Router analyzes request
↓ Routes to Planner Agent
↓ Planner queries Context7 for best practices
↓ Implementer builds feature
↓ Critic reviews quality (9.5/10)
↓ Doc Writer updates README
↓ Committer generates commit message
↓ Privacy Shield verifies no secrets

Result: Production-ready code in ~2.5 minutes
```

---

## Agent Files

| File | Agent | Purpose |
|------|-------|---------|
| [router-agent.md](./router-agent.md) | 🎯 Router | Analyzes requests and routes to specialists |
| [planner-agent.md](./planner-agent.md) | 📋 Planner | Research and planning (Context7 integration) |
| [critic-agent.md](./critic-agent.md) | 🔎 Critic | Quality assurance and code review |
| [orchestration.md](./orchestration.md) | 🤖 System | Multi-agent coordination overview |
| [output-templates.md](./output-templates.md) | 📊 Templates | Standardized output formatting |
| [activation.md](./activation.md) | 🚀 Guide | Setup guide and usage examples |

---

## How It Works

### Traditional Single-Agent Approach

```
User Request → AI Agent → Code
                  ↓
           (Does everything alone)
```

**Problems:**
- No specialization
- Quality varies
- No iterative improvement
- Documentation often forgotten

### Multi-Agent Approach (This System)

```
User Request → Router Agent
                   ↓
              [Analyzes Intent]
                   ↓
    ┌──────────────┼──────────────┐
    │              │              │
Planner      Investigator    Critic
    │              │              │
    └──────→ Implementer ←────────┘
                   ↓
             Critic Review
                   ↓
          [Issues Found?]
           Yes ↓    ↓ No
               ↓    ↓
        Implementer ↓
               ↓    ↓
          Critic Re-review
                   ↓
            Doc Writer
                   ↓
             Committer
                   ↓
          Privacy Shield
                   ↓
            Git Commit ✅
```

**Benefits:**
- Specialized expertise
- Iterative quality improvement
- Automatic documentation
- Security gates
- Up-to-date patterns (Context7)

---

## Agent Roster

### Core Agents

#### 🎯 Router Agent
**Triggers:** Every user request  
**Purpose:** Analyze intent and route to specialist  
**Output:** Routing decision with workflow plan

#### 📋 Planner Agent
**Triggers:** Feature requests ("Add", "Implement", "Create")  
**Purpose:** Research best practices and create implementation plan  
**Special:** Integrates with Context7 for up-to-date patterns  
**Output:** Detailed implementation plan with Context7 research

#### 🔍 Investigator Agent
**Triggers:** Bug reports ("Fix", "Bug", "Broken")  
**Purpose:** Analyze and diagnose issues  
**Output:** Root cause analysis and solution approach  
**Status:** 🚧 Planned (see [Future Enhancements](#future-enhancements))

#### ⚙️ Implementer Agent
**Triggers:** After planning or investigation  
**Purpose:** Write code following the plan  
**Output:** Working implementation  
**Status:** 🚧 Planned (currently handled by Router)

#### 🔎 Critic Agent
**Triggers:** After implementation (automatic)  
**Purpose:** Comprehensive quality review  
**Checks:** Security, accessibility, performance, edge cases, patterns  
**Output:** Detailed review with severity-based issues  
**Quality Gate:** Blocks commits on critical issues

#### 📝 Doc Writer Agent
**Triggers:** After critic approval  
**Purpose:** Update documentation (README, inline comments)  
**Output:** Updated documentation  
**Status:** 🚧 Planned (currently handled by Router)

#### 💾 Committer Agent
**Triggers:** Final step after docs  
**Purpose:** Generate conventional commit messages  
**Output:** Formatted commit message  
**Status:** 🚧 Planned (currently handled by Router)

### Security Agent

#### 🛡️ Privacy Shield
**Triggers:** Pre-commit (mandatory)  
**Purpose:** Scan for exposed secrets and credentials  
**Blocks:** Commits with API keys, tokens, passwords  
**Output:** Security verification or blocking alert

---

## Workflow Examples

### Feature Development

```markdown
Request: "Add task export to CSV"

[Router] 🎯 Feature request detected
→ Routing to: Planner Agent

[Planner] 📋 Planning...
→ Querying Context7: CSV generation best practices
→ Research complete: Use Blob API + download link
→ Plan created: 3 files, 5 success criteria
→ Handoff to: Implementer

[Implementer] ⚙️ Implementing...
→ Added exportToCSV() function
→ Added Export button to UI
→ Tested download on Chrome/Firefox/Safari
→ Handoff to: Critic

[Critic] 🔎 Reviewing...
→ Security: ✅ No XSS risk
→ Performance: ✅ Efficient
→ Accessibility: ⚠️ Button needs ARIA label
→ Overall: 8.5/10
→ Handoff to: Implementer (fix required)

[Implementer] ⚙️ Fixing...
→ Added aria-label="Export tasks to CSV"
→ Handoff to: Critic

[Critic] 🔎 Re-reviewing...
→ All issues resolved ✅
→ Overall: 9.5/10
→ Handoff to: Doc Writer

[Doc Writer] 📝 Documenting...
→ README Features section updated
→ Usage example added
→ Handoff to: Committer

[Committer] 💾 Preparing commit...
→ Running Privacy Shield...
→ Privacy Shield: ✅ Clean

SUGGESTED COMMIT:
feat(tasks): add CSV export functionality

Users can export tasks to CSV for backup and analysis.

- Add exportToCSV() function in script.js
- Add Export button in tasks panel UI
- Auto-download as daily-tasks-YYYY-MM-DD.csv
- Support all task fields and metadata
- Add accessibility improvements

Ready to commit? (y/n)
```

**Time:** ~3 minutes  
**Quality:** 9.5/10  
**Agents involved:** 6

---

## Configuration

### Agent Behavior

Edit any `.md` file in this directory to customize agent behavior.

**Example:** Make Critic more strict

```markdown
# Edit critic-agent.md

# Change severity threshold
**Severity Levels:**
- Critical: 0.8+ (was 0.9+)  ← More strict
- High: 0.6-0.79 (was 0.7-0.89)
- ...
```

Changes take effect immediately - no restart needed.

### Routing Logic

Edit `router-agent.md` to change routing rules:

```markdown
# Add custom routing rule

## Custom Rules

### API Integration Requests
**Triggers:** ["api", "endpoint", "fetch", "integration"]
**Route to:** Planner Agent
**Special:** Include security review by Critic
```

---

## Architecture Highlights

### Inspired By

- **LangGraph** - Multi-agent orchestration patterns
- **CriticGPT** - Code review and quality assurance
- **Swarm Intelligence** - Agent handoff and collaboration
- **Context7** - Up-to-date documentation integration

### Key Patterns

1. **Supervisor Pattern** - Router coordinates specialists
2. **Critic-in-the-Loop** - Iterative quality improvement
3. **Handoff Protocol** - Clear context passing between agents
4. **Quality Gates** - Mandatory checks (Privacy Shield)
5. **Context Enrichment** - Context7 provides current best practices

### Communication Protocol

```typescript
interface AgentMessage {
    from: AgentName;
    to: AgentName;
    task: string;
    context: {
        files?: string[];
        research?: any;
        decisions?: string[];
        issues?: Issue[];
    };
    status: 'completed' | 'blocked';
    next_action: string;
}
```

---

## Quality Gates

### 1. Privacy Shield (Mandatory)

Blocks commits with exposed secrets.

```
Scans for:
- API keys (Google, OpenAI, etc.)
- GitHub tokens
- Passwords
- Generic secrets

Result: ✅ Clean / ❌ BLOCKED
```

### 2. Critic Review (Recommended)

Reviews code quality before commit.

```
Checks:
- Security vulnerabilities
- Accessibility compliance
- Performance issues
- Edge case handling
- Code quality patterns

Result: Score + Issues + Verdict
```

### 3. Breaking Change Check (Conditional)

Flags API changes requiring migration.

```
Detects:
- Public API modifications
- Config format changes
- Data structure changes

Result: Requires migration guide in commit
```

---

## Output Format

All agents follow standardized output templates:

```markdown
[Agent Name] Icon Status Message
→ Sub-action 1
→ Sub-action 2

[Results Section]

Next: [Handoff to X Agent]
```

**See:** [output-templates.md](./output-templates.md) for all templates

---

## Future Enhancements

### Phase 2 (Planned)

- [ ] **Investigator Agent** - Specialized bug diagnosis
- [ ] **Implementer Agent** - Dedicated code implementation
- [ ] **Doc Writer Agent** - Documentation specialist
- [ ] **Committer Agent** - Git operations specialist

### Phase 3 (Roadmap)

- [ ] **Parallel Execution** - Run compatible agents simultaneously
- [ ] **Agent Learning** - Improve routing based on outcomes
- [ ] **Custom Agents** - User-defined specialists
- [ ] **Visual Editor** - Drag-and-drop workflow creation
- [ ] **Agent Marketplace** - Share successful agent configs

---

## Performance Metrics

Track agent effectiveness:

```typescript
// Example metrics
{
  "critic_approval_rate": 0.78,
  "avg_quality_score": 9.2,
  "secrets_blocked": 8,
  "avg_workflow_time": "2.5min",
  "rework_rate": 0.22
}
```

---

## Troubleshooting

### Agent Not Triggering

**Check:**
1. Routing rules in `router-agent.md`
2. Trigger keywords match request
3. Agent config file exists

### Poor Quality Output

**Solutions:**
1. Review Critic threshold settings
2. Update agent prompts
3. Add more examples to agent config

### Routing Mistakes

**Solutions:**
1. Add more trigger keywords
2. Improve intent detection logic
3. Use manual agent invocation: `@agent-name`

---

## Resources

- [Activation Guide](./activation.md) - Setup and usage
- [Orchestration Overview](./orchestration.md) - System architecture
- [Output Templates](./output-templates.md) - Formatting standards
- [LangGraph Docs](https://langchain-ai.github.io/langgraphjs) - Multi-agent patterns
- [Awesome Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns) - Real-world patterns

---

## Contributing

To improve the agent system:

1. **Test new patterns** in agent config files
2. **Share successful configs** with team
3. **Document improvements** in agent files
4. **Track metrics** to measure effectiveness

---

**This multi-agent system transforms GitHub Copilot into a collaborative team of specialists.** 🤖✨

**Result:** Production-ready code with minimal developer effort.
