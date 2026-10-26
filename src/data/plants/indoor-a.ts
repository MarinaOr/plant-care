import type { Plant } from '../types'

export const indoorA: Plant[] = [
  {
    id: 'monstera-deliciosa',
    commonName: 'Swiss cheese plant',
    danishName: 'Fingerphilodendron',
    latinName: 'Monstera deliciosa',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Monstera deliciosa',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['heart', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['climbing', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A vigorous climbing aroid from the rainforests of Central America, famous for its huge glossy leaves that develop holes and splits (fenestrations) as the plant matures. It is forgiving, fast-growing in summer and one of the easiest statement plants for a Danish living room.',
      watering:
        'Water thoroughly when the top 3-5 cm of soil feel dry, then let the excess drain and empty the saucer. In summer this is usually once a week; in winter every two to three weeks. Monstera tolerates drying out far better than sitting wet, so when in doubt, wait a few more days.',
      light:
        'Bright indirect light gives the biggest leaves and the most fenestrations. It copes with medium light but grows slowly and produces smaller, uncut leaves. Avoid harsh midday sun through a south window in summer, which can scorch the leaves.',
      soil:
        'A chunky, airy aroid mix is ideal: good-quality potting compost blended with roughly a third orchid bark and perlite. The mix should hold some moisture but never become compacted or waterlogged.',
      temperature:
        'Happiest at 18-27 °C. Keep above 12 °C at all times; growth stops below about 15 °C and cold draughts cause yellowing and leaf drop.',
      humidity:
        'Prefers 50-60 % humidity but adapts well to normal room air. Brown leaf edges in winter usually mean the air is too dry.',
      feeding:
        'Feed every two to four weeks from April to September with a balanced liquid houseplant fertiliser at half the recommended strength. Stop feeding from October to March when growth slows.',
      repotting:
        'Repot every one to two years in spring into a pot 3-5 cm wider, or when roots circle the bottom. Give it a moss pole or coir pole to climb; the leaves get dramatically larger once the plant has support.',
      pruning:
        'Prune in spring to control size or remove leggy stems. Cut just below a node; the cutting can be rooted in water. Aerial roots can be tucked into the pot or guided onto the pole, not cut off.',
      propagation:
        'Take a stem cutting with at least one node and one leaf and root it in water or moist sphagnum. Roots usually appear within three to four weeks in summer.',
      problems:
        'Spider mites (fine webbing and stippled, dusty-looking leaves) and thrips (silvery streaks and black specks) are the usual pests; mealybugs hide in leaf axils as white fluff. Yellow lower leaves with soggy soil signal overwatering and root rot. Brown crispy edges mean dry air or irregular watering.',
      denmarkTips:
        'From November to February the plant barely grows: move it as close to a window as possible, water only every two to three weeks and skip fertiliser. Keep it well away from radiators, which dry the leaf edges, and off cold windowsills at night. A sheltered, shaded balcony from mid-June to August is fine, but bring it in before night temperatures drop below 12 °C in September.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 16, note: 'Water when top 3-5 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, note: 'Half-strength balanced liquid feed' },
      { type: 'wipe-leaves', intervalDays: 30, note: 'Wipe both sides with a damp cloth to remove dust and check for pests' },
      { type: 'rotate', intervalDays: 14, note: 'Quarter turn so it does not lean towards the window' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'Pot 3-5 cm wider, chunky aroid mix, add a moss pole' },
    ],
    tags: ['statement-plant', 'beginner', 'climbing', 'air-purifying'],
  },
  {
    id: 'epipremnum-aureum',
    commonName: 'Pothos',
    danishName: 'Guldranke',
    latinName: 'Epipremnum aureum',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Epipremnum aureum',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['heart'],
      leafPattern: ['variegated', 'plain'],
      flowerColor: ['none'],
      habit: ['trailing', 'climbing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Also called devil\'s ivy because it is almost impossible to kill, pothos is a trailing or climbing vine with waxy heart-shaped leaves, often splashed with gold or cream. It tolerates low light and irregular watering, making it the classic beginner plant for shelves and hanging pots.',
      watering:
        'Let the top half of the pot dry out between waterings, then water thoroughly and drain. Drooping leaves are a reliable signal that it is thirsty, and it recovers within hours. In winter water roughly every two to three weeks.',
      light:
        'Grows in anything from a dim corner to a bright window out of direct sun. Variegated forms keep their markings best in medium to bright indirect light; in low light they revert to mostly green. Direct midday sun bleaches and burns the leaves.',
      soil:
        'Any good free-draining houseplant compost works. Adding a handful of perlite or bark improves aeration and reduces the risk of root rot.',
      temperature:
        'Comfortable at 18-26 °C. Tolerates down to about 12 °C briefly, but prolonged cold or draughts cause black patches and leaf drop.',
      humidity:
        'Average room humidity is fine. Higher humidity encourages larger leaves and faster growth but is not required.',
      feeding:
        'Feed monthly from April to September with a balanced liquid fertiliser at half strength. No feeding is needed from October to March.',
      repotting:
        'Repot every one to two years in spring when roots fill the pot. It is happy slightly pot-bound, so only go up one pot size.',
      pruning:
        'Trim long stems any time to keep the plant full; cutting back encourages branching near the base. Remove yellow leaves at the stem.',
      propagation:
        'Stem cuttings with one or two nodes root easily in a glass of water within two to three weeks. Plant several cuttings back into the parent pot to make it bushier.',
      problems:
        'Generally pest-free, but check for mealybugs (white fluff) and spider mites in dry rooms. Yellow leaves with wet soil mean overwatering; root rot sets in quickly in a pot without drainage. Brown tips are usually from very dry air or fertiliser build-up.',
      denmarkTips:
        'Pothos is one of the few plants that genuinely copes with a dark Danish winter without a grow light, but growth stops, so water much less from November to February. Keep it away from radiators and avoid letting trailing stems touch a cold window pane. It can spend June-August on a shaded balcony, but it is just as happy indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 16, note: 'Water when top half of pot is dry; drooping leaves = thirsty' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced liquid feed' },
      { type: 'prune', intervalDays: 90, note: 'Trim leggy stems and root the cuttings in water' },
      { type: 'check-pests', intervalDays: 30, note: 'Look for mealybugs in leaf axils and spider mites under leaves' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'One pot size up, free-draining compost' },
    ],
    tags: ['beginner', 'low-light', 'trailing', 'air-purifying'],
  },
  {
    id: 'dracaena-trifasciata',
    commonName: 'Snake plant',
    danishName: 'Svigermors skarpe tunge',
    latinName: 'Dracaena trifasciata',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Dracaena trifasciata',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['low', 'medium', 'bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['sword', 'succulent'],
      leafPattern: ['striped', 'variegated'],
      flowerColor: ['none'],
      habit: ['upright', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Formerly known as Sansevieria, the snake plant has stiff, upright sword-shaped leaves banded in grey-green, often edged in yellow. It is a near-indestructible succulent that stores water in its leaves and tolerates neglect, dim corners and dry air.',
      watering:
        'Water only when the soil is completely dry all the way through, typically every two to three weeks in summer and every four to six weeks in winter. Overwatering is the only common way to kill it. Pour water onto the soil, not into the centre of the leaf rosette.',
      light:
        'Tolerates everything from a shady hallway to a sunny south window. Growth is fastest and leaf colour strongest in bright light; in low light it simply grows very slowly. Acclimatise it gradually if moving from shade to direct sun.',
      soil:
        'Use a gritty, fast-draining cactus and succulent mix, or ordinary compost with a third coarse sand or perlite added. A heavy terracotta pot helps keep tall plants from toppling and lets the soil dry faster.',
      temperature:
        'Prefers 18-27 °C but tolerates a wide range. Keep above 10 °C; cold combined with wet soil causes mushy, collapsing leaves.',
      humidity:
        'Thrives in dry air and needs no misting. It is perfectly suited to centrally heated rooms.',
      feeding:
        'Feed sparingly: a half-strength cactus or balanced fertiliser every six to eight weeks from April to September is plenty. Do not feed in winter.',
      repotting:
        'Repot only every two to three years, or when the rhizomes crack the pot. Spring is best. Use a wide, heavy pot and firm the plant in well.',
      propagation:
        'Divide clumps at repotting time, or cut a leaf into 8-10 cm sections and root them upright in gritty, barely moist soil. Leaf cuttings of variegated forms lose their yellow edges.',
      problems:
        'Root rot from overwatering is by far the main problem: leaves turn yellow, go soft at the base and fall over. Mealybugs and spider mites occasionally appear in leaf folds. Brown, wrinkled tips usually mean the plant has been very dry for months.',
      denmarkTips:
        'In the Danish winter this plant may need water only once every five to six weeks; let the pot dry completely, as dark days plus wet soil is the classic killer. It does not mind radiator heat but dislikes cold windowsills below 10 °C at night. It can sit on a sunny balcony from June to August if sheltered from heavy rain, but it is equally content indoors.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 40, note: 'Only when soil is bone dry throughout; never water into the rosette' },
      { type: 'fertilize', intervalDays: 45, winterIntervalDays: 0, note: 'Half-strength cactus feed' },
      { type: 'wipe-leaves', intervalDays: 45, note: 'Dust leaves with a damp cloth' },
      { type: 'repot', intervalDays: 900, months: [3, 4, 5], note: 'Gritty succulent mix in a heavy pot; divide if crowded' },
    ],
    tags: ['beginner', 'low-light', 'drought-tolerant', 'air-purifying', 'succulent'],
  },
  {
    id: 'spathiphyllum-wallisii',
    commonName: 'Peace lily',
    danishName: 'Fredslilje',
    latinName: 'Spathiphyllum wallisii',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Spathiphyllum wallisii',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['lance', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['clumping', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The peace lily forms a lush clump of glossy dark-green leaves and produces elegant white spathes several times a year, even in fairly dim rooms. It is dramatic about thirst, wilting flat and then recovering within hours of a drink, which makes it an easy plant to read.',
      watering:
        'Keep the soil lightly moist but never soggy; water when the top 2-3 cm are dry, usually weekly in summer and every 10-14 days in winter. It will droop visibly when thirsty. Use room-temperature water, ideally rainwater or water left standing overnight, as it is sensitive to chlorine and fluoride.',
      light:
        'Grows well in low to medium light and is one of the best plants for a north-facing room. For reliable flowering give it bright indirect light. Direct sun yellows and scorches the leaves.',
      soil:
        'A peat-free, moisture-retentive houseplant compost with some perlite for drainage. It should not dry into a hard block or stay waterlogged.',
      temperature:
        'Ideal at 18-25 °C. Keep above 13 °C; cold draughts and temperatures below 10 °C cause blackened, limp leaves.',
      humidity:
        'Likes 50 % or more. In dry winter rooms the leaf tips brown; grouping plants, a pebble tray or occasional misting helps.',
      feeding:
        'Feed every four weeks from March to September with a balanced liquid fertiliser at half strength. Overfeeding causes brown tips and green, deformed flowers. Do not feed in winter.',
      repotting:
        'Repot every one to two years in spring into a pot one size larger, or divide large clumps into several plants. It flowers best when slightly pot-bound.',
      pruning:
        'Cut spent flower stalks right down at the base once the spathe turns green or brown. Remove yellowed leaves at soil level.',
      propagation:
        'Divide the clump at repotting time, making sure each section has roots and at least three or four leaves.',
      problems:
        'Mealybugs, spider mites and fungus gnats (tiny black flies from constantly wet soil) are the usual pests. Brown tips come from dry air, hard tap water or fertiliser salts. Yellow leaves plus a sour smell from the pot mean root rot from overwatering.',
      denmarkTips:
        'Very suited to Danish homes because it accepts low light, but in November-February it still needs a window spot and much less water. Danish tap water is hard; collect rainwater or let water stand overnight to reduce brown tips. Keep it away from radiators and draughty doors, and do not leave it on a cold windowsill at night. It is best kept indoors all year; outdoor nights are too cool and the leaves burn in sun.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Keep lightly moist; water when top 2-3 cm are dry, use rainwater if possible' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced liquid feed' },
      { type: 'mist', intervalDays: 3, note: 'Mist leaves or top up pebble tray when radiators are on' },
      { type: 'wipe-leaves', intervalDays: 30, note: 'Wipe glossy leaves and remove spent flower stalks' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'One size up or divide the clump' },
    ],
    tags: ['low-light', 'beginner', 'flowering', 'air-purifying'],
  },
  {
    id: 'zamioculcas-zamiifolia',
    commonName: 'ZZ plant',
    danishName: 'Zamioculcas',
    latinName: 'Zamioculcas zamiifolia',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Zamioculcas',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['compound', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['upright', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The ZZ plant sends up arching stems lined with thick, glossy, almost plastic-looking leaflets from fat underground rhizomes that store water. Native to dry East Africa, it shrugs off low light, dry air and weeks without water, making it ideal for offices and dim corners.',
      watering:
        'Let the soil dry out completely between waterings; every two to three weeks in summer and every four to six weeks in winter is typical. The rhizomes rot quickly in wet soil, and yellowing stems are almost always a sign of too much water rather than too little.',
      light:
        'Tolerates low light remarkably well, though growth is slow. Medium to bright indirect light produces more and larger stems. Avoid prolonged direct sun, which scorches the leaflets.',
      soil:
        'A free-draining mix is essential: houseplant compost with a third perlite or grit, or a cactus mix. Always use a pot with drainage holes.',
      temperature:
        'Prefers 18-26 °C. Keep above 10 °C and out of cold draughts; it will not tolerate frost.',
      humidity:
        'Average or dry room air is fine. No misting needed.',
      feeding:
        'Feed lightly, every six to eight weeks from April to September with half-strength balanced fertiliser. Skip feeding entirely in winter.',
      repotting:
        'Repot every two to three years in spring, or when the rhizomes bulge and distort the pot. Use a sturdy pot; the rhizomes are powerful enough to crack thin plastic.',
      propagation:
        'Divide the rhizomes at repotting, or root a stem or single leaflet in barely moist gritty soil. Leaf cuttings are slow and can take many months to form a rhizome.',
      problems:
        'Root and rhizome rot from overwatering is the main killer: stems yellow from the base and become mushy. Occasionally mealybugs, scale insects or spider mites appear; check the undersides of leaflets. Wrinkled stems mean the plant has finally used up its stored water.',
      denmarkTips:
        'One of the best plants for a dark Danish winter: it copes with the short November-February days, but water it only every five to six weeks in that period and always check the soil is bone dry first. It is unbothered by dry radiator air but should not stand on a cold windowsill at night. It can go outside on a shaded, rain-sheltered balcony from June to August, though it is equally happy staying in.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 40, note: 'Only when soil is dry throughout; yellow stems = too wet' },
      { type: 'fertilize', intervalDays: 45, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'wipe-leaves', intervalDays: 45, note: 'Wipe glossy leaflets to remove dust' },
      { type: 'repot', intervalDays: 900, months: [3, 4, 5], note: 'Sturdy pot, free-draining mix; divide rhizomes if crowded' },
    ],
    tags: ['beginner', 'low-light', 'drought-tolerant', 'office-plant'],
  },
  {
    id: 'ficus-elastica',
    commonName: 'Rubber plant',
    danishName: 'Gummifigen',
    latinName: 'Ficus elastica',
    family: 'Moraceae',
    category: 'indoor',
    wikipediaTitle: 'Ficus elastica',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['oval'],
      leafPattern: ['plain', 'variegated', 'coloured'],
      flowerColor: ['none'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The rubber plant is a bold, upright tree with large, leathery oval leaves that are deep glossy green, burgundy-black ("Burgundy") or splashed with cream and pink ("Tineke", "Ruby"). It is sturdier than its cousin the fiddle-leaf fig and grows quickly into a floor-standing specimen.',
      watering:
        'Water when the top 3-5 cm of soil are dry, usually every 7-10 days in summer and every two to three weeks in winter. Drain well and never leave it standing in water. Both over- and underwatering cause leaf drop, so aim for consistency.',
      light:
        'Bright indirect light is ideal; variegated forms need it to keep their colour. The plain green form tolerates medium light. A little gentle morning or evening sun is fine, but avoid hot midday sun through glass.',
      soil:
        'A free-draining, loam-based houseplant compost with added perlite or bark. It should hold moisture without staying soggy.',
      temperature:
        'Prefers 16-27 °C. Keep above 12 °C and away from cold draughts; sudden cold causes mass leaf drop.',
      humidity:
        'Average room humidity is adequate. Wipe the leaves regularly so they can breathe and shine.',
      feeding:
        'Feed every three to four weeks from April to September with a balanced liquid fertiliser. Pause from October to March.',
      repotting:
        'Repot young plants every year in spring, mature ones every two to three years into a pot 5 cm wider. For very large plants, simply refresh the top few centimetres of compost.',
      pruning:
        'Prune in spring to control height or encourage branching; cut just above a leaf node. The milky latex sap is irritating, so wear gloves and keep it off skin and floors.',
      propagation:
        'Take 10-15 cm tip cuttings in late spring, let the sap stop bleeding, then root in water or moist compost with bottom heat. Air layering works for thick stems.',
      problems:
        'Scale insects (brown bumps on stems and leaf undersides, sticky residue), mealybugs and spider mites are the main pests. Yellowing and dropping lower leaves usually mean overwatering; sudden drop of many leaves follows a cold draught or being moved. Brown edges indicate dry soil or too much sun.',
      denmarkTips:
        'In the short days from November to February it stops growing: keep it near your brightest window, water only every two to three weeks and do not feed. Keep it away from radiators and out of the path of cold air from doors and windows, as draughts cause leaf drop. It enjoys a sheltered balcony in dappled shade from mid-June to August but must come in before September nights fall below 12 °C.',
    },
    tasks: [
      { type: 'water', intervalDays: 8, winterIntervalDays: 18, note: 'Water when top 3-5 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Balanced liquid feed at recommended strength' },
      { type: 'wipe-leaves', intervalDays: 21, note: 'Wipe large leaves with a damp cloth; check for scale underneath' },
      { type: 'rotate', intervalDays: 14, note: 'Quarter turn for even growth' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Pot 5 cm wider; top-dress mature plants instead' },
    ],
    tags: ['statement-plant', 'beginner', 'air-purifying', 'tree'],
  },
  {
    id: 'ficus-lyrata',
    commonName: 'Fiddle-leaf fig',
    danishName: 'Violinfigen',
    latinName: 'Ficus lyrata',
    family: 'Moraceae',
    category: 'indoor',
    wikipediaTitle: 'Ficus lyrata',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect'],
    traits: {
      leafShape: ['lobed', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The fiddle-leaf fig is a striking tree with huge, violin-shaped, heavily veined leaves. It is the most demanding of the common indoor figs: it hates being moved, dislikes draughts and wet feet, and shows displeasure with brown spots and dropped leaves, but given a steady bright spot it becomes a magnificent focal point.',
      watering:
        'Water thoroughly when the top 5 cm of soil are dry, then drain fully. In summer this is about weekly, in winter every two to three weeks. Consistency matters more than quantity; alternating between bone dry and soggy causes the brown spots the plant is notorious for.',
      light:
        'Needs lots of bright indirect light, ideally right beside an east, west or lightly shaded south window. It tolerates a couple of hours of gentle direct sun. In poor light it drops lower leaves and grows thin and leggy.',
      soil:
        'A well-draining, loam-based compost with added bark and perlite. Use a pot with drainage holes and avoid oversized pots, which hold too much water.',
      temperature:
        'Prefers 18-26 °C and steady conditions. Keep above 13 °C and away from cold draughts, air conditioning and radiators.',
      humidity:
        'Likes 40-60 % humidity. Dry air causes crispy edges; grouping plants or using a humidifier in winter helps.',
      feeding:
        'Feed every three to four weeks from April to September with a balanced liquid fertiliser. Do not feed in winter.',
      repotting:
        'Repot every one to two years in spring into a pot 5 cm wider. Once it reaches the size you want, top-dress with fresh compost instead of potting up.',
      pruning:
        'Prune in spring to limit height or encourage branching; cut above a node and expect latex sap to bleed. Notching the trunk just above a node can force a side branch.',
      propagation:
        'Tip cuttings with two or three leaves root in water or moist compost in summer, though slowly. Air layering is the most reliable method for thick stems.',
      problems:
        'Brown spots spreading from the leaf centre with dark edges signal root rot from overwatering; crisp brown edges signal dryness or low humidity. Spider mites, mealybugs, scale and thrips attack stressed plants. Sudden leaf drop follows a move, a draught or a change in watering routine.',
      denmarkTips:
        'The dark Danish winter is this plant\'s biggest challenge: give it the brightest window you have, or a grow light for 10-12 hours a day, and reduce watering to every two to three weeks. Radiator air causes crispy edges, while cold air from the window at night causes leaf drop, so find a spot that avoids both. Do not move it around. A very sheltered balcony in bright shade from late June to August is possible but it resents the change, so most Danish growers keep it indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 16, note: 'Water when top 5 cm are dry; be consistent, never soggy' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Balanced liquid feed' },
      { type: 'wipe-leaves', intervalDays: 21, note: 'Wipe large leaves; inspect undersides for mites and scale' },
      { type: 'rotate', intervalDays: 14, note: 'Quarter turn to prevent leaning' },
      { type: 'check-pests', intervalDays: 21, note: 'Look for spider mites, thrips and scale on new growth' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'Pot 5 cm wider; top-dress once mature' },
    ],
    tags: ['statement-plant', 'tree', 'bright-light'],
  },
  {
    id: 'ficus-benjamina',
    commonName: 'Weeping fig',
    danishName: 'Birkefigen',
    latinName: 'Ficus benjamina',
    family: 'Moraceae',
    category: 'indoor',
    wikipediaTitle: 'Ficus benjamina',
    difficulty: 'moderate',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['oval', 'lance'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['none'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The weeping fig is a graceful indoor tree with slender arching branches and small, glossy pointed leaves, sometimes variegated with cream. It is a long-lived classic in Danish homes and offices but is famous for dropping leaves whenever it is moved, chilled or watered inconsistently.',
      watering:
        'Water when the top 3 cm of soil are dry, roughly weekly in summer and every two weeks in winter. Water thoroughly and let it drain; never let the pot sit in water. Both drought and waterlogging trigger leaf drop.',
      light:
        'Bright indirect light with some gentle morning sun is ideal. It tolerates medium light but becomes sparse. Variegated forms need brighter light. Once it is settled, do not move it.',
      soil:
        'A standard loam-based houseplant compost with added perlite for drainage. Repot into a pot with good drainage holes.',
      temperature:
        'Prefers 16-24 °C. Keep above 13 °C and protect it strictly from cold draughts, which cause sudden leaf loss.',
      humidity:
        'Average room humidity is acceptable, but it appreciates 40-50 %. Dry radiator air encourages spider mites and leaf drop.',
      feeding:
        'Feed every two to four weeks from April to September with a balanced liquid fertiliser. Stop in winter.',
      repotting:
        'Repot every two years in spring into a slightly larger pot. Large specimens can be top-dressed instead.',
      pruning:
        'Prune in late winter or spring to shape and to keep it compact; it responds well and can even be clipped like a hedge. Wear gloves as the latex sap irritates skin.',
      propagation:
        'Take semi-ripe tip cuttings in summer and root them in moist compost with a plastic bag over the pot to hold humidity.',
      problems:
        'Scale insects (brown bumps and sticky, sooty leaves) are very common, as are spider mites in dry air and mealybugs. Leaf drop is the universal stress response to moving, cold draughts, over- or underwatering, or a change in light. Yellow leaves with wet soil point to root rot.',
      denmarkTips:
        'Expect some leaf drop in November when the light falls away; this is normal, so do not react by watering more. Place it by a bright window but shield it from the cold draught of the glass and from the radiator beneath it. Water about every two weeks in winter. It can stand outside in a sheltered, partly shaded spot from mid-June to August, but the move itself triggers leaf drop both ways, so many growers keep it in one indoor spot year-round.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 14, note: 'Water when top 3 cm are dry; drain fully' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, note: 'Balanced liquid feed' },
      { type: 'check-pests', intervalDays: 21, note: 'Check stems and leaf undersides for scale and spider mites' },
      { type: 'prune', intervalDays: 365, months: [2, 3, 4], note: 'Shape and thin; wear gloves against latex sap' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Slightly larger pot or top-dress' },
    ],
    tags: ['tree', 'statement-plant', 'air-purifying'],
  },
  {
    id: 'dracaena-marginata',
    commonName: 'Dragon tree',
    danishName: 'Drageblodstræ',
    latinName: 'Dracaena marginata',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Dracaena marginata',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['strap', 'lance'],
      leafPattern: ['striped', 'coloured'],
      flowerColor: ['none'],
      habit: ['tree', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The dragon tree has slim, often twisting woody canes topped with tufts of narrow, arching leaves edged in red or pink. It is slow-growing, tolerant of neglect and one of the most popular floor plants for modern interiors.',
      watering:
        'Water when the top half of the compost is dry, roughly every 10 days in summer and every three weeks in winter. It is sensitive to fluoride and salts in tap water, which cause brown leaf tips, so use rainwater or filtered water if possible. Never leave it standing in water.',
      light:
        'Medium to bright indirect light. It survives lower light but grows very slowly and loses the red leaf margins. Direct midday sun bleaches the foliage.',
      soil:
        'Standard free-draining houseplant compost with added perlite. Avoid fertilisers and composts with added perlite containing fluoride if tips keep browning.',
      temperature:
        'Prefers 18-26 °C. Tolerates down to about 12 °C; below that the leaves develop pale, soft patches.',
      humidity:
        'Average room humidity is fine. Dry air contributes to brown tips, so a pebble tray helps in winter.',
      feeding:
        'Feed monthly from April to September at half strength. Dracaenas are sensitive to overfeeding, so err on the light side and stop in winter.',
      repotting:
        'Repot every two to three years in spring; it is happy slightly pot-bound. Use a heavy pot for tall, top-heavy canes.',
      pruning:
        'Cut the cane back to any height in spring; new tufts sprout just below the cut, giving a branched plant. The removed top can be rooted.',
      propagation:
        'Root cane sections or tip cuttings 10-20 cm long in water or moist compost in late spring. Keep track of which end is up on cane sections.',
      problems:
        'Brown leaf tips are almost universal and come from fluoride, dry air or underwatering. Yellowing lower leaves that drop are normal ageing; many at once means overwatering. Spider mites, mealybugs and scale appear in dry conditions; look for webbing and sticky residue.',
      denmarkTips:
        'A good choice for Danish homes as it tolerates winter dimness, but water only every three weeks from November to February and keep it from touching a cold window. Danish tap water is hard, so use rainwater to limit brown tips, and keep the plant off the radiator side of the room. It can spend July and August in bright shade on a sheltered balcony but is just as happy indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 10, winterIntervalDays: 21, note: 'Water when top half of pot is dry; use rainwater to avoid brown tips' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'wipe-leaves', intervalDays: 30, note: 'Wipe leaves and trim brown tips with clean scissors' },
      { type: 'check-pests', intervalDays: 30, note: 'Look for spider mites and scale where leaves meet the cane' },
      { type: 'repot', intervalDays: 900, months: [3, 4, 5], note: 'Heavy pot one size up' },
    ],
    tags: ['beginner', 'air-purifying', 'tree', 'low-maintenance'],
  },
  {
    id: 'chlorophytum-comosum',
    commonName: 'Spider plant',
    danishName: 'Væddeløber',
    latinName: 'Chlorophytum comosum',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Chlorophytum comosum',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['strap', 'grass-like'],
      leafPattern: ['striped', 'variegated', 'plain'],
      flowerColor: ['white'],
      habit: ['clumping', 'trailing', 'rosette'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The spider plant forms a fountain of arching, grass-like leaves, usually striped white or cream, and sends out long stems bearing tiny white flowers and baby plantlets that dangle like spiders. It is tough, fast, pet-safe and endlessly propagable, making it a classic first houseplant.',
      watering:
        'Water when the top 2-3 cm are dry, about weekly in summer and every two weeks in winter. The fleshy roots store water, so it forgives a missed watering. Use rainwater or water left to stand, as fluoride and salts in tap water cause brown tips.',
      light:
        'Bright indirect light keeps the stripes crisp; medium light is tolerated but the plant grows paler and slower. Avoid harsh direct midday sun, which scorches the leaves.',
      soil:
        'Any good free-draining houseplant compost. The thick roots quickly fill a pot, so a slightly roomier pot than usual is fine.',
      temperature:
        'Prefers 15-24 °C. Tolerates down to about 10 °C briefly but not frost or cold draughts.',
      humidity:
        'Average room humidity is fine. Very dry air adds to brown tips, so a little extra humidity in winter helps.',
      feeding:
        'Feed every three to four weeks from April to September with a half-strength balanced fertiliser. Too much feed causes brown tips. Do not feed in winter.',
      repotting:
        'Repot every one to two years in spring when the tuberous roots push the plant up out of the pot. Large clumps can be divided.',
      pruning:
        'Trim brown tips with clean scissors and remove tired outer leaves. Cut off plantlets to pot up or to tidy the plant.',
      propagation:
        'Pot up the plantlets while still attached to the mother plant, or snip them off and root them in water in a week or two. It could not be easier.',
      problems:
        'Brown leaf tips are the most common complaint and come from tap water, dry air or overfeeding. Mealybugs, aphids on flower stems, scale and spider mites occasionally occur. Soft, pale leaves and a mushy base mean root rot from waterlogging.',
      denmarkTips:
        'Spider plants cope well with the dark Danish winter if placed near a window, but water only every two weeks in November-February. Hard Danish tap water and radiator air together cause brown tips, so use rainwater and keep it off the radiator shelf. It is an excellent balcony plant in bright shade from June to August and even tolerates cool nights down to about 10 °C, but bring it in by mid-September.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 14, note: 'Water when top 2-3 cm are dry; rainwater reduces brown tips' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'prune', intervalDays: 60, note: 'Trim brown tips, remove old leaves, pot up plantlets' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'One size up or divide the clump' },
    ],
    tags: ['pet-safe', 'beginner', 'air-purifying', 'trailing', 'easy-propagation'],
  },
  {
    id: 'aloe-vera',
    commonName: 'Aloe vera',
    danishName: 'Aloe vera',
    latinName: 'Aloe vera',
    family: 'Asphodelaceae',
    category: 'indoor',
    wikipediaTitle: 'Aloe vera',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['succulent', 'lance'],
      leafPattern: ['plain', 'spotted'],
      flowerColor: ['none'],
      habit: ['rosette', 'clumping'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Aloe vera is a stemless succulent forming a rosette of thick, fleshy, grey-green leaves with soft teeth along the edges and a clear gel inside that is traditionally used on minor burns. It is extremely drought-tolerant and asks only for sun and a gritty, dry soil.',
      watering:
        'Soak the soil thoroughly, then let it dry out completely before watering again: every two to three weeks in summer and every four to six weeks in winter. Overwatering makes the leaves soft, translucent and brown at the base. Water the soil, not the rosette.',
      light:
        'Needs lots of light: a south or west windowsill is ideal. In too little light the leaves grow thin, pale and flop outward. Acclimatise gradually to full outdoor sun to avoid sunburn (reddish-brown patches).',
      soil:
        'Use a gritty cactus and succulent mix, or compost with at least a third coarse sand or perlite. A terracotta pot with drainage holes dries out fastest and helps prevent rot.',
      temperature:
        'Prefers 15-27 °C. Tolerates down to about 8 °C if kept dry; it is not frost-hardy.',
      humidity:
        'Dry air is ideal. Do not mist.',
      feeding:
        'Feed once or twice a year, in spring and midsummer, with a half-strength cactus fertiliser. Nothing in winter.',
      repotting:
        'Repot every two to three years in spring into a pot only slightly wider, or when offsets crowd the pot. Let it sit dry for a week after repotting before watering.',
      propagation:
        'Remove the offsets (pups) that form around the base when they have a few leaves of their own, let the cut surface dry for a day, then pot into gritty soil.',
      problems:
        'Root rot from overwatering or cold wet soil is the main killer: leaves go mushy and brown at the base. Mealybugs and scale sometimes settle in the leaf bases; spider mites are rare. Thin, stretched leaves indicate too little light; reddish leaves indicate sudden strong sun.',
      denmarkTips:
        'In the Danish winter aloe gets very little light, so it should have the sunniest windowsill available and be watered only every five to six weeks; a cold, wet pot in December is fatal. Cool nights on a windowsill are fine as long as the soil is dry and it stays above about 8 °C. From June to August it thrives on a sunny balcony and colours up nicely, but shelter it from heavy rain and bring it in during September.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 40, note: 'Soak only when soil is fully dry; never water into the rosette' },
      { type: 'fertilize', intervalDays: 90, winterIntervalDays: 0, note: 'Half-strength cactus feed, spring and midsummer only' },
      { type: 'check-pests', intervalDays: 45, note: 'Check leaf bases for mealybugs and scale' },
      { type: 'repot', intervalDays: 900, months: [4, 5], note: 'Gritty mix, terracotta pot; remove and pot up pups' },
    ],
    tags: ['succulent', 'drought-tolerant', 'beginner', 'sun-loving', 'medicinal'],
  },
  {
    id: 'phalaenopsis',
    commonName: 'Moth orchid',
    danishName: 'Orkidé',
    latinName: 'Phalaenopsis',
    family: 'Orchidaceae',
    category: 'indoor',
    wikipediaTitle: 'Phalaenopsis',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['oval', 'strap'],
      leafPattern: ['plain'],
      flowerColor: ['white', 'pink', 'purple', 'yellow', 'mixed'],
      habit: ['upright', 'rosette'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The moth orchid is the supermarket orchid: a few broad, leathery leaves and an arching spray of long-lasting flowers in white, pink, purple, yellow or patterned blends. Flowers last two to three months, and with the right routine the plant reblooms year after year.',
      watering:
        'Water roughly once a week in summer and every 10-14 days in winter, when the roots in the clear pot turn silvery-grey rather than green. Soak the pot for 10-15 minutes in room-temperature water, then drain completely. Never let water sit in the crown or let the pot stand in water.',
      light:
        'Bright but indirect light, such as an east window or a shaded south window. Leaves should be a fresh medium green; dark green means too little light and reddish or yellow means too much. Direct midday sun scorches the leaves.',
      soil:
        'Grow in coarse orchid bark, not compost, in a clear plastic pot with drainage so the roots get light and air. Replace the bark when it breaks down and turns spongy.',
      temperature:
        'Prefers 18-28 °C by day. Keep above 15 °C; a few weeks of cooler nights around 15-17 °C in autumn trigger a new flower spike.',
      humidity:
        'Likes 50-70 %, but copes with normal rooms if roots are kept healthy. A pebble tray or grouping plants helps in winter; avoid misting the crown.',
      feeding:
        'Feed with a dedicated orchid fertiliser at quarter to half strength every second watering during growth, and once a month in winter. Flush the bark with plain water every few weeks to prevent salt build-up.',
      repotting:
        'Repot every two years, or when the bark is decomposed, ideally just after flowering in spring. Trim off dead, hollow roots and settle the plant into fresh bark without burying the crown.',
      pruning:
        'When the last flower drops, cut the spike just above the second or third node from the base to encourage a side spike, or cut it right down if it has turned brown. Remove dead roots at repotting.',
      propagation:
        'Occasionally a keiki (baby plant) forms on the flower spike; pot it up once it has roots several centimetres long. Division is not practical for home growers.',
      problems:
        'Mealybugs and scale hide at leaf bases and under the flower spike; look for sticky residue. Limp, wrinkled leaves mean dehydrated roots from either drought or root rot (roots brown and mushy). Bud drop follows sudden cold, draughts, or ethylene from nearby ripening fruit.',
      denmarkTips:
        'Danish winter light is low, so place it in an east or south window from October to March, where a cooler night temperature of around 15-17 °C from the glass actually helps trigger flowering. Water every 10-14 days in winter and keep it away from the radiator directly below the window, which dries it out and causes bud drop. Do not leave it in a window where the leaves touch frosty glass. It can stay indoors all year; a shaded balcony in July-August is possible but not necessary.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 12, note: 'Soak pot 10-15 min when roots look silvery; drain fully, keep crown dry' },
      { type: 'fertilize', intervalDays: 14, winterIntervalDays: 30, note: 'Quarter-strength orchid feed; flush with plain water monthly' },
      { type: 'check-pests', intervalDays: 30, note: 'Check leaf bases and spike for mealybugs and scale' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5, 6], note: 'Fresh orchid bark in clear pot after flowering; trim dead roots' },
    ],
    tags: ['pet-safe', 'flowering', 'windowsill', 'long-blooming'],
  },
  {
    id: 'goeppertia-orbifolia',
    commonName: 'Calathea orbifolia',
    danishName: 'Calathea',
    latinName: 'Goeppertia orbifolia',
    family: 'Marantaceae',
    category: 'indoor',
    wikipediaTitle: 'Goeppertia orbifolia',
    difficulty: 'demanding',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['round', 'oval'],
      leafPattern: ['striped', 'silver'],
      flowerColor: ['none'],
      habit: ['clumping', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Calathea orbifolia has large, rounded leaves boldly striped in silver-green, carried on short stems in a lush clump. Like other prayer plants it folds its leaves upward at night. It is beautiful but fussy, demanding high humidity, soft water and even moisture, and it reacts to any lapse with crispy brown edges.',
      watering:
        'Keep the soil consistently lightly moist; water when the top 2 cm are dry, usually every 4-6 days in summer and every 7-10 days in winter. Use rainwater, filtered or distilled water at room temperature, as the plant is very sensitive to fluoride, chlorine and hard water. Do not let it dry out, but never leave it waterlogged either.',
      light:
        'Medium to bright indirect light, such as a north or east window or a metre back from a brighter one. Direct sun fades the silver stripes and scorches the leaves. It will tolerate fairly low light but grows slowly.',
      soil:
        'A light, moisture-retentive but airy mix: peat-free compost with added perlite and a little orchid bark or coco coir. It should stay evenly moist without compacting.',
      temperature:
        'Prefers 18-26 °C with no sudden changes. Keep above 15 °C and strictly away from cold draughts and heating vents.',
      humidity:
        'Needs 60 % or more to look its best; below 50 % the edges brown. A humidifier, a pebble tray, grouping with other plants or a bright bathroom all help. Misting alone is rarely enough.',
      feeding:
        'Feed every four weeks from April to September with a half- or quarter-strength balanced fertiliser. It is salt-sensitive, so less is more, and no feeding in winter.',
      repotting:
        'Repot every one to two years in spring into a pot one size larger. Handle the roots gently; it sulks for weeks after being disturbed.',
      propagation:
        'Divide the clump at repotting time, keeping several leaves and roots per section, and keep divisions warm and humid until established.',
      problems:
        'Spider mites love calatheas, especially in dry winter air; look for stippling and fine webbing under leaves. Fungus gnats breed in the constantly moist soil. Crispy brown edges mean low humidity or hard tap water; yellow leaves with limp stems mean overwatering and root rot; curling leaves mean it is too dry or too hot.',
      denmarkTips:
        'This is a hard plant to keep well through a Danish winter: radiator heat drops indoor humidity to 20-30 %, which browns the leaf edges within weeks, so run a humidifier or keep it in a bright bathroom from October to March. The short days are tolerated, but keep it near a window without letting leaves touch cold glass. Always use rainwater; Danish tap water is too hard. Keep it indoors all year; even a Danish summer night is too cool and windy for it.',
    },
    tasks: [
      { type: 'water', intervalDays: 5, winterIntervalDays: 8, note: 'Keep evenly moist with rainwater; water when top 2 cm are dry' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Quarter- to half-strength balanced feed' },
      { type: 'mist', intervalDays: 2, note: 'Mist or top up humidifier/pebble tray; aim for 60 % humidity' },
      { type: 'check-pests', intervalDays: 14, note: 'Inspect leaf undersides closely for spider mites' },
      { type: 'wipe-leaves', intervalDays: 30, note: 'Gently wipe large leaves with a damp cloth' },
      { type: 'repot', intervalDays: 540, months: [4, 5], note: 'One size up, airy moisture-retentive mix' },
    ],
    tags: ['pet-safe', 'humidity-lover', 'patterned-foliage', 'demanding'],
  },
  {
    id: 'philodendron-hederaceum',
    commonName: 'Heartleaf philodendron',
    danishName: 'Hjertebladet philodendron',
    latinName: 'Philodendron hederaceum',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Philodendron hederaceum',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['low', 'medium', 'bright-indirect'],
    traits: {
      leafShape: ['heart'],
      leafPattern: ['plain', 'variegated', 'coloured'],
      flowerColor: ['none'],
      habit: ['trailing', 'climbing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The heartleaf philodendron is a fast, forgiving vine with glossy, deep-green heart-shaped leaves, available in lime-green ("Lemon Lime"), variegated ("Brasil") and bronze ("Micans") forms. It trails beautifully from a shelf or climbs a pole, and it tolerates low light and the occasional missed watering.',
      watering:
        'Water when the top 3 cm of soil are dry, roughly weekly in summer and every two weeks in winter. Drooping, slightly curled leaves mean it is thirsty; yellow leaves mean it has been too wet. Always let the excess drain away.',
      light:
        'Medium to bright indirect light is best, but it is one of the most shade-tolerant vines and copes with a north window. Variegated forms need brighter light to hold their colour. Avoid direct midday sun.',
      soil:
        'A free-draining aroid mix: houseplant compost with added perlite and bark. It also grows well in just water for long periods.',
      temperature:
        'Prefers 18-27 °C. Keep above 13 °C and out of cold draughts.',
      humidity:
        'Average room humidity is fine; higher humidity gives larger leaves. Brown tips in winter point to very dry air.',
      feeding:
        'Feed monthly from April to September with a half-strength balanced liquid fertiliser. No feeding in winter.',
      repotting:
        'Repot every one to two years in spring when roots fill the pot. It is happy slightly snug.',
      pruning:
        'Pinch or cut back long stems any time to keep it full; cutting just after a node makes the plant branch. Root the trimmings and plant them back in to thicken the pot.',
      propagation:
        'Stem cuttings with a node root in water within two to three weeks. Several cuttings in one pot make a full plant quickly.',
      problems:
        'Mealybugs, spider mites, scale and thrips occasionally appear; look under leaves and along stems for fluff, webbing or sticky residue. Yellow leaves and black mushy stems mean root rot from overwatering. Small, pale new leaves and long bare stems mean too little light.',
      denmarkTips:
        'Among the easiest trailing plants for a Danish winter: it keeps its leaves in low light, but growth stops from November to February, so water only every two weeks and do not feed. Keep trailing stems off cold window panes and away from the radiator. It can hang on a shaded balcony from mid-June to August but must come in before nights drop below 13 °C.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 14, note: 'Water when top 3 cm are dry; drooping leaves = thirsty' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'prune', intervalDays: 90, note: 'Trim long stems and root cuttings back into the pot' },
      { type: 'check-pests', intervalDays: 30, note: 'Check for mealybugs, thrips and spider mites' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'One size up, airy aroid mix' },
    ],
    tags: ['beginner', 'low-light', 'trailing', 'air-purifying'],
  },
  {
    id: 'pilea-peperomioides',
    commonName: 'Chinese money plant',
    danishName: 'Pengeplante',
    latinName: 'Pilea peperomioides',
    family: 'Urticaceae',
    category: 'indoor',
    wikipediaTitle: 'Pilea peperomioides',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['round'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['upright', 'clumping'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The Chinese money plant carries perfectly round, coin-like leaves on long stalks from a short upright stem, giving it a playful, graphic look. It produces plenty of baby plants from the soil and stem, which is why it spread across Scandinavia for decades as a pass-along plant before it was sold in shops.',
      watering:
        'Water when the top 3 cm of soil are dry, roughly weekly in summer and every two weeks in winter. Leaves droop and curl when thirsty and recover quickly. Soggy soil causes yellowing and leaf drop from the base.',
      light:
        'Bright indirect light, such as an east or west window or near a south window with sheer curtains. It leans strongly towards the light, so turn it often for a symmetrical plant. Direct midday sun scorches the leaves.',
      soil:
        'Well-draining houseplant compost with added perlite. Plastic pots retain more moisture than terracotta; either is fine as long as there is drainage.',
      temperature:
        'Prefers 15-24 °C and tolerates cool rooms down to about 10 °C. It dislikes heat above 28 °C and hot radiator air.',
      humidity:
        'Normal room humidity is adequate. Very dry air can crisp the leaf edges slightly.',
      feeding:
        'Feed monthly from April to September with half-strength balanced fertiliser. Skip feeding in winter.',
      repotting:
        'Repot every year or two in spring when roots show at the drainage holes. Remove and pot up pups at the same time.',
      pruning:
        'Remove lower leaves as they age and yellow. Cut the top off a leggy plant to root it and encourage a bushier base.',
      propagation:
        'Separate the pups that appear in the soil once they are 5-7 cm tall, keeping their roots, and pot them individually. Stem pups can be cut off and rooted in water.',
      problems:
        'Mealybugs and fungus gnats are the usual pests; spider mites appear in very dry air. Yellow lower leaves plus wet soil mean overwatering and root rot. White crystalline spots under the leaves are normal mineral deposits, not pests. Curling or doming leaves indicate too much or too little light.',
      denmarkTips:
        'Pilea handles the cool Danish winter better than most tropicals and is fine in a cool, bright room, but water only every two weeks from November to February and keep it out of hot radiator air, which it dislikes. Place it at the window and rotate it weekly because it leans towards the weak winter light. It enjoys a shaded, sheltered balcony from June to August and tolerates cool nights down to about 10 °C.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 14, note: 'Water when top 3 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'rotate', intervalDays: 7, note: 'Turn a quarter so it does not lean to the window' },
      { type: 'check-pests', intervalDays: 30, note: 'Check stems and soil for mealybugs and fungus gnats' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'One size up; separate and pot up pups' },
    ],
    tags: ['pet-safe', 'beginner', 'easy-propagation', 'compact'],
  },
  {
    id: 'echeveria-elegans',
    commonName: 'Mexican snowball',
    danishName: 'Echeveria',
    latinName: 'Echeveria elegans',
    family: 'Crassulaceae',
    category: 'indoor',
    wikipediaTitle: 'Echeveria elegans',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['direct-sun', 'bright-indirect'],
    traits: {
      leafShape: ['succulent'],
      leafPattern: ['plain', 'silver'],
      flowerColor: ['pink', 'yellow'],
      habit: ['rosette', 'clumping'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'Echeveria elegans is a neat succulent rosette of plump, pale blue-green leaves with a powdery coating, slowly multiplying into a mound of offsets. In spring it sends up arching stems of small pink and yellow bell flowers. It needs sun and very little water.',
      watering:
        'Soak the soil thoroughly and then let it dry out completely before watering again: every two to three weeks in summer, every five to eight weeks in winter when the plant is nearly dormant. Water the soil, not the rosette, as water trapped between the leaves causes rot. Wrinkled, soft leaves mean it is finally thirsty.',
      light:
        'Needs as much sun as possible indoors: a south or west windowsill. In insufficient light the rosette stretches, loses its compact shape and goes pale green (etiolation), which cannot be reversed.',
      soil:
        'A very gritty cactus and succulent mix with at least 50 % perlite, pumice or coarse sand. Use a small terracotta pot with drainage holes.',
      temperature:
        'Prefers 15-27 °C in summer and enjoys a cool, dry winter rest at 5-12 °C. Tolerates brief dips near 0 °C only if completely dry; it is not frost-hardy.',
      humidity:
        'Dry air is ideal. Never mist, as water on the powdery leaves marks them and encourages rot.',
      feeding:
        'Feed once or twice during spring and summer with a quarter-strength cactus fertiliser. Nothing in autumn or winter.',
      repotting:
        'Repot every two to three years in spring into a pot just slightly larger, or when offsets spill over the edge. Wait a week after repotting before watering.',
      propagation:
        'Twist off offsets and pot them up, or remove a whole healthy leaf, let it callus for a few days and lay it on dry gritty soil until roots and a tiny rosette form.',
      problems:
        'Root rot and basal rot from overwatering or cold wet soil are the main problems: lower leaves go mushy and translucent. Mealybugs hide deep between the leaves as white fluff; check with a magnifier. Stretched, open rosettes mean too little light. Dried, shrivelled lower leaves are normal and can be gently removed.',
      denmarkTips:
        'The Danish winter is dark enough to etiolate echeverias, so keep it on the sunniest windowsill (a cold one is fine, even ideal) and water only every six to eight weeks from November to February; a cool, dry rest keeps it compact. A grow light helps if your windows face north. From late May to September it loves a sunny, rain-sheltered balcony and will colour up and flower, but bring it in before the first frost and shield it from autumn rain.',
    },
    tasks: [
      { type: 'water', intervalDays: 18, winterIntervalDays: 45, note: 'Soak only when fully dry; keep water off the rosette' },
      { type: 'fertilize', intervalDays: 90, winterIntervalDays: 0, note: 'Quarter-strength cactus feed, spring and summer only' },
      { type: 'check-pests', intervalDays: 45, note: 'Check between leaves for mealybugs; remove dried lower leaves' },
      { type: 'repot', intervalDays: 900, months: [4, 5], note: 'Gritty mix, small terracotta pot; separate offsets' },
    ],
    tags: ['pet-safe', 'succulent', 'drought-tolerant', 'sun-loving', 'compact'],
  },
  {
    id: 'peperomia-obtusifolia',
    commonName: 'Baby rubber plant',
    danishName: 'Peperomia',
    latinName: 'Peperomia obtusifolia',
    family: 'Piperaceae',
    category: 'indoor',
    wikipediaTitle: 'Peperomia obtusifolia',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['oval', 'round', 'succulent'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['green'],
      habit: ['bushy', 'upright'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The baby rubber plant is a compact, bushy peperomia with thick, glossy, rounded leaves in deep green or splashed with cream and yellow. It is unrelated to the true rubber plant, semi-succulent, pet-safe and content on a desk or shelf with modest light and infrequent watering.',
      watering:
        'Let the top half of the soil dry before watering, roughly every 7-10 days in summer and every two to three weeks in winter. The fleshy leaves and stems store water, so underwatering is far less dangerous than overwatering. Leaves go limp and dull when thirsty.',
      light:
        'Medium to bright indirect light. Variegated forms need more light to keep their markings; the green form tolerates a north window. Avoid direct midday sun.',
      soil:
        'A light, well-draining mix such as houseplant compost with a third perlite or orchid bark. It has a small root system, so do not overpot.',
      temperature:
        'Prefers 18-26 °C. Keep above 12 °C and away from cold draughts.',
      humidity:
        'Normal room humidity is fine. It appreciates a little extra humidity but does not need misting.',
      feeding:
        'Feed monthly from April to September with half-strength balanced fertiliser. Do not feed in winter.',
      repotting:
        'Repot every two to three years in spring; it likes being snug and often just needs fresh compost in the same pot.',
      pruning:
        'Pinch back stem tips in spring to keep it compact and bushy. Remove the slender green flower spikes if you find them untidy.',
      propagation:
        'Stem cuttings with a couple of leaves root easily in water or moist compost in spring and summer. Leaf cuttings also work but are slower.',
      problems:
        'Mealybugs, spider mites and fungus gnats are the occasional pests. Sudden leaf drop and black stems at the base indicate root rot from overwatering, the only common way to lose this plant. Faded, scorched patches mean too much direct sun.',
      denmarkTips:
        'Handles the dark Danish winter well on a windowsill, but water only every two to three weeks from November to February and keep leaves off icy glass. It tolerates dry radiator air better than most tropicals thanks to its fleshy leaves. A shaded balcony from mid-June to August is fine but unnecessary; it is happy indoors all year.',
    },
    tasks: [
      { type: 'water', intervalDays: 9, winterIntervalDays: 18, note: 'Water when top half of pot is dry; limp leaves = thirsty' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced feed' },
      { type: 'prune', intervalDays: 365, months: [3, 4, 5], note: 'Pinch tips to keep it bushy; root the cuttings' },
      { type: 'check-pests', intervalDays: 30, note: 'Check for mealybugs and fungus gnats' },
      { type: 'repot', intervalDays: 900, months: [3, 4, 5], note: 'Same size or one up; light airy mix' },
    ],
    tags: ['pet-safe', 'beginner', 'compact', 'desk-plant'],
  },
  {
    id: 'hedera-helix',
    commonName: 'English ivy',
    danishName: 'Vedbend',
    latinName: 'Hedera helix',
    family: 'Araliaceae',
    category: 'both',
    wikipediaTitle: 'Hedera helix',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['medium', 'bright-indirect', 'partial-shade', 'shade'],
    traits: {
      leafShape: ['lobed', 'palmate'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['none'],
      habit: ['trailing', 'climbing', 'groundcover'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'English ivy is Denmark\'s native evergreen climber, and indoors the small-leaved and variegated cultivars make attractive trailing plants for cool rooms and hanging pots. It is fully hardy outdoors, but as a houseplant it is fussier than its reputation, disliking warm dry air and attracting spider mites.',
      watering:
        'Keep the soil evenly, lightly moist in summer, watering when the top 2-3 cm are dry, about weekly. In winter in a cool room water every 10-14 days. Do not let it stand in water or dry out completely; both cause leaf drop.',
      light:
        'Medium to bright indirect light indoors; variegated forms need the brighter end to keep their markings. It tolerates a north window well. Outdoors it grows in anything from deep shade to full sun.',
      soil:
        'Any good free-draining compost, ideally loam-based, with added perlite. Outdoors it is unfussy about soil.',
      temperature:
        'Prefers cool conditions, 10-18 °C, and dislikes warm rooms above 22 °C. Fully frost-hardy outdoors in Denmark (down to -20 °C or below). An unheated porch or stairwell is ideal in winter.',
      humidity:
        'Likes moderately high humidity; warm dry rooms cause crispy leaves and spider mite outbreaks. Mist regularly or rinse the foliage under the shower every couple of weeks.',
      feeding:
        'Feed every two to four weeks from April to September with a balanced liquid fertiliser. Do not feed in winter.',
      repotting:
        'Repot every one to two years in spring when roots fill the pot. Trailing types do well in hanging baskets.',
      pruning:
        'Trim back any time to keep it bushy and to remove leggy or bare stems; it responds vigorously. Cut out reverted green shoots on variegated plants.',
      propagation:
        'Stem cuttings 10 cm long root readily in water or moist compost at any time of year. Stems pegged down onto soil root at the nodes.',
      problems:
        'Spider mites are the number one problem indoors, especially in warm dry rooms: look for fine webbing, speckled leaves and dusty undersides. Scale insects, aphids and mealybugs also occur. Yellow leaves and dropping foliage mean overwatering or too much heat. Leaves and berries are toxic if eaten and the sap can irritate skin.',
      denmarkTips:
        'Ivy actively prefers the cool, so the Danish winter suits it if you keep it away from the radiator: an unheated stairwell, porch or cool bedroom by a window is perfect, and it even copes with the dark months there. In a warm living room with central heating it will get spider mites, so rinse the foliage every two weeks. It is fully hardy, so it can live on the balcony all year round in a pot, or be planted in the garden; just bring variegated potted plants into shelter in hard frost below about -10 °C so the roots do not freeze solid.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 12, note: 'Keep lightly moist; water when top 2-3 cm are dry' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, note: 'Balanced liquid feed' },
      { type: 'mist', intervalDays: 7, note: 'Mist or shower the foliage to deter spider mites' },
      { type: 'check-pests', intervalDays: 14, note: 'Inspect leaf undersides for spider mite webbing and scale' },
      { type: 'prune', intervalDays: 120, note: 'Trim leggy stems; root cuttings in water' },
      { type: 'repot', intervalDays: 540, months: [3, 4, 5], note: 'One size up or refresh compost' },
    ],
    tags: ['trailing', 'cool-room', 'hardy', 'air-purifying', 'balcony'],
  },
  {
    id: 'hoya-carnosa',
    commonName: 'Wax plant',
    danishName: 'Porcelænsblomst',
    latinName: 'Hoya carnosa',
    family: 'Apocynaceae',
    category: 'indoor',
    wikipediaTitle: 'Hoya carnosa',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['oval', 'succulent'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['pink', 'white'],
      habit: ['climbing', 'trailing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The wax plant is a long-lived twining vine with thick, waxy, dark-green leaves (variegated and crinkled forms exist) and clusters of star-shaped, porcelain-like pink and white flowers that smell sweetly in the evening. It is a traditional Danish windowsill plant that can live for decades and flowers best when left undisturbed.',
      watering:
        'Let the top half of the pot dry out before watering, roughly every 7-10 days in summer and every two to four weeks in winter. The succulent leaves tolerate drought well; soggy soil rots the roots. Slightly wrinkled leaves are a sign it is ready for water.',
      light:
        'Bright indirect light with a couple of hours of gentle direct sun, such as an east or west window, is needed for flowering. It survives in medium light but rarely blooms. Shield it from harsh midday summer sun.',
      soil:
        'A very airy, free-draining mix: houseplant compost with plenty of orchid bark and perlite, as for epiphytes. A snug pot encourages flowering.',
      temperature:
        'Prefers 16-26 °C. Keep above 10 °C; a slightly cooler, drier winter rest around 14-16 °C encourages flower buds.',
      humidity:
        'Average room humidity is fine; higher humidity helps new growth but is not required. Avoid misting open flowers.',
      feeding:
        'Feed every three to four weeks from April to September with a half-strength balanced or high-potassium fertiliser. Do not feed in winter.',
      repotting:
        'Repot only every two to three years in spring; it flowers best when pot-bound. Never cut off the leafless flower spurs, as new flowers form on the same spurs each year.',
      pruning:
        'Prune sparingly, only to remove dead or very long stems, in spring. Train the vines around a hoop or trellis rather than cutting them. Do not remove the old flower spurs or faded flower stalks.',
      propagation:
        'Stem cuttings with two or three nodes root in water or in moist bark and perlite in spring and summer. Cuttings take a few years to reach flowering size.',
      problems:
        'Mealybugs are the main pest, hiding in leaf axils and on flower spurs as white fluff; aphids attack buds and scale and spider mites occasionally appear. Yellow, soft leaves and black stems mean root rot from overwatering. Dropped buds follow a change in position, drought while in bud or cold water on the flowers.',
      denmarkTips:
        'Hoya has been a Danish windowsill favourite for generations because it likes exactly what a Danish window gives: bright light in summer and a cooler, drier rest in winter. From November to February water only every three to four weeks and let it sit at 14-16 °C by the glass; this triggers flowering in late spring. Keep it off the radiator and do not move it once buds form. A sheltered balcony in bright shade from June to August is fine, but it flowers just as well indoors.',
    },
    tasks: [
      { type: 'water', intervalDays: 9, winterIntervalDays: 24, note: 'Water when top half of pot is dry; leaves wrinkle slightly when thirsty' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced or high-potassium feed' },
      { type: 'check-pests', intervalDays: 30, note: 'Check leaf axils and flower spurs for mealybugs' },
      { type: 'wipe-leaves', intervalDays: 45, note: 'Wipe waxy leaves; never remove old flower spurs' },
      { type: 'repot', intervalDays: 900, months: [3, 4, 5], note: 'Only when very pot-bound; airy bark-rich mix' },
    ],
    tags: ['pet-safe', 'flowering', 'fragrant', 'climbing', 'long-lived'],
  },
  {
    id: 'schefflera-arboricola',
    commonName: 'Dwarf umbrella tree',
    danishName: 'Paraplytræ',
    latinName: 'Schefflera arboricola',
    family: 'Araliaceae',
    category: 'indoor',
    wikipediaTitle: 'Heptapleurum arboricola',
    difficulty: 'easy',
    toxicity: 'mildly-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['palmate', 'compound'],
      leafPattern: ['plain', 'variegated'],
      flowerColor: ['none'],
      habit: ['tree', 'shrub', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'The dwarf umbrella tree carries glossy leaflets arranged in a circle like the spokes of an umbrella, in plain green or gold-splashed variegated forms. It grows into a dense, upright shrub or small tree, tolerates average rooms and is forgiving once you get the watering right.',
      watering:
        'Water when the top 3-5 cm of soil are dry, about weekly in summer and every two to three weeks in winter. Drain thoroughly; it drops leaves if it sits in water. It copes better with slightly dry soil than with soggy soil.',
      light:
        'Bright indirect light is ideal; it tolerates medium light but grows leggy, and variegated types fade. A little morning sun is welcome, but avoid hot midday sun through glass.',
      soil:
        'A well-draining, loam-based houseplant compost with added perlite. Repot into a pot with drainage holes.',
      temperature:
        'Prefers 15-24 °C. Keep above 12 °C and out of cold draughts, which cause leaf drop. It tolerates cooler rooms better than most tropicals.',
      humidity:
        'Average room humidity is fine. Dry air encourages spider mites, so a pebble tray or occasional shower helps in winter.',
      feeding:
        'Feed every two to four weeks from April to September with a balanced liquid fertiliser. Pause in winter.',
      repotting:
        'Repot every two years in spring into a pot one size larger. Large plants can be top-dressed instead.',
      pruning:
        'Prune in spring to control height and encourage bushiness; it responds well to hard cutting back and can be shaped like a bonsai. Pinch out tips of young plants for a fuller shape.',
      propagation:
        'Tip cuttings 10-15 cm long root in moist compost in spring and summer with a plastic bag for humidity. Air layering works for thick stems.',
      problems:
        'Spider mites (webbing and speckled leaves), scale insects (brown bumps and sticky residue) and mealybugs are the common pests, especially in dry, warm rooms. Yellowing and dropping leaves follow overwatering, cold draughts or a sudden move. Black, sticky leaves usually mean scale or aphids above.',
      denmarkTips:
        'Schefflera manages the Danish winter fairly well: place it near a bright window, water only every two to three weeks from November to February and skip fertiliser. Keep it between the radiator and the cold glass rather than right against either, as dry heat brings spider mites and cold draughts bring leaf drop. It enjoys a sheltered balcony in bright shade from mid-June to August and tolerates cool nights, but bring it in by early September.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 16, note: 'Water when top 3-5 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 21, winterIntervalDays: 0, note: 'Balanced liquid feed' },
      { type: 'wipe-leaves', intervalDays: 30, note: 'Wipe leaflets and check for scale and spider mites' },
      { type: 'prune', intervalDays: 365, months: [3, 4, 5], note: 'Cut back for shape and bushiness' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'One size up or top-dress mature plants' },
    ],
    tags: ['beginner', 'tree', 'air-purifying', 'statement-plant'],
  },
]
