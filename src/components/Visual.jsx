// Diagram alur berbasis HTML: tersusun vertikal di HP, horizontal di layar lebar.
export default function Visual({ flow, caption }) {
  return (
    <figure className="my-6">
      <ol className="flex flex-col items-stretch gap-2 rounded-xl bg-tint p-4 md:flex-row md:items-center">
        {flow.map((t, i) => (
          <li key={t} className="flex flex-1 flex-col items-center gap-2 md:flex-row">
            <span className="surface-card-accent w-full flex-1 rounded-lg border-2 border-accent px-3 py-3 text-center text-sm font-medium">{t}</span>
            {i < flow.length - 1 && (
              <>
                <span aria-hidden="true" className="text-accent md:hidden">↓</span>
                <span aria-hidden="true" className="hidden text-accent md:inline">→</span>
              </>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-2 text-center text-sm italic text-slate-500">{caption}</figcaption>
    </figure>
  )
}
