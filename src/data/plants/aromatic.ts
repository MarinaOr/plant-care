import type { Plant } from '../types'
import { part1 } from './aromatic/part1'
import { part2 } from './aromatic/part2'
import { part3 } from './aromatic/part3'
import { part4 } from './aromatic/part4'

export const aromatic: Plant[] = [...part1, ...part2, ...part3, ...part4]
