import type { Plant } from '../../types'

export const part1: Plant[] = [
  {
    id: 'miscanthus-sinensis',
    commonName: 'Chinese silver grass',
    danishName: 'Elefantgræs',
    latinName: 'Miscanthus sinensis',
    family: 'Poaceae',
    category: 'outdoor',
    wikipediaTitle: 'Miscanthus sinensis',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['grass-like'],
      leafPattern: ['plain', 'striped'],
      flowerColor: ['pink', 'white'],
      habit: ['grass', 'clumping', 'upright'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'A tall, arching ornamental grass that forms a dense clump 1-2.5 m high depending on cultivar. Silky, feathery plumes appear in late summer and stand through winter, turning straw-coloured and catching frost beautifully. Cultivars like \'Gracillimus\', \'Malepartus\' and \'Zebrinus\' are common in Danish gardens.',
      watering:
        'Water regularly the first season to establish the root system. Once established it copes with normal Danish rainfall and only needs a deep soak in prolonged dry spells. Avoid waterlogged ground in winter, which can rot the crown.',
      light:
        'Full sun gives the strongest stems and most plumes. In partial shade it grows well but flops more and may flower sparsely in a cool Danish summer.',
      soil:
        'Any reasonably fertile, well-drained soil. Heavy clay should be loosened with grit and compost, as sitting wet in winter is the main cause of losses.',
      temperature:
        'Fully hardy in Denmark (zone 7-8); most cultivars tolerate -20 °C or lower once established. Late-planted or very young clumps appreciate a mulch the first winter. Growth starts late, often not until May, so do not assume a clump is dead.',
      feeding:
        'Very modest needs. A handful of general fertilizer or a layer of compost in April is plenty; too much nitrogen makes stems weak and floppy.',
      pruning:
        'Leave the dried stems standing over winter for structure and to protect the crown. Cut everything down to 10-15 cm in late February or March before the new shoots emerge. Wear gloves, the leaf edges are sharp.',
      propagation:
        'Divide large clumps in spring (April-May) just as growth begins, using a sharp spade or an old saw. Replant divisions quickly and keep them watered.',
      problems:
        'Largely trouble-free. Occasional rust spots on leaves in a wet summer; mealybugs are rare outdoors. The centre of old clumps can die out, which is a sign to divide. Flopping is usually from too much shade or feed.',
      denmarkTips:
        'Plant in April-June so the roots establish before winter; autumn planting on wet clay often fails. In the Danish climate taller cultivars may not flower in a cool summer, so choose early-flowering types like \'Malepartus\' or \'Ferner Osten\'. Leave stems up through winter, cut back in late winter, and divide every 4-6 years in spring. Exposed coastal gardens suit it well, it rarely needs staking in sun.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'Only in dry spells once established' },
      { type: 'prune', intervalDays: 365, months: [2, 3], note: 'Cut all stems down to 10-15 cm' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'Compost or a little general fertilizer' },
      { type: 'divide', intervalDays: 1460, months: [4, 5], note: 'Every 4-6 years when the centre thins' },
    ],
    tags: ['ornamental-grass', 'low-maintenance', 'winter-interest'],
  },
  {
    id: 'forsythia-intermedia',
    commonName: 'Forsythia',
    danishName: 'Vårguld',
    latinName: 'Forsythia × intermedia',
    family: 'Oleaceae',
    category: 'outdoor',
    wikipediaTitle: 'Forsythia × intermedia',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['yellow'],
      habit: ['shrub', 'upright', 'bushy'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'One of the first shrubs to flower in Denmark, covering its bare branches in bright yellow bells in March-April before the leaves appear. A vigorous deciduous shrub reaching 2-3 m, often used as a hedge or specimen. Tough and almost impossible to kill.',
      watering:
        'Water weekly in the first summer after planting. Established plants need no watering except in severe drought. Cut flowering branches can be brought inside in February and forced in a vase.',
      light:
        'Full sun gives the heaviest flowering. It tolerates partial shade but flowers noticeably less.',
      soil:
        'Almost any soil, including heavy Danish clay, as long as it is not permanently waterlogged. Neutral to slightly alkaline is ideal.',
      temperature:
        'Fully hardy in Denmark (down to about -25 °C). Flower buds can occasionally be damaged by a hard frost after a mild spell, but the shrub itself is unaffected.',
      feeding:
        'Needs little. A mulch of compost in spring is enough; avoid high-nitrogen fertilizer, which gives leafy growth at the expense of flowers.',
      pruning:
        'Prune immediately after flowering in late April or May, since next year\'s flowers form on this summer\'s growth. Remove one in four of the oldest stems at the base each year to keep it open and flowering. Old, neglected shrubs can be cut hard to 30 cm and will regrow, skipping one year of flowers.',
      propagation:
        'Very easy from hardwood cuttings taken in November-December and pushed into a sheltered bed, or from semi-ripe cuttings in July. Low branches often layer themselves.',
      problems:
        'Very few. Birds (bullfinches) sometimes strip flower buds in winter. Occasional leaf spot or forsythia gall (knobbly swellings on stems) is cosmetic. Poor flowering is almost always from pruning at the wrong time or too much shade.',
      denmarkTips:
        'Plant bare-root in October-November or container plants any time the ground is not frozen. Cut budded branches in February for indoor forcing, a Danish tradition. Prune straight after flowering in May, never in autumn or winter. It is excellent as a windbreak hedge in exposed gardens and needs no winter protection at all.',
    },
    tasks: [
      { type: 'water', intervalDays: 14, winterIntervalDays: 0, note: 'Only in drought once established' },
      { type: 'prune', intervalDays: 365, months: [4, 5], note: 'Right after flowering, remove oldest stems at base' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Compost around the base' },
      { type: 'check-pests', intervalDays: 30, months: [5, 6, 7, 8, 9] },
    ],
    tags: ['shrub', 'hedge', 'spring-flowering', 'low-maintenance'],
  },
  {
    id: 'prunus-laurocerasus',
    commonName: 'Cherry laurel',
    danishName: 'Laurbærkirsebær',
    latinName: 'Prunus laurocerasus',
    family: 'Rosaceae',
    category: 'outdoor',
    wikipediaTitle: 'Prunus laurocerasus',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['direct-sun', 'partial-shade', 'shade'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['shrub', 'bushy', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A dense evergreen shrub with large, glossy dark green leaves, very popular as a privacy hedge in Danish suburbs. Upright spikes of small white flowers in April-May are followed by black cherry-like berries. Compact cultivars like \'Otto Luyken\' and \'Etna\' stay 1-1.5 m; \'Rotundifolia\' and \'Novita\' reach 3-4 m. All parts contain cyanogenic compounds and are toxic.',
      watering:
        'Water deeply every week in the first two summers; hedges planted close together dry out quickly. Established plants are drought tolerant. Water in autumn before frost so evergreen leaves do not desiccate in cold wind.',
      light:
        'Grows in full sun to deep shade, one of the few hedging plants that stays dense under trees. Leaves may yellow slightly in very hot, dry sun.',
      soil:
        'Any moist but well-drained soil. On heavy clay, plant on a slight ridge so water does not pool around the roots in winter. Tolerates chalk.',
      temperature:
        'Hardy to about -20 °C, suitable for most of Denmark, but a combination of frozen ground, sun and cold east wind can scorch leaves brown in February-March. Damaged leaves are shed and replaced; young hedges in exposed sites benefit from a windbreak the first winter.',
      feeding:
        'Feed hedges with a general shrub fertilizer in April and again in June. A mulch of compost or bark keeps the roots moist and suppresses weeds.',
      pruning:
        'Trim hedges once or twice a year, in late May after flowering and if needed again in late August. Use secateurs rather than a hedge trimmer where possible, since cut leaves turn brown at the edges. Hard renovation pruning in March is tolerated.',
      propagation:
        'Semi-ripe cuttings taken in August-September root readily in a cold frame.',
      problems:
        'Powdery mildew and leaf spot cause white patches or brown holes in young leaves, especially in crowded, damp hedges. Shot-hole disease leaves ragged holes. Vine weevil notches leaf edges. Yellowing leaves usually mean waterlogging or hunger. Berries are toxic to children and pets.',
      denmarkTips:
        'Plant in September-October or April so roots settle before extremes. Space hedge plants 50-70 cm apart and water well through the first two summers. Trim in late May and again late August, never later, so new growth hardens before frost. In cold, windy winters leaves may brown; wait until May before cutting out damage, as most plants regrow. Avoid planting where small children or dogs might eat the berries.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Weekly for new hedges in the first two summers' },
      { type: 'prune', intervalDays: 365, months: [5, 8], note: 'Trim after flowering and again late summer' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'General shrub fertilizer' },
      { type: 'mulch', intervalDays: 365, months: [4] },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Look for mildew and leaf spot' },
    ],
    tags: ['hedge', 'evergreen', 'shade-tolerant', 'privacy'],
  },
  {
    id: 'sorbus-aucuparia',
    commonName: 'Rowan',
    danishName: 'Røn',
    latinName: 'Sorbus aucuparia',
    family: 'Rosaceae',
    category: 'outdoor',
    wikipediaTitle: 'Sorbus aucuparia',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['compound'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'A native Danish tree of 8-15 m with feathery pinnate leaves, creamy-white flower clusters in May-June and heavy bunches of orange-red berries from August that birds adore. Autumn colour is often fiery red and yellow. Ideal for small gardens and wildlife; raw berries are bitter but not dangerously toxic, and are safe cooked as jelly.',
      watering:
        'Water young trees weekly through dry spells for the first two or three years. Mature trees look after themselves but can drop leaves early in a severe drought.',
      light:
        'Best in full sun, where it fruits and colours most heavily. Tolerates light shade.',
      soil:
        'Prefers slightly acidic to neutral, well-drained soil but tolerates most conditions except permanently wet ground and thin chalk. Dislikes compacted soil.',
      temperature:
        'Extremely hardy, native well into Scandinavia and the Arctic; no winter protection needed anywhere in Denmark. It dislikes hot dry summers more than cold.',
      feeding:
        'Rarely needed. A compost mulch in spring for young trees. Avoid feeding mature trees.',
      pruning:
        'Minimal. Remove dead, crossing or damaged branches in late winter (February-March) while dormant. Avoid heavy pruning, as the wounds heal slowly and invite disease. Suckers from grafted ornamental forms should be removed.',
      propagation:
        'From seed sown in autumn after cold stratification; named cultivars are grafted. Birds plant seedlings freely around the garden.',
      problems:
        'Fireblight can blacken flower clusters and shoot tips as if scorched. Silver leaf and canker cause dieback of branches. Aphids and sawfly larvae on leaves in summer are usually tolerated. Rowan is fairly short-lived (50-80 years) and often declines after around 40 years.',
      denmarkTips:
        'Plant bare-root in November-March in the dormant season, staking for the first two years in windy sites. Its small size and tolerance of wind make it ideal for coastal and allotment gardens. Expect thrushes, blackbirds and waxwings to strip the berries by October. Prune only in late winter. The berries can be harvested in September for rønnebærgelé, traditionally after the first frost to reduce bitterness.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Young trees only, in dry spells' },
      { type: 'prune', intervalDays: 365, months: [2, 3], note: 'Remove dead or crossing branches only' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Compost ring around young trees' },
      { type: 'check-pests', intervalDays: 30, months: [5, 6, 7, 8], note: 'Look for fireblight and aphids' },
    ],
    tags: ['tree', 'native', 'wildlife', 'pollinator-friendly', 'autumn-colour'],
  },
  {
    id: 'betula-pendula',
    commonName: 'Silver birch',
    danishName: 'Birk',
    latinName: 'Betula pendula',
    family: 'Betulaceae',
    category: 'outdoor',
    wikipediaTitle: 'Betula pendula',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['oval', 'heart'],
      leafPattern: ['plain'],
      flowerColor: ['green', 'yellow'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'An elegant native tree with peeling white bark, delicate weeping branch tips and small triangular leaves that turn clear yellow in autumn. Fast-growing to 15-25 m, so it needs space, though it casts only light shade. Yellow catkins in April are a major hay-fever trigger in Denmark.',
      watering:
        'Water generously through the first two summers; birches have shallow roots and resent drying out when young. Mature trees are tough but suffer in prolonged drought, dropping leaves in July.',
      light:
        'Full sun for the best bark colour and shape. Tolerates light shade when young.',
      soil:
        'Thrives on poor, sandy, acidic soil as well as average garden soil. Tolerates both dry and fairly wet ground but not standing water. The shallow roots compete strongly with lawns and borders.',
      temperature:
        'Completely hardy throughout Denmark and far north of it; no protection needed. It is one of the first trees to leaf out, in late April.',
      feeding:
        'Not needed. Birches grow well on poor soil and feeding only increases the already fast growth.',
      pruning:
        'Prune as little as possible, and only in late summer (August-September) when fully in leaf. Birches bleed sap heavily if cut in late winter or spring and the wounds attract disease. Remove lower branches gradually to show off the trunk.',
      propagation:
        'From seed sown in autumn; seedlings appear everywhere in gravel and gutters. Cultivars are grafted.',
      problems:
        'Aphids drip sticky honeydew onto cars and patios below in June-July. Birch rust spots leaves in late summer. Bracket fungi on the trunk indicate internal decay. Sawfly caterpillars and leaf miners cause cosmetic damage. Birches are relatively short-lived (60-90 years) and dieback in the crown is common in old trees.',
      denmarkTips:
        'Plant small bare-root trees in November-March; they establish faster than large specimens. Allow at least 5 m from buildings and drains because of the spreading roots. Water well the first two summers, especially on sandy West Jutland soils. Prune only in August-September, never in spring. Expect heavy pollen in April and sticky honeydew in early summer, so do not plant directly over a terrace. Do not try to grow a lawn or shallow-rooted perennials right under it.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Young trees in dry spells for the first two years' },
      { type: 'prune', intervalDays: 365, months: [8, 9], note: 'Only when in full leaf; never in spring' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Keep the root zone moist' },
      { type: 'check-pests', intervalDays: 30, months: [5, 6, 7, 8], note: 'Aphids and rust' },
    ],
    tags: ['tree', 'native', 'autumn-colour', 'fast-growing'],
  },
]
