import type { Plant } from '../../types'

export const part2: Plant[] = [
  {
    id: 'rhododendron',
    commonName: 'Rhododendron',
    danishName: 'Rododendron',
    latinName: 'Rhododendron',
    family: 'Ericaceae',
    category: 'outdoor',
    wikipediaTitle: 'Rhododendron',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['partial-shade', 'shade'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'pink', 'purple', 'red', 'white', 'yellow'],
      habit: ['shrub', 'bushy'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Rhododendrons are evergreen shrubs with leathery dark leaves and spectacular trusses of flowers in May and June. They need acidic, moist, humus-rich soil and dappled shade, which the Danish climate provides well apart from the soil. Hardy hybrids and the compact yakushimanum types are the safest choices.',
      watering:
        'Shallow fibrous roots dry out fast, so water deeply once a week in dry spells from May to September, and give a good soak in autumn before winter so the evergreen leaves do not desiccate. Use rainwater where possible; Danish tap water is often hard and raises the soil pH over time.',
      light:
        'Dappled shade or morning sun with afternoon shade, for example under high trees or on the north or east side of the house. Deep shade reduces flowering; full sun on dry soil scorches and yellows the leaves.',
      soil:
        'Acidic (pH 4.5-5.5), moist, open and rich in organic matter. Most Danish garden soil is too limy or too heavy, so plant in a wide, shallow hole filled with rhododendron compost, composted bark and leaf mould, or build a raised bed. Never plant deep; the top of the root ball should sit level with or slightly above the soil.',
      temperature:
        'Hardy hybrids and species like R. catawbiense and R. yakushimanum tolerate -20 to -25 °C and are fully hardy in Denmark (zone 7-8). Leaves curl and droop in frost, which is normal. Early-flowering varieties can have their blooms browned by frost in April-May. Cold drying winds damage evergreen leaves more than cold itself.',
      feeding:
        'Feed with an ericaceous (rhododendron) fertiliser in April and again lightly after flowering in June. Never use lime, bonemeal or mushroom compost. A yearly mulch of pine needles, bark or leaf mould feeds the surface roots and keeps the soil acidic.',
      pruning:
        'Little pruning is needed. Snap off the spent flower trusses (deadheading) just above the new buds in June to put energy into growth rather than seed. Overgrown plants can be cut back hard after flowering and will regrow from the old wood, though they may skip a year of flowers.',
      propagation:
        'Layer a low branch into the soil in spring and leave for a year or two. Semi-ripe cuttings in August are possible but slow. Buying grafted or micropropagated plants is far easier.',
      problems:
        'Yellow leaves with green veins mean chlorosis from limy soil or hard water. Vine weevil adults notch leaf edges and their grubs eat roots. Rhododendron leafhopper spreads bud blast, which turns flower buds brown and bristly. Powdery mildew and leaf spot appear in humid weather. Phytophthora root rot kills plants in waterlogged soil, seen as wilting that water does not fix. Rhododendron is poisonous to pets, livestock and children if eaten.',
      denmarkTips:
        'Spring: feed with ericaceous fertiliser in April, top up the bark or needle mulch and water with rainwater if the spring is dry. Protect open flowers with fleece on frosty May nights. Summer: deadhead in June, water deeply in July-August drought and check the leaves for weevil notches. Autumn: September-October is the best planting time; use ericaceous compost and plant shallow. Give a thorough soak before the ground freezes. Winter: the main Danish risk is wet clay rotting the roots, so improve drainage, and cold east winds scorching leaves on exposed sites, so plant in the lee of trees or the house. In West Jutland the naturally acidic sandy soil is ideal but shelter from the wind is essential. Dræbersnegle are not a problem for rhododendron.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Rainwater if possible; soak well before winter' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Ericaceous feed only; never lime' },
      { type: 'deadhead', intervalDays: 14, months: [6], note: 'Snap off spent trusses above new buds' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Bark, pine needles or leaf mould' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Vine weevil notches, chlorosis, bud blast' },
    ],
    tags: ['shrub', 'evergreen', 'shade-garden', 'acid-soil'],
  },
  {
    id: 'paeonia-lactiflora',
    commonName: 'Chinese peony',
    danishName: 'Pæon / Bonderose',
    latinName: 'Paeonia lactiflora',
    family: 'Paeoniaceae',
    category: 'outdoor',
    wikipediaTitle: 'Paeonia lactiflora',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['compound', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['pink', 'white', 'red'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'The herbaceous peony is a long-lived perennial with deeply divided foliage and huge, often fragrant bowl-shaped flowers in late May and June. It is a fixture of old Danish farm gardens, hence the name "bonderose". Once settled it flowers for fifty years or more with almost no attention, but it hates being moved.',
      watering:
        'Water new plants regularly in their first year. Established peonies are deep-rooted and need water only in dry spells during spring growth and bud formation. Avoid overhead watering when in flower, as the heavy heads collect water and rot.',
      light:
        'Full sun gives the most flowers; light afternoon shade helps the flowers last longer and is fine in Denmark. Avoid planting under trees where roots compete.',
      soil:
        'Deep, fertile, well-drained soil, neutral to slightly alkaline. Peonies do well on improved clay. The critical rule is planting depth: the red buds (eyes) on the crown must sit no more than 2-5 cm below the surface. Planted deeper, they grow leaves but never flower.',
      temperature:
        'Extremely hardy (USDA zone 3-8) and needs a cold winter to flower, so Denmark suits it perfectly. No winter protection required. The emerging red shoots in April tolerate frost; a late frost in May can occasionally damage buds but rarely.',
      feeding:
        'A dressing of compost or a balanced low-nitrogen fertiliser in March as the shoots appear, and a little bonemeal or potash in autumn. Too much nitrogen gives floppy stems and fewer flowers. Keep mulch off the crown.',
      pruning:
        'Deadhead after flowering, cutting the stalk back to a leaf. Leave the foliage all summer to feed the roots, then cut the stems to the ground in October-November when they yellow and remove the debris to prevent botrytis carrying over.',
      propagation:
        'Divide in September-October only if necessary, lifting the whole crown and cutting it into pieces with 3-5 eyes each. Divisions take 2-3 years to flower well. Peonies grown from seed take 5-7 years.',
      problems:
        'Peony wilt / grey mould (Botrytis paeoniae) is the main disease: stems wilt and brown at the base, and buds turn brown and fail to open, especially in wet springs; cut out affected stems and clear debris in autumn. Ants on the buds are harmless and feed on nectar. Buds that form but stay small and dry are usually the result of a late frost or drought. Stems may need staking or a peony ring because the flowers are heavy and flop in rain.',
      denmarkTips:
        'Spring: feed lightly in March, put a support ring in place by April before the stems are tall, and check for botrytis wilt in the wet weeks of May. Summer: deadhead in June, water in dry spells and enjoy the cut flowers. Autumn: September-October is the only good time to plant or divide; buy bare-root crowns and plant them shallow with the eyes 2-5 cm deep, in a spot where they can stay forever. Cut down and remove all foliage in late October. Winter: no protection needed; Danish winters are what the plant wants. On wet clay, plant on a slight mound so the crown never sits in water. Peonies are wind-sturdy if staked, and dræbersnegle only nibble the very young shoots in April, so a little slug protection then is enough.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'Only in dry spells during growth and budding' },
      { type: 'fertilize', intervalDays: 365, months: [3], note: 'Compost or low-nitrogen feed; none on the crown' },
      { type: 'deadhead', intervalDays: 7, months: [6], note: 'Cut spent flowers to a leaf; leave the foliage' },
      { type: 'prune', intervalDays: 365, months: [10, 11], note: 'Cut stems to ground and remove debris' },
      { type: 'divide', intervalDays: 2920, months: [9, 10], note: 'Only if needed; 3-5 eyes per piece, plant shallow' },
    ],
    tags: ['cottage-garden', 'cut-flowers', 'perennial', 'fragrant', 'long-lived'],
  },
  {
    id: 'tulipa',
    commonName: 'Tulip',
    danishName: 'Tulipan',
    latinName: 'Tulipa',
    family: 'Liliaceae',
    category: 'outdoor',
    wikipediaTitle: 'Tulip',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['lance', 'strap'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'red', 'yellow', 'pink', 'white', 'purple', 'orange'],
      habit: ['bulb', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Tulips are spring bulbs with grey-green strap leaves and cup-shaped flowers in every colour but true blue, blooming from April to mid-May in Denmark. The showy hybrids (Darwin, Triumph, parrot) are often treated as annuals, while species tulips and Darwin hybrids come back reliably for years. Plant them in autumn.',
      watering:
        'Danish autumn and spring rain normally supplies all the water tulips need in the ground. Water only if the spring is unusually dry while the plants are in leaf and bud. Pots need regular watering from March until the foliage dies down, then should be kept dry.',
      light:
        'Full sun for the strongest stems and best colour, though they manage in light shade under deciduous trees because they flower before the canopy closes. In shade the stems lean towards the light.',
      soil:
        'Fertile, well-drained soil; bulbs rot in waterlogged clay. Plant 15-20 cm deep (three times the bulb height) and 10 cm apart, deeper on light soil. On heavy Danish clay, add grit to the planting hole or use raised beds and pots. Species tulips want poor, sandy, sunny spots.',
      temperature:
        'Fully hardy in Denmark (USDA zone 3-8) and need the winter cold to flower. Buds and open flowers tolerate light frosts, but a hard frost on open blooms can bruise the petals. Pots should be protected from freezing solid for weeks on end by standing them against a wall or wrapping them in bubble wrap.',
      feeding:
        'Add a little bonemeal or bulb fertiliser to the planting hole in autumn and feed with a high-potash fertiliser as the leaves emerge in March if you want the bulbs to return. Feeding after flowering while the leaves are green helps the bulb build up for next year.',
      pruning:
        'Snap off the seed heads after flowering but leave the leaves until they turn yellow and come away easily, about six weeks later, so the bulb can recharge. Do not tie or plait the leaves. Lift bulbs of fancy hybrids once the leaves have died down if you want to store them, or simply replace them each autumn.',
      propagation:
        'Lift bulbs in June-July, separate the offsets, dry them in a shed and replant the largest in October-November. Small offsets take a few years to reach flowering size. Species tulips can be left to naturalise and seed.',
      problems:
        'Tulip fire (Botrytis tulipae) causes scorched, twisted leaves and spotted flowers in wet springs; lift and destroy affected plants and do not replant tulips there for three years. Slugs and dræbersnegle eat emerging shoots and flowers. Squirrels, mice and voles dig up and eat bulbs; plant with a layer of chicken wire over them. Aphids spread tulip-breaking virus, seen as streaked petals. Bulbs rot in wet soil. All parts are toxic to cats and dogs, and the bulb is the most dangerous part.',
      denmarkTips:
        'Autumn: plant bulbs from mid-October to late November once the soil has cooled below 10 °C; late planting reduces tulip fire. Plant deep (15-20 cm) in well-drained soil and mix grit into clay. Protect against mice and squirrels with wire. Winter: nothing needed in the ground. Protect pots from being waterlogged or frozen solid, and from the rain-soaked winters in the west by standing them under an eave. Spring: shoots appear in March; start slug protection immediately and feed with potash. Stake tall varieties in windy coastal gardens or choose shorter, sturdier Triumph and Greigii types. Summer: deadhead in May, let the leaves die back fully by late June, then lift and store hybrids somewhere dry and airy or treat them as annuals. Species tulips (T. tarda, T. turkestanica, T. sylvestris) are the ones that truly come back year after year in Danish gardens.',
    },
    tasks: [
      { type: 'plant-out', intervalDays: 365, months: [10, 11], note: 'Plant bulbs 15-20 cm deep in cool soil' },
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, months: [3, 4, 5], note: 'Only in a dry spring while in leaf' },
      { type: 'fertilize', intervalDays: 365, months: [3], note: 'High-potash bulb feed as leaves emerge' },
      { type: 'deadhead', intervalDays: 7, months: [4, 5], note: 'Remove seed heads; leave leaves to yellow' },
      { type: 'check-pests', intervalDays: 7, months: [3, 4, 5], note: 'Slugs on shoots, tulip fire in wet weather' },
    ],
    tags: ['spring-bulb', 'cut-flowers', 'cottage-garden', 'container'],
  },
  {
    id: 'narcissus',
    commonName: 'Daffodil',
    danishName: 'Påskelilje',
    latinName: 'Narcissus',
    family: 'Amaryllidaceae',
    category: 'outdoor',
    wikipediaTitle: 'Narcissus (plant)',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['strap', 'grass-like'],
      leafPattern: ['plain'],
      flowerColor: ['yellow', 'white', 'orange'],
      habit: ['bulb', 'clumping'],
      size: 'small',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Daffodils are the toughest and most reliable spring bulbs, with strap leaves and trumpet flowers in yellow, white and orange from March to May. In Denmark they are so tied to Easter that the Danish name means "Easter lily". They naturalise in grass and borders and come back for decades with no attention.',
      watering:
        'Normal Danish rainfall is enough in the ground. Water only in an unusually dry spring while the plants are growing, and keep pots moist from February until the foliage yellows. Bulbs rest dry in summer and should not be watered.',
      light:
        'Sun or light shade. They flower well under deciduous trees and in orchards because they finish before the leaves shade them. Very deep shade reduces flowering over the years.',
      soil:
        'Almost any soil that is not waterlogged. Plant 10-15 cm deep (two to three times the bulb height) and 10 cm apart in September-October. In grass, plant in drifts, and on heavy clay add grit to the planting area.',
      temperature:
        'Totally hardy in Denmark (USDA zone 3-8). Leaves and buds shrug off frost and snow; after a hard frost the stems lie flat but stand up again as they thaw. Pots can freeze solid without harm as long as they are not waterlogged.',
      feeding:
        'Daffodils need little. A high-potash feed (tomato fertiliser or bulb feed) in March as they come into growth, or a scattering of bonemeal in autumn, keeps naturalised clumps flowering. Avoid high-nitrogen lawn feed over bulbs in grass.',
      pruning:
        'Deadhead after flowering to stop seed forming, unless naturalising. Leave the leaves to die back for at least six weeks, until mid-June, before cutting or mowing; cutting too early is the main reason bulbs go "blind" (leaves but no flowers).',
      propagation:
        'Lift and divide overcrowded clumps every 4-5 years in June-July as the leaves die down, or in September. Separate the offsets and replant immediately. Clumps that stop flowering are usually overcrowded or planted too shallow.',
      problems:
        'Narcissus bulb fly larvae hollow out bulbs, leaving soft bulbs and weak, grassy leaves. Basal rot turns bulbs soft and brown from the base in wet, warm conditions. Slugs chew flowers and leaves to a limited degree but dræbersnegle generally leave daffodils alone. Blindness (no flowers) comes from shallow planting, overcrowding, shade or early foliage removal. All parts, especially the bulb, are poisonous; the sap irritates skin.',
      denmarkTips:
        'Autumn: plant bulbs in September-October, earlier than tulips, as they root in warm soil. Plant deep and in generous drifts; daffodils are also one of the few bulbs rodents refuse. Winter: nothing to do. Spring: enjoy the flowers around Easter; feed with potash in March and deadhead in April-May. Flowers are heavy and leaning in a wet, windy Danish spring, so plant shorter varieties (Tête-à-Tête, Jetfire) in exposed coastal gardens. Summer: leave the leaves until mid-June, then mow or tidy; lift and divide crowded clumps if flowering has declined. Daffodils tolerate heavy clay better than most bulbs but will rot in permanently waterlogged ground, so avoid the lowest, wettest corners.',
    },
    tasks: [
      { type: 'plant-out', intervalDays: 365, months: [9, 10], note: 'Plant bulbs 10-15 cm deep in drifts' },
      { type: 'water', intervalDays: 14, winterIntervalDays: 0, months: [3, 4, 5], note: 'Only in a dry spring; pots weekly' },
      { type: 'fertilize', intervalDays: 365, months: [3], note: 'High-potash feed as shoots emerge' },
      { type: 'deadhead', intervalDays: 10, months: [4, 5], note: 'Remove seed heads; leave leaves until mid-June' },
      { type: 'divide', intervalDays: 1460, months: [6, 9], note: 'Lift and split crowded clumps' },
    ],
    tags: ['spring-bulb', 'naturalising', 'cut-flowers', 'easy'],
  },
  {
    id: 'clematis',
    commonName: 'Clematis',
    danishName: 'Klematis / Skovranke',
    latinName: 'Clematis',
    family: 'Ranunculaceae',
    category: 'outdoor',
    wikipediaTitle: 'Clematis',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['compound', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'purple', 'blue', 'pink', 'white', 'red'],
      habit: ['climbing'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Clematis are climbers that cling with twining leaf stalks and carry flowers from tiny bells to dinner-plate stars. In Denmark the spring-flowering C. montana and C. alpina, the large-flowered hybrids of June, and the late viticella types for July-September are all common. Pruning depends on which group the variety belongs to.',
      watering:
        'Clematis are thirsty, especially large-flowered hybrids against a dry wall. Water deeply once a week in dry weather in their first two years and in any dry spell afterwards, and generously in pots. Mulch keeps the roots cool and moist.',
      light:
        'Flowers in sun, roots in shade: give the top growth at least half a day of sun but shade the root zone with a paving slab, low shrubs or mulch. Pale and striped varieties fade in full sun and look best on an east or north-east wall.',
      soil:
        'Rich, moisture-retentive, well-drained soil, neutral to slightly alkaline. Dig a big hole with plenty of compost. Plant large-flowered hybrids 5-8 cm deeper than they were in the pot so buried buds can regrow if clematis wilt strikes; plant species at the same level.',
      temperature:
        'Most clematis are fully hardy in Denmark (USDA zone 4-8), including alpina, montana, viticella and the large-flowered hybrids. Evergreen C. armandii and the texensis types are borderline and need a sheltered south wall. Early spring growth can be nipped by May frost but regrows.',
      feeding:
        'Feed in March with a rose or general shrub fertiliser and mulch with compost or manure. Liquid-feed large-flowered hybrids every two weeks from April until flowering begins, then stop while in flower. A potash feed after flowering helps the second flush.',
      pruning:
        'Group 1 (early flowering: alpina, macropetala, montana): prune only to tidy, straight after flowering in May-June. Group 2 (large-flowered hybrids flowering May-June on old wood): in late February-March remove dead stems and cut each remaining stem back to a pair of strong buds, then lightly after the first flush. Group 3 (late flowering: viticella, tangutica, Jackmanii, texensis): cut all stems hard to 30 cm above the ground in late February-March. If unsure, note when it flowers: before June means group 1 or 2, after June means group 3.',
      propagation:
        'Layer a stem in spring by burying a node under soil and pegging it; it roots within a year. Internodal softwood cuttings in June root in a propagator. Species can be grown from seed sown in autumn.',
      problems:
        'Clematis wilt (Phoma clematidina) makes whole shoots of large-flowered hybrids collapse suddenly and blacken; cut affected stems to the ground and the plant usually resprouts from below, which is why deep planting matters. Slugs and dræbersnegle strip young shoots in spring. Aphids and earwigs chew buds and petals. Powdery mildew affects some viticellas in dry summers. The sap can irritate skin and all parts are mildly toxic if eaten.',
      denmarkTips:
        'Spring: prune groups 2 and 3 in late February-March, feed and mulch, and protect emerging shoots from slugs with pellets or a copper ring; a clematis can be eaten to nothing in a week by dræbersnegle. Tie in new growth weekly. Summer: water deeply in dry spells, tidy group 1 types after they finish in June, and give a potash feed. Autumn: September is the best planting month in Denmark, in warm, moist soil. Plant on the lee side of fences; strong West Jutland winds snap the brittle stems, so give coastal clematis a sheltered wall and firm support. Winter: leave the top growth on group 3 types until spring for a little protection, and mulch the base in November. Clematis hate winter-wet clay, so improve drainage and plant slightly raised.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Deep soak at the root; keep roots mulched' },
      { type: 'fertilize', intervalDays: 14, months: [3, 4, 5], note: 'Rose feed in March; liquid feed until flowering' },
      { type: 'prune', intervalDays: 365, months: [2, 3], note: 'Group 2 lightly, group 3 hard to 30 cm; group 1 after flowering' },
      { type: 'mulch', intervalDays: 180, months: [4, 11], note: 'Compost over the root zone, clear of stems' },
      { type: 'check-pests', intervalDays: 7, months: [4, 5, 6], note: 'Slugs on new shoots, wilt on hybrids' },
    ],
    tags: ['climber', 'cottage-garden', 'wall', 'pollinator-friendly'],
  },
]
