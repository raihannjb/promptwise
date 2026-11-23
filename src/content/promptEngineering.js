import { materi } from './helper.js'
import { DENNY, PRATHER, LIU, WING, KNOTH, DRAF } from './referensi.js'

// Tiap materi ditandai indikator berpikir komputasional yang menjadi kisi-kisi tes.
export default {
  title: 'Modul Prompting & Computational Thinking',
  subtitle: 'Praktik Memecahkan Masalah, Menyusun Instruksi, dan Validasi Kode',
  items: [
    materi('Dasar menulis prompt dan merangkum masalah', ['Konteks', 'Tugas', 'Format hasil'], 'Tiga bagian dasar sebuah prompt', 'dasar prompt', {
      indikator: 'Abstraksi',
      poin: [
        'Prompt adalah instruksi yang kamu tulis untuk AI. Prompt yang jelas memuat konteks (siapa kamu dan situasinya), tugas (apa yang diminta), dan format hasil (bagaimana jawaban ditulis).',
        'Abstraksi: ambil informasi yang penting dan buang yang tidak relevan. Latar cerita tidak perlu. Yang penting adalah input, output, dan aturan.',
        'Sebutkan bahasa pemrograman dan tingkatmu, misalnya "Python dasar untuk siswa SMK".',
        'Keterampilan menyusun prompt yang efektif dapat dilatih, dan kualitas prompt memengaruhi kualitas jawaban AI.',
      ],
      contoh: { judul: 'Contoh', isi: 'Soal: "Dedi membeli 2 tiket bioskop Rp35.000 di mal yang ramai saat hujan. Hitung total bayar." Ringkasan: input = harga tiket dan jumlah tiket, output = total bayar. Prompt: "Saya siswa SMK. Buat program Python dasar: input harga dan jumlah tiket, output total bayar. Jelaskan tiap baris."' },
      ringkasan: ['Prompt jelas = konteks + tugas + format.', 'Ringkas masalah menjadi input, output, dan aturan.'],
      sumber: `${KNOTH}; ${DENNY}`,
    }),
    materi('Memecah masalah sebelum meminta AI', ['Tujuan akhir', 'Pecah sub-tugas', 'Satu prompt per bagian'], 'Memecah tugas besar menjadi bagian kecil', 'dekomposisi masalah', {
      indikator: 'Dekomposisi',
      poin: [
        'Dekomposisi adalah memecah masalah besar menjadi bagian kecil yang lebih mudah diselesaikan, salah satu inti berpikir komputasional.',
        'Prompt besar seperti "buatkan aplikasi lengkap" cenderung menghasilkan jawaban panjang yang sulit diperiksa.',
        'Langkah: tulis tujuan akhir, pecah menjadi sub-tugas, urutkan, lalu minta AI satu sub-tugas per prompt dan uji tiap bagian.',
        'Untuk tarif bertingkat, pecah menjadi bagian pertama, bagian berikutnya, lalu aturan tambahan.',
      ],
      contoh: { judul: 'Contoh', isi: 'Aplikasi kos-kosan dipecah menjadi: data penghuni, catat pembayaran, cek tunggakan, tampilkan laporan. Tarif laundry: 2 kg pertama Rp12.000, tiap kg berikutnya Rp5.000, dipecah menjadi hitung 2 kg pertama dan hitung sisa kilonya.' },
      ringkasan: ['Pecah masalah sebelum bertanya ke AI.', 'Satu sub-tugas per prompt, lalu uji tiap bagian.'],
      sumber: `${WING}; ${DRAF}`,
    }),
    materi('Merancang langkah dan logika kondisi', ['Terima input', 'Proses', 'Tampilkan hasil'], 'Kerangka algoritma sederhana', 'perancangan algoritma', {
      indikator: 'Algoritma',
      poin: [
        'Algoritma adalah urutan langkah yang jelas untuk menyelesaikan masalah. Tulis rancangannya sebelum meminta kode.',
        'Pola umum: terima input, proses, tampilkan hasil. Urutan langkah menentukan hasil.',
        'Syarat gabungan: "DAN" berarti kedua syarat harus benar, "ATAU" berarti salah satu cukup. Salah memilih akan mengubah aturan.',
        'Syarat bertingkat: urutan pengecekan penting. Periksa syarat yang paling khusus atau tertinggi lebih dulu, kalau tidak syarat lain akan menutupinya.',
        'Minta AI memeriksa rancanganmu, bukan hanya membuat kodenya.',
      ],
      contoh: { judul: 'Contoh', isi: 'Promo tiket bioskop: diskon 20% jika pelajar dan hari Senin sampai Kamis. Poin member: Gold jika poin >= 1000, Silver jika poin >= 500. Cek Gold lebih dulu, karena orang dengan 1200 poin juga memenuhi syarat Silver.' },
      ringkasan: ['Rancang langkah dulu, baru minta kode.', 'Bedakan "DAN" dengan "ATAU".', 'Urutan pengecekan syarat bertingkat penting.'],
      sumber: `${WING}; ${DRAF}`,
    }),
    materi('Mengenali pola dan memperbaiki prompt', ['Kenali pola', 'Buat template prompt', 'Perbaiki bila meleset'], 'Pola membantu memakai ulang dan memperbaiki prompt', 'pola dan perbaikan prompt', {
      indikator: 'Pengenalan pola',
      poin: [
        'Pengenalan pola adalah menemukan kesamaan atau pengulangan pada masalah atau langkah.',
        'Tugas yang mirip dapat memakai satu bentuk prompt yang sama dengan bagian yang diganti, misalnya "Buat program menghitung [X], input [A], output [B]".',
        'Jika jawaban AI kurang tepat, perbaiki prompt: tambah konteks yang kurang, perjelas tugas, tentukan format, atau beri contoh input dan output. Jangan mengulang prompt yang sama.',
        'Perhatikan kesalahan yang berulang, misalnya syarat batas yang selalu salah, lalu tambahkan instruksi khusus untuk itu.',
      ],
      contoh: { judul: 'Contoh', isi: 'Prompt awal: "buat program voucher". Perbaikan: "Buat program Python dasar: input total belanja, jika minimal Rp100.000 beri potongan Rp10.000, tampilkan total bayar. Perhatikan syarat minimal."' },
      ringkasan: ['Kenali pola untuk memakai ulang prompt.', 'Perbaiki prompt dengan menambah konteks, batasan, atau contoh.'],
      sumber: `${DENNY}; ${DRAF}`,
    }),
    materi('Menguji dan memperbaiki kode dari AI', ['Telusuri kode', 'Uji nilai batas', 'Perbaiki dan uji ulang'], 'Memeriksa kode hasil AI tanpa harus menjalankannya', 'pengujian dan perbaikan kode AI', {
      indikator: 'Algoritma dan evaluasi',
      poin: [
        'Menelusuri kode (tracing): ikuti kode baris demi baris dengan satu contoh angka, dan catat nilai variabel di tiap baris.',
        'Uji nilai batas: sedikit di bawah, tepat di batas, dan di atas syarat.',
        'Periksa perhitungan persen: 10% ditulis "* 0.1" atau "/ 100", bukan "* 10".',
        'Temukan baris yang salah, jelaskan alasannya, perbaiki satu hal, lalu uji ulang. Jika meminta AI memperbaiki, sebutkan input, hasil yang muncul, dan hasil yang diharapkan.',
        'Kode AI bisa bertentangan dengan kebutuhanmu atau konteksnya, jadi pemeriksaan tetap perlu.',
      ],
      contoh: { judul: 'Contoh', isi: 'Bonus top-up 10% jika minimal Rp20.000, kode AI: 1 jika topup > 20000 / 2 bonus = topup * 10. Input 20.000 seharusnya bonus 2.000, kode menghasilkan 0 (baris 1 salah). Input 30.000 seharusnya 3.000, kode menghasilkan 300.000 (baris 2 salah).' },
      ringkasan: ['Telusuri kode dengan contoh angka.', 'Uji nilai batas dan perhitungan persen.', 'Perbaiki lalu uji ulang.'],
      sumber: `${LIU}; ${PRATHER}`,
    }),
  ],
}
