import type { Plant } from '../../types'

export const part2: Plant[] = [
  {
    id: 'howea-forsteriana',
    commonName: 'Kentia palm',
    danishName: 'Kentiapalme',
    latinName: 'Howea forsteriana',
    family: 'Arecaceae',
    category: 'indoor',
    wikipediaTitle: 'Howea forsteriana',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'medium', 'low'],
    traits: {
      leafShape: ['compound', 'fern-frond'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['upright', 'clumping'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'An elegant, slow-growing palm from Lord Howe Island with dark green, gently arching fronds on slender stems. It has been grown in European drawing rooms since Victorian times because it tolerates lower light, cooler rooms and dry air better than almost any other palm. It is expensive to buy because it takes years to reach a saleable size, but it can live for decades.',
      watering:
        'Water when the top 3-5 cm of soil feel dry, about every 7-10 days in summer and every 2-3 weeks in winter. Water thoroughly so the whole root ball is wetted, then let it drain; never leave it in a wet saucer. It is more tolerant of drying out than of sitting wet.',
      light:
        'Bright, indirect light is ideal, but it copes well with medium light and even a fairly dim corner, where it simply grows more slowly. Avoid direct midday sun, which bleaches the fronds yellow.',
      soil:
        'A free-draining peat-free compost with a third coarse sand or perlite. Use a deep, heavy pot; the roots grow downwards and a tall plant needs ballast.',
      temperature:
        'Comfortable at 16-24 C and tolerates cooler rooms down to about 10 C, lower than most palms. Protect it from frost and from icy draughts, which brown the frond tips.',
      humidity:
        'Average room humidity is fine; it is far less demanding than the areca palm. Very dry air may brown the tips slightly, so an occasional misting is welcome but not essential.',
      feeding:
        'Feed once a month from April to September with a half-strength balanced liquid fertilizer. Too much fertilizer scorches the roots and browns the fronds. Do not feed in winter.',
      repotting:
        'Repot only every 3-4 years in spring, when roots push out of the drainage holes; it dislikes root disturbance. In between, replace the top few centimetres of compost each spring.',
      pruning:
        'Cut off completely brown or yellow fronds at the base. Do not cut the growing tip at the centre of the crown, as the palm cannot regrow from below it.',
      propagation:
        'Grown from seed, which takes months to germinate and years to make a plant; it is not practical at home. Pots often contain several seedlings that can be separated, but this risks damaging the roots.',
      problems:
        'Spider mites cause a dull, speckled look and fine webbing on frond undersides in dry rooms. Scale insects form brown bumps along the leaf ribs and mealybugs gather at the frond bases. Brown tips are usually dry air, salt build-up or over-feeding; yellow fronds all over point to too much sun or soggy roots.',
      denmarkTips:
        'The kentia is one of the best large plants for a Danish winter because it accepts the gloom of November-February and cooler rooms; keep it a couple of metres from a window and water only every 2-3 weeks. Stand it away from the direct blast of a radiator and wipe the fronds occasionally to remove dust and spot spider mites early. Keep fronds from touching cold glass and shield it from draughts when airing. From late June to August it can stand in a shaded, sheltered spot on a balcony or terrace, but bring it in before nights fall below 10 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 9, winterIntervalDays: 18, note: 'Water when top 5 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Only when roots fill the pot; deep heavy pot' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Wipe fronds with a damp cloth; check for scale and mites' },
      { type: 'mist', intervalDays: 7, note: 'Light misting in dry winter rooms' },
    ],
    tags: ['palm', 'pet-safe', 'low-light-tolerant', 'statement-plant', 'beginner'],
  },
  {
    id: 'beaucarnea-recurvata',
    commonName: 'Ponytail palm',
    danishName: 'Elefantfod',
    latinName: 'Beaucarnea recurvata',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Beaucarnea recurvata',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['grass-like', 'strap'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['upright', 'tree'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Not a palm at all but a desert succulent with a swollen, elephant-foot base that stores water and a fountain of long, thin, curling leaves on top. It grows slowly and asks for very little, making it almost impossible to kill by neglect. Indoors it never flowers, but a well-grown plant can live for decades and reach over a metre.',
      watering:
        'Water deeply, then let the soil dry out completely before watering again: about every 2-3 weeks in summer and every 4-6 weeks in winter. The bulbous base stores water, so a soft, wrinkled base means it is thirsty while a mushy one means rot. When in doubt, wait another week.',
      light:
        'It wants the brightest spot you can give it, right by a south or west window, and enjoys several hours of direct sun. In medium light it survives but grows very slowly and the leaves become limp.',
      soil:
        'A gritty cactus and succulent mix, or potting compost with half coarse sand, grit or perlite. Use a terracotta pot that is not much wider than the base, with good drainage.',
      temperature:
        'Happy at 15-28 C. It tolerates down to about 7 C if kept dry and copes with hot sunny windows. Protect it from frost and from wet soil combined with cold.',
      humidity:
        'Dry indoor air is ideal; it needs no misting. High humidity combined with wet soil encourages rot.',
      feeding:
        'Feed only 2-3 times during the summer with a half-strength cactus or balanced fertilizer. It needs very little; no feeding at all in autumn and winter.',
      repotting:
        'Repot every 3-4 years in spring into a pot only slightly wider than the base; a snug pot keeps it compact. Plant the base at the same depth as before and do not bury the swollen trunk.',
      pruning:
        'None needed. Pull off dead brown leaves from the base of the crown; trimming brown leaf tips with scissors is purely cosmetic.',
      propagation:
        'Offsets that sometimes form at the base can be cut off in spring and rooted in dry, gritty mix. Seed is possible but very slow.',
      problems:
        'Spider mites cause dull, speckled leaves in dry rooms; scale insects and mealybugs hide in the dense leaf crown. Brown leaf tips are normal and worse with hard water or over-feeding. A soft, spongy or discoloured base means stem rot from overwatering, which is usually fatal; yellowing lower leaves with wet soil is an early warning.',
      denmarkTips:
        'This plant shrugs off the dry radiator air of a Danish winter better than almost anything else, but the lack of light from November to February means it should sit in the brightest window and be watered only every 4-6 weeks, or less. Do not let the pot get cold and wet at the same time; a cold windowsill is fine if the soil is dry. From June to August it loves a sunny, sheltered balcony or terrace; acclimatise it to full sun over a week, keep it out of prolonged rain and bring it in before September nights drop below 8-10 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 35, note: 'Water only when soil is completely dry; empty saucer' },
      { type: 'fertilize', intervalDays: 56, winterIntervalDays: 0, note: 'Half-strength cactus fertilizer, 2-3 times a summer' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Gritty mix, snug pot; do not bury the swollen base' },
      { type: 'rotate', intervalDays: 21, note: 'Turn the pot so the crown grows evenly' },
      { type: 'check-pests', intervalDays: 28, note: 'Check deep in the leaf crown for scale and mealybugs' },
    ],
    tags: ['succulent', 'pet-safe', 'drought-tolerant', 'beginner', 'balcony'],
  },
  {
    id: 'pachira-aquatica',
    commonName: 'Money tree',
    danishName: 'Pachira',
    latinName: 'Pachira aquatica',
    family: 'Malvaceae',
    category: 'indoor',
    wikipediaTitle: 'Pachira aquatica',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['palmate', 'compound'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['tree', 'upright'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A tropical tree from Central and South American wetlands, usually sold with several young trunks braided together and topped with glossy, hand-shaped leaves of five to seven leaflets. In feng shui it is said to bring good fortune, hence the name. It is tough and forgiving, grows quickly in good light, and never flowers in the home.',
      watering:
        'Water thoroughly when the top 3-5 cm of soil are dry, about every 7-10 days in summer and every 2-3 weeks in winter. Despite its wetland origins, in a pot the trunk rots if kept constantly wet; let it drain completely and empty the saucer. Yellowing leaves usually mean too much water, not too little.',
      light:
        'Bright, indirect light near an east or west window keeps growth compact and the leaves large. It tolerates medium light with slower, leggier growth. Acclimatise it slowly to any direct sun, which can scorch the leaves.',
      soil:
        'A well-draining peat-free compost with a third perlite or coarse sand. Good drainage is essential; use a pot with holes.',
      temperature:
        'Prefers 18-26 C. It tolerates down to about 12 C briefly but drops leaves in cold draughts and below 10 C. Keep it away from doors and cold windows in winter.',
      humidity:
        'Likes moderate to high humidity but adapts to normal rooms. Brown leaf edges and leaf drop may follow very dry air; mist occasionally or use a pebble tray.',
      feeding:
        'Feed every 3-4 weeks from April to September with a half-strength balanced liquid fertilizer. Do not feed in autumn and winter.',
      repotting:
        'Repot every 2 years in spring into a pot one size larger. Braided trunks can be kept braided; loosen any ties that are cutting into the bark.',
      pruning:
        'Prune in spring to control height and encourage branching, cutting just above a leaf node. Remove yellow or dead leaves as they appear.',
      propagation:
        'Stem cuttings 10-15 cm long with a couple of nodes root in water or moist compost in 4-6 weeks in warm conditions. Seed is rarely available.',
      problems:
        'Spider mites, mealybugs, scale and aphids can all attack; look for speckling, white fluff on stems, brown bumps and sticky residue. Sudden leaf drop is usually a reaction to cold draughts, moving the plant or overwatering. Soft, dark patches on the trunk mean rot from wet soil; a wrinkled trunk means it has dried out too long.',
      denmarkTips:
        'In the dark months of November-February it stops growing and may drop a few leaves; keep it close to a bright window, water only every 2-3 weeks and skip feeding. Dry radiator air is tolerated but mist occasionally and keep it out of the hot updraft above a radiator. Avoid draughts from windows opened for airing, as sudden cold triggers leaf drop. From late June to August it can stand in a sheltered, lightly shaded spot on a balcony, acclimatised gradually, and should come back in before nights drop below 12 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 9, winterIntervalDays: 18, note: 'Water when top 5 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 24, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'One size up, well-draining mix; loosen tight braid ties' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Damp cloth on glossy leaflets; check for scale and mites' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Shorten leggy shoots above a node to shape the crown' },
      { type: 'rotate', intervalDays: 14, note: 'Quarter turn for an even crown' },
    ],
    tags: ['pet-safe', 'beginner', 'tree', 'statement-plant'],
  },
  {
    id: 'ficus-microcarpa',
    commonName: 'Ginseng ficus',
    danishName: 'Ginsengfigen',
    latinName: 'Ficus microcarpa',
    family: 'Moraceae',
    category: 'indoor',
    wikipediaTitle: 'Ficus microcarpa',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['tree', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The Chinese banyan, almost always sold as a bonsai-style plant with thick, swollen, ginseng-like roots exposed above the soil and a dense crown of small, glossy dark green leaves. It is one of the easiest bonsai subjects for beginners and tolerates indoor conditions far better than outdoor bonsai species. The milky sap irritates skin and is mildly toxic to pets.',
      watering:
        'Water thoroughly when the top 2-3 cm of soil are dry, about every 5-7 days in summer and every 10-14 days in winter. Bonsai pots are shallow and dry out quickly, so check often; never let the root ball dry out completely, but do not leave it sitting in water either.',
      light:
        'Bright light is essential: right by an east, west or south window, with some direct sun tolerated after acclimatisation. In insufficient light it drops leaves steadily and the crown thins out.',
      soil:
        'A free-draining bonsai mix, or peat-free compost with half coarse grit, akadama or perlite. Shallow bonsai pots must have good drainage holes.',
      temperature:
        'Prefers 18-27 C. It tolerates down to about 12 C but drops leaves in cold draughts and sudden temperature changes. Keep it away from cold glass and doors in winter.',
      humidity:
        'Appreciates 50 % humidity or more but adapts to normal rooms. Misting the crown a few times a week or standing it on a pebble tray reduces leaf drop in winter.',
      feeding:
        'Feed every 2 weeks from April to September with a half-strength balanced liquid or bonsai fertilizer. Reduce to monthly or stop in winter.',
      repotting:
        'Repot every 2-3 years in spring, trimming up to a third of the roots if keeping it in the same bonsai pot. Keep the thick ginseng roots exposed above the soil surface.',
      pruning:
        'Trim new shoots back to 2-3 leaves once they have grown 6-8 leaves to keep the crown dense; prune hard in spring if needed. Wear gloves as the white sap irritates skin. Aerial roots can be left or trimmed.',
      propagation:
        'Stem cuttings 10 cm long root in water or moist compost in 3-4 weeks in warmth. New plants will not develop the swollen ginseng roots for many years.',
      problems:
        'Scale insects are the most common pest, seen as small brown bumps on stems and leaf undersides with sticky honeydew; mealybugs and spider mites also occur. Leaf drop after moving or in winter is normal and recovers if conditions are stable. Yellow leaves with soggy soil mean root rot; brown dry patches mean sunburn after sudden exposure.',
      denmarkTips:
        'Leaf drop in November-February is the most common complaint; counter it by giving the brightest window possible, a small grow light for 8-10 hours a day if you have one, and steady conditions with no cold draughts. Keep it well away from radiators, which dry the shallow pot in a day, and mist the crown regularly. Do not let the pot touch icy glass at night. From late June to August it thrives outdoors on a sunny, sheltered balcony, which thickens the trunk and leaves; bring it in before nights fall below 12 C and inspect for scale first.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 11, note: 'Check daily in shallow pots; water when top 2-3 cm are dry' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, note: 'Half-strength balanced or bonsai fertilizer' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Trim roots by a third; keep ginseng roots exposed' },
      { type: 'prune', intervalDays: 42, note: 'Trim shoots back to 2-3 leaves; wear gloves for the sap' },
      { type: 'mist', intervalDays: 3, note: 'Mist the crown, especially in winter' },
      { type: 'check-pests', intervalDays: 14, note: 'Look for scale bumps and sticky honeydew on stems' },
    ],
    tags: ['bonsai', 'tree', 'bright-light', 'balcony'],
  },
  {
    id: 'asplenium-nidus',
    commonName: "Bird's nest fern",
    danishName: 'Redebregne',
    latinName: 'Asplenium nidus',
    family: 'Aspleniaceae',
    category: 'indoor',
    wikipediaTitle: 'Asplenium nidus',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect', 'low'],
    traits: {
      leafShape: ['strap', 'fern-frond'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['rosette', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'An epiphytic fern with broad, glossy, apple-green fronds that unfurl from a fuzzy brown central rosette like a bird\'s nest. Unlike feathery ferns it has whole, undivided leaves, often with wavy or crinkled edges in cultivars like Crispy Wave. It is one of the more tolerant ferns for the home and is safe for pets.',
      watering:
        'Keep the soil consistently moist but not waterlogged, watering when the top 2 cm are dry, about every 5-7 days in summer and every 7-10 days in winter. Water around the edge of the pot and never into the central rosette, where standing water causes the crown to rot. Use rainwater or softened water if your tap water is very hard.',
      light:
        'Medium to bright indirect light, such as a north or east window or a metre or two from a brighter one. Direct sun scorches the fronds and turns them pale; it tolerates fairly low light but grows slowly.',
      soil:
        'An airy, moisture-retaining mix: peat-free compost with a third orchid bark and some perlite. As an epiphyte it dislikes dense, heavy soil.',
      temperature:
        'Prefers 18-26 C and should not drop below about 13 C. Cold draughts brown the frond edges, so keep it away from doors and cold windows.',
      humidity:
        'Wants 50-60 % humidity or more. Brown, crispy frond edges mean the air is too dry; a bathroom or kitchen window, a pebble tray or a humidifier all help.',
      feeding:
        'Feed once a month from April to September with a quarter- to half-strength balanced liquid fertilizer; ferns burn easily. Do not feed in winter.',
      repotting:
        'Repot every 2-3 years in spring when roots fill the pot, into a pot one size larger. Keep the crown at the same level, never buried.',
      pruning:
        'Cut off old brown or damaged fronds at the base. Fronds that have been bent or creased will not recover and can be removed.',
      propagation:
        'Only by spores, which is slow and fiddly at home. Unlike many ferns it does not form clumps that can be divided.',
      problems:
        'Scale insects appear as brown bumps along the frond undersides and midribs; mealybugs hide in the central crown. Brown crispy edges mean dry air or hard water; pale, bleached fronds mean too much sun. A soft, blackened centre is crown rot from water sitting in the rosette.',
      denmarkTips:
        'The combination of dark November-February days and dry radiator air is the main challenge; place it in a bright north or east window, well away from radiators, and keep humidity up with a pebble tray or humidifier. A bathroom with a window is ideal. Water a little less in winter but never let it dry out, and keep the fronds off cold glass. It should not go outside in Denmark, as cool nights, wind and direct sun all damage the fronds.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 9, note: 'Keep moist; water around the edge, never into the crown' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Quarter- to half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Airy bark/compost mix; keep crown at soil level' },
      { type: 'mist', intervalDays: 2, note: 'Mist around the plant or top up pebble tray; aim for 50-60 %' },
      { type: 'check-pests', intervalDays: 14, note: 'Check frond undersides for scale and the crown for mealybugs' },
    ],
    tags: ['fern', 'pet-safe', 'humidity-lover', 'low-light-tolerant', 'bathroom'],
  },
]
