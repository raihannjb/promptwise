import glosarium from '../content/glosarium.js'

export default function Glosarium() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Glosarium</h1>
      <p className="mt-1 text-slate-600">Daftar istilah yang dipakai di modul.</p>
      <dl className="surface-card-muted mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
        {glosarium.map((g) => (
          <div key={g.istilah} className="p-4">
            <dt className="font-semibold">{g.istilah}</dt>
            <dd className="mt-1 text-sm text-slate-700">{g.definisi}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
