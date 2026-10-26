import type { Plant } from '../../types'

export const part4: Plant[] = [
  {
    id: 'aglaonema-commutatum',
    commonName: 'Chinese evergreen',
    danishName: 'Aglaonema',
    latinName: 'Aglaonema commutatum',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Aglaonema commutatum',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['lance', 'oval'],
      leafPattern: ['variegated', 'silver', 'coloured'],
      flowerColor: ['none'],
      habit: ['bushy', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'One of the most shade-tolerant houseplants, forming a neat clump of lance-shaped leaves marbled in silver, grey-green, cream or, in modern cultivars, pink and red. It grows slowly, forgives irregular watering and copes with the dim corners of a Danish flat better than almost anything else. The sap contains calcium oxalate and irritates mouth and skin.',
      watering:
        'Water when the top 3-4 cm of soil are dry, about every 7-10 days in summer and every 2-3 weeks in winter. It prefers slightly dry to soggy; yellowing lower leaves and a sour smell from the soil mean overwatering.',
      light:
        'Green and silver forms are happy in low to medium light, even a north window or a couple of metres from a window. Pink and red cultivars need brighter indirect light to keep their colour. Direct sun scorches the leaves.',
      soil: 'A general potting compost mixed with a quarter perlite or bark so it drains well.',
      temperature:
        'Likes 18-26 C and should not fall below about 15 C. Cold draughts and temperatures around 10 C cause greasy dark patches and yellowing on the leaves.',
      humidity:
        'Average room humidity is acceptable, but it looks better at 50 % or more. Brown tips signal very dry air.',
      feeding:
        'Feed every 4 weeks from April to September with a half-strength balanced liquid fertilizer. No feeding in winter.',
      repotting:
        'Repot every 2-3 years in spring; it grows slowly and likes being slightly pot-bound. Divide crowded clumps at the same time.',
      pruning:
        'Remove yellowed lower leaves at the base and cut off the insignificant green flower spathes so energy goes into the foliage. Leggy old stems can be cut back in spring and will resprout.',
      propagation:
        'Divide clumps at repotting, making sure each piece has roots. Stem cuttings with a few leaves also root in water or moist compost in a warm place.',
      problems:
        'Mealybugs gather at leaf bases as white fluff and scale insects as brown bumps on stems; spider mites appear in dry warm rooms. Root rot from cold, wet soil causes yellow leaves and soft stems. Brown, crispy leaf edges mean dry air or salt build-up; curling leaves with greasy patches mean cold damage.',
      denmarkTips:
        'Aglaonema is one of the best plants for the dark Danish winter because it tolerates low light so well; keep it in its usual position but water only every 2-3 weeks from November to February and make sure the soil is not cold and wet. Keep it well away from cold draughts and never on a windowsill that gets cold at night; an interior shelf or table is safer. Dry air from radiators browns the leaf tips, so wipe the leaves monthly and use a pebble tray. It stays indoors all year; Danish summer nights are too cool for it outside.',
    },
    tasks: [
      { type: 'water', intervalDays: 8, winterIntervalDays: 16, note: 'Water when top 4 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'wipe-leaves', intervalDays: 28, note: 'Damp cloth; check leaf bases for mealybugs' },
      { type: 'rotate', intervalDays: 21, note: 'Turn for even growth' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Divide crowded clumps; one size up' },
    ],
    tags: ['low-light', 'beginner', 'variegated', 'air-purifying'],
  },
  {
    id: 'maranta-leuconeura',
    commonName: 'Prayer plant',
    danishName: 'Bedeplante',
    latinName: 'Maranta leuconeura',
    family: 'Marantaceae',
    category: 'indoor',
    wikipediaTitle: 'Maranta leuconeura',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['striped', 'coloured', 'variegated'],
      flowerColor: ['white', 'purple'],
      habit: ['trailing', 'groundcover'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A low, spreading plant with beautifully patterned oval leaves, dark green with lighter feathered markings and red or pink veins, purple underneath. Its leaves fold upward at night like praying hands and open again in the morning. Small white-purple flowers appear occasionally. It is pet-safe but needs steady moisture and humidity.',
      watering:
        'Keep the soil evenly moist but not wet, watering when the surface starts to dry, every 4-6 days in summer and every 7-10 days in winter. It is sensitive to hard, cold tap water, which browns the leaf edges, so use rainwater, filtered water or tap water left to stand overnight at room temperature.',
      light:
        'Medium to bright indirect light; an east or north window or a position back from a brighter window. Direct sun bleaches the pattern and scorches the leaves.',
      soil: 'A light, peat-free potting compost with perlite or bark, moisture-retentive but free-draining.',
      temperature:
        'Prefers 18-25 C and should stay above 15 C. Cold draughts and temperatures around 10 C damage the leaves.',
      humidity:
        'Needs 50-60 % humidity or more. Group it with other plants, stand it on a pebble tray or use a humidifier, and mist on dry days; curling, crispy-edged leaves mean the air is too dry.',
      feeding:
        'Feed every 2-4 weeks from April to September with a quarter- to half-strength balanced liquid fertilizer. It is sensitive to over-feeding. No feeding in winter.',
      repotting:
        'Repot every 1-2 years in spring into a shallow, slightly wider pot, as the roots are shallow and spreading.',
      pruning:
        'Trim leggy stems just above a node in spring to keep the plant compact and bushy, and remove any brown or faded leaves at the base.',
      propagation:
        'Stem cuttings with a node and 2-3 leaves root easily in water or moist compost in a warm, humid spot. Clumps can also be divided at repotting.',
      problems:
        'Spider mites are the chief enemy in dry rooms, causing speckled, faded leaves and fine webbing underneath. Mealybugs and fungus gnats also occur. Brown, crispy leaf tips and edges mean dry air or hard water; yellow leaves and limp stems mean overwatering or cold; faded pattern means too much light.',
      denmarkTips:
        'The dry radiator air of a Danish winter is this plant\'s biggest problem: keep it well away from heaters, raise the humidity with a pebble tray or humidifier and mist on dark mornings, and check weekly for spider mites. Light is less critical, but move it a little closer to the window from November to February and water less, using room-temperature water so the roots are never cold and wet. Keep it off a cold windowsill at night and away from the draught of opened windows. A bright bathroom is often the best winter home. It stays indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 9, note: 'Keep evenly moist with room-temperature soft water' },
      { type: 'mist', intervalDays: 2, note: 'Mist or top up pebble tray; aim for 50-60 % humidity' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, note: 'Quarter- to half-strength liquid feed' },
      { type: 'check-pests', intervalDays: 7, note: 'Check leaf undersides for spider mites' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Shallow wide pot, light moisture-retentive mix' },
    ],
    tags: ['pet-safe', 'patterned-foliage', 'humidity-lover', 'low-light'],
  },
  {
    id: 'saintpaulia-ionantha',
    commonName: 'African violet',
    danishName: 'Afrikansk viol',
    latinName: 'Saintpaulia ionantha',
    family: 'Gesneriaceae',
    category: 'indoor',
    wikipediaTitle: 'Streptocarpus sect. Saintpaulia',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['round', 'oval'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['purple', 'blue', 'pink', 'white', 'mixed'],
      habit: ['rosette'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A compact rosette of velvety, rounded leaves topped by clusters of violet-like flowers in purple, blue, pink, white or bicolours, able to bloom almost all year round on a windowsill. It is pet-safe and small enough for the narrowest ledge. Its needs are specific but simple: steady warmth, bright indirect light and careful watering.',
      watering:
        'Water with room-temperature water when the top of the soil feels dry, roughly every 5-7 days year-round, slightly less in deep winter. Water from below by standing the pot in a saucer for 20 minutes, or pour carefully under the leaves; cold water on the leaves causes pale spots and water in the crown causes rot. Never let it sit in water.',
      light:
        'Bright indirect light for 10-12 hours a day keeps it flowering; an east window is perfect, and a north window works in summer. Hot direct sun scorches the leaves. It also does very well under an LED grow light or an ordinary bright desk lamp.',
      soil:
        'A very light, airy mix: peat-free compost with plenty of perlite and vermiculite, or a ready-made African violet mix. Use a pot about a third the width of the leaf rosette; it flowers best when snug.',
      temperature:
        'Likes a steady 18-24 C and sulks below 15 C. Cold draughts and chilly windowsills cause slow growth and leaf damage; avoid big temperature swings.',
      humidity:
        'Prefers moderate humidity around 50 %, but never mist the hairy leaves. Group plants together or stand the pot on a pebble tray.',
      feeding:
        'Feed every 2 weeks year-round with a quarter-strength balanced or high-phosphorus liquid fertilizer, since it never truly rests. Flush the soil with plain water every couple of months to prevent salt build-up.',
      repotting:
        'Repot once a year into fresh mix, usually in the same small pot, burying the bare neck that forms as lower leaves are removed. Remove side shoots (suckers) to keep a single crown and better flowering.',
      pruning:
        'Pinch off spent flowers and the whole stalk, and remove the oldest, tired lower leaves to keep a neat rosette of 3-5 rows of leaves.',
      propagation:
        'Leaf cuttings are easy: cut a healthy leaf with 2-3 cm of stalk, push the stalk into moist perlite mix, and keep warm and bright; small plants appear at the base in 2-3 months.',
      problems:
        'Mealybugs nest in the crown and leaf bases as white fluff; cyclamen mites cause distorted, hairy, stunted centre leaves; thrips spill pollen and streak the flowers. Powdery mildew dusts flowers and leaves white in cool, stuffy conditions. Crown rot from water in the centre and root rot from soggy soil make the plant collapse. Pale ring spots are from cold water on the leaves; leggy, non-flowering plants need more light.',
      denmarkTips:
        'African violets are made for Danish windowsills, but the November-February darkness stops flowering unless you help: move the plant to the brightest east or south window or put it under a small grow light or bright lamp for 12 hours a day, and it will keep blooming all winter. Avoid cold windowsills at night, as leaves touching an icy pane blacken; slide a piece of cork or cardboard underneath or move it onto a table in frosty spells. Radiator air directly below a sill is drying, so use a pebble tray. Water a bit less when days are short, always with room-temperature water. It stays indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 8, note: 'Water from below with room-temperature water; keep crown dry; drain after 20 min' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 21, note: 'Quarter-strength feed year-round; flush with plain water every 2 months' },
      { type: 'deadhead', intervalDays: 7, note: 'Pinch off spent flower stalks and tired lower leaves' },
      { type: 'check-pests', intervalDays: 14, note: 'Look for mealybugs in the crown and mildew on leaves' },
      { type: 'repot', intervalDays: 365, months: [3, 4], note: 'Fresh airy mix in the same small pot; bury the bare neck' },
    ],
    tags: ['flowering', 'pet-safe', 'small-space', 'windowsill'],
  },
  {
    id: 'citrus-limon',
    commonName: 'Lemon tree',
    danishName: 'Citrontræ',
    latinName: 'Citrus × limon',
    family: 'Rutaceae',
    category: 'both',
    wikipediaTitle: 'Lemon',
    difficulty: 'demanding',
    toxicity: 'mildly-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['tree', 'shrub'],
      size: 'medium',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A small evergreen tree with glossy, aromatic leaves, intensely fragrant white flowers and, with luck and sun, real lemons that take up to a year to ripen. Pot-grown lemons (often the compact Meyer type) are increasingly popular in Denmark, but they are demanding: they need a very sunny summer outdoors and a cool, bright, frost-free winter indoors.',
      watering:
        'Water thoroughly when the top 3-5 cm of soil are dry, then let it drain completely. In summer outdoors this may be every 2-4 days in a hot spell; in a cool winter spot every 2-3 weeks. Both drought and waterlogging cause leaf drop. Use rainwater or soft water if possible, as citrus dislike very hard tap water.',
      light:
        'Full sun, at least 6-8 hours a day, in summer. In winter it still wants the brightest window you have, ideally south-facing, or a bright conservatory. Dark winter positions in warm rooms cause heavy leaf drop.',
      soil:
        'A free-draining, slightly acidic citrus compost, or good potting compost with a quarter coarse sand or perlite and some bark. Use a terracotta pot with drainage holes.',
      temperature:
        'Grows at 18-30 C in summer. Overwinter cool at 5-12 C with good light; it tolerates brief dips to about 0 C but is not frost hardy, and a lemon in a warm (20 C) dark room in winter drops its leaves. The combination of warm roots and dark air is the main killer.',
      humidity:
        'Moderate humidity is fine. In a warm dry room in winter, mist the leaves or use a pebble tray and watch closely for spider mites.',
      feeding:
        'Feed every 1-2 weeks from March to September with a dedicated citrus fertilizer containing iron, magnesium and other trace elements; general feeds cause yellowing between the veins. Feed monthly at most during the cool winter rest.',
      repotting:
        'Repot every 2-3 years in spring into a pot one size larger, keeping the graft union above the soil. In between, replace the top layer of compost each spring.',
      pruning:
        'Prune lightly in spring to shape the tree and remove crossing, dead or inward-growing branches. Pinch out vigorous water shoots and cut off any suckers from below the graft. Thin the fruit on young trees to a few per branch.',
      propagation:
        'Usually bought as grafted plants. Semi-ripe cuttings in summer root with bottom heat but are slow; seedlings from pips take many years to fruit and may not be true to type.',
      problems:
        'Scale insects (brown bumps on stems and leaf undersides with sticky honeydew and sooty mould), mealybugs, spider mites and aphids are all common, especially in winter indoors. Yellow leaves with green veins mean iron or magnesium deficiency from the wrong fertilizer or hard water. Sudden massive leaf drop follows a move to a warm dark room, cold draughts or waterlogging. Root rot from soggy, cold soil is fatal.',
      denmarkTips:
        'The Danish lemon-growing year: from late May (after the last frost, usually around 15 May) to late September the tree lives outdoors in the sunniest, most sheltered spot on the balcony or terrace, where it flowers, sets fruit and grows; harden it off in dappled shade for a week first to avoid sunburn. In late September or early October, before the first night frost, bring it into the coolest bright room you have (5-12 C), such as an unheated conservatory, stairwell or a cold bedroom with a south window; here it rests with very little water through the dark November-February period. Avoid the living room with its radiators and darkness, which is the classic reason Danish lemons lose their leaves. If you only have a warm room, give it a strong grow light for 10-12 hours a day and keep it off the radiator. Check for scale and spider mites every week in winter.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 16, note: 'Water when top 5 cm are dry, drain fully; very little in cool winter rest' },
      { type: 'fertilize', intervalDays: 10, winterIntervalDays: 0, note: 'Citrus fertilizer with trace elements, March-September' },
      { type: 'check-pests', intervalDays: 7, note: 'Inspect stems and leaf undersides for scale, mealybugs and spider mites' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Light shaping; remove suckers below the graft' },
      { type: 'repot', intervalDays: 730, months: [3, 4], note: 'Citrus compost, one size up; graft above soil' },
      { type: 'plant-out', intervalDays: 365, months: [5, 6], note: 'Out after mid-May frost risk; harden off in shade for a week' },
      { type: 'bring-inside', intervalDays: 365, months: [9, 10], note: 'In before first frost to a cool, bright room (5-12 C)' },
    ],
    tags: ['edible', 'balcony', 'fragrant', 'flowering', 'statement-plant'],
  },
  {
    id: 'chamaedorea-elegans',
    commonName: 'Parlour palm',
    danishName: 'Stuepalme',
    latinName: 'Chamaedorea elegans',
    family: 'Arecaceae',
    category: 'indoor',
    wikipediaTitle: 'Chamaedorea elegans',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['compound', 'fern-frond'],
      leafPattern: ['plain'],
      flowerColor: ['yellow', 'none'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A graceful small palm with slender green stems and arching, feathery fronds, usually sold as a clump of several seedlings. It has been a popular houseplant since Victorian times because it tolerates low light, average humidity and some neglect, and it is safe for pets. Mature plants may produce sprays of tiny yellow bead-like flowers. It slowly reaches about 1 m indoors.',
      watering:
        'Water when the top 3 cm of soil are dry, roughly every 7 days in summer and every 2 weeks in winter. Keep the soil lightly moist but never soggy; the fine roots rot easily in wet compost and brown fronds follow. Let the pot drain and empty the saucer.',
      light:
        'Low to medium indirect light is fine; a north or east window or a spot a few metres from a brighter window. Direct sun yellows and scorches the fronds. It is one of the few palms genuinely happy in a dim corner.',
      soil: 'A peat-free general potting compost with some perlite or bark for drainage.',
      temperature:
        'Comfortable at 16-24 C. It tolerates down to about 10 C for short spells but dislikes cold draughts and must not freeze.',
      humidity:
        'Average room humidity is acceptable, though it looks best at 40-50 %. Brown frond tips indicate dry air; a pebble tray or occasional misting helps in winter.',
      feeding:
        'Feed every 4 weeks from April to September with a half-strength balanced liquid fertilizer. Over-feeding browns the tips. No feeding in winter.',
      repotting:
        'Repot only every 2-3 years in spring, as it has delicate roots and prefers a snug pot. Handle the root ball gently and do not tease the roots apart.',
      pruning:
        'Cut off entirely brown fronds at the base. Trim brown tips with scissors, leaving a thin brown margin so the cut does not spread. Never cut the growing tip of a stem, as the stem will die.',
      propagation:
        'Grown from seed, which is slow. Clumps can be carefully separated at repotting, but each stem has few roots and divisions often sulk.',
      problems:
        'Spider mites are the main pest, causing yellow speckling, dull fronds and fine webbing in dry heated rooms; mealybugs and scale appear along the stems and frond undersides. Brown frond tips mean dry air, hard water or fertilizer salts; yellow fronds mean too much sun or overwatering. Root rot from soggy soil causes stems to collapse at the base.',
      denmarkTips:
        'The parlour palm handles the dark Danish winter well since it never needed much light, but radiator air is its weakness: keep it away from heaters, mist or use a pebble tray during the heating season, and check the fronds weekly for spider mites. Water much less from November to February, letting the top few centimetres dry out, since cold wet soil rots the roots. Keep it out of draughts from windows opened for airing and not on a windowsill that gets cold at night. It can stand in a shaded, sheltered balcony corner from June to August, out of wind and direct sun, but it is just as happy staying indoors.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 14, note: 'Water when top 3 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'mist', intervalDays: 4, note: 'Mist fronds or top up pebble tray during heating season' },
      { type: 'check-pests', intervalDays: 14, note: 'Check fronds for spider mite speckling and webbing' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Snug pot, handle roots gently' },
    ],
    tags: ['pet-safe', 'low-light', 'beginner', 'palm', 'air-purifying'],
  },
]
