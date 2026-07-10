/* js/gallery.js - Plant Gallery Data and Interactions */

// --- Plant Database ---
const galleryPlants = [
    {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        scientificName: 'Aloe barbadensis miller',
        category: 'medicinal',
        categoryLabel: 'Medicinal / Succulent',
        difficulty: 'Easy',
        sunlight: 'Bright indirect sunlight',
        water: 'Water deeply but infrequently (every 2-3 weeks)',
        soil: 'Well-draining sandy succulent mix',
        fertilizer: 'Rarely needs fertilizer (once in spring)',
        problems: 'Soft brown leaves (overwatering)',
        solutions: 'Reduce watering frequency and check root drainage.',
        description: 'A succulent plant species of the genus Aloe. It grows wild in tropical climates and is cultivated for agricultural and medicinal uses.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M70 150 L130 150 L140 190 L60 190 Z" fill="#d97736" />
            <ellipse cx="100" cy="150" rx="35" ry="8" fill="#c2410c" />
            <line x1="60" y1="190" x2="140" y2="190" stroke="#7c2d12" stroke-width="2" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="30" ry="5" fill="#582f0e" />
            <!-- Aloe Leaves -->
            <path d="M100 148 C90 110 85 80 50 60 C80 80 92 110 100 148 Z" fill="#386641" />
            <path d="M100 148 C110 110 115 80 150 60 C120 80 108 110 100 148 Z" fill="#386641" />
            <path d="M96 148 C90 100 80 60 70 30 C88 65 94 105 96 148 Z" fill="#6a994e" />
            <path d="M104 148 C110 100 120 60 130 30 C112 65 106 105 104 148 Z" fill="#6a994e" />
            <path d="M100 148 C98 90 98 50 100 10 C102 50 102 90 100 148 Z" fill="#a7c957" />
            <!-- White Spines/Details -->
            <circle cx="85" cy="100" r="1.5" fill="#f4f9f4" />
            <circle cx="75" cy="80" r="1.5" fill="#f4f9f4" />
            <circle cx="115" cy="100" r="1.5" fill="#f4f9f4" />
            <circle cx="125" cy="80" r="1.5" fill="#f4f9f4" />
            <circle cx="95" cy="70" r="1.5" fill="#f4f9f4" />
            <circle cx="105" cy="70" r="1.5" fill="#f4f9f4" />
        </svg>`
    },
    {
        id: 'snake-plant',
        name: 'Snake Plant',
        scientificName: 'Dracaena trifasciata',
        category: 'succulents',
        categoryLabel: 'Succulent / Indoor',
        difficulty: 'Very Easy',
        sunlight: 'Adaptable (thrives in bright indirect to low light)',
        water: 'Allow soil to dry out completely (every 3-4 weeks)',
        soil: 'Succulent or general porous potting mix',
        fertilizer: 'Feed once or twice during spring and summer',
        problems: 'Drooping, yellowing leaves (wet feet)',
        solutions: 'Let the soil dry completely; ensure pot has drainage holes.',
        description: 'Commonly known as mother-in-law\'s tongue. It is an excellent air purifier and nearly indestructible, making it perfect for beginners.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M70 150 L130 150 L138 185 L62 185 Z" fill="#6b7280" />
            <ellipse cx="100" cy="150" rx="33" ry="7" fill="#4b5563" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="29" ry="4" fill="#371a03" />
            <!-- Tall Leaves -->
            <!-- Leaf 1 (Left) -->
            <path d="M85 148 C75 90 70 50 78 20 C85 50 90 95 90 148 Z" fill="#1b4332" />
            <path d="M78 20 C80 50 85 95 87 148" stroke="#a7c957" stroke-width="2" fill="none" />
            <path d="M85 148 C75 90 70 50 78 20" stroke="#f4f9f4" stroke-width="1.5" stroke-dasharray="3 8" fill="none" opacity="0.4" />
            <!-- Leaf 2 (Center) -->
            <path d="M100 148 C95 80 90 40 102 10 C108 40 105 80 102 148 Z" fill="#2d6a4f" />
            <path d="M102 10 C104 40 103 80 101 148" stroke="#f4f9f4" stroke-width="2" fill="none" opacity="0.6" />
            <!-- Leaf 3 (Right) -->
            <path d="M115 148 C125 95 130 55 122 25 C115 55 110 95 110 148 Z" fill="#1b4332" />
            <path d="M122 25 C120 55 115 95 113 148" stroke="#a7c957" stroke-width="2" fill="none" />
            <path d="M115 148 C125 95 130 55 122 25" stroke="#f4f9f4" stroke-width="1.5" stroke-dasharray="3 8" fill="none" opacity="0.4" />
        </svg>`
    },
    {
        id: 'peace-lily',
        name: 'Peace Lily',
        scientificName: 'Spathiphyllum',
        category: 'flowering',
        categoryLabel: 'Flowering / Indoor',
        difficulty: 'Medium',
        sunlight: 'Medium to low indirect light',
        water: 'Water once a week (keeps soil consistently moist)',
        soil: 'Peat-rich organic well-draining soil',
        fertilizer: 'Feed monthly in spring and summer with balanced fertilizer',
        problems: 'Brown leaf tips (tap water chemicals/low humidity)',
        solutions: 'Use distilled water and mist leaves regularly.',
        description: 'Known for its shiny dark green leaves and elegant white blossoms. It dramatically droops to tell you when it needs water, bouncing back quickly.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M68 150 L132 150 L140 190 L60 190 Z" fill="#b91c1c" />
            <ellipse cx="100" cy="150" rx="35" ry="8" fill="#991b1b" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="31" ry="5" fill="#451a03" />
            <!-- Bushy Leaves -->
            <path d="M100 148 C70 120 50 110 40 100 C60 100 80 120 100 148 Z" fill="#1b4332" />
            <path d="M100 148 C130 120 150 110 160 100 C140 100 120 120 100 148 Z" fill="#1b4332" />
            <path d="M100 148 C80 110 70 80 60 70 C75 75 88 105 100 148 Z" fill="#2d6a4f" />
            <path d="M100 148 C120 110 130 80 140 70 C125 75 112 105 100 148 Z" fill="#2d6a4f" />
            <path d="M100 148 C95 110 90 90 85 60 C98 75 98 110 100 148 Z" fill="#40916c" />
            <path d="M100 148 C105 110 110 90 115 60 C102 75 102 110 100 148 Z" fill="#40916c" />
            <!-- White Flowers -->
            <!-- Stem 1 -->
            <path d="M100 148 C95 100 90 60 85 40" stroke="#52b788" stroke-width="2.5" fill="none" />
            <!-- Spathe (white leaf) -->
            <path d="M85 40 C75 25 75 10 85 0 C95 10 95 25 85 40 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5" />
            <!-- Spadix (yellow core) -->
            <path d="M85 30 C83 25 83 18 85 13 C87 18 87 25 85 30 Z" fill="#fef08a" />
            
            <!-- Stem 2 -->
            <path d="M100 148 C105 100 112 70 120 45" stroke="#52b788" stroke-width="2.5" fill="none" />
            <path d="M120 45 C110 30 110 15 120 5 C130 15 130 30 120 45 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5" />
            <path d="M120 35 C118 30 118 23 120 18 C122 23 122 30 120 35 Z" fill="#fef08a" />
        </svg>`
    },
    {
        id: 'money-plant',
        name: 'Money Plant',
        scientificName: 'Epipremnum aureum',
        category: 'indoor',
        categoryLabel: 'Indoor Vine',
        difficulty: 'Easy',
        sunlight: 'Bright indirect light (tolerates low light)',
        water: 'Water once every 7-10 days (let soil top dry)',
        soil: 'Standard well-aerated potting mix',
        fertilizer: 'Diluted liquid fertilizer once a month in spring/summer',
        problems: 'Yellow leaves (overwatering), pale leaves (too much sun)',
        solutions: 'Let the soil dry out more. Relocate to filtered light.',
        description: 'Also known as Golden Pothos. It grows long, beautiful climbing or trailing vines. Supposed to bring good luck and wealth.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M72 150 L128 150 L136 180 L64 180 Z" fill="#1e3a8a" />
            <ellipse cx="100" cy="150" rx="30" ry="6" fill="#1e40af" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="27" ry="4" fill="#2d1601" />
            <!-- Vine Branches -->
            <!-- Left Hanging Vine -->
            <path d="M90 148 C75 160 55 165 40 185" fill="none" stroke="#2d6a4f" stroke-width="2.5" />
            <!-- Right Hanging Vine -->
            <path d="M110 148 C125 160 140 170 150 195" fill="none" stroke="#2d6a4f" stroke-width="2.5" />
            <!-- Upright Stems -->
            <path d="M100 148 C95 120 85 90 90 70" fill="none" stroke="#2d6a4f" stroke-width="2.5" />
            <!-- Heart Leaves -->
            <!-- Left Leaves -->
            <path d="M40 185 C35 175 42 168 50 175 C45 185 42 188 40 185 Z" fill="#52b788" />
            <path d="M60 160 C50 150 60 145 68 152 C65 162 62 165 60 160 Z" fill="#74c69d" />
            <!-- Right Leaves -->
            <path d="M150 195 C145 185 152 178 160 185 C155 195 152 198 150 195 Z" fill="#52b788" />
            <path d="M130 165 C120 155 130 150 138 157 C135 167 132 170 130 165 Z" fill="#74c69d" />
            <!-- Top Leaves -->
            <path d="M90 70 C80 60 90 55 98 62 C95 72 92 75 90 70 Z" fill="#95d5b2" />
            <path d="M96 110 C85 100 95 95 103 102 C100 112 98 115 96 110 Z" fill="#52b788" />
        </svg>`
    },
    {
        id: 'spider-plant',
        name: 'Spider Plant',
        scientificName: 'Chlorophytum comosum',
        category: 'indoor',
        categoryLabel: 'Indoor Hanging',
        difficulty: 'Easy',
        sunlight: 'Bright indirect light',
        water: 'Water once a week (prefers dry soil to soggy)',
        soil: 'Well-draining loamy potting soil',
        fertilizer: 'Feed twice a month during spring and summer',
        problems: 'Brown tips (salt/fluoride in tap water)',
        solutions: 'Flush soil with distilled/rainwater; trim brown tips.',
        description: 'Features long, narrow leaves with striped white centers. Produces tiny white flowers and baby plantlets ("spiderettes") that dangle from long stems.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M72 150 L128 150 L136 180 L64 180 Z" fill="#0f766e" />
            <ellipse cx="100" cy="150" rx="30" ry="6" fill="#0d9488" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="27" ry="4" fill="#3c1a01" />
            <!-- Arching Leaves -->
            <path d="M100 148 Q70 110 30 115 C55 125 78 135 100 148" fill="#52b788" />
            <path d="M100 148 Q70 110 30 115 C55 125 78 135 100 148" fill="none" stroke="#ffffff" stroke-width="1.5" />
            
            <path d="M100 148 Q130 110 170 115 C145 125 122 135 100 148" fill="#52b788" />
            <path d="M100 148 Q130 110 170 115 C145 125 122 135 100 148" fill="none" stroke="#ffffff" stroke-width="1.5" />
            
            <path d="M100 148 Q60 80 50 50 C70 70 85 105 100 148" fill="#40916c" />
            <path d="M100 148 Q60 80 50 50 C70 70 85 105 100 148" fill="none" stroke="#ffffff" stroke-width="1.5" />

            <path d="M100 148 Q140 80 150 50 C130 70 115 105 100 148" fill="#40916c" />
            <path d="M100 148 Q140 80 150 50 C130 70 115 105 100 148" fill="none" stroke="#ffffff" stroke-width="1.5" />

            <path d="M100 148 Q100 70 95 30 C105 70 100 110 100 148" fill="#74c69d" />
            <path d="M100 148 Q100 70 95 30 C105 70 100 110 100 148" fill="none" stroke="#ffffff" stroke-width="1.5" />
        </svg>`
    },
    {
        id: 'tulsi',
        name: 'Tulsi',
        scientificName: 'Ocimum tenuiflorum',
        category: 'medicinal',
        categoryLabel: 'Medicinal / Outdoor',
        difficulty: 'Medium',
        sunlight: 'Full direct sunlight (at least 4-6 hours)',
        water: 'Water daily (keep soil moist, not waterlogged)',
        soil: 'Fertile, well-draining loamy soil',
        fertilizer: 'Organic compost or liquid seaweed every 4 weeks',
        problems: 'Leaf spots, black stems (overwatering/frost)',
        solutions: 'Protect from cold weather; check that soil drains fast.',
        description: 'Also known as Holy Basil. Highly revered in India for its spiritual importance and extensive therapeutic, stress-relieving properties.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M68 150 L132 150 L142 192 L58 192 Z" fill="#b45309" />
            <ellipse cx="100" cy="150" rx="36" ry="8" fill="#92400e" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="31" ry="5" fill="#451a03" />
            <!-- Stems & Leaves -->
            <!-- Main Stem -->
            <line x1="100" y1="148" x2="100" y2="60" stroke="#78350f" stroke-width="3" />
            <line x1="100" y1="110" x2="70" y2="90" stroke="#78350f" stroke-width="2.5" />
            <line x1="100" y1="100" x2="130" y2="80" stroke="#78350f" stroke-width="2.5" />
            <!-- Left Leaves -->
            <ellipse cx="65" cy="85" rx="14" ry="8" fill="#1b4332" transform="rotate(-20 65 85)" />
            <ellipse cx="50" cy="95" rx="10" ry="6" fill="#2d6a4f" transform="rotate(-15 50 95)" />
            <!-- Right Leaves -->
            <ellipse cx="135" cy="75" rx="14" ry="8" fill="#1b4332" transform="rotate(20 135 75)" />
            <ellipse cx="150" cy="85" rx="10" ry="6" fill="#2d6a4f" transform="rotate(15 150 85)" />
            <!-- Top Leaves -->
            <ellipse cx="100" cy="55" rx="12" ry="8" fill="#40916c" />
            <ellipse cx="90" cy="70" rx="10" ry="6" fill="#2d6a4f" transform="rotate(-10 90 70)" />
            <ellipse cx="110" cy="70" rx="10" ry="6" fill="#2d6a4f" transform="rotate(10 110 70)" />
            <!-- Flower Spikes (Purple buds) -->
            <circle cx="100" cy="40" r="3" fill="#c084fc" />
            <circle cx="100" cy="32" r="2.5" fill="#a855f7" />
            <circle cx="100" cy="26" r="2" fill="#7e22ce" />
        </svg>`
    },
    {
        id: 'rose',
        name: 'Rose',
        scientificName: 'Rosa',
        category: 'flowering',
        categoryLabel: 'Flowering / Outdoor',
        difficulty: 'Hard',
        sunlight: 'Full direct sun (6+ hours daily)',
        water: 'Water deeply 1-2 times a week (keep dry leaves)',
        soil: 'Rich, moist clayey loam soil',
        fertilizer: 'High-nitrogen & phosphorus food monthly',
        problems: 'White powder on leaves (powdery mildew), aphids',
        solutions: 'Sprinkle with neem oil spray; avoid overhead watering.',
        description: 'The ultimate symbol of beauty and romance. Requires careful pruning, pest control, and proper sun to reward you with fragrant blossoms.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M70 150 L130 150 L138 185 L62 185 Z" fill="#475569" />
            <ellipse cx="100" cy="150" rx="32" ry="7" fill="#334155" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="28" ry="4" fill="#3b2314" />
            <!-- thorny stem -->
            <path d="M100 148 C95 100 102 70 100 50" fill="none" stroke="#166534" stroke-width="3" />
            <!-- thorns -->
            <path d="M97 110 L92 108 L97 105 Z" fill="#166534" />
            <path d="M102 90 L107 88 L102 85 Z" fill="#166534" />
            <!-- leaves -->
            <path d="M98 120 C85 110 75 115 70 125 C82 125 94 122 98 120 Z" fill="#14532d" />
            <path d="M102 100 C115 90 125 95 130 105 C118 105 106 102 102 100 Z" fill="#14532d" />
            <!-- Flower Bud -->
            <ellipse cx="100" cy="50" rx="14" ry="10" fill="#dc2626" />
            <path d="M86 50 C86 35 100 30 100 30 C100 30 114 35 114 50 C114 62 100 64 100 64 C100 64 86 62 86 50 Z" fill="#e11d48" />
            <path d="M92 48 C92 40 100 36 100 36 C100 36 108 40 108 48 C108 55 100 58 100 58 C100 58 92 55 92 48 Z" fill="#f43f5e" />
            <!-- Sepal (green base) -->
            <path d="M88 56 L100 68 L112 56 L100 50 Z" fill="#166534" />
        </svg>`
    },
    {
        id: 'lavender',
        name: 'Lavender',
        scientificName: 'Lavandula',
        category: 'flowering',
        categoryLabel: 'Flowering / Medicinal',
        difficulty: 'Medium',
        sunlight: 'Full direct sun',
        water: 'Water very sparingly (drought-tolerant)',
        soil: 'Extremely well-drained alkaline gravelly soil',
        fertilizer: 'Avoid fertilizer (thrives in poor soil)',
        problems: 'Rotting base, yellow stems (high humidity/wet soil)',
        solutions: 'Provide excellent ventilation; mix pebbles into soil.',
        description: 'Famous for its therapeutic scent and purple spikes. It brings a sensory experience to gardens while acting as a natural pest deterrent.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M70 150 L130 150 L138 185 L62 185 Z" fill="#84cc16" />
            <ellipse cx="100" cy="150" rx="32" ry="7" fill="#65a30d" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="28" ry="4" fill="#402008" />
            <!-- Lavender Stems -->
            <path d="M95 148 L80 60" stroke="#4d7c0f" stroke-width="2" />
            <path d="M100 148 L100 50" stroke="#4d7c0f" stroke-width="2" />
            <path d="M105 148 L120 60" stroke="#4d7c0f" stroke-width="2" />
            <!-- Lavender flower buds (Stem 1 - Left) -->
            <ellipse cx="80" cy="50" rx="5" ry="3" fill="#a855f7" />
            <ellipse cx="78" cy="45" rx="5" ry="3" fill="#a855f7" />
            <ellipse cx="82" cy="40" rx="4" ry="2.5" fill="#c084fc" />
            <ellipse cx="80" cy="35" rx="3" fill="#d8b4fe" />
            <!-- Lavender flower buds (Stem 2 - Center) -->
            <ellipse cx="100" cy="40" rx="6" ry="3.5" fill="#8b5cf6" />
            <ellipse cx="98" cy="33" rx="5.5" ry="3" fill="#a855f7" />
            <ellipse cx="102" cy="26" rx="4" fill="#c084fc" />
            <ellipse cx="100" cy="20" rx="3" fill="#e9d5ff" />
            <!-- Lavender flower buds (Stem 3 - Right) -->
            <ellipse cx="120" cy="50" rx="5" ry="3" fill="#a855f7" />
            <ellipse cx="122" cy="45" rx="5" ry="3" fill="#a855f7" />
            <ellipse cx="118" cy="40" rx="4" ry="2.5" fill="#c084fc" />
            <ellipse cx="120" cy="35" rx="3" fill="#d8b4fe" />
        </svg>`
    },
    {
        id: 'cactus',
        name: 'Desert Cactus',
        scientificName: 'Cactaceae',
        category: 'succulents',
        categoryLabel: 'Succulent / Outdoor',
        difficulty: 'Easy',
        sunlight: 'Bright direct intense sun',
        water: 'Water once a month (drought-proof)',
        soil: 'Sandy, porous gritty desert mix',
        fertilizer: 'Feed once during active growing season (summer)',
        problems: 'Shriveling (extremely dry), soft spots (excessive moisture)',
        solutions: 'Repot immediately into dry sand; adjust schedule.',
        description: 'Adapted to dry desert conditions, it stores water in its thick ribbed stems. Offers striking aesthetics and beautiful rare flowers.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M70 150 L130 150 L140 190 L60 190 Z" fill="#ea580c" />
            <ellipse cx="100" cy="150" rx="35" ry="8" fill="#c2410c" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="31" ry="5" fill="#3a1e05" />
            <!-- Main Cactus Body -->
            <path d="M82 148 C82 90 85 70 100 70 C115 70 118 90 118 148 Z" fill="#15803d" />
            <path d="M90 148 C90 90 92 80 100 80 C108 80 110 90 110 148 Z" fill="#166534" />
            <!-- Left Arm -->
            <path d="M85 110 Q70 110 70 95 C70 85 80 85 80 95 L80 115" fill="none" stroke="#15803d" stroke-width="12" stroke-linecap="round" />
            <!-- Right Arm -->
            <path d="M115 100 Q130 100 130 85 C130 75 120 75 120 85 L120 105" fill="none" stroke="#15803d" stroke-width="12" stroke-linecap="round" />
            <!-- Flower on Top -->
            <ellipse cx="100" cy="70" rx="6" ry="6" fill="#ec4899" />
            <circle cx="100" cy="70" r="2" fill="#facc15" />
            <!-- Spines (small stars) -->
            <path d="M96 95 L104 95" stroke="#fef08a" stroke-width="1.5" />
            <path d="M100 91 L100 99" stroke="#fef08a" stroke-width="1.5" />
            
            <path d="M106 120 L114 120" stroke="#fef08a" stroke-width="1.5" />
            <path d="M110 116 L110 124" stroke="#fef08a" stroke-width="1.5" />

            <path d="M71 90 L79 90" stroke="#fef08a" stroke-width="1.5" />
            <path d="M75 86 L75 94" stroke="#fef08a" stroke-width="1.5" />
        </svg>`
    },
    {
        id: 'succulent',
        name: 'Echeveria Rosette',
        scientificName: 'Echeveria elegans',
        category: 'succulents',
        categoryLabel: 'Succulent / Indoor',
        difficulty: 'Easy',
        sunlight: 'Bright filtered sunlight',
        water: 'Water when soil is completely dry (2-3 weeks)',
        soil: 'Porous succulent soil with perlite',
        fertilizer: 'Needs minimal fertilizer (diluted monthly in summer)',
        problems: 'Leggy growth, dropping leaves (lack of sunlight)',
        solutions: 'Place in a brighter window; cut leggy heads to propagate.',
        description: 'Features plump leaves arranged in a gorgeous rose-like geometry. Foliage colors shift beautifully when exposed to sunlight.',
        svg: `<svg viewBox="0 0 200 200" class="plant-svg">
            <rect width="200" height="200" fill="transparent"/>
            <!-- Pot -->
            <path d="M72 150 L128 150 L136 182 L64 182 Z" fill="#d8b4fe" />
            <ellipse cx="100" cy="150" rx="30" ry="6" fill="#c084fc" />
            <!-- Dirt -->
            <ellipse cx="100" cy="148" rx="27" ry="4" fill="#3c1e02" />
            <!-- Rosette leaves radiating -->
            <!-- Outer Ring -->
            <path d="M100 148 C85 145 65 145 60 135 C70 128 85 138 100 148 Z" fill="#5c8770" />
            <path d="M100 148 C115 145 135 145 140 135 C130 128 115 138 100 148 Z" fill="#5c8770" />
            <path d="M100 148 C95 130 95 110 100 100 C105 110 105 130 100 148 Z" fill="#5c8770" />
            <!-- Mid Ring -->
            <path d="M100 148 C90 140 75 135 70 125 C80 120 90 130 100 148 Z" fill="#6d9b83" />
            <path d="M100 148 C110 140 125 135 130 125 C120 120 110 130 100 148 Z" fill="#6d9b83" />
            <!-- Inner Center Rosette -->
            <circle cx="100" cy="125" r="14" fill="#8ebb9e" />
            <circle cx="100" cy="125" r="8" fill="#a4cbb3" />
            <circle cx="100" cy="125" r="4" fill="#b9dbca" />
            <!-- Leaf Pink Tips -->
            <circle cx="60" cy="135" r="1.5" fill="#f43f5e" />
            <circle cx="140" cy="135" r="1.5" fill="#f43f5e" />
            <circle cx="70" cy="125" r="1.5" fill="#f43f5e" />
            <circle cx="130" cy="125" r="1.5" fill="#f43f5e" />
            <circle cx="100" cy="100" r="1.5" fill="#f43f5e" />
        </svg>`
    }
];

// --- Gallery Operations ---
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const searchInput = document.getElementById('gallerySearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const plantModal = document.getElementById('plantModal');
    
    // Check if gallery container is in page before running
    if (!galleryGrid) return;

    // Renders the plants into the grid
    function renderGallery(plants) {
        galleryGrid.innerHTML = '';
        if (plants.length === 0) {
            galleryGrid.innerHTML = `
                <div class="no-results glass-card" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                    <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">No plants match your search. 🏜️</p>
                    <p style="font-size: 0.95rem;">Try browsing categories or refining your keyword!</p>
                </div>
            `;
            return;
        }

        plants.forEach((plant, index) => {
            const card = document.createElement('div');
            card.className = 'glass-card hover-lift reveal fade-in';
            card.style.animationDelay = `${index * 0.05}s`;
            card.style.cursor = 'pointer';
            
            card.innerHTML = `
                <div class="gallery-image-box" style="background: var(--accent-soft); border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; height: 180px;">
                    ${plant.svg}
                </div>
                <div class="gallery-info">
                    <span style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--accent-hover); display: block; margin-bottom: 6px;">${plant.categoryLabel}</span>
                    <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--primary-color); margin-bottom: 4px;">${plant.name}</h3>
                    <p style="font-style: italic; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">${plant.scientificName}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 12px; font-size: 0.9rem;">
                        <span>Level: <strong>${plant.difficulty}</strong></span>
                        <span class="btn-link" style="color: var(--primary-light); font-weight: 600;">View Details &rarr;</span>
                    </div>
                </div>
            `;

            // Click listener for details modal
            card.addEventListener('click', () => {
                openPlantModal(plant);
            });

            galleryGrid.appendChild(card);
        });
    }

    // Modal Display Functions
    function openPlantModal(plant) {
        if (!plantModal) return;

        const modalBody = document.getElementById('modalBody');
        if (!modalBody) return;

        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1.2fr 1.8fr; gap: 30px; align-items: start;">
                <div style="background: var(--accent-soft); border-radius: 16px; padding: 20px; display: flex; align-items: center; justify-content: center;">
                    ${plant.svg}
                </div>
                <div>
                    <span style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; color: var(--accent-hover); display: block; margin-bottom: 6px;">${plant.categoryLabel}</span>
                    <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--primary-color); margin-bottom: 4px; line-height: 1.2;">${plant.name}</h2>
                    <p style="font-style: italic; font-size: 1rem; color: var(--text-muted); margin-bottom: 16px;">${plant.scientificName}</p>
                    <p style="margin-bottom: 20px; font-size: 0.95rem;">${plant.description}</p>
                    
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <span style="background: var(--border-color); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">Difficulty: <strong>${plant.difficulty}</strong></span>
                    </div>
                </div>
            </div>

            <div style="margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; border-top: 1px solid var(--border-color); padding-top: 24px;">
                <div class="care-detail-item">
                    <h4 style="color: var(--primary-light); font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">☀️ Sunlight</h4>
                    <p style="font-size: 0.9rem;">${plant.sunlight}</p>
                </div>
                <div class="care-detail-item">
                    <h4 style="color: var(--primary-light); font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">💧 Watering</h4>
                    <p style="font-size: 0.9rem;">${plant.water}</p>
                </div>
                <div class="care-detail-item">
                    <h4 style="color: var(--primary-light); font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">🌱 Soil</h4>
                    <p style="font-size: 0.9rem;">${plant.soil}</p>
                </div>
                <div class="care-detail-item">
                    <h4 style="color: var(--primary-light); font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">🧪 Fertilizer</h4>
                    <p style="font-size: 0.9rem;">${plant.fertilizer}</p>
                </div>
            </div>

            <div style="margin-top: 24px; padding: 16px; border-radius: 12px; background: rgba(230, 57, 70, 0.08); border: 1px solid rgba(230, 57, 70, 0.15);">
                <h4 style="color: var(--danger-color); font-weight: 600; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">⚠️ Common Problem: ${plant.problems}</h4>
                <p style="font-size: 0.9rem; color: var(--text-main);"><strong>Solution:</strong> ${plant.solutions}</p>
            </div>
            
            <div style="margin-top: 24px; text-align: right;">
                <button id="addFromModalBtn" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.9rem;">
                    Add to My Garden 🌿
                </button>
            </div>
        `;

        plantModal.classList.add('active');

        // Modal Add To Garden Event
        const addFromModalBtn = document.getElementById('addFromModalBtn');
        if (addFromModalBtn) {
            addFromModalBtn.addEventListener('click', () => {
                // Dispatch event or invoke global storage add
                if (window.addPlantToGardenByName) {
                    const added = window.addPlantToGardenByName(plant.name, plant.water);
                    if (added) {
                        plantModal.classList.remove('active');
                    }
                } else {
                    // Fallback local storage add
                    addPlantToLocalStorageMemory(plant);
                    plantModal.classList.remove('active');
                }
            });
        }
    }

    // Modal Close
    const modalCloseBtn = plantModal ? plantModal.querySelector('.modal-close') : null;
    if (modalCloseBtn && plantModal) {
        modalCloseBtn.addEventListener('click', () => {
            plantModal.classList.remove('active');
        });
        
        // Close on clicking outside container
        plantModal.addEventListener('click', (e) => {
            if (e.target === plantModal) {
                plantModal.classList.remove('active');
            }
        });
    }

    // Local Storage Helper if garden.js is not loaded
    function addPlantToLocalStorageMemory(plant) {
        let gardenList = JSON.parse(localStorage.getItem('garden_plants')) || [];
        
        // Compute next watering days based on text matching numbers
        let days = 7;
        const matches = plant.water.match(/\b\d+\b/);
        if (matches) {
            days = parseInt(matches[0]);
        }
        if (plant.water.toLowerCase().includes('week')) {
            days = days * 7;
        }

        const newPlant = {
            id: 'garden-' + Date.now(),
            name: plant.name,
            type: plant.name,
            waterInterval: days,
            lastWatered: new Date().toISOString(),
            dateAdded: new Date().toISOString(),
            isFavorite: false
        };

        gardenList.push(newPlant);
        localStorage.setItem('garden_plants', JSON.stringify(gardenList));
        showToast(`${plant.name} added to My Garden! 🏡`, 'success');
    }

    // --- Search & Filters Logic ---
    let currentCategory = 'all';
    let searchQuery = '';

    function filterAndRender() {
        let filtered = galleryPlants;

        if (currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === currentCategory || p.categoryLabel.toLowerCase().includes(currentCategory));
        }

        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.scientificName.toLowerCase().includes(query) ||
                p.categoryLabel.toLowerCase().includes(query)
            );
        }

        renderGallery(filtered);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndRender();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
            filterButtons.forEach(b => b.classList.add('btn-secondary'));
            
            btn.classList.remove('btn-secondary');
            btn.classList.add('active', 'btn-primary');

            currentCategory = btn.getAttribute('data-filter');
            filterAndRender();
        });
    });

    // Initial render
    renderGallery(galleryPlants);
});
