# PromptWise

E-modul literasi AI (React + Vite + Tailwind CSS v4). Tanpa login dan tanpa backend.

## Menjalankan
    npm install
    npm run dev      # pengembangan
    npm run build    # hasil di folder dist (siap Netlify)

## Struktur
- `src/config.js`: link Google Form posttest dan kode penyelesaian.
- `src/content/`: teks materi (satu file per modul, kerangka dibuat di `helper.js`, saat ini masih placeholder) dan `glosarium.js`.
- `src/pages/`: Home, Module (dipakai kedua modul), Finish.
- `src/components/`: Navbar, Sidebar, Visual (diagram alur).

Routing memakai hash (`#/literasi-ai/1`), jadi tidak perlu pengaturan redirect di Netlify.
Penanda materi yang sudah dibuka disimpan di localStorage browser, bukan di server.
