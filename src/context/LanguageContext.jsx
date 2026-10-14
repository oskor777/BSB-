import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { familyDataEn, familyDataUz, setGlobalDataLang, getGlobalDataLang } from '../data/familyData';

const LanguageContext = createContext();

export const slideCategoriesEn = [
  "Introduction • Title",
  "Researcher Profile • Assessment Goals",
  "Family Structure • 7 Members",
  "Research Method • 3-Step Process",
  "Student Life • 13:00 to 18:00 Timetable",
  "Survey Question 1 • Wake-Up Time",
  "Survey Question 2 • Work & School Schedules",
  "Survey Question 3 • Hours Spent Together",
  "Survey Question 4 • Activities Together",
  "Survey Question 5 • Favourite Family Activity",
  "Routines Comparison • Morning, Afternoon & Evening",
  "Interactive Leaderboard • Family Rating System",
  "Venn Diagram • Similarities & Differences",
  "Data Analysis • 5 Surprising Facts",
  "Daily Balance • Work, School, Family & Rest",
  "Conclusion & Reflection • Q&A"
];

export const slideCategoriesUz = [
  "Kirish • Bosh sahifa",
  "Tadqiqotchi profili • BSB maqsadlari",
  "Oila tarkibi • 7 nafar a'zo",
  "Tadqiqot usuli • 3 bosqich",
  "O'quvchi hayoti • 13:00 dan 18:00 gacha dars jadvali",
  "1-savol • Uyg'onish vaqti",
  "2-savol • Ish va maktab jadvali",
  "3-savol • Birga o'tkaziladigan vaqt",
  "4-savol • Birgalikdagi mashg'ulotlar",
  "5-savol • Sevimli oilaviy mashg'ulot",
  "Kun tartibini taqqoslash • Ertalab, kunduzi va kechqurun",
  "Interaktiv reyting • Oila a'zolari ballari",
  "Venn diagrammasi • O'xshashlik va farqlar",
  "Ma'lumotlar tahlili • 5 ta qiziqarli fakt",
  "Kunlik balans • Maktab, oila va dam olish",
  "Xulosa va minnatdorchilik • Savol-javob"
];

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => getGlobalDataLang());

  const setLang = useCallback((targetLang) => {
    const validLang = targetLang === 'uz' ? 'uz' : 'en';
    setGlobalDataLang(validLang); // Instant 0ms in-memory and storage update
    setLangState(validLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'uz' : 'en');
  }, [lang, setLang]);

  const isUz = lang === 'uz';

  const data = useMemo(() => {
    return isUz ? familyDataUz : familyDataEn;
  }, [isUz]);

  const slideCategories = useMemo(() => {
    return isUz ? slideCategoriesUz : slideCategoriesEn;
  }, [isUz]);

  const t = useCallback((enText, uzText) => {
    return isUz ? uzText : enText;
  }, [isUz]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isUz, data, slideCategories, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
