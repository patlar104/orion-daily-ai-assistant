#!/bin/bash
# ============================================
# Git Hooks Setup Script
# ============================================
# Installs git hooks for the repository
# Run this after cloning the repository
# ============================================

set -e

HOOKS_DIR=".githooks"
GIT_HOOKS_DIR=".git/hooks"

echo "🔧 Setting up git hooks..."
echo ""

# Check if .githooks directory exists
if [ ! -d "$HOOKS_DIR" ]; then
    echo "❌ Error: $HOOKS_DIR directory not found"
    exit 1
fi

# Install each hook
for hook in pre-commit commit-msg; do
    if [ -f "$HOOKS_DIR/$hook" ]; then
        echo "  Installing $hook hook..."
        cp "$HOOKS_DIR/$hook" "$GIT_HOOKS_DIR/$hook"
        chmod +x "$GIT_HOOKS_DIR/$hook"
        echo "  ✅ $hook installed"
    fi
done

echo ""
echo "✅ Git hooks installed successfully!"
echo ""
echo "Installed hooks:"
echo "  • pre-commit    - Privacy Shield (blocks exposed secrets)"
echo "  • commit-msg    - Conventional Commits (enforces format)"
echo ""
echo "To bypass hooks (not recommended):"
echo "  git commit --no-verify"
echo ""
