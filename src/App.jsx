import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Module from './pages/Module'
import Finish from './pages/Finish'
import Glosarium from './pages/Glosarium'
import Materials from './pages/Materials'
import { modules } from './content'

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
  const [, page = '', idx] = useHash().split('/')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('pw-theme', theme)
  }, [theme])

  let view = <Home />
  if (modules[page]) view = <Module slug={page} idx={idx} />
  if (page === 'materi') view = <Materials />
  if (page === 'selesai') view = <Finish />
  if (page === 'glosarium') view = <Glosarium />
  return (
    <>
      <Navbar page={page} theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main>{view}</main>
    </>
  )
}
