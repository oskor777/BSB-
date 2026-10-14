import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-all shadow-sm ${
        isDark 
          ? 'bg-slate-800/90 text-amber-300 border-slate-700 hover:bg-slate-700/80 hover:border-amber-400/40' 
          : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-amber-600'
      }`}
      aria-label="Toggle dark/light mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span className="text-base">
        {isDark ? <FiSun className="text-amber-400" /> : <FiMoon className="text-indigo-600" />}
      </span>
      <span className="hidden sm:inline font-medium">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </motion.button>
  );
}
