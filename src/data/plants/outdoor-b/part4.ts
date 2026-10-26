import type { Plant } from '../../types'

export const part4: Plant[] = [
  {
    id: 'thymus-vulgaris',
    commonName: 'Common thyme',
    danishName: 'Timian',
    latinName: 'Thymus vulgaris',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Thymus vulgaris',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain', 'silver'],
      flowerColor: ['pink', 'purple', 'white'],
      habit: ['bushy', 'groundcover', 'shrub'],
      size: 'small',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A low, woody, evergreen Mediterranean herb 15-30 cm tall with tiny grey-green aromatic leaves and masses of pale pink-purple flowers in June-July that are a magnet for bees. It loves sun, drought and poor soil, and resents the wet Danish winter more than the cold. Perfect for pots, gravel beds and the edge of a sunny raised bed.',
      watering:
        'Water sparingly; let the compost dry out between waterings. Pots need water perhaps every 4-7 days in summer, less in cool weather. In the ground established plants rarely need watering. Indoors in winter water every 10-14 days. Overwatering is the main killer.',
      light:
        'Full sun, at least 6 hours; in shade it grows leggy, loses flavour and rots. Indoors give the sunniest south-facing windowsill.',
      soil:
        'Poor, gritty, very free-draining soil, neutral to alkaline. Mix at least a third grit or sand into compost for pots, and use terracotta. On heavy clay grow in a raised bed or pot, never in the open ground.',
      temperature:
        'Hardy to about -15 °C and normally fine through Danish winters provided the roots are not waterlogged; losses are from wet, not cold. Pots can be left outside against a sheltered wall, raised on feet for drainage. Indoors in winter keep it cool and bright, not in a warm room.',
      feeding:
        'Almost none. A pinch of general fertilizer or a little compost in April is plenty; rich feeding gives soft, flavourless growth that rots in winter.',
      pruning:
        'Trim lightly after flowering in July to keep it compact and stop it becoming bare and woody at the base. Harvest sprigs year-round, but never cut into old leafless wood, which does not regrow. Replace plants every 4-5 years when they get straggly.',
      propagation:
        'Semi-ripe cuttings 5-8 cm long in June-August root easily in gritty compost. Low stems can be layered. Seed is slow and variable.',
      problems:
        'Root rot and grey mould in wet, poorly drained soil, with brown collapsing stems. Woody, bare centres from lack of pruning. Occasionally aphids or spider mite on indoor plants. Rosemary beetle (metallic striped) can nibble leaves. Winter die-back in waterlogged beds is the usual loss.',
      denmarkTips:
        'Plant in April-May in a pot of gritty compost or a sunny, well-drained raised bed; it is a good balcony herb. Harvest sprigs all year, hardest from June to September; dry or freeze a batch in July when the oil content peaks. Trim after flowering in July. In October move pots to a sheltered wall or under a roof overhang out of the rain, or bring one onto a cool sunny windowsill for winter cooking. Do not mulch with compost or manure, use gravel instead so the crown stays dry through the wet Danish winter.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 14, note: 'Let compost dry out first' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'A little general fertilizer only' },
      { type: 'prune', intervalDays: 365, months: [7], note: 'Light trim after flowering; never into bare wood' },
      { type: 'harvest', intervalDays: 7, months: [4, 5, 6, 7, 8, 9, 10] },
      { type: 'overwinter', intervalDays: 365, months: [10], note: 'Move pots out of rain against a sheltered wall' },
    ],
    tags: ['herb', 'edible', 'balcony', 'windowsill', 'pollinator-friendly', 'drought-tolerant'],
  },
  {
    id: 'salvia-rosmarinus',
    commonName: 'Rosemary',
    danishName: 'Rosmarin',
    latinName: 'Salvia rosmarinus',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Rosemary',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['needle', 'lance'],
      leafPattern: ['plain', 'silver'],
      flowerColor: ['blue', 'purple', 'white'],
      habit: ['shrub', 'upright', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'An aromatic evergreen Mediterranean shrub (formerly Rosmarinus officinalis) with needle-like dark green leaves, silvery beneath, and pale blue flowers from April to June. It reaches 60-150 cm in a warm sheltered spot but is only borderline hardy in Denmark, so most gardeners grow it in a pot that can be moved under cover, or treat an outdoor plant as a gamble. Hardier cultivars include \'Arp\' and \'Blue Winter\'.',
      watering:
        'Water pots thoroughly, then let the compost dry out before watering again, roughly every 3-5 days in summer. In the ground established plants need no watering. In winter indoors or in a cold greenhouse water very sparingly, every 2-3 weeks, just enough to stop the compost drying completely. Cold, wet compost kills rosemary faster than frost.',
      light:
        'Full sun all day, ideally against a south-facing wall. Indoors it needs the sunniest window available and even then struggles in the dark Danish winter; a cool bright conservatory or unheated greenhouse is better than a warm living room.',
      soil:
        'Very free-draining, gritty, neutral to alkaline soil. In pots use compost mixed with a third grit or sand, in terracotta with plenty of drainage holes. Never plant in heavy, wet clay without raising the bed.',
      temperature:
        'Hardy to about -10 °C, occasionally -15 °C, when dry and sheltered; a typical Danish winter is survivable against a sunny south wall in Copenhagen or on Bornholm, but a hard winter, wet soil or cold wind will kill it. Pots should be brought into a frost-free but cool, bright place (0-10 °C ideal) from November to March, or wrapped and placed under a roof overhang. Indoors, avoid temperatures above 18 °C in winter.',
      feeding:
        'Minimal. A little general fertilizer in April and one liquid feed in June for pots. Rich feeding produces soft growth that is less hardy and less aromatic.',
      pruning:
        'Trim after flowering in late May or June, shortening shoots by a third to keep it dense. Never cut into old bare wood, which will not regrow. Harvest sprigs year-round from the tips. Frost-damaged brown shoots should be cut back to healthy growth in May, not earlier.',
      propagation:
        'Semi-ripe cuttings 8-10 cm long in July-September root readily in gritty compost on a windowsill; root a few every summer as insurance against winter losses.',
      problems:
        'Root rot and dieback from wet winter soil, with grey-brown collapsing branches. Rosemary beetle, a shiny metallic green and purple striped beetle, eats leaves and flowers in late summer and spring; pick off by hand. Powdery mildew on indoor plants in stuffy conditions. Spider mite and aphids on windowsill plants. Leaves dropping indoors usually means too warm and dark or overwatered.',
      denmarkTips:
        'Buy or plant out in May after frost, in a pot of gritty compost or at the foot of a sunny, sheltered south wall with excellent drainage. Harvest tips all summer and trim after flowering in June. Take cuttings in August as a backup. In late October move pots into a cold greenhouse, an unheated bright porch or the coolest sunny windowsill, watering only every few weeks; or wrap outdoor plants in fleece and keep rain off with a cover. Do not cut back frost damage until May, when you can see what has survived. Move pots back out in April-May, hardening off gradually.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 18, note: 'Let dry out between waterings; sparingly in winter' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Light feed only' },
      { type: 'prune', intervalDays: 365, months: [5, 6], note: 'Trim after flowering; never into bare wood' },
      { type: 'harvest', intervalDays: 7, months: [4, 5, 6, 7, 8, 9, 10] },
      { type: 'bring-inside', intervalDays: 365, months: [10, 11], note: 'Cool, bright, frost-free place for winter' },
      { type: 'plant-out', intervalDays: 365, months: [4, 5], note: 'Harden off gradually after frosts' },
    ],
    tags: ['herb', 'edible', 'balcony', 'windowsill', 'pollinator-friendly'],
  },
  {
    id: 'solanum-lycopersicum',
    commonName: 'Tomato',
    danishName: 'Tomat',
    latinName: 'Solanum lycopersicum',
    family: 'Solanaceae',
    category: 'both',
    wikipediaTitle: 'Tomato',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['compound', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['yellow'],
      habit: ['climbing', 'upright', 'bushy'],
      size: 'large',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'The most popular edible crop for Danish greenhouses and balconies: a tender annual with pungent, hairy, divided leaves, yellow star flowers and fruit from July to October. Tall (indeterminate/cordon) varieties are tied to a string or cane and reach 2 m; bush and tumbling types suit pots and hanging baskets. The fruit is wholly edible but the leaves and stems contain solanine and are mildly toxic to pets and people. Reliable choices for Denmark include \'Gardener\'s Delight\', \'Sungold\', \'Moneymaker\' and the blight-resistant \'Crimson Crush\' or \'Primabella\' for outdoors.',
      watering:
        'Water regularly and evenly, daily in warm weather for plants in pots or grow bags, aiming at the soil and never the leaves. Irregular watering causes blossom end rot (black sunken patches on fruit) and split skins. Reduce slightly once fruit starts to ripen to concentrate flavour. Water in the morning so foliage is dry at night.',
      light:
        'Full sun, as much as possible; a minimum of 6-8 hours. In Denmark a greenhouse, polytunnel or a south-facing sheltered balcony is realistically needed for a good crop. Seedlings indoors need a very bright south window or a grow light to avoid becoming leggy.',
      soil:
        'Rich, moisture-retentive, free-draining compost with plenty of organic matter. Use large pots (at least 20-30 l per cordon plant) or grow bags, and change the compost every year to avoid soil-borne disease. Slightly acidic to neutral pH.',
      temperature:
        'Completely frost tender; killed at 0 °C and growth stops below about 10 °C. Needs 18-27 °C by day and above 12 °C at night to set fruit. Do not put plants outdoors in Denmark before mid-to-late May and preferably early June, and bring tender seedlings in on cold nights. A cool wet Danish summer makes outdoor tomatoes slow and blight-prone; the greenhouse season runs May to October.',
      feeding:
        'Start a high-potassium tomato fertilizer once the first fruit truss sets, every week for pots and grow bags, every 2 weeks in greenhouse soil. Too much nitrogen gives huge leaves and few fruits. Curled leaves alone are usually just heat or stress, not a deficiency.',
      pruning:
        'Cordon types: pinch out the side shoots (suckers) that appear in the leaf joints every week, tie the main stem to its support, and remove leaves below the lowest ripening truss to improve air flow. Stop the plant by pinching the top out after 5-6 trusses in a greenhouse (4 outdoors) in early August so remaining fruit ripens. Bush types are not pruned.',
      propagation:
        'Sow seed indoors at 20-25 °C in March (greenhouse) or early April (outdoors), 6-8 weeks before planting out. Pot on into 9 cm pots when the first true leaves appear, and plant deeply. Side shoots can also be rooted in water as cuttings.',
      problems:
        'Late blight (Phytophthora) is the main Danish problem for outdoor tomatoes: brown-black blotches on leaves and stems, then rotting fruit, spreading fast in warm wet weather from July. Blossom end rot (black leathery patch under the fruit) from erratic watering. Whitefly and aphids under leaves in the greenhouse. Grey mould on stems and fruit in humid greenhouses. Fruit splitting after heavy rain. Blossom drop in cold nights or extreme heat. Magnesium deficiency shows as yellowing between veins on older leaves. Tomato leaf mould (yellow patches with brown felt underneath) in poorly ventilated greenhouses.',
      denmarkTips:
        'Sow indoors in March for the greenhouse or April for outdoors, with as much light as possible. Plant into the unheated greenhouse in early to mid-May and outdoors only after mid-May to early June, on a south wall or sheltered balcony. Water daily in pots, feed weekly from the first fruit, and pinch out side shoots every week. Ventilate the greenhouse on warm days and keep leaves dry. For outdoor plants choose blight-resistant varieties and keep a rain cover handy; remove blighted leaves immediately. Stop plants in early August. Harvest from July to October; in late September pick green fruit and ripen it indoors with a banana before the first frost. Clear and clean the greenhouse in October.',
    },
    tasks: [
      { type: 'water', intervalDays: 1, winterIntervalDays: 0, note: 'At the soil, mornings; evenly and consistently' },
      { type: 'fertilize', intervalDays: 7, months: [6, 7, 8, 9], note: 'Tomato feed once the first truss sets' },
      { type: 'plant-out', intervalDays: 365, months: [5, 6], note: 'Greenhouse early May; outdoors after mid-May' },
      { type: 'prune', intervalDays: 7, months: [6, 7, 8], note: 'Pinch out side shoots; stop plant in early August' },
      { type: 'check-pests', intervalDays: 7, months: [6, 7, 8, 9], note: 'Blight, whitefly, blossom end rot' },
      { type: 'harvest', intervalDays: 3, months: [7, 8, 9, 10] },
    ],
    tags: ['edible', 'vegetable', 'greenhouse', 'balcony', 'annual'],
  },
  {
    id: 'geranium-rozanne',
    commonName: 'Hardy cranesbill geranium',
    danishName: 'Storkenæb',
    latinName: 'Geranium \'Rozanne\'',
    family: 'Geraniaceae',
    category: 'outdoor',
    wikipediaTitle: 'Geranium',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['lobed', 'palmate'],
      leafPattern: ['plain'],
      flowerColor: ['blue', 'purple'],
      habit: ['groundcover', 'trailing', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Perhaps the best hardy perennial geranium (not to be confused with pot pelargoniums): a sprawling mound 40-50 cm high and up to 1 m wide of deeply cut, lobed leaves, smothered in violet-blue saucer flowers with white centres from June right up to the first frosts. Sterile, so it never stops flowering and does not self-seed. Loved by bees and a brilliant weed-smothering filler in Danish borders.',
      watering:
        'Water weekly in the first summer to establish. After that it is drought tolerant and only needs a soak in long dry spells; in pots water every 2-3 days in summer. Nothing needed in winter when dormant.',
      light:
        'Full sun to partial shade; flowers most in sun but in light shade the blue colour is richer and the plant stays fresher in a hot spell.',
      soil:
        'Any reasonably fertile, well-drained soil, including clay and chalk. Dislikes waterlogging in winter. Tolerates dry shade under shrubs once established.',
      temperature:
        'Fully hardy throughout Denmark, to -25 °C and below; completely dies back to a woody crown in winter and reappears in April. No protection needed, even in pots.',
      feeding:
        'Little needed. A compost mulch or a handful of general fertilizer in April. Over-feeding gives leaves at the expense of flowers.',
      pruning:
        'If the mound sprawls and looks tired in late July, shear it back by half or even to the ground; it regrows fresh foliage and flowers within three weeks. Cut all dead growth to the crown in late autumn or February. Deadheading individual flowers is not necessary but a mid-season trim keeps it neat.',
      propagation:
        'Divide clumps in spring (April) or September every 4-5 years, or take basal cuttings in spring. It is a patented cultivar that does not set seed.',
      problems:
        'Remarkably trouble-free. Powdery mildew occasionally on crowded plants in a dry late summer. Slugs may nibble spring shoots but rarely do serious harm. Vine weevil in pots. Sprawling stems may swamp small neighbours and need pulling back.',
      denmarkTips:
        'Plant in April-June, 60-80 cm apart; it quickly fills gaps between roses and shrubs and spills nicely over walls and pot edges. Expect flowers from June to October, often into November in a mild autumn. Shear back in late July if it gets untidy for a fresh autumn display. Cut down in November or leave until February and tidy then. Divide in April every few years. It copes well with wind, coastal gardens and the wet Danish winter as long as the soil drains.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'Only in dry spells once established' },
      { type: 'fertilize', intervalDays: 365, months: [4] },
      { type: 'deadhead', intervalDays: 30, months: [7, 8], note: 'Shear back by half if sprawling and tired' },
      { type: 'prune', intervalDays: 365, months: [11, 2], note: 'Cut dead growth to the crown' },
      { type: 'divide', intervalDays: 1460, months: [4, 9], note: 'Every 4-5 years' },
    ],
    tags: ['perennial', 'pollinator-friendly', 'groundcover', 'low-maintenance', 'long-flowering'],
  },
  {
    id: 'viola-wittrockiana',
    commonName: 'Garden pansy',
    danishName: 'Stedmoderblomst',
    latinName: 'Viola × wittrockiana',
    family: 'Violaceae',
    category: 'outdoor',
    wikipediaTitle: 'Pansy',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['oval', 'heart'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'purple', 'yellow', 'blue', 'white', 'orange'],
      habit: ['bushy', 'clumping'],
      size: 'small',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'The cheerful face-flowered bedding plant of Danish autumns and springs, 15-25 cm tall, in nearly every colour including bicolours with dark blotches. Technically a short-lived perennial, it is grown as a biennial or annual: winter-flowering types planted in September-October flower in mild spells all winter and peak in April-May, while spring-planted pansies and the smaller violas flower until summer heat stops them. The flowers are edible and decorate cakes and salads.',
      watering:
        'Keep the compost evenly moist but never soggy; pots and window boxes need water every 2-3 days in spring and autumn, and only occasionally in winter when it is not raining. Water at the base to avoid rotting the crowns. Wilting in dry pots is quick but recoverable.',
      light:
        'Full sun in autumn, winter and spring. In late spring and summer partial shade keeps them flowering longer, as they dislike heat above 25 °C.',
      soil:
        'Moist, fertile, well-drained compost or garden soil rich in organic matter. In window boxes use fresh multipurpose compost with a little grit for winter drainage.',
      temperature:
        'Hardy to about -15 °C; winter pansies survive normal Danish winters in beds and pots, pausing in hard frost and flowering again in mild weeks. Plants in small pots can freeze solid and die in a prolonged -10 °C spell, so group pots against a wall or wrap them. Spring plants from the garden centre in March are already hardened and can go out immediately.',
      feeding:
        'Liquid feed every 2 weeks in spring and autumn when in active growth. Fresh compost in pots carries them a month or two. Do not feed in deep winter.',
      pruning:
        'Deadhead regularly, pinching off faded flowers with their stalk before they set seed, which dramatically prolongs flowering. Cut leggy plants back by half in late spring to encourage a new flush of blooms.',
      propagation:
        'Sow seed in June-July in a cool shady frame for autumn planting, or in February indoors for spring plants; most people buy plug plants. Named cultivars can be propagated from basal cuttings in September.',
      problems:
        'Slugs and Spanish slugs chew flowers and leaves, especially in mild wet autumns. Aphids cluster on buds and distort them. Grey mould rots flowers and crowns in wet, still weather. Pansy leaf spot and downy mildew cause brown or yellow patches. Pansy sickness (root and stem rot) kills plants in the same bed year after year, so rotate planting spots. Powdery mildew in dry late spring. Leggy, flowerless plants are too warm or hungry.',
      denmarkTips:
        'For autumn and winter colour, plant winter pansies in pots, window boxes and bedding in September-October alongside bulbs; they flower in mild spells and burst into bloom in March-April. Buy a second batch in March-April for spring displays that last until June. Deadhead weekly, water pots in dry weather even in winter, and feed every two weeks from March. Collect slugs on wet autumn evenings and move pots against the house in hard frost. Pull out tired plants in June and replace with summer bedding, or let violas self-seed in gravel.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 10, note: 'Even moisture; at the base' },
      { type: 'fertilize', intervalDays: 14, months: [3, 4, 5, 6, 9, 10], note: 'Liquid feed in active growth' },
      { type: 'deadhead', intervalDays: 7, months: [3, 4, 5, 6, 9, 10, 11], note: 'Pinch off faded flowers with the stalk' },
      { type: 'plant-out', intervalDays: 180, months: [3, 4, 9, 10], note: 'Autumn for winter colour, spring for early summer' },
      { type: 'check-pests', intervalDays: 14, months: [3, 4, 5, 6, 9, 10], note: 'Slugs, aphids, grey mould' },
    ],
    tags: ['bedding', 'balcony', 'autumn', 'spring', 'edible-flowers'],
  },
]
