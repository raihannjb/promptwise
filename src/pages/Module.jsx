import { useEffect, useState } from 'react'
import { modules } from '../content'
import { loadVisited, VISITED_KEY } from '../content/progress'
import Sidebar from '../components/Sidebar'
import Visual from '../components/Visual'

export default function Module({ slug, idx }) {
  const mod = modules[slug]
  const last = mod.items.length - 1
  const i = Math.min(Math.max((parseInt(idx, 10) || 1) - 1, 0), last)
  const item = mod.items[i]
  const [visited, setVisited] = useState(loadVisited)
  const id = `${slug}/${i}`

  useEffect(() => {
    if (visited.includes(id)) return
    const next = [...visited, id]
    setVisited(next)
    try { localStorage.setItem(VISITED_KEY, JSON.stringify(next)) } catch { /* abaikan */ }
  }, [id])

  let prev = null
  if (i > 0) prev = { href: `#/${slug}/${i}`, label: 'Sebelumnya' }
  else if (slug === 'prompt-engineering') prev = { href: `#/literasi-ai/${modules['literasi-ai'].items.length}`, label: 'Sebelumnya' }

  let next = { href: `#/${slug}/${i + 2}`, label: 'Selanjutnya' }
  if (i === last) next = slug === 'literasi-ai'
    ? { href: '#/prompt-engineering/1', label: 'Lanjut ke Prompting & Computational Thinking' }
    : { href: '#/selesai', label: 'Selesai' }

  return (
    <>
      <section className="surface-card-muted border-b border-slate-200 px-4 py-8 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">{mod.title}</h1>
        <p className="mt-1 text-slate-600">{mod.subtitle}</p>
      </section>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[260px_1fr] md:py-8">
        <Sidebar slug={slug} items={mod.items} current={i} visited={visited} />
        <article className="surface-card rounded-xl border border-slate-200 p-5 md:p-8">
          {item.indikator && (
            <p className="mb-3 inline-block rounded-full bg-tint px-3 py-1 text-xs font-semibold text-accent">Indikator berpikir komputasional: {item.indikator}</p>
          )}
          <h2 className="border-b border-slate-200 pb-3 text-xl font-semibold md:text-2xl">{item.title}</h2>
          <ul className="mt-5 max-w-prose list-disc space-y-3 pl-5 leading-relaxed">
            {item.poin.map((p, n) => <li key={n}>{p}</li>)}
          </ul>
          <Visual flow={item.flow} caption={item.caption} />
          <section className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold">{item.contoh.judul}</h3>
            <p className="mt-2 text-sm leading-relaxed">{item.contoh.isi}</p>
          </section>
          <section className="mt-5 rounded-xl bg-tint p-5">
            <h3 className="font-semibold">Ringkasan</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {item.ringkasan.map((r, n) => <li key={n}>{r}</li>)}
            </ul>
          </section>
          <p className="mt-4 text-xs text-slate-500">Sumber: {item.sumber}</p>
          <div className="mt-8 flex flex-wrap justify-between gap-3">
            {prev ? <a href={prev.href} className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:border-accent">{prev.label}</a> : <span />}
            <a href={next.href} className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90">{next.label}</a>
          </div>
        </article>
      </div>
    </>
  )
}
