import type { Plant } from '../../types'

export const part4: Plant[] = [
  {
    id: 'dahlia',
    commonName: 'Dahlia',
    danishName: 'Georgine',
    latinName: 'Dahlia',
    family: 'Asteraceae',
    category: 'outdoor',
    wikipediaTitle: 'Dahlia',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['compound', 'oval'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['mixed', 'red', 'pink', 'yellow', 'orange', 'white', 'purple'],
      habit: ['upright', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'Dahlias are tuberous perennials from Mexico with lush pinnate foliage and flowers of every size, form and colour except blue from July until the first frost. They are the best cut flower a Danish garden can produce in late summer. The tubers are not frost hardy and in most Danish gardens are lifted and stored over winter.',
      watering:
        'Dahlias are thirsty once in full growth and flower. Water deeply two or three times a week in dry weather from June, and daily in pots in hot spells. Do not water newly planted tubers until the shoots appear, as they rot easily in cold wet soil.',
      light:
        'Full sun, at least six hours, with shelter from strong wind. Dahlias in shade grow tall, weak and flower little.',
      soil:
        'Fertile, well-drained, humus-rich soil improved with compost and a handful of bonemeal. Plant tubers 10-15 cm deep with the old stem upwards. On Danish clay, add grit to the planting hole and avoid low wet spots; in pots use a rich loam-based compost in a large container.',
      temperature:
        'Not hardy: the foliage blackens at the first frost (-1 to -2 °C) and the tubers are killed by soil frost. In Denmark (zone 7-8) tubers can occasionally survive in the ground in a sheltered, well-drained spot under a thick mulch, but the wet winters rot them, so lifting is the safe method. Plant out only after the last frost in late May.',
      feeding:
        'Feed every two weeks from June to the end of August with a high-potash liquid feed (tomato fertiliser). Too much nitrogen gives leaves and weak stems. Stop feeding in September so the tubers ripen for storage.',
      pruning:
        'Pinch out the growing tip when plants are 30-40 cm tall to encourage bushy growth. Stake tall varieties at planting time. Deadhead regularly, cutting back to a leaf pair, and for larger blooms remove the two side buds next to each central bud. Cut stems to 10-15 cm when frost blackens the foliage.',
      propagation:
        'Divide tubers in March-April, ensuring each piece has a bit of the old stem with an eye, as eyes are only on the crown. Take basal cuttings from tubers started in pots indoors in March. Seed-grown bedding dahlias flower the same year.',
      problems:
        'Slugs and dræbersnegle devour the young shoots in May-June and can kill a plant; protect from the moment shoots emerge. Earwigs chew ragged holes in petals; trap them in upturned pots of straw on the stakes. Aphids, capsid bugs and red spider mite attack in summer. Powdery mildew whitens leaves in late summer and botrytis rots flowers in wet weather. Stored tubers rot if damp or shrivel if too dry. Dahlias are mildly toxic to pets and the sap can irritate skin.',
      denmarkTips:
        'Spring: start tubers in pots in a frost-free greenhouse or light room in April to get a head start, or plant directly outside in early May with the top 10 cm below soil so frost cannot reach the shoots. Plant out potted plants only after mid-May and have fleece ready for frosty nights. Stake at planting. Start slug protection immediately. Summer: pinch out, water heavily, feed with potash fortnightly and deadhead weekly from July. Tie in to stakes before the August storms, especially in exposed West Jutland. Autumn: after the first frost blackens the leaves (usually October-November), cut the stems to 15 cm, lift the tubers on a dry day, shake off soil, dry them upside down for a week, then store in boxes of dry peat, sawdust or newspaper at 4-8 °C in a frost-free shed or cellar. Label each variety. Winter: check stored tubers monthly for rot and shrivelling. In very sheltered, sandy gardens you can leave tubers in the ground under 20 cm of leaves, but on wet clay this fails.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 0, months: [6, 7, 8, 9, 10], note: 'Deep watering; not until shoots show' },
      { type: 'plant-out', intervalDays: 365, months: [5], note: 'Plant tubers early May or plants after mid-May' },
      { type: 'fertilize', intervalDays: 14, months: [6, 7, 8], note: 'High-potash liquid feed' },
      { type: 'deadhead', intervalDays: 7, months: [7, 8, 9, 10], note: 'Cut spent blooms to a leaf pair' },
      { type: 'check-pests', intervalDays: 7, months: [5, 6, 7, 8, 9], note: 'Slugs on shoots, earwigs in flowers, aphids' },
      { type: 'overwinter', intervalDays: 365, months: [10, 11], note: 'Lift tubers after frost; dry and store at 4-8 °C' },
    ],
    tags: ['cut-flowers', 'cottage-garden', 'tender', 'pollinator-friendly', 'late-summer'],
  },
  {
    id: 'fuchsia-magellanica',
    commonName: 'Hardy fuchsia',
    danishName: 'Fuchsia',
    latinName: 'Fuchsia magellanica',
    family: 'Onagraceae',
    category: 'outdoor',
    wikipediaTitle: 'Fuchsia magellanica',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['partial-shade', 'direct-sun'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['red', 'purple', 'pink', 'white'],
      habit: ['shrub', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'Hardy fuchsia is a deciduous shrub from southern Chile with small oval leaves and dangling red-and-purple lantern flowers from July until frost. Unlike the tender bedding fuchsias, it survives Danish winters when established, dying back to the ground in cold years and resprouting in May. The variety Riccartonii and the pale pink Alba are the usual garden forms.',
      watering:
        'Keep moist but not waterlogged; fuchsias drop buds when the soil dries out. Water weekly in dry weather and more in pots. Mulch to keep the roots cool and damp.',
      light:
        'Partial shade or morning sun suits it best in Denmark, though full sun is fine on the cool coast if the soil stays moist. Hot afternoon sun against a wall scorches the leaves and shortens flowering.',
      soil:
        'Fertile, moist, well-drained soil with plenty of organic matter. Plant deep, with the crown 5-10 cm below the surface, so that the roots are protected from frost and the plant can regrow from below if the top is killed.',
      temperature:
        'Hardy to about -10 to -15 °C once established, so reliable in most of Denmark (zone 7-8) with a protective mulch, and especially in the mild coastal and island gardens. The top growth is usually killed in a hard winter but new shoots emerge from the base in May. First-year plants are more tender; plant in spring, not autumn, to give them a full season to establish.',
      feeding:
        'Feed with a balanced fertiliser in April and again in June, or liquid-feed every two weeks from June to August for the heaviest flowering. Stop by the end of August so the growth hardens before winter.',
      pruning:
        'Leave the old stems on over winter; they protect the crown. In April, when new shoots appear at the base, cut the dead stems down to the lowest live buds or to the ground. In mild winters when the stems survive, cut back by about half to keep the shrub compact.',
      propagation:
        'Softwood cuttings root within weeks in May-June in a pot covered with a plastic bag. Semi-ripe cuttings in August overwintered on a windowsill give insurance against a hard winter. Hardwood cuttings in autumn are also possible.',
      problems:
        'Fuchsia gall mite, spreading in Europe, causes grotesquely distorted, reddened shoot tips; cut out and destroy affected growth. Aphids, whitefly and capsid bugs attack soft growth. Vine weevil grubs eat the roots of potted plants. Fuchsia rust shows as orange spots under the leaves in wet summers. Grey mould affects flowers in long wet weather. Non-toxic; the small dark berries are edible if bland.',
      denmarkTips:
        'Spring: plant in May after the frosts, deep, in a sheltered spot. Cut last year\'s dead stems down in April once new shoots are visible, then feed and mulch. Be patient; hardy fuchsia is one of the last shrubs to show life, sometimes not until late May. Summer: water in dry spells, liquid-feed fortnightly and watch for aphids and gall mite. Flowers come from July into October. Autumn: do not prune; pile 15-20 cm of leaves, bark or compost over the crown in November. Winter: the mild wet Danish winter is kinder than a cold dry one, but waterlogged clay rots the roots, so plant on well-drained ground. Along the west coast and on the islands, fuchsia makes a lovely informal hedge that tolerates salt wind. Dræbersnegle rarely touch fuchsia.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Keep moist; buds drop when dry' },
      { type: 'fertilize', intervalDays: 14, months: [5, 6, 7, 8], note: 'Balanced or liquid feed; stop end of August' },
      { type: 'prune', intervalDays: 365, months: [4], note: 'Cut dead stems to live buds once shoots appear' },
      { type: 'overwinter', intervalDays: 365, months: [11], note: 'Mulch the crown 15-20 cm deep; leave stems' },
      { type: 'check-pests', intervalDays: 14, months: [6, 7, 8, 9], note: 'Aphids, gall mite distortion, rust' },
    ],
    tags: ['shrub', 'cottage-garden', 'pollinator-friendly', 'coastal', 'late-summer'],
  },
  {
    id: 'lupinus-polyphyllus',
    commonName: 'Garden lupin',
    danishName: 'Lupin',
    latinName: 'Lupinus polyphyllus',
    family: 'Fabaceae',
    category: 'outdoor',
    wikipediaTitle: 'Lupinus polyphyllus',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['palmate', 'compound'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'blue', 'purple', 'pink', 'white', 'yellow', 'red'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Garden lupins are short-lived perennials with handsome palmate leaves and tall, dense spires of pea flowers in June in blue, purple, pink, yellow, white and bicolours. The Russell hybrids are classic Danish cottage garden plants, and the blue species has naturalised along Danish roadsides and railway banks. They are easy from seed but tend to fade after four or five years.',
      watering:
        'Water new plants in their first season. Established lupins have a deep taproot and need water only in dry spells, especially while the flower spikes develop in May-June. Avoid soggy soil, which rots the crown.',
      light:
        'Full sun gives the strongest spikes; light shade is tolerated but stems grow taller and lean. Shelter from strong wind, which snaps the heavy spikes.',
      soil:
        'Light, well-drained, slightly acidic to neutral soil, not too rich. As legumes, lupins fix their own nitrogen and dislike heavy manuring and lime. Sandy Jutland soil is perfect; on clay, add grit and compost and plant on a slight mound. The taproot resents disturbance, so plant young and leave them.',
      temperature:
        'Fully hardy in Denmark (USDA zone 4-8). The crown overwinters as a tuft of leaves and ignores frost. Young spring growth tolerates light frost. No protection needed, but good drainage is essential in the wet Danish winter.',
      feeding:
        'Very little. A light dressing of a low-nitrogen, high-potash fertiliser in spring is plenty. Nitrogen feed and manure give floppy foliage and few flowers.',
      pruning:
        'Cut the spent flower spikes down to the base as soon as they fade in late June to encourage a smaller second flush in August and to stop self-seeding, which produces dull purple seedlings. Cut the whole plant to the ground in autumn when the leaves yellow.',
      propagation:
        'Sow seed in March-April after soaking overnight, or in autumn; plants flower the following year. Named varieties are propagated by basal cuttings in April with a sliver of root attached. Lupins cannot be divided because of the taproot.',
      problems:
        'Lupin aphid, a large grey species, covers the stems and spikes in dense colonies in May-June and can collapse a plant; hose off or squash early. Slugs and dræbersnegle eat the young leaves in spring. Powdery mildew whitens leaves in late summer. Crown rot kills plants in wet soil. Lupin anthracnose causes brown spots and twisted stems in wet weather. The seeds and foliage are toxic to pets, livestock and children, containing alkaloids that cause vomiting and breathing problems.',
      denmarkTips:
        'Spring: plant young pot-grown lupins in April-May, protect new leaves from slugs, and give a potash feed. Stake tall varieties in windy gardens by May. Watch closely for lupin aphid from mid-May; it arrives suddenly and in huge numbers. Summer: cut down the spent spikes in late June for a second flush and to avoid seedlings. Water in dry spells. Autumn: cut foliage down in October. Sow seed in September for next year. Winter: no protection; the enemy is wet clay rotting the crown, so drainage matters more than mulch. Lupins are perfect for the sandy, acidic soils of West and Central Jutland, where they also self-seed happily. Expect to replace plants every 4-5 years as they weaken; keep a few seedlings coming along.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'Dry spells only; most while spikes form' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'Low-nitrogen, high-potash feed only' },
      { type: 'deadhead', intervalDays: 7, months: [6, 7], note: 'Cut spent spikes to base for a second flush' },
      { type: 'prune', intervalDays: 365, months: [10], note: 'Cut foliage to ground when it yellows' },
      { type: 'check-pests', intervalDays: 7, months: [5, 6, 7], note: 'Lupin aphid colonies, slugs on new leaves' },
    ],
    tags: ['cottage-garden', 'perennial', 'pollinator-friendly', 'cut-flowers'],
  },
  {
    id: 'delphinium-elatum',
    commonName: 'Delphinium',
    danishName: 'Ridderspore',
    latinName: 'Delphinium elatum',
    family: 'Ranunculaceae',
    category: 'outdoor',
    wikipediaTitle: 'Delphinium elatum',
    difficulty: 'demanding',
    toxicity: 'toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['palmate', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['blue', 'purple', 'white', 'pink'],
      habit: ['clumping', 'upright'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Delphiniums are the tall aristocrats of the June border, with deeply cut palmate leaves and 1.5-2 m spires of true blue, purple, white or pink flowers. They are classic in Danish cottage gardens but demanding: they need rich soil, staking, feeding and relentless slug control. The Belladonna and Elatum hybrids are the usual types.',
      watering:
        'Delphiniums need plenty of water while the spikes grow in May and June. Water deeply once or twice a week in dry weather and keep the soil consistently moist but never waterlogged. Water the ground, not the foliage.',
      light:
        'Full sun with shelter from wind. The hollow stems and heavy spikes snap easily, so a position backed by a hedge or wall is ideal. Shade gives weak, leaning spikes.',
      soil:
        'Deep, rich, fertile, well-drained soil improved with lots of compost and well-rotted manure, neutral to slightly alkaline. On Danish clay, add grit and plant slightly raised; the crown must not sit in winter wet. Allow 50-60 cm between plants for air circulation.',
      temperature:
        'Fully hardy in Denmark (USDA zone 3-7) and actually enjoy the cool summers, which give longer-lasting flowers than in warmer countries. The crown survives frost easily; it is wet, not cold, that kills them. New shoots emerge in April and tolerate light frost.',
      feeding:
        'Hungry plants. Feed with a balanced fertiliser in March as growth starts and liquid-feed every two weeks from May until flowering. After cutting down the first spikes, feed again to fuel a second flush in August-September.',
      pruning:
        'Thin young shoots to the strongest 3-5 per plant in April for bigger spikes. Stake early, by mid-May, with canes or a ring support. Cut the spent spikes back to the leaves in July for a second flush; cut the whole plant to the ground in late October. Remove the yellowing leaves regularly.',
      propagation:
        'Take basal cuttings 8-10 cm long in March-April with a solid (not hollow) base, root in gritty compost. Divide clumps in spring every 3-4 years, discarding the woody centre. Sow seed in spring; named strains like Pacific Giants flower the first or second year.',
      problems:
        'Slugs and dræbersnegle are the number one killer, eating the emerging shoots in April so the plant never recovers; use pellets, grit collars or copper from March onwards. Powdery mildew whitens leaves in late summer. Delphinium black blotch (bacterial) causes black patches on leaves in wet weather. Crown rot kills plants in wet winters. Aphids and leaf miners attack foliage. All parts are highly toxic to people and animals if eaten; wear gloves when handling.',
      denmarkTips:
        'Spring: start slug protection in March before the shoots show, thin shoots in April, feed in March and begin fortnightly liquid feeding in May. Put stakes in by mid-May; a June storm will flatten unstaked spikes. Plant new pot-grown plants in April-May, not autumn, so they establish before winter. Summer: water deeply in dry weeks, cut back spent spikes in July, feed again and enjoy a second flush in September. Autumn: cut to the ground in late October and clear debris; mulch with grit rather than compost around the crown. Winter: the mild, soaking Danish winter is the danger, so drainage is everything; plant on raised beds on clay soils. In West Jutland delphiniums are a struggle because of the wind; grow the shorter Belladonna types behind a hedge. Divide every 3-4 years in April to keep plants vigorous.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 0, note: 'Deep watering while spikes grow' },
      { type: 'fertilize', intervalDays: 14, months: [3, 4, 5, 6, 7], note: 'Balanced feed in March, liquid feed fortnightly' },
      { type: 'check-pests', intervalDays: 7, months: [3, 4, 5, 6, 7, 8, 9], note: 'Slug patrol from March; mildew later' },
      { type: 'deadhead', intervalDays: 14, months: [7], note: 'Cut spent spikes to leaves for second flush' },
      { type: 'prune', intervalDays: 365, months: [10], note: 'Cut to ground; grit mulch around crown' },
      { type: 'divide', intervalDays: 1095, months: [4], note: 'Split clumps, discard woody centre' },
    ],
    tags: ['cottage-garden', 'cut-flowers', 'perennial', 'tall', 'blue-flowers'],
  },
  {
    id: 'astilbe',
    commonName: 'Astilbe',
    danishName: 'Astilbe',
    latinName: 'Astilbe',
    family: 'Saxifragaceae',
    category: 'outdoor',
    wikipediaTitle: 'Astilbe',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['partial-shade', 'shade'],
    traits: {
      leafShape: ['compound', 'fern-frond'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['pink', 'red', 'white', 'purple'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Astilbes are herbaceous perennials with ferny, often bronze-tinted divided foliage and fluffy plumes of pink, red, white or lilac flowers in July and August. They are the ideal companion to hostas in the moist, shady Danish garden and, unlike hostas, slugs leave them alone. The dried plumes stand handsomely into winter.',
      watering:
        'Astilbes must never dry out; the leaves crisp and brown at the edges within days of drought and the plant may not recover. Water deeply once or twice a week in dry spells, more in sandy soil or sun. They are perfect beside ponds and in naturally damp corners.',
      light:
        'Partial shade to shade. They tolerate full sun only in permanently moist soil, which is rarely the case in a Danish July. Dappled shade under trees or the north side of the house is ideal.',
      soil:
        'Rich, moist, humus-laden soil that holds water, slightly acidic to neutral. Dig in plenty of compost or leaf mould. Heavy Danish clay suits them well as long as it stays moist, and they will even tolerate occasionally wet ground; dry sandy soil is the problem, not clay.',
      temperature:
        'Fully hardy in Denmark (USDA zone 3-8) and need no winter protection. New growth appears in April and tolerates light frosts. Cool Danish summers keep the flowers fresh far longer than in hotter climates.',
      feeding:
        'Mulch generously with compost or well-rotted manure every spring. Add a balanced fertiliser in April and again lightly after flowering. Astilbes are heavy feeders and decline in poor, dry soil.',
      pruning:
        'Leave the dried flower plumes standing for winter interest and cut everything down to the ground in late February or March before new growth. Deadheading does not produce more flowers, so leave the plumes.',
      propagation:
        'Divide clumps every 3-4 years in early spring or September; the woody crowns need a sharp knife or spade. Division keeps plants vigorous, as old clumps rise out of the soil and flower less. Replant immediately and water well.',
      problems:
        'Almost pest-free. Brown, crisp leaf edges mean drought. Vine weevil grubs occasionally eat the roots of potted plants. Powdery mildew appears in dry late summers. Clumps that lift out of the ground with exposed woody crowns need dividing and replanting deeper. Slugs and dræbersnegle ignore astilbe, which makes it invaluable in Danish shade gardens. Non-toxic to pets and children.',
      denmarkTips:
        'Spring: cut down last year\'s stems in March, mulch thickly with compost in April, feed and divide crowded clumps. Plant new astilbes in April-May in moist shade. Summer: watering is everything; soak deeply in dry weeks of June-July and never let the soil dry out, especially in the first year. Autumn: September is also a good time to plant and divide, with the soil warm and the autumn rain arriving. Leave the plumes standing. Winter: no protection needed. Astilbes positively enjoy the wet Danish clay and the damp, mild winters, so they are the right choice for the heavy soils of Zealand and East Jutland where many other perennials rot. On sandy West Jutland soil they need deep mulch and constant water, and shelter from the drying wind.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 0, note: 'Never let the soil dry out' },
      { type: 'fertilize', intervalDays: 90, months: [4, 8], note: 'Balanced feed; compost mulch in spring' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Thick compost or leaf mould mulch' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Cut old stems to ground before new growth' },
      { type: 'divide', intervalDays: 1095, months: [4, 9], note: 'Split woody crowns; replant deeper' },
    ],
    tags: ['shade-garden', 'perennial', 'moist-soil', 'slug-resistant', 'winter-interest'],
  },
]
