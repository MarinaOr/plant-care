import type { Plant } from '../../types'

export const part4: Plant[] = [
  {
    id: 'oxalis-triangularis',
    commonName: 'Purple shamrock',
    danishName: 'Lykkekløver',
    latinName: 'Oxalis triangularis',
    family: 'Oxalidaceae',
    category: 'indoor',
    wikipediaTitle: 'Oxalis triangularis',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['compound', 'heart'],
      leafPattern: ['coloured', 'plain'],
      flowerColor: ['white', 'pink'],
      habit: ['clumping', 'bulb'],
      size: 'small',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'A compact plant grown from small scaly bulbs, with deep purple, triangular, three-part leaves that fold closed every evening and open again in the morning. Small pale pink or white flowers appear on and off through the growing season. It periodically dies back to the bulbs for a rest and then regrows, which alarms new owners but is completely normal.',
      watering:
        'Keep the soil lightly moist while in leaf, watering when the top 2 cm are dry, about every 4-6 days in summer. When the leaves start to die back for a rest, stop watering and keep the pot almost dry for 4-6 weeks, then resume. Soggy soil rots the bulbs.',
      light:
        'Bright, indirect light near an east or west window keeps the colour deep and the stems short. In low light the stems stretch and flop. Gentle morning sun is fine; harsh midday sun fades the leaves.',
      soil:
        'An ordinary peat-free potting compost with a quarter perlite for drainage. Plant the bulbs 2-3 cm deep, several per pot.',
      temperature:
        'Prefers 15-24 C. It tolerates down to about 5 C when dormant and dry; the bulbs survive brief light frost in the ground but the plant is not reliably hardy in Denmark. Cooler nights prolong the display.',
      humidity:
        'Normal room humidity is fine; no misting needed.',
      feeding:
        'Feed every 2-3 weeks while in active growth with a half-strength balanced liquid fertilizer. Stop when it goes dormant and in winter.',
      repotting:
        'Repot or divide every 1-2 years in spring, or when restarting after a dormancy. Separate the small bulbs and replant them in fresh compost to renew a tired plant.',
      pruning:
        'Cut off dead or yellowing leaves and spent flower stalks. When the plant dies back, remove all the dead foliage and leave the pot to rest.',
      propagation:
        'Divide the bulbs at repotting time; each small bulb produces a new plant. It multiplies quickly and one pot soon becomes several.',
      problems:
        'Spider mites cause speckled, pale leaves in dry air; aphids attack flower stalks and new leaves. Powdery mildew sometimes dusts the leaves white in stuffy conditions. Sudden total die-back is usually dormancy, not death, but mushy bulbs with a bad smell mean rot from overwatering. Leaves that stay folded during the day indicate drought or heat stress.',
      denmarkTips:
        'The plant often chooses the dark November-February period for its rest, dropping its leaves; let it dry off and sit in a cool, bright spot, then resume watering in late February when new shoots appear. Keep it away from hot radiator air, which stresses the thin leaves and invites spider mites, and off icy glass at night. From late May to September it makes a fine balcony plant in light shade or morning sun and can be plunged in pots into outdoor planters; lift it and bring it in before frost, as the bulbs are not reliably winter hardy in Danish gardens.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 14, note: 'Keep lightly moist in leaf; stop entirely while dormant' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer while in active growth' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Divide bulbs, replant 2-3 cm deep in fresh compost' },
      { type: 'deadhead', intervalDays: 10, note: 'Remove spent flowers and yellow leaves' },
      { type: 'check-pests', intervalDays: 14, note: 'Check for spider mites and aphids on new growth' },
    ],
    tags: ['colourful-foliage', 'flowering', 'bulb', 'beginner', 'balcony'],
  },
  {
    id: 'fittonia-albivenis',
    commonName: 'Nerve plant',
    danishName: 'Mosaikplante',
    latinName: 'Fittonia albivenis',
    family: 'Acanthaceae',
    category: 'indoor',
    wikipediaTitle: 'Fittonia albivenis',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect', 'low'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['variegated', 'coloured', 'silver'],
      flowerColor: ['none'],
      habit: ['groundcover', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A low, creeping plant from the Peruvian rainforest floor with oval leaves netted in bright white, pink or red veins. It stays under 15 cm tall and is a favourite for terrariums and bottle gardens. It is dramatic about thirst, collapsing completely when dry and reviving within an hour of watering, and is safe for pets.',
      watering:
        'Keep the soil evenly moist, watering when the surface starts to feel dry, about every 3-4 days in summer and every 5-7 days in winter. Use lukewarm water. It wilts theatrically when dry and recovers quickly, but repeated collapses weaken it and constantly soggy soil rots the roots.',
      light:
        'Medium to bright indirect light, such as a north or east window or set back from a brighter one. Direct sun scorches and fades the leaves; it tolerates low light better than most colourful plants but the veining dulls.',
      soil:
        'A moisture-retaining peat-free compost with a quarter perlite. Shallow pots suit its shallow roots; terrarium soil with a drainage layer works well.',
      temperature:
        'Prefers 18-26 C and should not drop below about 15 C. Cold draughts and chilly windowsills cause the leaves to drop and blacken.',
      humidity:
        'Needs 60 % humidity or more to look its best; crispy edges and leaf drop follow dry air. A terrarium, cloche, bathroom window or pebble tray makes all the difference.',
      feeding:
        'Feed every 3-4 weeks from April to September with a half-strength balanced liquid fertilizer. Do not feed in winter or inside a closed terrarium.',
      repotting:
        'Repot every 1-2 years in spring into a slightly larger shallow pot. Pinch back at the same time to keep it compact.',
      pruning:
        'Pinch out stem tips regularly to keep the plant dense and low; it becomes leggy otherwise. Snip off the insignificant flower spikes, which weaken the foliage.',
      propagation:
        'Stem cuttings with a couple of nodes root in 2-3 weeks in water or moist compost under a plastic bag for humidity. Creeping stems also root where they touch the soil.',
      problems:
        'Aphids on new growth and mealybugs in leaf axils are the main pests; fungus gnats show the soil is kept too wet. Crispy brown edges and leaf drop mean dry air or cold; yellow, limp leaves with wet soil mean root rot. Repeated wilting from drought leaves permanently damaged lower leaves.',
      denmarkTips:
        'In a Danish winter the dry air from radiators is the biggest threat, so keep it well away from heat sources and in a terrarium, under a cloche or on a pebble tray near a bright north or east window. The low light of November-February is tolerated, but keep it off cold windowsills, which can drop below 15 C at night, and out of the draught when airing. Water a little less in winter but never let it dry out. It is not suited to outdoor life in Denmark even in summer.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 6, note: 'Keep evenly moist; lukewarm water; never let it collapse' },
      { type: 'fertilize', intervalDays: 24, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Slightly larger shallow pot; pinch back at the same time' },
      { type: 'mist', intervalDays: 1, note: 'Mist daily or keep under a cloche; aim for 60 %+' },
      { type: 'prune', intervalDays: 28, note: 'Pinch stem tips and remove flower spikes to keep it dense' },
    ],
    tags: ['pet-safe', 'terrarium', 'humidity-lover', 'colourful-foliage', 'low-light-tolerant'],
  },
  {
    id: 'aspidistra-elatior',
    commonName: 'Cast iron plant',
    danishName: 'Skomagerpalme',
    latinName: 'Aspidistra elatior',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Aspidistra elatior',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['lance', 'strap'],
      leafPattern: ['plain', 'variegated', 'spotted'],
      flowerColor: ['none'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A famously indestructible plant with long, dark green, leathery leaves rising straight from the soil on short stalks. It was the standard parlour plant of Victorian homes and Danish cobblers\' workshops, hence the Danish name, because it tolerates deep shade, cold rooms, gas fumes and neglect. Growth is slow and the odd purple flower appears at soil level but is easily missed.',
      watering:
        'Water when the top 5 cm of soil are dry, about every 10-14 days in summer and every 3-4 weeks in winter. It tolerates drying out far better than sitting wet; waterlogged soil is about the only thing that kills it. Empty the saucer after watering.',
      light:
        'Thrives in low to medium light, including north-facing rooms and dim hallways where little else survives. It also accepts bright indirect light, but direct sun bleaches and scorches the leaves. Variegated forms need a little more light to keep their markings.',
      soil:
        'Any good peat-free potting compost with a quarter perlite or grit for drainage. It is not fussy; a heavy pot keeps a large clump stable.',
      temperature:
        'Comfortable at 10-24 C and tolerates cool rooms better than nearly any houseplant. It survives brief dips to around -5 C and is sometimes grown in sheltered Danish gardens, but indoors simply keep it frost-free and out of hot, dry positions.',
      humidity:
        'Normal to dry room air is fine; no misting needed.',
      feeding:
        'Feed once a month from April to September with a half-strength balanced liquid fertilizer. Over-feeding causes brown leaf tips and can turn variegated leaves plain green. Do not feed in winter.',
      repotting:
        'Repot only every 3-5 years in spring when the clump fills the pot; it resents disturbance and grows slowly. Top-dress with fresh compost in between.',
      pruning:
        'Cut off old, brown or split leaves at the base. Nothing else is needed.',
      propagation:
        'Divide the rhizome clump in spring, making sure each piece has at least two or three leaves and some root. Divisions take a season to settle.',
      problems:
        'Scale insects on leaf undersides and spider mites in very dry rooms are the only common pests; look for brown bumps and fine speckling. Brown leaf tips come from over-feeding, hard water or very dry heat. Yellow leaves and a soft base mean overwatering; brown scorched patches mean direct sun. Split leaf edges are cosmetic and usually from physical damage.',
      denmarkTips:
        'This is the ideal plant for a Danish hallway, stairwell or north-facing room in winter: the dark November-February days and cool temperatures suit it, and it needs watering only every 3-4 weeks. Keep it out of the hot blast of a radiator, which browns the tips, but a cold windowsill or draughty entrance is no problem. From May to October it can stand outdoors in full shade on a balcony or terrace, and in a very sheltered spot it may even stay out through a mild winter, though it is safer brought in before hard frost.',
    },
    tasks: [
      { type: 'water', intervalDays: 12, winterIntervalDays: 25, note: 'Water when top 5 cm are dry; never leave it wet' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer, sparingly' },
      { type: 'repot', intervalDays: 1460, months: [3, 4, 5], note: 'Only when the clump fills the pot; divide if wanted' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Wipe dust off the leaves; check undersides for scale' },
    ],
    tags: ['low-light-tolerant', 'pet-safe', 'beginner', 'cool-room', 'air-purifying'],
  },
  {
    id: 'clivia-miniata',
    commonName: 'Natal lily',
    danishName: 'Klivia',
    latinName: 'Clivia miniata',
    family: 'Amaryllidaceae',
    category: 'indoor',
    wikipediaTitle: 'Clivia miniata',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['strap', 'sword'],
      leafPattern: ['plain'],
      flowerColor: ['orange', 'yellow', 'red'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A South African plant with fans of thick, dark green strap leaves and, in late winter or spring, stout stalks topped with clusters of trumpet-shaped orange flowers with yellow throats; yellow and red forms exist. It is a long-lived heirloom plant that flowers reliably for decades if given a cool, dry winter rest. All parts, especially the fleshy roots, are toxic to pets and children.',
      watering:
        'Water moderately from spring to autumn when the top 3-5 cm are dry, about every 7-10 days. From October to late January give it a near-dry rest, watering only every 4-6 weeks just enough to stop the leaves wilting; this rest triggers flowering. Resume normal watering when the flower stalk appears.',
      light:
        'Bright, indirect light near an east or north window, or set back from a south window. Direct sun scorches the leaves yellow-brown. It tolerates medium light but flowers less.',
      soil:
        'A free-draining peat-free compost with a third coarse bark or perlite. The thick fleshy roots need air and rot in dense, wet soil.',
      temperature:
        'Prefers 15-24 C in summer but needs a cool winter rest at 8-12 C for 6-8 weeks to flower. It tolerates down to about 5 C if dry but not frost. A warm living room all winter is the usual reason it fails to bloom.',
      humidity:
        'Normal room humidity is fine; no misting needed.',
      feeding:
        'Feed every 2-3 weeks from when the flower stalk appears until September with a half-strength balanced or high-potassium fertilizer. No feeding during the autumn and winter rest.',
      repotting:
        'Repot only every 3-5 years in spring after flowering; it flowers best when crowded and root-bound. Keep the top of the root ball at the same level.',
      pruning:
        'Cut the flower stalk off at the base once the flowers fade, unless you want the decorative red berries, which take energy from next year\'s flowers. Remove dead outer leaves at the base.',
      propagation:
        'Separate offsets with at least four leaves and their own roots at repotting time. Seed from the berries takes 3-5 years to flower.',
      problems:
        'Mealybugs nestle deep between the leaf bases as white fluff; scale insects form brown bumps along the leaves. Failure to flower is almost always a missing cool, dry winter rest or too little light. Yellow, soft leaves and rotting leaf bases mean overwatering, especially in winter. Short flower stalks hidden among the leaves mean the plant was brought into warmth too fast after resting.',
      denmarkTips:
        'The Danish winter is an asset here: from October to January stand it in a cool, bright, unheated or barely heated room, such as a stairwell, spare bedroom or frost-free conservatory at 8-12 C, and water only every 4-6 weeks. A cold windowsill away from the radiator is ideal. When the flower bud appears in late January or February, move it into a warmer room and start watering and feeding; the dark days do not matter as long as it is near a window. From June to September it enjoys a shaded, sheltered balcony, but bring it in before the first frost.',
    },
    tasks: [
      { type: 'water', intervalDays: 8, winterIntervalDays: 35, note: 'Moderate in summer; near-dry rest Oct-Jan until the bud appears' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength balanced or high-potassium feed while in growth' },
      { type: 'repot', intervalDays: 1460, months: [3, 4, 5], note: 'Only every 3-5 years after flowering; it likes being crowded' },
      { type: 'deadhead', intervalDays: 365, months: [4, 5], note: 'Cut spent flower stalk at the base' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Wipe leaves; check leaf bases for mealybugs' },
      { type: 'overwinter', intervalDays: 365, months: [10], note: 'Move to a cool 8-12 C bright room and cut watering right back' },
    ],
    tags: ['flowering', 'cool-room', 'long-lived', 'winter-interest'],
  },
  {
    id: 'codiaeum-variegatum',
    commonName: 'Croton',
    danishName: 'Kroton',
    latinName: 'Codiaeum variegatum',
    family: 'Euphorbiaceae',
    category: 'indoor',
    wikipediaTitle: 'Codiaeum variegatum',
    difficulty: 'demanding',
    toxicity: 'toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['oval', 'lance', 'lobed'],
      leafPattern: ['coloured', 'variegated', 'spotted'],
      flowerColor: ['none'],
      habit: ['shrub', 'upright'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A tropical shrub with thick, glossy leaves splashed in yellow, orange, red, pink and green, in shapes from broad ovals to narrow twisted ribbons depending on the cultivar. It is one of the most colourful foliage plants but also one of the most temperamental, dropping leaves at any sudden change in light, temperature or watering. The milky sap is toxic and irritates skin.',
      watering:
        'Keep the soil evenly moist in summer, watering when the top 2-3 cm are dry, about every 5-7 days. In winter let it dry a little more, every 10-14 days, but never completely. Use lukewarm water; cold water shocks the roots and causes leaf drop. Drain fully and empty the saucer.',
      light:
        'Needs very bright light, right by an east, west or south window, with several hours of direct sun to develop and hold its colours. In lower light new leaves come out plain green and the lower leaves drop. Shade it only from the fiercest July sun through south glass.',
      soil:
        'A rich, well-draining peat-free compost with a quarter perlite or bark. Good drainage is essential, but the mix should hold some moisture.',
      temperature:
        'Prefers 20-27 C and must not drop below about 15 C; it drops leaves below that and is damaged at 10 C. It hates cold draughts and temperature swings more than almost any other houseplant.',
      humidity:
        'Wants 50-60 % humidity or more. Dry air brings spider mites and brown leaf edges; mist regularly, stand it on a pebble tray or use a humidifier.',
      feeding:
        'Feed every 2-3 weeks from April to September with a half-strength balanced liquid fertilizer. Reduce to none in winter.',
      repotting:
        'Repot every 2 years in spring into a pot one size larger. Expect some leaf drop afterwards; keep conditions steady and it recovers.',
      pruning:
        'Prune in spring to shape and encourage branching, cutting above a node and wearing gloves because of the sap. Dab the cut with a damp cloth to stop the bleeding.',
      propagation:
        'Stem cuttings 10-15 cm long root in water or moist compost under a plastic bag at 24 C or more, taking 4-6 weeks. Dip the cut end in water to stop the sap, then let it dry before planting.',
      problems:
        'Spider mites are the chief enemy, causing dull, speckled leaves and webbing in dry air; mealybugs, scale and thrips also attack. Leaf drop follows any shock: cold draughts, moving, cold water or dry soil. New leaves staying green means too little light; soft yellow leaves with wet soil mean root rot.',
      denmarkTips:
        'Croton struggles in a Danish winter: the short dark days of November-February fade the colours and the dry radiator air invites spider mites. Give it the brightest south-facing window, a grow light for 10-12 hours a day if possible, a pebble tray or humidifier, and keep it away from both the radiator and icy glass. Never stand it in the draught when airing rooms, as a cold blast causes mass leaf drop. From July to mid-August it may go out on a warm, sheltered balcony in partial sun, but Danish nights are often too cool and it is usually happier staying indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Lukewarm water when top 3 cm are dry; never fully dry' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'One size up; expect some leaf drop afterwards' },
      { type: 'mist', intervalDays: 2, note: 'Mist leaves or top up pebble tray; aim for 50-60 %' },
      { type: 'wipe-leaves', intervalDays: 28, note: 'Wipe glossy leaves; check undersides for spider mites' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Shape and encourage branching; gloves for the sap' },
    ],
    tags: ['colourful-foliage', 'bright-light', 'humidity-lover', 'tropical'],
  },
]
