/**
 * Web Audio API Celebration Sound Synthesizer
 * 100% offline, zero external file dependencies.
 * Creates an exciting party popper "POP!" + victory fanfare chime + sparkle effect.
 */

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a triumphant, festive celebratory sound effect:
 * 1. Confetti party popper burst ("POP!")
 * 2. Ascending victory fanfare chimes (C5 - E5 - G5 - C6)
 * 3. Shimmering bell resonance
 */
export function playCelebrateSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // --- 1. PARTY POPPER "POP" (Noise burst + pitch drop) ---
  try {
    // Pop oscillator
    const popOsc = ctx.createOscillator();
    const popGain = ctx.createGain();
    popOsc.type = 'triangle';
    popOsc.frequency.setValueAtTime(380, now);
    popOsc.frequency.exponentialRampToValueAtTime(60, now + 0.08);

    popGain.gain.setValueAtTime(0.5, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    popOsc.connect(popGain);
    popGain.connect(ctx.destination);
    popOsc.start(now);
    popOsc.stop(now + 0.1);

    // Confetti cracker noise burst
    const bufferSize = ctx.sampleRate * 0.07;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.015));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1400, now);
    noiseFilter.Q.setValueAtTime(2.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);
  } catch (err) {
    console.warn('Popper sound error:', err);
  }

  // --- 2. VICTORY FANFARE ARPEGGIO CHIMES ---
  // Notes: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), C6 (1046.50Hz), E6 (1318.51Hz)
  const fanfareNotes = [
    { freq: 523.25, time: 0.04, duration: 0.35, gain: 0.22, type: 'sine' },
    { freq: 659.25, time: 0.12, duration: 0.35, gain: 0.24, type: 'sine' },
    { freq: 783.99, time: 0.20, duration: 0.40, gain: 0.26, type: 'triangle' },
    { freq: 1046.50, time: 0.28, duration: 0.75, gain: 0.32, type: 'sine' },
    { freq: 1318.51, time: 0.32, duration: 0.85, gain: 0.20, type: 'sine' },
    // Harmonizing fifth for triumphant finish
    { freq: 1567.98, time: 0.34, duration: 0.90, gain: 0.18, type: 'triangle' }
  ];

  fanfareNotes.forEach((note) => {
    try {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = note.type;
      osc.frequency.setValueAtTime(note.freq, now + note.time);

      // Slight vibrato for a joyful singing chime quality
      const startTime = now + note.time;
      gainNode.gain.setValueAtTime(0.001, startTime);
      gainNode.gain.linearRampToValueAtTime(note.gain, startTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + note.duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + note.duration);
    } catch (err) {
      console.warn('Note sound error:', err);
    }
  });

  // --- 3. SPARKLE SHIMMER (Falling confetti magic) ---
  const sparkleFrequencies = [2093.00, 2637.02, 3135.96, 3520.00];
  sparkleFrequencies.forEach((freq, idx) => {
    try {
      const sOsc = ctx.createOscillator();
      const sGain = ctx.createGain();
      const sTime = now + 0.38 + idx * 0.08;

      sOsc.type = 'sine';
      sOsc.frequency.setValueAtTime(freq, sTime);

      sGain.gain.setValueAtTime(0.001, sTime);
      sGain.gain.linearRampToValueAtTime(0.08, sTime + 0.01);
      sGain.gain.exponentialRampToValueAtTime(0.0001, sTime + 0.25);

      sOsc.connect(sGain);
      sGain.connect(ctx.destination);

      sOsc.start(sTime);
      sOsc.stop(sTime + 0.25);
    } catch (err) {
      console.warn('Sparkle sound error:', err);
    }
  });
}

/**
 * Super crisp, instant subtle audio feedback for toggle switches
 */
export function playSwitchClick() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(850, now);
    osc.frequency.exponentialRampToValueAtTime(450, now + 0.035);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  } catch (e) {
    // ignore
  }
}

