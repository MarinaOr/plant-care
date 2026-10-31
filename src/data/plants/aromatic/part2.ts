import type { Plant } from '../../types'

export const part2: Plant[] = [
  {
    id: 'anethum-graveolens',
    commonName: 'Dill',
    danishName: 'Dild',
    latinName: 'Anethum graveolens',
    family: 'Apiaceae',
    category: 'outdoor',
    wikipediaTitle: 'Dill',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['compound', 'needle'],
      leafPattern: ['plain'],
      flowerColor: ['yellow'],
      habit: ['upright'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A fast-growing hardy annual, 60-120 cm tall, with feathery blue-green leaves and flat yellow umbels in July-August, as essential to Danish cooking as parsley: for gravlaks, cucumber salad, new potatoes and pickled gherkins. Both the fine leaves (dildkviste) and the seed heads (dildkroner) are used. It bolts to flower quickly in heat and drought, so it is sown repeatedly from April to July for a steady supply.',
      watering:
        'Keep the soil evenly moist; drought stress makes dill bolt early and turn yellow. Water newly sown rows and seedlings regularly, and established plants weekly in dry spells. Pots dry fast and need water every 1-2 days in summer.',
      light:
        'Full sun for sturdy, aromatic plants. Light afternoon shade in midsummer slows bolting a little. Shelter from wind or stake tall plants, as the hollow stems snap easily.',
      soil:
        'Well-drained, moderately fertile soil that holds some moisture. Sow direct; dill has a taproot and resents transplanting unless moved very young. In pots use a deep container of at least 25 cm and multipurpose compost.',
      temperature:
        'Seed germinates from about 10 °C, so it can be sown outdoors from mid-April in Denmark. Seedlings tolerate a light frost but mature plants are killed by hard autumn frosts in October-November. It grows best in cool weather; a hot dry spell sends it straight to flower.',
      feeding:
        'Little needed in reasonably fertile soil; a dressing of compost before sowing is enough. Potted dill gets a half-strength liquid feed every 3 weeks. Over-feeding gives soft growth that collapses.',
      pruning:
        'Pinch out the central flower stem when it appears if you want leaves rather than seed, which delays bolting by a couple of weeks. Otherwise let it flower and harvest the green seed heads for pickling, then cut the plant down.',
      propagation:
        'Seed only. Sow direct in shallow drills 1 cm deep from mid-April to July every 3-4 weeks; germination takes 10-14 days. Let a few plants set seed and it will self-sow around the garden for next year. Fresh seed keeps 2-3 years.',
      problems:
        'Bolting in hot, dry or crowded conditions is the main frustration. Aphids, especially black ones, cluster on flower heads. Slugs eat seedlings. Carrot fly can attack the roots. Powdery mildew in late summer. Plants that fall over have been grown too soft or too exposed. Do not sow next to fennel, since they cross-pollinate and the seed of both is spoiled.',
      denmarkTips:
        'Sow direct from mid-April in a sunny bed or a deep pot, and again every month until July; the May and June sowings are usually the best, while a July sowing gives fresh dill for August cucumber salad and pickling. Harvest leaves from June to September when plants are 15-20 cm, picking the outer fronds. Cut the green seed heads in July-August for pickling gherkins and let some ripen for seed and for next spring\'s self-sown plants. Freeze chopped dill in ice-cube trays rather than drying it, which loses the flavour. Protect seedlings from slugs and water well in a warm spell to delay bolting.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 0, note: 'Even moisture; drought triggers bolting' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, months: [6, 7, 8], note: 'Half-strength feed for pots only' },
      { type: 'plant-out', intervalDays: 28, months: [4, 5, 6, 7], note: 'Sow direct every 3-4 weeks for succession' },
      { type: 'harvest', intervalDays: 5, months: [6, 7, 8, 9], note: 'Outer fronds; green seed heads for pickling' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8], note: 'Aphids on flower heads, slugs on seedlings' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'annual', 'pollinator-friendly'],
  },
  {
    id: 'coriandrum-sativum',
    commonName: 'Coriander',
    danishName: 'Koriander',
    latinName: 'Coriandrum sativum',
    family: 'Apiaceae',
    category: 'both',
    wikipediaTitle: 'Coriander',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade', 'bright-indirect'],
    traits: {
      leafShape: ['lobed', 'compound'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'pink'],
      habit: ['upright', 'bushy'],
      size: 'small',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A quick annual herb with flat, lobed, parsley-like lower leaves and a pungent citrus flavour, 30-60 cm tall, with pale pink-white umbels that give the round spicy seeds used in curries and pickling. It is one of the most bolt-prone herbs there is: in warmth and long days it races to flower within weeks, so it is sown little and often. Supermarket pots are crowded seedlings that need dividing and seldom last long.',
      watering:
        'Keep the compost consistently moist, since drying out is the fastest trigger for bolting; water every 1-2 days in a summer pot and weekly in the ground in dry spells. Avoid waterlogging, which rots the taproot. Indoors in winter water every 4-6 days.',
      light:
        'Sun or light shade; in a Danish summer partial shade actually suits it, keeping it cooler and leafy for longer. Indoors it needs a bright south or west windowsill and grows slowly and weakly from November to February.',
      soil:
        'Well-drained, fertile, moisture-retentive soil or multipurpose compost. Use a deep pot (20 cm or more) for the taproot and sow direct, as transplanting shocks it into flowering.',
      temperature:
        'Tolerates light frost; seed germinates from about 10 °C and plants grow best at 15-22 °C. Sow outdoors from mid-April to August in Denmark, where the cool climate is actually an advantage. Autumn sowings often survive mild winters under fleece. Indoors keep it cool, under 20 °C, or it bolts on the windowsill.',
      feeding:
        'A little compost in the soil before sowing is enough; too much nitrogen gives bland, soft leaves. Potted plants get a half-strength liquid feed every 3 weeks.',
      pruning:
        'Harvest the outer leaves, leaving the centre to regrow, and cut the flower stem out as soon as you see it to buy another week or two of leaves. Once it flowers, let it go and harvest the seed instead.',
      propagation:
        'Seed only, sown direct 1 cm deep every 3 weeks from April to August. Lightly crushing the round seed husk speeds germination, which takes 1-3 weeks. Choose a leaf variety like \'Cilantro\' or \'Calypso\', bred to bolt slowly. Let one sowing set seed for next year.',
      problems:
        'Bolting from heat, drought, root disturbance or crowding is the dominant problem. Aphids on young growth and flower heads. Slugs eat seedlings overnight. Fusarium wilt and root rot in wet soil cause yellowing and collapse. Powdery mildew in a dry late summer. Supermarket pots collapse within days because dozens of seedlings compete for one small pot of compost.',
      denmarkTips:
        'Sow direct every 3 weeks from mid-April to August in a half-shaded bed or in deep pots on the balcony; the cool Danish summer is kinder to coriander than most climates, but a warm spell in June or July will still bolt a whole row. Harvest leaves from late May to October when plants are 10-15 cm. An August sowing under fleece often stands into November and sometimes through winter. Harvest the brown seed in August-September and dry it for the spice jar. Divide supermarket pots into several pots and keep them cool and moist to extend their life. Freeze chopped leaves; drying destroys the flavour.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 5, note: 'Never let it dry out; it bolts' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Half-strength feed for pots' },
      { type: 'plant-out', intervalDays: 21, months: [4, 5, 6, 7, 8], note: 'Sow direct every 3 weeks; shade in summer' },
      { type: 'harvest', intervalDays: 5, months: [5, 6, 7, 8, 9, 10], note: 'Outer leaves; seed in August-September' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8], note: 'Slugs, aphids, flower stems to cut out' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'annual', 'windowsill'],
  },
  {
    id: 'levisticum-officinale',
    commonName: 'Lovage',
    danishName: 'Løvstikke',
    latinName: 'Levisticum officinale',
    family: 'Apiaceae',
    category: 'outdoor',
    wikipediaTitle: 'Lovage',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['compound', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['yellow', 'green'],
      habit: ['upright', 'clumping'],
      size: 'large',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A huge, long-lived hardy perennial, up to 2 m tall in flower, with glossy dark green celery-like leaves that taste intensely of celery and stock cube, which is why it is nicknamed the Maggi plant (maggiurt). It has been grown in Danish farm gardens for centuries for soups, stews and the classic kartoffelsuppe. One plant is more than enough for a household; it dies back in winter and shoots again in March.',
      watering:
        'Likes deep, moist soil and flags in drought, which also toughens the leaves. Water generously in dry spells, especially in the first two summers while the root establishes. Needs nothing in winter.',
      light:
        'Full sun or partial shade; it tolerates quite a lot of shade in Denmark and leaves stay tender longer with some afternoon shade.',
      soil:
        'Deep, rich, moist, well-drained soil with plenty of compost. It has a thick taproot, so a pot is only a short-term home unless it is at least 40 cm deep. Tolerates clay.',
      temperature:
        'Fully hardy, to -30 °C; it comes from mountain regions and no Danish winter troubles it. Growth starts in March, often the first herb up, and dies down after the first hard frosts in November.',
      feeding:
        'Mulch with compost or well-rotted manure in autumn or early spring. A greedy plant that repays feeding with tender leaves, but it manages without.',
      pruning:
        'Cut the flower stems out in June-July if you want tender leaves all summer, or leave some for the hoverflies and seed. Cutting the whole plant to the ground in July gives a fresh, mild flush of leaves for autumn. Clear the dead stems in late autumn.',
      propagation:
        'Divide the crown in March-April or October with a spade, replanting pieces with a bud. Seed sown fresh in August-September or in spring germinates well; self-sown seedlings appear around the parent and transplant easily when small.',
      problems:
        'Almost none. Aphids on young shoots and flower heads. Slugs eat the first leaves in March-April. Leaf miner tunnels in leaves in some years; pick off affected leaves. Celery leaf spot occasionally gives brown spots. Old leaves get coarse and bitter in late summer, which is a reason to cut back, not a disease.',
      denmarkTips:
        'Plant one crown in April or October at the back of the herb bed, giving it a square metre; it will be there for decades. Harvest young leaves from April to October, a few stalks at a time; the flavour is strongest and the leaves most tender in spring and after the July cut-back. Freeze chopped leaves or dry them for winter soups, and use the hollow stems as straws for Bloody Mary. Cut back in July and clear stems in November. Divide every 5-6 years in March if the clump gets too large. Watch for slugs on the first shoots.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Deeply in dry spells; big leaves lose a lot' },
      { type: 'fertilize', intervalDays: 365, winterIntervalDays: 0, months: [4], note: 'Compost or manure mulch around the crown' },
      { type: 'harvest', intervalDays: 7, months: [4, 5, 6, 7, 8, 9, 10], note: 'Young leaves; freeze or dry for winter' },
      { type: 'prune', intervalDays: 365, months: [7], note: 'Cut to the ground for a fresh flush' },
      { type: 'divide', intervalDays: 1825, months: [3, 4, 10], note: 'Every 5-6 years when the crown gets huge' },
      { type: 'check-pests', intervalDays: 14, months: [3, 4, 5], note: 'Slugs on the first shoots, aphids' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'perennial', 'allotment'],
  },
  {
    id: 'artemisia-dracunculus',
    commonName: 'Tarragon',
    danishName: 'Estragon',
    latinName: 'Artemisia dracunculus',
    family: 'Asteraceae',
    category: 'outdoor',
    wikipediaTitle: 'Tarragon',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['lance'],
      leafPattern: ['plain'],
      flowerColor: ['green', 'yellow'],
      habit: ['upright', 'clumping'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A perennial herb, 60-90 cm tall, with narrow smooth leaves and a sweet aniseed flavour that defines béarnaise sauce and classic chicken dishes. French tarragon (var. sativa) is the one worth growing but is sterile and must be bought as a plant; Russian tarragon grows from seed, is hardier and taller but tastes of very little. Tarragon dies back completely in winter and resprouts in late April.',
      watering:
        'Moderate; water when the top of the soil is dry, roughly weekly in a dry summer in the ground and every 3-4 days in a pot. It hates wet roots, especially in winter, so pots should be kept nearly dry from October to March.',
      light:
        'Full sun in a warm, sheltered position; the flavour is weak and growth floppy in shade. A spot against a south wall is ideal in Denmark.',
      soil:
        'Light, free-draining, moderately fertile soil; add grit and compost to clay or plant in a raised bed. In pots use gritty compost in a 25-30 cm container with good drainage.',
      temperature:
        'French tarragon is hardy to about -15 °C when the roots are dry, but it is often lost in Denmark not to frost but to cold waterlogged soil over winter. Mulch the crown in November and, for pots, move them under cover or into an unheated greenhouse. Russian tarragon is hardy to -30 °C without fuss.',
      feeding:
        'Light feeding only: a little compost in spring in the ground, and a half-strength liquid feed every 4 weeks from May to August for pots. Rich feeding dilutes the flavour.',
      pruning:
        'Pinch and harvest shoot tips regularly to keep the plant bushy. Cut back by half in July to encourage fresh growth, and cut the dead stems down to 5 cm in late autumn or March. Plants lose vigour after 3-4 years and should be divided or replaced.',
      propagation:
        'French tarragon does not set viable seed, so divide clumps in April as the shoots appear, or take root cuttings in March and softwood cuttings in June. Repot and divide potted plants every 2-3 years to keep them vigorous. Russian tarragon is sown indoors in March.',
      problems:
        'Root rot and crown rot in wet winters, the plant simply failing to reappear in spring. Rust shows as brown-orange pustules under leaves and distorted shoots; cut back and dispose of affected growth, and replace badly infected plants. Powdery mildew in a dry August. Aphids on soft tips. Slugs on new spring shoots. A tarragon that tastes of nothing is Russian tarragon, not a sick plant.',
      denmarkTips:
        'Buy a French tarragon plant (check the label says fransk estragon or var. sativa) in May and plant it in the warmest, driest, sunniest bed or in a terracotta pot. Harvest from late May to September, picking tips, and cut a batch in July to make tarragon vinegar or to freeze; dried tarragon loses most of its flavour. In November mulch the crown with leaves or compost and move pots under the eaves or into the greenhouse to keep them dry. Expect it to reappear late, in late April or May, so do not give up on it too early. Divide in April every 3 years. Guard new shoots from slugs.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 0, note: 'Only when the top of the soil is dry' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, months: [5, 6, 7, 8], note: 'Half-strength feed, pots only' },
      { type: 'harvest', intervalDays: 7, months: [5, 6, 7, 8, 9], note: 'Pick shoot tips; freeze or make vinegar in July' },
      { type: 'mulch', intervalDays: 365, months: [11], note: 'Cover the crown; move pots under cover' },
      { type: 'divide', intervalDays: 1095, months: [4], note: 'Every 3 years as shoots appear' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8], note: 'Rust under leaves, aphids, slugs' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'perennial', 'balcony'],
  },
  {
    id: 'laurus-nobilis',
    commonName: 'Bay laurel',
    danishName: 'Laurbær',
    latinName: 'Laurus nobilis',
    family: 'Lauraceae',
    category: 'both',
    wikipediaTitle: 'Laurus nobilis',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect', 'partial-shade'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['yellow', 'green'],
      habit: ['tree', 'shrub'],
      size: 'large',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'An evergreen Mediterranean tree with glossy, leathery, dark green leaves that are the bay leaves of soups, stews and pickling brine; the leaves are picked and dried all year round. In the wild it reaches 10 m, but in Denmark it is grown as a clipped standard or pyramid in a large pot, 1-2 m tall, standing on the terrace in summer and in a cool bright room or frost-free greenhouse in winter. Small yellow-green flowers in spring and black berries on female plants are a bonus.',
      watering:
        'Water pots thoroughly when the top few centimetres are dry, about every 3-5 days in summer and every 2-3 weeks in winter indoors. Bay tolerates drought far better than waterlogging; make sure the pot drains freely and never leave it in a saucer of water, particularly in winter when roots rot easily.',
      light:
        'Full sun to light shade outdoors in summer. In winter it needs the brightest spot available, a cool south or west window, conservatory or unheated greenhouse; in a dark room it drops leaves.',
      soil:
        'A soil-based (John Innes type) compost with 20-30 % grit for weight and drainage, in a heavy pot that will not blow over. Repot every 2-3 years in April into a pot one size larger, or top-dress and root-prune mature specimens.',
      temperature:
        'Hardy to about -5 °C, briefly to -10 °C in the ground in a sheltered spot, but a Danish winter with wind, wet and prolonged frost kills or badly scorches it, and pot roots freeze solid. Bring it into a frost-free, cool (0-10 °C), bright place from late October to April. Indoors avoid heated living rooms, which are too warm and dry; a cool hallway or stairwell is ideal.',
      feeding:
        'Liquid feed every 2-3 weeks from April to August, or a slow-release fertilizer in spring. Nothing in winter. Yellowing leaves in spring often mean the roots are cold and wet rather than hungry.',
      pruning:
        'Clip to shape in June and again lightly in August, cutting with secateurs just above a leaf rather than shearing through leaves, which go brown. Remove suckers from the base of standards. Winter-scorched shoots are cut back in May once new growth shows where live wood is; bay regrows even from the base.',
      propagation:
        'Semi-ripe cuttings 10-15 cm long in August-September, rooted in gritty compost with bottom heat, take months and are slow but reliable. Suckers from the base can be detached with roots in spring. Seed is rarely available fresh.',
      problems:
        'Bay sucker (a psyllid) causes thickened, curled, yellow leaf edges in summer; pick off and bin affected leaves. Scale insects on stems and under leaves, with sticky honeydew and sooty mould, are the main indoor problem. Leaf spot and brown leaf tips from cold wet roots or wind scorch. Peeling bark after a hard frost. Root rot in pots that sit wet over winter. Leaves dropping in winter means too dark or too warm.',
      denmarkTips:
        'Keep bay as a pot plant: outside on the terrace from May to October in a sunny sheltered spot, then into a cool bright frost-free place (unheated greenhouse, bright garage window, cool stairwell) before the first hard frost at the end of October. Water sparingly in winter and check for scale insects monthly. Move it out again in late April or May, hardening it off in the shade for a week. Pick leaves all year and dry them for a couple of weeks in a warm room; dried bay is milder and sweeter than fresh. Clip in June. Repot in April every 2-3 years. Protect the pot from freezing solid if it must stay outside by wrapping it in bubble wrap and standing it against the house.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 18, note: 'When top layer is dry; never waterlogged' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, months: [4, 5, 6, 7, 8], note: 'Liquid feed or slow-release in spring' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Move the pot outside after hardening off' },
      { type: 'prune', intervalDays: 365, months: [6], note: 'Clip to shape with secateurs above a leaf' },
      { type: 'bring-inside', intervalDays: 365, months: [10], note: 'Cool, bright, frost-free place before hard frost' },
      { type: 'check-pests', intervalDays: 30, note: 'Scale insects, bay sucker curled leaves' },
    ],
    tags: ['herb', 'aromatic', 'edible', 'evergreen', 'balcony'],
  },
]
