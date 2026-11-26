import { useState } from 'react'
import { modules } from '../content'
import { loadVisited } from '../content/progress'

const groups = [
  { slug: 'literasi-ai', label: 'Literasi AI' },
  { slug: 'prompt-engineering', label: 'Prompting & Computational Thinking' },
]

export default function Materials({ lockedMessage }) {
  const [visited] = useState(loadVisited)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Materi</h1>
        <p className="mt-2 text-slate-600">Pilih topik yang ingin kamu pelajari.</p>
        {lockedMessage && <p role="status" className="mt-3 font-medium text-accent">{lockedMessage}</p>}
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group, groupIndex) => {
          const mod = modules[group.slug]
          return (
            <section key={group.slug} className={`${groupIndex === 0 ? 'surface-card' : 'surface-card-muted'} rounded-xl border border-slate-200 p-5 md:p-6`}>
              <header className="mb-5 flex items-start gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tint text-sm font-bold text-accent">
                  {groupIndex + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold">Materi {group.label}</h2>
                  <p className="mt-1 text-sm text-slate-600">{mod.subtitle}</p>
                </div>
              </header>

              <ol className="space-y-2">
                {mod.items.map((item, index) => (
                  <li key={item.title} className={visited.includes(`${group.slug}/${index}`) ? '' : 'opacity-50 transition-opacity hover:opacity-100 focus-within:opacity-100'}>
                    <a href={`#/${group.slug}/${index + 1}`}
                      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-accent hover:bg-tint">
                      <span className="min-w-6 font-semibold text-accent">{index + 1}.</span>
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )
        })}
      </div>
    </div>
  )
}
