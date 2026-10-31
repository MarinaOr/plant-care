import type { Plant } from '../../types'

export const part3: Plant[] = [
  {
    id: 'pelargonium-graveolens',
    commonName: 'Rose-scented geranium',
    danishName: 'Duftpelargonie',
    latinName: 'Pelargonium graveolens',
    family: 'Geraniaceae',
    category: 'both',
    wikipediaTitle: 'Pelargonium graveolens',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['lobed', 'palmate'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['pink', 'purple'],
      habit: ['bushy', 'shrub'],
      size: 'medium',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A South African sub-shrub, 50-100 cm tall, grown not for its small pink flowers but for its deeply cut, velvety leaves that smell powerfully of rose when touched. The leaves flavour sugar, cakes and cordials and are the source of geranium oil. Scented pelargoniums (lemon \'Citronella\', \'Attar of Roses\', peppermint P. tomentosum) are a classic Danish windowsill tradition and are grown in exactly the same way. Tender, so it summers outside and winters indoors.',
      watering:
        'Water when the top few centimetres of compost are dry, about every 3-4 days in a sunny summer and every 10-14 days in winter indoors. Pelargoniums store water in their stems and forgive drought, but sit a pot in water and the stems blacken and rot. Water the compost, not the leaves.',
      light:
        'Full sun outdoors in summer and the sunniest window indoors; the scent and compact growth depend on strong light. In a dull winter window it stretches and drops lower leaves but recovers in spring.',
      soil:
        'Free-draining multipurpose compost with 20-30 % perlite or grit. A 20-25 cm pot is enough; it flowers and scents better slightly root-bound. Repot in spring every 2 years.',
      temperature:
        'Frost tender; killed below about -2 °C and damaged by prolonged cold wet weather. Outdoors in Denmark from late May to late September, then indoors or in a frost-free greenhouse at 5-15 °C; a cool bright room is far better than a warm one for winter. It tolerates a warm living room if the window is bright.',
      feeding:
        'A balanced or high-potash liquid feed every 2 weeks from May to August; nothing from October to February. Over-feeding with nitrogen gives big, soft leaves with less scent.',
      pruning:
        'Pinch shoot tips through spring and summer to keep it bushy. In March, before growth starts, cut back hard by half to two thirds, removing leggy winter growth, and it will resprout from the woody stems. Remove yellowed lower leaves whenever you see them.',
      propagation:
        'Softwood or semi-ripe cuttings 8-10 cm long, taken in August-September or March, root in a few weeks in gritty compost without a plastic cover (they rot under humidity). Taking cuttings in late summer is the traditional insurance in case the parent fails over winter.',
      problems:
        'Grey mould (Botrytis) on leaves and stems in cool damp conditions, especially indoors in winter with poor air flow. Blackleg rots stems from the base in wet compost. Whitefly and aphids on soft growth, and spider mite in a hot dry window. Rust (brown rings under leaves) occasionally. Pelargonium leaves are mildly toxic to cats and dogs if chewed, though people use them as flavouring.',
      denmarkTips:
        'Keep it in a pot year-round. Move it outdoors to a sunny sheltered balcony or terrace after mid-May and enjoy the scent whenever you brush past. Pick leaves from June to September for sugar, syrups and jellies and to dry for pot-pourri. Take cuttings in August as spares. Bring it in before the first frost in late September or early October, cut back lightly, pick off dead leaves and keep it cool and bright, watering only every couple of weeks. Cut hard in March, repot if needed, and start feeding when new growth appears in April. Check regularly for whitefly indoors and for grey mould on crowded stems.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 12, note: 'When compost is dry on top; never soggy' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Balanced or high-potash feed' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Pot outside after mid-May in full sun' },
      { type: 'harvest', intervalDays: 14, months: [6, 7, 8, 9], note: 'Leaves for sugar, syrup, pot-pourri' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Cut back hard before growth starts' },
      { type: 'bring-inside', intervalDays: 365, months: [9, 10], note: 'Cool bright place before first frost' },
    ],
    tags: ['aromatic', 'fragrant', 'windowsill', 'balcony', 'edible'],
  },
  {
    id: 'cymbopogon-citratus',
    commonName: 'Lemongrass',
    danishName: 'Citrongræs',
    latinName: 'Cymbopogon citratus',
    family: 'Poaceae',
    category: 'both',
    wikipediaTitle: 'Cymbopogon citratus',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['grass-like', 'strap'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['grass', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A tropical clump-forming grass, 60-120 cm tall, whose swollen, pale stem bases are the lemongrass of Thai and Vietnamese cooking, while the long sharp-edged leaves make a fragrant tea. It never flowers in Denmark and is grown as a tender pot plant that spends summer on a warm terrace and winter on a bright windowsill. Easiest started from a supermarket stalk rooted in water.',
      watering:
        'Thirsty in summer heat: keep the compost moist and water every 1-2 days on a sunny terrace, since it is a grass with a lot of leaf. In winter indoors it rests and needs water only every 7-10 days, when the top of the compost is dry. Cold wet compost in winter rots the base.',
      light:
        'Full sun and warmth outdoors in summer. Indoors the sunniest window available; it tolerates a dull winter but grows little and browns at the tips.',
      soil:
        'Rich, moisture-retentive, free-draining multipurpose compost. Use a large pot (30 cm or more) because the clump fills it fast. Repot or divide in May each year.',
      temperature:
        'Frost tender; growth stops below 10 °C and the plant is killed by frost. Outdoors in Denmark only from June to early September, in the warmest sheltered spot or a greenhouse. Indoors keep it above 10 °C in winter, ideally 15-20 °C, where it will sit nearly dormant and partly brown until spring.',
      feeding:
        'A nitrogen-rich liquid feed every 2 weeks from May to August, since a grass grows fast and leafy. Nothing in winter.',
      pruning:
        'Trim brown leaf tips and remove dead outer leaves any time. In March-April cut the whole clump back to 10-15 cm to clear winter-scruffy foliage before new growth. Wear gloves, the leaf edges cut skin.',
      propagation:
        'Stand fresh supermarket stalks with the base intact in a glass of water on a warm windowsill; roots appear in 1-3 weeks and they can be potted up. Divide established clumps in May, pulling the rooted stems apart. Seed sown at 20-25 °C indoors in March is slow but possible.',
      problems:
        'Root and base rot from cold, wet compost in winter, with stems turning brown and mushy. Spider mite on indoor plants in a warm dry winter, showing as fine mottling and webbing. Aphids occasionally. Brown leaf tips are normal in low winter light or from dry air and are trimmed off. Rust spots can appear on older leaves.',
      denmarkTips:
        'Root supermarket stalks in water in March-April and pot them up, or divide last year\'s clump in May. Move pots outside to the hottest spot, against a south wall or into the greenhouse, from June when nights are reliably above 10 °C. Harvest stalks from July to September by cutting or snapping them off at the base when they are pencil-thick, and dry or freeze leaves for tea. Bring the pot indoors in early September before cool nights; cut back the leaves by half to save space and keep it on a bright windowsill, watering sparingly. Expect it to look tired by February; it bounces back once it is outside again in June.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 8, note: 'Moist in summer; just damp in winter' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Nitrogen-rich liquid feed' },
      { type: 'plant-out', intervalDays: 365, months: [6], note: 'Outside only when nights stay above 10 °C' },
      { type: 'harvest', intervalDays: 14, months: [7, 8, 9], note: 'Cut pencil-thick stalks at the base' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Before cool nights; cut leaves back by half' },
      { type: 'divide', intervalDays: 365, months: [5], note: 'Split the clump into fresh compost' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'windowsill', 'greenhouse'],
  },
  {
    id: 'allium-ursinum',
    commonName: 'Wild garlic',
    danishName: 'Ramsløg',
    latinName: 'Allium ursinum',
    family: 'Amaryllidaceae',
    category: 'outdoor',
    wikipediaTitle: 'Allium ursinum',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['partial-shade', 'shade'],
    traits: {
      leafShape: ['lance', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['bulb', 'groundcover', 'clumping'],
      size: 'small',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A native Danish woodland bulb that carpets damp beech and ash woods in April-May with broad, glossy, garlic-scented leaves and starry white flowers, then disappears completely by midsummer. Leaves, flowers and buds are eaten raw in pesto, butter and salads, and foraging for ramsløg in spring is a national pastime. In the garden it is a hardy, spreading groundcover for shade that looks after itself. Like all alliums it is mildly toxic to dogs and cats.',
      watering:
        'Needs moist soil during its short growing season from March to June; water in a dry spring, especially in the first year. It is dormant underground from July and needs no water then, but the soil should not bake dry. Pots must not dry out completely even in dormancy.',
      light:
        'Partial to full shade, under deciduous trees and shrubs that leaf out after it has done most of its growing. It tolerates spring sun but scorches and fades early in a hot sunny spot.',
      soil:
        'Moist, humus-rich, slightly acidic to neutral soil like a woodland floor, with leaf mould and compost added. Tolerates heavy soil. In pots use a deep container of leafy compost in shade.',
      temperature:
        'Fully hardy, native to Denmark, untroubled by any winter. Leaves emerge in February-March and can take frost; the plant goes dormant in June-July as the woodland canopy closes.',
      feeding:
        'None needed beyond a mulch of leaf mould or compost in autumn, which mimics the woodland floor it comes from.',
      pruning:
        'None. Let the leaves die down naturally in June to feed the bulbs. Remove seed heads in June if you want to limit its spread, since it seeds freely as well as spreading by bulb offsets.',
      propagation:
        'Plant bulbs in September-October 5-10 cm deep and apart, or move clumps in the green in April-May from a friend\'s garden (never dig up wild plants). Seed sown fresh in June-July needs a winter chill and germinates the following spring; flowering takes 3-4 years from seed. Established colonies spread steadily on their own.',
      problems:
        'Very few. Slugs and snails graze young leaves in a wet March. Onion rust and white rot are rare but possible in the garden. The main issue is spread: it can colonise a whole shady border. When foraging, never confuse the leaves with lily of the valley or autumn crocus, which are poisonous and grow in the same places; ramsløg always smells strongly of garlic when crushed.',
      denmarkTips:
        'Plant bulbs in September-October or divided clumps in April under shrubs, hedges or trees where little else grows, and leave them alone. Harvest from March to May, picking one or two leaves from each plant rather than stripping clumps, and pick the buds and flowers in May; stop once the flowers fade and the leaves yellow. Make pesto, ramsløgssmør and salt and freeze them; the leaves do not dry well. Mulch with leaves in autumn. Mark the spot, because the plants vanish completely from July until the following spring. Keep dogs from eating it in quantity.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, months: [3, 4, 5, 6], note: 'Keep moist in a dry spring' },
      { type: 'fertilize', intervalDays: 365, winterIntervalDays: 0, months: [10], note: 'Leaf mould or compost mulch' },
      { type: 'harvest', intervalDays: 7, months: [3, 4, 5], note: 'A leaf or two per plant; buds and flowers in May' },
      { type: 'plant-out', intervalDays: 365, months: [9, 10], note: 'Plant bulbs 5-10 cm deep in shade' },
      { type: 'divide', intervalDays: 1095, months: [4, 5], note: 'Move clumps in the green' },
      { type: 'check-pests', intervalDays: 14, months: [3, 4], note: 'Slugs on young leaves' },
    ],
    tags: ['herb', 'edible', 'native', 'shade', 'pollinator-friendly'],
  },
  {
    id: 'foeniculum-vulgare',
    commonName: 'Fennel',
    danishName: 'Fennikel',
    latinName: 'Foeniculum vulgare',
    family: 'Apiaceae',
    category: 'outdoor',
    wikipediaTitle: 'Fennel',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['compound', 'needle'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['yellow'],
      habit: ['upright', 'clumping'],
      size: 'large',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A tall hardy perennial herb, 1.5-2 m in flower, with soft, feathery, anise-scented foliage and flat yellow umbels in July-September that swarm with hoverflies, wasps and bees. The leaves go with fish, the green seeds are chewed or used in bread and sausage, and the hollow stems flavour grilled fish. Bronze fennel (\'Purpureum\') is a handsome border plant grown the same way. Florence fennel, the bulb vegetable, is a different annual form.',
      watering:
        'Drought tolerant once the deep taproot is down; water only in long dry spells. Young plants and sowings need regular watering the first summer. Needs nothing in winter.',
      light:
        'Full sun in an open position for sturdy stems and a good seed crop. It flops in shade.',
      soil:
        'Well-drained, moderately fertile soil, including sandy and chalky ground; it dislikes heavy wet clay and winter waterlogging. Give it room, at least 60 cm, at the back of a bed. Too deep-rooted for long-term pot growing.',
      temperature:
        'Hardy to about -20 °C and reliably perennial in Denmark in well-drained soil, though it may be lost in a heavy wet winter. It dies back after frost in November and reappears in April. Seed germinates outdoors from mid-April.',
      feeding:
        'Little. A dressing of compost in spring is ample; in rich soil it grows soft and floppy and needs staking.',
      pruning:
        'Cut back some stems in June to delay flowering and keep a supply of young leaves. Cut the seed heads in September before they shatter, since fennel self-seeds abundantly, and cut dead stems to the ground in late winter, leaving them over winter for insects and for the frosted look.',
      propagation:
        'Sow direct in April-May or September where it is to grow; germination takes 2-3 weeks. Self-sown seedlings are plentiful and easily moved while small. Divide established crowns in April with difficulty because of the taproot; replacing from seed is easier. Keep fennel and dill well apart to stop them cross-pollinating.',
      problems:
        'Aphids crowd the flower heads and young shoots. Slugs eat seedlings. Powdery mildew in a dry late summer. Crown rot in wet winters. Caterpillars of the swallowtail butterfly (rare in Denmark but spreading) feed on it and should be left alone. Flopping stems come from rich soil or wind; stake or cut back. Self-seeding can become a weed problem.',
      denmarkTips:
        'Sow direct in late April or plant a pot-grown plant in May at the back of a sunny bed, where it will stand for years. Harvest the leaves from May to September, pick the pollen and green seeds in August for the strongest anise flavour, and dry ripe seed in September for tea and bread. Cut back a few stems in June for fresh leaves. Deadhead most heads before they drop seed unless you want fennel everywhere. Leave the skeleton stems through winter for the birds and insects, and cut them down in March. Watch for aphids on the flowers in July.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'Only in long dry spells once established' },
      { type: 'fertilize', intervalDays: 365, winterIntervalDays: 0, months: [4], note: 'Light compost dressing' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9], note: 'Leaves; green seed and pollen in August' },
      { type: 'deadhead', intervalDays: 14, months: [8, 9], note: 'Cut seed heads before they shatter' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Cut dead stems to the ground' },
      { type: 'check-pests', intervalDays: 14, months: [6, 7, 8], note: 'Aphids on flower heads' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'pollinator-friendly', 'perennial'],
  },
  {
    id: 'jasminum-polyanthum',
    commonName: 'Pink jasmine',
    danishName: 'Jasmin',
    latinName: 'Jasminum polyanthum',
    family: 'Oleaceae',
    category: 'indoor',
    wikipediaTitle: 'Jasminum polyanthum',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['compound', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'pink'],
      habit: ['climbing', 'trailing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A vigorous evergreen twining climber from China sold in Danish shops in late winter trained around a hoop and smothered in pink buds that open to intensely fragrant white stars from January to April. A single plant can scent a whole room. It is not frost hardy, so in Denmark it lives in a pot: cool and bright indoors in winter, outside in summer. Getting it to flower again depends on a cool autumn.',
      watering:
        'Keep the compost evenly moist while in bud and flower, watering every 3-4 days when the surface dries; a plant that dries out drops its buds. In summer outdoors water every 2-3 days. In late autumn, during the cool rest, water more sparingly, every 7-10 days, but never let it dry out completely.',
      light:
        'Bright light with some direct sun; an east or west window indoors, or a lightly shaded to sunny spot on the balcony in summer. Too little light means long leafy shoots and no flowers.',
      soil:
        'Good multipurpose or soil-based compost with added grit for drainage. Repot in spring after flowering into a pot one size larger, but it flowers better slightly root-bound, so do not over-pot. Provide a hoop, trellis or wires for the twining stems.',
      temperature:
        'Tolerates a light frost to about -3 °C briefly but is not hardy in Denmark. Flower buds are initiated by 6-8 weeks of cool nights around 10 °C in September-October, so leave it outside as long as possible in autumn and keep it in a cool room (10-15 °C) rather than a warm living room while in bud. Warm dry rooms above 20 °C make buds drop and encourage spider mite.',
      humidity:
        'Likes moderate humidity; mist in a heated room in winter or stand the pot on a tray of wet pebbles. Dry radiator air shortens the flowering and invites spider mite.',
      feeding:
        'A high-potash (tomato) liquid feed every 2 weeks from April to September to build up flower buds. Stop feeding from October until flowering is over.',
      pruning:
        'Cut back hard immediately after flowering in April-May, removing up to two thirds of the growth and untangling the hoop, since next year\'s flowers come on new shoots. Pinch and tie in new growth through summer and trim wayward stems in August; do not prune after September or you remove the buds.',
      propagation:
        'Semi-ripe cuttings 8-10 cm long in July-August root easily in gritty compost with a plastic bag over the pot. Low stems can be layered by pinning them into a pot of compost.',
      problems:
        'Spider mite in warm dry rooms, showing as pale speckled leaves and fine webbing. Mealybugs in leaf joints and aphids on young shoots. Bud drop from dry compost, dry air or a sudden move from a cool shop to a hot room. Yellow leaves from overwatering or cold draughts. Powdery mildew occasionally. Few flowers means it never had a cool autumn.',
      denmarkTips:
        'Buy a budded plant in January-February and keep it in the coolest bright room you have, not next to the radiator, and it will flower for 6-8 weeks. Cut it back hard in May and move it outdoors to a sheltered, bright balcony or terrace for summer, feeding it every two weeks. Leave it outside into October, protected from frost, so the cool nights set the buds, then bring it to a cool bright windowsill (10-15 °C, a bedroom or hallway) in late October. Buds appear by Christmas and open in January. Check for spider mite as soon as the heating goes on and mist regularly.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 5, note: 'Evenly moist, especially in bud; never bone dry' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [4, 5, 6, 7, 8, 9], note: 'High-potash tomato feed' },
      { type: 'prune', intervalDays: 365, months: [4, 5], note: 'Cut back hard after flowering' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Outside to a bright sheltered balcony' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'After cool nights set buds; cool bright room' },
      { type: 'check-pests', intervalDays: 14, winterIntervalDays: 7, note: 'Spider mite in heated rooms, mealybug' },
    ],
    tags: ['fragrant', 'climber', 'houseplant', 'balcony', 'winter-flowering'],
  },
]
