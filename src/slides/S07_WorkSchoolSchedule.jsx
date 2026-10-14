import React from 'react';
import { motion } from 'framer-motion';
import { familyData } from '../data/familyData';
import { useLanguage } from '../context/LanguageContext';
import { FiBriefcase, FiClock, FiCalendar } from 'react-icons/fi';

export default function S07_WorkSchoolSchedule() {
  const { q2_workSchool } = familyData;
  const { t } = useLanguage();
  const startDayHour = 7; // 07:00
  const endDayHour = 19; // 19:00
  const totalDayHours = endDayHour - startDayHour; // 12 hours

  return (
    <div className="flex flex-col justify-center h-full max-w-7xl mx-auto px-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <FiBriefcase className="text-sm" /> {t('Slide 7 • Survey Question 2', '7-slayd • So\'rovnoma 2-savoli')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            {q2_workSchool.question}
          </h2>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1 sm:mt-0">
          <FiCalendar className="text-teal-500" />
          <span>{t('Monday to Friday Daily Schedule Gantt Chart', 'Dushanbadan jumagacha kunlik jadval')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch my-auto">
        {/* Left: Gantt-style Timeline Diagram (8 cols) */}
        <div className="lg:col-span-8 glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span>{t('Work & School Hours Comparison', 'Ish va o\'qish soatlari taqqoslashi')}</span>
            <span className="font-mono">{t('Day Span: 07:00 – 19:00 (12 Hours)', 'Kunlik qamrov: 07:00 – 19:00 (12 soat)')}</span>
          </div>

          {/* Time axis header marks */}
          <div className="relative w-full h-6 border-b border-slate-200 dark:border-slate-800 mb-2 pl-28 text-[11px] font-mono text-slate-400">
            <div className="absolute left-28 right-0 flex justify-between">
              <span>07:00</span>
              <span>09:00</span>
              <span>11:00</span>
              <span>13:00</span>
              <span>15:00</span>
              <span>17:00</span>
              <span>19:00</span>
            </div>
          </div>

          {/* Gantt Rows */}
          <div className="space-y-3.5 my-auto">
            {q2_workSchool.chartData.map((row, idx) => {
              const leftPercent = ((row.startHour - startDayHour) / totalDayHours) * 100;
              const widthPercent = ((row.endHour - row.startHour) / totalDayHours) * 100;

              return (
                <div key={row.member} className="flex items-center gap-2">
                  {/* Member Label (Fixed width) */}
                  <div className="w-24 sm:w-28 shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-slate-900 dark:text-white">
                    <span className="text-base">{row.avatar}</span>
                    <span className="truncate">{row.member}</span>
                  </div>

                  {/* Gantt Bar Track */}
                  <div className="flex-1 h-9 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 relative overflow-hidden border border-slate-200/60 dark:border-slate-700/60">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: `${widthPercent}%`, opacity: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                      style={{
                        left: `${leftPercent}%`,
                        backgroundColor: row.color,
                      }}
                      className="absolute top-1 bottom-1 rounded-lg px-2 flex items-center justify-between text-white text-[11px] font-semibold shadow-sm truncate"
                    >
                      <span className="truncate">{row.timeSpan}</span>
                      <span className="hidden sm:inline bg-black/20 px-1.5 py-0.5 rounded text-[10px]">
                        {row.duration}
                      </span>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>{t('💡 Notice: Salohiddin studies in the afternoon (13:00–18:00)', '💡 E\'tibor bering: Salohiddin tushdan keyin o\'qiydi (13:00–18:00)')}</span>
            <span className="text-teal-500 font-semibold">{t('Longest: Father (9.5 h)', 'Eng uzog\'i: Dadam (9.5 soat)')}</span>
          </div>
        </div>

        {/* Right: Analysis & Present Simple Sentences (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <FiClock className="text-teal-500" />
              <span>{t('Routine Sentences (Grammar):', 'Kun tartibi jumlalari (Grammatika):')}</span>
            </h3>

            <div className="space-y-2.5">
              {q2_workSchool.sentences.map((sentence, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  {sentence}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-800 dark:text-teal-300 leading-snug">
            {t('📌 Time Expressions: from 8:00 until 17:30 • in the morning • after school.', '📌 Vaqt iboralari: soat 8:00 dan 17:30 gacha • ertalab • maktabdan keyin.')}
          </div>
        </div>
      </div>
    </div>
  );
}
