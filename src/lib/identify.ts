import type { Category, FlowerColor, GrowthHabit, LeafPattern, LeafShape, Light, Plant, Size } from '../data/types'

export interface IdentifyQuery {
  category?: Category
  leafShape?: LeafShape
  leafPattern?: LeafPattern
  flowerColor?: FlowerColor
  habit?: GrowthHabit
  size?: Size
  light?: Light
  evergreen?: boolean
  edible?: boolean
}

export interface IdentifyMatch {
  plant: Plant
  score: number
  matched: number
  total: number
}

/**
 * Score catalog plants against the traits the user observed. Every answered question counts
 * once; a plant gets a point per matching trait. Results are sorted by match ratio, then by
 * how specific (few possible values) the plant's traits are, so clear matches float up.
 */
export function identify(plants: Plant[], q: IdentifyQuery): IdentifyMatch[] {
  const checks: Array<(p: Plant) => boolean> = []
  if (q.category) checks.push((p) => p.category === q.category || p.category === 'both')
  if (q.leafShape) checks.push((p) => p.traits.leafShape.includes(q.leafShape!))
  if (q.leafPattern) checks.push((p) => p.traits.leafPattern.includes(q.leafPattern!))
  if (q.flowerColor) checks.push((p) => p.traits.flowerColor.includes(q.flowerColor!))
  if (q.habit) checks.push((p) => p.traits.habit.includes(q.habit!))
  if (q.size) checks.push((p) => p.traits.size === q.size)
  if (q.light) checks.push((p) => p.light.includes(q.light!))
  if (q.evergreen !== undefined) checks.push((p) => p.traits.evergreen === q.evergreen)
  if (q.edible !== undefined) checks.push((p) => p.traits.edible === q.edible)

  const total = checks.length
  if (total === 0) return []

  return plants
    .map((plant) => {
      const matched = checks.reduce((n, c) => n + (c(plant) ? 1 : 0), 0)
      // Small tie-breaker: plants with fewer listed options are more "specific".
      const breadth =
        plant.traits.leafShape.length + plant.traits.flowerColor.length + plant.traits.habit.length
      return { plant, matched, total, score: matched / total - breadth / 1000 }
    })
    .filter((m) => m.matched > 0)
    .sort((a, b) => b.score - a.score)
}
