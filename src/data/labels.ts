import type {
  Category,
  Difficulty,
  FlowerColor,
  GrowthHabit,
  LeafPattern,
  LeafShape,
  Light,
  Size,
  TaskType,
  Toxicity,
} from './types'

export const categoryLabel: Record<Category, string> = {
  indoor: 'Indoor',
  outdoor: 'Outdoor',
  both: 'Indoor & outdoor',
}

export const lightLabel: Record<Light, string> = {
  low: 'Low light',
  medium: 'Medium light',
  'bright-indirect': 'Bright, indirect',
  'direct-sun': 'Direct sun',
  'partial-shade': 'Partial shade',
  shade: 'Shade',
}

export const leafShapeLabel: Record<LeafShape, string> = {
  round: 'Round',
  heart: 'Heart-shaped',
  oval: 'Oval',
  lance: 'Narrow / lance',
  needle: 'Needles',
  palmate: 'Hand-like (palmate)',
  lobed: 'Lobed / split',
  compound: 'Many leaflets',
  strap: 'Long strap',
  succulent: 'Thick & fleshy',
  'fern-frond': 'Fern frond',
  'scale-like': 'Tiny scales',
  'grass-like': 'Grass-like',
  sword: 'Stiff sword',
}

export const leafPatternLabel: Record<LeafPattern, string> = {
  plain: 'Plain green',
  variegated: 'Variegated',
  striped: 'Striped',
  spotted: 'Spotted',
  coloured: 'Red / purple / bronze',
  silver: 'Silvery',
}

export const flowerColorLabel: Record<FlowerColor, string> = {
  none: 'No flowers (or rarely)',
  white: 'White',
  pink: 'Pink',
  red: 'Red',
  purple: 'Purple',
  blue: 'Blue',
  yellow: 'Yellow',
  orange: 'Orange',
  green: 'Green',
  mixed: 'Many colours',
}

export const habitLabel: Record<GrowthHabit, string> = {
  upright: 'Upright',
  bushy: 'Bushy',
  trailing: 'Trailing / hanging',
  climbing: 'Climbing',
  rosette: 'Rosette',
  tree: 'Tree-like',
  shrub: 'Shrub',
  groundcover: 'Ground cover',
  bulb: 'Bulb',
  grass: 'Grass',
  clumping: 'Clump',
}

export const sizeLabel: Record<Size, string> = {
  small: 'Small (under 40 cm)',
  medium: 'Medium (40-120 cm)',
  large: 'Large (over 120 cm)',
}

export const toxicityLabel: Record<Toxicity, string> = {
  'non-toxic': 'Pet & child safe',
  'mildly-toxic': 'Mildly toxic',
  toxic: 'Toxic to pets/children',
}

export const difficultyLabel: Record<Difficulty, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  demanding: 'Demanding',
}

export const taskLabel: Record<TaskType, string> = {
  water: 'Water',
  fertilize: 'Fertilize',
  repot: 'Repot',
  prune: 'Prune',
  mist: 'Mist',
  rotate: 'Rotate towards light',
  'check-pests': 'Check for pests',
  overwinter: 'Prepare for winter',
  mulch: 'Mulch',
  deadhead: 'Deadhead flowers',
  harvest: 'Harvest',
  divide: 'Divide',
  'wipe-leaves': 'Wipe leaves',
  'plant-out': 'Plant out / move outside',
  'bring-inside': 'Bring inside',
}

/** One colour per activity, used for calendar dots and legends. */
export const taskColor: Record<TaskType, string> = {
  water: '#2f80ed',
  fertilize: '#2fa84f',
  repot: '#a0622d',
  prune: '#d64545',
  mist: '#22b8cf',
  rotate: '#8e5bd9',
  'check-pests': '#e8a317',
  overwinter: '#6b7d8f',
  mulch: '#8a5a2b',
  deadhead: '#e0569a',
  harvest: '#c9a227',
  divide: '#6f42c1',
  'wipe-leaves': '#1aa6b7',
  'plant-out': '#4cbf5a',
  'bring-inside': '#f07a2a',
}

export const taskIcon: Record<TaskType, string> = {
  water: '💧',
  fertilize: '🌱',
  repot: '🪴',
  prune: '✂️',
  mist: '💨',
  rotate: '🔄',
  'check-pests': '🔍',
  overwinter: '❄️',
  mulch: '🍂',
  deadhead: '🌸',
  harvest: '🧺',
  divide: '🔀',
  'wipe-leaves': '🧽',
  'plant-out': '☀️',
  'bring-inside': '🏠',
}
