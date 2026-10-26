import type { Plant } from '../../types'

export const part1: Plant[] = [
  {
    id: 'yucca-gigantea',
    commonName: 'Spineless yucca',
    danishName: 'Palmelilje',
    latinName: 'Yucca gigantea',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Yucca gigantea',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['sword', 'strap'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['upright', 'tree'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A tough, architectural plant with a thick woody trunk topped by rosettes of long, pointed green leaves. It copes with neglect, dry air and bright sun, which makes it one of the most forgiving large houseplants. Indoors it rarely flowers but can slowly reach ceiling height.',
      watering:
        'Water thoroughly, then let the top half of the pot dry out before watering again. In summer this is roughly every 10-14 days; in winter once every 3-4 weeks is plenty. Overwatering is the main way to kill a yucca, so never leave it standing in a wet saucer.',
      light:
        'Give it the brightest spot you have, ideally right by a south- or west-facing window. It tolerates a few hours of direct sun and will become sparse and floppy in dim corners. Turn the pot a quarter turn every couple of weeks so the trunk grows straight.',
      soil:
        'Use a free-draining mix such as cactus soil or ordinary potting compost with a third coarse sand or perlite. A heavy terracotta or ceramic pot helps keep a tall plant from toppling. Make sure the pot has drainage holes.',
      temperature:
        'Comfortable at normal room temperature, 15-26 C. It tolerates down to about 7 C for short periods if kept dry, but is not frost hardy. Avoid placing the pot directly against a cold window pane in winter.',
      humidity:
        'Not fussy; normal dry indoor air is fine and no misting is needed.',
      feeding:
        'Feed with a balanced liquid houseplant fertilizer at half strength once a month from April to September. Do not feed in autumn and winter when growth stops.',
      repotting:
        'Repot every 2-3 years in spring into a pot only one size larger. Large, heavy specimens can instead have the top 5 cm of soil replaced each spring. Wear gloves and support the trunk when lifting it.',
      pruning:
        'If the plant gets too tall, saw the trunk through at the desired height in spring; it will sprout new rosettes below the cut. Remove dead or yellowing lower leaves by pulling them downwards.',
      propagation:
        'The cut-off top or side offsets can be rooted in moist, gritty compost in a warm spot. Trunk sections 20-30 cm long will also sprout if laid or stood in moist soil.',
      problems:
        'Scale insects appear as small brown bumps on leaves and stems, and mealybugs as white cottony tufts in leaf bases; wipe them off with a cloth dipped in soapy water or rubbing alcohol. Spider mites cause fine speckling and webbing in dry rooms. Soft, brown trunk bases and yellow leaves signal root rot from overwatering; let the plant dry out and cut away rotten tissue.',
      denmarkTips:
        'In the dark months from November to February a yucca barely grows, so move it as close as possible to the brightest window and cut watering to once every 3-4 weeks. Keep it away from cold draughts when windows are opened for airing and do not let the leaves touch a frosty pane at night. From mid-June to late August it enjoys a sheltered, sunny balcony or terrace; acclimatise it to full sun over a week and bring it back inside before night temperatures fall below 8-10 C in September. Radiator air in winter is no problem for this plant.',
    },
    tasks: [
      { type: 'water', intervalDays: 12, winterIntervalDays: 25, note: 'Water when top half of pot is dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'One pot size up, free-draining mix' },
      { type: 'rotate', intervalDays: 14, note: 'Quarter turn so the trunk grows straight' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Damp cloth; check leaf bases for scale and mealybugs' },
      { type: 'plant-out', intervalDays: 365, months: [6], note: 'Move to a sunny sheltered balcony once nights stay above 10 C' },
      { type: 'bring-inside', intervalDays: 365, months: [9], note: 'Bring back in before nights drop below 8 C; check for pests first' },
    ],
    tags: ['beginner', 'statement-plant', 'drought-tolerant', 'balcony'],
  },
  {
    id: 'kalanchoe-blossfeldiana',
    commonName: 'Flaming Katy',
    danishName: 'Brændende kærlighed',
    latinName: 'Kalanchoe blossfeldiana',
    family: 'Crassulaceae',
    category: 'indoor',
    wikipediaTitle: 'Kalanchoe blossfeldiana',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['succulent', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['mixed', 'red', 'pink', 'orange', 'yellow', 'white'],
      habit: ['bushy', 'upright'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A compact succulent with glossy, scalloped leaves and dense clusters of small, long-lasting flowers in red, pink, orange, yellow or white. It is sold in huge numbers as a gift plant in Denmark and often treated as disposable, but with a little care it will flower again every year.',
      watering:
        'Water only when the soil has dried out completely, roughly every 10-14 days in summer and every 3-4 weeks in winter. Water from below or at the soil surface and avoid wetting the leaves and flowers. The fleshy leaves store water, so it forgives forgetting but not sogginess.',
      light:
        'Bright light with some direct sun gives the most compact growth and best flowering. An east or west window is ideal; in a south window shade it from the fiercest midday sun in July. Too little light makes stems leggy and stops flowering.',
      soil:
        'A gritty cactus and succulent mix, or potting compost with a third perlite or sharp sand. Good drainage is essential.',
      temperature:
        'Prefers 15-24 C. It tolerates down to about 10 C but is damaged below 5 C and killed by frost. Cooler nights around 15 C in autumn help bud formation.',
      humidity: 'Low to normal humidity is fine; damp, stagnant air encourages mildew.',
      feeding:
        'Feed every 3-4 weeks from spring to late summer with a half-strength balanced or high-potassium (tomato) fertilizer. Stop feeding during the autumn short-day period and while flowering.',
      repotting:
        'Repot after flowering in spring into a slightly larger pot with fresh gritty mix. Plants are usually best replaced or restarted from cuttings after 2-3 years when they become woody.',
      pruning:
        'Cut off spent flower stalks at the base and pinch back leggy stems after flowering to keep the plant bushy. Pinching in late spring also produces more flowering shoots.',
      propagation:
        'Stem cuttings 5-8 cm long root easily: let the cut end dry for a day, then push into barely moist gritty compost. Single leaves will also root but take longer.',
      problems:
        'Mealybugs hide in leaf axils as white fluff; aphids cluster on flower buds. Powdery mildew shows as a white dusty coating on leaves in cool, damp conditions with poor airflow. Yellow, mushy lower leaves and a soft stem base mean root rot from overwatering. Fungus gnats hovering around the pot indicate soil kept too wet.',
      denmarkTips:
        'Kalanchoe is a short-day plant: it sets buds when nights are longer than about 12-14 hours for 6 weeks, which the Danish autumn provides naturally from late September if the plant is not under lamps in the evening. Keep it in a room where you do not switch the lights on at night, or cover it with a box from 18:00 to 08:00 for six weeks in October-November to get flowers around Christmas. In the dark winter months water very sparingly and keep it right by the window. It can stand outside in a sunny spot on the balcony from June to August, but bring it in before September nights get cold, and it must never be caught by frost.',
    },
    tasks: [
      { type: 'water', intervalDays: 12, winterIntervalDays: 24, note: 'Water only when soil is fully dry; keep water off leaves and flowers' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer, not while flowering' },
      { type: 'deadhead', intervalDays: 7, note: 'Snip spent flower stalks at the base' },
      { type: 'prune', intervalDays: 365, months: [4, 5], note: 'Pinch back leggy stems after flowering' },
      { type: 'repot', intervalDays: 365, months: [4, 5], note: 'Fresh gritty mix after flowering' },
    ],
    tags: ['flowering', 'succulent', 'beginner', 'gift-plant'],
  },
  {
    id: 'cyclamen-persicum',
    commonName: "Florist's cyclamen",
    danishName: 'Alpeviol',
    latinName: 'Cyclamen persicum',
    family: 'Primulaceae',
    category: 'indoor',
    wikipediaTitle: 'Cyclamen persicum',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['heart', 'round'],
      leafPattern: ['silver', 'variegated'],
      flowerColor: ['mixed', 'pink', 'red', 'white', 'purple'],
      habit: ['rosette', 'bulb'],
      size: 'small',
      evergreen: false,
      edible: false,
    },
    care: {
      summary:
        'A classic autumn and winter flowering pot plant with heart-shaped, silver-marbled leaves and elegant swept-back flowers held above the foliage. It grows from a flattened tuber and prefers cool conditions, which is why it often struggles in warm living rooms. With cool, bright treatment it flowers for months.',
      watering:
        'Keep the soil evenly moist while in leaf and flower, but never waterlogged. Water from below by standing the pot in a saucer of water for 15 minutes, or pour around the edge; water on the top of the tuber causes rot. Water about every 4-6 days in flower, and reduce sharply as the leaves yellow in late spring.',
      light:
        'Bright but indirect light, such as an east or north-facing window, keeps flowers coming. Direct sun through a south window will scorch leaves and shorten the display.',
      soil:
        'A peat-free, well-draining potting compost with added perlite. Plant with the top of the tuber sitting just above the soil surface.',
      temperature:
        'The key to success: it wants 10-16 C and sulks above 20 C, where flowers collapse and leaves yellow. It tolerates down to about 5 C and brief light frost but is best kept cool and frost-free. A cool hallway, stairwell or unheated bedroom suits it far better than a warm sitting room.',
      humidity: 'Moderate humidity is appreciated, but do not mist the crown as it encourages grey mould.',
      feeding:
        'Feed every 14 days with a half-strength liquid fertilizer while in active growth and flowering, from autumn to spring. Stop when the leaves start to yellow for dormancy.',
      repotting:
        'Repot in late summer when new growth appears after dormancy, into a pot only slightly wider than the tuber. Many people treat cyclamen as a seasonal plant and buy fresh ones each autumn.',
      pruning:
        'Remove spent flowers and yellow leaves by twisting the whole stalk off at the base with a sharp tug; cutting leaves stubs that rot.',
      propagation:
        'Usually grown from seed sown in late summer at 15-18 C; it takes 12-18 months to flower. Tubers cannot be divided successfully.',
      problems:
        'Grey mould (botrytis) appears as fuzzy grey growth on stalks and the crown when the plant is kept too wet and warm. Cyclamen mites cause curled, stunted new leaves and distorted buds; affected plants are usually discarded. Vine weevil grubs eat the tuber and roots, making the plant suddenly collapse. Yellowing leaves usually mean too warm, too dry or too wet.',
      denmarkTips:
        'Cyclamen is an ideal plant for the Danish winter because it actually likes the cool, bright conditions of a windowsill in a lightly heated room; the dark days of November-February are not a problem as long as it is right by the window. Keep it away from radiators and off the mantelpiece: a cold windowsill at night is a benefit, not a risk, as long as it does not freeze. It is also traditionally used in autumn planters and on sheltered balconies in September-October, tolerating a light frost. After flowering, let it dry off and rest in a cool shady place over summer, then restart it with watering in August.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 5, note: 'Water from below for 15 min, then drain; keep the tuber top dry' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 14, note: 'Half-strength liquid feed while in leaf and flower' },
      { type: 'deadhead', intervalDays: 5, note: 'Twist off spent flowers and yellow leaves at the base' },
      { type: 'check-pests', intervalDays: 14, note: 'Look for grey mould on the crown and curled new leaves' },
      { type: 'repot', intervalDays: 365, months: [8, 9], note: 'Repot as new growth appears after summer rest' },
    ],
    tags: ['flowering', 'winter-interest', 'cool-room'],
  },
  {
    id: 'anthurium-andraeanum',
    commonName: 'Flamingo flower',
    danishName: 'Flamingoblomst',
    latinName: 'Anthurium andraeanum',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Anthurium andraeanum',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['heart'],
      leafPattern: ['plain'],
      flowerColor: ['red', 'pink', 'white', 'mixed'],
      habit: ['upright', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A tropical aroid with glossy, heart-shaped leaves and waxy, long-lasting red, pink or white spathes each with a yellow tail-like spadix. Given warmth, humidity and bright indirect light it can flower almost year-round. Each bloom lasts for weeks, making it one of the most rewarding flowering houseplants.',
      watering:
        'Water when the top 3 cm of soil feel dry, about every 5-7 days in summer and every 10-14 days in winter. Use room-temperature water and let the pot drain fully; the thick roots rot quickly in soggy soil but the plant also wilts if it dries out completely.',
      light:
        'Bright, indirect light near an east or west window gives steady flowering. It tolerates medium light but then flowers less. Direct midday sun bleaches and scorches the leaves.',
      soil:
        'A chunky, airy mix like orchid bark mixed half and half with peat-free compost and perlite. The roots need air; dense, heavy soil leads to rot.',
      temperature:
        'Likes 18-27 C year-round. Growth stops below 15 C and leaves are damaged below about 12 C, so keep it away from cold draughts and unheated rooms.',
      humidity:
        'Prefers 60 % humidity or more. Group with other plants, stand it on a tray of wet pebbles, or run a humidifier in winter; brown leaf tips are the typical sign of dry air.',
      feeding:
        'Feed every 2-3 weeks from March to September with a half-strength balanced or high-phosphorus fertilizer to support flowering. Feed monthly or not at all in winter.',
      repotting:
        'Repot every 2 years in spring into a pot one size larger. Aerial roots that appear at the base can be tucked into the new mix or left exposed and misted.',
      pruning:
        'Cut off faded spathes and yellow leaves at the base of the stalk. No other pruning is needed.',
      propagation:
        'Divide clumps at repotting time, making sure each section has roots and leaves. Stem cuttings with a node and aerial root can also be potted up.',
      problems:
        'Mealybugs and scale cluster on stems and leaf undersides; spider mites cause yellow stippling in dry air; thrips leave silvery streaks and black specks. Brown leaf tips mean low humidity or salt build-up from fertilizer. Yellow leaves with soft black roots indicate root rot. Green spathes rather than red usually mean too little light.',
      denmarkTips:
        'In a Danish winter the main enemies are dry radiator air and the cold, dark window. Keep the plant in a bright position but not touching the glass, and raise the humidity with a pebble tray or humidifier; a small grow light for 10-12 hours a day from November to February keeps it flowering. Reduce watering by about half when days are short. Do not stand it where cold air hits it when you open windows to air the room. It is not suited to going outdoors in Denmark, even in summer, as nights are too cool.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength feed; flowering formula helps' },
      { type: 'mist', intervalDays: 3, note: 'Mist leaves or top up pebble tray; aim for 60 % humidity' },
      { type: 'wipe-leaves', intervalDays: 28, note: 'Damp cloth on glossy leaves; check for scale and mealybugs' },
      { type: 'deadhead', intervalDays: 14, note: 'Cut faded spathes at the base' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Chunky bark/compost mix, one size up' },
    ],
    tags: ['flowering', 'humidity-lover', 'tropical', 'statement-plant'],
  },
  {
    id: 'tradescantia-zebrina',
    commonName: 'Inch plant',
    danishName: 'Sølvtradescantia',
    latinName: 'Tradescantia zebrina',
    family: 'Commelinaceae',
    category: 'indoor',
    wikipediaTitle: 'Tradescantia zebrina',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['striped', 'silver', 'coloured'],
      flowerColor: ['pink', 'purple'],
      habit: ['trailing'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A fast-growing trailing plant with striking leaves striped silver and green on top and rich purple underneath. Small three-petalled pink flowers appear now and then. It is almost impossible to kill and roots so readily that one plant quickly becomes many.',
      watering:
        'Keep the soil lightly moist in summer, watering roughly every 5-7 days when the top 2-3 cm are dry. In winter let it dry further between waterings, about every 10-14 days. Wilting stems recover quickly after a drink, but constantly wet soil leads to rotting stems.',
      light:
        'Bright indirect light brings out the strongest purple and silver colouring; in dim light the leaves turn plain green and stems become sparse. A little morning or evening sun is fine, but harsh midday sun scorches.',
      soil: 'Any good general potting compost with some perlite for drainage. It is not fussy.',
      temperature:
        'Happy at 15-25 C. It survives short dips to about 10 C but leaves are damaged by cold draughts and it dies in frost.',
      humidity: 'Average room humidity is fine; very dry air can brown the leaf tips.',
      feeding:
        'Feed every 3-4 weeks from April to September with half-strength balanced liquid fertilizer. Too much feed makes growth weak and green.',
      repotting:
        'Repot annually in spring, or simply restart the plant from cuttings every year or two since older plants go bald at the base.',
      pruning:
        'Pinch or cut back stems regularly to keep the plant full; it quickly gets leggy otherwise. Cut just above a leaf node and use the trimmings as cuttings.',
      propagation:
        'Stem cuttings root within a week in water or directly in moist soil. Push several cuttings into the top of the mother pot to fill it out.',
      problems:
        'Aphids on soft new tips and spider mites in dry air are the main pests; look for sticky residue or fine webbing. Fungus gnats appear when soil stays too wet. Brown, crispy leaves mean the soil dried out for too long or the air is very dry; bare lower stems are normal ageing and fixed by cutting back.',
      denmarkTips:
        'In the short days of November-February the colours fade and growth stops, so move the plant into the brightest window you have and water much less, letting the soil dry well between waterings. Keep hanging pots away from the stream of hot air above a radiator, which scorches leaf tips. Take cuttings in late winter so you have fresh, dense plants by spring. It can hang outside in a shaded, sheltered spot on a balcony from June to August, but bring it in before September nights drop below 10 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'prune', intervalDays: 42, note: 'Pinch back long stems; root the trimmings in the same pot' },
      { type: 'check-pests', intervalDays: 14, note: 'Check for aphids on new tips and webbing from spider mites' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Refresh compost or restart from cuttings' },
    ],
    tags: ['trailing', 'beginner', 'fast-growing', 'colourful-foliage'],
  },
]
