import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X, Globe, ChevronDown } from "lucide-react"

const LANGS = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { t, i18n } = useTranslation()

  const links = ["home", "services", "about", "portfolio", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

     
      const sections = links.map(l => document.getElementById(l)).filter(Boolean)
      const scrollY = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  useEffect(() => {
    const close = () => { setLangOpen(false) }
    if (langOpen) document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

  const currentLang = LANGS.find(l => l.code === i18n.language) || LANGS[0]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-black/30 py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
       
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center text-white font-black text-sm transition-transform group-hover:rotate-12 duration-300">
            SF
          </span>
          <span className="text-xl font-black text-white tracking-tight">
            Seven<span className="text-brand-orange">Fox</span>
          </span>
        </a>

   
        <ul className="hidden md:flex gap-1 items-center">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link
                    ? 'text-brand-orange'
                    : 'text-white/70 hover:text-white hover:bg-white/8'
                }`}
              >
                {t(`navbar.${link}`)}
                {activeSection === link && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          
          <div className="relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-white/80 hover:text-white border border-white/15 hover:border-white/30 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-60 min-w-[150px]">
                {LANGS.map(lng => (
                  <button
                    key={lng.code}
                    onClick={() => { i18n.changeLanguage(lng.code); setLangOpen(false) }}
                    className={`flex items-center gap-2 w-full px-4 py-2.5 text-left text-sm transition-colors ${
                      i18n.language === lng.code
                        ? 'bg-brand-orange/20 text-brand-orange'
                        : 'text-white/80 hover:bg-white/8 hover:text-white'
                    }`}
                  >
                    <span>{lng.flag}</span>
                    <span>{lng.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

        
          <a
            href="#contact"
            className="hidden md:block px-4 py-2 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-500 transition-all duration-200 glow-orange"
          >
            {t('hero.getQuote')}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

     
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-zinc-950 border-t border-white/8">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link
                      ? 'text-brand-orange bg-brand-orange/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(`navbar.${link}`)}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm"
              >
                {t('hero.getQuote')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
