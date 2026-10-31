import type { Plant } from '../../types'

export const part3: Plant[] = [
  {
    id: 'adiantum-raddianum',
    commonName: 'Maidenhair fern',
    danishName: 'Venushår',
    latinName: 'Adiantum raddianum',
    family: 'Pteridaceae',
    category: 'indoor',
    wikipediaTitle: 'Adiantum raddianum',
    difficulty: 'demanding',
    toxicity: 'non-toxic',
    light: ['medium', 'bright-indirect'],
    traits: {
      leafShape: ['fern-frond', 'compound'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['clumping', 'bushy'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A delicate fern with clouds of tiny, fan-shaped leaflets on wiry black stems. It is one of the most beautiful houseplants and one of the least forgiving: it must never dry out and hates dry air, and a single missed watering can crisp an entire plant. With consistent moisture and humidity, however, it stays lush all year.',
      watering:
        'Keep the soil evenly moist at all times, checking every 2-3 days in summer and every 3-5 days in winter; water as soon as the surface starts to feel dry. Use lukewarm rainwater or filtered water if possible. If it does dry out and the fronds crisp, cut everything back and keep the pot moist; it often regrows from the rhizomes.',
      light:
        'Medium to bright indirect light, such as a north or east window, or set back from a brighter one. Direct sun scorches the fronds within hours. It tolerates fairly low light better than dry air.',
      soil:
        'A moisture-retaining but airy peat-free compost with some perlite and leaf mould or coir. It likes a slightly alkaline mix, so a pinch of garden lime does no harm.',
      temperature:
        'Prefers 16-24 C with no sudden changes. It tolerates down to about 10 C but fronds brown in cold draughts. Keep it well away from heating vents and doors.',
      humidity:
        'Needs 60 % humidity or more and this is the main reason it fails in living rooms. Grow it in a bathroom with a window, in a terrarium or under a cloche, or on a wide pebble tray; mist daily if the air is dry.',
      feeding:
        'Feed monthly from April to September with a quarter-strength balanced liquid fertilizer; concentrated feed burns the fine roots. Do not feed in winter.',
      repotting:
        'Repot every 1-2 years in spring into a pot one size larger, or divide the clump. It likes to be slightly snug but dries out too fast when badly root-bound.',
      pruning:
        'Snip off brown or crisped fronds at the base with scissors. A plant that has dried out can be cut back entirely to the soil and will usually resprout within weeks if kept moist.',
      propagation:
        'Divide the rhizome clump in spring, making sure each piece has roots and some fronds. Spores are possible but slow.',
      problems:
        'Crisped, brown fronds are almost always dry soil or dry air rather than disease. Scale insects and mealybugs sometimes attack the stems; aphids may gather on new fronds. Grey mould on dense, wet foliage in stagnant air shows as fuzzy grey patches; improve airflow.',
      denmarkTips:
        'A Danish winter living room with radiators running is the worst possible place for this fern: the air drops to 20-30 % humidity and fronds crisp within days. A bathroom or kitchen window facing north or east is far better, or a terrarium or cloche in a bright room. Keep it away from cold glass and never in the draught of a window opened for airing. The dark months are not a problem in themselves as long as the plant is near a window and kept moist. It is not suited to outdoor life in Denmark.',
    },
    tasks: [
      { type: 'water', intervalDays: 3, winterIntervalDays: 4, note: 'Never let it dry out; water as soon as the surface feels dry' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Quarter-strength balanced fertilizer only' },
      { type: 'repot', intervalDays: 365, months: [3, 4, 5], note: 'One size up or divide the clump; moisture-retaining mix' },
      { type: 'mist', intervalDays: 1, note: 'Mist daily or keep on a wide pebble tray; aim for 60 %+' },
      { type: 'prune', intervalDays: 28, note: 'Snip off crisped fronds at the base' },
    ],
    tags: ['fern', 'pet-safe', 'humidity-lover', 'bathroom', 'terrarium'],
  },
  {
    id: 'platycerium-bifurcatum',
    commonName: 'Staghorn fern',
    danishName: 'Hjortetakbregne',
    latinName: 'Platycerium bifurcatum',
    family: 'Polypodiaceae',
    category: 'indoor',
    wikipediaTitle: 'Platycerium bifurcatum',
    difficulty: 'moderate',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'medium'],
    traits: {
      leafShape: ['fern-frond', 'lobed'],
      leafPattern: ['plain'],
      flowerColor: ['none'],
      habit: ['clumping', 'trailing'],
      size: 'medium',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'An epiphytic fern that grows on trees in the wild and has two kinds of fronds: flat, round shield fronds that hug the base and turn brown with age, and grey-green antler-shaped fertile fronds that arch outwards. It is usually mounted on a board with sphagnum moss and hung on the wall like living art, though it can also live in a pot. Once settled it is tough and long-lived.',
      watering:
        'Soak a mounted plant by dunking the whole board in a bucket of lukewarm water for 10-15 minutes once a week in summer, every 2-3 weeks in winter, then let it drain before rehanging. A potted plant is watered when the top of the mix dries. Let it dry a little between soakings; constantly wet moss rots the shield fronds. Never wipe the silvery fuzz off the fronds, as it protects against water loss.',
      light:
        'Bright, indirect light near an east or west window, or a metre or two from a south window. It tolerates medium light but grows slowly. Direct midday sun scorches the fronds.',
      soil:
        'Mount it on cork bark or a wooden board with a pad of sphagnum moss, tied on with fishing line, or pot it in a very chunky orchid bark and sphagnum mix. Standard compost stays too wet.',
      temperature:
        'Prefers 16-26 C. It tolerates down to about 10 C briefly and even a touch cooler if dry, but cold draughts damage the fronds. Keep it away from icy glass.',
      humidity:
        'Likes 50 % humidity or more but is more tolerant of dry air than most ferns. Mist the fronds a few times a week in winter.',
      feeding:
        'Feed monthly from April to September by adding a quarter-strength balanced liquid fertilizer to the soaking water. Some growers tuck a banana peel behind the shield frond for potassium. Do not feed in winter.',
      repotting:
        'Remount every few years in spring when the plant outgrows its board, adding fresh moss behind the shield. Never remove the brown shield fronds; they are alive and protect the roots.',
      pruning:
        'Cut off only completely dead, dry antler fronds at the base. Leave brown shield fronds alone.',
      propagation:
        'Pups form around the base and can be cut away with a sharp knife in spring, taking some roots and moss, then mounted separately. Spores form a brown velvety patch on frond tips and are slow to raise.',
      problems:
        'Scale insects on the frond undersides are the main pest; wipe them off gently with a soft brush and soapy water rather than oil sprays, which clog the fuzz. Mealybugs hide behind the shield frond. Black, soft patches at the base mean rot from overwatering; wilted, grey fronds mean it is too dry. Brown shield fronds are normal.',
      denmarkTips:
        'During November-February the plant rests, so soak only every 2-3 weeks and hang it in a bright window, away from the direct heat of a radiator, which dries mounted moss in a day. Mist a few times a week to offset dry indoor air. Keep it away from draughts and cold glass. From July to August it can hang in a shaded, sheltered spot on a balcony where summer rain waters it, but bring it in before September nights fall below 10 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 7, winterIntervalDays: 16, note: 'Soak board 10-15 min in lukewarm water, then drain' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Quarter-strength feed in the soaking water' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Remount with fresh sphagnum if outgrowing the board' },
      { type: 'mist', intervalDays: 3, note: 'Mist fronds, especially in winter; do not rub off the fuzz' },
      { type: 'check-pests', intervalDays: 21, note: 'Check frond undersides for scale; brush off gently' },
    ],
    tags: ['fern', 'pet-safe', 'mounted', 'statement-plant', 'epiphyte'],
  },
  {
    id: 'ceropegia-woodii',
    commonName: 'String of hearts',
    danishName: 'Lysekroneplante',
    latinName: 'Ceropegia woodii',
    family: 'Apocynaceae',
    category: 'indoor',
    wikipediaTitle: 'Ceropegia woodii',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['heart', 'succulent'],
      leafPattern: ['silver', 'variegated'],
      flowerColor: ['purple', 'pink'],
      habit: ['trailing'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A semi-succulent trailing plant with thin, purple wiry stems and small, heart-shaped leaves marbled silver and green on top and purple beneath. The stems can trail over a metre and carry small lantern-shaped purple-pink flowers in summer, plus little tubers along their length. It is forgiving, pet-safe and very easy to propagate.',
      watering:
        'Water thoroughly when the soil has dried out completely, about every 7-10 days in summer and every 3-4 weeks in winter. The leaves go slightly soft and thin when thirsty and plump up again after watering. It stores water in its tubers and leaves, so forgetting it is far safer than over-watering.',
      light:
        'Bright light with some direct sun, right by an east, west or south window, keeps the stems dense and the leaves well marked. In lower light the gaps between leaves lengthen and the silver pattern fades. A few hours of direct sun are welcome, though shade it from the fiercest July sun in a south window.',
      soil:
        'A gritty cactus and succulent mix, or compost with half perlite or coarse sand. Use a pot with drainage holes; a hanging pot or a shelf lets the stems trail.',
      temperature:
        'Prefers 18-26 C. It tolerates down to about 10 C if kept dry, but not frost. Avoid cold draughts, which can blacken the leaves.',
      humidity:
        'Normal dry indoor air is fine; it needs no misting. High humidity with wet soil encourages rot.',
      feeding:
        'Feed every 4 weeks from April to September with a half-strength balanced or cactus fertilizer. Do not feed in winter.',
      repotting:
        'Repot every 2 years in spring into a slightly larger pot with fresh gritty mix. It flowers best when a little snug, so do not over-pot.',
      pruning:
        'Trim long or bare stems in spring to tidy the plant. Loop stems back over the top of the pot and pin them down so they root and thicken the crown.',
      propagation:
        'Stem cuttings root easily in water or moist gritty soil; lay stems across the soil surface and the leaf nodes and tubers root where they touch. The small aerial tubers can also be pressed onto moist soil.',
      problems:
        'Mealybugs cluster at leaf nodes and under leaves as white fluff; aphids sometimes attack flowers and new tips. Yellow, mushy leaves and blackened stems at the base mean root rot from overwatering, especially in winter. Sparse growth and pale leaves mean too little light; crispy, shrivelled leaves mean it has been bone dry too long.',
      denmarkTips:
        'In the dark months of November-February the plant goes almost dormant: hang it in the brightest window you have and water only every 3-4 weeks, letting it dry out completely in between. Dry radiator air is no problem, though do not hang it directly in the hot updraft. Keep stems off icy glass at night. From June to August it thrives on a sunny, sheltered balcony and will flower generously; bring it in before September nights drop below 10 C and keep it out of long periods of rain.',
    },
    tasks: [
      { type: 'water', intervalDays: 9, winterIntervalDays: 24, note: 'Water only when soil is fully dry; leaves soft = thirsty' },
      { type: 'fertilize', intervalDays: 28, winterIntervalDays: 0, note: 'Half-strength balanced or cactus fertilizer' },
      { type: 'repot', intervalDays: 730, months: [3, 4, 5], note: 'Gritty mix, only slightly larger pot' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Trim bare stems; loop long stems over the pot to root' },
      { type: 'check-pests', intervalDays: 21, note: 'Look for mealybugs at leaf nodes' },
    ],
    tags: ['trailing', 'succulent', 'pet-safe', 'flowering', 'beginner'],
  },
  {
    id: 'curio-rowleyanus',
    commonName: 'String of pearls',
    danishName: 'Perlerække',
    latinName: 'Curio rowleyanus',
    family: 'Asteraceae',
    category: 'indoor',
    wikipediaTitle: 'Curio rowleyanus',
    difficulty: 'moderate',
    toxicity: 'toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['succulent', 'round'],
      leafPattern: ['plain'],
      flowerColor: ['white'],
      habit: ['trailing'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A trailing succulent, formerly Senecio rowleyanus, with thin stems strung with pea-sized, spherical green leaves that look like a necklace of pearls. Small white, cinnamon-scented flowers appear in winter or spring if it gets enough light. It is more fussy than it looks: most are lost to overwatering or too little light, and the sap is toxic to pets.',
      watering:
        'Water thoroughly only when the soil is completely dry and the pearls start to look slightly flattened or wrinkled, about every 10-14 days in summer and every 3-5 weeks in winter. Shrivelled pearls mean thirst; mushy, translucent pearls mean too much water. Water the soil, not the pearls, and drain fully.',
      light:
        'Needs very bright light with a few hours of direct sun, ideally right by a south or west window. In insufficient light the stems grow bare between pearls and the plant slowly dies back from the top. Shade it only from the fiercest midday sun in high summer.',
      soil:
        'A very gritty cactus and succulent mix, or compost with at least half perlite, pumice or coarse sand. Use a shallow pot with drainage holes; the roots are shallow and rot in deep, wet soil.',
      temperature:
        'Prefers 18-26 C in summer and slightly cooler, 10-15 C, in winter, which helps flowering. It tolerates down to about 5 C if bone dry but not frost. Avoid cold wet conditions at all costs.',
      humidity:
        'Dry indoor air is ideal; never mist. Humid, stagnant air plus wet soil leads to rot.',
      feeding:
        'Feed 2-3 times during the growing season, April to August, with a half-strength cactus fertilizer. It needs very little; no feeding in winter.',
      repotting:
        'Repot every 2-3 years in spring into a shallow pot only slightly larger, with fresh gritty mix. Handle gently as the pearls snap off easily.',
      pruning:
        'Trim long or bare stems in spring. Coil cut stems on top of the soil and pin them down so they root and refill the top of the pot, which goes bald with age.',
      propagation:
        'Stem cuttings 10 cm long root easily when laid on barely moist gritty mix in a bright spot; the nodes root where they touch the soil. Keep the soil only just moist until rooted.',
      problems:
        'Mealybugs hide between the pearls as white fluff; aphids may attack flowers. Mushy, bursting or translucent pearls and stems rotting at the soil mean overwatering; shrivelled pearls mean it is thirsty. Bare stems at the top of the pot with healthy trailing growth below mean too little light reaching the crown.',
      denmarkTips:
        'The dark Danish winter from November to February is the critical period: keep it in the brightest south-facing window you have, or under a grow light, and water only every 3-5 weeks. A cool but bright room at 10-15 C suits it in winter and encourages flowering, so a cold windowsill is a benefit as long as it does not freeze and the soil is dry. Radiator air does it no harm. From June to August it does best outdoors on a sunny, sheltered balcony under cover from heavy rain; bring it in before September nights drop below 8-10 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 12, winterIntervalDays: 28, note: 'Water only when pearls flatten slightly and soil is bone dry' },
      { type: 'fertilize', intervalDays: 42, winterIntervalDays: 0, note: 'Half-strength cactus fertilizer, 2-3 times a summer' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Shallow pot, very gritty mix; handle gently' },
      { type: 'prune', intervalDays: 365, months: [3, 4], note: 'Trim bare stems; pin cuttings on top of the pot to refill it' },
      { type: 'check-pests', intervalDays: 21, note: 'Look for mealybugs between the pearls' },
    ],
    tags: ['trailing', 'succulent', 'bright-light', 'drought-tolerant'],
  },
  {
    id: 'haworthiopsis-attenuata',
    commonName: 'Zebra haworthia',
    danishName: 'Zebraplante',
    latinName: 'Haworthiopsis attenuata',
    family: 'Asphodelaceae',
    category: 'indoor',
    wikipediaTitle: 'Haworthiopsis attenuata',
    difficulty: 'easy',
    toxicity: 'non-toxic',
    light: ['bright-indirect', 'direct-sun'],
    traits: {
      leafShape: ['succulent', 'lance'],
      leafPattern: ['striped', 'spotted'],
      flowerColor: ['white'],
      habit: ['rosette', 'clumping'],
      size: 'small',
      evergreen: true,
      edible: false,
    },
    care: {
      summary:
        'A small, slow-growing South African succulent forming tight rosettes of pointed dark green leaves banded with raised white tubercles like zebra stripes. It stays under 15 cm tall, clumps slowly with offsets and sends up thin stalks of tiny white flowers in summer. It is one of the easiest and safest succulents for a windowsill.',
      watering:
        'Water thoroughly when the soil is completely dry, about every 2 weeks in summer and every 4-5 weeks in winter. Water the soil, not the rosette, and let the pot drain. Soft, translucent leaves at the base mean too much water; thin, slightly curled leaves mean thirst.',
      light:
        'Bright light, right by an east, west or south window, with gentle direct sun. Unlike many succulents it tolerates bright indirect light well and can scorch red-brown in blazing midday sun, so shade it from the hottest July sun through south glass.',
      soil:
        'A gritty cactus and succulent mix, or compost with half coarse sand, grit or perlite. A small terracotta pot with drainage holes is ideal.',
      temperature:
        'Prefers 15-26 C. It tolerates down to about 5 C if kept dry and benefits from a cooler winter rest at 10-15 C. Protect it from frost and from cold wet soil.',
      humidity:
        'Dry indoor air is perfect; no misting needed.',
      feeding:
        'Feed 2-3 times from April to August with a half-strength cactus fertilizer. No feeding in winter.',
      repotting:
        'Repot every 2-3 years in spring into a pot only slightly wider than the clump, in fresh gritty mix. Separate offsets at the same time if you want more plants.',
      pruning:
        'None needed. Pull off dried lower leaves and cut spent flower stalks at the base.',
      propagation:
        'Offsets form around the base and can be twisted or cut off in spring, left to dry for a day and potted in gritty mix. Single leaves can also be rooted but are slower.',
      problems:
        'Mealybugs hide between the leaves and at the roots as white fluff; fungus gnats indicate soil that stays too wet. Soft, mushy, brown leaves at the base and a collapsing rosette mean root rot from overwatering. Red-brown leaf tips mean too much direct sun or drought stress; pale, stretched rosettes mean too little light.',
      denmarkTips:
        'A near-perfect windowsill plant for Denmark: it accepts the dark November-February days as a rest period, so keep it on the brightest sill and water only every 4-5 weeks. A cold windowsill in winter is fine, even welcome, as long as the soil is dry and it does not freeze. Dry radiator air is no problem. From June to August it can stand outdoors on a sunny balcony, sheltered from heavy rain; acclimatise it gradually to full sun and bring it in before September nights drop below 8 C.',
    },
    tasks: [
      { type: 'water', intervalDays: 14, winterIntervalDays: 30, note: 'Water only when soil is completely dry; keep water off the rosette' },
      { type: 'fertilize', intervalDays: 42, winterIntervalDays: 0, note: 'Half-strength cactus fertilizer, 2-3 times a summer' },
      { type: 'repot', intervalDays: 1095, months: [3, 4, 5], note: 'Gritty mix, slightly wider pot; separate offsets' },
      { type: 'check-pests', intervalDays: 28, note: 'Check between leaves for mealybugs' },
    ],
    tags: ['succulent', 'pet-safe', 'beginner', 'drought-tolerant', 'windowsill'],
  },
]
