import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  duration = 0.5, 
  decimals = 0, 
  prefix = '', 
  suffix = '',
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);
  const lastFormattedRef = useRef(shouldReduceMotion ? String(value) : '0');

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp = null;
    const startValue = 0;
    const endValue = Number(value) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Smooth easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * ease;
      
      const formatted = decimals > 0 
        ? current.toFixed(decimals) 
        : String(Math.round(current));

      if (formatted !== lastFormattedRef.current) {
        lastFormattedRef.current = formatted;
        setDisplayValue(current);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [value, duration, decimals, shouldReduceMotion]);

  const formatted = decimals > 0 
    ? Number(displayValue).toFixed(decimals) 
    : Math.round(displayValue).toString();

  return (
    <span className={`inline-block tabular-nums font-semibold ${className}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
