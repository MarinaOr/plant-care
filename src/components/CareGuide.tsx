import type { Plant } from '../data/types'
import {
  categoryLabel,
  difficultyLabel,
  lightLabel,
  taskIcon,
  taskLabel,
  toxicityLabel,
} from '../data/labels'
import { describeInterval } from '../lib/schedule'

export function CareGuide({ plant }: { plant: Plant }) {
  const c = plant.care
  const rows: Array<[string, string | undefined]> = [
    ['Watering', c.watering],
    ['Light', c.light],
    ['Soil', c.soil],
    ['Temperature & hardiness', c.temperature],
    ['Humidity', c.humidity],
    ['Feeding', c.feeding],
    ['Repotting', c.repotting],
    ['Pruning', c.pruning],
    ['Propagation', c.propagation],
    ['Common problems', c.problems],
    ['Tips for Denmark', c.denmarkTips],
  ]
  return (
    <div className="stack">
      <div className="facts">
        <div className="fact">
          <div className="k">Where</div>
          <div className="v">{categoryLabel[plant.category]}</div>
        </div>
        <div className="fact">
          <div className="k">Light</div>
          <div className="v">{plant.light.map((l) => lightLabel[l]).join(', ')}</div>
        </div>
        <div className="fact">
          <div className="k">Difficulty</div>
          <div className="v">{difficultyLabel[plant.difficulty]}</div>
        </div>
        <div className="fact">
          <div className="k">Safety</div>
          <div className="v">{toxicityLabel[plant.toxicity]}</div>
        </div>
      </div>

      <div className="card pad care">
        <p style={{ marginBottom: 12 }}>{c.summary}</p>
        <dl>
          {rows
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
        </dl>
      </div>

      <div className="section-title">Default care schedule</div>
      <div className="card">
        {plant.tasks.map((t, i) => (
          <div className="reminder" key={i} style={{ borderTop: i ? '1px solid var(--border)' : undefined }}>
            <div style={{ fontSize: '1.4rem' }}>{taskIcon[t.type]}</div>
            <div className="grow">
              <div className="task">{taskLabel[t.type]}</div>
              <div className="when">
                {describeInterval(t)}
                {t.note ? ` · ${t.note}` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
