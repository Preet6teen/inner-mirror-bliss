-- ==============================================================================
-- INNER MIRROR BLISS BY DEEPIKA - SEED DATA
-- ==============================================================================

INSERT INTO public.services (slug, title, category, price, duration_minutes, delivery_modes, short_description, full_description, benefits, display_order)
VALUES
(
    'tarot-card-reading',
    'Tarot Card Reading',
    'tarot',
    599.00,
    60,
    ARRAY['in-person', 'online-video'],
    'Deep intuitive 1-hour Tarot session offering clarity, divine guidance, and empowered direction for life, love, career, and spiritual growth.',
    'Step into sacred clarity with Deepika. This comprehensive 60-minute Tarot consultation delves deeply into your energetic patterns, answers your burning questions, and illuminates your path forward. Whether navigating relationships, career crossroads, financial decisions, or personal evolution, the cards serve as a celestial mirror reflecting truth, peace of mind, and fresh perspective.',
    ARRAY['Love & Relationships', 'Career & Job Guidance', 'Finance & Money Flow', 'Personal Growth', 'Health & Well-being', 'Family & Life Situation', 'Answers to Your Questions', 'Future Guidance'],
    1
),
(
    'reiki-healing-facial',
    'Reiki Healing Facial',
    'reiki',
    1000.00,
    60,
    ARRAY['in-person'],
    'A deeply restorative facial experience infusing universal life-force energy with soothing botanical touch to rejuvenate your skin and spirit.',
    'Harmonize your inner vitality and outer radiance. The Reiki Healing Facial combines holistic skincare touch with channeled Reiki healing to dissolve stress, melt facial muscle tension, release stagnant emotional energy, and leave your complexion visibly luminous and peaceful.',
    ARRAY['Glowing Skin', 'Energy Balancing', 'Deep Relaxation', 'Release Tension'],
    2
),
(
    'aura-cleansing',
    'Aura Cleansing',
    'energy-healing',
    300.00,
    30,
    ARRAY['in-person', 'distance'],
    'Purify your subtle electromagnetic energy field, release accumulated emotional fatigue, and restore feelings of lightness and renewed vitality.',
    'Throughout our daily interactions, our biofield absorbs environmental stress, psychic static, and heavy emotional energies. An Aura Cleansing session gently sweeps away stagnant energy blockages, seals subtle leaks, and envelopes you in a revitalizing shield of positive light.',
    ARRAY['Remove Negative Energy', 'Cleanse Aura', 'Feel Lighter', 'Bring Positivity'],
    3
),
(
    'crystal-healing',
    'Crystal Healing',
    'energy-healing',
    501.00,
    45,
    ARRAY['in-person'],
    'Therapeutic chakra alignment and frequency balancing using consecrated natural crystals and gemstones.',
    'Crystals possess coherent geometric frequencies that interact directly with our chakras. During this session, hand-selected gemstones (such as amethyst, rose quartz, and clear quartz) are placed along energy meridians to balance subtle vibrations, ground physical energy, and amplify emotional well-being.',
    ARRAY['Balance Your Energy', 'Chakra Alignment', 'Natural Healing', 'Attract Positivity'],
    4
),
(
    'emotional-healing',
    'Emotional Healing',
    'energy-healing',
    601.00,
    45,
    ARRAY['in-person', 'online-video'],
    'Targeted emotional release therapy designed to heal past wounds, anxiety, grief, and self-limiting subconscious blockages.',
    'Gently release emotional baggage that weighs down your heart and spirit. Deepika guides you through an empathetic, safe energetic container where deep-seated grief, stress, resentment, or uncertainty can be acknowledged, softened, and lovingly released into lightness.',
    ARRAY['Release Stress', 'Heal Past Emotions', 'Emotional Balance', 'Feel More Positive'],
    5
),
(
    'reiki-healing-body-massage',
    'Reiki Healing Body Massage',
    'reiki',
    2001.00,
    90,
    ARRAY['in-person'],
    'A luxurious 90-minute holistic full-body massage infused with channeled universal life energy for deep tension release and rejuvenation.',
    'Experience ultimate relaxation where therapeutic bodywork meets channeled Reiki healing. This transformative session systematically releases deep muscular knots, accelerates circulation, dissolves energetic blockages throughout the meridians, and returns your mind, body, and spirit to profound serenity.',
    ARRAY['Deep Relaxation', 'Release Energy Blocks', 'Improve Blood Circulation', 'Balance Body & Mind'],
    6
),
(
    'reiki-healing-head-massage',
    'Reiki Healing Head Massage',
    'reiki',
    999.00,
    45,
    ARRAY['in-person'],
    'Dedicated craniosacral and head therapy focused on alleviating chronic mental fatigue, migraines, overthinking, and insomnia.',
    'Quiet the busy mind and surrender tension held in the scalp, neck, temples, and shoulders. Channeled Reiki touch relieves headaches, melts away mental fatigue, enhances sleep quality, and induces a calm meditative state of clarity and peace.',
    ARRAY['Relieves Stress', 'Better Sleep', 'Calms Mind', 'Improves Focus'],
    7
),
(
    'angel-healing-card-message',
    'Angel Healing & Angel Card Message',
    'specialized',
    551.00,
    45,
    ARRAY['in-person', 'online-video'],
    'Receive uplifting divine messages from angelic realms alongside gentle energy transmission for comfort and spiritual elevation.',
    'Connect with your guardian angels and celestial guides through consecrated angel oracle cards and soothing high-vibrational energy. This session delivers messages of reassurance, unconditional love, renewed hope, and sacred direction when you need comforting spiritual reassurance.',
    ARRAY['Divine Guidance', 'Clarity in Life', 'Positive Direction', 'Connect with Higher Self'],
    8
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    duration_minutes = EXCLUDED.duration_minutes,
    short_description = EXCLUDED.short_description,
    full_description = EXCLUDED.full_description,
    benefits = EXCLUDED.benefits;
