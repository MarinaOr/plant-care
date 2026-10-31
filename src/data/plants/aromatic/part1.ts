import type { Plant } from '../../types'

export const part1: Plant[] = [
  {
    id: 'salvia-officinalis',
    commonName: 'Sage',
    danishName: 'Salvie',
    latinName: 'Salvia officinalis',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Salvia officinalis',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain', 'silver', 'variegated'],
      flowerColor: ['purple', 'blue'],
      habit: ['shrub', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A woody evergreen sub-shrub from the Mediterranean with soft, grey-green, velvety leaves and spikes of violet-blue flowers in June-July that bumblebees adore. Grows 40-70 cm tall and wide and keeps its leaves through a Danish winter, so it can be picked for duck, pork and brown butter all year. Purple-leaved \'Purpurascens\' and variegated \'Icterina\' are grown the same way.',
      watering:
        'Drought tolerant once established; water deeply but rarely, only when the soil is dry several centimetres down. Pots need water every 3-5 days in a hot summer, far less in cool weather. In winter outdoors it needs nothing, and a pot indoors only a little every 10-14 days. Wet feet are the quickest way to kill sage.',
      light:
        'Full sun, at least 6 hours a day, for the strongest flavour and a compact shape. Indoors it needs a south-facing windowsill; in a dim room it grows leggy and loses aroma.',
      soil:
        'Light, free-draining, rather poor soil with a neutral to alkaline pH. On Danish clay, plant on a raised ridge and mix in grit and gravel. In pots use a gritty compost with 30 % sand or perlite and a layer of crocks.',
      temperature:
        'Hardy to about -15 °C and reliably perennial in Denmark (zone 7-8), but cold wet winters and waterlogged soil kill more sage than frost does. Plant in a sunny, well-drained, sheltered spot; a pot can be moved against a south wall. Indoors it prefers a cool bright room at 10-18 °C in winter.',
      feeding:
        'Very little. A handful of compost or a light sprinkle of general fertilizer in April is enough in the ground; potted plants get a half-strength liquid feed every 4 weeks from May to August. Over-feeding gives soft, bland, disease-prone growth.',
      pruning:
        'Cut back by about a third in April when new growth appears, shaping the bush and removing winter-damaged shoots, but never cut into old bare wood, which rarely resprouts. Trim lightly again after flowering in July. Plants get woody and sparse after 4-5 years and are best replaced from cuttings.',
      propagation:
        'Semi-ripe cuttings 8-10 cm long in July-August root easily in gritty compost on a shady windowsill. Low branches can be layered by pinning them to the soil. Seed sown indoors in March germinates in 2-3 weeks but gives variable plants.',
      problems:
        'Root rot and grey, collapsing stems in heavy wet soil, especially over winter. Powdery mildew as white dusting on leaves in a humid late summer. Spittlebugs leave frothy blobs on stems in June but do little harm. Capsid bugs make ragged holes in young leaves. Aphids and spider mite on indoor plants in winter. Leaves yellow and sparse at the base means the plant is old and woody.',
      denmarkTips:
        'Buy a plant or root cuttings and plant out from mid-May in the sunniest, driest spot you have, or in a 25-30 cm terracotta pot on a south-facing balcony. Harvest leaves from May to October and pick lightly in winter; dry bunches in August for the Christmas duck. Prune in April, not autumn, so the old growth protects the crown through winter. In a wet autumn move pots under the eaves or into a cold greenhouse to keep the roots dry. Let it flower in June for the bumblebees, then trim. Take cuttings every few years as insurance against a bad winter.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 14, note: 'Only when soil is dry well down; hates wet feet' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Half-strength feed for pots only' },
      { type: 'prune', intervalDays: 365, months: [4], note: 'Cut back a third; not into old wood' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9, 10], note: 'Pick leaves; dry bunches in August' },
      { type: 'check-pests', intervalDays: 14, months: [6, 7, 8, 9], note: 'Mildew, capsid holes, rot at the base' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'balcony', 'pollinator-friendly'],
  },
  {
    id: 'origanum-vulgare',
    commonName: 'Oregano',
    danishName: 'Oregano',
    latinName: 'Origanum vulgare',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Oregano',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['pink', 'purple', 'white'],
      habit: ['bushy', 'groundcover', 'clumping'],
      size: 'small',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A hardy perennial herb, 30-60 cm tall, with small rounded aromatic leaves and clouds of pink-purple flowers from July to September that are one of the best nectar sources for bees and butterflies. Wild oregano (also called wild marjoram) grows naturally on dry chalky slopes in Denmark; Greek oregano (subsp. hirtum) has a much stronger pizza flavour but is slightly less hardy. Dies back in winter and resprouts in April.',
      watering:
        'Drought tolerant; water only in long dry spells once established. Pots need water every 3-4 days in summer when the top few centimetres are dry, and almost nothing in winter. Overwatering dilutes the flavour and rots the roots.',
      light:
        'Full sun gives the most aromatic leaves and the most flowers. Tolerates light shade but grows lanky. Indoors it needs a south-facing windowsill and still fades in the darkest months.',
      soil:
        'Poor, dry, free-draining soil, ideally neutral to chalky. Add grit on clay. In pots use gritty compost and a container of at least 20 cm.',
      temperature:
        'Fully hardy in Denmark to -20 °C or more; the native wild form grows on exposed hillsides. Greek oregano survives most winters in a well-drained sunny spot but may be lost in a very wet one, so keep a pot under cover as a backup. Indoors it is happy in any room but dislikes dark, warm, stuffy winter windows.',
      feeding:
        'Barely any. A light dressing of compost in spring in the ground; potted plants get a half-strength liquid feed once a month from May to August. Rich feeding gives lush but flavourless leaves.',
      pruning:
        'Cut stems back by half in June just before flowering for the most flavourful harvest and a bushier plant, or let it flower for the insects and cut back to 5 cm after flowering in September. Remove dead stems in late winter before new growth.',
      propagation:
        'Divide clumps in April or September every 3-4 years, which also rejuvenates woody plants. Softwood cuttings root in a few weeks in June. Seed sown indoors in March on the surface of compost germinates in 1-2 weeks; buy named plants of Greek oregano for the strongest flavour.',
      problems:
        'Root rot in wet winters, showing as black stems that fail to resprout in spring. Spider mite and aphids on windowsill plants. Leaf spot and rust occasionally in a humid summer. Spittlebugs in June are harmless. Plants that go sparse and woody in the middle after a few years need dividing.',
      denmarkTips:
        'Plant out in May in the hottest, driest corner, perhaps along a south-facing wall or in a gravel bed, or in a terracotta pot on the balcony. Harvest from June to September; cut and dry bunches in July just before flowering, when the oil content peaks, since dried oregano is actually stronger than fresh. Let half the plant flower for the butterflies. Cut back after flowering in September and leave the dead stems over winter for shelter, tidying in March. Divide every few years in April. Bring a small potted piece onto a bright windowsill in October for winter use, but accept it will be weak until March.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 14, note: 'Let it dry out between waterings' },
      { type: 'fertilize', intervalDays: 30, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Half-strength feed, pots only' },
      { type: 'harvest', intervalDays: 7, months: [6, 7, 8, 9], note: 'Cut and dry bunches in July before flowering' },
      { type: 'prune', intervalDays: 365, months: [9], note: 'Cut to 5 cm after flowering' },
      { type: 'divide', intervalDays: 1095, months: [4, 9], note: 'Every 3-4 years when it goes woody' },
      { type: 'check-pests', intervalDays: 14, months: [6, 7, 8], note: 'Aphids, spider mite indoors' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'pollinator-friendly', 'balcony'],
  },
  {
    id: 'origanum-majorana',
    commonName: 'Marjoram',
    danishName: 'Merian',
    latinName: 'Origanum majorana',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Marjoram',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['oval', 'round'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'pink'],
      habit: ['bushy', 'upright'],
      size: 'small',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'Sweet marjoram is a tender cousin of oregano with smaller, softer grey-green leaves and a sweeter, more delicate, floral flavour, the herb of Danish frikadeller, medister and pea soup. It grows 20-40 cm tall with tight knot-like flower buds that open to tiny white or pink flowers in July-August. In its Mediterranean home it is a perennial; in Denmark it is grown as an annual or overwintered in a pot indoors.',
      watering:
        'Keep the compost lightly moist, watering when the top few centimetres dry out, roughly every 2-3 days in a summer pot. It wilts in drought but also rots quickly in cold wet soil, so never let it stand in water. Indoors in winter water sparingly, about every 10 days.',
      light:
        'Full sun, in the warmest spot available; it needs more warmth and light than oregano. Indoors a south-facing windowsill, and even then growth is thin from November to February.',
      soil:
        'Light, free-draining, moderately fertile soil or multipurpose compost with added sand or perlite. Neutral to alkaline pH. A 15-20 cm pot suits one plant.',
      temperature:
        'Frost tender; damaged below about 5 °C and killed by the first autumn frost. Treat it as an annual in Denmark, planting out after mid-May, or pot it up and overwinter on a cool bright windowsill at 10-15 °C. It sulks in a cool wet Danish summer and grows best in a greenhouse, on a sunny balcony or against a south wall.',
      feeding:
        'A half-strength liquid feed every 3 weeks from June to August for potted plants; in the ground a little compost at planting is enough. Too much nitrogen gives weak, bland growth.',
      pruning:
        'Pinch out shoot tips regularly from June to keep the plant bushy and delay flowering. Cut the whole plant back by half when the flower knots form in July for the best-flavoured harvest, and it will regrow for a second cut in September.',
      propagation:
        'Sow seed indoors at 18-20 °C in March-April on the surface of moist compost; the seed is tiny and germinates in 1-2 weeks. Softwood cuttings root easily in June. Overwintered plants can be divided in spring.',
      problems:
        'Damping-off of seedlings in cold wet compost. Root rot and grey mould in a cool wet summer, showing as collapsed brown stems. Aphids on soft tips and spider mite on windowsill plants in winter. Slugs eat young plants outdoors. Leggy, pale growth means too little light or warmth.',
      denmarkTips:
        'Sow indoors in March-April or buy plants in May, and plant out only after mid-May once nights stay above 8 °C, ideally in a pot on a sunny sheltered balcony or in the greenhouse where it thrives beside tomatoes. Harvest from June to September; cut and dry a batch in July when the knots form, because dried merian keeps its flavour well and is what most Danish recipes call for. Bring a pot indoors in September before the first cold nights and keep it on a cool bright windowsill, or simply let it go and sow again next spring. Protect young plants from slugs in a wet May.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 10, note: 'Lightly moist; never standing in water' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, months: [6, 7, 8], note: 'Half-strength liquid feed' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'After mid-May, warm sheltered spot or greenhouse' },
      { type: 'harvest', intervalDays: 7, months: [6, 7, 8, 9], note: 'Cut back by half in July and dry' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Before the first cold nights' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Aphids, slugs, rot in wet weather' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'balcony', 'greenhouse'],
  },
  {
    id: 'melissa-officinalis',
    commonName: 'Lemon balm',
    danishName: 'Citronmelisse',
    latinName: 'Melissa officinalis',
    family: 'Lamiaceae',
    category: 'outdoor',
    wikipediaTitle: 'Lemon balm',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['heart', 'oval'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['white', 'yellow'],
      habit: ['bushy', 'clumping', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A robust hardy perennial, 50-80 cm tall, with crinkled heart-shaped leaves that release a strong fresh lemon scent when brushed, used for tea, desserts and summer drinks. Small creamy flowers in July-August are busy with bees (Melissa is Greek for honey bee). It self-seeds enthusiastically and forms a dense clump that comes back every April without any fuss. Golden \'Aurea\' and variegated forms are less vigorous.',
      watering:
        'Likes moist soil and wilts visibly in a dry spell, recovering as soon as it is watered. In the ground water weekly in prolonged drought; in a pot every 2-3 days in summer. Needs nothing while dormant in winter.',
      light:
        'Sun or partial shade; in Denmark full sun is fine, while afternoon shade keeps the leaves larger and greener and reduces watering. Golden forms scorch in full sun and want light shade.',
      soil:
        'Any reasonable garden soil, moist but not waterlogged. Tolerates clay and poor soil. In pots use multipurpose compost in a container of at least 25 cm.',
      temperature:
        'Fully hardy throughout Denmark, to -25 °C and below. Top growth is killed by frost in October-November and new shoots appear in April. No protection needed, in the ground or in a decent pot.',
      feeding:
        'A spring mulch of compost is plenty in the ground. Potted plants that are cut often get a liquid feed every 3-4 weeks from May to August.',
      pruning:
        'Cut back hard to 10 cm after flowering in late July or August, before seed sets, to prevent hundreds of seedlings and to get a fresh flush of lemony leaves for autumn. Cut dead stems to the ground in late autumn or March. Frequent harvesting keeps it compact.',
      propagation:
        'Divide clumps in April or September every 3-4 years; a piece with roots establishes immediately. Seed sown indoors in March or outdoors in May germinates easily, and self-sown seedlings can be moved in spring. Softwood cuttings root in water in June.',
      problems:
        'Very trouble-free. Powdery mildew whitens the leaves in a dry late summer, especially on crowded plants; cut back and water. Rust occasionally. Slugs nibble the first spring shoots. Aphids on tips. The main problem is its vigour: it seeds everywhere and the clump widens steadily.',
      denmarkTips:
        'Plant in April-May, in the ground if you have room or in a large pot to limit its spread. Harvest from May to October, picking the young top leaves which taste best; the scent is strongest just before flowering in late June, which is the time to cut and dry or freeze leaves for winter tea (dried leaves lose much of their lemon, so freezing in ice cubes works better). Cut back hard in August to stop self-seeding. Leave stems over winter for insects and clear them in March. Divide every few years in April.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 0, note: 'Keep moist; wilts in drought but recovers' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Liquid feed for pots; compost mulch in beds' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9, 10], note: 'Young top leaves; freeze before flowering' },
      { type: 'prune', intervalDays: 365, months: [8], note: 'Cut hard to 10 cm before seed sets' },
      { type: 'divide', intervalDays: 1095, months: [4, 9], note: 'Every 3-4 years' },
      { type: 'check-pests', intervalDays: 14, months: [7, 8, 9], note: 'Powdery mildew in dry spells' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'pollinator-friendly', 'tea'],
  },
  {
    id: 'mentha-piperita',
    commonName: 'Peppermint',
    danishName: 'Pebermynte',
    latinName: 'Mentha × piperita',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Peppermint',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade', 'bright-indirect'],
    traits: {
      leafShape: ['lance', 'oval'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['purple', 'pink'],
      habit: ['upright', 'groundcover', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A sterile hybrid of spearmint and watermint with dark green, often purple-tinged, pointed leaves on reddish stems and a sharp menthol flavour that makes it the mint for tea and chocolate. Grows 40-80 cm tall with lilac flower spikes in July-August. Like all mints it spreads by runners and is best confined to a pot. Hardy, dies back in winter and resprouts in April. Black peppermint and chocolate mint are selections grown identically.',
      watering:
        'Needs consistently moist soil and droops quickly in a dry pot; water every 1-2 days in summer and keep the compost damp but not sodden. A windowsill pot in winter needs water about weekly. It tolerates wetter conditions than most herbs but not a saucer of standing water for days.',
      light:
        'Sun or partial shade outdoors; a half-shaded spot gives bigger, softer leaves and less watering. Indoors give the brightest window you have, since in low winter light stems stretch and the menthol flavour weakens.',
      soil:
        'Rich, moist, humus-rich soil or multipurpose compost. In a pot of at least 25-30 cm, or an old bucket sunk in the bed with the rim above soil level to stop the runners escaping.',
      temperature:
        'Fully hardy in Denmark; roots survive -20 °C in the ground and in a reasonable pot. Top growth blackens at the first frost and regrows in April. Indoors it grows in a cool room at 12-20 °C and resents hot dry air near radiators.',
      feeding:
        'Liquid feed potted peppermint every 2-3 weeks from May to August, because frequent cutting and fast growth exhaust the compost. A compost mulch in spring is enough in the ground.',
      pruning:
        'Harvest constantly by cutting the top third of stems, which keeps the plant bushy and delays flowering. Cut the whole clump to 5 cm in July after the first flowers for a fresh, leafy second crop. Cut dead stems down in November or March.',
      propagation:
        'Peppermint is sterile and does not come true from seed, so divide clumps or pull up rooted runners in April or September; any root piece with a bud grows. Stem cuttings root in a glass of water in about a week. Repot and divide potted plants every spring as they fill the pot with roots.',
      problems:
        'Mint rust appears as orange pustules under the leaves and distorted pale shoots in early summer; cut everything to the ground and burn or bin it. Powdery mildew in dry crowded conditions. Verticillium wilt turns leaves yellow and limp. Aphids, whitefly and spider mite on indoor plants. Slugs eat the first shoots in April. Escaping runners are the perennial nuisance.',
      denmarkTips:
        'Buy a plant or beg a runner in April-May and grow it in a big pot or sunken bucket on the terrace. Harvest from May to September and cut and dry bunches in late June and again in August for winter tea, hanging them in a warm airy place for a week; peppermint dries very well. Cut hard in July. In September pot up a few runners for a bright kitchen windowsill, and leave the main pot outside in a sheltered corner, where it survives any Danish winter and resprouts in April. Divide and repot into fresh compost every spring. Check for rust from June and for slugs in a wet spring.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 7, note: 'Keep moist; droops fast in a pot' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Liquid feed for potted plants' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9], note: 'Top third of stems; dry bunches June and August' },
      { type: 'divide', intervalDays: 365, months: [4], note: 'Repot or divide into fresh compost' },
      { type: 'bring-inside', intervalDays: 365, months: [9, 10], note: 'Pot runners for the winter windowsill' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Rust under leaves, aphids, slugs' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'windowsill', 'tea'],
  },
]
