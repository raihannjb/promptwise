import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Module from './pages/Module'
import Finish from './pages/Finish'
import Glosarium from './pages/Glosarium'
import Materials from './pages/Materials'
import { modules } from './content'
import { loadVisited, VISITED_KEY } from './content/progress'

function useHash() {
  const [hash, setHash] = useState(window.location.hash || '#/')
  useEffect(() => {
    const onChange = () => { setHash(window.location.hash || '#/'); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const [theme, setTheme] = useState(() => (
    localStorage.getItem('pw-theme') === 'dark' ? 'dark' : 'light'
  ))
  const [visited, setVisited] = useState(loadVisited)
  const [, page = '', idx] = useHash().split('/')
  const materialsComplete = Object.entries(modules).every(([slug, mod]) =>
    mod.items.every((_, itemIndex) => visited.includes(`${slug}/${itemIndex}`)),
  )

  const markVisited = useCallback((id) => {
    if (visited.includes(id)) return
    const next = [...visited, id]
    try {
      localStorage.setItem(VISITED_KEY, JSON.stringify(next))
    } catch (error) {
      console.error('Gagal menyimpan progres materi.', error)
    }
    setVisited(next)
  }, [visited])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('pw-theme', theme)
  }, [theme])

  let view = <Home />
  if (modules[page]) {
    view = <Module
      slug={page}
      idx={idx}
      visited={visited}
      onVisit={markVisited}
      materialsComplete={materialsComplete}
    />
  }
  if (page === 'materi') view = <Materials />
  if (page === 'selesai') {
    view = materialsComplete
      ? <Finish />
      : <Materials lockedMessage="Link kuis akhir terbuka setelah semua materi dikunjungi." />
  }
  if (page === 'glosarium') view = <Glosarium />
  return (
    <>
      <Navbar
        page={page}
        theme={theme}
        materialsComplete={materialsComplete}
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <main>{view}</main>
    </>
  )
}
