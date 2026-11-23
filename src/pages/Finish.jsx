import { config } from '../config'

export default function Finish() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Kamu sudah menyelesaikan modul</h1>
      <p className="mt-3 text-slate-600">Salin kode di bawah, lalu isikan di awal posttest.</p>
      <p className="surface-card-accent mt-6 select-all rounded-xl border-2 border-accent py-5 font-mono text-3xl font-bold">{config.kodePenyelesaian}</p>
      <a href={config.linkPosttest} target="_blank" rel="noreferrer"
        className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90">Buka posttest</a>
      <p className="mt-6"><a href="#/literasi-ai/1" className="text-sm text-slate-600 underline">Pelajari ulang materi</a></p>
    </div>
  )
}
