// ============================================
// DAILY AI ASSISTANT - Production Ready
// ============================================

// Configuration
const CONFIG = {
    GEMINI_API_KEY: '', // Add your Gemini API key here: https://makersuite.google.com/app/apikeys
    GEMINI_MODEL: 'gemini-2.0-flash', // Latest model - updated 2025
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1/models',
    STORAGE_KEY_TASKS: 'ai_assistant_tasks',
    STORAGE_KEY_NOTES: 'ai_assistant_notes',
    STORAGE_KEY_HISTORY: 'ai_assistant_history',
    STORAGE_KEY_SETTINGS: 'ai_assistant_settings',
};

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    tasks: [],
    notes: [],
    chatHistory: [],
    messages: [],
    currentFilter: 'all',
    sidebarOpen: false,
};

// ============================================
// DOM ELEMENTS
// ============================================

const DOM = {
    // Sidebar
    sidebar: document.querySelector('.sidebar'),
    toggleSidebarBtn: document.getElementById('toggleSidebarBtn'),
    newChatBtn: document.getElementById('newChatBtn'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    
    // Tasks
    addTaskBtn: document.getElementById('addTaskBtn'),
    taskInput: document.getElementById('taskInput'),
    confirmTaskBtn: document.getElementById('confirmTaskBtn'),
    taskInputSection: document.getElementById('taskInputSection'),
    tasksList: document.getElementById('tasksList'),
    taskEmptyState: document.getElementById('taskEmptyState'),
    sidebarTaskCount: document.getElementById('sidebarTaskCount'),
    
    // Notes
    addNoteBtn: document.getElementById('addNoteBtn'),
    notesList: document.getElementById('notesList'),
    noteEmptyState: document.getElementById('noteEmptyState'),
    sidebarNoteCount: document.getElementById('sidebarNoteCount'),
    
    // History
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    historyList: document.getElementById('historyList'),
    historyEmptyState: document.getElementById('historyEmptyState'),
    
    // Chat
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    sendBtn: document.getElementById('sendBtn'),
    apiKeyNotice: document.getElementById('apiKeyNotice'),
    
    // Quick Actions
    quickActionBtns: document.querySelectorAll('.action-btn'),
    
    // Settings
    settingsBtn: document.getElementById('settingsBtn'),
    settingsModal: document.getElementById('settingsModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    apiKeyInput: document.getElementById('apiKeyInput'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
};

// ============================================
// INITIALIZATION
// ============================================

function init() {
    loadFromLocalStorage();
    initTheme();
    setupEventListeners();
    updateUI();
    checkAPIKey();
    renderTasks();
    renderNotes();
    renderHistory();
}

// ============================================
// THEME MANAGEMENT
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    applyTheme(theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
        DOM.darkModeToggle.checked = newTheme === 'dark';
    });
}

function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.removeAttribute('data-theme');
    }
    
    localStorage.setItem('theme', theme);
    DOM.darkModeToggle.checked = theme === 'dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Sidebar Toggle
    DOM.toggleSidebarBtn.addEventListener('click', toggleSidebar);
    
    // Tab Switching with Keyboard Navigation
    DOM.tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', switchTab);
        
        // Keyboard navigation for tabs (Arrow keys)
        btn.addEventListener('keydown', (e) => {
            let newIndex = index;
            
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                newIndex = (index + 1) % DOM.tabBtns.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                newIndex = (index - 1 + DOM.tabBtns.length) % DOM.tabBtns.length;
            } else if (e.key === 'Home') {
                e.preventDefault();
                newIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                newIndex = DOM.tabBtns.length - 1;
            }
            
            if (newIndex !== index) {
                DOM.tabBtns[newIndex].click();
                DOM.tabBtns[newIndex].focus();
            }
        });
    });
    
    // Tasks
    DOM.addTaskBtn.addEventListener('click', toggleTaskInput);
    DOM.confirmTaskBtn.addEventListener('click', addTask);
    DOM.taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
    
    // Task list event delegation
    DOM.tasksList.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-delete-btn')) {
            const taskId = parseInt(e.target.dataset.taskId, 10);
            deleteTask(taskId);
        }
    });
    DOM.tasksList.addEventListener('change', (e) => {
        if (e.target.classList.contains('task-checkbox')) {
            const taskId = parseInt(e.target.dataset.taskId, 10);
            toggleTaskCompletion(taskId);
        }
    });
    
    // Notes
    DOM.addNoteBtn.addEventListener('click', toggleNoteInput);
    
    // Notes list event delegation
    DOM.notesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('note-delete-btn')) {
            const noteId = parseInt(e.target.dataset.noteId, 10);
            deleteNote(noteId);
        }
        // Handle note text click for chat suggestions
        const noteDiv = e.target.closest('[data-message]');
        if (noteDiv && !e.target.classList.contains('note-delete-btn')) {
            const message = noteDiv.dataset.message;
            if (message) sendChatMessage(message);
        }
    });
    
    // Chat - Prevent form submission, handle Shift+Enter
    DOM.sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendMessage();
    });
    DOM.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Quick Actions
    DOM.quickActionBtns.forEach(btn => {
        btn.addEventListener('click', handleQuickAction);
    });
    
    // Settings
    DOM.settingsBtn.addEventListener('click', openSettings);
    DOM.closeSettingsBtn.addEventListener('click', closeSettings);
    DOM.modalOverlay.addEventListener('click', closeSettings);
    DOM.saveSettingsBtn.addEventListener('click', saveSettings);
    DOM.darkModeToggle.addEventListener('change', toggleTheme);
    DOM.newChatBtn.addEventListener('click', clearChat);
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.settingsModal.style.display === 'block') {
            closeSettings();
        }
    });
    
    // History
    DOM.clearHistoryBtn.addEventListener('click', clearHistory);
    
    // History list event delegation
    DOM.historyList.addEventListener('click', (e) => {
        const messageDiv = e.target.closest('[data-message]');
        if (messageDiv) {
            const message = messageDiv.dataset.message;
            if (message) sendChatMessage(message);
        }
    });
}

// ============================================
// TASK MANAGEMENT
// ============================================

function toggleTaskInput() {
    const isVisible = DOM.taskInputSection.style.display !== 'none';
    DOM.taskInputSection.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) {
        DOM.taskInput.focus();
    }
}

function addTask() {
    const taskText = DOM.taskInput.value.trim();
    if (!taskText) return;
    
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        category: categorizeTask(taskText),
        priority: prioritizeTask(taskText),
        timestamp: new Date().toISOString(),
    };
    
    state.tasks.push(task);
    saveToLocalStorage();
    renderTasks();
    updateUI();
    
    DOM.taskInput.value = '';
    DOM.taskInputSection.style.display = 'none';
    
    // Auto-suggest AI response
    suggestAIInsight(`New task added: "${taskText}"`);
}

/* eslint-disable-next-line no-unused-vars */
function deleteTask(taskId) {
    state.tasks = state.tasks.filter(t => t.id !== taskId);
    saveToLocalStorage();
    renderTasks();
    updateUI();
}

/* eslint-disable-next-line no-unused-vars */
function toggleTaskCompletion(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveToLocalStorage();
        renderTasks();
        updateUI();
    }
}

function categorizeTask(text) {
    const text_lower = text.toLowerCase();
    
    const categories = {
        'Work': ['meeting', 'project', 'report', 'deadline', 'work', 'email', 'call', 'presentation', 'proposal'],
        'Personal': ['personal', 'hobby', 'learn', 'read', 'hobby', 'family', 'friend'],
        'Health': ['exercise', 'gym', 'health', 'doctor', 'appointment', 'sleep', 'workout', 'meditation', 'yoga'],
        'Finance': ['budget', 'pay', 'bill', 'expense', 'investment', 'tax', 'finance', 'money', 'loan'],
        'Shopping': ['buy', 'shop', 'grocery', 'purchase', 'order', 'store', 'mall'],
    };
    
    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => text_lower.includes(keyword))) {
            return category;
        }
    }
    
    return 'Personal';
}

function prioritizeTask(text) {
    const text_lower = text.toLowerCase();
    
    if (/urgent|asap|critical|emergency|immediately|today/i.test(text_lower)) {
        return 'P1';
    }
    if (/important|soon|this week|deadline/i.test(text_lower)) {
        return 'P2';
    }
    if (/maybe|could|might|consider/i.test(text_lower)) {
        return 'P3';
    }
    return 'P4';
}

function renderTasks() {
    const tasksList = DOM.tasksList;
    tasksList.innerHTML = '';
    
    if (state.tasks.length === 0) {
        DOM.taskEmptyState.style.display = 'block';
        DOM.sidebarTaskCount.textContent = '0';
        // Announce to screen readers
        DOM.taskEmptyState.setAttribute('aria-live', 'polite');
        return;
    }
    
    DOM.taskEmptyState.style.display = 'none';
    
    const tasksByCategory = {};
    state.tasks.forEach(task => {
        if (!tasksByCategory[task.category]) {
            tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
    });
    
    Object.entries(tasksByCategory).forEach(([category, tasks]) => {
        tasks.forEach(task => {
            const taskEl = document.createElement('li');
            taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskEl.setAttribute('role', 'listitem');
            taskEl.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                    <input 
                        type="checkbox" 
                        class="task-checkbox"
                        data-task-id="${task.id}"
                        aria-label="Mark task as ${task.completed ? 'incomplete' : 'complete'}"
                        ${task.completed ? 'checked' : ''}
                    >
                    <div style="flex: 1;">
                        <div>${escapeHtml(task.text)}</div>
                        <small style="opacity: 0.6; font-size: 0.75em;" aria-label="Category ${category}, Priority ${task.priority}">[${category}] ${task.priority}</small>
                    </div>
                </div>
                <button class="task-delete-btn" data-task-id="${task.id}" aria-label="Delete task: ${escapeHtml(task.text)}">🗑️</button>
            `;
            tasksList.appendChild(taskEl);
        });
    });
    
    DOM.sidebarTaskCount.textContent = state.tasks.length;
}

// ============================================
// NOTE MANAGEMENT
// ============================================

function toggleNoteInput() {
    const noteText = prompt('Enter a quick note:');
    if (noteText && noteText.trim()) {
        addNote(noteText.trim());
    }
}

function addNote(noteText) {
    const note = {
        id: Date.now(),
        text: noteText,
        timestamp: new Date().toISOString(),
    };
    
    state.notes.push(note);
    saveToLocalStorage();
    renderNotes();
    updateUI();
}

/* eslint-disable-next-line no-unused-vars */
function deleteNote(noteId) {
    state.notes = state.notes.filter(n => n.id !== noteId);
    saveToLocalStorage();
    renderNotes();
    updateUI();
}

function renderNotes() {
    const notesList = DOM.notesList;
    notesList.innerHTML = '';
    
    if (state.notes.length === 0) {
        DOM.noteEmptyState.style.display = 'block';
        DOM.sidebarNoteCount.textContent = '0';
        return;
    }
    
    DOM.noteEmptyState.style.display = 'none';
    
    state.notes.forEach(note => {
        const noteEl = document.createElement('li');
        noteEl.className = 'note-item';
        noteEl.setAttribute('role', 'listitem');
        const preview = note.text.substring(0, 40) + (note.text.length > 40 ? '...' : '');
        const escapedText = escapeHtml(note.text);
        noteEl.innerHTML = `
            <div style="flex: 1; cursor: pointer; padding: 5px;" 
                 data-message="Summarize this note: &quot;${escapedText.replace(/"/g, '\\"')}&quot;"
                 role="button"
                 tabindex="0"
                 aria-label="Click to summarize note: ${escapedText}"
                 onkeypress="if(event.key==='Enter'||event.key===' ') this.click()">
                ${escapeHtml(preview)}
            </div>
            <button class="note-delete-btn" data-note-id="${note.id}" aria-label="Delete note">✕</button>
        `;
        notesList.appendChild(noteEl);
    });
    
    DOM.sidebarNoteCount.textContent = state.notes.length;
}

// ============================================
// CHAT FUNCTIONALITY
// ============================================

async function sendMessage() {
    const message = DOM.chatInput.value.trim();
    if (!message || !CONFIG.GEMINI_API_KEY) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    DOM.chatInput.value = '';
    
    // Disable input while processing
    DOM.chatInput.disabled = true;
    DOM.sendBtn.disabled = true;
    
    try {
        const response = await callGeminiAPI(message);
        addMessageToChat(response, 'bot');
        
        // Add to history
        state.chatHistory.push({
            id: Date.now(),
            message: message,
            response: response,
            timestamp: new Date().toISOString(),
        });
        saveToLocalStorage();
        renderHistory();
        
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error('API Error:', error);
        addMessageToChat(`Error: ${error.message}. Please check your API key and try again.`, 'bot');
    } finally {
        DOM.chatInput.disabled = false;
        DOM.sendBtn.disabled = false;
        DOM.chatInput.focus();
    }
}

function sendChatMessage(msg) {
    DOM.chatInput.value = msg;
    sendMessage();
}

function addMessageToChat(content, role) {
    const messageEl = document.createElement('article');
    messageEl.className = `message ${role}-message`;
    messageEl.setAttribute('role', 'article');
    
    const avatar = role === 'bot' ? '🤖' : '👤';
    const ariaLabel = role === 'bot' ? 'AI Assistant message' : 'Your message';
    
    messageEl.innerHTML = `
        <div class="message-avatar" aria-hidden="true">${avatar}</div>
        <div class="message-content" role="document" aria-label="${ariaLabel}">
            <p>${escapeHtml(content)}</p>
        </div>
    `;
    
    state.messages.push({ content, role });
    DOM.chatMessages.appendChild(messageEl);
    
    // Auto-scroll to bottom
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
    
    // Announce new message to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = `${role === 'bot' ? 'AI Assistant' : 'You'}: ${content.substring(0, 100)}`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

async function callGeminiAPI(userMessage) {
    if (!CONFIG.GEMINI_API_KEY) {
        throw new Error('API key not configured');
    }
    
    // Build context from tasks and notes
    const context = buildContext();
    
    const systemPrompt = `You are a helpful Daily AI Assistant designed to help users manage their tasks, notes, and productivity. 
Current user context:
${context}

Be concise, helpful, and actionable. If the user asks about their tasks, provide insights and suggestions.`;

    const requestBody = {
        contents: [{
            parts: [
                {
                    text: systemPrompt + '\n\nUser: ' + userMessage
                }
            ]
        }],
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024
        }
    };
    
    try {
        const response = await fetch(`${CONFIG.GEMINI_API_URL}/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': CONFIG.GEMINI_API_KEY
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            const errorMsg = errorData.error?.message || errorData.message || `HTTP ${response.status}`;
            throw new Error(`API Error: ${errorMsg}`);
        }
        
        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0]) {
            throw new Error('No response from model - invalid API response');
        }
        
        const reply = data.candidates[0]?.content?.parts?.[0]?.text;
        
        if (!reply) {
            throw new Error('No text content in model response');
        }
        
        return reply;
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error('Gemini API Error:', error);
        throw error;
    }
}

function buildContext() {
    let context = '';
    
    if (state.tasks.length > 0) {
        context += 'Tasks:\n';
        state.tasks.forEach(task => {
            context += `- [${task.category}] ${task.priority}: ${task.text} ${task.completed ? '(completed)' : ''}\n`;
        });
        context += '\n';
    }
    
    if (state.notes.length > 0) {
        context += 'Recent notes:\n';
        state.notes.slice(-3).forEach(note => {
            context += `- ${note.text}\n`;
        });
    }
    
    return context || 'No tasks or notes yet.';
}

function suggestAIInsight() {
    // Optional: Auto-suggest AI responses for context
    // Could be extended for more intelligent suggestions
}

function handleQuickAction(e) {
    const action = e.target.closest('.action-btn').dataset.action;
    
    const actionPrompts = {
        summarize: 'Summarize my tasks and upcoming priorities.',
        brainstorm: 'Help me brainstorm ideas for my current projects.',
        generate: 'Generate a daily productivity schedule based on my tasks.',
        schedule: 'Help me prioritize and schedule my tasks for optimal productivity.',
        analyze: 'Analyze my task patterns and give insights.',
    };
    
    sendChatMessage(actionPrompts[action]);
}

function clearChat() {
    state.messages = [];
    DOM.chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>Hello! I'm your Daily AI Assistant. How can I help you today?</p>
            </div>
        </div>
    `;
}

// ============================================
// HISTORY MANAGEMENT
// ============================================

function renderHistory() {
    const historyList = DOM.historyList;
    historyList.innerHTML = '';
    
    if (state.chatHistory.length === 0) {
        DOM.historyEmptyState.style.display = 'block';
        return;
    }
    
    DOM.historyEmptyState.style.display = 'none';
    
    state.chatHistory.slice(-10).reverse().forEach(item => {
        const historyEl = document.createElement('div');
        historyEl.className = 'history-item';
        const preview = item.message.substring(0, 30) + (item.message.length > 30 ? '...' : '');
        historyEl.innerHTML = `
            <div style="flex: 1; cursor: pointer;" data-message="${item.message.replace(/"/g, '&quot;')}">
                ${preview}
            </div>
        `;
        historyList.appendChild(historyEl);
    });
}

function clearHistory() {
    if (confirm('Clear all chat history?')) {
        state.chatHistory = [];
        saveToLocalStorage();
        renderHistory();
    }
}

// ============================================
// SETTINGS & UI
// ============================================

function openSettings() {
    DOM.settingsModal.style.display = 'block';
    DOM.settingsModal.removeAttribute('hidden');
    DOM.modalOverlay.style.display = 'block';
    DOM.modalOverlay.removeAttribute('hidden');
    DOM.apiKeyInput.value = CONFIG.GEMINI_API_KEY || '';
    
    // Focus management for accessibility
    DOM.apiKeyInput.focus();
    
    // Trap focus within modal
    const focusableElements = DOM.settingsModal.querySelectorAll(
        'button, input, textarea, select, a[href]'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    DOM.settingsModal.addEventListener('keydown', function trapFocus(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    });
}

function closeSettings() {
    DOM.settingsModal.style.display = 'none';
    DOM.settingsModal.setAttribute('hidden', '');
    DOM.modalOverlay.style.display = 'none';
    DOM.modalOverlay.setAttribute('hidden', '');
    
    // Return focus to settings button
    DOM.settingsBtn.focus();
}

function saveSettings() {
    CONFIG.GEMINI_API_KEY = DOM.apiKeyInput.value.trim();
    localStorage.setItem('GEMINI_API_KEY', CONFIG.GEMINI_API_KEY);
    
    // Theme is handled by toggleTheme event listener
    
    closeSettings();
    checkAPIKey();
    updateUI();
}

function checkAPIKey() {
    const apiKey = localStorage.getItem('GEMINI_API_KEY') || CONFIG.GEMINI_API_KEY;
    CONFIG.GEMINI_API_KEY = apiKey;
    
    if (apiKey) {
        DOM.apiKeyNotice.style.display = 'none';
        DOM.chatInput.disabled = false;
        DOM.sendBtn.disabled = false;
    } else {
        DOM.apiKeyNotice.style.display = 'block';
        DOM.chatInput.disabled = true;
        DOM.sendBtn.disabled = true;
    }
}

function switchTab(e) {
    // Update ARIA states for tabs
    DOM.tabBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1');
    });
    
    e.target.classList.add('active');
    e.target.setAttribute('aria-selected', 'true');
    e.target.setAttribute('tabindex', '0');
    
    const tabName = e.target.dataset.tab;
    const panels = document.querySelectorAll('.sidebar-panel');
    
    // Update panels with proper ARIA and hidden states
    panels.forEach(panel => {
        panel.classList.remove('active');
        panel.setAttribute('hidden', '');
    });
    
    const activePanel = document.getElementById(`${tabName}Panel`);
    activePanel.classList.add('active');
    activePanel.removeAttribute('hidden');
    activePanel.focus();
}

function toggleSidebar() {
    DOM.sidebar.classList.toggle('open');
    state.sidebarOpen = !state.sidebarOpen;
    
    // Update ARIA expanded state
    DOM.toggleSidebarBtn.setAttribute('aria-expanded', state.sidebarOpen ? 'true' : 'false');
}

function updateUI() {
    // Update any dynamic UI elements
    // This is called after state changes
}

// ============================================
// STORAGE & PERSISTENCE
// ============================================

function saveToLocalStorage() {
    localStorage.setItem(CONFIG.STORAGE_KEY_TASKS, JSON.stringify(state.tasks));
    localStorage.setItem(CONFIG.STORAGE_KEY_NOTES, JSON.stringify(state.notes));
    localStorage.setItem(CONFIG.STORAGE_KEY_HISTORY, JSON.stringify(state.chatHistory));
}

function loadFromLocalStorage() {
    const tasks = localStorage.getItem(CONFIG.STORAGE_KEY_TASKS);
    const notes = localStorage.getItem(CONFIG.STORAGE_KEY_NOTES);
    const history = localStorage.getItem(CONFIG.STORAGE_KEY_HISTORY);
    
    state.tasks = tasks ? JSON.parse(tasks) : [];
    state.notes = notes ? JSON.parse(notes) : [];
    state.chatHistory = history ? JSON.parse(history) : [];
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// START APP
// ============================================

document.addEventListener('DOMContentLoaded', init);
