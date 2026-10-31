import type { Plant } from '../../types'

export const part4: Plant[] = [
  {
    id: 'stephanotis-floribunda',
    commonName: 'Madagascar jasmine',
    danishName: 'Stephanotis',
    latinName: 'Stephanotis floribunda',
    family: 'Apocynaceae',
    category: 'indoor',
    wikipediaTitle: 'Stephanotis floribunda',
    difficulty: 'demanding',
    toxicity: 'non-toxic',
    light: ['bright-indirect'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['climbing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'An evergreen twining climber from Madagascar with thick, glossy, dark green oval leaves and clusters of waxy, tubular white flowers from May to September with a heavy sweet perfume, which is why it is the classic Danish bridal flower (brudeslør or brudebuket). It is sold trained around a hoop and is a long-lived houseplant if kept warm, bright and humid, but it is fussy about change and drops buds if moved or chilled.',
      watering:
        'Water with room-temperature, preferably soft or rain water when the top 2-3 cm of compost are dry, about every 5-7 days in summer and every 10-14 days in winter. Keep it evenly moist in the growing season but never waterlogged; the fleshy roots rot easily. Erratic watering, too wet or too dry, makes buds drop.',
      light:
        'Bright indirect light all year; an east window or a west window with the midday sun filtered is ideal. Direct summer sun scorches the leaves, but it needs the brightest spot available in winter. Once in bud, do not turn or move the plant, as it drops buds when its orientation to the light changes.',
      soil:
        'A free-draining, humus-rich compost: multipurpose compost with a third of orchid bark or perlite. Repot every 2-3 years in March into a pot only slightly larger; it flowers best when the roots are a little confined. Provide a hoop or trellis and tie in the twining stems.',
      temperature:
        'A warm-room plant: 18-24 °C in summer and a minimum of 13-15 °C in winter, when a slightly cooler rest at 14-16 °C helps set the next season\'s buds. It is damaged below 10 °C and must never stand in a draught or near a cold windowpane in a Danish winter. It can go on a warm sheltered shaded balcony in July-August but is really better left indoors in our climate.',
      humidity:
        'High humidity, 50-60 %, is important. Mist the leaves regularly (not the flowers), stand the pot on a tray of wet pebbles or group it with other plants, and keep it away from radiators. Dry air gives brown leaf edges and spider mite.',
      feeding:
        'A balanced liquid feed at half strength every 2 weeks from April to September. Nothing from October to February. Yellowing between the veins can mean lime-induced iron deficiency from hard tap water; use rain water and an occasional dose of iron chelate.',
      pruning:
        'Prune in late February or March before growth starts, shortening long stems and removing weak or tangled growth, since flowers form on the current year\'s shoots. Through summer tie new tendrils around the support rather than cutting them. Remove spent flower clusters.',
      propagation:
        'Semi-ripe stem cuttings with two leaves, taken in May-June and rooted in a heated propagator at 20-25 °C with high humidity; slow, taking 6-8 weeks. Layering a stem into an adjacent pot is more reliable for a hobby grower.',
      problems:
        'Mealybugs, hidden as white fluff in leaf joints and under the leaves, and scale insects on stems are the main pests, both leaving sticky honeydew. Spider mite in dry air. Bud drop from moving the plant, temperature swings, draughts or irregular watering. Yellow leaves from overwatering, cold or hard water. Lack of flowers from too little light or no cool winter rest. Grey mould on flowers in stagnant damp air.',
      denmarkTips:
        'Give it a permanent place in a bright east or west window in a warm room and leave it there; do not move it once buds form in spring. Water with rain water and mist often, especially from October to April when the heating dries the air. Feed fortnightly from April and enjoy the scent from May to September; a cluster cut for a vase lasts days and the flowers are traditionally wired into bridal bouquets. Keep it at 14-16 °C and drier from November to February to rest, away from the radiator and the cold glass, then prune in March. Inspect for mealybug monthly all year, especially under the leaves.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Rain water, when top 2-3 cm are dry' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [4, 5, 6, 7, 8, 9], note: 'Half-strength balanced feed' },
      { type: 'mist', intervalDays: 3, note: 'Leaves not flowers; keep humidity up' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Shorten and tidy before growth starts' },
      { type: 'repot', intervalDays: 1095, months: [3], note: 'Only slightly larger pot every 2-3 years' },
      { type: 'check-pests', intervalDays: 30, note: 'Mealybug in leaf joints, scale, spider mite' },
    ],
    tags: ['fragrant', 'climber', 'houseplant', 'flowering'],
  },
  {
    id: 'hyacinthus-orientalis',
    commonName: 'Hyacinth',
    danishName: 'Hyacint',
    latinName: 'Hyacinthus orientalis',
    family: 'Asparagaceae',
    category: 'both',
    wikipediaTitle: 'Hyacinthus orientalis',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['strap'],
      leafPattern: ['plain'],
      flowerColor: ['blue', 'pink', 'white', 'purple', 'yellow', 'mixed'],
      habit: ['bulb', 'upright'],
      size: 'small',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'A spring bulb with strap-shaped leaves and a dense 20-30 cm spike of waxy, bell-shaped flowers in blue, pink, white, purple or yellow with a famously strong, sweet scent. In Denmark it is above all the Christmas flower: prepared bulbs are forced in pots or glasses to flower indoors in December, and afterwards planted out in the garden where they flower every April for years, less densely but just as fragrant. The bulb is toxic if eaten and its scales irritate skin, so handle with gloves.',
      watering:
        'Keep forced bulbs in compost just moist, never wet, during the cool dark weeks and while flowering indoors; water every 5-7 days when the surface dries. In a hyacinth glass the water should sit just below the base of the bulb, not touching it, and be topped up weekly. In the garden the bulbs need no watering except in a very dry spring while in leaf.',
      light:
        'Total darkness and cold during the rooting period, then a cool bright windowsill once the shoot is 5-8 cm. In the garden full sun or light shade under deciduous shrubs.',
      soil:
        'Any free-draining bulb fibre or multipurpose compost for forcing, with the top third of the bulb showing. In the garden, well-drained soil in sun; bulbs rot in heavy waterlogged clay, so add grit or plant on a slope or raised bed, 10-15 cm deep.',
      temperature:
        'Garden hyacinths are fully hardy in Denmark to -20 °C and need the winter cold. For forcing, prepared bulbs need 10-12 weeks at 5-9 °C in the dark (a cold cellar, garage, shed or the fridge) and are then brought into a cool room at 15-18 °C; too warm a room makes the flower stalk stretch and flop. Forced bulbs in flower last longest in a cool room away from radiators.',
      feeding:
        'None needed while forcing; the bulb carries everything. After flowering, feed the leaves with a liquid fertilizer every 2 weeks until they yellow, which rebuilds the bulb for the garden. Garden bulbs get a sprinkle of bulb fertilizer or bonemeal as leaves emerge in March.',
      pruning:
        'Cut off the spent flower spike at the top of the stem, leaving the leaves to die down naturally for 6 weeks, since they feed next year\'s flower. Only remove leaves once they have yellowed and come away easily.',
      propagation:
        'Buy new prepared bulbs for forcing each autumn; forced bulbs cannot be forced again but recover in the garden over 2-3 years. Garden clumps slowly multiply by offsets and can be lifted and divided in July-August when dormant. Seed takes 5-6 years and is not worth it.',
      problems:
        'Bulb rot (grey or soft bulbs with a sour smell) from wet compost or poor bulbs. Flower spikes stuck short in the leaves from being brought into warmth too early, before the shoot was 5 cm. Floppy stems from too warm a room. Aphids on indoor flowers. Narcissus bulb fly, slugs and snails on garden plants. Yellow streaking from virus, which cannot be cured. Skin itching from the bulb scales (hyacinth itch) is common and harmless; wear gloves.',
      denmarkTips:
        'Buy prepared (præparerede) bulbs in September and pot them up by early October for Christmas, three to a 12 cm pot with the noses above the compost, or sit single bulbs in hyacinth glasses. Put them somewhere cold and dark at 5-9 °C for 10-12 weeks, checking the compost monthly. Around the first week of December, when shoots are 5-8 cm and the bud is visible, bring them into a cool bright room and they open in 2-3 weeks, filling the house with scent through Christmas and New Year. After flowering, keep watering and feeding the leaves and plant the bulbs out in the garden in April in a sunny well-drained spot, where they return every April. Lift and divide crowded garden clumps in July. Keep bulbs away from children, cats and dogs.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 6, note: 'Just moist while forcing; top up glasses weekly' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [1, 2, 3, 4], note: 'Feed the leaves after flowering for the garden' },
      { type: 'bring-inside', intervalDays: 365, months: [9, 10], note: 'Pot prepared bulbs; 10-12 weeks cold and dark' },
      { type: 'overwinter', intervalDays: 365, months: [12], note: 'Bring into a cool bright room when shoots are 5-8 cm' },
      { type: 'deadhead', intervalDays: 365, months: [1, 4], note: 'Cut spent spike; leave leaves to yellow' },
      { type: 'plant-out', intervalDays: 365, months: [4], note: 'Forced bulbs into the garden, 10-15 cm deep' },
    ],
    tags: ['fragrant', 'bulb', 'christmas', 'windowsill', 'spring-flowering'],
  },
  {
    id: 'gardenia-jasminoides',
    commonName: 'Gardenia',
    danishName: 'Gardenia',
    latinName: 'Gardenia jasminoides',
    family: 'Rubiaceae',
    category: 'indoor',
    wikipediaTitle: 'Gardenia jasminoides',
    difficulty: 'demanding',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['shrub', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'An evergreen shrub from southern China and Japan with glossy, deep green leaves and large, waxy, double white flowers from June to September whose rich, heady perfume is one of the most famous in the plant world. Indoors it stays 40-80 cm tall. It is notoriously temperamental: it wants bright light, even warmth, high humidity, acid compost and soft water, and sulks visibly (yellow leaves, dropped buds) when any of these slip. For a Danish home it is a rewarding challenge rather than an easy houseplant.',
      watering:
        'Keep the compost evenly moist, never soggy and never dry, using room-temperature rain water or boiled and cooled tap water, since hard Danish tap water raises the pH and yellows the leaves. Water about every 4-5 days in summer and every 7-10 days in winter, when the top 2 cm are dry. Drought while in bud causes bud drop.',
      light:
        'Very bright but filtered light: an east window, or a south or west window with a sheer curtain against the midday sun. In winter give it the brightest spot you have and consider a grow light; Danish winter days are too dim for it to thrive without. In July-August it can go out onto a warm, lightly shaded, sheltered balcony.',
      soil:
        'Acid (ericaceous) compost, pH 5-6, with added perlite for drainage. Repot every 2 years in spring into a slightly larger pot with fresh ericaceous compost, and use a saucer of rain water to keep the roots from touching lime.',
      temperature:
        'A warm-room plant with a narrow comfort zone: 18-22 °C by day and, crucially, 15-18 °C at night while buds are forming; nights above 20 °C or below 13 °C make buds drop. Minimum 12 °C in winter. Not frost hardy, so outdoors in Denmark only in high summer, and never in a draught or against cold glass in winter.',
      humidity:
        'High humidity of 50-70 % is essential. Stand the pot on a wide tray of wet pebbles, group it with other plants, mist the leaves in the morning (not the open flowers, which brown) or run a humidifier in winter. Dry heated rooms cause brown leaf tips, bud drop and spider mite.',
      feeding:
        'An ericaceous (rhododendron) liquid feed every 2 weeks from April to September. Yellow leaves with green veins mean iron or magnesium deficiency from alkaline conditions; water with sequestered iron or a pinch of Epsom salts dissolved in rain water. No feeding from October to February.',
      pruning:
        'Prune lightly after flowering in September or in early spring, shortening leggy shoots by a third to keep a compact bush; flowers form on new growth. Remove faded flowers and yellow leaves promptly. Do not prune while in bud.',
      propagation:
        'Semi-ripe cuttings 8-10 cm long in July-August, dipped in rooting hormone and rooted in ericaceous compost with perlite under a plastic bag at 20-25 °C, root in 4-8 weeks.',
      problems:
        'Bud drop is the classic complaint, from temperature swings, dry air, dry or wet compost, or moving the plant. Yellow leaves (chlorosis) from hard water, cold roots or alkaline compost. Mealybugs, scale insects, aphids and whitefly, with sooty mould on the honeydew. Spider mite in dry air. Root rot in soggy compost. Sooty black mould on leaves follows the pests. Mildly toxic to cats and dogs if chewed, causing vomiting.',
      denmarkTips:
        'Buy a plant in bud in early summer and settle it at once in a bright east window in a room that stays 18-22 °C, with a pebble tray, and do not move it. Water only with rain water, which is easy to collect in Denmark, and feed with rhododendron fertilizer fortnightly from April to September. It can summer outdoors on a warm, lightly shaded, sheltered balcony from late June to late August. From October give it the brightest possible window and a humidifier or daily misting while the heating is on, and accept that it may drop some leaves in the dark months. Check under the leaves for mealybug and scale every few weeks. Prune lightly in March and repot into fresh ericaceous compost every second spring.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 8, note: 'Rain water; evenly moist, never soggy' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [4, 5, 6, 7, 8, 9], note: 'Ericaceous liquid feed' },
      { type: 'mist', intervalDays: 2, note: 'Mornings, leaves not flowers; use pebble tray' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Shorten leggy shoots by a third' },
      { type: 'repot', intervalDays: 730, months: [3, 4], note: 'Fresh ericaceous compost, slightly larger pot' },
      { type: 'check-pests', intervalDays: 21, note: 'Mealybug, scale, spider mite, yellow leaves' },
    ],
    tags: ['fragrant', 'houseplant', 'flowering', 'demanding'],
  },
  {
    id: 'lavandula-stoechas',
    commonName: 'French lavender',
    danishName: 'Skovlavendel',
    latinName: 'Lavandula stoechas',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Lavandula stoechas',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['needle', 'lance'],
      leafPattern: ['silver', 'plain'],
      flowerColor: ['purple', 'pink', 'white'],
      habit: ['shrub', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A compact evergreen lavender from the western Mediterranean, 40-60 cm tall, with narrow grey-green aromatic leaves and distinctive short, fat flower heads topped by showy purple, pink or white petal-like bracts that look like rabbit ears, flowering from May and repeating into September. Its scent is more resinous and camphor-like than English lavender and it is not used in cooking. It is sold everywhere in Danish garden centres in May but is only borderline hardy here, so it is best treated as a pot plant that comes under cover for winter.',
      watering:
        'Drought tolerant once established; water pots when the compost is dry a few centimetres down, every 3-5 days in a hot summer. Overwinter it almost dry, watering only every 3-4 weeks to stop the roots shrivelling. Wet roots in winter kill it faster than frost.',
      light:
        'Full sun all day, in the hottest spot you can offer; a south-facing balcony or terrace against a wall. In winter under cover it needs a bright, cool position such as an unheated greenhouse or a bright garage window.',
      soil:
        'Very free-draining, gritty, rather poor compost: multipurpose or John Innes mixed with a third grit or perlite, in a terracotta pot with crocks over the holes. Unlike English lavender it prefers neutral to slightly acid soil and dislikes lime.',
      temperature:
        'Hardy only to about -5 °C, briefly to -8 °C when dry, so it is not reliably hardy in Denmark (zone 7-8) and the combination of wet and frost in a normal Danish winter usually kills it in the ground. Grow it in a pot and move it into a cool, bright, frost-free place (0-10 °C) from November to April. On the mild coast of Bornholm or southern Funen it occasionally survives outdoors against a sunny wall under fleece.',
      feeding:
        'Very little. A half-strength liquid feed once a month from May to August is plenty for pots; too much food produces soft growth and fewer flowers. Nothing in winter.',
      pruning:
        'Deadhead the spent flower heads through summer, cutting back to the top of the foliage, which keeps it flowering until September. Give it a light overall trim after the main flush in July, never cutting into the old bare wood, which does not resprout. Do not prune hard in autumn; wait until April to tidy winter damage.',
      propagation:
        'Semi-ripe cuttings 8-10 cm long from non-flowering shoots in July-August root in gritty compost in 4-6 weeks; take some every year as insurance, since plants are short-lived. Seed sown indoors in March germinates in 2-4 weeks but gives variable plants.',
      problems:
        'Root rot and sudden collapse in cold wet compost, the plant going grey and brittle. Grey mould on dense growth in a damp winter under cover. Aphids and rosemary beetle (metallic striped beetles eating leaves) in summer. Froghoppers (cuckoo spit) are harmless. Spider mite indoors. Leggy plants that split open have been fed or watered too much or not trimmed. Lavender is mildly toxic to cats and dogs if they eat much of it.',
      denmarkTips:
        'Buy in May and plant it into a terracotta pot with gritty compost, standing it in the sunniest spot on the balcony or terrace from mid-May to October. Deadhead regularly and it will flower from May to September, drawing bees and butterflies; the dried heads are good for pot-pourri but not for cooking. Take cuttings in August. Before the first frosts in late October or November move it to an unheated greenhouse, a cold frame, a bright shed window or a cool stairwell, and water only once a month. Trim and bring it back out in late April or May, hardening it off for a week. If you plant it in the ground, accept it as a one-season annual in most Danish gardens.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 25, note: 'Dry out between waterings; nearly dry in winter' },
      { type: 'fertilize', intervalDays: 30, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Half-strength feed, sparingly' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Pot into full sun after mid-May' },
      { type: 'deadhead', intervalDays: 14, months: [6, 7, 8, 9], note: 'Cut spent heads to the top of the foliage' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'Cool, bright, frost-free place before frost' },
      { type: 'check-pests', intervalDays: 21, months: [5, 6, 7, 8, 9], note: 'Rosemary beetle, aphids, rot at the base' },
    ],
    tags: ['fragrant', 'aromatic', 'balcony', 'pollinator-friendly'],
  },
  {
    id: 'aloysia-citrodora',
    commonName: 'Lemon verbena',
    danishName: 'Citronverbena',
    latinName: 'Aloysia citrodora',
    family: 'Verbenaceae',
    category: 'both',
    wikipediaTitle: 'Aloysia citrodora',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['lance'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'purple'],
      habit: ['shrub', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A deciduous shrub from South America, 60-150 cm in a pot, with narrow, rough, pale green leaves in threes that carry the purest, most intense lemon scent of any herb, used for tea, syrups, ice cream and to scent sugar. Sprays of tiny white to pale lilac flowers appear in late summer. It is tender and in Denmark lives in a large pot, outside from late May and overwintering leafless in a cool frost-free place. The dried leaves keep their scent for years.',
      watering:
        'Water pots thoroughly when the top few centimetres dry out, about every 2-3 days in a hot summer, since it has a lot of leaf and wilts quickly. Once it drops its leaves in autumn, water only every 3-4 weeks through winter, just enough to keep the roots from desiccating. Resume gradually when buds break in April-May.',
      light:
        'Full sun, as hot and sheltered as possible; against a south wall, on a sunny balcony or in the greenhouse. The lemon oil content and compactness depend on sun. Dormant plants in winter do not need light.',
      soil:
        'Free-draining, moderately fertile compost: multipurpose with a quarter grit or perlite, in a pot of 30 cm or more. Repot or refresh the top layer every spring in April as growth starts.',
      temperature:
        'Frost tender; leaves drop at the first light frost and the stems are killed by about -5 °C, roots a little lower if dry. In Denmark grow it in a pot outdoors from late May to early October, then store it dormant in a frost-free place at 0-10 °C, such as an unheated greenhouse, garage or cellar; it can be dark once leafless. Alternatively keep it leafy on a cool bright windowsill, but it tends to get whitefly there.',
      feeding:
        'A balanced liquid feed every 2 weeks from May to August for strong leafy growth; stop in September to harden the stems before storage. Nothing in winter.',
      pruning:
        'Cut back hard in April as the buds break, shortening last year\'s stems by half to two thirds to a framework, since it flowers and leafs best on new wood and gets gangly otherwise. Pinch tips in June to encourage bushiness. Do not be alarmed if it is very late into leaf; it often waits until mid-May.',
      propagation:
        'Softwood cuttings 8-10 cm long in June-July root in a few weeks in gritty compost with a plastic bag over the pot. Semi-ripe cuttings in August also work. Take cuttings each summer as insurance against a failed winter.',
      problems:
        'Whitefly is the main pest, swarming from the undersides of leaves when disturbed, especially on plants kept in leaf indoors or in a greenhouse. Spider mite in hot dry conditions makes leaves speckled and dull. Aphids on tips. Root rot if the dormant plant is kept wet in winter. Leaf drop in autumn is natural dormancy, not disease. Failure to leaf out until late May is normal; give it until June before giving up.',
      denmarkTips:
        'Buy a plant in May and pot it into a 30 cm or larger container in the sunniest, warmest corner of the terrace or balcony from late May. Harvest leaves from June to September; strip and dry them on a tray in a warm airy room for a week, then store in jars for a winter of lemon tea, or use fresh in syrup and ice cream. Cut a big batch for drying in late August. Stop feeding in September and bring the pot into a frost-free garage, cellar or unheated greenhouse before the first frost in early to mid-October, letting it drop its leaves. Water once a month. Prune hard and move to a bright spot in April, outdoors again after mid-May. Check for whitefly whenever it is under glass.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 25, note: 'Freely in leaf; barely at all when dormant' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Balanced liquid feed' },
      { type: 'prune', intervalDays: 365, months: [4], note: 'Cut back hard to a framework as buds break' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Pot into full sun after mid-May' },
      { type: 'harvest', intervalDays: 7, months: [6, 7, 8, 9], note: 'Leaves for tea; dry a big batch in August' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'Frost-free garage or greenhouse; it goes dormant' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Whitefly under leaves, spider mite' },
    ],
    tags: ['herb', 'aromatic', 'fragrant', 'edible', 'balcony', 'tea'],
  },
]
