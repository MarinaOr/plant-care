import type { Plant } from '../../types'

export const part2: Plant[] = [
  {
    id: 'strelitzia-reginae',
    commonName: 'Bird of paradise',
    danishName: 'Paradisfugl',
    latinName: 'Strelitzia reginae',
    family: 'Strelitziaceae',
    category: 'indoor',
    wikipediaTitle: 'Strelitzia reginae',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['oval', 'strap'],
      leafPattern: ['plain'],
      flowerColor: ['orange', 'blue'],
      habit: ['clumping', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A dramatic clump-forming plant with large, leathery, banana-like leaves on long stalks and, on mature plants, the famous orange and blue crane-head flowers. Indoors it is mainly grown for its bold foliage; flowering needs a mature plant, lots of sun and a cool, dry winter rest. It slowly grows to 1.5-2 m.',
      watering:
        'Water thoroughly when the top 3-5 cm of soil are dry, about every 7-10 days in summer. In winter cut back to every 3 weeks or so and keep the soil only just moist. The thick roots store water, so err on the dry side.',
      light:
        'This plant wants as much light as possible, including several hours of direct sun. A big south- or west-facing window or a conservatory is ideal. In low light the leaves grow long, floppy and far apart and it will never flower.',
      soil:
        'A rich but free-draining mix: good potting compost with a quarter coarse sand or perlite and some composted bark. Use a heavy, deep pot because the root system is powerful and can split thin plastic pots.',
      temperature:
        'Prefers 18-28 C in the growing season. It tolerates down to about 5 C when kept dry and even brief light frost on mature leaves, but 10-15 C is a safer winter minimum indoors. Cool nights in winter help flower initiation.',
      humidity: 'Average humidity is fine; wipe dust from the large leaves so they can photosynthesise fully.',
      feeding:
        'Feed every 2 weeks from April to September with a balanced liquid fertilizer; it is a hungry plant. Do not feed in winter.',
      repotting:
        'Repot young plants every spring and mature ones every 2-3 years. Plants flower best when slightly pot-bound, so once it is in a 30-40 cm pot just refresh the top layer of soil each spring.',
      pruning:
        'Cut off dead or torn leaves and spent flower stalks at the base. Splitting of the leaf edges along the veins is natural and not a disease.',
      propagation:
        'Divide large clumps in spring, cutting through the rhizome with a sharp knife so each piece has roots and at least one fan of leaves. Divisions take a few years to flower again. Seed is slow and takes 4-7 years to bloom.',
      problems:
        'Scale insects and mealybugs hide along leaf stalks and undersides; spider mites cause yellow speckling in hot dry rooms. Leaf edges turning brown and curling indicate underwatering or dry air; yellowing with mushy stalk bases means root rot. Failure to flower is almost always too little light or a plant that is still too young.',
      denmarkTips:
        'Danish winter light is the biggest challenge: from November to February keep it in the sunniest window available and consider a strong grow light if you want flowers. Give it a cool rest at 10-15 C with very little water through winter, which mimics its dry season and encourages flowering in spring. From June to the end of August it thrives outside on a sunny, sheltered balcony or terrace, which gives much better light than any window; move it out gradually and bring it back inside in September before nights fall below 8 C. Keep the big leaves out of strong wind, which shreds them.',
    },
    tasks: [
      { type: 'water', intervalDays: 8, winterIntervalDays: 20, note: 'Water when top 5 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, note: 'Balanced liquid fertilizer, full strength' },
      { type: 'wipe-leaves', intervalDays: 28, note: 'Damp cloth both sides; check for scale along stalks' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Heavy deep pot; flowers best slightly pot-bound' },
      { type: 'plant-out', intervalDays: 365, months: [6], note: 'Sunny sheltered balcony once nights stay above 10 C' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Inside before nights drop below 8 C; inspect for pests' },
    ],
    tags: ['statement-plant', 'flowering', 'sun-lover', 'balcony'],
  },
  {
    id: 'nephrolepis-exaltata',
    commonName: 'Boston fern',
    danishName: 'Sværdbregne',
    latinName: 'Nephrolepis exaltata',
    family: 'Nephrolepidaceae',
    category: 'indoor',
    wikipediaTitle: 'Nephrolepis exaltata',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['fern-frond'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['clumping', 'trailing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A lush, classic fern with long, arching, finely divided fronds that look wonderful in a hanging basket or on a pedestal. It is safe for pets and children and tolerates lower light, but it is unforgiving about dry soil and dry air, which make the fronds shed brown leaflets all over the floor.',
      watering:
        'Keep the soil consistently moist but not waterlogged; water as soon as the surface starts to feel dry, every 3-5 days in summer and every 7-10 days in winter. Never let the root ball dry out completely. Use room-temperature water and let excess drain away.',
      light:
        'Medium to bright indirect light, such as a north or east window or a metre or two back from a brighter window. Direct sun scorches the fronds and dries them out quickly.',
      soil:
        'A loose, moisture-retentive, peat-free compost with some perlite and composted bark. It should hold water but still drain.',
      temperature:
        'Ideal at 16-24 C. It tolerates down to about 10 C for short periods but drops leaflets in cold draughts and is killed by frost. Avoid rooms that get hot and dry.',
      humidity:
        'Wants high humidity, ideally above 50 %. A bathroom or kitchen with a window is perfect; elsewhere use a pebble tray, humidifier or daily misting in winter.',
      feeding:
        'Feed monthly from April to September with a half- or quarter-strength balanced liquid fertilizer. Ferns are sensitive to over-feeding, which browns the frond tips.',
      repotting:
        'Repot every 1-2 years in spring when roots fill the pot. Divide large plants at the same time.',
      pruning:
        'Cut off brown or bare fronds at the base to keep the plant tidy and encourage new growth from the centre. A badly shedding plant can be cut back hard in spring and will regrow.',
      propagation:
        'Divide the root ball with a knife in spring, or pot up the small plantlets that form on thin runners.',
      problems:
        'Dry air and dry soil cause brown, crispy fronds and heavy shedding of leaflets, the most common complaint. Scale insects look like small brown dots along the frond midribs; do not confuse them with the regular rows of brown spore cases on the undersides, which are normal. Mealybugs and fungus gnats also occur. Yellowing fronds with mushy roots signal overwatering.',
      denmarkTips:
        'The Danish heating season from October to April is tough on ferns because radiator air drops humidity to 20-30 %. Keep the fern well away from radiators and heat sources, stand it on a wide tray of wet pebbles or run a humidifier, and mist on dark mornings. Light is less of an issue than for most plants, but move it a little closer to the window in November-February. Watch out for icy draughts when airing rooms. A shaded, sheltered balcony corner suits it from June to August, but hot dry wind will brown it, so keep it out of wind and sun.',
    },
    tasks: [
      { type: 'water', intervalDays: 4, winterIntervalDays: 8, note: 'Keep evenly moist; never let the root ball dry out' },
      { type: 'mist', intervalDays: 2, note: 'Mist fronds or top up pebble tray, especially during heating season' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Quarter- to half-strength liquid feed' },
      { type: 'prune', intervalDays: 42, note: 'Cut brown fronds at the base' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Divide if crowded; moisture-retentive mix' },
    ],
    tags: ['pet-safe', 'humidity-lover', 'fern', 'low-light'],
  },
  {
    id: 'schlumbergera',
    commonName: 'Christmas cactus',
    danishName: 'Julekaktus',
    latinName: 'Schlumbergera',
    family: 'Cactaceae',
    category: 'indoor',
    wikipediaTitle: 'Schlumbergera',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['succulent'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'pink', 'red', 'white', 'purple', 'orange'],
      habit: ['trailing', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A spineless rainforest cactus with flattened, segmented, arching stems that produce a flush of satiny tubular flowers in pink, red, white or orange around November-January. Unlike desert cacti it likes some moisture and shade. Plants are often passed down through families and live for decades.',
      watering:
        'Water when the top 2-3 cm of the mix are dry, about every 7-10 days in spring and summer. While buds are forming and the plant is in flower, keep it slightly more evenly moist. After flowering, give it a drier rest for 6-8 weeks, watering only every 3 weeks.',
      light:
        'Bright indirect light; an east window or a spot a little back from a south window is ideal. Direct summer sun turns the segments red or yellow and can scorch them. It flowers best when it gets natural autumn day-length, so avoid rooms lit brightly late into the evening in October-November.',
      soil:
        'A loose, airy mix such as potting compost with a third orchid bark and perlite. It is an epiphyte and needs air around the roots.',
      temperature:
        'Comfortable at 15-24 C. Buds set best at cool night temperatures of 10-15 C in autumn. It tolerates down to about 7 C briefly but is not frost hardy. Sudden changes in temperature or position cause bud drop.',
      humidity: 'Moderate humidity is appreciated; occasional misting in dry winter rooms is beneficial.',
      feeding:
        'Feed every 2-3 weeks from April to September with half-strength balanced fertilizer. Switch to a high-potassium feed in September and stop once buds show.',
      repotting:
        'Repot every 2-3 years in late spring after the rest period into a pot only slightly larger. It flowers better when a little pot-bound.',
      pruning:
        'After flowering, twist off one or two segments from the end of each stem to encourage branching and more flowering tips next year.',
      propagation:
        'Twist off sections of 2-3 segments, let them dry for a day or two, then stand them upright in barely moist gritty compost. They root in a few weeks.',
      problems:
        'Mealybugs tuck into the joints between segments as white fluff; fungus gnats appear when the mix stays too wet. Limp, reddish, wrinkled segments with mushy bases indicate root rot from overwatering, which is the most common cause of death. Bud drop is caused by draughts, moving the plant, or sudden temperature and watering changes. Reddish segments in summer mean too much sun.',
      denmarkTips:
        'The Danish autumn gives Christmas cactus exactly what it needs to flower: naturally long nights from late September and cool temperatures. Keep it in a cool room at 12-18 C with no evening lamps during October, then move it to its display spot once buds are set and do not move it again until flowering is over. In the dark winter the plant copes fine by a window and should not be placed over a radiator, which causes bud drop. From June to August it can hang in a shaded, sheltered spot on a balcony, which thickens the stems; bring it in during September before nights go below 8 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 8, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; drier rest for 6 weeks after flowering' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength feed; high-potassium in September' },
      { type: 'check-pests', intervalDays: 21, note: 'Check segment joints for mealybugs' },
      { type: 'prune', intervalDays: 365, months: [2, 3], note: 'Twist off end segments after flowering to encourage branching' },
      { type: 'repot', intervalDays: 730, months: [4, 5], note: 'Airy bark/perlite mix, barely larger pot' },
    ],
    tags: ['flowering', 'pet-safe', 'winter-interest', 'beginner', 'cactus'],
  },
  {
    id: 'hippeastrum',
    commonName: 'Amaryllis',
    danishName: 'Ridderstjerne',
    latinName: 'Hippeastrum',
    family: 'Amaryllidaceae',
    category: 'indoor',
    wikipediaTitle: 'Hippeastrum',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['strap'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'red', 'white', 'pink', 'orange'],
      habit: ['bulb', 'upright'],
      size: 'medium',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'A large tender bulb that sends up a thick hollow stalk topped with 2-6 enormous trumpet flowers in red, white, pink, salmon or striped, followed by long strap-shaped leaves. It is the classic Danish Christmas flower and with the right yearly cycle the same bulb will bloom for many years, getting bigger each time.',
      watering:
        'After planting, water once and then very sparingly until the flower stalk is 5-10 cm tall, or the bulb may rot. Then water when the top 3 cm are dry, roughly weekly, and more generously while the leaves grow through spring and summer. From August stop watering entirely to force dormancy, and keep it dry for 8-10 weeks.',
      light:
        'Bright light during growth; a sunny windowsill for the flowering stalk, turning the pot daily so it grows straight. The leaves need as much sun as possible through summer to build next year\'s flower, so keep it in a south window or outdoors.',
      soil:
        'Rich, free-draining potting compost with some grit. Plant the bulb with its top third above the soil in a pot only 2-3 cm wider than the bulb.',
      temperature:
        'Flowers develop fastest at 20-22 C; a cooler room of 16-18 C makes the flowers last longer once open. The bulb tolerates down to about 5 C when dormant and dry but must never freeze. Dormant bulbs are stored at 10-15 C.',
      feeding:
        'Do not feed while flowering. Once the leaves appear, feed every 2 weeks with a balanced or high-potassium liquid fertilizer until August; this is what fuels next year\'s bloom.',
      repotting:
        'Repot only every 3-4 years, as the bulb dislikes disturbance; otherwise replace the top few centimetres of compost each autumn when restarting it. Offsets can be separated at repotting.',
      pruning:
        'Cut the spent flower stalk 5 cm above the bulb once the flowers fade, but leave all leaves to grow on. Remove leaves only when they have yellowed and withered at the start of dormancy.',
      propagation:
        'Separate small offset bulbs from the mother bulb at repotting and grow them on; they take 2-3 years to flower. Seed is possible but slow.',
      problems:
        'Red blotch (Stagonospora) shows as red streaks and spots on the stalk and leaves and can distort growth; cut away affected tissue and keep the bulb drier. Mealybugs and narcissus bulb fly larvae attack the bulb; a soft, hollow-feeling bulb is lost. Bulb rot from overwatering before growth starts is the commonest failure. Failure to rebloom means the leaves did not get enough light and feeding the previous summer.',
      denmarkTips:
        'The Danish cycle: pot the bulb in October or early November, 6-8 weeks before you want flowers, and keep it warm at around 20 C in a bright spot until the stalk appears; it should then bloom around Christmas. After flowering, keep it growing as a leafy plant in the brightest window through the dark months; from late May to August it can stand outside in full sun on a balcony or terrace, which gives a far better bulb than indoors. Stop watering in August, let the leaves die down and store the bulb in its pot cool and dry at 10-15 C (a cellar, garage or cool spare room) for 8-10 weeks in August-October, then start it again. Bought-in bulbs sold for Christmas have already had their rest.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 7, note: 'Barely water until stalk is 10 cm; then water when top 3 cm are dry. None in Aug-Oct dormancy' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, note: 'Feed only while in leaf, after flowering until August' },
      { type: 'rotate', intervalDays: 2, months: [11, 12, 1], note: 'Turn the pot so the flower stalk grows straight' },
      { type: 'deadhead', intervalDays: 7, months: [12, 1, 2], note: 'Cut spent stalk 5 cm above the bulb; keep the leaves' },
      { type: 'plant-out', intervalDays: 365, months: [6], note: 'Stand pot in full sun outdoors to build next year\'s flower' },
      { type: 'bring-inside', intervalDays: 365, months: [8, 9], note: 'Stop watering, let leaves die down, store cool and dry for 8-10 weeks' },
    ],
    tags: ['flowering', 'bulb', 'winter-interest', 'beginner', 'christmas'],
  },
  {
    id: 'begonia-maculata',
    commonName: 'Polka dot begonia',
    danishName: 'Forellebegonie',
    latinName: 'Begonia maculata',
    family: 'Begoniaceae',
    category: 'indoor',
    wikipediaTitle: 'Begonia maculata',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['lance', 'oval'],
      leafPattern: ['spotted', 'coloured'],
      flowerColor: ['white', 'pink'],
      habit: ['upright', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A cane-type begonia with olive-green, angel-wing-shaped leaves covered in silver-white polka dots and backed in deep red, carried on bamboo-like jointed stems. Clusters of white or pale pink flowers appear in spring and summer. It is striking but a bit particular about watering and humidity.',
      watering:
        'Water when the top 3 cm of soil are dry, roughly every 5-7 days in summer and every 10-14 days in winter. The stems hold some water, so it is better slightly too dry than too wet; soggy soil quickly rots the fleshy stems. Water at the soil surface and keep the leaves dry.',
      light:
        'Bright indirect light, such as an east window or a metre from a south or west window with a sheer curtain. Direct sun burns pale patches on the leaves; too little light makes stems stretch and the spots fade.',
      soil: 'A light, airy potting mix with plenty of perlite or bark so it drains freely and does not stay wet.',
      temperature:
        'Likes 18-24 C. Keep above 15 C; it drops leaves in cold draughts and is damaged below about 10 C.',
      humidity:
        'Prefers 50 % humidity or above, but avoid misting the leaves because wet foliage invites powdery mildew. Use a pebble tray or humidifier and group with other plants.',
      feeding:
        'Feed every 2 weeks from April to September with half-strength balanced liquid fertilizer. Monthly or none in winter.',
      repotting:
        'Repot each spring into a pot one size up, or refresh the soil in the same pot. It does not mind being slightly pot-bound.',
      pruning:
        'Pinch out stem tips and cut back long canes in spring to just above a node to keep it bushy; otherwise it grows tall and leggy. Remove faded flowers and any yellow leaves.',
      propagation:
        'Stem cuttings with 2-3 nodes root easily in water or moist perlite in a warm bright place. Spring is the best time.',
      problems:
        'Powdery mildew, a white dusty coating on the leaves, is the main problem and appears with wet leaves, poor airflow or big temperature swings. Mealybugs hide at stem joints and thrips cause silvery patches and distorted new leaves. Brown crispy leaf edges mean dry air or underwatering; yellow, dropping lower leaves with soft stems mean overwatering and root rot.',
      denmarkTips:
        'In the dark Danish winter growth slows to almost nothing, so move the plant right up to a bright window (but not touching cold glass), water only when the soil is well dried out, and accept some leaf drop; a grow light from November to February keeps it looking full. Radiator air is too dry for it, so keep it away from heaters and raise humidity with a pebble tray rather than misting. Draughts from opened windows cause sudden leaf drop. Take a few cuttings in late summer as insurance in case the mother plant struggles through winter. It is not a balcony plant in Denmark.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; keep leaves dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'check-pests', intervalDays: 14, note: 'Look for powdery mildew on leaves and mealybugs at stem joints' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Cut back leggy canes above a node; root the trimmings' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Airy mix with perlite, one size up' },
    ],
    tags: ['patterned-foliage', 'flowering', 'humidity-lover', 'statement-plant'],
  },
]
