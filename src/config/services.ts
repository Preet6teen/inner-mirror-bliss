import { Service } from "@/types";

export const initialServices: Service[] = [
  {
    id: "tarot-reading",
    slug: "tarot-reading",
    title: "Tarot Card Reading",
    category: "tarot",
    displayCategory: "Tarot Reading",
    price: 599,
    durationMinutes: 60,
    deliveryModes: ["in-person", "online-video"],
    imageUrl: "/images/services/tarot-reading-session.webp",
    heroHeading: "Tarot Card Reading",
    heroSubtitle: "Find clarity, explore possibilities and reflect on the questions that matter to you.",
    shortDescription:
      "A transformative 1-hour intuitive consultation to discover what the universe wants you to know, uncover clarity, and empower your life's path.",
    fullDescription:
      "Deepika conducts an empathetic, deeply channeled 60-minute Tarot consultation. Whether you seek resolution in love and relationships, career direction, financial decisions, or personal growth, this session serves as a luminous mirror to guide your decisions with serenity and confidence.",
    benefits: [
      "Love & Relationships",
      "Career & Job Guidance",
      "Finance & Money Flow",
      "Personal Growth",
      "Health & Well-being",
      "Family & Life Situation",
      "Answers to Your Questions",
      "Future Guidance",
    ],
    whatToExpect: [
      "A quiet, respectful, and private space dedicated entirely to your personal questions.",
      "A grounded explanation of the cards drawn, their symbolism, and their practical resonance.",
      "An open dialogue where you can ask clarifying questions throughout the full hour.",
      "Actionable reflections and empowering perspectives to take with you into your daily life.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Initial Centering & Intention Setting",
        description: "We begin with a gentle breath to center your focus and clarify the themes or specific questions you wish to bring to the cards.",
      },
      {
        step: 2,
        title: "Card Selection & Intuitive Spread",
        description: "Deepika shuffles and lays out tailored tarot spreads designed for your inquiry, inviting your energy to guide the deck.",
      },
      {
        step: 3,
        title: "In-Depth Exploration & Dialogue",
        description: "We examine the archetypes, hidden dynamics, and emotional patterns revealed, creating a supportive conversation around your circumstances.",
      },
      {
        step: 4,
        title: "Synthesis & Empowered Next Steps",
        description: "We summarize the core guidance, ensure all your questions have been addressed, and conclude with practical affirmations.",
      },
    ],
    topics: [
      {
        title: "Love and Relationships",
        description: "Explore relationship patterns, emotional connections, unspoken thoughts, and pathways toward mutual understanding or healthy boundaries.",
        questions: [
          "What energetic dynamics are influencing my current connection?",
          "How can I cultivate healthier communication with my partner?",
          "What emotional lessons am I learning in this relationship chapter?",
        ],
      },
      {
        title: "Career and Job Guidance",
        description: "Gain clarity on workplace decisions, career pivots, entrepreneurial ventures, and aligning your professional work with your authentic purpose.",
        questions: [
          "What hidden opportunities should I be aware of in my career?",
          "Is this the right moment for a job transition or new venture?",
          "How can I overcome current workplace stagnation?",
        ],
      },
      {
        title: "Finance and Money Flow",
        description: "Reflect on your relationship with abundance, financial caution, upcoming investments, and overcoming unconscious scarcity mindsets.",
        questions: [
          "What mindset shifts can support greater financial stability?",
          "What should I consider before making this major financial decision?",
          "How can I align my energy with long-term security?",
        ],
      },
      {
        title: "Personal Growth",
        description: "Uncover subconscious blocks, rediscover your natural strengths, and reconnect with your inner wisdom and authentic spiritual identity.",
        questions: [
          "What recurring pattern is asking to be understood and healed?",
          "Which latent gifts or talents are calling for expression?",
          "How can I deepen my connection with my intuitive inner voice?",
        ],
      },
      {
        title: "Family and Life Situation",
        description: "Navigate household transitions, family relationships, caregiving boundaries, and creating peace in your home environment.",
        questions: [
          "How can I foster greater harmony within my family circle?",
          "What perspective helps navigate this home or lifestyle change?",
          "How do I hold healthy boundaries while remaining loving?",
        ],
      },
      {
        title: "General & Open Questions",
        description: "Bring any specific question weighing on your heart. The 60-minute duration allows ample time for spontaneous inquiries.",
        questions: [
          "What is the most helpful theme for me to focus on this month?",
          "What blind spots or unexamined angles should I look at?",
          "What energy wants to enter my life as I move forward?",
        ],
      },
    ],
    ethicalDisclaimer:
      "Ethical Practice Notice: Tarot readings at Inner Mirror Bliss are intended for self-reflection, personal empowerment, and spiritual perspective. Tarot is not a substitute for professional legal, medical, psychological, or financial counsel. We do not predict inevitable or unchangeable future outcomes, as your free will and choices always shape your path.",
    faqs: [
      {
        question: "Is Tarot about predicting the future with absolute certainty?",
        answer: "No. At Inner Mirror Bliss, tarot is approached as a tool for personal clarity, self-reflection, and perspective. The cards reflect current energies, emotional patterns, and potential trajectories, while honoring that your free will and daily actions always determine your future.",
      },
      {
        question: "How long does a session last and what should I prepare?",
        answer: "The session lasts a full 60 minutes (₹599). You don't need any prior experience. Simply bring a curious mind and, if you like, a notebook and 2–3 questions or life areas you wish to explore.",
      },
      {
        question: "Can I attend online via video call or is it only in-person?",
        answer: "Both options are available! You can visit our peaceful studio in Ghansoli, Navi Mumbai, or book a private online video consultation from anywhere in India or abroad.",
      },
      {
        question: "Is what we discuss kept confidential?",
        answer: "Absolutely. Everything shared during your tarot reading is strictly confidential and held in complete privacy and respect.",
      },
    ],
    relatedServiceSlugs: ["aura-cleansing", "crystal-healing", "angel-healing"],
    isActive: true,
    displayOrder: 1,
  },
  {
    id: "reiki-healing-facial",
    slug: "reiki-healing-facial",
    title: "Reiki Healing Facial",
    category: "reiki",
    displayCategory: "Relaxation and Wellness",
    price: 1000,
    durationMinutes: 60,
    deliveryModes: ["in-person"],
    imageUrl: "/images/services/reiki-healing-facial.webp",
    heroHeading: "Reiki Healing Facial",
    heroSubtitle: "A soothing fusion of gentle skincare touch and universal Reiki energy to revitalize facial vitality and calm the nervous system.",
    shortDescription:
      "A soothing fusion of gentle skincare touch and channeled universal Reiki energy to revitalize facial vitality and calm the nervous system.",
    fullDescription:
      "Nourish your skin and recharge your aura. The Reiki Healing Facial gently melts accumulated stress in facial contours, balances the third-eye and crown energy centers, stimulates radiant circulation, and leaves your complexion glowing with peaceful serenity.",
    benefits: [
      "Glowing Skin & Vitality",
      "Energy Balancing",
      "Deep Nervous System Relaxation",
      "Release Facial & Jaw Tension",
    ],
    whatToExpect: [
      "A gentle, calming cleanse and soothing touch complemented by non-invasive Reiki hand placements.",
      "Soft acoustic melodies, gentle aromatherapy, and a tranquil sanctuary ambiance in Ghansoli.",
      "Balancing of the upper chakras (throat, third eye, crown) to release accumulated mental fatigue.",
      "A refreshed complexion and a profound sense of inner stillness upon rising from the table.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Gentle Consultation",
        description: "We understand your skin sensitivity, relaxation preferences, and any areas of facial or neck tension.",
      },
      {
        step: 2,
        title: "Holistic Facial Care & Reiki Touch",
        description: "Gentle natural skincare rituals combined with light-touch Reiki energy channelled to facial pressure points.",
      },
      {
        step: 3,
        title: "Upper Chakra Harmonization",
        description: "Focusing warm universal energy across the forehead, temples, and neck to soothe the nervous system.",
      },
      {
        step: 4,
        title: "Restful Awakening",
        description: "A cool compress, hydrating finish, and time to sip warm water while your senses gently reawaken.",
      },
    ],
    ethicalDisclaimer:
      "Wellness Notice: The Reiki Healing Facial is a holistic relaxation and stress-relief treatment designed to nurture personal well-being. It is not a dermatological or medical procedure, and specific skin improvement outcomes cannot be guaranteed.",
    faqs: [
      {
        question: "What makes a Reiki facial different from a conventional salon facial?",
        answer: "A standard facial focuses primarily on surface exfoliation. The Reiki Healing Facial integrates intentional energy balancing, quiet mindfulness, and gentle touch to ease the underlying stress and jaw tension that often express on the face.",
      },
      {
        question: "Is this suitable for sensitive skin?",
        answer: "Yes. We use exceptionally gentle, soothing, non-comedogenic preparations and tailor the touch to your personal skin sensitivity.",
      },
      {
        question: "What is the fee and duration?",
        answer: "The session is ₹1,000 for a relaxing 60-minute in-person experience at our Ghansoli studio.",
      },
    ],
    relatedServiceSlugs: ["reiki-head-massage", "reiki-body-massage", "aura-cleansing"],
    isActive: true,
    displayOrder: 2,
  },
  {
    id: "aura-cleansing",
    slug: "aura-cleansing",
    title: "Aura Cleansing",
    category: "energy-healing",
    displayCategory: "Energy and Spiritual Experiences",
    price: 300,
    durationMinutes: 30,
    deliveryModes: ["in-person", "distance"],
    imageUrl: "/images/services/aura-cleansing.webp",
    heroHeading: "A Moment to Reconnect With Yourself",
    heroSubtitle: "Purification of your electromagnetic biofield to dissolve heavy negative energies, detach psychic cords, and restore feelings of lightness.",
    shortDescription:
      "Purification of your electromagnetic biofield to dissolve heavy negative energies, detach psychic cords, and restore feelings of lightness.",
    fullDescription:
      "Our subtle aura accumulates vibrations from our environment, work stress, and social interactions. An Aura Cleansing session removes sluggish, stagnant energy blocks, restores your energetic boundaries, and envelops you in high-frequency lightness and positivity.",
    benefits: [
      "Remove Negative Energy",
      "Cleanse Subtle Biofield",
      "Feel Energetically Lighter",
      "Cultivate Peaceful Positivity",
    ],
    whatToExpect: [
      "A peaceful meditation-based session where you comfortably recline in a calming atmosphere.",
      "Traditional energy-cleansing techniques, gentle sage/incense aromatherapy, and aura sweeping.",
      "A palpable sensation of lightness and mental clarity as energetic heaviness dissolves.",
      "Practical tips for maintaining daily energetic hygiene and healthy boundaries.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Energy Assessment",
        description: "Checking areas of perceived sluggishness, mental drain, or heaviness in your auric space.",
      },
      {
        step: 2,
        title: "Biofield Sweeping & Cord Release",
        description: "Non-invasive sweeping motions using consecrated energy tools to clear stagnant vibrations.",
      },
      {
        step: 3,
        title: "Luminous Boundary Sealing",
        description: "Infusing your field with high-vibrational positive frequency to reinforce personal vitality.",
      },
    ],
    ethicalDisclaimer:
      "Spiritual Practice Notice: Aura Cleansing is a traditional spiritual and energetic relaxation practice. It is not a scientifically established medical treatment or psychological therapy.",
    faqs: [
      {
        question: "How do I know if I need an Aura Cleansing?",
        answer: "Many clients seek an aura cleansing when they feel unexplainably tired after crowded events, emotionally depleted by work environments, or simply when they want a fresh, uplifted energetic start.",
      },
      {
        question: "Can Aura Cleansing be performed at a distance?",
        answer: "Yes, energetic intention transcends physical space. We offer both in-person sessions at our Ghansoli studio and focused distance sessions with prior appointment.",
      },
      {
        question: "What is the investment for this session?",
        answer: "The session fee is ₹300 for a focused 30-minute clearing.",
      },
    ],
    relatedServiceSlugs: ["crystal-healing", "tarot-reading", "emotional-healing"],
    isActive: true,
    displayOrder: 3,
  },
  {
    id: "crystal-healing",
    slug: "crystal-healing",
    title: "Crystal Healing",
    category: "energy-healing",
    displayCategory: "Energy and Spiritual Experiences",
    price: 501,
    durationMinutes: 45,
    deliveryModes: ["in-person"],
    imageUrl: "/images/services/crystal-healing-amethyst.webp",
    heroHeading: "Discover the Beauty of Crystal Healing",
    heroSubtitle: "Therapeutic chakra alignment utilizing genuine consecrated gemstones and crystals to harmonize your body's subtle frequency.",
    shortDescription:
      "Therapeutic chakra alignment utilizing genuine consecrated gemstones and crystals to harmonize your body's subtle frequency.",
    fullDescription:
      "Natural gemstones hold pure geometric crystalline frequencies. In this restorative session, selected crystals (such as Amethyst, Rose Quartz, and Selenite) are placed strategically upon energy vortices to re-align unbalanced chakras, alleviate fatigue, and magnify your vital life energy.",
    benefits: [
      "Balance Your Subtle Energy",
      "Seven Chakra Alignment",
      "Natural Deep Relaxation",
      "Attract Grounded Positivity",
    ],
    whatToExpect: [
      "Carefully chosen, cleansed, and consecrated natural gemstones placed gently along chakra centers.",
      "Deep, restorative stillness as crystal vibrations help soothe overstimulated nerve pathways.",
      "Personalized insights on crystals that best support your ongoing spiritual path.",
      "A serene setting with soft lighting, natural incense, and gentle background harmonies.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Chakra Balance Check",
        description: "Assessing subtle vibrational alignment across root to crown centers.",
      },
      {
        step: 2,
        title: "Crystal Placement",
        description: "Arranging specific resonant minerals (Amethyst, Quartz, Selenite, Carnelian) along energy points.",
      },
      {
        step: 3,
        title: "Still Meditation & Integration",
        description: "A 25-minute period of quiet meditative resonance while the crystals rest in place.",
      },
      {
        step: 4,
        title: "Grounding & Closure",
        description: "Gentle removal, grounding touch, and discussion of sensations experienced during the session.",
      },
    ],
    ethicalDisclaimer:
      "Holistic Wellness Notice: Crystal healing is an alternative complementary spiritual wellness practice. Crystals do not diagnose, treat, or cure medical diseases or psychological disorders. Always consult licensed healthcare professionals for medical conditions.",
    faqs: [
      {
        question: "Do I need to believe in crystals for the session to feel relaxing?",
        answer: "No. The combination of quiet stillness, mindful breath, and dedicated self-care provides deep nervous system rest regardless of your prior experience with crystals.",
      },
      {
        question: "Which crystals are commonly used in the session?",
        answer: "Depending on your focus, Deepika incorporates authentic stones such as Amethyst (calming the mind), Rose Quartz (heart opening), Selenite (clarity), and Black Tourmaline (grounding).",
      },
      {
        question: "What is the price and duration?",
        answer: "The session is ₹501 for 45 minutes of in-person healing at our Ghansoli studio.",
      },
    ],
    relatedServiceSlugs: ["aura-cleansing", "emotional-healing", "tarot-reading"],
    isActive: true,
    displayOrder: 4,
  },
  {
    id: "emotional-healing",
    slug: "emotional-healing",
    title: "Emotional Healing",
    category: "energy-healing",
    displayCategory: "Energy and Spiritual Experiences",
    price: 601,
    durationMinutes: 45,
    deliveryModes: ["in-person", "online-video"],
    imageUrl: "/images/services/emotional-healing.webp",
    heroHeading: "Make Space for Reflection and Balance",
    heroSubtitle: "A compassionate therapeutic container to release deeply held grief, past heartache, anxious thought loops, and subconscious blockages.",
    shortDescription:
      "A compassionate therapeutic container to release deeply held grief, past heartache, anxious thought loops, and subconscious blockages.",
    fullDescription:
      "Emotional heaviness affects our vitality, sleep, and relationships. Guided by Deepika, you are invited into an empathetic sacred space where past emotional wounds are gently met with energy healing and loving release, cultivating inner stillness and emotional freedom.",
    benefits: [
      "Release Deep Emotional Stress",
      "Heal Lingering Past Emotions",
      "Restore Inner Equilibrium",
      "Feel Open, Centered & Positive",
    ],
    whatToExpect: [
      "A compassionate, non-judgmental space where your feelings are honored and held in confidence.",
      "Guided breathwork and energy channeling focused on releasing heaviness stored in the heart center.",
      "Tools for cultivating self-forgiveness, emotional boundaries, and gentle self-compassion.",
      "A lingering sense of emotional relief, clarity, and renewal.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Heart-Centered Sharing",
        description: "Expressing the emotional weight, recurring thoughts, or recent transitions you wish to release.",
      },
      {
        step: 2,
        title: "Guided Release & Energy Work",
        description: "Combining gentle guided meditation with focused Reiki and energy channeling to soothe the heart chakra.",
      },
      {
        step: 3,
        title: "Integration & Affirmations",
        description: "Grounding the emotional shift with practical self-compassion practices to take into daily life.",
      },
    ],
    ethicalDisclaimer:
      "Important Boundary Notice: Emotional Healing sessions at Inner Mirror Bliss are non-clinical, spiritual, and wellness-oriented support containers. They are not psychotherapy, psychiatry, counseling, or clinical mental health treatment. If you are experiencing severe psychological distress, please seek support from licensed mental health providers.",
    faqs: [
      {
        question: "Is this session like talk therapy?",
        answer: "While we do talk through what you are feeling, the focus is holistic and energetic. We utilize guided relaxation, breathwork, and gentle spiritual techniques to help the emotional body release tension.",
      },
      {
        question: "Can I attend this session online?",
        answer: "Yes, emotional healing sessions are available both in-person at our Ghansoli studio and online via secure video call.",
      },
      {
        question: "What is the fee and duration?",
        answer: "The session is ₹601 for a 45-minute consultation.",
      },
    ],
    relatedServiceSlugs: ["tarot-reading", "aura-cleansing", "angel-healing"],
    isActive: true,
    displayOrder: 5,
  },
  {
    id: "reiki-body-massage",
    slug: "reiki-body-massage",
    title: "Reiki Healing Body Massage",
    category: "reiki",
    displayCategory: "Relaxation and Wellness",
    price: 2001,
    durationMinutes: 90,
    deliveryModes: ["in-person"],
    imageUrl: "/images/services/reiki-healing-body-massage.webp",
    heroHeading: "Relax and Reconnect",
    heroSubtitle: "A luxurious 90-minute holistic full-body massage infused with channeled universal life energy for total body, mind, and soul rejuvenation.",
    shortDescription:
      "A luxurious 90-minute holistic full-body massage infused with channeled universal life energy for total body, mind, and soul rejuvenation.",
    fullDescription:
      "Experience the pinnacle of holistic restorative care. Combining therapeutic rhythmic pressure and channeled Reiki healing, this session systematically loosens muscular tension, stimulates healthy blood and lymphatic circulation, clears energetic blockages, and brings profound tranquility.",
    benefits: [
      "Profound Full-Body Relaxation",
      "Release Deep Energy Blocks",
      "Stimulate Natural Circulation",
      "Harmonize Body, Mind & Spirit",
    ],
    whatToExpect: [
      "A serene, warm treatment room designed with ambient lighting, soothing aromas, and calm music.",
      "Therapeutic body massage techniques tailored to your comfort and preferred pressure level.",
      "Interwoven Reiki energy holds on key joints, chakras, and tense muscular meridian points.",
      "Complete renewal, eased physical tension, and an deeply tranquil nervous system.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Intake & Pressure Alignment",
        description: "Discussing any areas of muscle soreness, tension spots, and desired massage pressure.",
      },
      {
        step: 2,
        title: "Therapeutic Massage & Warm Energy",
        description: "Full-body muscular relaxation using nourishing herbal massage oils combined with Reiki flow.",
      },
      {
        step: 3,
        title: "Chakra Balance & Energy Sealing",
        description: "Dedicated energy holds along the spinal axis to restore systemic energetic harmony.",
      },
      {
        step: 4,
        title: "Restful Awakening",
        description: "Time to rest peacefully, hydrate, and gently transition back into wakeful daily flow.",
      },
    ],
    ethicalDisclaimer:
      "Wellness & Therapeutic Touch Notice: The Reiki Healing Body Massage is a holistic relaxation and muscular wellness treatment. It does not replace orthopedic, chiropractic, or clinical medical diagnosis or treatment.",
    faqs: [
      {
        question: "How long is the session and what is the fee?",
        answer: "The session is a generous 90 minutes of dedicated care at ₹2,001.",
      },
      {
        question: "Where does the massage take place?",
        answer: "In our dedicated, private, sanitized healing room at Panchvati Co-op Society, Sector 5, Ghansoli, Navi Mumbai.",
      },
      {
        question: "Is advance booking required?",
        answer: "Yes, prior booking is strictly required to ensure the healing suite is prepared fresh for each guest.",
      },
    ],
    relatedServiceSlugs: ["reiki-head-massage", "reiki-healing-facial", "aura-cleansing"],
    isActive: true,
    displayOrder: 6,
  },
  {
    id: "reiki-head-massage",
    slug: "reiki-head-massage",
    title: "Reiki Healing Head Massage",
    category: "reiki",
    displayCategory: "Relaxation and Wellness",
    price: 999,
    durationMinutes: 45,
    deliveryModes: ["in-person"],
    imageUrl: "/images/services/reiki-healing-head-massage.webp",
    heroHeading: "Take a Moment to Unwind",
    heroSubtitle: "Targeted therapy for scalp, temples, and neck to soothe migraines, calm an overactive mind, and promote deep, restorative sleep.",
    shortDescription:
      "Targeted therapy for scalp, temples, and neck to soothe migraines, calm an overactive mind, and promote deep, restorative sleep.",
    fullDescription:
      "Unwind mental tension and overstimulation. Applying gentle pressure points combined with soothing Reiki flow, this head massage dissolves cranial stiffness, relieves pressure and migraines, eases racing thoughts, and encourages sound, peaceful rest.",
    benefits: [
      "Relieves Mental Stress & Pressure",
      "Encourages Sound, Restorative Sleep",
      "Calms Racing Thoughts",
      "Restores Mental Focus & Clarity",
    ],
    whatToExpect: [
      "Focused acupressure and gentle circular massage strokes across the scalp, temples, and base of skull.",
      "Infusion of soothing Reiki vibrations to cool down an overstimulated mental field.",
      "Immediate release of forehead strain and neck stiffness from prolonged screen time.",
      "A peaceful sensation of mental spaciousness and lightness.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Tension Mapping",
        description: "Locating specific areas of tightness across the neck, temples, and occipital ridges.",
      },
      {
        step: 2,
        title: "Acupressure & Scalp Therapy",
        description: "Gentle rhythmic touch, herbal oil touch (optional upon client preference), and scalp relaxation.",
      },
      {
        step: 3,
        title: "Crown & Third-Eye Reiki Channeling",
        description: "Still hand placements to quiet mental dialogue and balance the upper energy centers.",
      },
      {
        step: 4,
        title: "Gentle Grounding",
        description: "Soothing shoulder sweeps to ground your energy before stepping out.",
      },
    ],
    ethicalDisclaimer:
      "Wellness Notice: The Reiki Head Massage is a relaxation service aimed at stress relief. It is not intended to diagnose or treat chronic neurological conditions or medical migraines.",
    faqs: [
      {
        question: "Can this help if I spend long hours staring at screens?",
        answer: "Yes, clients working long hours at computer screens frequently report that this targeted massage relieves eye strain and heavy head fatigue.",
      },
      {
        question: "Is oil used during the head massage?",
        answer: "We offer both dry pressure-point massage or light organic nourishing hair oils based on your personal preference.",
      },
      {
        question: "What is the fee and duration?",
        answer: "The session is ₹999 for 45 minutes of targeted in-person relaxation at our Ghansoli studio.",
      },
    ],
    relatedServiceSlugs: ["reiki-healing-facial", "reiki-body-massage", "aura-cleansing"],
    isActive: true,
    displayOrder: 7,
  },
  {
    id: "angel-healing",
    slug: "angel-healing",
    title: "Angel Healing & Angel Card Message",
    category: "specialized",
    displayCategory: "Energy and Spiritual Experiences",
    price: 551,
    durationMinutes: 45,
    deliveryModes: ["in-person", "online-video"],
    imageUrl: "/images/services/angel-card-reading.webp",
    heroHeading: "Discover Angel Healing & Angel Card Messages",
    heroSubtitle: "Divine angel card messages accompanied by soothing angelic energy transmission to inspire comfort, elevation, and spiritual reassurance.",
    shortDescription:
      "Divine angel card messages accompanied by soothing angelic energy transmission to inspire comfort, elevation, and spiritual reassurance.",
    fullDescription:
      "Tap into high-vibrational angelic wisdom and compassionate love. Consecrated angel cards reveal uplifting messages and guidance from celestial realms, while gentle angelic frequencies restore hope, clarity, and deep connection with your highest self.",
    benefits: [
      "Receive Divine Angelic Guidance",
      "Gain Clarity on Life Choices",
      "Uplifting Spiritual Reassurance",
      "Deep Connection With Higher Self",
    ],
    whatToExpect: [
      "A serene and uplifting space surrounded by soft celestial frequencies and gentle intention.",
      "An insightful angel card spread conveying gentle, reassuring guidance tailored to your current path.",
      "A calming transmission of angelic energy to envelop your heart and mind in comfort.",
      "Clear, positive takeaways to anchor hope, peace, and purposeful direction.",
    ],
    sessionProcess: [
      {
        step: 1,
        title: "Invocation of Light",
        description: "A peaceful prayerful opening to call in benevolent angelic guidance and protection.",
      },
      {
        step: 2,
        title: "Angel Card Spread",
        description: "Drawing consecrated angel cards to reveal benevolent messages for your heart.",
      },
      {
        step: 3,
        title: "Energy Transmission & Blessing",
        description: "A soft channeled angelic energy transmission to soothe and lift your spirits.",
      },
      {
        step: 4,
        title: "Closing Affirmation",
        description: "A personalized angelic affirmation card to carry with you.",
      },
    ],
    ethicalDisclaimer:
      "Spiritual Practice Notice: Angel Healing and Angel Card Messages are spiritual wellness practices intended to offer uplifting comfort, hope, and inspirational perspective. They do not constitute fortune telling or legal, medical, or financial advice.",
    faqs: [
      {
        question: "How is an Angel Card reading different from a traditional Tarot reading?",
        answer: "While Tarot explores complex psychological archetypes, life situations, and decision crossroads, Angel Card readings are focused on pure upliftment, gentle reassurance, and loving celestial guidance.",
      },
      {
        question: "Can I take this session online?",
        answer: "Yes, angel card sessions are equally uplifting when conducted online over video call as in our Ghansoli studio.",
      },
      {
        question: "What is the fee and duration?",
        answer: "The session is ₹551 for 45 minutes of compassionate guidance.",
      },
    ],
    relatedServiceSlugs: ["tarot-reading", "aura-cleansing", "crystal-healing"],
    isActive: true,
    displayOrder: 8,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return initialServices.find((s) => s.slug === slug);
}

export function getActiveServices(): Service[] {
  return initialServices.filter((s) => s.isActive).sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getRelatedServices(currentSlug: string, count: number = 3): Service[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return initialServices.slice(0, count);

  if (current.relatedServiceSlugs && current.relatedServiceSlugs.length > 0) {
    const related = current.relatedServiceSlugs
      .map((slug) => getServiceBySlug(slug))
      .filter((s): s is Service => Boolean(s));
    if (related.length >= count) return related.slice(0, count);
  }

  return initialServices
    .filter((s) => s.slug !== currentSlug)
    .slice(0, count);
}
