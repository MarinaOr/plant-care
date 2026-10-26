// Shared plant catalog schema. Every catalog entry must satisfy `Plant`.

export type Category = 'indoor' | 'outdoor' | 'both'

export type Light =
  | 'low' // north window, far from window
  | 'medium' // east/west window, a few metres from a bright window
  | 'bright-indirect' // right by a bright window but no direct midday sun
  | 'direct-sun' // south window or full sun outdoors
  | 'partial-shade' // outdoors, 3-6 h sun
  | 'shade' // outdoors, under 3 h sun

export type LeafShape =
  | 'round'
  | 'heart'
  | 'oval'
  | 'lance'
  | 'needle'
  | 'palmate'
  | 'lobed'
  | 'compound'
  | 'strap'
  | 'succulent'
  | 'fern-frond'
  | 'scale-like'
  | 'grass-like'
  | 'sword'

export type LeafPattern = 'plain' | 'variegated' | 'striped' | 'spotted' | 'coloured' | 'silver'

export type FlowerColor =
  | 'none'
  | 'white'
  | 'pink'
  | 'red'
  | 'purple'
  | 'blue'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'mixed'

export type GrowthHabit =
  | 'upright'
  | 'bushy'
  | 'trailing'
  | 'climbing'
  | 'rosette'
  | 'tree'
  | 'shrub'
  | 'groundcover'
  | 'bulb'
  | 'grass'
  | 'clumping'

export type Size = 'small' | 'medium' | 'large' // small <40 cm, medium 40-120 cm, large >120 cm

export type Toxicity = 'non-toxic' | 'mildly-toxic' | 'toxic' // for cats, dogs and small children

export type Difficulty = 'easy' | 'moderate' | 'demanding'

export type TaskType =
  | 'water'
  | 'fertilize'
  | 'repot'
  | 'prune'
  | 'mist'
  | 'rotate'
  | 'check-pests'
  | 'overwinter'
  | 'mulch'
  | 'deadhead'
  | 'harvest'
  | 'divide'
  | 'wipe-leaves'
  | 'plant-out'
  | 'bring-inside'

export interface CareTask {
  type: TaskType
  /** Base interval in days between occurrences. */
  intervalDays: number
  /** Optional override used October-March (Danish winter). 0 = skip entirely in winter. */
  winterIntervalDays?: number
  /** Restrict to these months (1-12). Use for seasonal jobs like repotting in spring. */
  months?: number[]
  /** Short instruction shown with the reminder, e.g. "Let top 3 cm of soil dry first". */
  note?: string
}

export interface PlantTraits {
  leafShape: LeafShape[]
  leafPattern: LeafPattern[]
  flowerColor: FlowerColor[]
  habit: GrowthHabit[]
  size: Size
  evergreen: boolean
  edible: boolean
}

export interface PlantCare {
  /** 2-3 sentence overview of the plant and its character. */
  summary: string
  watering: string
  light: string
  soil: string
  /** Include tolerable minimum temperature and, for outdoor plants, hardiness in Denmark. */
  temperature: string
  humidity?: string
  feeding: string
  repotting?: string
  pruning?: string
  propagation?: string
  /** Common pests/diseases and the signs to look for. */
  problems: string
  /** Season-by-season advice specific to the Danish climate (short days, wet winters, cool summers). */
  denmarkTips: string
}

export interface Plant {
  /** kebab-case slug, unique across the whole catalog, e.g. "monstera-deliciosa" */
  id: string
  commonName: string
  /** Danish common name, e.g. "Fingerphilodendron" */
  danishName: string
  latinName: string
  family: string
  category: Category
  /** Exact English Wikipedia article title used to fetch a photo, e.g. "Monstera deliciosa" */
  wikipediaTitle: string
  difficulty: Difficulty
  toxicity: Toxicity
  light: Light[]
  traits: PlantTraits
  care: PlantCare
  /** Default reminder schedule created when the user adds this plant. */
  tasks: CareTask[]
  /** Optional tags for search, e.g. ["air-purifying", "pet-safe", "balcony"] */
  tags?: string[]
}
