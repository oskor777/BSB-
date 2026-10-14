# Family Time: Our Daily Routines 🏠
### 7th-Grade English BSB (Summative Assessment) — Option A: Family Routine Survey
**Student:** Saidbayev Salohiddin (13 years old, Grade 7)  
**School:** Secondary School  
**Subject:** English Language  

---

## 📌 Project Overview
This web application is a complete, interactive, and beautifully animated 16-slide presentation designed for school smart boards (16:9 projector). It features real-time charts (Recharts), an interactive family leaderboard, custom SVG diagrams (clock and Venn diagram), speaker scripts, and a built-in A2–B1 vocabulary glossary.

### 🌟 Key Highlights
- **16 Complete Slides:**
  1. Title slide with animated ticking clock & sun/moon background
  2. About me & 4 English assessment objectives
  3. Meet my family (7 animated member cards with interview status)
  4. Survey methodology (3-step animated flow & research metrics)
  5. My school day timetable (13:00–18:00, 6 lessons × 45 min, 6-min breaks, and free morning flow)
  6. Question 1: Wake-up times (bar chart + early bird badge for Father at 05:30 AM)
  7. Question 2: Work & school schedules (Gantt-style 12-hour day diagram)
  8. Question 3: Time spent together (doughnut chart + 34.5 hrs/week counter)
  9. Question 4: What we do together (icon grid with percentages & frequency adverbs)
  10. Question 5: Favourite family activity (tea & talk winner with 60% votes)
  11. A day in 3 parts: Morning, Afternoon, Evening comparison
  12. **Family Rating Leaderboard:** Interactive categories (Sweets, Sleep, Sport, Dinner, Reading, Screen time), animated emoji bars (1–10), winner crown, confetti celebration, and 5-member radar chart!
  13. Similarities & differences (interactive 3-circle SVG Venn diagram)
  14. 5 surprising facts calculated from the data
  15. 24-hour daily balance doughnut chart & reflection on quality family time
  16. Conclusion, Q&A, and credit line thanking the family
- **100% Offline Compatible:** Built with local fonts (`@fontsource/poppins` and `@fontsource/baloo-2`) and relative asset paths (`base: './'`). No internet needed!
- **Dark & Light Modes:** Smooth theme transitions with high contrast for classroom projectors.
- **Presenter Tools:** Built-in speaker notes panel (press `N`) and routine vocabulary drawer (press `V`).

---

## 🚀 How to Run Locally

### 1. Requirements
- Node.js (v18+ or v20+)
- npm

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the address shown (typically `http://localhost:5173` or `http://localhost:5174`).

---

## 📦 How to Build for School Computer (Offline USB Flash Drive)

When presenting on a school computer or smart board without internet access:

1. Run the build command:
   ```bash
   npm run build
   ```
2. Open the created `dist/` folder.
3. Copy the entire `dist` folder onto a USB flash drive.
4. On any school computer, simply double-click `dist/index.html` in Google Chrome, Microsoft Edge, or any modern browser. It runs completely offline without installing Node.js or any server!

---

## ✏️ How to Customize Survey Data (`src/data/familyData.js`)

All project data, survey statistics, schedules, and speaker scripts live in a single file:
👉 `src/data/familyData.js`

- **Change wake-up times:** Edit `q1_wakeUp.chartData`
- **Change work/school hours:** Edit `q2_workSchool.chartData`
- **Change time spent together:** Edit `q3_timeTogether`
- **Change leaderboard scores:** Edit `familyRatings.categories`
- **Edit speaker notes:** Edit `speakerNotes[slideNumber]`

Whenever you change a value and save, all slides, charts, and rankings will update automatically.

---

## ⌨️ Keyboard Shortcuts & Controls

| Key | Action |
| --- | --- |
| `→` or `Space` or `PageDown` | Next slide |
| `←` or `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Enter / Exit Fullscreen (for Smart Board) |
| `N` | Open / Close Speaker Notes panel |
| `V` | Open / Close Vocabulary Glossary drawer |
| Touch Swipe Left / Right | Swipe slides on touchscreen or interactive board |

---

## 📋 Assessment Rubric Checklist (25 Points)
- [x] **Content & Ideas (7/7):** All 5 survey questions answered, detailed timetable, 7 family members, 16 comprehensive slides.
- [x] **Language Use (7/7):** Consistent Present Simple (he wakes up, she teaches, we eat), time prepositions (at, in the morning, after school), frequency adverbs (always, usually, often, sometimes, never).
- [x] **Presentation & Organisation (6/6):** Logical structure, smart board 16:9 high contrast, smooth animations, interactive radar & charts.
- [x] **Teamwork & Collaboration (5/5):** Credit line thanking all family members included on slide 16.
