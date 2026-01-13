## Summary

- What does this change do and why?

## Changes

- Bullet the main changes and affected areas

## Testing

- How did you test this? Add steps or evidence.

## Risk & Impact

- Risk level: Low / Medium / High
- User impact and rollback plan

---

## Critic Self‑Review (author)

- [x] Requirements covered end‑to‑end (no scope gaps)
- [x] Security reviewed (XSS, secrets, PII, unsafe eval, redirects)
- [x] Secrets not committed (keys, tokens, passwords)
- [x] Edge cases handled (empty, long, error paths, offline)
- [x] Error handling and user feedback are clear
- [x] Performance reasonable (no obvious N+1 / large payloads)
- [x] Accessibility considered (labels, contrast, keyboard)
- [x] Docs updated (README, comments, usage)
- [x] Deployment notes updated (workflows/Pages if relevant)

### Critic Prompt (use when reviewing your diff)

You are a strict code critic verifying the correctness, safety, and completeness of the proposed changes. Focus on:
- Correctness and broken flows introduced by this diff
- Security (secrets, XSS, injection, unsafe external calls)
- Maintainability and developer experience
- Performance concerns
- User impact and edge cases

Flag only actionable issues introduced by this diff. For each issue: short explanation, affected file + lines, severity. Conclude with a correctness verdict (correct/incorrect) and confidence 0–1.

---

## Reviewer Checklist (peer)

- [x] Diff makes sense; no unintended changes or noise
- [x] Names, structure, and style match repo conventions
- [x] Error paths and edge cases covered
- [x] Security posture unchanged or improved
- [x] Docs/tests/workflows updated where needed

### Reviewer Prompt (optional)

Act as a pragmatic reviewer. Cite specific files/lines for any issue. Prioritize correctness, security, and maintainability. Provide a final verdict and confidence.
