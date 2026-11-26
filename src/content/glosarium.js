import { SHUTE, WING, LONG, LIU, NIST, GGLOSS_GEN, GGLOSS_LANG, GCLOUD_GLOSS } from './referensi.js'

// Definisi ditulis ulang dengan kata sendiri; sumber menunjukkan asal istilahnya.
export default [
  { istilah: 'Prompt', definisi: 'Teks yang kamu berikan kepada model bahasa untuk mengarahkan jawabannya.', sumber: GGLOSS_GEN },
  { istilah: 'Prompt engineering', definisi: 'Seni menyusun prompt supaya model bahasa memberi jawaban yang kamu inginkan. Prompt yang tersusun baik penting agar jawabannya berguna.', sumber: GGLOSS_GEN },
  { istilah: 'AI generatif', definisi: 'AI yang menghasilkan konten baru seperti teks, kode, atau gambar, berbeda dengan AI tradisional yang berfokus pada klasifikasi dan prediksi.', sumber: GCLOUD_GLOSS },
  { istilah: 'Model bahasa besar (LLM)', definisi: 'Model berbasis teks yang dilatih dengan data sangat banyak dan dipakai untuk tugas bahasa, seperti menulis, menerjemahkan, meringkas, dan menjawab pertanyaan. Chatbot adalah salah satu penerapannya.', sumber: `${GCLOUD_GLOSS}; ${GGLOSS_GEN}` },
  { istilah: 'Halusinasi AI', definisi: 'Keluaran AI yang tampak meyakinkan tetapi tidak benar. Pada kode, halusinasi berupa kode yang bertentangan dengan kebutuhan pengguna, konteks, atau pengetahuan pemrograman. Istilah lainnya adalah confabulation.', sumber: `${LIU}; ${GGLOSS_LANG}` },
  { istilah: 'Bias pada AI', definisi: 'Kecenderungan sistem AI menghasilkan hasil yang tidak adil. NIST membedakan bias sistemik, statistik, dan manusia, jadi bias tidak hanya berasal dari data.', sumber: NIST },
  { istilah: 'Literasi AI', definisi: 'Kemampuan menilai teknologi AI secara kritis, berkomunikasi dan bekerja sama dengan AI, serta memakainya sebagai alat secara bertanggung jawab.', sumber: LONG },
  { istilah: 'Berpikir komputasional', definisi: 'Cara menyelesaikan masalah dengan memecahnya, mengenali pola, memilih informasi penting, dan menyusun langkah penyelesaian. Ahli merincinya antara lain menjadi dekomposisi, abstraksi, desain algoritma, debugging, iterasi, dan generalisasi.', sumber: `${WING}; ${SHUTE}` },
  { istilah: 'Dekomposisi', definisi: 'Memecah masalah besar menjadi bagian-bagian penyusunnya yang lebih kecil.', sumber: SHUTE },
  { istilah: 'Pengenalan pola', definisi: 'Menemukan kesamaan atau pengulangan pada masalah atau langkah, lalu merangkumnya menjadi aturan. Komponen ini muncul dalam kerangka Anderson (2016) yang dibahas oleh Shute dkk.', sumber: SHUTE },
  { istilah: 'Abstraksi', definisi: 'Menghilangkan detail yang tidak penting dan memilih informasi atau representasi yang relevan untuk masalah.', sumber: SHUTE },
  { istilah: 'Algoritma', definisi: 'Rumusan penyelesaian masalah berupa urutan langkah yang jelas.', sumber: SHUTE },
  { istilah: 'Debugging', definisi: 'Menemukan dan memperbaiki kesalahan pada solusi. Dalam kerangka Anderson (2016), komponen ini disebut evaluasi solusi.', sumber: SHUTE },
]
