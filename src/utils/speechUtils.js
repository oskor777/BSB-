/**
 * Text-to-Speech (TTS) Engine for BSB Presentation
 * 100% offline, native Web Speech API.
 * High-quality English pronunciation with natural speech rate.
 */

let cachedVoices = [];

// Initialize voices
function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  if (cachedVoices.length > 0) return cachedVoices;

  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    cachedVoices = voices;
  }
  return cachedVoices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

/**
 * Find best English voice available on system (Edge Natural, Google US, Windows David/Mark/Zira)
 */
export function getBestEnglishVoice() {
  const voices = loadVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Natural / Online voices (Edge & Windows 11 high quality)
  const natural = voices.find(v => 
    v.lang.startsWith('en') && 
    (v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Jenny') || v.name.includes('Guy') || v.name.includes('Aria'))
  );
  if (natural) return natural;

  // 2. Google US / UK English (Chrome)
  const google = voices.find(v => 
    v.lang.startsWith('en') && v.name.includes('Google')
  );
  if (google) return google;

  // 3. Any standard US or UK English voice (David, Mark, Zira, Hazel)
  const standardEn = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB');
  if (standardEn) return standardEn;

  // 4. Any English voice
  const anyEn = voices.find(v => v.lang.startsWith('en'));
  if (anyEn) return anyEn;

  return voices[0] || null;
}

export function getBestVoice(isUz = false) {
  const voices = loadVoices();
  if (!voices || voices.length === 0) return null;

  if (isUz) {
    // Look for Uzbek voice, or Turkic/neutral regional voice
    const uzVoice = voices.find(v => v.lang.startsWith('uz') || v.lang === 'uz-UZ');
    if (uzVoice) return uzVoice;
    const trVoice = voices.find(v => v.lang.startsWith('tr') || v.lang.startsWith('ru'));
    if (trVoice) return trVoice;
  }

  return getBestEnglishVoice();
}

// Active speech state tracker
let activeUtterance = null;
let keepAliveTimer = null;

function clearKeepAlive() {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

/**
 * Speak text in natural speech.
 * @param {string} text - The text to read aloud
 * @param {object} options - { onStart, onEnd, onError, rate = 0.92, pitch = 1.0, isUz }
 * @returns {boolean} - True if speech successfully queued
 */
export function speakText(text, options = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis is not supported in this browser.');
    if (options.onError) options.onError(new Error('SpeechSynthesis not supported'));
    return false;
  }

  // Cancel any existing playback
  stopSpeech();

  if (!text || !text.trim()) {
    if (options.onEnd) options.onEnd();
    return false;
  }

  try {
    const isUz = options.isUz !== undefined 
      ? options.isUz 
      : (typeof window !== 'undefined' && localStorage.getItem('bsb_lang') === 'uz');

    const utterance = new SpeechSynthesisUtterance(text.trim());
    const voice = getBestVoice(isUz);
    if (voice) {
      utterance.voice = voice;
    }
    utterance.lang = isUz ? 'uz-UZ' : 'en-US';
    utterance.rate = options.rate !== undefined ? options.rate : 0.92;
    utterance.pitch = options.pitch !== undefined ? options.pitch : 1.0;

    utterance.onstart = () => {
      activeUtterance = utterance;
      // Chrome workaround: resume periodically to prevent early pause on long text
      clearKeepAlive();
      keepAliveTimer = setInterval(() => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        } else {
          clearKeepAlive();
        }
      }, 10000);

      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      clearKeepAlive();
      activeUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      clearKeepAlive();
      activeUtterance = null;
      // 'interrupted' or 'canceled' are normal when user clicks stop
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('SpeechSynthesis error:', e.error);
        if (options.onError) options.onError(e);
      } else {
        if (options.onEnd) options.onEnd();
      }
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('Failed to trigger speech:', err);
    clearKeepAlive();
    activeUtterance = null;
    if (options.onError) options.onError(err);
    return false;
  }
}

/**
 * Stop any ongoing speech immediately.
 */
export function stopSpeech() {
  clearKeepAlive();
  activeUtterance = null;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      // ignore
    }
  }
}

/**
 * Check if speech is currently active
 */
export function isSpeaking() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
  return window.speechSynthesis.speaking;
}
