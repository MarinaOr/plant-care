import type { Plant } from '../../types'

export const part1: Plant[] = [
  {
    id: 'hydrangea-macrophylla',
    commonName: 'Bigleaf hydrangea',
    danishName: 'Hortensia',
    latinName: 'Hydrangea macrophylla',
    family: 'Hydrangeaceae',
    category: 'outdoor',
    wikipediaTitle: 'Hydrangea macrophylla',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['partial-shade', 'direct-sun'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain'],
      flowerColor: ['pink', 'blue', 'white', 'purple'],
      habit: ['shrub', 'bushy'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Bigleaf hydrangea is a rounded deciduous shrub with large, glossy leaves and big mophead or lacecap flower heads from July into autumn. It is one of the most planted shrubs in Danish gardens because it thrives in the cool, moist climate. Flower colour shifts from pink on limy soil to blue on acidic soil.',
      watering:
        'Hydrangeas are thirsty and wilt visibly when dry, so water deeply once or twice a week in dry spells, more often in pots. Avoid wetting the flowers and leaves in the evening. Established plants in clay soil rarely need extra water outside of July and August.',
      light:
        'Best in morning sun with afternoon shade. Full sun is fine on the Danish coast and in the north of the country as long as the soil never dries out, but hot south-facing walls scorch leaves and flowers. Deep shade gives lush leaves and few flowers.',
      soil:
        'Moist, humus-rich, well-drained soil. Dig in compost or leaf mould before planting. For blue flowers the soil must be acidic (pH 5-5.5); use rhododendron compost and an aluminium-sulphate "blue" feed. On limy soil the flowers will be pink regardless.',
      temperature:
        'Fully hardy in Denmark (USDA zone 6-8) down to about -15 to -20 °C, but the flower buds formed the previous summer are vulnerable to late frosts in April and May. In exposed inland gardens a cold spring can mean no flowers that year. Leave the old flower heads on over winter to protect the buds beneath.',
      feeding:
        'Apply a balanced slow-release shrub fertiliser or a specialist hydrangea feed in April and again in June. Do not feed after July, as soft growth will not harden before frost. Too much nitrogen gives leaves instead of flowers.',
      pruning:
        'Prune lightly in late March or April once the buds swell: remove the dead flower heads down to the first pair of fat buds and cut out one or two of the oldest stems at the base. Do not cut the whole shrub back hard, as mopheads flower on last year\'s wood and you would lose a season of flowers.',
      propagation:
        'Take softwood cuttings in June or semi-ripe cuttings in August from non-flowering shoots. Root them in a pot of gritty compost covered with a plastic bag; they root within a month.',
      problems:
        'Generally trouble-free. Aphids cluster on new shoots in May and June; powdery mildew shows as a white dusting on leaves in dry summers; grey mould (botrytis) rots flowers in prolonged wet weather. Yellow leaves with green veins mean chlorosis from limy soil, cured with a chelated iron or rhododendron feed. Vine weevil grubs occasionally eat roots of potted plants.',
      denmarkTips:
        'Spring: wait until late April to prune, when you can see which buds survived the frost, and mulch with compost or leaf mould. Keep fleece ready for frosty nights in May. Summer: water deeply during dry spells, especially in June and July, and deadhead only if you want to. Autumn: plant new shrubs in September-October while the soil is warm and wet, which suits them far better than spring planting. Winter: leave the dead flower heads on; they protect next year\'s buds. In West Jutland and on the coasts, plant in the lee of a hedge or house; wind and salt spray scorch the big leaves. Hydrangeas dislike waterlogged clay in winter, so improve drainage with grit and plant slightly raised.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 0, note: 'Deep soak in dry spells; pots daily in heat' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Hydrangea or shrub feed; stop after June' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Cut old flower heads to first fat bud pair' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Compost or leaf mould around the base' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Aphids on new shoots, mildew on leaves' },
    ],
    tags: ['shrub', 'shade-garden', 'cottage-garden', 'cut-flowers'],
  },
  {
    id: 'rosa-garden-rose',
    commonName: 'Garden shrub rose',
    danishName: 'Rose',
    latinName: 'Rosa',
    family: 'Rosaceae',
    category: 'outdoor',
    wikipediaTitle: 'Garden roses',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['compound', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'red', 'pink', 'white', 'yellow', 'orange'],
      habit: ['shrub', 'upright', 'bushy'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'Garden roses are thorny deciduous shrubs with pinnate leaves and fragrant flowers in almost every colour from June until the first frosts. Modern shrub roses and the robust old rugosa and Danish-bred varieties are far easier than hybrid teas. A well-fed rose in full sun is the centrepiece of the classic Danish cottage garden.',
      watering:
        'Water newly planted roses weekly for their first summer. Established roses have deep roots and only need a thorough soak every 7-10 days in dry spells. Water at the base in the morning rather than over the leaves, which encourages black spot and mildew.',
      light:
        'At least six hours of direct sun a day. Roses in shade grow leggy, flower poorly and suffer more disease. Good air movement around the plant is just as important as the light.',
      soil:
        'Deep, fertile, well-drained loam. Roses enjoy heavier soil than most shrubs as long as it is not waterlogged, so Danish clay suits them when improved with compost and well-rotted manure. Plant with the graft union about 5 cm below soil level. Avoid replanting a rose where another rose has grown (replant disease).',
      temperature:
        'Most shrub roses, rugosas and floribundas are fully hardy in Denmark (USDA zone 7-8) to -20 °C or below. Hybrid teas and some English roses may suffer dieback in a hard, windy winter; mound soil or compost over the base in November. Late frosts rarely harm roses because they leaf out late.',
      feeding:
        'Feed with a rose fertiliser or well-rotted manure in March-April as growth starts, and again after the first flush in late June. Stop feeding by mid-July so growth hardens before winter. A handful of Epsom salts in spring deepens leaf colour.',
      pruning:
        'Prune in March when the forsythia flowers: remove dead, diseased and crossing stems, then shorten shrub roses by about a third and floribundas by half, cutting to an outward-facing bud. Rambling roses are instead pruned after flowering in August. Deadhead repeat-flowering roses through the summer to keep them blooming.',
      propagation:
        'Take hardwood cuttings 20 cm long in October and push them two-thirds into a trench of gritty soil; they root by the following autumn. Most garden roses are grafted, so cuttings produce plants on their own roots, which is fine for shrub and rugosa types.',
      problems:
        'Aphids crowd on buds and shoot tips in May and June. Black spot shows as black blotches on yellowing leaves that drop, worst in wet summers; rust shows as orange pustules under the leaves; powdery mildew coats leaves and buds in white in dry spells. Rose sawfly larvae skeletonise leaves and leaf-rolling sawfly curls them. Choose disease-resistant varieties (ADR-rated) and rake up fallen leaves to break the disease cycle.',
      denmarkTips:
        'Spring: prune in mid-to-late March, feed and mulch with manure or compost, and watch for aphids from May. Summer: deadhead weekly, water deeply in dry spells and pick off black-spot leaves early. Autumn: October-November is the best time to plant bare-root roses in Denmark; the soil is warm and the plants settle before winter. Rake up and bin all fallen rose leaves. Winter: mound soil or compost 15-20 cm up the stems of tender varieties; strong winter winds in West Jutland rock plants loose, so firm them back in and shorten very long stems in November to reduce wind-rock. On heavy, wet clay, plant on a slight mound to keep roots out of standing water. Dræbersnegle (Spanish slugs) ignore roses, but they hide under the mulch, so check.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Deep soak at the base in dry spells' },
      { type: 'fertilize', intervalDays: 75, months: [4, 6], note: 'Rose feed or manure; none after mid-July' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Cut to outward buds, remove dead and crossing stems' },
      { type: 'deadhead', intervalDays: 7, months: [6, 7, 8, 9], note: 'Cut spent blooms to a leaf with five leaflets' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Aphids, black spot, rust, sawfly' },
      { type: 'overwinter', intervalDays: 365, months: [11], note: 'Mound compost over base of tender varieties' },
    ],
    tags: ['cottage-garden', 'cut-flowers', 'fragrant', 'pollinator-friendly'],
  },
  {
    id: 'lavandula-angustifolia',
    commonName: 'English lavender',
    danishName: 'Lavendel',
    latinName: 'Lavandula angustifolia',
    family: 'Lamiaceae',
    category: 'outdoor',
    wikipediaTitle: 'Lavandula angustifolia',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['lance'],
      leafPattern: ['silver'],
      flowerColor: ['purple', 'blue'],
      habit: ['bushy', 'shrub'],
      size: 'medium',
      evergreen: true,
      edible: true,
    },
    care: {
      summary:
        'English lavender is a compact, evergreen Mediterranean shrub with aromatic grey-green leaves and spikes of purple flowers in July and August that bees adore. It is the hardiest lavender and the one to grow in Denmark. It wants sun, poor soil and sharp drainage and dies quickly in wet, heavy ground.',
      watering:
        'Water new plants weekly in their first summer until established. After that lavender is very drought tolerant and only needs water in prolonged dry spells. Overwatering and winter wet kill far more lavender than drought ever does.',
      light:
        'Full sun all day. Lavender in shade grows loose and floppy, flowers poorly and rots in winter. A south- or west-facing position against a warm wall is ideal.',
      soil:
        'Poor, sandy or gravelly soil that drains instantly, neutral to alkaline. On Danish clay, dig in plenty of coarse grit and plant on a raised ridge or in a raised bed, or grow it in pots and troughs with a gritty, free-draining mix.',
      temperature:
        'Hardy to about -15 °C and reliable in Denmark (USDA zone 7-8) provided drainage is good. It is wet feet combined with frost, not cold alone, that kills it. Varieties like Hidcote and Munstead are the toughest. Pots should stand under an eave or against a wall for winter so they do not sit soaked.',
      feeding:
        'Lavender needs very little feed. A light dressing of a low-nitrogen fertiliser or a handful of garden lime in spring is plenty. Rich feeding gives soft growth that flops and rots.',
      pruning:
        'Prune every year or the plant becomes woody and bare at the base. Immediately after flowering in late August, trim the flower stalks off and shape the plant, cutting about 2-3 cm into the leafy growth but never into bare wood. A light tidy of the top can also be done in April.',
      propagation:
        'Take semi-ripe cuttings 8-10 cm long from non-flowering side shoots in July-August, strip the lower leaves and root in gritty compost. Plants are best replaced every 8-10 years as they age.',
      problems:
        'Few pests. Froghoppers leave blobs of cuckoo spit in June, which is harmless. Rosemary beetle (metallic striped) is spreading north and chews leaves and flowers. The main problem is root and crown rot (Phytophthora) from wet soil, seen as sections of the plant turning grey and dying. Grey mould can appear on plants that stay damp in autumn.',
      denmarkTips:
        'Spring: plant in May after the frosts, when the soil has warmed; lavender planted into cold wet soil in autumn often rots before spring. Tidy lightly in April. Summer: enjoy the flowers in July-August and harvest for drying just as the buds open. Trim hard right after flowering in late August so new growth hardens before winter. Autumn: do not cut back late in autumn and do not mulch with compost or bark; a mulch of grit or gravel around the crown keeps it dry. Winter: the Danish problem is mild wet winters, not cold, so ensure drainage above all. In West Jutland the sandy soil is ideal but the wind can scorch; plant in a sunny sheltered spot. Lavender is one of the few plants dræbersnegle leave completely alone.',
    },
    tasks: [
      { type: 'water', intervalDays: 14, winterIntervalDays: 0, note: 'Only in long dry spells once established' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'Light low-nitrogen feed or garden lime' },
      { type: 'prune', intervalDays: 365, months: [8, 9], note: 'Trim after flowering; never into bare wood' },
      { type: 'harvest', intervalDays: 7, months: [7, 8], note: 'Cut stems as buds open for drying' },
      { type: 'check-pests', intervalDays: 30, months: [6, 7, 8], note: 'Rosemary beetle, crown rot in wet soil' },
    ],
    tags: ['pollinator-friendly', 'fragrant', 'evergreen', 'drought-tolerant', 'herb'],
  },
  {
    id: 'buxus-sempervirens',
    commonName: 'Box / boxwood',
    danishName: 'Buksbom',
    latinName: 'Buxus sempervirens',
    family: 'Buxaceae',
    category: 'outdoor',
    wikipediaTitle: 'Buxus sempervirens',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['partial-shade', 'direct-sun', 'shade'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain'],
      flowerColor: ['green', 'yellow'],
      habit: ['shrub', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Box is a slow-growing, dense evergreen shrub with small glossy leaves, used for centuries as low hedging, edging and topiary balls in Danish gardens. It tolerates shade and hard clipping. Sadly it is now under serious attack from box blight and the box tree moth, so new plantings need thought.',
      watering:
        'Water new plants and hedges well during their first two summers, and keep potted topiary evenly moist year-round as the shallow roots dry quickly. Established box in the ground copes with normal Danish rainfall but appreciates a soak in long dry spells. Water at the base; wet foliage spreads box blight.',
      light:
        'Grows in sun or shade. Full shade gives looser, darker growth; full sun on dry soil can bronze the leaves in winter. Light shade with good air circulation is ideal and reduces disease.',
      soil:
        'Any reasonable well-drained soil including clay and chalk, ideally neutral to alkaline. Add compost before planting a hedge and space edging plants 15-20 cm apart. In pots use a loam-based compost and repot every 2-3 years.',
      temperature:
        'Fully hardy throughout Denmark (USDA zone 6-8) to -20 °C and below. Leaves can turn orange-bronze in cold, exposed winters, especially in sun and wind, but green up again in spring. Cold dry winds in West Jutland can scorch the leaves on the windward side.',
      feeding:
        'Feed clipped hedges and topiary in April with a balanced slow-release fertiliser or a box-specific feed, and again lightly in June. Clipped plants need feeding because clipping constantly removes growth. Do not feed after July.',
      pruning:
        'Clip once or twice a year: the main clip in June (traditionally after midsummer) and a light tidy in late August if needed. Never clip in hot sun or just before frost. Disinfect shears between plants to avoid spreading blight. Overgrown box can be cut back hard in May and will regrow slowly.',
      propagation:
        'Take semi-ripe cuttings 10 cm long in August-September and root in a cold frame or sheltered bed; they take a year to root well. Patient but reliable, and useful for replacing a dead section of hedge.',
      problems:
        'Box tree moth (buksbomhalvmøl): green-and-black caterpillars with webbing strip the leaves, often from the inside, leaving brown skeletal plants; check inside the bush from May onwards and pick off or spray with a Bacillus thuringiensis product. Box blight (Cylindrocladium): brown spots on leaves, black streaks on stems and rapid defoliation in wet, humid weather. Volutella blight gives pink spore masses under dead leaves. Box sucker causes cupped new leaves and is harmless. Many gardeners now replace lost box with Ilex crenata, Euonymus or Taxus.',
      denmarkTips:
        'Spring: feed in April and check inside the bushes for overwintered box tree moth caterpillars from early May, when they resume feeding. Plant new box in April-May or September. Summer: clip in June on a dull, dry day, water the hedge during drought and inspect every two weeks for caterpillars and webbing; the moth has one to two generations in Denmark (June and August-September). Autumn: a light clip in late August at the latest; clear fallen leaves from under the hedge to reduce blight. Winter: protect potted topiary from sitting waterlogged, and shield exposed hedges from drying winter wind with hessian in the coastal west. Box blight thrives in the mild wet Danish winter, so improve air circulation and avoid overhead watering. Dræbersnegle do not eat box.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'Soak hedge in dry spells; pots more often' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Balanced slow-release or box feed' },
      { type: 'prune', intervalDays: 75, months: [6, 8], note: 'Clip on a dull dry day; disinfect shears' },
      { type: 'check-pests', intervalDays: 14, months: [5, 6, 7, 8, 9], note: 'Look inside for box tree moth caterpillars and blight' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Thin compost mulch; keep clear of stems' },
    ],
    tags: ['hedge', 'evergreen', 'topiary', 'shade-garden'],
  },
  {
    id: 'hosta',
    commonName: 'Plantain lily',
    danishName: 'Funkia',
    latinName: 'Hosta',
    family: 'Asparagaceae',
    category: 'outdoor',
    wikipediaTitle: 'Hosta',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['shade', 'partial-shade'],
    traits: {
      leafShape: ['heart', 'oval'],
      leafPattern: ['variegated', 'plain', 'coloured'],
      flowerColor: ['purple', 'white'],
      habit: ['clumping', 'rosette'],
      size: 'medium',
      evergreen: false,
      edible: true,
    },
    care: {
      summary:
        'Hostas are herbaceous perennials grown for their bold mounds of heart-shaped leaves in blue-grey, gold, green and endless variegations, topped by spikes of lilac or white flowers in July-August. They are the backbone of the Danish shade garden and are totally hardy. Their one enemy is slugs.',
      watering:
        'Hostas love moisture and the leaves grow largest when the soil never dries out. Water thoroughly once a week in dry weather, more in pots. Water the soil, not the leaves, and in the morning so the surface is dry by evening when slugs are active.',
      light:
        'Shade to partial shade. Blue-leaved varieties keep their colour best in full shade; gold and yellow varieties need a few hours of morning sun to colour well. Hot afternoon sun scorches the leaves, especially of white-variegated types.',
      soil:
        'Rich, moist, humus-laden soil that holds water but is not stagnant. Dig in generous compost or leaf mould. Hostas grow well on improved clay and are excellent in large pots, where slugs are also easier to control.',
      temperature:
        'Completely hardy in Denmark (USDA zone 3-8) with no winter protection needed in the ground. The young shoots emerge in late April and a late frost in May can blacken the first leaves; cover with fleece on cold nights, though the plant will push up new leaves regardless.',
      feeding:
        'Mulch with compost or well-rotted manure in spring and the plant needs little more. A balanced granular feed in April and perhaps again in June boosts leaf size. Stop feeding by July.',
      pruning:
        'No pruning needed. Cut off flower stalks after flowering if you prefer the foliage effect. Leaves collapse with the first hard frost in October-November; clear them away to remove slug eggs and hiding places.',
      propagation:
        'Divide clumps in early spring just as the shoots appear, or in September. Slice the crown with a sharp spade or knife so each piece has several buds and roots. Clumps can stay undivided for many years and only get better.',
      problems:
        'Slugs and snails, above all the Spanish slug (dræbersnegl), shred the leaves into lace from the moment they emerge. Vine weevil grubs eat the roots of potted hostas, causing sudden collapse; adults notch leaf edges. Hosta virus X causes blotched, puckered leaves and is incurable; destroy affected plants. Crown rot can occur in soggy soil. Deer and hares graze them in rural gardens.',
      denmarkTips:
        'Spring: start slug control in late March before the shoots emerge, using ferric phosphate pellets, nematodes, copper rings or evening hunts; the first weeks are decisive because damaged leaves stay damaged all season. Mulch with compost but keep it away from the crown. Divide and plant in April. Summer: water in dry spells, keep hunting dræbersnegle after rain, and cut flower stalks when finished. Autumn: September is the second good time to plant and divide; the warm moist soil suits them. Clear fallen leaves and old hosta foliage in November to remove slug eggs. Winter: nothing needed; the crown sleeps safely in the ground. In exposed West Jutland gardens the large leaves tear in the wind, so plant among shrubs for shelter. Growing in pots raised on feet with a copper tape band is the most reliable slug defence in Denmark.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Keep soil moist; water in the morning' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Balanced feed; mulch with compost' },
      { type: 'check-pests', intervalDays: 7, months: [4, 5, 6, 7, 8, 9], note: 'Slug patrol after rain; vine weevil in pots' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Compost or leaf mould, clear of crown' },
      { type: 'divide', intervalDays: 1460, months: [4, 9], note: 'Split large clumps with a spade' },
    ],
    tags: ['shade-garden', 'foliage', 'perennial', 'container'],
  },
]
