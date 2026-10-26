import type { Plant } from '../../types'

export const part3: Plant[] = [
  {
    id: 'pelargonium-hortorum',
    commonName: 'Zonal geranium',
    danishName: 'Pelargonie',
    latinName: 'Pelargonium × hortorum',
    family: 'Geraniaceae',
    category: 'both',
    wikipediaTitle: 'Pelargonium × hortorum',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['round', 'lobed'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['mixed', 'red', 'pink', 'white', 'orange', 'purple'],
      habit: ['bushy', 'upright'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The classic summer pelargonium with rounded, softly hairy, aromatic leaves often marked with a darker horseshoe zone, and rounded heads of red, pink, white, salmon or purple flowers from May until frost. In Denmark it is the quintessential windowsill and balcony plant, and old plants are often overwintered and grown on for years.',
      watering:
        'Let the soil dry out somewhat between waterings; water when the top 3 cm are dry, which in a sunny summer spot can mean every 2-4 days in a small pot. Overwatering causes yellow leaves and stem rot. In winter rest, water only every 3-4 weeks, just enough to stop the stems shrivelling.',
      light:
        'Full sun is best, at least 5-6 hours a day, for compact growth and masses of flowers. Indoors give it the sunniest south- or west-facing windowsill. In shade it grows leggy with few flowers.',
      soil:
        'Ordinary good-quality potting compost with some added sand or perlite for drainage. It is not fussy but hates heavy, waterlogged soil.',
      temperature:
        'Grows best at 15-25 C. It tolerates cool nights down to about 5 C and brief near-freezing temperatures, but frost kills it, so it must come inside before the first autumn frosts. Overwinter at 5-12 C.',
      humidity: 'Prefers dry air; damp, still conditions encourage grey mould and rust.',
      feeding:
        'Feed weekly to every two weeks from May to September with a balanced or high-potassium liquid fertilizer; it flowers heavily and is hungry. No feeding during the winter rest.',
      repotting:
        'Repot in March-April when you restart overwintered plants, trimming the roots and giving fresh compost in the same or a slightly larger pot. It flowers best when the roots are a little restricted.',
      pruning:
        'Deadhead constantly, snapping off spent flower heads at the base of the stalk. Cut overwintered plants back by half to two thirds in early spring, and pinch young plants to make them bushy.',
      propagation:
        'Stem cuttings 8-10 cm long root very easily in late summer or spring: remove lower leaves and flower buds, let the cut end dry for a few hours, then push into gritty compost and keep barely moist without covering.',
      problems:
        'Whitefly rise in clouds from the leaf undersides when disturbed, and aphids cluster on buds. Grey mould (botrytis) rots flowers and leaves in damp, crowded conditions; pelargonium rust shows as brown pustules on leaf undersides. Blackleg, a black rot at the stem base, kills cuttings and overwatered plants. Red-edged leaves usually mean cold nights; yellow lower leaves mean too much water.',
      denmarkTips:
        'Pelargoniums are planted out on balconies and in window boxes after mid-May when night frost is past, and flower until October. The Danish tradition is to save them: before the first frost in October, lift or bring in the pots, cut the plants back hard, remove most leaves and overwinter them cool (5-12 C), bright and almost dry in a frost-free stairwell, cold bedroom, garage window or greenhouse, watering only every 3-4 weeks. Alternatively take cuttings in August-September and overwinter those on a cool windowsill, which takes much less space. In the dark November-February period do not try to keep them growing in a warm room; they get leggy and pale. Restart them in March with fresh compost, a hard prune and a sunny window, and harden off outside in May.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 24, note: 'Water when top 3 cm are dry; almost dry during winter rest' },
      { type: 'fertilize', intervalDays: 10, winterIntervalDays: 0, note: 'Balanced or high-potassium feed May-September' },
      { type: 'deadhead', intervalDays: 4, winterIntervalDays: 0, note: 'Snap off spent flower heads at the base' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Cut overwintered plants back by half to two thirds' },
      { type: 'repot', intervalDays: 365, months: [3, 4], note: 'Fresh compost when restarting after winter' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Out on balcony after mid-May once frost risk is over' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'In before first frost; cut back and keep cool and dry' },
    ],
    tags: ['flowering', 'balcony', 'beginner', 'sun-lover', 'overwinter'],
  },
  {
    id: 'crassula-ovata',
    commonName: 'Jade plant',
    danishName: 'Pengetræ',
    latinName: 'Crassula ovata',
    family: 'Crassulaceae',
    category: 'indoor',
    wikipediaTitle: 'Crassula ovata',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['succulent', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['none', 'white', 'pink'],
      habit: ['shrub', 'tree'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A slow-growing succulent that develops a thick, branching trunk and plump, glossy, oval leaves, looking like a miniature tree. Old plants may produce clusters of small starry white-pink flowers in winter if given plenty of sun. It is very long-lived and often passed down through families.',
      watering:
        'Water thoroughly only when the soil is completely dry, roughly every 2-3 weeks in summer and every 4-6 weeks in winter. Wrinkled, soft leaves mean it is thirsty; yellow, dropping, mushy leaves mean too much water. Never let it stand in water.',
      light:
        'At least 4-6 hours of direct sun keeps it compact with thick stems and red-edged leaves. A south or west windowsill is ideal. In poor light it grows thin, floppy stems that cannot hold the heavy leaves.',
      soil:
        'A gritty cactus and succulent mix, or potting compost with half coarse sand, perlite or fine gravel. Use a heavy terracotta pot to balance the top-heavy plant and help the soil dry.',
      temperature:
        'Happy at 15-27 C. It tolerates down to about 5 C when kept dry and cool nights of 10-13 C in winter encourage flowering, but frost will turn the leaves to mush.',
      humidity: 'Dry air suits it perfectly; never mist.',
      feeding:
        'Feed every 4-6 weeks from April to September with a half-strength cactus or balanced fertilizer. No feeding in winter.',
      repotting:
        'Repot every 2-3 years in spring into a heavy pot only slightly larger. Let the plant dry for a week after repotting before watering to allow damaged roots to heal.',
      pruning:
        'Prune in spring to shape the little tree, cutting just above a pair of leaves or a branch junction; new shoots form below the cut. Remove any thin, leggy winter growth.',
      propagation:
        'Stem cuttings or single leaves root readily: let the cut surface dry for a few days, then lay or stand them on barely moist gritty compost. Roots appear within a few weeks.',
      problems:
        'Mealybugs nest as white cottony clumps in the leaf axils and under leaves; dab them with a cotton bud dipped in alcohol. Scale insects appear as brown bumps on stems. Soft black stems and dropping leaves indicate root rot from overwatering, the number one killer. Powdery mildew can cause corky white patches on leaves in damp, cool conditions. Shrivelled leaves simply mean drought.',
      denmarkTips:
        'Through the dark months from November to February a jade plant practically stops growing, so put it in the sunniest window and water only once every 4-6 weeks; a cool windowsill at 10-15 C during this time is fine and even encourages flowering. Keep it off the radiator shelf, not because of dry air but because warmth plus darkness makes it stretch. From June to late August it loves a sunny, rain-sheltered spot on the balcony, where the sun thickens the trunk and reddens the leaf edges; acclimatise it to full sun gradually and keep it out of prolonged rain. Bring it in during September before nights drop below 5-8 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 35, note: 'Water only when soil is completely dry; empty saucer' },
      { type: 'fertilize', intervalDays: 35, winterIntervalDays: 0, note: 'Half-strength cactus fertilizer' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Dust the leaves and check axils for mealybugs' },
      { type: 'repot', intervalDays: 1095, months: [4, 5], note: 'Heavy pot, gritty mix; wait a week before watering' },
      { type: 'plant-out', intervalDays: 365, months: [6], note: 'Sunny, rain-sheltered balcony spot; acclimatise gradually' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Inside before nights fall below 8 C' },
    ],
    tags: ['succulent', 'beginner', 'drought-tolerant', 'balcony', 'long-lived'],
  },
  {
    id: 'echinocactus-grusonii',
    commonName: 'Golden barrel cactus',
    danishName: 'Svigermors stol',
    latinName: 'Echinocactus grusonii',
    family: 'Cactaceae',
    category: 'indoor',
    wikipediaTitle: 'Echinocactus grusonii',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['succulent', 'needle'],
      leafPattern: ['plain'],
      flowerColor: ['none', 'yellow'],
      habit: ['rosette', 'upright'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A spherical, deeply ribbed cactus armed with stiff golden-yellow spines, nicknamed "mother-in-law\'s cushion" in several languages. It grows slowly, perhaps 2-4 cm a year, and only very old plants over 40 cm wide produce their yellow flowers. It needs little more than sun and neglect.',
      watering:
        'In spring and summer water thoroughly about every 2-3 weeks, once the soil has been completely dry for several days. From October to March keep it almost totally dry, watering at most once a month if the room is warm and not at all if it is kept cool. Water the soil, not the body, and never leave water standing in the saucer.',
      light:
        'Full sun all day: the south-facing windowsill or a conservatory. With too little light the new growth at the top becomes narrow and pale and the spines weak. Turn it occasionally so it grows evenly.',
      soil:
        'A very gritty mineral mix: cactus compost with at least half coarse sand, pumice or fine gravel. A clay pot that dries quickly is ideal.',
      temperature:
        'Loves summer heat up to 35 C. In winter it prefers a cool, dry rest at 8-12 C; it tolerates down to about 5 C when bone dry but is damaged by frost or by cold combined with damp.',
      humidity: 'Needs dry air and good ventilation; never mist.',
      feeding:
        'Feed 2-3 times during the growing season, from May to August, with a low-nitrogen cactus fertilizer at half strength. No feeding in autumn or winter.',
      repotting:
        'Repot every 3-4 years in spring into a pot a few centimetres wider. Hold the plant with folded newspaper or thick gloves, and do not water for a week afterwards.',
      propagation:
        'Grown from seed, sown on gritty compost at 20-25 C in spring. It does not produce offsets, so cuttings are not an option.',
      problems:
        'Mealybugs hide between the ribs and around the spine bases as white woolly spots, and root mealybugs attack below soil level; spider mites cause brown, scarred patches near the top. Soft, brown, sunken areas at the base indicate rot from overwatering or cold wet soil and are usually fatal. Corky brown patches on old, lower ribs are normal ageing. A narrow, elongated top means too little light.',
      denmarkTips:
        'The dark, damp Danish winter is the real risk for this desert plant. From October to March give it a strict dry rest: no water at all if it stands in a cool room at 8-15 C, and at most a sip once a month if it has to stay in a warm living room. Keep it on the brightest south-facing windowsill, as a cold windowsill is no problem as long as the plant is dry. Resume watering gradually in April when the sun returns. It can spend June to August outside in full sun on a sheltered balcony where rain cannot soak the pot, which gives stronger spines and a chance of flowering on large plants; bring it in by mid-September before cold damp nights begin.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 40, note: 'Only when fully dry; almost none Oct-Mar if kept cool' },
      { type: 'fertilize', intervalDays: 42, winterIntervalDays: 0, note: 'Half-strength low-nitrogen cactus feed, May-August' },
      { type: 'check-pests', intervalDays: 28, note: 'Inspect between ribs for mealybug wool' },
      { type: 'repot', intervalDays: 1095, months: [4, 5], note: 'Gritty mineral mix; use gloves or newspaper' },
      { type: 'plant-out', intervalDays: 365, months: [6], note: 'Full sun outside, sheltered from rain' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Inside by mid-September before damp cold nights' },
    ],
    tags: ['cactus', 'succulent', 'beginner', 'pet-safe', 'sun-lover'],
  },
  {
    id: 'alocasia-amazonica',
    commonName: 'Alocasia Polly',
    danishName: 'Alocasia',
    latinName: 'Alocasia × amazonica',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Alocasia × amazonica',
    difficulty: 'demanding',
    toxicity: 'toxic',
    light: ['bright-indirect'],
    traits: {
      leafShape: ['heart', 'lobed'],
      leafPattern: ['variegated', 'plain'],
      flowerColor: ['none'],
      habit: ['upright', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A hybrid aroid with dramatic arrow-shaped, glossy dark green leaves with wavy edges and bold silvery-white veins, purple on the underside. It grows from a tuber and can go dormant and lose its leaves if conditions turn cold or dark. It is beautiful but demanding about warmth, humidity and even moisture.',
      watering:
        'Keep the soil lightly and evenly moist in the growing season, watering when the top 2-3 cm are dry, about every 5-7 days. It must not sit in water, as the tuber rots easily. In winter, water much less, every 10-14 days or only enough to keep the soil barely moist, especially if it drops leaves and goes dormant.',
      light:
        'Bright, indirect light close to an east or west window, or a metre back from a south window. Direct sun scorches the leaves; too little light makes them small and the plant may shed them.',
      soil:
        'A loose, chunky, well-aerated mix of peat-free compost, orchid bark and perlite in roughly equal parts. Dense soil suffocates the roots.',
      temperature:
        'Wants 18-28 C and is unhappy below 15 C; leaves yellow and drop below 12 C and the plant may go dormant. Keep it away from all cold draughts and off cold windowsills.',
      humidity:
        'Needs high humidity, 60 % or more. Use a humidifier or pebble tray and group it with other plants; a bright bathroom is ideal. Dry air causes crispy brown leaf edges and invites spider mites.',
      feeding:
        'Feed every 2 weeks from April to September with a half-strength balanced liquid fertilizer. Do not feed in winter or during dormancy.',
      repotting:
        'Repot every spring into a pot one size larger, or divide clumps. Small offset tubers found in the soil can be potted up separately.',
      pruning: 'Cut off yellowed or damaged leaves at the base. No other pruning is needed.',
      propagation:
        'Divide the clump or pot up the small tubers and offsets at repotting time in spring. Keep them warm and humid until new leaves appear.',
      problems:
        'Spider mites are the most common pest, causing fine yellow stippling and webbing on leaf undersides in dry rooms; mealybugs and thrips also occur. Yellow leaves with soft, smelly soil mean root or tuber rot from overwatering. Brown, crisp leaf edges mean dry air. Sudden loss of all leaves in winter is usually dormancy, not death; keep the tuber barely moist and warm and it should resprout in spring.',
      denmarkTips:
        'This plant finds the Danish winter hard: short dark days, dry radiator air and cold windows combine to make it drop leaves. From November to February give it a grow light for 10-12 hours a day, a humidifier, and a warm spot that is not in a draught or on a cold sill; even then it may go partly dormant, so cut watering back hard and wait for spring. Check the leaf undersides weekly for spider mites, which thrive in heated rooms. It should stay indoors all year in Denmark, as summer nights are too cool and windy for it.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; barely moist if dormant' },
      { type: 'mist', intervalDays: 2, note: 'Mist or top up humidifier/pebble tray; aim for 60 %+' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'check-pests', intervalDays: 7, note: 'Check leaf undersides for spider mites and thrips' },
      { type: 'wipe-leaves', intervalDays: 21, note: 'Damp cloth both sides of the leaves' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Chunky aroid mix; separate offsets' },
    ],
    tags: ['statement-plant', 'humidity-lover', 'tropical', 'patterned-foliage'],
  },
  {
    id: 'dieffenbachia-seguine',
    commonName: 'Dumb cane',
    danishName: 'Dieffenbachia',
    latinName: 'Dieffenbachia seguine',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Dieffenbachia seguine',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['medium', 'bright-indirect', 'low'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['variegated', 'spotted'],
      flowerColor: ['none'],
      habit: ['upright', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A lush, fast-growing foliage plant with large oval leaves splashed and speckled in cream, white and pale green on thick cane-like stems. It tolerates lower light than most variegated plants and is easy to grow, but all parts contain calcium oxalate crystals that cause painful swelling of the mouth if chewed, hence the name.',
      watering:
        'Water when the top 3 cm of soil are dry, about every 5-7 days in summer and every 10-14 days in winter. It likes even moisture but rots in waterlogged soil; drooping leaves that recover after watering mean it got too dry.',
      light:
        'Medium to bright indirect light gives the best variegation; it also tolerates a north window or a spot a few metres from a window, though growth slows and leaves become greener. Direct sun scorches the leaves.',
      soil: 'A good general-purpose potting compost with some perlite for drainage.',
      temperature:
        'Prefers 18-25 C and should be kept above 15 C. Cold draughts and temperatures under about 12 C cause yellowing and leaf drop.',
      humidity:
        'Enjoys moderate to high humidity; brown leaf edges show the air is too dry. A pebble tray or occasional misting helps during the heating season.',
      feeding:
        'Feed every 2-3 weeks from April to September with a half-strength balanced liquid fertilizer. Monthly or not at all in winter.',
      repotting:
        'Repot every 1-2 years in spring into a pot one size larger. Tall, bare-stemmed plants can be cut back and repotted at the same time.',
      pruning:
        'When the cane grows tall and loses its lower leaves, cut it back to 10-15 cm above the soil in spring; it will resprout from the stump. Wear gloves, as the sap irritates skin and eyes.',
      propagation:
        'Root the cut-off top in water or moist compost, and cut the remaining cane into 10 cm sections laid horizontally on moist compost; each will sprout. Keep warm.',
      problems:
        'Spider mites cause speckled, dull leaves with webbing in dry air; mealybugs and scale cluster on stems and leaf bases. Yellow lower leaves are normal ageing but many at once mean overwatering or cold; soft, smelly stem bases mean rot. Brown crispy edges mean low humidity or fertilizer salt build-up.',
      denmarkTips:
        'A good choice for Danish living rooms because it tolerates the low winter light better than most variegated plants, but from November to February move it closer to the window and water much less, since cold wet soil in the dark is what kills it. Keep it well away from cold draughts when airing and do not let it stand on a cold windowsill overnight; it prefers an interior position near, not on, the window. Dry radiator air browns the leaf edges, so wipe the leaves and use a pebble tray in winter. Keep it well out of reach of toddlers and pets; it stays indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'wipe-leaves', intervalDays: 28, note: 'Damp cloth; wear gloves; check undersides for spider mites' },
      { type: 'rotate', intervalDays: 14, note: 'Quarter turn for even growth' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'One size up; cut back leggy canes at the same time' },
    ],
    tags: ['low-light', 'beginner', 'variegated', 'air-purifying'],
  },
]
