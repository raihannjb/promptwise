import { materi } from './helper.js'
import { DENNY, PRATHER, LIU, WING, KNOTH, SHUTE, GGLOSS_GEN, DRAF } from './referensi.js'

// Kisi-kisi tes (nomor soal) ada di komentar tiap materi.
export default {
  title: 'Modul Prompting & Computational Thinking',
  subtitle: 'Praktik Memecahkan Masalah, Menyusun Instruksi, dan Validasi Kode',
  items: [
    // Abstraksi: soal 7, 8, 9
    materi('Dasar menulis prompt dan merangkum masalah', ['Konteks', 'Tugas', 'Format hasil'], 'Tiga bagian dasar sebuah prompt', 'dasar prompt', {
      indikator: 'Abstraksi',
      poin: [
        'Prompt adalah teks yang kamu berikan ke AI untuk mengarahkan jawabannya. Prompt yang jelas memuat konteks (siapa kamu dan situasinya), tugas (apa yang diminta), dan format hasil.',
        'Abstraksi: pilih informasi yang dipakai program dan buang yang tidak. Latar cerita (ramai, panas, hujan) bukan bagian masalah.',
        'Input adalah data yang diberikan ke program, output adalah hasil yang diminta. Jangan menukar keduanya.',
        'Simpan data yang dipakai langsung (misalnya nama produk dan harga), bukan data turunan (total penjualan hari ini) atau data yang tidak dipakai (tanggal kedaluwarsa).',
        'Sebutkan bahasa pemrograman dan tingkatmu, misalnya "Python dasar untuk siswa SMK".',
      ],
      contoh: { judul: 'Contoh', isi: 'Soal: "Dedi membeli 2 tiket bioskop Rp35.000 di mal yang ramai saat hujan. Hitung total bayar." Ringkasan: input = harga tiket dan jumlah tiket, output = total bayar. Aplikasi toko pulsa: simpan nama produk dan harga. Prompt: "Saya siswa SMK. Buat program Python dasar: input harga dan jumlah tiket, output total bayar. Jelaskan tiap baris."' },
      ringkasan: ['Prompt jelas = konteks + tugas + format.', 'Ringkas masalah menjadi input, output, dan aturan.', 'Simpan hanya data yang dipakai program.'],
      sumber: `${KNOTH}; ${DENNY}; ${GGLOSS_GEN}`,
    }),
    // Dekomposisi: soal 1, 2
    materi('Memecah masalah sebelum meminta AI', ['Tujuan akhir', 'Pecah sub-tugas', 'Satu prompt per bagian'], 'Memecah tugas besar menjadi bagian kecil', 'dekomposisi masalah', {
      indikator: 'Dekomposisi',
      poin: [
        'Dekomposisi adalah memecah masalah besar menjadi bagian kecil yang lebih mudah diselesaikan, salah satu inti berpikir komputasional.',
        'Prompt besar seperti "buatkan aplikasi lengkap" menghasilkan jawaban panjang yang sulit diperiksa. Menulisnya lebih rinci atau lebih pendek tidak menyelesaikan itu. Yang membantu adalah memecahnya.',
        'Pecah berdasarkan fungsi, minta satu bagian per prompt, dan uji tiap bagian sebelum lanjut.',
        'Urutan sub-tugas mengikuti ketergantungan data: rata-rata butuh jumlah, dan jumlah butuh data yang sudah terkumpul.',
      ],
      contoh: { judul: 'Contoh', isi: 'Aplikasi kos-kosan dipecah menjadi: data penghuni, catat pembayaran, cek tunggakan, tampilkan laporan. Rata-rata pengunjung toko dan hari terramai: kumpulkan jumlah pengunjung per hari, jumlahkan, bagi dengan jumlah hari, lalu cari hari terramai.' },
      ringkasan: ['Pecah masalah sebelum bertanya ke AI.', 'Satu sub-tugas per prompt, lalu uji tiap bagian.', 'Urutan mengikuti ketergantungan data.'],
      sumber: `${WING}; ${SHUTE}`,
    }),
    // Dekomposisi: soal 3
    materi('Tarif bertingkat dan batas maksimal', ['Jam pertama', 'Jam berikutnya', 'Ambil yang lebih kecil'], 'Menghitung tarif bertingkat dengan batas maksimal', 'tarif bertingkat', {
      indikator: 'Dekomposisi',
      poin: [
        'Tarif bertingkat punya harga berbeda untuk bagian pertama dan bagian berikutnya, dan sering punya batas maksimal.',
        'Rumus dasar: tarif pertama + (jumlah jam - 1) x tarif berikutnya. Jam pertama sudah dihitung sendiri, jadi jangan dihitung lagi di bagian berikutnya.',
        'Batas maksimal berupa uang, jadi dipasang pada hasil hitungan: ambil nilai yang lebih kecil antara hasil dan batas. Jangan membatasi jumlah jam.',
        'Jika ada pembulatan atau potongan, tetapkan urutannya dulu: pembulatan, hitung tarif, batas maksimal, baru potongan. Urutan lain memberi angka lain.',
      ],
      contoh: { judul: 'Contoh', isi: 'Sewa loker: jam pertama Rp4.000, tiap jam berikutnya Rp2.500, maksimal Rp15.000 per hari. 5 jam: 4.000 + 4 x 2.500 = 14.000 (di bawah batas). 8 jam: 4.000 + 7 x 2.500 = 21.500, melewati batas, jadi 15.000.' },
      ringkasan: ['Tarif pertama + (jam - 1) x tarif berikutnya.', 'Batas maksimal dipasang pada uang, bukan pada jam.', 'Urutan: pembulatan, tarif, batas, potongan.'],
      sumber: `${SHUTE}; ${DRAF}`,
    }),
    // Algoritma: soal 11
    materi('Merancang langkah dan logika kondisi', ['Terima input', 'Proses', 'Tampilkan hasil'], 'Kerangka algoritma sederhana', 'perancangan algoritma', {
      indikator: 'Algoritma',
      poin: [
        'Algoritma adalah urutan langkah yang jelas untuk menyelesaikan masalah. Tulis rancangannya sebelum meminta kode.',
        'Pola umum: terima input, proses, tampilkan hasil. Urutan langkah menentukan hasil.',
        'Syarat bertingkat: urutan pengecekan penting. Periksa syarat yang paling khusus atau tertinggi lebih dulu, kalau tidak syarat umum akan menutupinya.',
        'Menukar isi hasil atau menghapus kata "selain itu" tidak memperbaiki urutan yang keliru. Yang diperbaiki adalah urutan pengecekannya.',
        'Minta AI memeriksa rancanganmu, bukan hanya membuat kodenya.',
      ],
      contoh: { judul: 'Contoh', isi: 'Poin member: Gold jika poin >= 1000, Silver jika poin >= 500. Jika Silver dicek lebih dulu, orang dengan 1200 poin tercatat Silver. Cek Gold lebih dulu.' },
      ringkasan: ['Rancang langkah dulu, baru minta kode.', 'Syarat bertingkat: cek yang paling khusus lebih dulu.'],
      sumber: `${WING}; ${SHUTE}`,
    }),
    // Algoritma: soal 10
    materi('Menelusuri aturan dengan DAN, ATAU, dan tanda kurung', ['Pecah syarat', 'Cek tiap orang', 'Perhatikan nilai tepat di batas'], 'Menelusuri aturan gabungan pada contoh kasus', 'syarat gabungan', {
      indikator: 'Algoritma',
      poin: [
        '"DAN" menuntut semua syarat benar, "ATAU" cukup salah satu.',
        'Tanda kurung mengubah arti. "(A atau B) dan C" berbeda dari "A atau (B dan C)".',
        'Cara menelusuri: ambil satu orang, cek syarat dalam kurung lebih dulu, lalu syarat di luarnya. Lakukan untuk tiap orang, jangan menebak dari kesan pertama.',
        'Perhatikan nilai yang tepat di batas: ">= 80" memasukkan 80, sedangkan "> 80" tidak.',
        'Orang yang lolos satu syarat belum tentu lolos semuanya.',
      ],
      contoh: { judul: 'Contoh', isi: 'Lomba coding gratis jika (kelas XI atau pernah juara) DAN nilai sikap >= 80. Raka (XI, belum juara, sikap 75): kurung benar, sikap gagal, tidak lolos. Sinta (X, pernah juara, sikap 80): kurung benar lewat "juara", sikap tepat 80, lolos. Tono (XI, juara, sikap 90): lolos.' },
      ringkasan: ['Kurung dicek lebih dulu, lalu syarat di luarnya.', 'Telusuri tiap orang satu per satu.', 'Nilai tepat di batas ditentukan oleh >= atau >.'],
      sumber: `${SHUTE}; ${DRAF}`,
    }),
    // Pengenalan pola: soal 4, 5, 6
    materi('Mengenali pola dan memperbaiki prompt', ['Kenali pola', 'Buat templat prompt', 'Perbaiki bila meleset'], 'Pola membantu memakai ulang dan memperbaiki prompt', 'pola dan perbaikan prompt', {
      indikator: 'Pengenalan pola',
      poin: [
        'Pengenalan pola adalah menemukan kesamaan atau pengulangan pada masalah, langkah, atau kesalahan.',
        'Tugas yang mirip dapat memakai satu templat prompt dengan bagian tetap dan bagian yang diisi. Templat yang terlalu umum membuat AI menebak, sedangkan templat yang menyalin rumus satu kasus salah untuk kasus lain.',
        'Bandingkan beberapa program: temukan langkah yang sama, lalu bedakan dari bagian yang berbeda.',
        'Jika jawaban AI kurang tepat, perbaiki prompt: tambah konteks, perjelas tugas, tentukan format, atau beri contoh input dan output. Mengulang prompt yang sama atau menambah "pastikan tidak ada kesalahan" tidak menjamin hasil lebih baik.',
        'Kesalahan yang berulang adalah pola. Misalnya syarat batas yang selalu keliru: tambahkan instruksi khusus dan ujilah bagian itu.',
      ],
      contoh: { judul: 'Contoh', isi: 'Program konversi suhu, panjang, dan berat punya langkah sama: terima angka, kalikan dengan faktor konversi, tampilkan hasil. Templat: "Buat program Python dasar yang mengonversi [satuan asal] ke [satuan tujuan], input [angka], output hasil konversi."' },
      ringkasan: ['Kenali langkah yang sama untuk membuat templat prompt.', 'Perbaiki prompt dengan konteks, batasan, atau contoh.', 'Kesalahan berulang adalah pola yang perlu diuji.'],
      sumber: `${DENNY}; ${SHUTE}`,
    }),
    // Algoritma dan evaluasi: soal 5, 11, 12
    materi('Menguji dan memperbaiki kode dari AI', ['Telusuri kode', 'Uji nilai batas', 'Perbaiki dan uji ulang'], 'Memeriksa kode hasil AI tanpa harus menjalankannya', 'pengujian dan perbaikan kode AI', {
      indikator: 'Algoritma dan evaluasi',
      poin: [
        'Menelusuri kode (tracing): ikuti kode baris demi baris dengan satu contoh angka, dan catat nilai variabel di tiap baris.',
        'Uji nilai batas: sedikit di bawah, tepat di batas, dan di atas syarat.',
        'Uji juga dengan angka sederhana yang hasilnya sudah kamu ketahui, misalnya 10% dari 100 harus 10 dan harga akhirnya 90.',
        'Periksa perhitungan persen: 10% ditulis "* 0.1" atau "/ 100", bukan "* 10".',
        'Temukan baris yang salah, jelaskan alasannya, perbaiki satu hal, lalu uji ulang. Kode AI bisa bertentangan dengan kebutuhanmu, jadi pemeriksaan tetap perlu.',
      ],
      contoh: { judul: 'Contoh', isi: 'Bonus top-up 10% jika minimal Rp20.000, kode AI: 1 jika topup > 20000 / 2 bonus = topup * 10. Input 20.000 seharusnya bonus 2.000, kode menghasilkan 0 (baris 1 salah). Input 30.000 seharusnya 3.000, kode menghasilkan 300.000 (baris 2 salah).' },
      ringkasan: ['Telusuri kode dengan contoh angka.', 'Uji nilai batas dan angka sederhana.', 'Perbaiki lalu uji ulang.'],
      sumber: `${LIU}; ${PRATHER}; ${SHUTE}`,
    }),
  ],
}
