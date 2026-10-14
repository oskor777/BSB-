/**
 * FAMILY ROUTINE SURVEY - RESEARCH PROJECT DATA
 * English Summative Assessment (BSB) - Grade 7
 * Student: Saidbayev Salohiddin, 13 years old
 *
 * NOTE FOR TEACHER / EXAMINER / STUDENT:
 * All survey numbers, interview answers, and speaker scripts live in this single file.
 * You can easily modify any value below, and all charts, slides, and rankings will
 * automatically recalculate and update in real time!
 */

import { familyDataUz } from './familyDataUz';

export const familyDataEn = {
  // Student Profile and Presentation Metadata
  projectInfo: {
    title: "Family Time: Our Daily Routines",
    subtitle: "Option A: Family Routine Survey (Research)",
    subject: "English Language (BSB Summative Assessment)",
    grade: "Grade 7",
    student: {
      name: "Saidbayev Salohiddin",
      age: 13,
      role: "7th-Grade Student & Lead Researcher",
      school: "Secondary School No. 42",
      city: "Tashkent, Uzbekistan",
      avatarEmoji: "🎒",
      bio: "Hello! My name is Salohiddin. I am 13 years old and I study in the 7th grade. I live in Tashkent with my big, loving family of 7. In my free time, I love reading English books, playing football with my brothers, and learning computer coding.",
      hobbies: [
        { name: "Reading English", icon: "📚", note: "I read English stories every morning." },
        { name: "Playing Football", icon: "⚽", note: "I play with my brother Muhammadsodiq on weekends." },
        { name: "Coding & Tech", icon: "💻", note: "I create presentations and simple programs." },
        { name: "Family Time", icon: "🍵", note: "I help my parents and talk with my family." },
      ],
      objectives: [
        {
          id: 1,
          title: "Master Routine Vocabulary",
          icon: "📖",
          desc: "Practise verbs like 'wake up', 'have breakfast', 'go to school', and 'have dinner'."
        },
        {
          id: 2,
          title: "Use Present Simple Accurately",
          icon: "✍️",
          desc: "Apply 3rd-person 's/es' forms (he works, she teaches, we spend time together)."
        },
        {
          id: 3,
          title: "Collect & Present Survey Data",
          icon: "📊",
          desc: "Interview 5 family members and display results with interactive charts."
        },
        {
          id: 4,
          title: "Compare Daily Routines",
          icon: "🔍",
          desc: "Identify similarities and differences in how my family spends 24 hours."
        }
      ]
    }
  },

  // All 7 Family Members (5 interviewed + 2 little siblings)
  familyMembers: [
    {
      id: "father",
      name: "Baxtiyor",
      relationship: "Father",
      age: 42,
      occupation: "Civil Engineer",
      interviewed: true,
      avatar: "👨‍💼",
      color: "#3b82f6", // Blue
      bgGradient: "from-blue-500/20 to-indigo-500/10",
      description: "He designs building structures. He is hardworking, calm, and loves evening tea with the family.",
      shortRoutine: "He wakes up at 5:30 AM, goes to work at 8:00 AM, and comes home at 17:30 PM."
    },
    {
      id: "mother",
      name: "Nodira",
      relationship: "Mother",
      age: 39,
      occupation: "Primary School Teacher",
      interviewed: true,
      avatar: "👩‍🏫",
      color: "#ec4899", // Pink
      bgGradient: "from-pink-500/20 to-rose-500/10",
      description: "She teaches young children. She is kind, caring, and makes delicious food for everyone.",
      shortRoutine: "She wakes up at 6:15 AM, teaches morning classes, and organizes our home."
    },
    {
      id: "salohiddin",
      name: "Salohiddin (Me)",
      relationship: "Me (Student)",
      age: 13,
      occupation: "Grade 7 Student",
      interviewed: true,
      avatar: "🎒",
      color: "#14b8a6", // Teal
      bgGradient: "from-teal-500/20 to-emerald-500/10",
      description: "I study in the 7th grade. My school is in the afternoon shift (13:00 to 18:00).",
      shortRoutine: "I wake up at 8:00 AM, study English in the morning, and go to school at 13:00."
    },
    {
      id: "muhammadsodiq",
      name: "Muhammadsodiq",
      relationship: "Brother 1 (Ukam)",
      age: 10,
      occupation: "Grade 4 Student",
      interviewed: true,
      avatar: "⚽",
      color: "#f59e0b", // Amber
      bgGradient: "from-amber-500/20 to-yellow-500/10",
      description: "He is energetic, loves football, and always asks for chocolate and sweets.",
      shortRoutine: "He wakes up at 7:15 AM, attends morning school, and plays football after lunch."
    },
    {
      id: "sora",
      name: "Sora",
      relationship: "Sister 1 (Singlim)",
      age: 8,
      occupation: "Grade 2 Student",
      interviewed: true,
      avatar: "🎨",
      color: "#8b5cf6", // Purple
      bgGradient: "from-purple-500/20 to-fuchsia-500/10",
      description: "She loves drawing pictures, singing, and helping our mother set the dining table.",
      shortRoutine: "She wakes up at 7:30 AM, goes to morning school, and paints in the afternoon."
    },
    {
      id: "muhammadbilol",
      name: "Muhammadbilol",
      relationship: "Brother 2 (Ukam)",
      age: 7,
      occupation: "Grade 1 Student",
      interviewed: false, // Not interviewed (shows in 'Meet My Family')
      avatar: "🧸",
      color: "#06b6d4", // Cyan
      bgGradient: "from-cyan-500/20 to-sky-500/10",
      description: "Our younger brother. He started first grade this year and loves building Lego towers.",
      shortRoutine: "He wakes up at 7:45 AM, learns the alphabet, and plays with toys."
    },
    {
      id: "sofiya",
      name: "Sofiya",
      relationship: "Sister 2 (Singlim)",
      age: 5,
      occupation: "Kindergarten",
      interviewed: false, // Not interviewed (shows in 'Meet My Family')
      avatar: "🎀",
      color: "#f43f5e", // Rose
      bgGradient: "from-rose-500/20 to-pink-500/10",
      description: "The baby of our house! She is 5 years old, always smiles, and loves nursery rhymes.",
      shortRoutine: "She goes to kindergarten at 8:30 AM and plays happily all day."
    }
  ],

  // Survey Methodology (3-step animated flow)
  surveyMethodology: {
    title: "How I Did My Research Survey",
    steps: [
      {
        step: 1,
        title: "Prepared 5 Key Questions",
        icon: "📝",
        time: "Step 1: Preparation",
        desc: "I wrote 5 clear questions about wake-up times, schedules, and family activities using simple English."
      },
      {
        step: 2,
        title: "Conducted Evening Interviews",
        icon: "🎙️",
        time: "Step 2: Field Research",
        desc: "During Sunday family dinner, I interviewed 5 family members (Father, Mother, Muhammadsodiq, Sora, and myself)."
      },
      {
        step: 3,
        title: "Calculated & Visualized Data",
        icon: "📈",
        time: "Step 3: Data Analysis",
        desc: "I counted hours, created comparison charts, and identified our family routine patterns."
      }
    ],
    summaryStats: {
      totalQuestions: 5,
      peopleInterviewed: 5,
      totalHousehold: 7,
      completionRate: "100%"
    }
  },

  // My School Day Schedule (Afternoon shift: 13:00 - 18:00)
  schoolDay: {
    headline: "My School Day: The Afternoon Shift (13:00 - 18:00)",
    totalLessons: 6,
    lessonDurationMin: 45,
    breakDurationMin: 6,
    totalLessonHours: "4 hours 30 minutes",
    totalSchoolHours: "5 hours",
    dailyStudyHours: 6, // 4.5h lessons + 1.5h morning self-study/homework
    schedule: [
      { period: 1, subject: "Mathematics", start: "13:00", end: "13:45", icon: "📐", room: "Room 204" },
      { period: 2, subject: "English Language", start: "13:51", end: "14:36", icon: "🇬🇧", room: "Language Lab" },
      { period: 3, subject: "History", start: "14:42", end: "15:27", icon: "🏺", room: "Room 108" },
      { period: 4, subject: "Uzbek Literature", start: "15:33", end: "16:18", icon: "📖", room: "Room 210" },
      { period: 5, subject: "Biology / Science", start: "16:24", end: "17:09", icon: "🔬", room: "Science Lab" },
      { period: 6, subject: "Physical Education", start: "17:15", end: "18:00", icon: "🏃", room: "Gymnasium" },
    ],
    myDailyFlow: [
      { time: "08:00", action: "Wake up & fresh air", icon: "⏰", tag: "Morning" },
      { time: "08:30", action: "Healthy breakfast with tea", icon: "🍳", tag: "Morning" },
      { time: "09:15", action: "Self-study & English reading", icon: "📚", tag: "Morning" },
      { time: "11:00", action: "Physical workout & help mom", icon: "💪", tag: "Morning" },
      { time: "12:15", action: "Lunch & pack backpack", icon: "🥪", tag: "Prep" },
      { time: "13:00", action: "School lessons start", icon: "🏫", tag: "School" },
      { time: "18:00", action: "School ends & walk home", icon: "🚶", tag: "School" },
      { time: "18:20", action: "Arrive home & relax", icon: "🏡", tag: "Evening" },
      { time: "19:30", action: "Family dinner together", icon: "🍽️", tag: "Family Time" },
      { time: "20:30", action: "Homework review & talk", icon: "💬", tag: "Evening" },
      { time: "22:30", action: "Go to bed & sleep", icon: "🌙", tag: "Night" },
    ]
  },

  // Survey Question 1: Wake-up Time
  q1_wakeUp: {
    question: "Question 1: What time do you wake up?",
    earlyBirdWinner: "Father (Baxtiyor)",
    earlyBirdTime: "05:30 AM",
    badgeTitle: "The Early Bird 🌅",
    chartData: [
      { member: "Father", timeString: "05:30", decimalHour: 5.5, label: "5:30 AM", avatar: "👨‍💼", note: "Prays & prepares for work", fill: "#3b82f6" },
      { member: "Mother", timeString: "06:15", decimalHour: 6.25, label: "6:15 AM", avatar: "👩‍🏫", note: "Prepares breakfast for 7", fill: "#ec4899" },
      { member: "Muhammadsodiq", timeString: "07:15", decimalHour: 7.25, label: "7:15 AM", avatar: "⚽", note: "Gets ready for morning school", fill: "#f59e0b" },
      { member: "Sora", timeString: "07:30", decimalHour: 7.5, label: "7:30 AM", avatar: "🎨", note: "Eats breakfast & dresses up", fill: "#8b5cf6" },
      { member: "Salohiddin", timeString: "08:00", decimalHour: 8.0, label: "8:00 AM", avatar: "🎒", note: "Has free morning before 13:00 school", fill: "#14b8a6" },
    ],
    grammaticalAnalysis: [
      "Father wakes up earliest at 5:30 AM every day.",
      "Mother gets up at 6:15 AM and cooks delicious breakfast.",
      "Muhammadsodiq and Sora wake up around 7:15–7:30 AM for morning school.",
      "I wake up at 8:00 AM because my school starts in the afternoon."
    ]
  },

  // Survey Question 2: Work & School Schedules
  q2_workSchool: {
    question: "Question 2: What time do you go to work or school?",
    chartData: [
      {
        member: "Father",
        role: "Engineer",
        startHour: 8.0,
        endHour: 17.5,
        timeSpan: "08:00 - 17:30",
        duration: "9.5 hrs",
        activity: "Civil Engineering Office & Sites",
        avatar: "👨‍💼",
        color: "#3b82f6"
      },
      {
        member: "Mother",
        role: "Teacher",
        startHour: 8.5,
        endHour: 14.0,
        timeSpan: "08:30 - 14:00",
        duration: "5.5 hrs",
        activity: "Teaching Primary School Classes",
        avatar: "👩‍🏫",
        color: "#ec4899"
      },
      {
        member: "Muhammadsodiq",
        role: "Grade 4",
        startHour: 8.0,
        endHour: 12.5,
        timeSpan: "08:00 - 12:30",
        duration: "4.5 hrs",
        activity: "Morning School Shift (Lessons)",
        avatar: "⚽",
        color: "#f59e0b"
      },
      {
        member: "Sora",
        role: "Grade 2",
        startHour: 8.0,
        endHour: 12.25,
        timeSpan: "08:00 - 12:15",
        duration: "4.25 hrs",
        activity: "Morning School Shift (Lessons)",
        avatar: "🎨",
        color: "#8b5cf6"
      },
      {
        member: "Salohiddin",
        role: "Grade 7",
        startHour: 13.0,
        endHour: 18.0,
        timeSpan: "13:00 - 18:00",
        duration: "5.0 hrs",
        activity: "Afternoon School Shift (6 Lessons)",
        avatar: "🎒",
        color: "#14b8a6"
      }
    ],
    sentences: [
      "Father leaves for work at 8:00 AM and returns home at 17:30 PM.",
      "Mother teaches at school from 8:30 AM until 14:00 PM.",
      "Muhammadsodiq and Sora go to school in the morning together.",
      "I leave home at 12:45 PM and study at school until 18:00 PM."
    ]
  },

  // Survey Question 3: Time Spent Together
  q3_timeTogether: {
    question: "Question 3: How much time do you spend together?",
    weekdayHours: 3.5, // 3.5 hours per day
    weekendHours: 8.5, // 8.5 hours per day
    weeklyTotalHours: 34.5, // (3.5 * 5) + (8.5 * 2) = 17.5 + 17 = 34.5 hrs!
    doughnutData: [
      { name: "Family Dinner & Green Tea", value: 40, color: "#14b8a6", emoji: "🍵", hours: "14 hrs/wk" },
      { name: "Family Talks & Storytelling", value: 25, color: "#3b82f6", emoji: "💬", hours: "8.5 hrs/wk" },
      { name: "Helping Each Other & Study", value: 15, color: "#f59e0b", emoji: "🤝", hours: "5.2 hrs/wk" },
      { name: "Board Games & TV Time", value: 12, color: "#8b5cf6", emoji: "🎲", hours: "4.1 hrs/wk" },
      { name: "Weekend Walks & Park Trips", value: 8, color: "#ec4899", emoji: "🌳", hours: "2.7 hrs/wk" },
    ],
    highlightInsight: "On weekdays, we spend about 3.5 hours together in the evening. On weekends, we spend over 8 hours together!"
  },

  // Survey Question 4: What We Do Together
  q4_whatWeDoTogether: {
    question: "Question 4: What do you usually do together?",
    activities: [
      {
        id: "dinner",
        title: "Having Dinner & Tea",
        frequency: "Always (100%)",
        percentage: 100,
        adverb: "Always",
        icon: "🍽️",
        color: "#14b8a6",
        sentence: "We always sit around the dastarkhan and have dinner at 19:30."
      },
      {
        id: "talk",
        title: "Talking About Our Day",
        frequency: "Usually (90%)",
        percentage: 90,
        adverb: "Usually",
        icon: "💬",
        color: "#3b82f6",
        sentence: "Father usually asks us how our school day was."
      },
      {
        id: "help",
        title: "Helping Around the House",
        frequency: "Often (80%)",
        percentage: 80,
        adverb: "Often",
        icon: "🧹",
        color: "#10b981",
        sentence: "My brothers and I often help our mother clean the kitchen."
      },
      {
        id: "movie",
        title: "Watching Family Shows / Films",
        frequency: "Sometimes (65%)",
        percentage: 65,
        adverb: "Sometimes",
        icon: "📺",
        color: "#8b5cf6",
        sentence: "On Friday evenings, we sometimes watch family movies together."
      },
      {
        id: "games",
        title: "Playing Board Games & Football",
        frequency: "Sometimes (55%)",
        percentage: 55,
        adverb: "Sometimes",
        icon: "🎲",
        color: "#f59e0b",
        sentence: "Muhammadsodiq and I sometimes play chess or football on Sundays."
      },
      {
        id: "walk",
        title: "Walking in the Park / City",
        frequency: "On Weekends (45%)",
        percentage: 45,
        adverb: "On Weekends",
        icon: "🌳",
        color: "#ec4899",
        sentence: "We sometimes walk in the park on sunny weekend afternoons."
      }
    ]
  },

  // Survey Question 5: Favourite Family Activity
  q5_favoriteActivity: {
    question: "Question 5: What is everyone's favourite family activity?",
    winner: "Evening Tea & Talking Together",
    winnerVotes: 3,
    totalVotes: 5,
    chartData: [
      { activity: "Evening Tea & Talk", votes: 3, percentage: 60, icon: "🍵", color: "#14b8a6", isWinner: true },
      { activity: "Cooking & Dinner", votes: 2, percentage: 40, icon: "🍲", color: "#3b82f6", isWinner: false },
      { activity: "Weekend Trips / Picnics", votes: 1, percentage: 20, icon: "🧺", color: "#f59e0b", isWinner: false },
      { activity: "Playing Games & Sports", votes: 1, percentage: 20, icon: "⚽", color: "#8b5cf6", isWinner: false },
    ],
    votersBreakdown: [
      { member: "Father", choice: "Evening Tea & Talk 🍵", reason: "He loves hearing about our school achievements." },
      { member: "Mother", choice: "Cooking & Dinner 🍲", reason: "She enjoys when the whole family sits together happily." },
      { member: "Salohiddin", choice: "Evening Tea & Talk 🍵", reason: "I love sharing funny stories and discussing my lessons." },
      { member: "Muhammadsodiq", choice: "Playing Games & Sports ⚽", reason: "He wants to score goals and play all day." },
      { member: "Sora", choice: "Evening Tea & Talk 🍵", reason: "She loves showing her drawings during tea time." },
    ]
  },

  // Three Parts of the Day Routine Comparison
  threePartsOfDay: {
    title: "A Day in 3 Parts: Morning, Afternoon, Evening",
    subtitle: "Comparing daily habits in our household",
    parts: [
      {
        id: "morning",
        title: "Morning (06:00 - 12:00)",
        tagline: "Busy Start & Preparation",
        icon: "🌅",
        accent: "from-amber-500/20 to-orange-500/10",
        borderColor: "border-amber-400/30",
        routines: [
          { person: "Father", habit: "He drinks hot tea and drives to work at 08:00.", icon: "👨‍💼" },
          { person: "Mother", habit: "She prepares breakfast, then teaches at school.", icon: "👩‍🏫" },
          { person: "Salohiddin", habit: "I read English books, do exercises, and study.", icon: "🎒" },
          { person: "Muhammadsodiq & Sora", habit: "They go to morning school and learn their lessons.", icon: "🎒" },
        ]
      },
      {
        id: "afternoon",
        title: "Afternoon (12:00 - 18:00)",
        tagline: "Work, School & Studies",
        icon: "☀️",
        accent: "from-blue-500/20 to-cyan-500/10",
        borderColor: "border-blue-400/30",
        routines: [
          { person: "Father", habit: "He oversees building sites and works on drawings.", icon: "👨‍💼" },
          { person: "Mother", habit: "She returns home at 14:00 and cooks lunch.", icon: "👩‍🏫" },
          { person: "Salohiddin", habit: "I attend 6 lessons at school (13:00–18:00).", icon: "🎒" },
          { person: "Muhammadsodiq & Sora", habit: "They come home, do homework, and play.", icon: "⚽" },
        ]
      },
      {
        id: "evening",
        title: "Evening (18:00 - 23:00)",
        tagline: "Family Reunion & Rest",
        icon: "🌙",
        accent: "from-indigo-500/20 to-purple-500/10",
        borderColor: "border-indigo-400/30",
        routines: [
          { person: "Father", habit: "He arrives at 17:30 and rests with green tea.", icon: "👨‍💼" },
          { person: "Mother", habit: "She serves dinner and talks with all 5 children.", icon: "👩‍🏫" },
          { person: "Salohiddin", habit: "I arrive home at 18:20 and eat dinner at 19:30.", icon: "🎒" },
          { person: "All Together", habit: "We drink tea, talk, laugh, and sleep by 22:30.", icon: "🍵" },
        ]
      }
    ]
  },

  // Family Rating System ("Who loves it the most?" - Key Interactive Slide)
  familyRatings: {
    title: "Family Rating: Who Loves It the Most?",
    subtitle: "Interactive leaderboard & scoring system (1 to 10 points)",
    categories: [
      {
        id: "sweets",
        name: "Sweets & Desserts",
        icon: "🍬",
        emojiChar: "🍬",
        unit: "candies",
        winnerId: "muhammadsodiq",
        winnerText: "Brother Muhammadsodiq loves sweets the most! He eats sweets and chocolates every day.",
        scores: [
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 10, avatar: "⚽", rank: 1 },
          { memberId: "sora", name: "Sora", score: 9, avatar: "🎨", rank: 2 },
          { memberId: "salohiddin", name: "Salohiddin", score: 8, avatar: "🎒", rank: 3 },
          { memberId: "mother", name: "Mother", score: 6, avatar: "👩‍🏫", rank: 4 },
          { memberId: "father", name: "Father", score: 4, avatar: "👨‍💼", rank: 5 },
        ]
      },
      {
        id: "sleep",
        name: "Sleeping & Resting",
        icon: "😴",
        emojiChar: "⭐",
        unit: "stars",
        winnerId: "salohiddin",
        winnerText: "Salohiddin loves sleeping the most! He wakes up at 8:00 AM because of afternoon school.",
        scores: [
          { memberId: "salohiddin", name: "Salohiddin", score: 9, avatar: "🎒", rank: 1 },
          { memberId: "sora", name: "Sora", score: 8, avatar: "🎨", rank: 2 },
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 7, avatar: "⚽", rank: 3 },
          { memberId: "mother", name: "Mother", score: 5, avatar: "👩‍🏫", rank: 4 },
          { memberId: "father", name: "Father", score: 3, avatar: "👨‍💼", rank: 5 },
        ]
      },
      {
        id: "sport",
        name: "Sport & Exercise",
        icon: "⚽",
        emojiChar: "⚽",
        unit: "balls",
        winnerId: "muhammadsodiq",
        winnerText: "Muhammadsodiq loves football the most! He plays outside every afternoon with friends.",
        scores: [
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 10, avatar: "⚽", rank: 1 },
          { memberId: "father", name: "Father", score: 8, avatar: "👨‍💼", rank: 2 },
          { memberId: "salohiddin", name: "Salohiddin", score: 8, avatar: "🎒", rank: 3 },
          { memberId: "sora", name: "Sora", score: 6, avatar: "🎨", rank: 4 },
          { memberId: "mother", name: "Mother", score: 5, avatar: "👩‍🏫", rank: 5 },
        ]
      },
      {
        id: "dinner",
        name: "Family Dinner Time",
        icon: "🍽️",
        emojiChar: "🍽️",
        unit: "plates",
        winnerId: "father",
        winnerText: "Father and Mother love dinner time the most! They love having the whole family together.",
        scores: [
          { memberId: "father", name: "Father", score: 10, avatar: "👨‍💼", rank: 1 },
          { memberId: "mother", name: "Mother", score: 10, avatar: "👩‍🏫", rank: 2 },
          { memberId: "salohiddin", name: "Salohiddin", score: 9, avatar: "🎒", rank: 3 },
          { memberId: "sora", name: "Sora", score: 9, avatar: "🎨", rank: 4 },
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 8, avatar: "⚽", rank: 5 },
        ]
      },
      {
        id: "reading",
        name: "Reading Books",
        icon: "📚",
        emojiChar: "📖",
        unit: "books",
        winnerId: "salohiddin",
        winnerText: "Salohiddin loves reading the most! He reads English stories and textbooks every morning.",
        scores: [
          { memberId: "salohiddin", name: "Salohiddin", score: 10, avatar: "🎒", rank: 1 },
          { memberId: "mother", name: "Mother", score: 9, avatar: "👩‍🏫", rank: 2 },
          { memberId: "father", name: "Father", score: 7, avatar: "👨‍💼", rank: 3 },
          { memberId: "sora", name: "Sora", score: 6, avatar: "🎨", rank: 4 },
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 4, avatar: "⚽", rank: 5 },
        ]
      },
      {
        id: "screen",
        name: "Screen Time & Gadgets",
        icon: "📱",
        emojiChar: "📱",
        unit: "phones",
        winnerId: "muhammadsodiq",
        winnerText: "Muhammadsodiq loves watching cartoons and games, but our parents control his screen time.",
        scores: [
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 8, avatar: "⚽", rank: 1 },
          { memberId: "salohiddin", name: "Salohiddin", score: 7, avatar: "🎒", rank: 2 },
          { memberId: "father", name: "Father", score: 6, avatar: "👨‍💼", rank: 3 },
          { memberId: "mother", name: "Mother", score: 5, avatar: "👩‍🏫", rank: 4 },
          { memberId: "sora", name: "Sora", score: 4, avatar: "🎨", rank: 5 },
        ]
      }
    ],

    // Radar Chart Comparison Data (All 5 members across 6 categories)
    radarData: [
      { subject: "Sweets 🍬", Father: 4, Mother: 6, Salohiddin: 8, Muhammadsodiq: 10, Sora: 9, fullMark: 10 },
      { subject: "Sleep 😴", Father: 3, Mother: 5, Salohiddin: 9, Muhammadsodiq: 7, Sora: 8, fullMark: 10 },
      { subject: "Sport ⚽", Father: 8, Mother: 5, Salohiddin: 8, Muhammadsodiq: 10, Sora: 6, fullMark: 10 },
      { subject: "Dinner 🍽️", Father: 10, Mother: 10, Salohiddin: 9, Muhammadsodiq: 8, Sora: 9, fullMark: 10 },
      { subject: "Reading 📚", Father: 7, Mother: 9, Salohiddin: 10, Muhammadsodiq: 4, Sora: 6, fullMark: 10 },
      { subject: "Screens 📱", Father: 6, Mother: 5, Salohiddin: 7, Muhammadsodiq: 8, Sora: 4, fullMark: 10 },
    ],

    // Total Overall Scores (Sum of all 6 categories)
    overallRanking: [
      { rank: 1, name: "Salohiddin (Me)", score: 51, avatar: "🎒", badge: "Balanced Scholar 🎓" },
      { rank: 2, name: "Muhammadsodiq", score: 47, avatar: "⚽", badge: "Energy Champion ⚡" },
      { rank: 3, name: "Sora", score: 42, avatar: "🎨", badge: "Creative Helper 🎨" },
      { rank: 4, name: "Mother (Nodira)", score: 40, avatar: "👩‍🏫", badge: "Family Heart 💖" },
      { rank: 5, name: "Father (Baxtiyor)", score: 38, avatar: "👨‍💼", badge: "Pillar of Home 🏛️" },
    ]
  },

  // Venn Diagram: Similarities and Differences
  vennData: {
    title: "Similarities & Differences: Father, Mother & Me",
    subtitle: "How our routines connect and differ in 24 hours",
    fatherOnly: [
      "Wakes up very early at 05:30",
      "Works 9.5 hours as civil engineer",
      "Drives the family car to work"
    ],
    motherOnly: [
      "Teaches primary school pupils",
      "Cooks breakfast for 7 people",
      "Organizes house & helps with homework"
    ],
    salohiddinOnly: [
      "Studies in afternoon shift (13:00–18:00)",
      "Enjoys calm study morning at home",
      "Prepares 7th-grade English projects"
    ],
    fatherAndMother: [
      "Manage family budget",
      "Plan weekend groceries & family trips"
    ],
    motherAndSalohiddin: [
      "Love reading books every day",
      "Help younger siblings with lessons"
    ],
    fatherAndSalohiddin: [
      "Love football and sports matches",
      "Fix household tools and gadgets"
    ],
    allThree: [
      "Have dinner together at 19:30 every evening",
      "Love our family and care for each other",
      "Drink traditional Uzbek green tea together"
    ]
  },

  // 5 Calculated Interesting Facts
  interestingFacts: [
    {
      id: 1,
      fact: "Dad wakes up 2.5 hours before me!",
      detail: "Father wakes up at 5:30 AM, while I wake up at 8:00 AM because my school starts at 13:00.",
      icon: "⏰",
      color: "from-blue-500/20 to-cyan-500/10",
      badge: "Time Gap"
    },
    {
      id: 2,
      fact: "We spend 34.5 hours together every week!",
      detail: "That equals almost an entire day and a half of pure family communication and bonding.",
      icon: "❤️",
      color: "from-rose-500/20 to-pink-500/10",
      badge: "Family Bonding"
    },
    {
      id: 3,
      fact: "100% of us always eat dinner together at 19:30.",
      detail: "Even on busy work and school days, dinner at the dastarkhan is our unbreakable rule.",
      icon: "🍽️",
      color: "from-amber-500/20 to-yellow-500/10",
      badge: "Golden Tradition"
    },
    {
      id: 4,
      fact: "6 lessons = 270 minutes of intense learning.",
      detail: "Every single day I complete 4.5 hours of classroom instruction with 6-minute breaks.",
      icon: "🎒",
      color: "from-teal-500/20 to-emerald-500/10",
      badge: "Study Power"
    },
    {
      id: 5,
      fact: "Muhammadsodiq scored a perfect 10/10 for Sweets & Sport!",
      detail: "He never gets tired of running with a ball and asking for chocolate candies.",
      icon: "🏆",
      color: "from-purple-500/20 to-indigo-500/10",
      badge: "Champion"
    }
  ],

  // Life Balance: Work, School, Family, Free Time
  lifeBalance: {
    title: "Life Balance: A Day in Our Family",
    subtitle: "How 24 hours are balanced between study, family, and rest",
    pieData: [
      { name: "Sleep & Rest", hours: 8.0, percentage: 33.3, color: "#6366f1", icon: "😴" },
      { name: "School & Studies", hours: 6.0, percentage: 25.0, color: "#14b8a6", icon: "📚" },
      { name: "Family Time & Meals", hours: 4.5, percentage: 18.8, color: "#f59e0b", icon: "🍵" },
      { name: "Free Time & Hobbies", hours: 3.5, percentage: 14.6, color: "#ec4899", icon: "⚽" },
      { name: "Daily Chores & Travel", hours: 2.0, percentage: 8.3, color: "#06b6d4", icon: "🚶" }
    ],
    reflection: {
      headline: "Why Quality Family Time Matters",
      points: [
        "Family time helps us feel loved, supported, and confident at school.",
        "When we eat dinner and talk together, we forget about stress and tired feelings.",
        "Sharing our daily routines teaches us responsibility, kindness, and teamwork.",
        "Even when we are busy with work and homework, family always comes first."
      ]
    }
  },

  // Vocabulary Glossary (A2-B1 level for summative assessment)
  vocabulary: [
    { word: "wake up", type: "verb phrase", translation: "uyg'onmoq", example: "I wake up at 8:00 AM." },
    { word: "get up", type: "verb phrase", translation: "o'rnidan turmoq", example: "He gets up early." },
    { word: "have breakfast", type: "verb phrase", translation: "nonushta qilmoq", example: "We have breakfast together." },
    { word: "go to school / work", type: "verb phrase", translation: "maktabga/ishga bormoq", example: "Father goes to work at 8:00." },
    { word: "do homework", type: "verb phrase", translation: "uy vazifasini bajarmoq", example: "I do homework in the morning." },
    { word: "have dinner", type: "verb phrase", translation: "kechki ovqat tanovul qilmoq", example: "We have dinner at 19:30." },
    { word: "go to bed", type: "verb phrase", translation: "uyquga yotmoq", example: "I go to bed at 22:30." },
    { word: "always (100%)", type: "frequency adverb", translation: "har doim", example: "We always eat dinner together." },
    { word: "usually (90%)", type: "frequency adverb", translation: "odatda", example: "Father usually asks about school." },
    { word: "often (75%)", type: "frequency adverb", translation: "tez-tez", example: "We often help our mother." },
    { word: "sometimes (50%)", type: "frequency adverb", translation: "ba'zida", example: "We sometimes play chess." },
    { word: "never (0%)", type: "frequency adverb", translation: "hech qachon", example: "We never miss family dinner." },
    { word: "together", type: "adverb", translation: "birga", example: "We spend 34 hours together." }
  ],

  // Speaker Notes for all 16 slides (Press 'N' during presentation)
  speakerNotes: {
    1: "Good morning, dear teacher and classmates! Today, I present my English BSB project about my family routines. My name is Salohiddin, and I am excited to share our daily habits with you.",
    2: "First, let me introduce myself. I am 13 years old and study in the 7th grade. My goals are to practise the Present Simple, use daily routine words, and show my survey results with colorful charts.",
    3: "There are seven people in my family: my father Baxtiyor, my mother Nodira, my brothers Muhammadsodiq and Muhammadbilol, my sisters Sora and Sofiya, and me. For this research, I interviewed five members.",
    4: "To conduct this survey, I prepared five clear questions in simple English. I interviewed my family at dinner on Sunday, counted the hours, and made these charts to compare our answers.",
    5: "Here is my school day schedule. My lessons start at 13:00 and finish at 18:00. I study six lessons every day with six-minute breaks. Because my school is in the afternoon, my mornings are free for self-study and reading English.",
    6: "Question one was: What time do you wake up? My father Baxtiyor is our early bird! He wakes up at 5:30 AM to pray and get ready for work. I wake up latest at 8:00 AM because my school starts in the afternoon.",
    7: "Question two was: What time do you go to work or school? Father works for 9.5 hours as an engineer. Mother teaches for 5.5 hours, and my siblings go to school in the morning. I attend school from 13:00 to 18:00.",
    8: "Question three asked how much time we spend together. On weekdays, we spend about 3.5 hours together. On weekends, we spend over 8 hours! That is thirty-four hours every week of warm family communication.",
    9: "Question four asked what we usually do together. One hundred percent of us always have dinner together at 19:30. We usually talk about our day, often help our mother, and sometimes play games.",
    10: "Question five was: What is everyone's favourite family activity? The winner is having evening tea and talking together! Three out of five people voted for this warm Uzbek tradition.",
    11: "Now let us look at a day in three parts. In the morning, my parents and siblings are very busy, while I study at home. In the afternoon, I am at school. In the evening, we all unite at home.",
    12: "Welcome to our fun Family Rating! Here we see who loves sweets, sport, dinner, and books the most. Brother Muhammadsodiq loves sweets and football the most, while I love reading books and sleeping!",
    13: "This Venn diagram shows our similarities and differences. Father works, mother teaches, and I study. But we all share dinner at 19:30, love green tea, and support each other.",
    14: "Here are five surprising facts from my survey. For example, my dad wakes up two and a half hours before me, and we spend over thirty-four hours together every single week!",
    15: "In this slide, we see our daily balance. Sleeping takes eight hours, studying takes six hours, and family time takes four and a half hours. Quality family time gives us energy and happiness.",
    16: "In conclusion, this project helped me improve my English, practise the Present Simple, and appreciate my family routines. A special thanks to my family for their answers. Do you have any questions? Thank you!"
  }
};

/**
 * Instantaneous In-Memory Global Language State
 * Defaults to localStorage on initial load, but updates synchronously on user clicks.
 */
let activeGlobalLang = typeof window !== 'undefined' 
  ? (localStorage.getItem('bsb_lang') === 'uz' ? 'uz' : 'en')
  : 'en';

export const setGlobalDataLang = (newLang) => {
  activeGlobalLang = newLang === 'uz' ? 'uz' : 'en';
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('bsb_lang', activeGlobalLang);
    } catch (e) {
      // ignore
    }
  }
};

export const getGlobalDataLang = () => activeGlobalLang;

/**
 * Dynamic Proxy that serves English or Uzbek data instantaneously with 0ms latency.
 */
export const familyData = new Proxy({}, {
  get(target, prop) {
    const activeData = activeGlobalLang === 'uz' ? familyDataUz : familyDataEn;
    return activeData[prop];
  }
});

export { familyDataUz };

