# Modernization Quick Reference Card

**Print this or bookmark it for quick lookup during implementation**

---

## 📋 The 10 Features at a Glance

| # | Feature | Hours | Difficulty | Start | Status |
|---|---------|-------|------------|-------|--------|
| 1️⃣ | Accessibility (WCAG 2.1 AA) | 8-10 | 🟢 | Week 1 | ⬜ |
| 2️⃣ | Dark/Light Mode | 4-5 | 🟢 | Week 1 | ⬜ |
| 3️⃣ | Performance Optimization | 6-7 | 🟢 | Week 1 | ⬜ |
| 4️⃣ | Enhanced CSS & Animations | 8-10 | 🟠 | Week 1 | ⬜ |
| 5️⃣ | Progressive Web App | 12-15 | 🟠 | Week 2 | ⬜ |
| 6️⃣ | Advanced LLM Caching | 10-12 | 🟠 | Week 2 | ⬜ |
| 7️⃣ | Data Export/Import | 8-10 | 🟠 | Week 2 | ⬜ |
| 8️⃣ | Voice UI | 10-12 | 🟠 | Week 3 | ⬜ |
| 9️⃣ | IndexedDB Migration | 12-15 | 🔴 | Week 3 | ⬜ |
| 🔟 | Analytics Dashboard | 8-10 | 🟠 | Week 3 | ⬜ |

**Total: 86-104 hours (3-4 weeks intensive)**

---

## 🎯 Weekly Sprint Structure

### WEEK 1: Foundation (Mon-Fri)
**Goal:** Production-ready, accessible, performant app

**Monday-Tuesday (8-10h):**
- Implement WCAG 2.1 AA accessibility
- Add ARIA labels to all elements
- Implement keyboard navigation
- Verify color contrast

**Tuesday-Wednesday (4-5h):**
- Create light mode theme
- Implement dark/light toggle
- Auto-detect system preference
- Test smooth transitions

**Wednesday-Thursday (6-7h):**
- Cache DOM queries
- Implement debouncing (resize, scroll)
- Use event delegation
- Batch DOM updates

**Thursday-Friday (8-10h):**
- Implement CSS Grid layouts
- Add scroll-driven animations
- Create skeleton loading states
- Add toast notifications

**Friday Review:**
- Lighthouse audit (target: 95+)
- Accessibility audit (target: 95+)
- Manual browser testing

---

### WEEK 2: Portability & PWA (Mon-Fri)
**Goal:** Installable app, offline support, data portability

**Monday-Tuesday (12-15h):**
- Create manifest.json
- Create service worker (sw.js)
- Implement Workbox caching strategies
- Test offline functionality

**Wednesday-Thursday (10-12h):**
- Implement response caching
- Add context window management
- Track token usage
- Add cost analysis

**Thursday-Friday (8-10h):**
- Create export functions (JSON, CSV, Markdown)
- Implement drag-drop import
- Add data validation
- Test all export formats

**Friday Review:**
- PWA installable on mobile
- Export/import formats verified
- API cost tracking working

---

### WEEK 3: Enhanced UX (Mon-Fri)
**Goal:** Advanced features, scalability, insights

**Monday-Tuesday (10-12h):**
- Implement Web Speech API integration
- Add speech-to-text input
- Add text-to-speech output
- Handle permissions gracefully

**Wednesday (12-15h):**
- Create IndexedDB schema
- Migrate existing data
- Add querying capabilities
- Handle quota exceeded

**Thursday-Friday (8-10h):**
- Create analytics dashboard
- Implement metrics collection (local)
- Add usage insights
- Create privacy policy

**Friday Review:**
- All features working together
- Full integration testing
- Performance regression check

---

## 🔧 Critical Files to Modify

### For Each Feature

**Feature 1 (Accessibility):**
```
- index.html: Add ARIA, semantic HTML, skip link
- script.js: Add keyboard handlers, focus management
- style.css: Focus indicators, color contrast
```

**Feature 2 (Dark/Light Mode):**
```
- style.css: Dark mode variables, theme system
- script.js: Theme toggle logic
- index.html: Toggle button in settings
```

**Feature 3 (Performance):**
```
- script.js: DOM caching, debouncing, delegation
- style.css: CSS optimization
```

**Feature 4 (CSS & Animations):**
```
- style.css: Grid, animations, skeletons
- index.html: Minor structural updates
```

**Feature 5 (PWA):**
```
- manifest.json (NEW)
- sw.js (NEW)
- offline.html (NEW)
- index.html: Register SW, add manifest
- script.js: SW lifecycle
```

**Feature 6 (LLM Caching):**
```
- script.js: Caching layer, context manager
```

**Feature 7 (Export/Import):**
```
- script.js: Export/import functions
- index.html: UI buttons
```

**Feature 8 (Voice UI):**
```
- script.js: Web Speech API integration
- index.html: Voice controls
- style.css: Voice button styling
```

**Feature 9 (IndexedDB):**
```
- script.js: IndexedDB layer
```

**Feature 10 (Analytics):**
```
- script.js: Metrics collection
- index.html: Analytics panel
- style.css: Dashboard styling
```

---

## 💡 Implementation Tips

### Accessibility (Feature 1)
```javascript
// DON'T use outline: 0
button:focus { outline: 0; } ❌

// DO provide focus indicator
button:focus-visible {
  outline: 3px solid #4A90E2;
  outline-offset: 2px;
} ✅

// DON'T forget minimum touch targets
// DO ensure 44x44px minimum
button { min-height: 44px; min-width: 44px; } ✅
```

### Dark Mode (Feature 2)
```css
/* Use data-attribute for switching */
html[data-theme="dark"] { --bg: #1a1a1a; }
html:not([data-theme]) { --bg: #fff; }

/* NOT class names (easier to manage) */
html.dark-mode { } /* Don't use */
```

### Performance (Feature 3)
```javascript
// Cache immediately on load
const CACHE = {};
function initCache() {
  CACHE.tasksList = document.getElementById('tasksList');
  // All important elements
}

// Use debounce for high-frequency events
const debouncedResize = debounce(handleResize, 250);
window.addEventListener('resize', debouncedResize);
```

### PWA (Feature 5)
```json
{
  "name": "Daily AI Assistant",
  "short_name": "AI Assistant",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a1a1a",
  "theme_color": "#4A90E2",
  "icons": [...]
}
```

### LLM Caching (Feature 6)
```javascript
// Hash queries for caching
const getCachedResponse = (query) => {
  const hash = hashQuery(query);
  const cached = localStorage.getItem(`cache_${hash}`);
  return cached ? JSON.parse(cached) : null;
};
```

### Voice UI (Feature 8)
```javascript
// Always show transcript
const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
  let transcript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript;
  }
  displayTranscript(transcript);
};
```

---

## ✅ Quality Gate Checklist

### Before Every Commit
- [ ] No console errors
- [ ] No `console.log()` statements left
- [ ] Code follows project patterns
- [ ] Event delegation used (no inline onclick)
- [ ] User input sanitized
- [ ] No API keys exposed

### Before Feature Completion
- [ ] Lighthouse audit ≥ 85
- [ ] Accessibility audit ≥ 90
- [ ] Tested on 3+ browsers
- [ ] Mobile responsive verified
- [ ] README updated
- [ ] Comments added for complex logic

### Before Merging
- [ ] All tests passing
- [ ] Privacy Shield scan clean
- [ ] Conventional commit message
- [ ] Related files staged only
- [ ] No breaking changes

---

## 🚨 Common Pitfalls to Avoid

### Accessibility
❌ `button { outline: 0; }` - Removes focus indicator  
✅ Provide visible focus indicator always

❌ `<div onclick="handleClick()">` - Inline handlers  
✅ Use event delegation on parent

❌ Missing aria-label on icon buttons  
✅ Add aria-label to all interactive elements

### Performance
❌ Querying DOM in loops  
✅ Cache DOM references in object

❌ No debouncing on resize/scroll  
✅ Debounce at 200-300ms

❌ Appending to DOM in loops  
✅ Use DocumentFragment for batch updates

### PWA
❌ Service worker without update strategy  
✅ Implement version tracking

❌ Caching API responses forever  
✅ Set expiration times (e.g., 5min for API)

❌ Breaking changes without migration  
✅ Always version your data formats

---

## 📊 Success Metrics

**By End of Week 1:**
- Lighthouse: 95+
- Accessibility: 95+
- Performance: -40% slower
- Core Web Vitals: All Green

**By End of Week 2:**
- PWA: Installable ✅
- Offline: Fully functional ✅
- Export/Import: All formats ✅
- API calls: -50% (caching)

**By End of Week 3:**
- Voice: Working ✅
- Analytics: Tracking ✅
- IndexedDB: 1000+ messages ✅
- Integration: 100% ✅

---

## 🔗 Reference Links (Keep Bookmarked)

### Accessibility
- [WCAG 2.1 AA Checklist](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### CSS
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Container Queries](https://web.dev/container-queries/)

### PWA & Service Workers
- [Workbox Docs](https://developers.google.com/web/tools/workbox)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://www.w3.org/TR/appmanifest/)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Performance Observer](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

### Voice APIs
- [Web Speech API](https://www.w3.org/community/speech-api/)
- [Web Audio API](https://www.w3.org/TR/webaudio/)
- [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

### LLM / Gemini
- [Gemini API Docs](https://ai.google.dev/)
- [Token Counting](https://ai.google.dev/docs/tokens)
- [Streaming Responses](https://ai.google.dev/docs/streaming)

---

## 🎓 Learning Resources

**Before Starting Feature 1 (Accessibility):**
- Watch: WCAG 2.1 Overview (10 min)
- Read: "Accessibility First" article
- Try: WAVE extension on 3 websites

**Before Starting Feature 5 (PWA):**
- Watch: PWA Intro (15 min)
- Read: Workbox getting started guide
- Try: Install a PWA on your phone

**Before Starting Feature 8 (Voice UI):**
- Watch: Web Speech API demo (10 min)
- Try: Web Speech API playground
- Test: Speech recognition on different browsers

---

## 📞 Troubleshooting

**Issue: Focus indicator not showing on keyboard nav**
```
Solution: Check for outline: 0 or border: 0
Use outline-offset to position indicator
Test with :focus-visible, not :focus
```

**Issue: Dark mode flashing white on load**
```
Solution: Add theme preference to <html> before CSS loads
Set initial theme via JavaScript before page render
Use media query prefers-color-scheme
```

**Issue: Service Worker not updating**
```
Solution: Increment version in sw.js manifest
Add cache busting query parameters
Test with DevTools "Unregister" and reload
```

**Issue: Voice recognition not working**
```
Solution: Check HTTPS (required for microphone)
Check browser permissions
Test on different browser (Firefox support varies)
Add fallback to text input
```

---

**Last Updated:** January 14, 2026  
**Status:** ✅ Ready to Use  
**Print this page for desk reference!**
