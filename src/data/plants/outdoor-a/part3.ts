import type { Plant } from '../../types'

export const part3: Plant[] = [
  {
    id: 'syringa-vulgaris',
    commonName: 'Common lilac',
    danishName: 'Syren',
    latinName: 'Syringa vulgaris',
    family: 'Oleaceae',
    category: 'outdoor',
    wikipediaTitle: 'Syringa vulgaris',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['heart', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['purple', 'white', 'pink'],
      habit: ['shrub', 'tree', 'upright'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Common lilac is a large deciduous shrub or small tree with heart-shaped leaves and dense, intensely fragrant panicles of lilac, purple or white flowers in late May. It is one of the most beloved plants in Denmark, found in nearly every old village garden and hedgerow. It is tough, long-lived and almost indestructible once established.',
      watering:
        'Water young plants in their first two summers. Established lilacs are deep-rooted and drought tolerant and need no watering in a normal Danish summer. Avoid wet, waterlogged positions, which they dislike far more than drought.',
      light:
        'Full sun for the best flowering; at least six hours a day. In shade the shrub grows tall and leggy and flowers sparsely. It makes a good windbreak and tolerates exposed sites.',
      soil:
        'Any well-drained soil, ideally neutral to alkaline and fertile. Lilac grows happily on Danish clay and chalk and tolerates poor sandy soil. Acidic soil benefits from a dressing of lime every few years.',
      temperature:
        'Extremely hardy (USDA zone 3-7) and totally reliable across Denmark, including exposed coastal and West Jutland gardens. It needs winter cold to flower well. No frost protection ever needed; late May frost may occasionally brown open flowers but does not harm the plant.',
      feeding:
        'Needs little feeding. A mulch of compost or a balanced fertiliser in spring is plenty, with a little potash if flowering is poor. Avoid high-nitrogen feeds and lawn fertiliser nearby, which give leaves at the expense of flowers.',
      pruning:
        'Deadhead the spent flower heads in June, cutting just above the pair of shoots below, as these carry next year\'s flowers; pruning later in summer or in winter removes the buds. Remove suckers from grafted plants at the base. Rejuvenate an old, leggy lilac by cutting a third of the oldest stems to the ground each year for three years, straight after flowering.',
      propagation:
        'Dig up and replant rooted suckers in autumn or early spring; many old Danish lilacs are own-root plants that sucker freely. Softwood cuttings in June are possible but slow to root.',
      problems:
        'Generally very healthy. Lilac leaf miner causes brown blotches and rolled leaves in summer, unsightly but harmless. Powdery mildew whitens leaves in late summer in dry years. Bacterial blight (Pseudomonas) blackens young shoots and flower buds in cold, wet springs; cut out affected shoots. Honey fungus can kill old shrubs. Lilac is non-toxic, but suckers spreading into lawns are the usual complaint.',
      denmarkTips:
        'Spring: feed lightly and mulch in April; watch for bacterial blight on young shoots in a cold wet May. Summer: deadhead right after flowering in early June, carry out any rejuvenation pruning immediately, and dig out unwanted suckers. Autumn: plant bare-root or potted lilacs in October-November, which suits them better than spring planting; in a windy coastal position lilac is one of the best shrubs to use as a shelter belt. Winter: no care needed. Lilac copes with heavy clay as long as water does not stand around the roots, so on wet sites plant on a mound. Slugs and dræbersnegle are not a concern. Lilac flowers best on a lean diet in full sun; a heavily fed, shaded lilac will disappoint.',
    },
    tasks: [
      { type: 'water', intervalDays: 14, winterIntervalDays: 0, note: 'Only young plants or in severe drought' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'Light balanced feed or compost; potash if few flowers' },
      { type: 'deadhead', intervalDays: 14, months: [6], note: 'Cut spent heads above the shoot pair below' },
      { type: 'prune', intervalDays: 365, months: [6], note: 'Remove suckers; renew a third of old stems' },
      { type: 'check-pests', intervalDays: 30, months: [5, 6, 7, 8], note: 'Leaf miner blotches, mildew, blight' },
    ],
    tags: ['shrub', 'fragrant', 'cottage-garden', 'hedge', 'cut-flowers'],
  },
  {
    id: 'fagus-sylvatica-hedge',
    commonName: 'European beech hedge',
    danishName: 'Bøg / Bøgehæk',
    latinName: 'Fagus sylvatica',
    family: 'Fagaceae',
    category: 'outdoor',
    wikipediaTitle: 'Fagus sylvatica',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'partial-shade', 'shade'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['none', 'green'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Beech is the national tree of Denmark and, clipped as a hedge, one of the most common garden boundaries in the country. Its oval, wavy-edged leaves emerge bright green in May, turn copper in autumn and, uniquely, stay on a clipped hedge all winter, giving year-round screening. Copper beech (purpurea) gives a dark red version.',
      watering:
        'Water a new hedge thoroughly every week in its first two summers; drought in the first year is the main reason new beech hedges fail. Established beech hedges need no watering except in extreme drought, when the leaves scorch and brown at the edges.',
      light:
        'Grows in full sun to fairly deep shade, which is why it works as a hedge under trees. Growth is denser in sun. Copper beech needs sun to colour well.',
      soil:
        'Well-drained soil of any type, including chalk and light clay. Beech dislikes waterlogged ground and compacted heavy clay; on wet sites choose hornbeam (Carpinus betulus, "avnbøg") instead, which looks similar and tolerates wet feet. Plant bare-root whips 30-40 cm apart in a single row.',
      temperature:
        'Fully hardy in Denmark (USDA zone 5-7). Late frosts in May can blacken the first flush of leaves, but a second flush follows. Cold, salt-laden winds on the west coast scorch young leaves, so beech hedges in exposed coastal sites need a few years of shelter netting to establish.',
      feeding:
        'A new hedge benefits from a mulch of compost and a general fertiliser each spring for the first three years. Established hedges need no feeding beyond an occasional mulch; leaving the fallen leaves at the base returns nutrients.',
      pruning:
        'Clip once a year in late July or August; clipping in late summer is what makes the hedge hold its brown leaves through winter (marcescence). A second light trim can be given in late winter (February) if needed. Trim the sides slightly inward so the base is wider than the top. Cut young hedges back by a third after planting to make them bushy at the base.',
      propagation:
        'Grown from seed (beech nuts) sown in autumn, but hedging whips are so cheap that nobody propagates their own. Buy 60-80 cm bare-root whips in bundles for planting November-March.',
      problems:
        'Woolly beech aphid leaves white fluff and sticky honeydew under the leaves in summer, cosmetic only. Beech scale appears as white powdery patches on stems. Powdery mildew whitens leaves in dry late summers. Beech bark disease and Phytophthora root rot affect trees on waterlogged soil. Grey squirrels strip bark. Edge leaves brown in drought and salt wind.',
      denmarkTips:
        'Autumn/Winter: plant bare-root whips from November to March, the cheapest and most reliable method; November planting lets the roots settle before spring. Spread a mulch and firm plants back in after winter storms, as frost and wind rock young hedges. Spring: water new hedges weekly from May, feed young hedges in April and expect late frost damage to be outgrown. Summer: clip in late July-August so the hedge keeps its copper leaves through winter, and keep newly planted hedges watered in the dry weeks of June-July. In West Jutland use a temporary windbreak net for the first 2-3 years and consider a mixed hedge with hornbeam. On wet clay, choose hornbeam or improve drainage with a raised planting ridge. Dræbersnegle do not bother beech.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Weekly for new hedges in first two summers' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'General feed for young hedges; mulch' },
      { type: 'prune', intervalDays: 365, months: [7, 8], note: 'Annual clip; late summer keeps winter leaves' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Compost along the base; leave fallen leaves' },
      { type: 'check-pests', intervalDays: 30, months: [6, 7, 8], note: 'Woolly aphid fluff, scorch, mildew' },
    ],
    tags: ['hedge', 'native', 'screening', 'autumn-colour'],
  },
  {
    id: 'thuja-occidentalis',
    commonName: 'Northern white cedar hedge',
    danishName: 'Thuja',
    latinName: 'Thuja occidentalis',
    family: 'Cupressaceae',
    category: 'outdoor',
    wikipediaTitle: 'Thuja occidentalis',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'partial-shade'],
    traits: {
      leafShape: ['scale-like'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['none'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Thuja is the classic dense evergreen conifer hedge of Danish suburbs, with flat sprays of aromatic scale-like foliage. Varieties such as Brabant and Smaragd give a fast, tight screen that stays green all year. It is easy and tough but, unlike yew, does not regrow from old wood, so it must be clipped regularly from the start.',
      watering:
        'Water new hedges deeply every week in their first two summers and in any dry spell for the first few years; thuja browns from the inside when it dries out and does not recover. Established hedges on normal soil need water only in a severe drought. Evergreens also need a thorough soak in autumn before frost.',
      light:
        'Full sun to light shade. In deep shade the hedge thins and browns at the base. Smaragd keeps its colour in winter; Brabant and the species may bronze slightly in cold sun.',
      soil:
        'Moist, well-drained soil of any type; thuja tolerates clay better than most conifers and even damp soil, but not standing water. Plant container or root-balled plants 50-70 cm apart (Smaragd) to 80 cm (Brabant). Loosen the surrounding soil well and mulch.',
      temperature:
        'Fully hardy in Denmark (USDA zone 3-7). Winter damage is from drought, not cold: evergreen foliage loses water on sunny, frosty, windy days while the roots are frozen, causing brown patches in spring. Water well in autumn and in mild spells in winter during a dry year.',
      feeding:
        'Feed in April with a conifer or evergreen fertiliser (with magnesium, which keeps the foliage green) and again lightly in June. Yellowing or bronzing foliage in summer is often magnesium deficiency, corrected with Epsom salts. Stop feeding by July.',
      pruning:
        'Trim once or twice a year, in June and again in late August at the latest, removing only the current season\'s growth. Never cut into old brown wood as it will not regrow and leaves a permanent hole. Start trimming the sides from the second year to keep the hedge dense; let the top grow until it reaches the desired height, then cut the leader.',
      propagation:
        'Semi-ripe cuttings 10-15 cm long in late summer, rooted in gritty compost in a cold frame, take a year. Hedging plants are cheap to buy and nobody propagates their own.',
      problems:
        'Brown patches are the usual complaint, caused by drought, waterlogging, dog urine, salt or winter desiccation. Thuja blight (Kabatina, Pestalotiopsis) browns shoot tips after a wet season. Spruce spider mite causes dull, speckled foliage in hot summers. Honey fungus and Phytophthora kill whole plants in wet soil. Cypress aphid is rare on thuja. The foliage is mildly toxic if eaten in quantity and the sap can irritate skin.',
      denmarkTips:
        'Spring: plant root-balled hedges in April-May as the soil warms, feed with conifer fertiliser containing magnesium, and water generously from May. Summer: trim in June, water new hedges weekly through the dry weeks of June-July, and check for spider mite in hot spells. Autumn: a final light trim by late August; September is also a good planting month, with time to root before winter. Give the hedge a deep soak in October. Winter: in West Jutland and on the coast, drying winds and salt spray brown the windward side, so use a windbreak net for the first years. Water during mild spells if the winter is dry and frosty. Road salt browns hedges along driveways. Thuja handles wet clay better than most conifers but still dies in standing water, so avoid the wettest spots. Slugs and dræbersnegle are not a problem.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 0, note: 'Weekly for new hedges; deep soak in October' },
      { type: 'fertilize', intervalDays: 60, months: [4, 6], note: 'Conifer feed with magnesium' },
      { type: 'prune', intervalDays: 75, months: [6, 8], note: 'Trim current growth only; never into brown wood' },
      { type: 'mulch', intervalDays: 365, months: [4], note: 'Bark or compost to keep roots moist' },
      { type: 'check-pests', intervalDays: 30, months: [6, 7, 8, 9], note: 'Brown patches, spider mite, blight' },
    ],
    tags: ['hedge', 'evergreen', 'screening', 'conifer'],
  },
  {
    id: 'calluna-vulgaris',
    commonName: 'Heather',
    danishName: 'Hedelyng',
    latinName: 'Calluna vulgaris',
    family: 'Ericaceae',
    category: 'outdoor',
    wikipediaTitle: 'Calluna vulgaris',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['needle', 'scale-like'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['purple', 'pink', 'white'],
      habit: ['groundcover', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Heather is the low evergreen shrub that colours the Jutland heaths purple in August and September. In gardens it forms dense, spreading mounds of tiny scale-like leaves and masses of small bell flowers from July to October, beloved by bees. Garden varieties also come with gold, bronze or silver foliage and the "bud-bloomer" types sold in pots in autumn hold their colour into winter.',
      watering:
        'Water new plants weekly for their first summer; the shallow root ball dries out fast. Established heather in the ground is drought tolerant and seldom needs water. Pots and autumn-planted bud-bloomers must be kept moist, as they die quickly when the root ball dries, even in winter. Use rainwater; hard tap water raises the pH.',
      light:
        'Full sun. Heather in shade grows loose, flowers poorly and the coloured-foliage varieties lose their colour. An open, airy position is ideal.',
      soil:
        'Acidic (pH 4.5-5.5), poor, sandy or peaty, well-drained soil. Heather is one of the few plants that genuinely prefers poor soil. On limy or clay soil, build a raised bed of ericaceous compost mixed with sand and composted bark. Plant deep enough to cover the lowest branches so they root.',
      temperature:
        'Fully hardy across Denmark (USDA zone 4-7), as expected of a native of the Jutland heath. Snow cover is welcome. The only winter risk is pots freezing solid and drying out; stand them in a sheltered spot and water in mild spells.',
      feeding:
        'Almost none. A light dressing of ericaceous fertiliser in spring is enough, and often unnecessary in the ground. Never lime. Overfeeding produces soft, leggy growth that flops open.',
      pruning:
        'Trim lightly every year in March-April, cutting off the old flower spikes just below the dead flowers but never into old bare wood. Unpruned heather becomes woody and bare in the middle after a few years and cannot be renovated. Bud-bloomers are trimmed the same way in spring.',
      propagation:
        'Layer stems by burying them in sandy soil in spring, or take semi-ripe cuttings 3-5 cm long in July-August. Old plants are best replaced every 10-15 years with young ones.',
      problems:
        'Phytophthora root rot kills plants in heavy, wet soil, with branches going grey and dying. Heather beetle can strip foliage brown in the wild and occasionally in gardens. Grey mould appears on crowded, damp plants in autumn. Yellowing growth means the soil is too limy. Dræbersnegle do not eat heather.',
      denmarkTips:
        'Spring: trim off last year\'s flower spikes in March-April and give a light ericaceous feed. Plant in April-May so the plants root before summer. Summer: water new plantings in dry spells and enjoy the flowers from late July; combine with winter heath (Erica carnea) for colour from January to April. Autumn: September is the main planting season and the garden centres fill with bud-bloomers; plant them in acidic, sandy soil in sun and keep watered. Winter: no care needed in the ground. In pots, keep the root ball from drying out and stand them against a wall. Heather is perfect for the sandy, acidic, windy gardens of West Jutland and copes well with salt wind. On the heavy clay of East Jutland, Funen and Zealand, build a raised bed or it will rot within a couple of winters.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 0, note: 'New plants and pots; rainwater if possible' },
      { type: 'fertilize', intervalDays: 365, months: [4], note: 'Light ericaceous feed; never lime' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Trim below old flowers, not into bare wood' },
      { type: 'check-pests', intervalDays: 30, months: [6, 7, 8, 9], note: 'Grey dying branches mean root rot' },
    ],
    tags: ['groundcover', 'evergreen', 'pollinator-friendly', 'acid-soil', 'native'],
  },
  {
    id: 'hylotelephium-spectabile',
    commonName: 'Showy stonecrop / Sedum',
    danishName: 'Sankthansurt',
    latinName: 'Hylotelephium spectabile',
    family: 'Crassulaceae',
    category: 'outdoor',
    wikipediaTitle: 'Hylotelephium spectabile',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun'],
    traits: {
      leafShape: ['succulent', 'oval'],
      leafPattern: ['plain', 'coloured'],
      flowerColor: ['pink', 'red', 'white'],
      habit: ['clumping', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'Showy stonecrop is a succulent perennial with fleshy grey-green leaves and flat heads of starry pink flowers in August-September that turn rust-brown and stand through winter. Still sold as Sedum spectabile, it is a magnet for bees and butterflies and one of the easiest perennials for a dry, sunny Danish bed. Varieties like Herbstfreude and Matrona are everywhere.',
      watering:
        'Water new plants until established, then hardly ever. The fleshy leaves store water and the plant is fully drought tolerant. Too much water or rich soil makes the stems flop open in August just before flowering.',
      light:
        'Full sun. In shade or part shade the stems stretch, flop and flower poorly. It thrives in the hottest, driest spot in the garden and in gravel beds.',
      soil:
        'Poor to moderately fertile, well-drained soil, neutral to alkaline. Sandy and gravelly soil is ideal. On Danish clay, add grit or plant on a raised bed or slope; the crown rots in winter-wet ground. Needs no compost.',
      temperature:
        'Fully hardy in Denmark (USDA zone 3-9). Dies back to a tight rosette of buds at ground level and ignores frost. The dry flower heads look good capped with frost and snow. No protection needed.',
      feeding:
        'None in normal soil. Feeding and manure make the plant lush, soft and prone to flopping. A little grit as a mulch is the only treatment it wants.',
      pruning:
        'Leave the dried flower heads for winter interest and for the birds, then cut all stems to the ground in late February or March before the new rosettes grow. For a more compact plant, cut the stems back by half in late May ("Chelsea chop"); it then flowers slightly later but stays upright.',
      propagation:
        'Very easy: divide clumps in spring, or take stem cuttings in May-June and simply push them into gritty soil. Even single leaves root. Divide every 3-4 years when the centre of the clump opens up.',
      problems:
        'Very few. Flopping is the main issue, caused by shade, rich soil or too much water. Vine weevil grubs occasionally eat roots in pots. Slugs and dræbersnegle may nibble the young spring shoots but leave the mature leaves alone. Crown rot in soggy soil. Aphids sometimes cluster on buds in summer.',
      denmarkTips:
        'Spring: cut down last year\'s dead stems in March, divide clumps if needed in April, and plant new plants from April onwards. Do not mulch with compost. Summer: give the Chelsea chop in late May if the plant flopped last year; water only in weeks of total drought. Autumn: enjoy the flowers and the butterflies in August-September, then leave the seed heads standing. September is also fine for planting. Winter: do nothing; the dead stems look good in frost. The plant\'s weakness in Denmark is wet clay in winter, so plant it on a slope, in gravel or raised. It is excellent for the windy, sandy coastal gardens of the west, where it stays naturally compact.',
    },
    tasks: [
      { type: 'water', intervalDays: 21, winterIntervalDays: 0, note: 'Only new plants or in severe drought' },
      { type: 'prune', intervalDays: 365, months: [3], note: 'Cut old stems to ground before new growth' },
      { type: 'deadhead', intervalDays: 365, months: [5], note: 'Optional Chelsea chop: cut stems by half' },
      { type: 'divide', intervalDays: 1095, months: [4], note: 'Split clumps when the centre opens up' },
      { type: 'check-pests', intervalDays: 30, months: [4, 5, 6, 7, 8], note: 'Slugs on young shoots, flopping stems' },
    ],
    tags: ['pollinator-friendly', 'drought-tolerant', 'perennial', 'winter-interest', 'gravel-garden'],
  },
]
