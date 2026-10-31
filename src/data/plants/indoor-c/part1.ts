import type { Plant } from '../../types'

export const part1: Plant[] = [
  {
    id: 'monstera-adansonii',
    commonName: 'Swiss cheese vine',
    danishName: 'Hullet vindueblad',
    latinName: 'Monstera adansonii',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Monstera adansonii',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['heart', 'oval'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['climbing', 'trailing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A fast-growing vining aroid with thin, heart-shaped leaves full of oval holes, much smaller and more delicate than its big cousin Monstera deliciosa. It can trail from a hanging pot or climb a moss pole, where the leaves grow noticeably larger. It almost never flowers indoors but is grown entirely for its lacy foliage.',
      watering:
        'Water when the top 3-4 cm of soil feel dry, roughly every 5-7 days in summer and every 10-14 days in winter. Let the pot drain fully and never leave it standing in water; the thin roots rot quickly. Slightly drooping, curling leaves are a sign it is thirsty and it recovers fast after a drink.',
      light:
        'Bright, indirect light near an east or west window gives dense growth with plenty of holes. It tolerates medium light but the leaves grow smaller and further apart. Direct midday sun through a south window yellows and scorches the thin leaves.',
      soil:
        'A chunky, airy aroid mix: peat-free potting compost with a third orchid bark and a handful of perlite. Dense, heavy soil stays wet too long and suffocates the roots.',
      temperature:
        'Happy at 18-27 C. Growth slows below 15 C and it should not go below about 12 C; cold draughts cause blackened leaf edges. Keep it away from doors and windows that are opened in winter.',
      humidity:
        'Prefers 50-60 % humidity but copes with normal room air. Brown, crispy leaf edges are the usual sign of very dry air; a pebble tray or grouping with other plants helps.',
      feeding:
        'Feed every 2-3 weeks from March to September with a half-strength balanced liquid fertilizer. Stop entirely in autumn and winter when growth pauses.',
      repotting:
        'Repot every 1-2 years in spring into a pot one size larger; it fills a pot quickly. Add a moss pole or trellis at the same time if you want larger leaves.',
      pruning:
        'Trim long, bare stems back to just above a node in spring to keep the plant full. The trimmings make excellent cuttings.',
      propagation:
        'Stem cuttings with at least one node and a leaf root within 2-3 weeks in water or moist sphagnum moss. Pot several rooted cuttings together for a fuller plant.',
      problems:
        'Spider mites cause fine yellow speckling and webbing on leaf undersides, especially in dry winter air. Thrips leave silvery streaks and black dots; mealybugs hide in leaf axils as white fluff. Yellow lower leaves with wet soil mean overwatering and possible root rot; brown crisp edges mean dry air or underwatering.',
      denmarkTips:
        'From November to February the plant barely grows, so move it close to the brightest window, cut watering to every 10-14 days and skip feeding; new leaves will be smaller and have fewer holes until spring. Hanging pots above a radiator get blasted with hot dry air and develop brown edges, so hang it to the side or use a pebble tray. Keep stems off cold window glass and out of the draught when airing rooms. It can spend July and August in a shady, sheltered corner of a balcony, but bring it in as soon as September nights drop below 12 C and check for pests first.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3-4 cm are dry; drain fully' },
      { type: 'fertilize', intervalDays: 18, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'Chunky aroid mix, one size up; add a moss pole' },
      { type: 'mist', intervalDays: 4, note: 'Mist leaves or top up pebble tray in dry rooms' },
      { type: 'check-pests', intervalDays: 14, note: 'Check leaf undersides for spider mites and thrips' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Cut leggy stems above a node; root the cuttings' },
    ],
    tags: ['trailing', 'climbing', 'fast-growing', 'tropical'],
  },
  {
    id: 'scindapsus-pictus',
    commonName: 'Satin pothos',
    danishName: 'Sølvranke',
    latinName: 'Scindapsus pictus',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Scindapsus pictus',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['heart', 'oval'],
      leafPattern: ['silver', 'spotted'],
      flowerColor: ['none'],
      habit: ['trailing', 'climbing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A trailing or climbing plant with thick, matte, heart-shaped leaves splashed with silvery, almost metallic spots on a dark green background. Cultivars like Argyraeus, Exotica and Silvery Ann differ in how much silver they show. It is slower and sturdier than true pothos and very forgiving of a missed watering.',
      watering:
        'Let the top half of the pot dry out between waterings, about every 7-10 days in summer and every 2-3 weeks in winter. The leaves curl inwards when thirsty and flatten again within hours of watering, which makes it an easy plant to read. Soggy soil leads to yellow leaves and rotting stems.',
      light:
        'Bright, indirect light keeps the silver markings strong and the growth compact. It tolerates medium light well, although variegation fades and stems stretch in dim corners. Avoid direct sun, which bleaches the leaves.',
      soil:
        'A well-draining mix of peat-free potting compost with a third perlite or orchid bark. It likes a snug pot and dislikes sitting in a large volume of wet soil.',
      temperature:
        'Prefers 18-26 C. It tolerates down to about 15 C but will drop leaves below 12 C. Cold draughts and contact with an icy window pane cause black patches on the leaves.',
      humidity:
        'Average indoor humidity is fine thanks to the thick leaves. In very dry air the leaf edges may brown slightly; an occasional mist or pebble tray helps.',
      feeding:
        'Feed monthly from April to September with a half-strength balanced liquid fertilizer. Do not feed in autumn and winter.',
      repotting:
        'Repot every 2 years in spring into a pot only one size larger, or just refresh the top layer of soil. It grows slowly and does not mind being a little root-bound.',
      pruning:
        'Trim long stems back in spring to encourage branching from the base. Remove any bare, leafless lengths of stem.',
      propagation:
        'Stem cuttings with one or two nodes root in water or moist soil in 3-4 weeks. It roots more slowly than pothos, so be patient and keep it warm.',
      problems:
        'Spider mites and scale insects are the main pests; look for speckling on the leaves and small brown bumps along the stems. Mealybugs gather in leaf axils as white fluff. Yellow leaves with a sour-smelling soil mean overwatering; curled, crispy leaves mean it has been dry for too long.',
      denmarkTips:
        'In the dark months of November-February growth stops almost completely, so water only every 2-3 weeks and move the pot as close to a bright window as possible without the leaves touching the cold glass. Dry radiator air is tolerated better than by most aroids, but do not hang it directly above a radiator. Keep it out of the draught when windows are opened for airing in winter. It can spend high summer in a shady spot on a sheltered balcony from late June, but bring it in before September nights fall below 12 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 8, winterIntervalDays: 18, note: 'Water when leaves start to curl and top half of pot is dry' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'One size up or refresh top soil; well-draining mix' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Damp cloth; check stems for scale' },
      { type: 'check-pests', intervalDays: 14, note: 'Look for spider mite speckling and mealybugs in leaf axils' },
    ],
    tags: ['trailing', 'beginner', 'silver-foliage', 'low-light-tolerant'],
  },
  {
    id: 'syngonium-podophyllum',
    commonName: 'Arrowhead plant',
    danishName: 'Pilblad',
    latinName: 'Syngonium podophyllum',
    family: 'Araceae',
    category: 'indoor',
    wikipediaTitle: 'Syngonium podophyllum',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium', 'low'],
    traits: {
      leafShape: ['heart', 'lobed'],
      leafPattern: ['variegated', 'plain', 'coloured'],
      flowerColor: ['none'],
      habit: ['climbing', 'trailing', 'bushy'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A fast-growing aroid whose arrow-shaped juvenile leaves slowly become lobed as the plant matures and starts to climb. Cultivars come in green, white, cream, silver and pink. Young plants stay bushy; left alone they begin to vine and can be trailed or trained up a pole.',
      watering:
        'Keep the soil lightly moist in summer, watering when the top 2-3 cm dry out, roughly every 5-7 days. In winter let it dry further between waterings, about every 10-14 days. It wilts dramatically when dry but recovers quickly; constantly soggy soil leads to root rot.',
      light:
        'Bright, indirect light suits it best and keeps variegated and pink forms colourful. Green cultivars tolerate low light well, though growth slows. Avoid harsh direct sun, which scorches and bleaches the leaves.',
      soil:
        'An all-purpose peat-free potting compost with a quarter perlite or bark for drainage. It is not fussy as long as the pot drains.',
      temperature:
        'Prefers 18-26 C. Growth stops below 15 C and the plant is damaged below about 10 C. Avoid cold draughts, which cause brown patches.',
      humidity:
        'Likes 50 % humidity or more but adapts to average rooms. Brown leaf tips point to very dry air.',
      feeding:
        'Feed every 3-4 weeks from April to September with half-strength balanced liquid fertilizer. Stop in autumn and winter.',
      repotting:
        'Repot every 1-2 years in spring into a pot one size larger. Pot several plants together for a full look.',
      pruning:
        'Pinch out the growing tips regularly to keep a compact, bushy shape and arrow-shaped leaves; let it vine on a moss pole if you prefer the mature lobed foliage. Cut back leggy stems in spring.',
      propagation:
        'Stem cuttings with a node root easily in water within 2 weeks. Pot three or four together for a bushy plant.',
      problems:
        'Spider mites cause pale speckling in dry air; mealybugs and scale cluster on stems. Aphids sometimes attack soft new growth. Yellow lower leaves and a mushy stem base mean overwatering; bacterial leaf spot shows as dark, water-soaked blotches with yellow halos and spreads when leaves are kept wet.',
      denmarkTips:
        'Short November-February days slow it right down; move it to a brighter window, water every 10-14 days and expect the variegation to fade a little until spring. Pink cultivars especially need as much winter light as possible. Keep it away from radiators, which dry the leaf tips, and out of the draught from windows opened for airing. In July and August it can stand in a shaded, sheltered spot on a balcony, but bring it in before nights drop below 12 C in September.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Water when top 3 cm are dry; empty saucer after 15 min' },
      { type: 'fertilize', intervalDays: 24, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'One size up, well-draining compost' },
      { type: 'prune', intervalDays: 42, note: 'Pinch growing tips to keep it bushy; root the trimmings' },
      { type: 'mist', intervalDays: 5, note: 'Mist in dry rooms or use a pebble tray' },
      { type: 'check-pests', intervalDays: 14, note: 'Check for spider mites and mealybugs' },
    ],
    tags: ['beginner', 'fast-growing', 'low-light-tolerant', 'colourful-foliage'],
  },
  {
    id: 'dracaena-fragrans',
    commonName: 'Corn plant',
    danishName: 'Duftdracaena',
    latinName: 'Dracaena fragrans',
    family: 'Asparagaceae',
    category: 'indoor',
    wikipediaTitle: 'Dracaena fragrans',
    difficulty: 'easy',
    toxicity: 'toxic',
    light: ['bright-indirect', 'medium', 'low'],
    traits: {
      leafShape: ['strap', 'sword'],
      leafPattern: ['striped', 'plain', 'variegated'],
      flowerColor: ['none'],
      habit: ['upright', 'tree'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A slow-growing, tree-like plant with thick cane stems topped by arching, corn-like leaves, often with a yellow-green central stripe in the popular Massangeana form. It tolerates low light and irregular watering, which makes it a classic office and living-room plant. Mature plants occasionally produce fragrant white flower spikes, but this is rare indoors.',
      watering:
        'Water when the top 5 cm of soil are dry, about every 7-10 days in summer and every 2-3 weeks in winter. Use rainwater or water left to stand overnight if possible, as the plant is sensitive to fluoride and salts, which cause brown leaf tips. Never let the canes stand in a wet saucer.',
      light:
        'Bright, indirect light gives the best striping and steady growth, but it copes well with medium and even fairly low light. Direct sun through a south window bleaches and scorches the leaves.',
      soil:
        'A standard peat-free potting compost with a quarter perlite or coarse sand. Good drainage matters more than richness.',
      temperature:
        'Comfortable at 16-26 C. It tolerates down to about 10 C for short spells but is damaged below that and killed by frost. Keep it away from cold draughts and icy window glass in winter.',
      humidity:
        'Normal room humidity is acceptable, though brown leaf tips are more common in very dry air. An occasional misting or wiping of the leaves helps.',
      feeding:
        'Feed once a month from April to September with a half-strength balanced liquid fertilizer. Over-feeding causes brown tips, so err on the side of too little. Do not feed in winter.',
      repotting:
        'Repot every 2-3 years in spring into a pot one size larger, or top-dress large specimens with fresh compost. A heavy pot keeps tall canes stable.',
      pruning:
        'Cut a cane through at any height in spring and it will sprout new heads just below the cut. Pull off yellowing lower leaves, which drop naturally as the plant grows.',
      propagation:
        'Cane sections 10-20 cm long or cut-off tops root in water or moist compost in a warm spot. Seal the top of a cane section with wax to stop it drying out.',
      problems:
        'Spider mites cause fine speckling and webbing in dry rooms; scale insects appear as brown bumps along leaf undersides and mealybugs as white fluff in the leaf bases. Brown leaf tips are usually fluoride, salt build-up or dry air. Yellow, soft leaves and a mushy cane base indicate root rot from overwatering; a shrivelled, hollow cane is beyond saving.',
      denmarkTips:
        'In the dark months of November-February it barely grows, so move it nearer a window and water only every 2-3 weeks; it copes with Danish winter gloom better than most large plants. Danish tap water is often hard, so brown tips are common; use rainwater or boiled, cooled water. Do not stand it right next to a radiator or in the draught when airing rooms. From late June to August it can go out on a shaded, sheltered balcony, but acclimatise it slowly and bring it in before nights fall below 10 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 9, winterIntervalDays: 18, note: 'Water when top 5 cm are dry; use rainwater if possible' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer, sparingly' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'One size up or top-dress; heavy pot for stability' },
      { type: 'wipe-leaves', intervalDays: 42, note: 'Damp cloth both sides; check for scale and spider mites' },
      { type: 'rotate', intervalDays: 21, note: 'Quarter turn so canes grow straight' },
    ],
    tags: ['beginner', 'low-light-tolerant', 'statement-plant', 'air-purifying'],
  },
  {
    id: 'dypsis-lutescens',
    commonName: 'Areca palm',
    danishName: 'Guldpalme',
    latinName: 'Dypsis lutescens',
    family: 'Arecaceae',
    category: 'indoor',
    wikipediaTitle: 'Dypsis lutescens',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['bright-indirect'],
    traits: {
      leafShape: ['compound', 'fern-frond'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['clumping', 'upright'],
      size: 'large',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A graceful clumping palm with many slender, yellow-green canes and feathery arching fronds. It brings an instant tropical feel to a bright room and is safe for pets. It is a little fussier about water quality and humidity than the kentia palm, but rewards good care with fast, lush growth.',
      watering:
        'Keep the soil evenly moist but never waterlogged, watering when the top 3 cm dry out, roughly every 5-7 days in summer and every 10-14 days in winter. Use rainwater or filtered water if you can; the fronds brown at the tips from fluoride and salts. Empty the saucer after watering.',
      light:
        'Bright, indirect light close to an east, west or lightly shaded south window is ideal. It tolerates a little gentle morning sun but harsh midday sun yellows the fronds. In dim light it slowly declines and thins out.',
      soil:
        'A well-draining peat-free compost with a third perlite or coarse sand. Palms dislike compacted soil, so keep it airy and make sure the pot drains freely.',
      temperature:
        'Prefers 18-26 C. It tolerates down to about 13 C briefly but fronds are damaged by cold draughts and anything below 10 C. Keep it away from doors and cold windows in winter.',
      humidity:
        'Likes 50 % humidity or more. Brown frond tips are the classic sign of dry air; mist regularly, use a pebble tray or a humidifier in winter.',
      feeding:
        'Feed every 3-4 weeks from April to September with a half-strength balanced liquid fertilizer. Palms are sensitive to over-feeding, so never exceed the recommended dose. Do not feed in winter.',
      repotting:
        'Repot every 2-3 years in spring only when roots fill the pot; palms prefer to be slightly root-bound. Handle the root ball gently as damaged roots set it back.',
      pruning:
        'Cut off entirely brown fronds at the base. Trimming brown tips is cosmetic only; leave a thin brown margin so you do not cut living tissue.',
      propagation:
        'Divide clumps carefully at repotting time, keeping several canes with roots in each section. Seed is slow and rarely practical at home.',
      problems:
        'Spider mites are the number one pest in dry winter rooms, causing speckled, dull fronds and fine webbing. Mealybugs and scale cluster on stems and frond bases. Brown tips mean dry air, hard water or over-feeding; yellow fronds all over suggest too much sun or root rot from soggy soil.',
      denmarkTips:
        'The Danish winter is hard on this palm: short dark days plus hot, dry radiator air invite spider mites and brown tips. Place it in the brightest window you have, away from radiators, mist every few days and water less often but never let it dry out completely. Keep fronds off cold glass and out of the draught when airing rooms. From late June to August it enjoys a sheltered, lightly shaded balcony, but bring it in before nights drop below 12 C in September and check carefully for pests.',
    },
    tasks: [
      { type: 'water', intervalDays: 6, winterIntervalDays: 12, note: 'Keep evenly moist; rainwater preferred; empty saucer' },
      { type: 'fertilize', intervalDays: 24, winterIntervalDays: 0, note: 'Half-strength balanced fertilizer, never more' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Only when root-bound; airy well-draining mix' },
      { type: 'mist', intervalDays: 3, note: 'Mist fronds or top up pebble tray, especially in winter' },
      { type: 'check-pests', intervalDays: 14, note: 'Inspect fronds for spider mite speckling and webbing' },
      { type: 'prune', intervalDays: 60, note: 'Remove fully brown fronds at the base' },
    ],
    tags: ['palm', 'pet-safe', 'humidity-lover', 'statement-plant', 'air-purifying'],
  },
]
