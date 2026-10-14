import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const triggerConfetti = (origin = { x: 0.5, y: 0.6 }) => {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin,
      colors: ['#14b8a6', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'],
      ticks: 200,
      gravity: 0.8,
      scalar: 1,
      disableForReducedMotion: true,
    });
  } catch (err) {
    console.warn('Confetti error:', err);
  }
};

export default function Confetti({ trigger = false }) {
  useEffect(() => {
    if (trigger) {
      triggerConfetti();
    }
  }, [trigger]);

  return null;
}
