import type { Plant } from '../../types'

export const part2: Plant[] = [
  {
    id: 'malus-domestica',
    commonName: 'Apple tree',
    danishName: 'Æbletræ',
    latinName: 'Malus domestica',
    family: 'Rosaceae',
    category: 'outdoor',
    wikipediaTitle: 'Malus domestica',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'pink'],
      habit: ['tree'],
      size: 'large',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'The classic Danish garden fruit tree, with pink-white blossom in May and fruit from August to October depending on variety. Size depends on the rootstock: dwarf M9 trees stay 2-3 m, while vigorous rootstocks give 5-8 m trees. Danish favourites include \'Ingrid Marie\', \'Filippa\', \'Discovery\', \'Guldborg\' and \'Rød Aroma\'. Apple seeds contain traces of cyanide but the fruit is wholly safe.',
      watering:
        'Water young trees deeply every week in dry spells for the first three years. Mature trees normally cope on rainfall, but a thorough soak during fruit swelling in July-August improves size and reduces fruit drop. Trees in pots need water every 1-2 days in summer.',
      light:
        'Full sun is essential for ripening, flavour and red colour on the fruit. A sheltered, sunny, frost-free spot gives the best crops.',
      soil:
        'Deep, fertile, well-drained loam is ideal. Heavy clay is acceptable if not waterlogged in winter; sandy soil needs lots of compost and mulch. Keep a 1 m circle around the trunk free of grass for the first few years.',
      temperature:
        'Fully hardy in Denmark; most varieties take -25 °C without harm. The main risk is late frost on blossom in May, which kills the flowers and the crop. In frost pockets choose late-flowering varieties and avoid low-lying spots.',
      feeding:
        'Apply a general fruit fertilizer or well-rotted manure in March, plus a potassium-rich feed if the tree bears heavily. Over-feeding with nitrogen gives lush shoots, few fruits and more aphids. Mulch with compost in spring.',
      pruning:
        'Winter prune in January-March while dormant: remove dead, diseased and crossing branches and thin crowded growth to let in light. Summer pruning in August shortens vigorous shoots on trained trees and dwarf forms. Never remove more than a quarter of the canopy in one year. Thin fruitlets in June to one or two per cluster for bigger, better apples.',
      propagation:
        'Grafted onto rootstocks in late winter; seedlings do not come true to type. Buy named varieties from a nursery.',
      problems:
        'Apple scab shows as olive-brown spots on leaves and corky patches on fruit, worst in wet summers. Codling moth larvae tunnel into fruit, leaving a brown hole with frass. Aphids, including woolly aphid with white fluff on bark, curl young leaves. Canker causes sunken, cracked bark that rings and kills branches. Mildew whitens shoot tips. Blossom can be lost to late frost, and biennial bearing is common if fruit is not thinned.',
      denmarkTips:
        'Plant bare-root trees in November or March-April; stake dwarf trees permanently. Choose two varieties that flower at the same time for pollination, or rely on neighbours\' trees and crab apples. Thin fruit in June after the natural drop. Hang codling moth pheromone traps in May and remove fallen leaves and mummified fruit in autumn to break the scab cycle. Prune in late winter, summer-prune trained trees in August. Harvest \'Discovery\' in late August, \'Filippa\' in September, and \'Ingrid Marie\' in October for storage in a cool shed through winter. Pick up windfalls so wasps and fungal rots do not build up.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Young trees and during fruit swelling in dry spells' },
      { type: 'fertilize', intervalDays: 365, months: [3], note: 'Fruit fertilizer or manure around the drip line' },
      { type: 'prune', intervalDays: 365, months: [1, 2, 3], note: 'Winter prune: dead, diseased, crossing branches' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Aphids, scab, codling moth' },
      { type: 'harvest', intervalDays: 7, months: [8, 9, 10], note: 'Twist gently; ripe fruit comes away easily' },
      { type: 'mulch', intervalDays: 365, months: [4] },
    ],
    tags: ['fruit', 'tree', 'edible', 'pollinator-friendly'],
  },
  {
    id: 'fragaria-ananassa',
    commonName: 'Garden strawberry',
    danishName: 'Jordbær',
    latinName: 'Fragaria × ananassa',
    family: 'Rosaceae',
    category: 'outdoor',
    wikipediaTitle: 'Garden strawberry',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['compound'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['groundcover', 'clumping', 'rosette'],
      size: 'small',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'A low, spreading perennial with trifoliate leaves, white flowers in May and sweet red fruit in June-July, the highlight of the Danish summer. Plants crop well for 3-4 years before needing replacement from runners. Popular varieties in Denmark include \'Korona\', \'Polka\', \'Honeoye\' and \'Senga Sengana\'. Everbearing types fruit from July to October.',
      watering:
        'Keep soil evenly moist from flowering through harvest; water at the base in the morning, not over the leaves and fruit, to limit grey mould. In pots and hanging baskets water daily in warm weather. Reduce watering after harvest.',
      light:
        'Full sun gives the sweetest fruit. At least 6 hours of direct sun; shaded plants fruit poorly and rot more.',
      soil:
        'Fertile, well-drained, slightly acidic soil rich in compost. On heavy clay grow on raised ridges or in raised beds. Straw mulch under the fruit keeps it clean and dry.',
      temperature:
        'Fully hardy in Denmark; plants survive -20 °C under snow or a light mulch. Open flowers are killed by frost in May, turning black in the centre, so cover with fleece on cold nights. Pots should be grouped and wrapped in winter.',
      feeding:
        'Apply a balanced or potassium-rich fertilizer in early spring and again after harvest. Avoid excess nitrogen, which gives leaves rather than fruit and encourages mould.',
      pruning:
        'After the last harvest in July, cut off old leaves to about 5 cm above the crown (not for everbearers) and remove unwanted runners. Remove all runners from fruiting plants unless you want them for propagation.',
      propagation:
        'Peg down the first plantlet on each runner into soil or a pot in July-August; sever when rooted after 4-6 weeks and plant out by September. Replace the whole bed every 3-4 years using fresh runners in a new spot.',
      problems:
        'Grey mould (Botrytis) turns fruit fuzzy grey in wet weather. Slugs and the Spanish slug (dræbersnegl) hollow out ripe berries overnight. Birds peck fruit, so net the bed. Vine weevil larvae eat roots so plants wilt and lift out easily. Aphids and strawberry mite distort leaves. Powdery mildew curls leaves upward with a purplish tinge. Red core and verticillium wilt cause whole plants to collapse on wet soil.',
      denmarkTips:
        'Plant runners in August-September for a full crop the next June, or in April for a lighter first crop. Mulch with straw in May as the fruit sets and net against blackbirds. Lay out slug traps and collect dræbersnegle in damp evenings from May onwards. Cover flowering plants with fleece when frost is forecast in May. Harvest June-July, picking every other day in the morning. Tidy old foliage in late July, root runners for next year, and rake fallen leaves off the crowns in autumn. In pots on a balcony, move them against the wall and wrap in bubble wrap in December.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 0, note: 'At the base; keep moist from flowering to harvest' },
      { type: 'fertilize', intervalDays: 90, months: [3, 8], note: 'Potassium-rich fertilizer' },
      { type: 'mulch', intervalDays: 365, months: [5], note: 'Straw under the developing fruit' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Slugs, grey mould, birds' },
      { type: 'harvest', intervalDays: 2, months: [6, 7] },
      { type: 'prune', intervalDays: 365, months: [7, 8], note: 'Cut off old leaves and runners after harvest' },
    ],
    tags: ['fruit', 'edible', 'balcony', 'allotment'],
  },
  {
    id: 'vaccinium-corymbosum',
    commonName: 'Highbush blueberry',
    danishName: 'Blåbær',
    latinName: 'Vaccinium corymbosum',
    family: 'Ericaceae',
    category: 'outdoor',
    wikipediaTitle: 'Vaccinium corymbosum',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'pink'],
      habit: ['shrub', 'upright', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'An upright deciduous shrub 1-2 m tall with clusters of white bell flowers in May, large sweet blue berries from late July and brilliant red autumn foliage. It needs acidic soil (pH 4.5-5.5) and is often grown in a pot of ericaceous compost. Varieties such as \'Bluecrop\', \'Duke\', \'Patriot\' and \'Northland\' do well in Denmark. Plant two varieties for a bigger crop.',
      watering:
        'Keep the shallow root ball consistently moist, never dry, especially while fruit swells in July. Use rainwater where possible, since tap water in most of Denmark is hard and slowly raises the pH. Pots need water every 1-2 days in summer.',
      light:
        'Full sun for the sweetest fruit and best autumn colour; tolerates light shade with a smaller crop.',
      soil:
        'Acidic, humus-rich, moist but free-draining soil. Most Danish garden soil is too limy, so dig in plenty of sphagnum peat or composted bark, or grow in a large pot (at least 40 l) of ericaceous (rhododendron) compost. Mulch with pine needles or bark.',
      temperature:
        'Fully hardy in Denmark, tolerating -25 °C; it actually needs a cold winter to fruit. Flowers in May can be nipped by frost, so cover with fleece on cold nights. Pots should be insulated or placed against a wall in winter so the roots do not freeze solid for weeks.',
      feeding:
        'Use an ericaceous (rhododendron) fertilizer in April and again in June; never use lime or ordinary fertilizer containing calcium nitrate. Yellowing leaves with green veins mean the pH is too high.',
      pruning:
        'Leave unpruned for the first 2-3 years. From then on, in February-March, remove a few of the oldest, twiggy stems at the base each year and any weak or low growth, so the bush is always renewing. Fruit forms on the previous year\'s wood.',
      propagation:
        'Softwood cuttings in June or hardwood cuttings in late winter, rooted in acidic compost; slow but reliable. Layering low branches also works.',
      problems:
        'Birds (blackbirds, starlings) take ripe berries, so net the bush from July. Chlorosis (yellow leaves, green veins) from lime or hard water is the most common problem. Grey mould can rot flower clusters in wet springs. Aphids on shoot tips and vine weevil in pots occasionally. Spotted wing drosophila can spoil late fruit.',
      denmarkTips:
        'Plant in April or September in ericaceous compost, preferably in a large pot or a raised bed lined with peat, since Danish clay and chalk are too alkaline. Collect rainwater for watering through summer. Cover flowers against May frost, net against birds from mid-July, and harvest from late July into September, picking only berries that have been blue for a few days. Mulch with pine bark in spring, prune in late winter, and move pots to a sheltered wall in November.',
    },
    tasks: [
      { type: 'water', intervalDays: 2, winterIntervalDays: 14, note: 'Rainwater; keep root ball moist' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Ericaceous fertilizer only' },
      { type: 'prune', intervalDays: 365, months: [2, 3], note: 'Remove oldest stems at base from year 3' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Pine bark or needles' },
      { type: 'harvest', intervalDays: 4, months: [7, 8, 9] },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Birds, chlorosis, aphids' },
    ],
    tags: ['fruit', 'edible', 'balcony', 'acid-soil', 'autumn-colour'],
  },
  {
    id: 'ribes-rubrum',
    commonName: 'Redcurrant',
    danishName: 'Ribs',
    latinName: 'Ribes rubrum',
    family: 'Grossulariaceae',
    category: 'outdoor',
    wikipediaTitle: 'Redcurrant',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['lobed', 'palmate'],
      leafPattern: ['plain'],
      flowerColor: ['green', 'yellow'],
      habit: ['shrub', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A tough deciduous shrub of 1-1.5 m with maple-like lobed leaves and strings of translucent red berries in July, a staple of every Danish allotment and the basis of ribsgelé. Inconspicuous greenish flowers appear in April. Reliable varieties include \'Jonkheer van Tets\', \'Rovada\' and \'Rondom\'; white currants are the same species.',
      watering:
        'Water weekly during dry spells from flowering until harvest, especially in the first two years and on sandy soil. Established bushes are fairly drought tolerant but fruit shrivels without water in June.',
      light:
        'Full sun or partial shade; redcurrants are one of the few fruits that crop well on a north-facing fence. Fruit colours best in sun.',
      soil:
        'Any moist, fertile, well-drained soil. Tolerates heavy clay better than most fruit. Mulch generously to keep the shallow roots cool.',
      temperature:
        'Extremely hardy, to -30 °C; no winter protection needed in Denmark. Flowers in April can be damaged by hard frost but usually set fruit regardless.',
      feeding:
        'Feed with a potassium-rich fertilizer (fruit or tomato feed) in March and mulch with compost or manure. Potassium deficiency shows as brown scorched leaf edges.',
      pruning:
        'Grown on a short leg with 8-10 main branches. In winter (January-March) shorten the previous year\'s leaders by half and cut side shoots back to 1-2 buds, since fruit forms on old wood and spurs. In late June, summer-prune new side shoots to five leaves to let in light and air. Remove shoots arising from the base.',
      propagation:
        'Hardwood cuttings 25-30 cm long taken in October-November, with lower buds rubbed off, pushed into a sheltered bed; they root by next autumn.',
      problems:
        'Birds strip ripe berries in a day, so net bushes in June. Currant blister aphid causes red puckered blisters on leaves, mostly cosmetic. Gooseberry sawfly caterpillars can strip leaves in May-June. Coral spot shows as orange pustules on dead wood. Leaf spot and mildew in damp summers. Big bud mite is mainly a blackcurrant problem.',
      denmarkTips:
        'Plant bare-root in October-November or March, spacing bushes 1.2-1.5 m apart. Winter prune in February, summer prune in late June, and net against blackbirds and thrushes as soon as the berries blush, usually mid-June. Harvest whole strings in July when fully red; they hang for weeks if netted. Mulch with compost in spring and water in dry spells on light Jutland soils. Check for sawfly caterpillars from mid-May and pick them off by hand.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'In dry spells from flowering to harvest' },
      { type: 'fertilize', intervalDays: 365, months: [3], note: 'Potassium-rich fertilizer' },
      { type: 'prune', intervalDays: 180, months: [2, 6], note: 'Winter spur pruning; summer prune side shoots' },
      { type: 'mulch', intervalDays: 365, months: [4] },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8], note: 'Sawfly, blister aphid, birds' },
      { type: 'harvest', intervalDays: 5, months: [7] },
    ],
    tags: ['fruit', 'edible', 'allotment', 'shade-tolerant'],
  },
  {
    id: 'rubus-idaeus',
    commonName: 'Raspberry',
    danishName: 'Hindbær',
    latinName: 'Rubus idaeus',
    family: 'Rosaceae',
    category: 'outdoor',
    wikipediaTitle: 'Rubus idaeus',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['compound'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['upright', 'clumping'],
      size: 'large',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'A suckering perennial that throws up tall canes of 1.5-2 m with pinnate leaves and sweet red fruit. Summer-fruiting varieties (such as \'Glen Ample\', \'Tulameen\') fruit in July on last year\'s canes; autumn-fruiting varieties (\'Autumn Bliss\', \'Polka\', \'Heritage\') fruit from August to October on this year\'s canes and are easier to manage. Needs a post-and-wire support.',
      watering:
        'Water weekly in dry weather from flowering until the end of harvest; raspberries have shallow roots and fruit stays small and crumbly without water. Avoid wetting the canes and fruit. Keep moist but never waterlogged.',
      light:
        'Full sun for the heaviest crops, though they tolerate partial shade and still fruit reasonably. Shelter from strong wind, which snaps laden canes.',
      soil:
        'Fertile, slightly acidic, well-drained soil with lots of organic matter. They hate wet feet: on heavy Danish clay plant on a raised ridge. Mulch annually.',
      temperature:
        'Very hardy, to -25 °C or lower; no winter protection needed in Denmark. Autumn types may not ripen their last fruit before frost in a cool year, so pick early-ripening autumn varieties like \'Polka\'.',
      feeding:
        'Apply a general or potassium-rich fertilizer in March and mulch with compost or manure in April. Avoid excess nitrogen, which produces soft canes prone to disease.',
      pruning:
        'Summer-fruiting: immediately after harvest in July-August, cut all canes that fruited down to the ground, keep 6-8 of the strongest new green canes per metre, tie them to wires, and tip them in February. Autumn-fruiting: cut ALL canes to the ground in February each year; new canes grow and fruit the same season. Remove suckers wandering out of the row.',
      propagation:
        'Dig up rooted suckers in November-March and replant. Replace the whole row every 8-10 years, in a new spot, with certified virus-free stock.',
      problems:
        'Raspberry beetle larvae appear as small brown grubs inside fruit, with dried patches on the berry; worst on summer types. Grey mould rots fruit in wet weather. Cane blight and spur blight cause purple-brown patches and dead canes. Raspberry virus shows as yellow mottled, stunted leaves and means replacing the stock. Birds and wasps take ripe fruit. Yellow leaves with green veins indicate iron deficiency on limy soil.',
      denmarkTips:
        'Plant bare-root canes in November or March, 40-50 cm apart, and cut them to 25 cm. Install posts and wires at planting. Autumn-fruiting types are easier for beginners in Denmark: cut everything down in February, then harvest August to the first frost. For summer types, net against birds in late June, harvest in July and cut out fruited canes straight after. Mulch in April, water in dry June weather, and hoe out suckers that invade paths. Check fruit for raspberry beetle grubs when picking; a lure trap in May helps.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Dry spells from flowering to end of harvest' },
      { type: 'fertilize', intervalDays: 365, months: [3] },
      { type: 'prune', intervalDays: 180, months: [2, 8], note: 'Autumn types: all canes in Feb. Summer types: fruited canes in Aug' },
      { type: 'mulch', intervalDays: 365, months: [4] },
      { type: 'harvest', intervalDays: 3, months: [7, 8, 9, 10], note: 'Pick every 2-3 days when berries slide off the core' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Raspberry beetle, grey mould, birds' },
    ],
    tags: ['fruit', 'edible', 'allotment', 'pollinator-friendly'],
  },
]
