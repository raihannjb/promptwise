import { materi } from './helper.js'
import { LIU, LONG, PRATHER, DENNY, DRAF } from './referensi.js'

export default {
  title: 'Modul Literasi AI',
  subtitle: 'Pemahaman Konsep, Etika, dan Verifikasi Output AI',
  items: [
    materi('Cara kerja dan keterbatasan AI', ['Prompt kamu', 'Model bahasa', 'Jawaban'], 'Alur sederhana AI menghasilkan jawaban', 'cara kerja AI', {
      poin: [
        'AI generatif seperti ChatGPT atau Gemini menyusun jawaban dari pola pada data latihnya. Ia tidak "memahami" seperti manusia.',
        'Karena itu, jawaban yang terdengar yakin tetap bisa keliru. Pada kode, hal ini disebut halusinasi kode: kode yang bertentangan dengan kebutuhanmu, dengan konteks, atau dengan pengetahuan pemrograman yang benar.',
        'Contoh kesalahan yang mungkin muncul: syarat yang tergeser (misalnya ">" padahal seharusnya ">="), rumus yang salah, atau fungsi yang sebenarnya tidak ada.',
        'AI membantu, tetapi tanggung jawab menilai hasilnya tetap ada padamu.',
      ],
      contoh: { judul: 'Contoh', isi: 'Kamu meminta AI membuat program bonus top-up game: bonus 10% jika top-up minimal Rp20.000. AI menulis "jika top-up > 20000". Kodenya berjalan tanpa error, tetapi top-up tepat Rp20.000 tidak mendapat bonus.' },
      ringkasan: ['AI menyusun jawaban dari pola, bukan pemahaman.', 'Kode yang berjalan belum tentu benar.', 'Kamu yang menilai hasil akhirnya.'],
      sumber: `${LIU}; ${LONG}`,
    }),
    materi('Menilai benar atau salahnya jawaban AI', ['Hitung sendiri', 'Telusuri kode', 'Bandingkan'], 'Tiga langkah memeriksa jawaban AI', 'verifikasi jawaban AI', {
      poin: [
        'Error hanya muncul jika aturan bahasa dilanggar. Kesalahan logika bisa lolos tanpa pesan apa pun.',
        'Tiga langkah memeriksa: (1) hitung sendiri hasil yang seharusnya untuk beberapa contoh angka, (2) telusuri kode baris demi baris dengan angka yang sama, (3) bandingkan keduanya.',
        'Pilih contoh angka di sekitar batas syarat: sedikit di bawah, tepat di batas, dan di atasnya.',
        'Pemula sering sulit memahami kode yang tidak ia tulis sendiri, jadi telusuri pelan-pelan dan jangan ragu bertanya.',
      ],
      contoh: { judul: 'Contoh', isi: 'Bonus 10% jika top-up minimal Rp20.000. Uji dengan 19.999, 20.000, dan 30.000. Hasil seharusnya: 19.999, 22.000, 33.000. Jika kode menghasilkan angka lain pada salah satunya, ada kesalahan.' },
      ringkasan: ['Tidak error belum berarti benar.', 'Hitung dulu hasil yang seharusnya, lalu bandingkan dengan hasil kode.', 'Uji nilai di sekitar batas.'],
      sumber: `${PRATHER}; ${DRAF}`,
    }),
    materi('AI sebagai pendamping, bukan pengganti berpikir', ['Pikirkan dulu', 'Tanya AI', 'Tinjau hasilnya'], 'AI membantu proses berpikir, bukan menggantikannya', 'ketergantungan pada AI', {
      poin: [
        'Urutan yang sehat: pikirkan dulu (apa inputnya, outputnya, dan aturannya), baru bertanya ke AI.',
        'Meminta jawaban akhir lalu menyalinnya membuat kamu sulit menilai hasilnya. Para pengajar juga mengkhawatirkan ketergantungan berlebihan pada AI.',
        'Pakai AI untuk menjelaskan soal, memecah langkah, memberi petunjuk, dan memeriksa rancanganmu.',
        'Tanda ketergantungan: tidak bisa menjelaskan kodemu sendiri, atau langsung bertanya sebelum mencoba.',
      ],
      contoh: { judul: 'Dua cara memakai AI', isi: 'Cara A: "Buatkan program tarif laundry." Cara B: "Aku sudah menulis langkah-langkah program tarif laundry ini. Tolong periksa apakah ada langkah yang terlewat." Cara B membuatmu tetap berpikir.' },
      ringkasan: ['Pikirkan dulu, baru tanya AI.', 'AI untuk membantu berpikir, bukan menjawab semuanya.'],
      sumber: `${PRATHER}; ${DENNY}`,
    }),
    materi('Etika dan tanggung jawab memakai AI', ['Data latih', 'Bias terbawa', 'Gunakan dengan jujur'], 'Bias dan kejujuran dalam memakai AI', 'etika penggunaan AI', {
      poin: [
        'Literasi AI mencakup memahami keterbatasan, bias, dan dampak AI, serta menggunakannya secara bertanggung jawab.',
        'AI belajar dari data buatan manusia, sehingga bias pada data bisa terbawa ke jawabannya.',
        'Jujur: sebutkan jika tugasmu dibantu AI, dan tulis ulang jawaban dengan pemahamanmu sendiri.',
        'Jangan memasukkan data pribadi (nama lengkap, nomor HP, kata sandi) ke chatbot.',
      ],
      contoh: { judul: 'Contoh', isi: 'Kamu meminta AI membantu tugas program. Kamu menulis di laporan: "Saya memakai AI untuk memecah langkah, lalu saya menulis dan menguji kode sendiri."' },
      ringkasan: ['Pahami bias dan batas AI.', 'Jujur soal bantuan AI.', 'Lindungi data pribadi.'],
      sumber: `${LONG}; ${DRAF}`,
    }),
  ],
}
