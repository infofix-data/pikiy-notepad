// ==================== LANGUAGE DATABASE ====================
const LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇬🇧', voiceCode: 'en-US', nativeName: 'English' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩', voiceCode: 'bn-BD', nativeName: 'বাংলা' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸', voiceCode: 'es-ES', nativeName: 'Español' },
    { code: 'fr', name: 'French', flag: '🇫🇷', voiceCode: 'fr-FR', nativeName: 'Français' },
    { code: 'de', name: 'German', flag: '🇩🇪', voiceCode: 'de-DE', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', flag: '🇮🇹', voiceCode: 'it-IT', nativeName: 'Italiano' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹', voiceCode: 'pt-PT', nativeName: 'Português' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', voiceCode: 'ru-RU', nativeName: 'Русский' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', voiceCode: 'ja-JP', nativeName: '日本語' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳', voiceCode: 'zh-CN', nativeName: '中文' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', voiceCode: 'ar-SA', nativeName: 'العربية' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', voiceCode: 'hi-IN', nativeName: 'हिन्दी' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰', voiceCode: 'ur-PK', nativeName: 'اردو' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷', voiceCode: 'tr-TR', nativeName: 'Türkçe' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷', voiceCode: 'ko-KR', nativeName: '한국어' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱', voiceCode: 'nl-NL', nativeName: 'Nederlands' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱', voiceCode: 'pl-PL', nativeName: 'Polski' },
    { code: 'sv', name: 'Swedish', flag: '🇸🇪', voiceCode: 'sv-SE', nativeName: 'Svenska' },
    { code: 'da', name: 'Danish', flag: '🇩🇰', voiceCode: 'da-DK', nativeName: 'Dansk' },
    { code: 'fi', name: 'Finnish', flag: '🇫🇮', voiceCode: 'fi-FI', nativeName: 'Suomi' },
    { code: 'no', name: 'Norwegian', flag: '🇳🇴', voiceCode: 'no-NO', nativeName: 'Norsk' },
    { code: 'th', name: 'Thai', flag: '🇹🇭', voiceCode: 'th-TH', nativeName: 'ไทย' },
    { code: 'vi', name: 'Vietnamese', flag: '🇻🇳', voiceCode: 'vi-VN', nativeName: 'Tiếng Việt' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩', voiceCode: 'id-ID', nativeName: 'Bahasa Indonesia' },
    { code: 'ms', name: 'Malay', flag: '🇲🇾', voiceCode: 'ms-MY', nativeName: 'Bahasa Melayu' }
];

// ==================== SUGGESTIONS DATABASE ====================
const SUGGESTIONS_DB = {
    en: {
        spelling: {
            'recieve': { correct: 'receive', type: 'error', message: 'Spelling mistake' },
            'seperate': { correct: 'separate', type: 'error', message: 'Spelling mistake' },
            'occured': { correct: 'occurred', type: 'error', message: 'Spelling mistake' },
            'accomodate': { correct: 'accommodate', type: 'error', message: 'Spelling mistake' },
            'definately': { correct: 'definitely', type: 'error', message: 'Spelling mistake' },
            'tommorow': { correct: 'tomorrow', type: 'error', message: 'Spelling mistake' },
            'thier': { correct: 'their', type: 'error', message: 'Spelling mistake' }
        },
        grammar: {
            'is are': { correct: 'is', type: 'warning', message: 'Subject-verb agreement' },
            'are is': { correct: 'are', type: 'warning', message: 'Subject-verb agreement' },
            'they is': { correct: 'they are', type: 'warning', message: 'Subject-verb agreement' }
        },
        style: {
            'very good': { suggestion: 'excellent', type: 'info', message: 'Stronger word available' },
            'very bad': { suggestion: 'terrible', type: 'info', message: 'Stronger word available' },
            'a lot': { suggestion: 'many / numerous', type: 'info', message: 'More precise word' }
        }
    },
    bn: {
        style: {
            'ভাল': { suggestion: 'চমৎকার / অসাধারণ', type: 'info', message: 'শক্তিশালী শব্দ ব্যবহার করুন' },
            'খারাপ': { suggestion: 'জঘন্য / নিকৃষ্ট', type: 'info', message: 'শক্তিশালী শব্দ ব্যবহার করুন' },
            'বড়': { suggestion: 'বিশাল / প্রকাণ্ড', type: 'info', message: 'বিকল্প শব্দ ব্যবহার করুন' },
            'ছোট': { suggestion: 'ক্ষুদ্র / তুচ্ছ', type: 'info', message: 'বিকল্প শব্দ ব্যবহার করুন' }
        }
    },
    es: {
        style: {
            'muy bueno': { suggestion: 'excelente', type: 'info', message: 'Palabra más fuerte' },
            'muy malo': { suggestion: 'terrible', type: 'info', message: 'Palabra más fuerte' }
        }
    },
    fr: {
        style: {
            'très bon': { suggestion: 'excellent', type: 'info', message: 'Mot plus fort' },
            'très mauvais': { suggestion: 'terrible', type: 'info', message: 'Mot plus fort' }
        }
    },
    de: {
        style: {
            'sehr gut': { suggestion: 'ausgezeichnet', type: 'info', message: 'Stärkeres Wort' },
            'sehr schlecht': { suggestion: 'furchtbar', type: 'info', message: 'Stärkeres Wort' }
        }
    }
};

// ==================== GLOBAL VARIABLES ====================
let currentLanguage = 'en';
let recognition = null;
let voiceActive = false;
let notes = {};
let currentNoteId = null;
let autoSaveTimer = null;

// ==================== DOM ELEMENTS ====================
const editor = document.getElementById('editor');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const readTime = document.getElementById('readTime');
const suggestionsList = document.getElementById('suggestionsList');
const suggestionCount = document.getElementById('suggestionCount');
const notesList = document.getElementById('notesList');
const searchNotes = document.getElementById('searchNotes');
const voiceStatusText = document.getElementById('voiceStatusText');
const statusIndicator = document.getElementById('statusIndicator');
const activeFlag = document.getElementById('activeFlag');
const activeLanguageName = document.getElementById('activeLanguageName');
const fromLangSelect = document.getElementById('fromLang');
const toLangSelect = document.getElementById('toLang');
const toastContainer = document.getElementById('toastContainer');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadNotes();
    loadAutoSave();
    setupEventListeners();
    populateLanguageDropdown();
    populateLanguageSelectors();
    updateStats();
});

function initializeApp() {
    // Set default placeholder with multiple languages
    editor.setAttribute('placeholder', 
        'Start typing...\n\n'
    );
}

// ==================== LANGUAGE MANAGEMENT ====================
function populateLanguageDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.innerHTML = LANGUAGES.map(lang => `
        <div class="lang-option ${currentLanguage === lang.code ? 'selected' : ''}" 
             onclick="setLanguage('${lang.code}')">
            <span>${lang.flag}</span>
            <span>${lang.nativeName}</span>
            <span style="color: var(--text-muted); font-size: 12px;">${lang.name}</span>
        </div>
    `).join('');
}

function populateLanguageSelectors() {
    fromLangSelect.innerHTML = LANGUAGES.map(lang => 
        `<option value="${lang.code}">${lang.flag} ${lang.nativeName}</option>`
    ).join('');
    
    toLangSelect.innerHTML = LANGUAGES.map(lang => 
        `<option value="${lang.code}">${lang.flag} ${lang.nativeName}</option>`
    ).join('');
    
    fromLangSelect.value = 'bn';
    toLangSelect.value = 'en';
}

function setLanguage(langCode) {
    const lang = LANGUAGES.find(l => l.code === langCode);
    if (!lang) return;
    
    currentLanguage = langCode;
    activeFlag.textContent = lang.flag;
    activeLanguageName.textContent = lang.nativeName;
    
    // Update voice language
    if (voiceActive) {
        stopVoice();
    }
    
    populateLanguageDropdown();
    showToast(`Language changed to ${lang.nativeName}`, 'success');
    analyzeText();
}

// ==================== VOICE RECOGNITION ====================
function startVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        showToast('Voice recognition not supported in this browser', 'error');
        return;
    }

    if (recognition) {
        try { recognition.stop(); } catch (e) {}
    }

    try {
        const lang = LANGUAGES.find(l => l.code === currentLanguage);
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = lang?.voiceCode || 'en-US';

        recognition.onstart = () => {
            voiceActive = true;
            statusIndicator.classList.add('active');
            voiceStatusText.textContent = `🎤 Listening (${lang?.nativeName})...`;
        };

        recognition.onresult = (event) => {
            let finalTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + ' ';
                }
            }
            
            if (finalTranscript) {
                const currentText = editor.innerText;
                editor.innerText = currentText + (currentText ? ' ' : '') + finalTranscript;
                editor.scrollTop = editor.scrollHeight;
                updateStats();
                analyzeText();
                autoSave();
            }
        };

        recognition.onerror = (event) => {
            if (event.error !== 'no-speech') {
                console.error('Voice error:', event.error);
                voiceStatusText.textContent = `Error: ${event.error}`;
            }
        };

        recognition.onend = () => {
            if (voiceActive) {
                setTimeout(() => {
                    if (voiceActive && recognition) {
                        try { recognition.start(); } catch (e) {}
                    }
                }, 100);
            } else {
                statusIndicator.classList.remove('active');
                voiceStatusText.textContent = 'Voice stopped';
            }
        };

        recognition.start();
    } catch (error) {
        showToast('Failed to start voice recognition', 'error');
    }
}

function stopVoice() {
    voiceActive = false;
    if (recognition) {
        try { recognition.stop(); } catch (e) {}
        recognition = null;
    }
    statusIndicator.classList.remove('active');
    voiceStatusText.textContent = 'Ready. Click Start Voice to begin.';
}

// ==================== TRANSLATION ====================
async function translateText() {
    const text = editor.innerText.trim();
    if (!text) {
        showToast('No text to translate', 'warning');
        return;
    }

    const fromLang = fromLangSelect.value;
    const toLang = toLangSelect.value;
    
    showToast('Translating...', 'info');

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.responseData?.translatedText) {
            editor.innerText = data.responseData.translatedText;
            updateStats();
            analyzeText();
            showToast('✅ Translation complete', 'success');
        } else {
            throw new Error('Translation failed');
        }
    } catch (error) {
        showToast('Translation failed. Please try again.', 'error');
    }
}

function quickTranslate(targetLang) {
    const fromLang = fromLangSelect.value;
    const toLang = targetLang;
    fromLangSelect.value = fromLang;
    toLangSelect.value = toLang;
    translateText();
}

function swapLanguages() {
    const fromVal = fromLangSelect.value;
    const toVal = toLangSelect.value;
    fromLangSelect.value = toVal;
    toLangSelect.value = fromVal;
}

// ==================== TEXT TO SPEECH ====================
function speakText() {
    const text = editor.innerText.trim();
    if (!text) {
        showToast('No text to speak', 'warning');
        return;
    }

    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    
    // Auto-detect language or use current
    const hasBangla = /[\u0980-\u09FF]/.test(text);
    const hasArabic = /[\u0600-\u06FF]/.test(text);
    const hasChinese = /[\u4e00-\u9fff]/.test(text);
    const hasJapanese = /[\u3040-\u30ff]/.test(text);
    const hasKorean = /[\uac00-\ud7af]/.test(text);
    
    if (hasBangla) msg.lang = 'bn-BD';
    else if (hasArabic) msg.lang = 'ar-SA';
    else if (hasChinese) msg.lang = 'zh-CN';
    else if (hasJapanese) msg.lang = 'ja-JP';
    else if (hasKorean) msg.lang = 'ko-KR';
    else {
        const lang = LANGUAGES.find(l => l.code === currentLanguage);
        msg.lang = lang?.voiceCode || 'en-US';
    }
    
    msg.rate = 0.9;
    msg.pitch = 1;

    msg.onstart = () => showToast('🔊 Speaking...', 'info');
    msg.onend = () => showToast('✅ Finished', 'success');

    window.speechSynthesis.speak(msg);
}

// ==================== TEXT ANALYSIS (Grammarly Style) ====================
function analyzeText() {
    const text = editor.innerText;
    if (!text.trim()) {
        suggestionsList.innerHTML = '<div class="empty-state">✨ Suggestions will appear here as you type</div>';
        suggestionCount.textContent = '0';
        return;
    }

    const suggestions = [];
    const langDB = SUGGESTIONS_DB[currentLanguage] || SUGGESTIONS_DB.en;
    
    // Check for language-specific suggestions
    if (langDB.spelling) {
        Object.keys(langDB.spelling).forEach(word => {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            if (regex.test(text)) {
                suggestions.push({
                    ...langDB.spelling[word],
                    original: word
                });
            }
        });
    }
    
    if (langDB.grammar) {
        Object.keys(langDB.grammar).forEach(issue => {
            const regex = new RegExp(issue, 'gi');
            if (regex.test(text)) {
                suggestions.push({
                    ...langDB.grammar[issue],
                    original: issue
                });
            }
        });
    }
    
    if (langDB.style) {
        Object.keys(langDB.style).forEach(issue => {
            const regex = new RegExp(issue, 'gi');
            if (regex.test(text)) {
                suggestions.push({
                    ...langDB.style[issue],
                    original: issue
                });
            }
        });
    }
    
    renderSuggestions(suggestions);
}

function renderSuggestions(suggestions) {
    suggestionCount.textContent = suggestions.length;
    
    if (suggestions.length === 0) {
        suggestionsList.innerHTML = '<div class="empty-state">✅ No issues found! Great writing!</div>';
        return;
    }
    
    suggestionsList.innerHTML = suggestions.map((s, index) => `
        <div class="suggestion-item ${s.type}">
            <div class="suggestion-type ${s.type}">
                ${s.type === 'error' ? '🔴' : s.type === 'warning' ? '🟡' : '🔵'} 
                ${s.message}
            </div>
            <div class="suggestion-text">"${s.original}"</div>
            <div class="suggestion-fix">
                ${s.correct ? '→ ' + s.correct : s.suggestion ? '💡 ' + s.suggestion : ''}
            </div>
            <div class="suggestion-actions">
                <button class="fix-btn" onclick="fixSuggestion('${s.original}', '${s.correct || s.suggestion || ''}')">
                    Fix
                </button>
                <button class="ignore-btn" onclick="ignoreSuggestion(${index})">
                    Ignore
                </button>
            </div>
        </div>
    `).join('');
}

function fixSuggestion(original, replacement) {
    if (!replacement) return;
    
    const text = editor.innerText;
    const regex = new RegExp('\\b' + original + '\\b', 'gi');
    editor.innerText = text.replace(regex, replacement);
    
    updateStats();
    analyzeText();
    showToast(`Fixed: ${original} → ${replacement}`, 'success');
}

function ignoreSuggestion(index) {
    showToast('Suggestion ignored', 'info');
}

function checkAllGrammar() {
    analyzeText();
    showToast('✨ Text analysis complete', 'success');
}

// ==================== STATS ====================
function updateStats() {
    const text = editor.innerText || '';
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    
    wordCount.textContent = words;
    charCount.textContent = chars;
    readTime.textContent = Math.ceil(words / 200);
}

// ==================== NOTE MANAGEMENT ====================
function saveNote() {
    const text = editor.innerText.trim();
    if (!text) {
        showToast('Cannot save empty note', 'warning');
        return;
    }

    if (!currentNoteId) {
        currentNoteId = Date.now().toString();
    }

    notes[currentNoteId] = {
        html: editor.innerHTML,
        text: text,
        preview: text.substring(0, 60),
        date: new Date().toLocaleString(),
        timestamp: Date.now(),
        language: currentLanguage
    };

    localStorage.setItem('ai_notes_global', JSON.stringify(notes));
    renderNotes();
    showToast('✅ Note saved', 'success');
}

function loadNotes() {
    try {
        notes = JSON.parse(localStorage.getItem('ai_notes_global') || '{}');
    } catch {
        notes = {};
    }
    renderNotes();
}

function renderNotes() {
    const searchTerm = searchNotes.value.toLowerCase().trim();
    notesList.innerHTML = '';

    const noteIds = Object.keys(notes);
    if (noteIds.length === 0) {
        notesList.innerHTML = '<div class="empty-state">📝 No saved notes yet</div>';
        return;
    }

    noteIds.sort((a, b) => notes[b].timestamp - notes[a].timestamp);

    noteIds.forEach(id => {
        const note = notes[id];
        if (searchTerm && !note.text.toLowerCase().includes(searchTerm)) return;

        const div = document.createElement('div');
        div.className = 'note-item';
        div.innerHTML = `
            <div class="note-preview">${note.preview}${note.text.length > 60 ? '...' : ''}</div>
            <div class="note-date">📅 ${note.date}</div>
            <button class="note-delete" onclick="deleteNote('${id}', event)">✕</button>
        `;
        div.onclick = () => openNote(id);
        notesList.appendChild(div);
    });
}

function openNote(id) {
    const note = notes[id];
    if (note?.html) {
        editor.innerHTML = note.html;
        currentNoteId = id;
        if (note.language) {
            setLanguage(note.language);
        }
        updateStats();
        analyzeText();
        showToast('📂 Note loaded', 'success');
    }
}

function deleteNote(id, event) {
    event.stopPropagation();
    if (confirm('Delete this note?')) {
        delete notes[id];
        localStorage.setItem('ai_notes_global', JSON.stringify(notes));
        if (currentNoteId === id) {
            clearEditor();
            currentNoteId = null;
        }
        renderNotes();
        showToast('🗑️ Note deleted', 'info');
    }
}

function clearAllNotes() {
    if (confirm('Delete ALL notes permanently?')) {
        notes = {};
        localStorage.removeItem('ai_notes_global');
        renderNotes();
        showToast('🗑️ All notes cleared', 'info');
    }
}

// ==================== UTILITIES ====================
function clearEditor() {
    if (editor.innerText.trim() && !confirm('Clear editor?')) return;
    editor.innerHTML = '';
    currentNoteId = null;
    updateStats();
    analyzeText();
    autoSave();
}

function downloadNote() {
    const text = editor.innerText.trim();
    if (!text) {
        showToast('Nothing to download', 'warning');
        return;
    }

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `note-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('📥 Downloaded', 'success');
}

function autoSave() {
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        localStorage.setItem('ai_autosave_global', editor.innerHTML);
    }, 1000);
}

function loadAutoSave() {
    const saved = localStorage.getItem('ai_autosave_global');
    if (saved && saved !== '<br>' && saved.trim() !== '') {
        if (confirm('Restore unsaved work?')) {
            editor.innerHTML = saved;
            updateStats();
            analyzeText();
        }
    }
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    toast.innerHTML = `${icons[type]} ${message}`;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`Theme changed to ${newTheme}`, 'info');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Voice controls
    document.getElementById('voiceStartBtn').addEventListener('click', startVoice);
    document.getElementById('voiceStopBtn').addEventListener('click', stopVoice);
    
    // Translation controls
    document.getElementById('translateBtn').addEventListener('click', translateText);
    document.getElementById('quickTranslateBtn').addEventListener('click', translateText);
    document.getElementById('swapLangsBtn').addEventListener('click', swapLanguages);
    document.getElementById('speakBtn').addEventListener('click', speakText);
    
    // Quick translation buttons
    document.getElementById('toEnglishBtn').addEventListener('click', () => quickTranslate('en'));
    document.getElementById('toSpanishBtn').addEventListener('click', () => quickTranslate('es'));
    document.getElementById('toFrenchBtn').addEventListener('click', () => quickTranslate('fr'));
    document.getElementById('toGermanBtn').addEventListener('click', () => quickTranslate('de'));
    document.getElementById('toArabicBtn').addEventListener('click', () => quickTranslate('ar'));
    document.getElementById('toHindiBtn').addEventListener('click', () => quickTranslate('hi'));
    document.getElementById('toBengaliBtn').addEventListener('click', () => quickTranslate('bn'));
    document.getElementById('toJapaneseBtn').addEventListener('click', () => quickTranslate('ja'));
    document.getElementById('toChineseBtn').addEventListener('click', () => quickTranslate('zh'));
    document.getElementById('toRussianBtn').addEventListener('click', () => quickTranslate('ru'));
    
    // Note controls
    document.getElementById('saveNoteBtn').addEventListener('click', saveNote);
    document.getElementById('downloadBtn').addEventListener('click', downloadNote);
    document.getElementById('clearBtn').addEventListener('click', clearEditor);
    document.getElementById('clearAllNotesBtn').addEventListener('click', clearAllNotes);
    document.getElementById('checkGrammarBtn').addEventListener('click', checkAllGrammar);
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Language dropdown
    const langTrigger = document.querySelector('.lang-trigger');
    const langDropdown = document.getElementById('langDropdown');
    
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', (e) => {
        if (!langTrigger.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });
    
    // Editor events
    editor.addEventListener('input', () => {
        updateStats();
        analyzeText();
        autoSave();
    });
    
    searchNotes.addEventListener('input', renderNotes);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveNote();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            checkAllGrammar();
        }
    });
}

// Load theme on startup
loadTheme();