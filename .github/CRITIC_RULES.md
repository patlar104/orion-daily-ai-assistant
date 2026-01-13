# Critic & Reviewer Guide

This repository uses a lightweight multi‑role review flow to catch issues before they ship.

## Roles

- Critic (author self‑review): Verify completeness, security, and edge cases before requesting a review.
- Reviewer (peer): Validate the diff with a focus on correctness, safety, and maintainability.

## Critic Checklist

- Requirements: No scope gaps; acceptance criteria mapped to changes
- Security: No secrets committed; avoid XSS/HTML injection; sanitize user input; no unsafe eval
- Edge cases: Empty input, long input, network failure, rate limits
- Errors: Clear messages; graceful fallback; no console noise in production
- Performance: Avoid heavy operations in hot paths; minimize network calls and bundle size
- Accessibility: Keyboard navigation; labels; color contrast
- Docs: README/workflows updated; comments where helpful
- Code Quality: Fix root causes, not symptoms; avoid suppressing linter warnings; use proper patterns

## Reviewer Checklist

- Diff correctness: Does the change actually implement the intended behavior?
- Safety: Does it degrade security or privacy?
- Maintainability: Naming, structure, and clarity
- Impact: User‑facing changes documented; deployment steps clear

## Prompt Templates

Adapted from industry best practices and code review patterns:

Critic/Reviewer instruction core:

"You are acting as a reviewer for a proposed code change. Focus on correctness, performance, security, maintainability, and developer experience. Flag only actionable issues introduced by the diff. For each issue: short explanation, affected file and line(s), and severity. Conclude with an overall correctness verdict (correct/incorrect) and a confidence score 0–1."

For audits/checklists, enumerate criteria explicitly (e.g., secrets, XSS, edge cases). Returning structured findings is preferred.

## How to Use

1. Authors run through the Critic checklist before pushing or opening a PR.
2. Include the completed checkboxes in the PR description (template auto‑adds them).
3. Reviewers use the Reviewer checklist to spot issues quickly and consistently.

This flow complements automated checks (linting, link checks, and secret scanning) and aims to prevent regressions and missed requirements.

## Code Patterns & Best Practices

### Event Delegation in DOM Manipulation

When rendering lists or dynamic content, use **event delegation** with data attributes instead of inline event handlers:

**Avoid: Inline onclick/onchange (triggers ESLint false positives)**
```javascript
element.innerHTML = `<button onclick="deleteItem(${id})">Delete</button>`;
```

**Preferred: Event delegation with data attributes**
```javascript
// In render function:
element.innerHTML = `<button class="delete-btn" data-item-id="${id}">Delete</button>`;

// In event listener setup:
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const itemId = parseInt(e.target.dataset.itemId, 10);
        deleteItem(itemId);
    }
});
```

**Benefits:**
- Eliminates inline function references (no ESLint false positives)
- Cleaner separation of markup and behavior
- Better memory efficiency (one listener vs. man
## Code Patterns & Best Practices

### Event Delegation in DOM Manipulationres
### Event Delegation in DOM Manot 
When rendering lists or dynamic contenrea
**Avoid: Inline onclick/onchange (triggers ESLint false positives)**
```javascript
element.innerHTML = `<button onclicule```javascript
element.innerHTML = `<button onclick="deleteItem(${idt element.innead```

**Preferred: Event delegation with data attributes**
```javascript
/su
*s c```javascript
// In render function:ebt.
