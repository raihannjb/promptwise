// Pembuat kerangka materi. Ganti field poin, contoh, ringkasan, dan sumber
// langsung di file modul bila isi dari artikel ilmiah sudah siap, misalnya:
// materi('Judul', flow, caption, 'topik', { poin: ['...'], sumber: 'Penulis (2024)' })
const ph = (t) => `[Placeholder: ${t}]`

export function materi(title, flow, caption, topik, extra = {}) {
  return {
    title,
    flow,
    caption,
    poin: [ph(`poin materi tentang ${topik}`), ph('poin materi berikutnya'), ph('poin materi berikutnya')],
    contoh: { judul: 'Contoh', isi: ph('contoh kasus, kode, atau prompt dari sumber') },
    ringkasan: [ph('ringkasan poin utama 1'), ph('ringkasan poin utama 2')],
    sumber: ph('sitasi artikel ilmiah (penulis, tahun, judul)'),
    ...extra,
  }
}
