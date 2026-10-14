/**
 * OILA KUN TARTIBI SO'ROVNOMASI - O'ZBEKCHA MA'LUMOTLAR
 * Ingliz tili BSB (Summative Assessment) - 7-sinf
 * O'quvchi: Saidbayev Salohiddin, 13 yoshda
 */

export const familyDataUz = {
  // O'quvchi profili va taqdimot ma'lumotlari
  projectInfo: {
    title: "Oilaviy Vaqt: Bizning Kun Tartibimiz",
    subtitle: "A-variant: Oila kun tartibi bo'yicha so'rovnoma (Tadqiqot)",
    subject: "Ingliz tili (BSB Summative Assessment)",
    grade: "7-sinf",
    student: {
      name: "Saidbayev Salohiddin",
      age: 13,
      role: "7-sinf o'quvchisi va yetakchi tadqiqotchi",
      school: "42-umumiy o'rta ta'lim maktabi",
      city: "Toshkent shahri, O'zbekiston",
      avatarEmoji: "🎒",
      bio: "Salom! Mening ismim Salohiddin. Men 13 yoshdaman va 7-sinfda o'qiyman. Toshkentda 7 kishilik ahil oilam bilan yashayman. Bo'sh vaqtimda inglizcha kitoblar o'qishni, ukalarim bilan futbol o'ynashni va kompyuter dasturlashni yaxshi ko'raman.",
      hobbies: [
        { name: "Inglizcha kitob o'qish", icon: "📚", note: "Har kuni ertalab inglizcha hikoyalar o'qiyman." },
        { name: "Futbol o'ynash", icon: "⚽", note: "Dam olish kunlari ukam Muhammadsodiq bilan o'ynayman." },
        { name: "Dasturlash va IT", icon: "💻", note: "Taqdimotlar va oddiy dasturlar yarataman." },
        { name: "Oila bilan vaqt", icon: "🍵", note: "Ota-onamga yordam beraman va oilam bilan suhbatlashaman." },
      ],
      objectives: [
        {
          id: 1,
          title: "Kun tartibi lug'atini o'zlashtirish",
          icon: "📖",
          desc: "'wake up', 'have breakfast', 'go to school', 'have dinner' kabi fe'llarni amalda qo'llash."
        },
        {
          id: 2,
          title: "Present Simple'ni to'g'ri ishlatish",
          icon: "✍️",
          desc: "3-shaxs 's/es' qo'shimchalarini to'g'ri qo'llash (he works, she teaches, we spend time)."
        },
        {
          id: 3,
          title: "So'rovnoma o'tkazish va taqdim etish",
          icon: "📊",
          desc: "5 nafar oila a'zomdan intervyu olish va natijalarni interaktiv grafikalarda ko'rsatish."
        },
        {
          id: 4,
          title: "Kun tartiblarini taqqoslash",
          icon: "🔍",
          desc: "Oilamizning 24 soatlik vaqt taqsimotidagi o'xshashlik va farqlarni aniqlash."
        }
      ]
    }
  },

  // Barcha 7 nafar oila a'zosi
  familyMembers: [
    {
      id: "father",
      name: "Baxtiyor",
      relationship: "Dadam",
      age: 42,
      occupation: "Muhandis-quruvchi",
      interviewed: true,
      avatar: "👨‍💼",
      color: "#3b82f6",
      bgGradient: "from-blue-500/20 to-indigo-500/10",
      description: "Bino va inshootlar loyihasini chizadi. Mehnatkash, bosiq va oila bilan kechki choy ichishni yaxshi ko'radi.",
      shortRoutine: "Ertalab soat 5:30 da uyg'onadi, 8:00 da ishga ketadi va 17:30 da uyga qaytadi."
    },
    {
      id: "mother",
      name: "Nodira",
      relationship: "Onam",
      age: 39,
      occupation: "Boshlang'ich sinf o'qituvchisi",
      interviewed: true,
      avatar: "👩‍🏫",
      color: "#ec4899",
      bgGradient: "from-pink-500/20 to-rose-500/10",
      description: "Kichik yoshdagi bolalarga dars beradi. Mehribon, g'amxo'r va barchamiz uchun mazali taomlar tayyorlaydi.",
      shortRoutine: "Ertalab 6:15 da uyg'onadi, ertalabki sinflarga dars beradi va uyimizni saranjomlaydi."
    },
    {
      id: "salohiddin",
      name: "Salohiddin (Men)",
      relationship: "Men (O'quvchi)",
      age: 13,
      occupation: "7-sinf o'quvchisi",
      interviewed: true,
      avatar: "🎒",
      color: "#14b8a6",
      bgGradient: "from-teal-500/20 to-emerald-500/10",
      description: "7-sinfda o'qiyman. Maktabim tushdan keyingi 2-smenada (13:00 dan 18:00 gacha) bo'ladi.",
      shortRoutine: "Ertalab 8:00 da uyg'onaman, ertalab ingliz tilini o'rganaman va 13:00 da maktabga boraman."
    },
    {
      id: "muhammadsodiq",
      name: "Muhammadsodiq",
      relationship: "1-Ukam",
      age: 10,
      occupation: "4-sinf o'quvchisi",
      interviewed: true,
      avatar: "⚽",
      color: "#f59e0b",
      bgGradient: "from-amber-500/20 to-yellow-500/10",
      description: "Juda chaqqon, futbolni sevadi va har doim shokolad hamda shirinlik so'raydi.",
      shortRoutine: "Ertalab 7:15 da uyg'onadi, ertalabki maktabga boradi va tushlikdan so'ng futbol o'ynaydi."
    },
    {
      id: "sora",
      name: "Sora",
      relationship: "1-Singlim",
      age: 8,
      occupation: "2-sinf o'quvchisi",
      interviewed: true,
      avatar: "🎨",
      color: "#8b5cf6",
      bgGradient: "from-purple-500/20 to-fuchsia-500/10",
      description: "Rasm chizishni, qo'shiq aytishni va onamizga dasturxon tuzashda yordam berishni yaxshi ko'radi.",
      shortRoutine: "Ertalab 7:30 da uyg'onadi, ertalabki maktabga boradi va tushdan keyin rasm chizadi."
    },
    {
      id: "muhammadbilol",
      name: "Muhammadbilol",
      relationship: "2-Ukam",
      age: 7,
      occupation: "1-sinf o'quvchisi",
      interviewed: false,
      avatar: "🧸",
      color: "#06b6d4",
      bgGradient: "from-cyan-500/20 to-sky-500/10",
      description: "Kichik ukamiz. Bu yil 1-sinfga chiqdi va Lego konstruktorlaridan minoralar yasashni yaxshi ko'radi.",
      shortRoutine: "Ertalab 7:45 da uyg'onadi, alifboni o'rganadi va o'yinchoqlar o'ynaydi."
    },
    {
      id: "sofiya",
      name: "Sofiya",
      relationship: "2-Singlim (Erkatoyimiz)",
      age: 5,
      occupation: "Bog'cha yoshida",
      interviewed: false,
      avatar: "🎀",
      color: "#f43f5e",
      bgGradient: "from-rose-500/20 to-pink-500/10",
      description: "Uyimizning eng kichik erkatoyi! 5 yoshda, doim jilmayib yuradi va bolalar qo'shiqlarini yoqtiradi.",
      shortRoutine: "Ertalab 8:30 da bog'chaga boradi va kun bo'yi quvnoq o'ynaydi."
    }
  ],

  // Tadqiqot metodologiyasi
  surveyMethodology: {
    title: "Tadqiqot so'rovnomasini qanday o'tkazdim",
    steps: [
      {
        step: 1,
        title: "5 ta asosiy savol tayyorladim",
        icon: "📝",
        time: "1-bosqich: Tayyorgarlik",
        desc: "Uyg'onish vaqti, ish-maktab jadvali va oilaviy mashg'ulotlar haqida oddiy ingliz tilida 5 ta aniq savol yozdim."
      },
      {
        step: 2,
        title: "Kechki intervyularni o'tkazdim",
        icon: "🎙️",
        time: "2-bosqich: Dala tadqiqoti",
        desc: "Yakshanba kungi oilaviy kechki ovqat paytida 5 nafar oila a'zomdan (Dadam, Onam, Muhammadsodiq, Sora va o'zim) intervyu oldim."
      },
      {
        step: 3,
        title: "Ma'lumotlarni hisobladim va tahlil qildim",
        icon: "📈",
        time: "3-bosqich: Ma'lumotlar tahlili",
        desc: "Soatlarni hisoblab chiqdim, taqqoslash diagrammalarini tuzdim va oilamiz kun tartibi qonuniyatlarini aniqladim."
      }
    ],
    summaryStats: {
      totalQuestions: 5,
      peopleInterviewed: 5,
      totalHousehold: 7,
      completionRate: "100%"
    }
  },

  // Maktab kuni jadvali (2-smena: 13:00 - 18:00)
  schoolDay: {
    headline: "Mening maktab kunim: 2-smena (13:00 - 18:00)",
    totalLessons: 6,
    lessonDurationMin: 45,
    breakDurationMin: 6,
    totalLessonHours: "4 soat 30 daqiqa",
    totalSchoolHours: "5 soat",
    dailyStudyHours: 6,
    schedule: [
      { period: 1, subject: "Matematika", start: "13:00", end: "13:45", icon: "📐", room: "204-xona" },
      { period: 2, subject: "Ingliz tili", start: "13:51", end: "14:36", icon: "🇬🇧", room: "Til laboratoriyasi" },
      { period: 3, subject: "Tarix", start: "14:42", end: "15:27", icon: "🏺", room: "108-xona" },
      { period: 4, subject: "O'zbek adabiyoti", start: "15:33", end: "16:18", icon: "📖", room: "210-xona" },
      { period: 5, subject: "Biologiya / Fan", start: "16:24", end: "17:09", icon: "🔬", room: "Tabiat xonasi" },
      { period: 6, subject: "Jismoniy tarbiya", start: "17:15", end: "18:00", icon: "🏃", room: "Sport zal" },
    ],
    myDailyFlow: [
      { time: "08:00", action: "Uyg'onish va toza havo", icon: "⏰", tag: "Ertalab" },
      { time: "08:30", action: "Choy bilan foydali nonushta", icon: "🍳", tag: "Ertalab" },
      { time: "09:15", action: "Mustaqil dars tayyorlash va inglizcha mutolaa", icon: "📚", tag: "Ertalab" },
      { time: "11:00", action: "Badantarbiya va onamga yordam", icon: "💪", tag: "Ertalab" },
      { time: "12:15", action: "Tushlik va portfelni yig'ish", icon: "🥪", tag: "Tayyorgarlik" },
      { time: "13:00", action: "Maktabda darslarning boshlanishi", icon: "🏫", tag: "Maktab" },
      { time: "18:00", action: "Darslar tugashi va uyga piyoda qaytish", icon: "🚶", tag: "Maktab" },
      { time: "18:20", action: "Uyga yetib kelish va dam olish", icon: "🏡", tag: "Kechqurun" },
      { time: "19:30", action: "Butun oila bilan kechki ovqat", icon: "🍽️", tag: "Oilaviy vaqt" },
      { time: "20:30", action: "Vazifalarni takrorlash va suhbat", icon: "💬", tag: "Kechqurun" },
      { time: "22:30", action: "Uyquga yotish", icon: "🌙", tag: "Tun" },
    ]
  },

  // 1-savol: Uyg'onish vaqti
  q1_wakeUp: {
    question: "1-savol: Siz soat nechada uyg'onasiz?",
    earlyBirdWinner: "Dadam (Baxtiyor)",
    earlyBirdTime: "05:30",
    badgeTitle: "Eng erta uyg'onuvchi 🌅",
    chartData: [
      { member: "Dadam", timeString: "05:30", decimalHour: 5.5, label: "05:30", avatar: "👨‍💼", note: "Ibodat qiladi va ishga tayyorlanadi", fill: "#3b82f6" },
      { member: "Onam", timeString: "06:15", decimalHour: 6.25, label: "06:15", avatar: "👩‍🏫", note: "7 kishi uchun nonushta tayyorlaydi", fill: "#ec4899" },
      { member: "Muhammadsodiq", timeString: "07:15", decimalHour: 7.25, label: "07:15", avatar: "⚽", note: "Ertalabki maktabga tayyorlanadi", fill: "#f59e0b" },
      { member: "Sora", timeString: "07:30", decimalHour: 7.5, label: "07:30", avatar: "🎨", note: "Nonushta qiladi va kiyinadi", fill: "#8b5cf6" },
      { member: "Salohiddin", timeString: "08:00", decimalHour: 8.0, label: "08:00", avatar: "🎒", note: "13:00 darsidan oldin erkin ertalab", fill: "#14b8a6" },
    ],
    grammaticalAnalysis: [
      "Dadam har kuni hammadan erta soat 05:30 da uyg'onadi.",
      "Onam 06:15 da turadi va mazali nonushta pishiradi.",
      "Muhammadsodiq va Sora ertalabki maktab uchun 07:15–07:30 da uyg'onishadi.",
      "Men 08:00 da turaman, chunki maktabim tushdan keyin boshlanadi."
    ]
  },

  // 2-savol: Ish va maktab jadvali
  q2_workSchool: {
    question: "2-savol: Ish yoki maktabga soat nechada borasiz?",
    chartData: [
      {
        member: "Dadam",
        role: "Muhandis",
        startHour: 8.0,
        endHour: 17.5,
        timeSpan: "08:00 - 17:30",
        duration: "9.5 soat",
        activity: "Qurilish idorasi va obyektlar",
        avatar: "👨‍💼",
        color: "#3b82f6"
      },
      {
        member: "Onam",
        role: "O'qituvchi",
        startHour: 8.5,
        endHour: 14.0,
        timeSpan: "08:30 - 14:00",
        duration: "5.5 soat",
        activity: "Boshlang'ich sinflarga dars berish",
        avatar: "👩‍🏫",
        color: "#ec4899"
      },
      {
        member: "Muhammadsodiq",
        role: "4-sinf",
        startHour: 8.0,
        endHour: 12.5,
        timeSpan: "08:00 - 12:30",
        duration: "4.5 soat",
        activity: "Ertalabki maktab smenasi",
        avatar: "⚽",
        color: "#f59e0b"
      },
      {
        member: "Sora",
        role: "2-sinf",
        startHour: 8.0,
        endHour: 12.25,
        timeSpan: "08:00 - 12:15",
        duration: "4.25 soat",
        activity: "Ertalabki maktab smenasi",
        avatar: "🎨",
        color: "#8b5cf6"
      },
      {
        member: "Salohiddin",
        role: "7-sinf",
        startHour: 13.0,
        endHour: 18.0,
        timeSpan: "13:00 - 18:00",
        duration: "5.0 soat",
        activity: "Tushdan keyingi 2-smena (6 dars)",
        avatar: "🎒",
        color: "#14b8a6"
      }
    ],
    sentences: [
      "Dadam ishga 08:00 da ketadi va uyga 17:30 da qaytadi.",
      "Onam maktabda 08:30 dan 14:00 gacha dars beradi.",
      "Muhammadsodiq va Sora ertalab birga maktabga borishadi.",
      "Men uydan 12:45 da chiqaman va 18:00 gacha maktabda o'qiyman."
    ]
  },

  // 3-savol: Birga o'tkaziladigan vaqt
  q3_timeTogether: {
    question: "3-savol: Oila bilan birga qancha vaqt o'tkazasiz?",
    weekdayHours: 3.5,
    weekendHours: 8.5,
    weeklyTotalHours: 34.5,
    doughnutData: [
      { name: "Kechki ovqat va ko'k choy", value: 40, color: "#14b8a6", emoji: "🍵", hours: "14 s/hafta" },
      { name: "Oilaviy suhbatlar va gurung", value: 25, color: "#3b82f6", emoji: "💬", hours: "8.5 s/hafta" },
      { name: "Bir-biriga yordam va dars", value: 15, color: "#f59e0b", emoji: "🤝", hours: "5.2 s/hafta" },
      { name: "Stol o'yinlari va televizor", value: 12, color: "#8b5cf6", emoji: "🎲", hours: "4.1 s/hafta" },
      { name: "Dam olish kuni sayr va xiyobon", value: 8, color: "#ec4899", emoji: "🌳", hours: "2.7 s/hafta" },
    ],
    highlightInsight: "Ish kunlarida kechqurun 3.5 soat, dam olish kunlarida esa 8 soatdan ortiq vaqtni birga o'tkazamiz!"
  },

  // 4-savol: Birgalikdagi mashg'ulotlar
  q4_whatWeDoTogether: {
    question: "4-savol: Odatda birga nima qilasizlar?",
    activities: [
      {
        id: "dinner",
        title: "Kechki ovqat va choyxo'rlik",
        frequency: "Har doim (100%)",
        percentage: 100,
        adverb: "Always (Har doim)",
        icon: "🍽️",
        color: "#14b8a6",
        sentence: "Biz har doim soat 19:30 da dasturxon atrofida jamlanib ovqatlanamiz."
      },
      {
        id: "talk",
        title: "Kun qanday o'tgani haqida suhbat",
        frequency: "Odatda (90%)",
        percentage: 90,
        adverb: "Usually (Odatda)",
        icon: "💬",
        color: "#3b82f6",
        sentence: "Dadam odatda maktab kunimiz qanday o'tganini so'raydilar."
      },
      {
        id: "help",
        title: "Uy ishlarida yordamlashish",
        frequency: "Tez-tez (80%)",
        percentage: 80,
        adverb: "Often (Tez-tez)",
        icon: "🧹",
        color: "#10b981",
        sentence: "Ukalarim va men tez-tez onamizga oshxonani yig'ishtirishda ko'maklashamiz."
      },
      {
        id: "movie",
        title: "Oilaviy film va ko'rsatuvlar",
        frequency: "Ba'zida (65%)",
        percentage: 65,
        adverb: "Sometimes (Ba'zida)",
        icon: "📺",
        color: "#8b5cf6",
        sentence: "Juma oqshomlarida ba'zida birgalikda oilaviy filmlar tomosha qilamiz."
      },
      {
        id: "games",
        title: "Stol o'yinlari va futbol",
        frequency: "Ba'zida (55%)",
        percentage: 55,
        adverb: "Sometimes (Ba'zida)",
        icon: "🎲",
        color: "#f59e0b",
        sentence: "Muhammadsodiq bilan yakshanba kunlari shaxmat yoki futbol o'ynaymiz."
      },
      {
        id: "walk",
        title: "Xiyobon va shaharda sayr",
        frequency: "Dam olish kunlari (45%)",
        percentage: 45,
        adverb: "On Weekends",
        icon: "🌳",
        color: "#ec4899",
        sentence: "Quyoshli dam olish kunlarida xiyobonda sayr qilamiz."
      }
    ]
  },

  // 5-savol: Sevimli mashg'ulot
  q5_favoriteActivity: {
    question: "5-savol: Barchaning eng sevimli oilaviy mashg'uloti nima?",
    winner: "Kechki choy va dildan suhbat",
    winnerVotes: 3,
    totalVotes: 5,
    chartData: [
      { activity: "Kechki choy va suhbat", votes: 3, percentage: 60, icon: "🍵", color: "#14b8a6", isWinner: true },
      { activity: "Taom pishirish va ovqat", votes: 2, percentage: 40, icon: "🍲", color: "#3b82f6", isWinner: false },
      { activity: "Sayr va pikniklar", votes: 1, percentage: 20, icon: "🧺", color: "#f59e0b", isWinner: false },
      { activity: "Sport va o'yinlar", votes: 1, percentage: 20, icon: "⚽", color: "#8b5cf6", isWinner: false },
    ],
    votersBreakdown: [
      { member: "Dadam", choice: "Kechki choy va suhbat 🍵", reason: "Maktabdagi muvaffaqiyatlarimizni eshitishni yaxshi ko'radi." },
      { member: "Onam", choice: "Taom pishirish va ovqat 🍲", reason: "Barcha oila a'zolari bir dasturxonda baxtli o'tirishini xohlaydi." },
      { member: "Salohiddin", choice: "Kechki choy va suhbat 🍵", reason: "Qiziqarli voqealarni aytib berish va darslarni muhokama qilishni sevaman." },
      { member: "Muhammadsodiq", choice: "Sport va o'yinlar ⚽", reason: "Kun bo'yi to'p tepish va gol urishni orzu qiladi." },
      { member: "Sora", choice: "Kechki choy va suhbat 🍵", reason: "Choy paytida chizgan yangi rasmlarini ko'rsatishni yaxshi ko'radi." },
    ]
  },

  // Kun 3 qismda
  threePartsOfDay: {
    title: "Kun 3 qismda: Ertalab, Kunduzi va Kechqurun",
    subtitle: "Xonadonimizdagi kun tartibi taqqoslanishi",
    parts: [
      {
        id: "morning",
        title: "Ertalab (06:00 - 12:00)",
        tagline: "Qizg'in tong va tayyorgarlik",
        icon: "🌅",
        accent: "from-amber-500/20 to-orange-500/10",
        borderColor: "border-amber-400/30",
        routines: [
          { person: "Dadam", habit: "Choy ichadi va 08:00 da mashinada ishga ketadi.", icon: "👨‍💼" },
          { person: "Onam", habit: "Nonushta tayyorlaydi, so'ng maktabda dars beradi.", icon: "👩‍🏫" },
          { person: "Salohiddin", habit: "Inglizcha kitoblar o'qiyman, mashq qilaman va dars tayyorlayman.", icon: "🎒" },
          { person: "Muhammadsodiq va Sora", habit: "Ertalabki maktabga borib saboq olishadi.", icon: "🎒" },
        ]
      },
      {
        id: "afternoon",
        title: "Kunduzi (12:00 - 18:00)",
        tagline: "Ish, maktab va darslar",
        icon: "☀️",
        accent: "from-blue-500/20 to-cyan-500/10",
        borderColor: "border-blue-400/30",
        routines: [
          { person: "Dadam", habit: "Qurilish maydonlarini nazorat qiladi va chizmalar ustida ishlaydi.", icon: "👨‍💼" },
          { person: "Onam", habit: "14:00 da uyga qaytadi va tushlik tayyorlaydi.", icon: "👩‍🏫" },
          { person: "Salohiddin", habit: "Maktabda 6 ta darsda qatnashaman (13:00–18:00).", icon: "🎒" },
          { person: "Muhammadsodiq va Sora", habit: "Uydagilar uyga kelib, vazifalarini bajarib o'ynashadi.", icon: "⚽" },
        ]
      },
      {
        id: "evening",
        title: "Kechqurun (18:00 - 23:00)",
        tagline: "Oilaviy jam bo'lish va dam olish",
        icon: "🌙",
        accent: "from-indigo-500/20 to-purple-500/10",
        borderColor: "border-indigo-400/30",
        routines: [
          { person: "Dadam", habit: "17:30 da keladi va ko'k choy bilan dam oladi.", icon: "👨‍💼" },
          { person: "Onam", habit: "Kechki ovqatni tortadi va 5 nafar farzandi bilan suhbatlashadi.", icon: "👩‍🏫" },
          { person: "Salohiddin", habit: "18:20 da uyga kelaman va 19:30 da ovqatlanaman.", icon: "🎒" },
          { person: "Barchamiz birga", habit: "Choy ichamiz, kulishamiz va 22:30 gacha uxlaymiz.", icon: "🍵" },
        ]
      }
    ]
  },

  // Oilaviy reyting
  familyRatings: {
    title: "Oilaviy reyting: Kim nimani ko'proq yoqtiradi?",
    subtitle: "Interaktiv yetakchilar reytingi (1 dan 10 ballgacha)",
    categories: [
      {
        id: "sweets",
        name: "Shirinliklar",
        icon: "🍬",
        emojiChar: "🍬",
        unit: "konfet",
        winnerId: "muhammadsodiq",
        winnerText: "Ukam Muhammadsodiq shirinlikni eng ko'p yaxshi ko'radi! U har kuni shokolad va konfet yeydi.",
        scores: [
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 10, avatar: "⚽", rank: 1 },
          { memberId: "sora", name: "Sora", score: 9, avatar: "🎨", rank: 2 },
          { memberId: "salohiddin", name: "Salohiddin", score: 8, avatar: "🎒", rank: 3 },
          { memberId: "mother", name: "Onam", score: 6, avatar: "👩‍🏫", rank: 4 },
          { memberId: "father", name: "Dadam", score: 4, avatar: "👨‍💼", rank: 5 },
        ]
      },
      {
        id: "sleep",
        name: "Uyqu va dam olish",
        icon: "😴",
        emojiChar: "⭐",
        unit: "yulduz",
        winnerId: "salohiddin",
        winnerText: "Salohiddin uxlashni eng ko'p yoqtiradi! Maktabi 2-smenada bo'lgani uchun 8:00 da uyg'onadi.",
        scores: [
          { memberId: "salohiddin", name: "Salohiddin", score: 9, avatar: "🎒", rank: 1 },
          { memberId: "sora", name: "Sora", score: 8, avatar: "🎨", rank: 2 },
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 7, avatar: "⚽", rank: 3 },
          { memberId: "mother", name: "Onam", score: 5, avatar: "👩‍🏫", rank: 4 },
          { memberId: "father", name: "Dadam", score: 3, avatar: "👨‍💼", rank: 5 },
        ]
      },
      {
        id: "sport",
        name: "Sport va mashq",
        icon: "⚽",
        emojiChar: "⚽",
        unit: "to'p",
        winnerId: "muhammadsodiq",
        winnerText: "Muhammadsodiq futbolni jonidan ortiq ko'radi! Har kuni tushdan so'ng do'stlari bilan o'ynaydi.",
        scores: [
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 10, avatar: "⚽", rank: 1 },
          { memberId: "father", name: "Dadam", score: 8, avatar: "👨‍💼", rank: 2 },
          { memberId: "salohiddin", name: "Salohiddin", score: 8, avatar: "🎒", rank: 3 },
          { memberId: "sora", name: "Sora", score: 6, avatar: "🎨", rank: 4 },
          { memberId: "mother", name: "Onam", score: 5, avatar: "👩‍🏫", rank: 5 },
        ]
      },
      {
        id: "dinner",
        name: "Kechki ovqat vaqti",
        icon: "🍽️",
        emojiChar: "🍽️",
        unit: "tarelka",
        winnerId: "father",
        winnerText: "Dadam va Onam kechki ovqatni eng ko'p qadrlaydilar! Barcha oila jam bo'lishi ular uchun eng muhim.",
        scores: [
          { memberId: "father", name: "Dadam", score: 10, avatar: "👨‍💼", rank: 1 },
          { memberId: "mother", name: "Onam", score: 10, avatar: "👩‍🏫", rank: 2 },
          { memberId: "salohiddin", name: "Salohiddin", score: 9, avatar: "🎒", rank: 3 },
          { memberId: "sora", name: "Sora", score: 9, avatar: "🎨", rank: 4 },
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 8, avatar: "⚽", rank: 5 },
        ]
      },
      {
        id: "reading",
        name: "Kitob mutolaasi",
        icon: "📚",
        emojiChar: "📖",
        unit: "kitob",
        winnerId: "salohiddin",
        winnerText: "Salohiddin kitob o'qishni juda sevadi! Har kuni ertalab inglizcha hikoyalar va darsliklarni o'qiydi.",
        scores: [
          { memberId: "salohiddin", name: "Salohiddin", score: 10, avatar: "🎒", rank: 1 },
          { memberId: "mother", name: "Onam", score: 9, avatar: "👩‍🏫", rank: 2 },
          { memberId: "father", name: "Dadam", score: 7, avatar: "👨‍💼", rank: 3 },
          { memberId: "sora", name: "Sora", score: 6, avatar: "🎨", rank: 4 },
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 4, avatar: "⚽", rank: 5 },
        ]
      },
      {
        id: "screen",
        name: "Telefon va gadjetlar",
        icon: "📱",
        emojiChar: "📱",
        unit: "telefon",
        winnerId: "muhammadsodiq",
        winnerText: "Muhammadsodiq multfilm va o'yinlarni yoqtiradi, lekin ota-onamiz vaqtni qat'iy nazorat qilishadi.",
        scores: [
          { memberId: "muhammadsodiq", name: "Muhammadsodiq", score: 8, avatar: "⚽", rank: 1 },
          { memberId: "salohiddin", name: "Salohiddin", score: 7, avatar: "🎒", rank: 2 },
          { memberId: "father", name: "Dadam", score: 6, avatar: "👨‍💼", rank: 3 },
          { memberId: "mother", name: "Onam", score: 5, avatar: "👩‍🏫", rank: 4 },
          { memberId: "sora", name: "Sora", score: 4, avatar: "🎨", rank: 5 },
        ]
      }
    ],

    radarData: [
      { subject: "Shirinlik 🍬", Father: 4, Mother: 6, Salohiddin: 8, Muhammadsodiq: 10, Sora: 9, fullMark: 10 },
      { subject: "Uyqu 😴", Father: 3, Mother: 5, Salohiddin: 9, Muhammadsodiq: 7, Sora: 8, fullMark: 10 },
      { subject: "Sport ⚽", Father: 8, Mother: 5, Salohiddin: 8, Muhammadsodiq: 10, Sora: 6, fullMark: 10 },
      { subject: "Kechki ovqat 🍽️", Father: 10, Mother: 10, Salohiddin: 9, Muhammadsodiq: 8, Sora: 9, fullMark: 10 },
      { subject: "Kitob 📚", Father: 7, Mother: 9, Salohiddin: 10, Muhammadsodiq: 4, Sora: 6, fullMark: 10 },
      { subject: "Telefon 📱", Father: 6, Mother: 5, Salohiddin: 7, Muhammadsodiq: 8, Sora: 4, fullMark: 10 },
    ],

    overallRanking: [
      { rank: 1, name: "Salohiddin (Men)", score: 51, avatar: "🎒", badge: "Muvozanatli bilimdon 🎓" },
      { rank: 2, name: "Muhammadsodiq", score: 47, avatar: "⚽", badge: "Energiya chempioni ⚡" },
      { rank: 3, name: "Sora", score: 42, avatar: "🎨", badge: "Ijodkor yordamchi 🎨" },
      { rank: 4, name: "Onam (Nodira)", score: 40, avatar: "👩‍🏫", badge: "Oila tayanchi 💖" },
      { rank: 5, name: "Dadam (Baxtiyor)", score: 38, avatar: "👨‍💼", badge: "Xonadon ustuni 🏛️" },
    ]
  },

  // Venn diagrammasi
  vennData: {
    title: "O'xshashliklar va farqlar: Dadam, Onam va Men",
    subtitle: "24 soat ichida kun tartibimiz qanday tutashadi va farqlanadi",
    fatherOnly: [
      "Ertalab juda erta 05:30 da uyg'onadi",
      "Muhandis sifatida 9.5 soat ishlaydi",
      "Ishga oilaviy mashinada boradi"
    ],
    motherOnly: [
      "Boshlang'ich sinf bolalariga dars beradi",
      "7 kishilik xonadonga nonushta tayyorlaydi",
      "Uyni saranjomlaydi va darslarda yordamlashadi"
    ],
    salohiddinOnly: [
      "Maktabda 2-smenada o'qiydi (13:00–18:00)",
      "Ertalab uyda osoyishta dars qiladi",
      "7-sinf ingliz tili loyihasini tayyorlaydi"
    ],
    fatherAndMother: [
      "Oila byudjetini boshqaradilar",
      "Dam olish kunlari bozor va sayrlarni rejalashtiradilar"
    ],
    motherAndSalohiddin: [
      "Har kuni kitob o'qishni sevadilar",
      "Kichik uka-singillarga darslarda yordamlashadilar"
    ],
    fatherAndSalohiddin: [
      "Futbol va sport uchrashuvlarini yaxshi ko'radilar",
      "Uy anjomlari va texnikalarni tuzatadilar"
    ],
    allThree: [
      "Har oqshom soat 19:30 da birga kechki ovqat tanovul qiladilar",
      "Bir-birlarini qadrlab, mehribonlik ko'rsatadilar",
      "Milliy o'zbek ko'k choyini birga ichadilar"
    ]
  },

  // 5 ta qiziqarli fakt
  interestingFacts: [
    {
      id: 1,
      fact: "Dadam mendan 2.5 soat oldin uyg'onadilar!",
      detail: "Dadam soat 05:30 da uyg'onadilar, men esa maktabim 13:00 da boshlangani sababli 08:00 da turaman.",
      icon: "⏰",
      color: "from-blue-500/20 to-cyan-500/10",
      badge: "Vaqt farqi"
    },
    {
      id: 2,
      fact: "Haftasiga 34.5 soat vaqtni birga o'tkazamiz!",
      detail: "Bu deyarli bir yarim kunlik sof oilaviy suhbat va mehr-oqibat degani.",
      icon: "❤️",
      color: "from-rose-500/20 to-pink-500/10",
      badge: "Oila rishtasi"
    },
    {
      id: 3,
      fact: "100% barchamiz soat 19:30 da kechki ovqatga yig'ilamiz.",
      detail: "Ish va darslar qanchalik tig'iz bo'lmasin, dasturxon atrofidagi kechki ovqat buzilmas odatimizdir.",
      icon: "🍽️",
      color: "from-amber-500/20 to-yellow-500/10",
      badge: "Oltin an'ana"
    },
    {
      id: 4,
      fact: "6 ta dars = 270 daqiqalik dars o'rganish.",
      detail: "Har kuni 6 daqiqalik tanaffuslar bilan 4.5 soatlik darslarni to'liq o'zlashtiraman.",
      icon: "🎒",
      color: "from-teal-500/20 to-emerald-500/10",
      badge: "Dars kuchi"
    },
    {
      id: 5,
      fact: "Muhammadsodiq Shirinlik va Sportda 10/10 ball oldi!",
      detail: "U to'p ortidan yugurishdan va shokolad so'rashdan hech ham charchamaydi.",
      icon: "🏆",
      color: "from-purple-500/20 to-indigo-500/10",
      badge: "Chempion"
    }
  ],

  // Hayotiy balans
  lifeBalance: {
    title: "Hayotiy balans: Bizning oilada bir kun",
    subtitle: "24 soat o'qish, oila va dam olish o'rtasida qanday taqsimlanadi",
    pieData: [
      { name: "Uyqu va dam olish", hours: 8.0, percentage: 33.3, color: "#6366f1", icon: "😴" },
      { name: "Maktab va darslar", hours: 6.0, percentage: 25.0, color: "#14b8a6", icon: "📚" },
      { name: "Oilaviy vaqt va taom", hours: 4.5, percentage: 18.8, color: "#f59e0b", icon: "🍵" },
      { name: "Bo'sh vaqt va qiziqishlar", hours: 3.5, percentage: 14.6, color: "#ec4899", icon: "⚽" },
      { name: "Uy yumushlari va yo'l", hours: 2.0, percentage: 8.3, color: "#06b6d4", icon: "🚶" }
    ],
    reflection: {
      headline: "Nega sifatli oilaviy vaqt muhim?",
      points: [
        "Oilaviy mehr va qo'llab-quvvatlash maktabda o'zimizga bo'lgan ishonchni oshiradi.",
        "Birga kechki ovqat yeb suhbatlashganda, charchoq va kunlik stress unutiladi.",
        "Kun tartibini birgalikda o'tkazish mas'uliyat, mehr-oqibat va hamjihatlikni o'rgatadi.",
        "Dars va ishlar qanchalik ko'p bo'lmasin, oila doimo birinchi o'rinda turadi."
      ]
    }
  },

  // Lug'at
  vocabulary: [
    { word: "wake up", type: "fe'l iborasi", translation: "uyg'onmoq", example: "I wake up at 8:00 AM." },
    { word: "get up", type: "fe'l iborasi", translation: "o'rnidan turmoq", example: "He gets up early." },
    { word: "have breakfast", type: "fe'l iborasi", translation: "nonushta qilmoq", example: "We have breakfast together." },
    { word: "go to school / work", type: "fe'l iborasi", translation: "maktabga/ishga bormoq", example: "Father goes to work at 8:00." },
    { word: "do homework", type: "fe'l iborasi", translation: "uy vazifasini bajarmoq", example: "I do homework in the morning." },
    { word: "have dinner", type: "fe'l iborasi", translation: "kechki ovqat tanovul qilmoq", example: "We have dinner at 19:30." },
    { word: "go to bed", type: "fe'l iborasi", translation: "uyquga yotmoq", example: "I go to bed at 22:30." },
    { word: "always (100%)", type: "takroriylik ravishi", translation: "har doim", example: "We always eat dinner together." },
    { word: "usually (90%)", type: "takroriylik ravishi", translation: "odatda", example: "Father usually asks about school." },
    { word: "often (75%)", type: "takroriylik ravishi", translation: "tez-tez", example: "We often help our mother." },
    { word: "sometimes (50%)", type: "takroriylik ravishi", translation: "ba'zida", example: "We sometimes play chess." },
    { word: "never (0%)", type: "takroriylik ravishi", translation: "hech qachon", example: "We never miss family dinner." },
    { word: "together", type: "ravish", translation: "birga / birgalikda", example: "We spend 34 hours together." }
  ],

  // Speaker notes (O'zbek tilida nutq matnlari)
  speakerNotes: {
    1: "Assalomu alaykum, hurmatli ustoz va sinfdoshlar! Bugun men oilaviy kun tartibimiz bo'yicha ingliz tili BSB loyihamni taqdim etaman. Mening ismim Salohiddin va oilamning kundalik odatlari bilan sizlarni tanishtirishdan xursandman.",
    2: "Avvalo, o'zim haqimda qisqacha: Men 13 yoshdaman va 7-sinfda o'qiyman. Maqsadim — Present Simple zamonini mustahkamlash, kun tartibi so'zlarini to'g'ri qo'llash va so'rovnoma natijalarini ko'rgazmali grafiklarda ko'rsatishdir.",
    3: "Oilamizda yetti kishimiz: dadam Baxtiyor, onam Nodira, ukalarim Muhammadsodiq va Muhammadbilol, singillarim Sora va Sofiya hamda men. Ushbu tadqiqot uchun 5 kishidan batafsil intervyu oldim.",
    4: "So'rovnoma o'tkazish uchun 5 ta asosiy savol tayyorladim. Yakshanba kungi kechki ovqat paytida oilam bilan suhbatlashdim, vaqtlarni hisoblab chiqdim va ushbu taqqoslash diagrammalarini yaratdim.",
    5: "Mana mening maktab dars jadvalim. Darslarim 13:00 da boshlanib, 18:00 da tugaydi. Har kuni 6 daqiqalik tanaffus bilan 6 ta dars o'qiyman. Maktabim 2-smenada bo'lgani sababli, ertalabki vaqtim ingliz tili va kitob mutolaasiga sarflanadi.",
    6: "Birinchi savol: Siz soat nechada uyg'onasiz? Dadam Baxtiyor hammamizdan erta soat 05:30 da uyg'onadilar. Men esa maktabim tushdan keyin bo'lgani uchun 08:00 da uyg'onaman.",
    7: "Ikkinchi savol ish va maktab vaqtlari haqida edi. Dadam muhandis sifatida 9.5 soat ishlaydilar, onam 5.5 soat dars beradilar, uka-singillarim ertalab maktabga borishadi, men esa 13:00 dan 18:00 gacha o'qiyman.",
    8: "Uchinchi savol birga o'tkaziladigan vaqt haqida edi. Ish kunlari 3.5 soat, dam olish kunlari esa 8 soatdan ortiq vaqtni birga o'tkazamiz. Bu har haftada 34.5 soatlik samimiy oilaviy muloqot degani!",
    9: "To'rtinchi savol: Odatda birga nima qilasizlar? Barchamiz 100% har doim 19:30 da birga kechki ovqatlanamiz. Kun qanday o'tganini so'raymiz, onamizga yordamlashamiz va dam olish kunlari sayr qilamiz.",
    10: "Beshinchi savol: Barchaning eng sevimli mashg'uloti nima? G'olib — kechki choy ustida dildan suhbatlashish bo'ldi! 5 kishidan 3 nafari aynan shu milliy an'anamizni tanladi.",
    11: "Endi kunni uch qismda ko'rib chiqamiz: Ertalab ota-onam va uka-singillarim juda band, men uyda dars tayyorlayman. Kunduzi men maktabdaman. Kechqurun esa barchamiz uyda jamlanamiz.",
    12: "Qiziqarli oilaviy reytingimizga xush kelibsiz! Bu yerda kim shirinlik, sport, ovqat va kitobni ko'proq yoqtirishini ko'rishingiz mumkin. Ukam Muhammadsodiq shirinlik va futbol bo'yicha 1-o'rinda, men esa kitob o'qishda g'olibman!",
    13: "Ushbu Venn diagrammasi o'xshashlik va farqlarimizni ko'rsatadi. Dadam ishlaydilar, onam o'qitadilar, men o'qiyman. Lekin barchamiz 19:30 da kechki ovqatga yig'ilamiz va ko'k choy ichamiz.",
    14: "So'rovnomamizdan kelib chiqqan 5 ta qiziqarli fakt: masalan, dadam mendan 2.5 soat oldin uyg'onadilar va biz haftasiga 34 soatdan ortiq vaqtni birga o'tkazamiz!",
    15: "Bu slaydda 24 soatlik balansimiz ko'rsatilgan: Uyqu — 8 soat, darslar — 6 soat, oilaviy vaqt — 4.5 soat. Sifatli oilaviy vaqt bizga kuch va xursandchilik beradi.",
    16: "Xulosa qilib aytganda, bu loyiha ingliz tilimni rivojlantirishga, Present Simple zamonini chuqur o'rganishga va oilam qadrini yanada his qilishga yordam berdi. Savollaringiz bormi? E'tiboringiz uchun rahmat!"
  }
};
