import React from 'react';
import { useReducedMotion } from 'framer-motion';

const emojiList = [
  { emoji: '☀️', x: '8%', y: '15%', size: 'text-3xl', duration: '18s', delay: '0s' },
  { emoji: '⏰', x: '88%', y: '18%', size: 'text-2xl', duration: '22s', delay: '2s' },
  { emoji: '📚', x: '92%', y: '72%', size: 'text-3xl', duration: '20s', delay: '1s' },
  { emoji: '🍵', x: '6%', y: '78%', size: 'text-2xl', duration: '24s', delay: '3s' },
  { emoji: '⚽', x: '82%', y: '45%', size: 'text-2xl', duration: '19s', delay: '2.5s' },
  { emoji: '🌙', x: '14%', y: '48%', size: 'text-2xl', duration: '21s', delay: '1.5s' },
];

export default function FloatingEmojis() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-25 dark:opacity-20">
      {emojiList.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.size} filter drop-shadow-sm`}
          style={{
            left: item.x,
            top: item.y,
            willChange: 'transform',
            animation: `floatEmoji ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
            transform: 'translateZ(0)',
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
