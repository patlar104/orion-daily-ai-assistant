#!/bin/bash
# ============================================
# Git Workflow Helper Script
# ============================================

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

show_help() {
    echo -e "${GREEN}Git Workflow Helper${NC}"
    echo ""
    echo "Usage: ./workflow.sh [command]"
    echo ""
    echo "Commands:"
    echo "  check       - Run pre-commit checks manually"
    echo "  commit      - Interactive commit with template"
    echo "  status      - Show detailed git status"
    echo "  scan        - Scan for secrets in all files"
    echo "  help        - Show this help message"
    echo ""
}

run_privacy_check() {
    echo -e "${BLUE}🔍 Running Privacy Shield Scan...${NC}"
    echo ""
    
    # Check current changes
    if git diff | grep -E "(AIza|sk-|ghp_|api.*key.*=|secret.*=)" -i > /dev/null; then
        echo -e "${RED}⚠️  Potential secrets found in unstaged changes!${NC}"
        echo "Run 'git diff | grep -i AIza' to locate them"
        return 1
    fi
    
    if git diff --cached | grep -E "(AIza|sk-|ghp_|api.*key.*=|secret.*=)" -i > /dev/null; then
        echo -e "${RED}⚠️  Potential secrets found in staged changes!${NC}"
        echo "Run 'git diff --cached | grep -i AIza' to locate them"
        return 1
    fi
    
    echo -e "${GREEN}✅ No secrets detected!${NC}"
    return 0
}

run_full_scan() {
    echo -e "${BLUE}🔍 Scanning entire repository for secrets...${NC}"
    echo ""
    
    # Scan all tracked files
    if git grep -E "(AIza[A-Za-z0-9_-]{35,}|sk-[A-Za-z0-9]{20,})" > /dev/null; then
        echo -e "${RED}⚠️  SECRETS FOUND IN REPOSITORY!${NC}"
        echo ""
        git grep -n -E "(AIza[A-Za-z0-9_-]{35,}|sk-[A-Za-z0-9]{20,})"
        echo ""
        echo -e "${RED}ACTION REQUIRED: Remove these secrets immediately!${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Repository is clean!${NC}"
    return 0
}

interactive_commit() {
    echo -e "${BLUE}📝 Interactive Commit${NC}"
    echo ""
    
    # Show status
    git status --short
    echo ""
    
    # Run privacy check
    if ! run_privacy_check; then
        echo ""
        echo -e "${RED}Cannot proceed with commit due to privacy issues.${NC}"
        exit 1
    fi
    
    echo ""
    echo "Files to stage:"
    echo "  all - Stage all changes"
    echo "  <file> - Stage specific file"
    echo "  skip - Exit"
    echo ""
    read -p "What to stage? " stage_input
    
    if [ "$stage_input" = "skip" ]; then
        exit 0
    elif [ "$stage_input" = "all" ]; then
        git add -A
    else
        git add "$stage_input"
    fi
    
    echo ""
    echo -e "${BLUE}Commit Message (will use template)${NC}"
    git commit
}

show_detailed_status() {
    echo -e "${BLUE}📊 Detailed Repository Status${NC}"
    echo ""
    
    echo -e "${GREEN}Branch:${NC}"
    git branch
    echo ""
    
    echo -e "${GREEN}Status:${NC}"
    git status
    echo ""
    
    echo -e "${GREEN}Recent commits:${NC}"
    git log --oneline -5
    echo ""
    
    echo -e "${GREEN}Ignored files:${NC}"
    git status --ignored --short | grep "^!!" | head -5
    echo ""
}

# Main script
case "$1" in
    check)
        run_privacy_check
        ;;
    commit)
        interactive_commit
        ;;
    status)
        show_detailed_status
        ;;
    scan)
        run_full_scan
        ;;
    help|*)
        show_help
        ;;
esac
