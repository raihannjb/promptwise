import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const links = [
  { href: '#/', slug: '', label: 'Beranda' },
  { href: '#/materi', slug: 'materi', activePages: ['materi', 'literasi-ai', 'prompt-engineering'], label: 'Materi' },
  { href: '#/glosarium', slug: 'glosarium', label: 'Glosarium' },
]

export default function Navbar({ page, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const renderLinks = () => links.map((l) => {
    const active = l.activePages ? l.activePages.includes(page) : page === l.slug
    return (
      <li key={l.slug}>
        <a href={l.href} aria-current={active ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
          className={active ? 'font-bold text-accent' : 'text-slate-600 hover:text-ink'}>
          {l.label}
        </a>
      </li>
    )
  })

  return (
    <>
      <header className={`theme-nav sticky top-0 ${menuOpen ? 'z-30' : 'z-10'} border-b border-slate-200`}>
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3">
          <a href="#/" className="text-xl font-bold tracking-tight">PromptWise</a>
          <div className="flex items-center justify-end gap-2">
            <ul className="hidden gap-x-5 gap-y-1 text-sm md:flex">
              {renderLinks()}
            </ul>
            <button type="button" onClick={onToggleTheme}
              aria-label={`Aktifkan mode ${theme === 'light' ? 'gelap' : 'terang'}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white text-lg leading-none text-slate-700 transition hover:border-accent hover:text-accent">
              <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
            </button>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={menuOpen} aria-controls="mobile-navigation"
              className="relative grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-accent hover:text-accent md:hidden">
              <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
              <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded bg-current transition-[opacity,transform] duration-200 ease-in-out ${menuOpen ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`} />
              <span aria-hidden="true" className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
            </button>
          </div>
        </nav>
      </header>
      {createPortal(
        <div id="mobile-navigation" aria-hidden={!menuOpen}
          className={`fixed inset-0 z-20 bg-slate-50 transition-[opacity,transform,visibility] duration-300 ease-in-out md:hidden ${menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0 pointer-events-none'}`}>
          <button type="button" aria-label="Tutup menu navigasi"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default" />
          <nav aria-label="Navigasi utama"
            className="pointer-events-none relative z-10 flex min-h-full items-center justify-center px-6 pb-16">
            <ul className="pointer-events-auto flex flex-col items-center gap-8 text-3xl font-semibold">
              {renderLinks()}
            </ul>
          </nav>
        </div>,
        document.body,
      )}
    </>
  )
}
