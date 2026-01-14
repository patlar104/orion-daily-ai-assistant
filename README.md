# 🤖 Daily AI Assistant

A modern, production-ready AI assistant powered by Google's Gemini API. Built with vanilla JavaScript for maximum performance and simplicity.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)
![CI](https://github.com/patlar104/orion-daily-ai-assistant/actions/workflows/ci.yml/badge.svg?branch=main)
![Pages](https://img.shields.io/github/deployments/patlar104/orion-daily-ai-assistant/github-pages?label=pages)

Live: <https://patlar104.github.io/orion-daily-ai-assistant/>

## ✨ Features

### 🎯 Core Functionality

- **AI Chat Interface** - Powered by Gemini 2.0 Flash (latest 2025 model)
- **Multi-turn Conversations** - Context-aware responses with conversation memory
- **Real-time Responses** - Streaming-like interface with loading states

### 📋 Smart Task Management

- **Auto-categorization** - Automatically sorts tasks into 5 categories:
  - 💼 Work
  - 👤 Personal
  - 💪 Health
  - 💰 Finance
  - 🛒 Shopping
- **Priority Scoring** - Intelligent P1 (High) to P4 (Low) assignment
- **Task Completion Tracking** - Check off tasks and see progress
- **Persistent Storage** - All tasks saved in browser localStorage

### 📝 Productivity Tools

- **Quick Notes** - Capture ideas instantly
- **Chat History** - Access previous conversations
- **Quick Actions** - One-click prompts for:
  - 📊 Summarize
  - 💡 Brainstorm
  - ✨ Generate
  - 📅 Schedule
  - 🔍 Analyze

### 🎨 Design & UX

- **Dark Theme** - Premium UI inspired by modern AI tools
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Google Fonts** - Clean Inter typography
- **Smooth Animations** - Polished interactions

### 🔒 Privacy & Security

- **Local-first** - All data stored in your browser
- **No Backend** - Direct API calls to Gemini
- **XSS Protection** - All user input sanitized
- **API Key Security** - Keys stored in localStorage only

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Gemini API key ([Get one free here](https://makersuite.google.com/app/apikeys))

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Start a local server**

   ```bash
   # Using npm (recommended)
   npm run serve
   
   # Or using VS Code task (Cmd+Shift+B)
   ```

3. **Open in browser**

   ```
   http://localhost:8000
   ```

4. **Add your API key**
   - Click the ⚙️ Settings button (bottom left)
   - Paste your Gemini API key
   - Click Save

That's it! Start chatting with your AI assistant.

## 📦 Deployment (GitHub Pages)

The repo ships with an automated Pages workflow that publishes the static site on every push to `main`.

1. In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main` (or manually run **Deploy static site to GitHub Pages** under **Actions**).
3. The workflow builds nothing (pure static) and uploads the root folder. The deployment URL is visible in the job summary.

Notes:

- Secrets aren't required because everything is static and client-side.
- If you change the default branch, update `branches: ["main"]` in `.github/workflows/deploy-pages.yml`.

## 🤖 AI Agent Workflow (Optimized)

**Your workspace is now configured for optimal AI agent collaboration!**

### What's Configured

- ✅ **MCP Servers** - Context7, GitHub, Markitdown, Playwright (auto-started)
- ✅ **Privacy Shield** - Automatic secret scanning before commits
- ✅ **Conventional Commits** - Automated commit message generation
- ✅ **Code Quality** - ESLint + Markdownlint integration
- ✅ **Documentation** - Auto-updated README and inline comments
- ✅ **VS Code Tasks** - One-command dev server, linting, security checks

### Quick Start with AI Agent

```bash
# Start local development (Cmd+Shift+B)
→ Launches server on port 8000

# Run quality checks (Cmd+Shift+T)
→ Privacy scan + ESLint + Markdown lint

# Ask for features naturally
"Add task filtering by category"
→ AI researches best practices (Context7)
→ Implements with proper patterns
→ Updates documentation
→ Generates conventional commit
```

**See [AI Agent Workflow Guide](.github/AI_AGENT_WORKFLOW.md) for complete details.**

---

## ✅ Automation & Quality


### Git Hooks (Local Protection)

**Automated enforcement at commit time:**

- **Pre-commit hook** (`.git/hooks/pre-commit`): Scans for API keys and secrets before allowing commits
- **Commit-msg hook** (`.git/hooks/commit-msg`): Enforces conventional commits format
- **Commit helper** (`commit-helper.ps1`): Interactive PowerShell tool for creating proper commits

**Usage:**

```powershell
# Interactive mode (recommended)
.\commit-helper.ps1 -Interactive

# Quick mode
.\commit-helper.ps1 -Type feat -Description "add new feature"
```

### CI/CD Pipeline

- CI checks: Markdown lint, link check, and secret scan on PRs ([.github/workflows/ci.yml](.github/workflows/ci.yml))
- PR template includes Critic (self‑review) + Reviewer checklists ([.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md))
- Critic/Reviewer guide with prompt templates ([.github/CRITIC_RULES.md](.github/CRITIC_RULES.md))
- CODEOWNERS routes reviews to the owner ([.github/CODEOWNERS](.github/CODEOWNERS))

**Flow:**

1. Local: Git hooks enforce privacy & commit format
2. Local: Run through the Critic checklist before opening a PR
3. Remote: Open a PR and complete the template checkboxes
4. Remote: CI runs and must pass before merge

## 📁 Project Structure

```
project/
├── index.html          # Main HTML structure
├── style.css           # Premium dark theme CSS
├── script.js           # Core application logic + Gemini API
├── commit-helper.ps1   # Interactive commit tool (conventional commits)
├── .gitignore          # Git ignore rules
├── .git/
│   └── hooks/
│       ├── pre-commit  # Privacy shield: blocks API keys
│       └── commit-msg  # Enforces conventional commits
├── .github/
│   ├── workflows/
│   │   ├── deploy-pages.yml  # GitHub Pages deploy pipeline
│   │   └── ci.yml            # Lint, link check, secret scan
│   ├── PULL_REQUEST_TEMPLATE.md  # Critic + Reviewer checklists
│   ├── CRITIC_RULES.md           # Guide and prompt templates
│   ├── AI_ASSISTANT_RULES.md     # AI automation guidelines
│   └── CODEOWNERS                # Default reviewer
└── README.md           # This file
```

## 🛠️ Technical Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Pure CSS with CSS Variables
- **API**: Google Gemini API v1
- **Storage**: Browser localStorage API
- **Model**: Gemini 2.0 Flash (latest 2025)

## 🔧 Configuration

### API Settings

Edit [script.js](script.js#L6-L13) to customize:

```javascript
const CONFIG = {
    GEMINI_API_KEY: '',  // Set via Settings UI or here
    GEMINI_MODEL: 'gemini-2.0-flash',  // Change model here
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1/models',
    // ... other settings
};
```

### Customization

- **Theme Colors**: Modify CSS variables in [style.css](style.css#L1-L13)
- **Task Categories**: Edit `categorizeTask()` in [script.js](script.js#L190)
- **Priority Logic**: Modify `prioritizeTask()` in [script.js](script.js#L210)

## 📝 Usage Examples

### Adding Tasks

1. Click the **+** button in the Tasks panel
2. Type your task (e.g., "Finish project report by Friday")
3. Hit Enter
4. Task is automatically categorized as **Work** with priority **P2**

### Using Quick Actions

- Click **📊 Summarize** to get an overview of all your tasks
- Click **📅 Schedule** to get AI help organizing your day
- Click **💡 Brainstorm** for creative ideas

### Chat with AI

- Ask questions: "How should I prioritize my tasks today?"
- Get insights: "Analyze my task patterns"
- Request help: "Help me create a morning routine"

## 🔐 Privacy & Data

- **All data is local** - Tasks, notes, and chat history stored in your browser
- **No tracking** - Zero analytics or telemetry
- **API Key security** - Stored in localStorage, never sent anywhere except Gemini API
- **Open source** - Audit the code yourself

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 📚 Documentation

- [AI Agent Workflow Guide](.github/AI_AGENT_WORKFLOW.md) - Complete workflow reference
- [Documentation Map](.github/DOCUMENTATION_MAP.md) - Find any documentation
- [Refactor Summary](REFACTOR_SUMMARY.md) - Recent repository changes
- [Contributing Guide](CONTRIBUTING.md) - How to contribute

## 🙏 Acknowledgments

- Google Gemini API for powering the AI
- Inter font by Rasmus Andersson
- Inspired by ChatGPT, Claude, and modern AI assistants

## 📮 Support

If you encounter any issues or have questions:

1. Check the browser console for errors
2. Verify your API key is valid
3. Ensure you're using a modern browser
4. Open an issue on GitHub

---

**Built with ❤️ using vanilla JavaScript**
