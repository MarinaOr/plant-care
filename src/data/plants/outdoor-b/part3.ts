import type { Plant } from '../../types'

export const part3: Plant[] = [
  {
    id: 'rheum-rhabarbarum',
    commonName: 'Rhubarb',
    danishName: 'Rabarber',
    latinName: 'Rheum rhabarbarum',
    family: 'Polygonaceae',
    category: 'outdoor',
    wikipediaTitle: 'Rhubarb',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['heart', 'round'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'green'],
      habit: ['clumping', 'rosette'],
      size: 'large',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A long-lived perennial vegetable with huge heart-shaped leaves on thick red or green stalks, ready to harvest from April and one of the first crops of the Danish year. A single crown can produce for 15-20 years. Only the stalks are eaten; the leaves contain high levels of oxalic acid and are toxic. Common Danish varieties include \'Victoria\', \'Rosara\' and \'Elmsblitz\'.',
      watering:
        'Water generously in dry spells, since the enormous leaves lose a lot of moisture and stalks turn thin and stringy in drought. Newly planted crowns need weekly watering the first summer. Dormant crowns need nothing in winter.',
      light:
        'Full sun or light shade. Afternoon shade is fine and helps in a hot, dry spell.',
      soil:
        'Deep, rich, moisture-retentive but well-drained soil with plenty of manure or compost. Crowns rot in standing water, so improve heavy clay with compost and plant on a slight mound.',
      temperature:
        'Extremely hardy; rhubarb needs frost to break dormancy and shrugs off -30 °C. No protection needed anywhere in Denmark. Growth starts in March and the plant goes dormant after the first autumn frosts.',
      feeding:
        'A greedy plant: mulch thickly with well-rotted manure or compost in late autumn or early spring, keeping it off the crown itself. Add a general fertilizer in March for extra vigour.',
      pruning:
        'Cut off flower stalks as soon as they appear in May-June so energy goes into the leaves. Remove dead leaves in autumn once they have collapsed. Do not harvest at all the first year and lightly the second.',
      propagation:
        'Divide crowns every 5-8 years in November-March when dormant: lift, split with a spade so each piece has at least one bud, and replant 1 m apart with the bud just at soil level.',
      problems:
        'Crown rot from wet soil turns the base brown and soft, and the plant collapses. Slugs and Spanish slugs (dræbersnegle) shred young leaves in spring. Honey fungus can kill old crowns. Flowering (bolting) in hot dry weather weakens the plant; cut stalks out. Thin, weak stalks mean the crown is hungry, dry or needs dividing.',
      denmarkTips:
        'Plant crowns in October-November or March, 1 m apart, in well-manured soil. Harvest from April to late June by pulling (not cutting) stalks from the base, taking no more than a third at a time; stop harvesting after Sankt Hans (24 June) so the crown recovers, though Danish gardeners often take a few stalks until August. Cover a crown with a bucket in February for early, pale, tender stalks. Mulch thickly with manure in November. Compost the leaves safely, they are only toxic to eat. Divide tired crowns in late autumn.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Deeply in dry spells; the big leaves lose a lot' },
      { type: 'fertilize', intervalDays: 365, months: [3] },
      { type: 'mulch', intervalDays: 365, months: [11], note: 'Thick layer of manure, not on the crown' },
      { type: 'harvest', intervalDays: 7, months: [4, 5, 6], note: 'Pull stalks; take at most a third' },
      { type: 'divide', intervalDays: 1825, months: [11, 3], note: 'Every 5-8 years when dormant' },
      { type: 'check-pests', intervalDays: 14, months: [4, 5, 6], note: 'Slugs on young leaves; remove flower stalks' },
    ],
    tags: ['edible', 'vegetable', 'allotment', 'perennial'],
  },
  {
    id: 'mentha-spicata',
    commonName: 'Spearmint',
    danishName: 'Mynte',
    latinName: 'Mentha spicata',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Mentha spicata',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade', 'bright-indirect'],
    traits: {
      leafShape: ['lance', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['purple', 'pink', 'white'],
      habit: ['upright', 'groundcover', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A vigorous perennial herb with aromatic, toothed lance-shaped leaves and spikes of pale purple flowers in July-August, loved by bees. Its running roots spread aggressively and will take over a bed, so it is nearly always grown in a pot or a sunken bucket. Classic for tea, new potatoes and mojitos. Dies back in winter and resprouts in April.',
      watering:
        'Mint likes consistently moist soil and wilts fast in a dry pot; water every 1-2 days in summer, less in cool weather. Indoors on a windowsill in winter, water weekly when the top of the compost dries. Never let it sit in a saucer of water for days.',
      light:
        'Grows in sun or partial shade outdoors; afternoon shade keeps the leaves lush and reduces watering. Indoors give the brightest window available, preferably south or west, or it grows leggy and pale.',
      soil:
        'Rich, moist, well-drained potting compost or garden soil with compost added. Not fussy about pH. Use a pot at least 25-30 cm wide.',
      temperature:
        'Fully hardy in Denmark; the roots survive -20 °C in the ground and in a decent-sized pot. Top growth dies at frost and regrows in spring. Indoors it grows in a cool room at 15-20 °C; a windowsill pot can be kept producing lightly all winter.',
      feeding:
        'Feed potted mint with liquid fertilizer every 2-3 weeks from May to August, since frequent cutting removes nutrients. In the ground a compost mulch in spring is enough.',
      pruning:
        'Cut stems back frequently, harvesting the top third, to keep plants bushy and prevent flowering, which makes leaves less flavourful. Cut the whole plant to 5 cm in July after flowering for a fresh flush, and cut dead stems to the ground in late autumn.',
      propagation:
        'Almost too easy: any piece of root with a bud grows, stem cuttings root in a glass of water in a week, and clumps can be divided in spring or autumn. Repot or divide potted mint every spring, as it fills the pot with roots and exhausts itself.',
      problems:
        'Mint rust shows as orange pustules on the undersides of leaves and distorted pale shoots; cut all growth to the ground and destroy it, and replace badly infected plants. Powdery mildew in dry, crowded conditions. Aphids and spider mite on indoor plants. Slugs nibble young spring shoots. Invasiveness is the real problem: roots escape pots through drainage holes.',
      denmarkTips:
        'Buy a plant or take a root piece from a friend in April-May and grow it in a large pot or an old bucket sunk into the bed with the rim above soil. Harvest from May to September, cutting hard in July. Pot a few root pieces in September and bring them onto a bright kitchen windowsill for winter leaves. Leave the outdoor pot in a sheltered corner over winter; it will resprout in April. Divide and repot into fresh compost every spring. Watch for rust from June and for slugs in wet springs.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 7, note: 'Keep moist; wilts fast in a pot' },
      { type: 'fertilize', intervalDays: 21, months: [5, 6, 7, 8], note: 'Liquid feed for potted plants' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9], note: 'Cut the top third; cut hard in July' },
      { type: 'divide', intervalDays: 365, months: [4], note: 'Repot or divide; refresh compost' },
      { type: 'bring-inside', intervalDays: 365, months: [9, 10], note: 'Pot root pieces for a winter windowsill' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Rust on leaf undersides, aphids' },
    ],
    tags: ['herb', 'edible', 'balcony', 'windowsill', 'pollinator-friendly'],
  },
  {
    id: 'allium-schoenoprasum',
    commonName: 'Chives',
    danishName: 'Purløg',
    latinName: 'Allium schoenoprasum',
    family: 'Amaryllidaceae',
    category: 'both',
    wikipediaTitle: 'Chives',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'partial-shade', 'bright-indirect'],
    traits: {
      leafShape: ['grass-like'],
      leafPattern: ['plain'],
      flowerColor: ['purple', 'pink'],
      habit: ['clumping', 'bulb', 'upright'],
      size: 'small',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A hardy clump-forming perennial with hollow, grass-like onion-flavoured leaves 20-40 cm tall and pretty mauve pompom flowers in May-June that bees love and that are edible too. One of the easiest and earliest herbs in Denmark, appearing in March and lasting to November. Like other alliums it is mildly toxic to cats and dogs in quantity, but harmless for people.',
      watering:
        'Keep soil moist but not waterlogged; chives flag and the tips yellow when dry. Pots need water every 2-3 days in summer. Indoors in winter water about weekly.',
      light:
        'Full sun to partial shade outdoors. On a windowsill the brightest spot available; growth is thin in low winter light but still useful.',
      soil:
        'Any fertile, well-drained garden soil or multipurpose compost. Tolerates clay. Add compost each spring.',
      temperature:
        'Fully hardy, to -30 °C; the clump dies back in winter and resprouts in March without any protection. A pot brought indoors in autumn after a cold spell will produce fresh leaves on a cool windowsill through winter.',
      feeding:
        'A little general fertilizer or compost in spring, and a liquid feed every few weeks for pots that are cut often. Over-feeding makes leaves floppy and bland.',
      pruning:
        'Cut leaves to 3-5 cm above the ground with scissors, a section of the clump at a time, so it keeps regrowing. Shear the whole clump down after flowering in June to get fresh new growth and prevent self-seeding. Remove dead leaves in late autumn.',
      propagation:
        'Divide clumps in March-April or September every 3-4 years into fist-sized pieces. Easily sown from seed indoors in March or outdoors in April-May; germination is slow.',
      problems:
        'Very few. Onion rust shows as orange spots on leaves in a damp summer; cut down and dispose of affected growth. Thrips make silvery streaks. Allium leaf miner and onion fly can hollow out stems in some years. Clumps that get congested produce thin leaves and need dividing. Downy mildew in wet weather.',
      denmarkTips:
        'Sow indoors in March or buy a plant in April; plant out in May. Start cutting as soon as leaves are 15 cm in April, and cut the whole clump back after flowering in June for a second flush. Divide every 3-4 years in spring or September. In October, dig up or pot a small clump, leave it outside through a few frosts, then bring it to a bright windowsill for winter purløg. Leave the main clump in the ground; it survives any Danish winter. Let a few flowers open for the bees and for salads.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 7, note: 'Keep evenly moist' },
      { type: 'fertilize', intervalDays: 28, months: [4, 5, 6, 7, 8], note: 'Light liquid feed for pots' },
      { type: 'harvest', intervalDays: 7, months: [4, 5, 6, 7, 8, 9, 10], note: 'Cut 3-5 cm above soil, a section at a time' },
      { type: 'prune', intervalDays: 365, months: [6], note: 'Shear whole clump after flowering' },
      { type: 'divide', intervalDays: 1095, months: [3, 4, 9], note: 'Every 3-4 years' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'Pot a clump for the winter windowsill after a frost' },
    ],
    tags: ['herb', 'edible', 'balcony', 'windowsill', 'pollinator-friendly'],
  },
  {
    id: 'petroselinum-crispum',
    commonName: 'Parsley',
    danishName: 'Persille',
    latinName: 'Petroselinum crispum',
    family: 'Apiaceae',
    category: 'both',
    wikipediaTitle: 'Parsley',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade', 'bright-indirect'],
    traits: {
      leafShape: ['compound', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['green', 'yellow'],
      habit: ['clumping', 'rosette', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A biennial herb grown as an annual, forming a rosette 20-30 cm tall of deeply divided leaves, either tightly curled (kruspersille) or flat Italian (bredbladet persille), which has the stronger flavour. In the second year it sends up yellow-green umbels of flowers and dies. Rich in vitamin C and an indispensable Danish kitchen herb, from persillesovs to new potatoes.',
      watering:
        'Keep the soil consistently moist; parsley bolts and yellows if it dries out repeatedly. Pots need watering every 1-2 days in summer. Supermarket pots are crammed with seedlings and dry out in a day; split them into 3-4 clumps and repot. Indoors in winter water every 5-7 days.',
      light:
        'Full sun to partial shade outdoors; light shade in midsummer keeps leaves tender. On a windowsill it needs the brightest spot, ideally south-facing, and still grows slowly from November to February.',
      soil:
        'Deep, rich, moisture-retentive soil or good multipurpose compost; it has a long taproot so use a pot at least 20 cm deep. Slightly acidic to neutral pH.',
      temperature:
        'Hardier than most people expect: established plants survive -10 °C and often stay green under snow in a Danish winter, especially flat-leaf types in a sheltered spot. Seedlings are tender to frost. Indoors grow it cool, 12-18 °C; a hot room makes it leggy.',
      feeding:
        'Liquid feed every 2-3 weeks through summer for pots that are cut often. In the ground a compost-enriched bed usually suffices. Yellowing older leaves are normal; yellowing all over means hunger or wet roots.',
      pruning:
        'Harvest the outer stems at the base, leaving the central growing point. Cut out any flower stems in the second year to prolong leaf production, or let it flower for the beneficial insects and then replace it.',
      propagation:
        'From seed only. Germination is notoriously slow (3-4 weeks); soak seed overnight and sow in warmth indoors in March or direct in April-May and again in July for winter plants. Self-sows readily if allowed to flower.',
      problems:
        'Carrot fly larvae tunnel into the root, causing reddish wilting leaves. Aphids cluster on new growth. Slugs demolish seedlings. Leaf spot (Septoria) gives brown spots with pale centres. Crown and root rot in wet, cold soil. Bolting in the first year is caused by stress from drought, heat or root disturbance. Parsley is a food plant for some caterpillars, which can be relocated to wild cow parsley.',
      denmarkTips:
        'Sow indoors in March at 20 °C and plant out after mid-May, or sow direct in April-May; a second sowing in July gives plants that stand through winter. Buy supermarket pots, divide and repot them into several pots for a quick start. Harvest the outer stems from June to November; the plant often survives the winter outdoors under fleece or in a cold frame and gives early leaves in March before flowering. Bring a pot onto a cool bright windowsill in October. Protect seedlings from slugs and use fleece against carrot fly if it has been a problem.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 6, note: 'Never let it dry out; it bolts' },
      { type: 'fertilize', intervalDays: 21, months: [5, 6, 7, 8, 9], note: 'Liquid feed for pots' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'After mid-May; sow again in July for winter' },
      { type: 'harvest', intervalDays: 5, months: [4, 5, 6, 7, 8, 9, 10, 11], note: 'Outer stems at the base' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'A pot on a cool bright windowsill' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Slugs, aphids, carrot fly' },
    ],
    tags: ['herb', 'edible', 'balcony', 'windowsill'],
  },
  {
    id: 'ocimum-basilicum',
    commonName: 'Basil',
    danishName: 'Basilikum',
    latinName: 'Ocimum basilicum',
    family: 'Lamiaceae',
    category: 'both',
    wikipediaTitle: 'Basil',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['white', 'purple'],
      habit: ['bushy', 'upright'],
      size: 'small',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A tender annual herb from the tropics with glossy, fragrant oval leaves, 20-50 cm tall, and small white (or purple on red-leaved types) flower spikes. In Denmark it is mostly a windowsill and greenhouse plant; supermarket pots are the usual starting point, but they are dozens of seedlings crammed together and need dividing to last. Sweet Genovese basil is the standard; Thai, lemon and purple types are grown the same way.',
      watering:
        'Water in the morning when the top of the compost is dry, aiming at the soil, not the leaves. Basil hates both drought (it wilts dramatically but recovers) and cold wet roots (it rots). Never leave it standing in water. A supermarket pot may need water daily; a plant divided into a larger pot every 2-3 days. Reduce in cool, dull weather.',
      light:
        'As much sun as possible: a south-facing windowsill indoors, or full sun in a greenhouse or on a sheltered balcony. In Denmark light is the limiting factor; from October to March windowsill basil grows weakly even in a bright window, and a grow light helps.',
      soil:
        'Free-draining but moisture-retentive multipurpose compost with added perlite or sand. Pots of at least 15-20 cm per plant give far more leaf than crowded supermarket pots.',
      temperature:
        'Not frost hardy at all; it is damaged below about 10 °C and killed by the slightest frost. Minimum night temperature of 12-15 °C, ideal 20-25 °C. Outdoors in Denmark only from late May/June to early September, and even then a cool wet summer will stunt it, so a greenhouse, cold frame or sheltered sunny wall is far better. Keep indoor plants away from cold windowpanes and draughts at night.',
      feeding:
        'Liquid feed every 2 weeks from May to September; a general or tomato fertilizer at half strength works. Pale leaves mean it is hungry or cold.',
      pruning:
        'Pinch out the growing tips regularly, cutting just above a pair of leaves, so the plant branches and becomes bushy rather than tall and leggy. Remove flower spikes as they appear; once basil flowers, leaf production and flavour decline. Harvest from the top, never strip the lower leaves.',
      propagation:
        'Sow seed indoors at 20-25 °C from March to June, barely covered; germination takes 1-2 weeks. Stem cuttings root in a glass of water in 10 days on a warm windowsill. Divide supermarket pots into 3-4 clumps and repot.',
      problems:
        'Grey mould and damping-off in cool wet conditions, with black stem bases. Downy mildew shows as yellow upper leaves with grey fuzz underneath, a common problem in humid greenhouses. Aphids and whitefly on soft growth. Slugs eat outdoor plants to the ground overnight. Leaves black and limp after a cold night are chill damage. Fusarium wilt causes brown streaks on stems and sudden collapse.',
      denmarkTips:
        'Sow indoors in April on a warm windowsill or buy supermarket pots year-round, dividing them into bigger pots straight away. Plant out into the greenhouse or a sunny sheltered balcony only after mid-May, or in June if nights are still below 10 °C; it grows superbly next to tomatoes in the greenhouse. Pinch and harvest weekly June to September and pick everything before the first cold nights in September, freezing it as pesto. Bring a pot indoors in September to extend the season on a south windowsill, but expect it to fade by December; a new supermarket pot is the realistic winter source. Water in the morning, never at night, to avoid rot in our cool climate.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 5, note: 'Mornings, at the soil; never waterlogged' },
      { type: 'fertilize', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Half-strength liquid feed' },
      { type: 'plant-out', intervalDays: 365, months: [5, 6], note: 'Greenhouse or sheltered balcony after mid-May' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9], note: 'Pinch tips above a leaf pair; remove flowers' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Before nights drop below 10 °C' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Aphids, whitefly, slugs, downy mildew' },
    ],
    tags: ['herb', 'edible', 'windowsill', 'greenhouse', 'balcony'],
  },
]
