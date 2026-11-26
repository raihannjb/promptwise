const btn = 'rounded-lg px-6 py-3 text-sm font-semibold'

export default function Home() {
  return (
    <div className="home-page text-center">
      <section className="home-hero px-4 py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">PromptWise?</h1>
          <p className="mx-auto mt-4 max-w-xl text-xl text-slate-600">Media Edukasi Literasi AI &amp; Problem Solving Pemrograman</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#/materi" className={`${btn} bg-accent text-white hover:opacity-90`}>Pelajari Materi</a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-16">
        <div className="mt-14 grid gap-4 text-left md:grid-cols-2">
          <div className="surface-card rounded-xl border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-500">Prompt biasa</p>
            <p className="mt-2 rounded-lg bg-slate-100 p-3 font-mono text-sm">buatkan program kalkulator</p>
            <p className="mt-3 text-sm text-slate-600">Jawaban bisa ke mana saja karena AI harus menebak maksudmu.</p>
          </div>
          <div className="surface-card-accent rounded-xl border-2 border-accent p-5">
            <p className="text-sm font-semibold text-accent">Prompt terarah</p>
            <p className="mt-2 rounded-lg bg-tint p-3 font-mono text-sm">Saya siswa SMK kelas XI. Buat kalkulator sederhana di Python (tambah, kurang, kali, bagi) dan jelaskan tiap langkahnya.</p>
            <p className="mt-3 text-sm text-slate-600">Konteks, tugas, dan format yang jelas menghasilkan jawaban yang bisa kamu pelajari.</p>
          </div>
        </div>

        <ol className="mt-12 grid gap-3 text-left text-sm md:grid-cols-3">
          <li className="surface-card-muted rounded-xl p-4"><strong>1. Literasi AI.</strong> Pahami cara kerja, batasan, dan etika AI.</li>
          <li className="surface-card-accent rounded-xl p-4"><strong>2. Prompting & Computational Thinking.</strong> Pelajari cara menulis dan memperbaiki prompt untuk memecahkan masalah pemrograman.</li>
          <li className="surface-card-muted rounded-xl p-4"><strong>3. Selesai.</strong> Ambil kode penyelesaian untuk posttest.</li>
        </ol>
      </div>
    </div>
  )
}
