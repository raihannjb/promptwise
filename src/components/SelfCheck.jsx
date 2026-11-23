import { useState } from 'react'

export default function SelfCheck({ check }) {
  const [sel, setSel] = useState(null)
  const done = sel !== null
  return (
    <section className="surface-card-muted mt-8 rounded-xl border border-slate-200 p-5">
      <h3 className="font-semibold">Cek pemahaman</h3>
      <p className="mt-2">{check.q}</p>
      <div className="mt-3 grid gap-2">
        {check.options.map((o, i) => {
          const right = done && i === check.answer
          const wrong = done && sel === i && i !== check.answer
          return (
            <button key={o} disabled={done} onClick={() => setSel(i)}
              className={`rounded-lg border px-4 py-2 text-left text-sm transition ${right ? 'border-ok bg-green-50' : wrong ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-accent'}`}>
              {o}
            </button>
          )
        })}
      </div>
      {done && (
        <p className="mt-3 text-sm" role="status">
          <strong>{sel === check.answer ? 'Tepat.' : 'Belum tepat.'}</strong> {check.explain}
        </p>
      )}
    </section>
  )
}
