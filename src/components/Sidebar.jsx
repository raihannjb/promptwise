import { useState } from 'react'

export default function Sidebar({ slug, items, current, visited }) {
  const [open, setOpen] = useState(false)
  return (
    <aside className="surface-card-muted rounded-xl border border-slate-200 p-4 md:self-start">
      <button className="flex w-full items-center justify-between font-semibold md:cursor-default"
        onClick={() => setOpen(!open)} aria-expanded={open}>
        Menu Materi <span className="md:hidden">{open ? '−' : '+'}</span>
      </button>
      <ul className={`mt-3 space-y-1 ${open ? 'block' : 'hidden'} md:block`}>
        {items.map((it, i) => {
          const seen = visited.includes(`${slug}/${i}`)
          return (
            <li key={it.title}>
              <a href={`#/${slug}/${i + 1}`} onClick={() => setOpen(false)}
                className={`flex gap-3 rounded-lg px-2 py-2 text-sm ${i === current ? 'bg-tint font-semibold' : 'hover:bg-slate-100'}`}>
                <span aria-hidden="true" className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border text-[10px] ${seen ? 'border-accent bg-accent text-white' : 'border-slate-400'}`}>{seen ? '✓' : ''}</span>
                {it.title}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
