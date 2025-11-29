const propheticRoutine = [
    {
        id: 1,
        time: "Last Third of the Night",
        title: "Waking Up & Tahajjud",
        preview: "The Prophet (PBUH) would wake up, use the Siwak, and engage in night prayers.",
        details: {
            intro: "The Prophet (PBUH) would wake up in the last third of the night, the most blessed time for prayer.",
            actions: [
                "He would sit up and wipe sleep from his face with his hand. (Sahih al-Bukhari 183)",
                "He would use the Siwak (toothstick) to clean his mouth immediately upon waking. (Sahih al-Bukhari 245)",
                "He would look towards the sky and recite the last ten verses of Surah Ali 'Imran (3:190-200). (Sahih al-Bukhari 183)",
                "He prayed Tahajjud at home. He would pray 11 Rak'ahs (including Witr) and prolong them significantly. (Sahih al-Bukhari 1147)"
            ],
            adhkar: [
                {
                    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
                    transliteration: "Al-hamdu lillaahi alladhee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor",
                    translation: "Praise is to Allah Who gives us life after He has caused us to die and to Him is the return. (Sahih al-Bukhari 6312)"
                }
            ],
            recitation: "In Tahajjud, he would prolong the recitation. Sometimes he would recite very long Surahs like Al-Baqarah, An-Nisa, and Ali 'Imran in a single rak'ah. (Sahih Muslim 772)",
            sources: ["Sahih al-Bukhari", "Sahih Muslim", "Shamail al-Tirmidhi"]
        }
    },
    {
        id: 2,
        time: "Dawn (Fajr)",
        title: "The Fajr Prayer",
        preview: "Sunnah at home, Fard in the Masjid.",
        details: {
            intro: "The start of the day with the Fajr prayer.",
            actions: [
                "He would pray two light Rak'ahs of Sunnah **at home** after the Adhan. (Sahih al-Bukhari 626)",
                "He would lie down on his right side for a short while at home before going to the Masjid. (Sahih al-Bukhari 626)",
                "He would lead the obligatory (Fard) prayer in the Masjid. (Sahih Muslim 670)",
                "He advised: 'The best prayer of a man is in his house, except for the obligatory prayer.' (Sahih al-Bukhari 731)"
            ],
            adhkar: [
                {
                    arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا...",
                    transliteration: "Allahum-maj'al fee qalbee noora...",
                    translation: "O Allah, place light in my heart... (recited while walking to the Masjid). (Sahih Muslim 763)"
                }
            ],
            recitation: "Sunnah: Surah Al-Kafirun and Al-Ikhlas. (Sahih Muslim 726)\nFard: Tiwal al-Mufassal (60-100 verses). (Sahih al-Bukhari 541)",
            sources: ["Sahih al-Bukhari", "Sahih Muslim"]
        }
    },
    {
        id: 3,
        time: "Sunrise to Mid-Morning",
        title: "The Public Assembly",
        preview: "Sitting in the Masjid to teach, listen, and resolve affairs.",
        details: {
            intro: "After Fajr, the Prophet (PBUH) would hold a public sitting (Majlis) in the Masjid. This was a time for community engagement and leadership.",
            actions: [
                "He would sit cross-legged (Tarabba'a) facing his companions. (Sunan Abi Dawud 4850)",
                "**Listening to Dreams:** He would often ask, 'Has anyone among you seen a dream?' and would interpret them. (Sahih al-Bukhari 7047)",
                "**Solving Problems:** People would bring their disputes, questions, and needs to him. He would listen patiently to everyone, including women and the elderly. (Sahih Muslim 2326)",
                "**Open Access:** Even a slave girl from Madinah could take his hand and lead him wherever she wished to help her with a task. (Sahih al-Bukhari 6072)",
                "**Distribution:** If charity or goods arrived, he would distribute them among the people immediately. (Sahih al-Bukhari 2739)"
            ],
            adhkar: [
                {
                    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ...",
                    transliteration: "Asbahna wa-asbahal-mulku lillah...",
                    translation: "We have entered the morning and the Kingdom belongs to Allah... (Sahih Muslim 2723)"
                }
            ],
            recitation: "He would teach verses of the Quran that were revealed or explain rulings.",
            sources: ["Sahih al-Bukhari", "Sahih Muslim", "Sunan Abi Dawud"]
        }
    },
    {
        id: 4,
        time: "Mid-Morning",
        title: "Duha Prayer",
        preview: "The prayer of the oft-repentant.",
        details: {
            intro: "When the sun was high, he prayed Duha.",
            actions: [
                "He prayed 4 to 8 Rak'ahs of Duha prayer. (Sahih Muslim 719)",
                "This prayer suffices for the charity (Sadaqah) due on every joint of the body. (Sahih Muslim 720)"
            ],
            adhkar: [],
            recitation: "",
            sources: ["Sahih Muslim"]
        }
    },
    {
        id: 5,
        time: "Noon (Zuhr)",
        title: "The Zuhr Prayer",
        preview: "Qaylulah (Nap) followed by the midday prayer.",
        details: {
            intro: "The sun passes its zenith.",
            actions: [
                "He would often take a midday nap (Qaylulah) before Zuhr. (Sahih Al-Jami 4431)",
                "He prayed 4 Rak'ahs Sunnah **before** the Fard prayer, usually at home. (Sahih al-Bukhari 876)",
                "He prayed the 4 Rak'ahs Fard in the Masjid.",
                "He prayed 2 Rak'ahs Sunnah **after** the Fard, at home. (Sahih al-Bukhari 1180)"
            ],
            adhkar: [],
            recitation: "In Zuhr and Asr, he would recite silently. In the first two Rak'ahs of Zuhr, he would recite Al-Fatiha and two Surahs. (Sahih al-Bukhari 759)",
            sources: ["Sahih al-Bukhari", "Sahih Al-Jami"]
        }
    },
    {
        id: 6,
        time: "Afternoon (Asr)",
        title: "The Asr Prayer",
        preview: "The middle prayer (Salat al-Wusta).",
        details: {
            intro: "The time when the shadow of an object equals its length.",
            actions: [
                "He would pray 4 Rak'ahs (sometimes 2) Sunnah before Asr. He said: 'May Allah have mercy on a person who prays four Rak'ahs before Asr.' (Jami` at-Tirmidhi 430)",
                "He prayed the 4 Rak'ahs Fard in the Masjid.",
                "He did not pray any Sunnah **after** Asr. (Sahih al-Bukhari 586)"
            ],
            adhkar: [],
            recitation: "Silent recitation.",
            sources: ["Sahih al-Bukhari", "Jami` at-Tirmidhi"]
        }
    },
    {
        id: 7,
        time: "Late Afternoon",
        title: "Community & Family",
        preview: "Visiting the sick and spending time with family.",
        details: {
            intro: "Between Asr and Maghrib, he balanced public and private duties.",
            actions: [
                "**Visiting the Sick:** He would walk to visit the sick, comforting them with words like 'La ba's, tahur insha'Allah' (No harm, it is a purification, if Allah wills). (Sahih al-Bukhari 3616)",
                "**Family Time:** He would visit his wives, checking on their needs and spending time with them. (Sahih al-Bukhari 5268)",
                "**Teaching Women:** He designated specific times to teach women who came to him with questions. (Sahih al-Bukhari 101)"
            ],
            adhkar: [],
            recitation: "",
            sources: ["Sahih al-Bukhari"]
        }
    },
    {
        id: 8,
        time: "Sunset (Maghrib)",
        title: "The Maghrib Prayer",
        preview: "Breaking the day's cycle.",
        details: {
            intro: "Immediately after the sun sets.",
            actions: [
                "He would hasten to pray Maghrib. (Sahih al-Bukhari 560)",
                "He prayed the 3 Rak'ahs Fard in the Masjid.",
                "He prayed 2 Rak'ahs Sunnah **after** Maghrib, strictly **at home**. (Sahih al-Bukhari 1180)",
                "He would recite Surah Al-Kafirun and Al-Ikhlas in these two Sunnah Rak'ahs. (Jami` at-Tirmidhi 431)"
            ],
            adhkar: [],
            recitation: "He recited from the Qisar al-Mufassal (short Surahs). Sometimes he recited long Surahs like Al-Tur. (Sahih al-Bukhari 764)",
            sources: ["Sahih al-Bukhari", "Jami` at-Tirmidhi"]
        }
    },
    {
        id: 9,
        time: "Evening (Isha)",
        title: "The Isha Prayer",
        preview: "The final obligatory prayer of the day.",
        details: {
            intro: "When the twilight disappears.",
            actions: [
                "He liked to delay the Isha prayer as long as it was not burdensome for the people. (Sahih al-Bukhari 568)",
                "He disliked sleeping before Isha and talking after it. (Sahih al-Bukhari 568)",
                "He prayed the 4 Rak'ahs Fard in the Masjid.",
                "He prayed 2 Rak'ahs Sunnah **after** Isha, **at home**. (Sahih al-Bukhari 1180)"
            ],
            adhkar: [],
            recitation: "He recited medium-length Surahs like Ash-Shams or Al-A'la. (Sahih al-Bukhari 710)",
            sources: ["Sahih al-Bukhari"]
        }
    },
    {
        id: 10,
        time: "Night",
        title: "Sleep Routine",
        preview: "Witr and preparation for sleep.",
        details: {
            intro: "Ending the day with remembrance.",
            actions: [
                "He would pray Witr (1, 3, or more Rak'ahs) before sleeping if he did not plan to wake up for Tahajjud, though he usually prayed it at the end of the night. (Sahih Muslim 755)",
                "He would perform Wudu, dust his bed, and recite the Mu'awwidhat (last 3 Surahs) into his hands and wipe his body. (Sahih al-Bukhari 5017)",
                "He slept on his right side. (Sahih al-Bukhari 6314)"
            ],
            adhkar: [
                {
                    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
                    transliteration: "Bismika Allahumma amootu wa-ahya",
                    translation: "In Your Name, O Allah, I die and I live. (Sahih al-Bukhari 6324)"
                }
            ],
            recitation: "Ayat al-Kursi, Surah Al-Mulk, Surah As-Sajdah. (Jami` at-Tirmidhi 3404)",
            sources: ["Sahih al-Bukhari", "Sahih Muslim", "Jami` at-Tirmidhi"]
        }
    }
];

const shamailChapters = [
    {
        id: "physical",
        title: "Physical Description",
        summary: "The Prophet (PBUH) was of medium height, neither too tall nor too short. His skin was reddish-white (radiant), not extremely white nor brown. His hair was neither very curly nor completely straight. He had a broad chest and shoulders. His face was like the moon in its brightness.",
        hadith: "Anas bin Malik (RA) reported: 'The Messenger of Allah (PBUH) was not excessively tall nor short, nor was he stark white nor deep brown. His hair was not extremely curly nor straight.' (Shamail 1)"
    },
    {
        id: "seal",
        title: "Seal of Prophethood",
        summary: "He had a raised piece of flesh between his shoulders, closer to the left shoulder, resembling a pigeon's egg. It was a sign of his Prophethood mentioned in previous scriptures.",
        hadith: "Jabir bin Samurah (RA) said: 'I saw the Seal of Prophethood between his shoulders like a red tumor (raised flesh), the size of a pigeon's egg.' (Shamail 16)"
    },
    {
        id: "hair",
        title: "Hair & Grooming",
        summary: "His hair sometimes reached his earlobes (Wafrah) and sometimes his shoulders (Jimmah). He would sometimes part it in the middle. He used oil and perfume frequently and combed his hair and beard.",
        hadith: "Anas (RA) said: 'The hair of the Messenger of Allah (PBUH) reached halfway to his earlobes.' (Shamail 24)"
    },
    {
        id: "clothing",
        title: "Clothing",
        summary: "He loved white clothing (Qamis/Thawb). He also wore a Yemeni Hibarah (striped cloak) and sometimes a black turban. His sleeves reached his wrists.",
        hadith: "Umm Salamah (RA) said: 'The clothing most beloved to the Messenger of Allah (PBUH) was the Qamis (long shirt).' (Shamail 55)"
    },
    {
        id: "walking",
        title: "Walking Style",
        summary: "He walked swiftly and forcefully, leaning forward as if he were descending from a high place. He did not walk lazily or proudly.",
        hadith: "Ali (RA) said: 'When he walked, he leaned forward as if descending a slope.' (Shamail 118)"
    },
    {
        id: "eating",
        title: "Eating Habits",
        summary: "He ate with three fingers and licked them afterwards. He never criticized food. He ate what was available, such as dates, barley bread, vinegar, olive oil, gourd (pumpkin), and meat (shoulder was his favorite).",
        hadith: "Ka'b bin Malik (RA) said: 'The Messenger of Allah (PBUH) used to eat with three fingers and would lick his hand before wiping it.' (Shamail 133)"
    },
    {
        id: "character",
        title: "Noble Character",
        summary: "He was always cheerful and easy-going, not harsh or rude. He did not shout in the markets. He overlooked the mistakes of others and did not seek out their faults. He was the most generous of people.",
        hadith: "Hind bin Abi Halah (RA) said: 'The Messenger of Allah (PBUH) was always sorrowful (concerned for the Ummah), always thinking, and had no rest... He was not harsh nor insignificant.' (Shamail 223)"
    },
    {
        id: "laughter",
        title: "Laughter & Smiling",
        summary: "His laughter was mostly a smile. When he was very happy, his molars would show. He never laughed loudly or boisterously.",
        hadith: "Abdullah bin Al-Harith (RA) said: 'I never saw anyone smile more than the Messenger of Allah (PBUH).' (Shamail 218)"
    },
    {
        id: "sleep",
        title: "Sleep",
        summary: "He slept on his right side with his right hand under his cheek. His mattress was made of leather stuffed with palm fiber.",
        hadith: "Hudhaifah (RA) said: 'When the Prophet (PBUH) went to bed, he would place his hand under his cheek.' (Shamail 243)"
    },
    {
        id: "worship",
        title: "Worship & Weeping",
        summary: "He would pray at night until his feet swelled. He would weep out of fear and love for Allah, sometimes making a sound like a boiling pot from his chest.",
        hadith: "Aisha (RA) asked him why he prayed so much when his sins were forgiven. He replied: 'Shall I not be a grateful slave?' (Shamail 258)"
    }
];
