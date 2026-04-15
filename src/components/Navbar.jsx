import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  const links = ['home', 'about', 'services', 'technologies', 'portfolio', 'contact']

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLangOpen(false)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    const offset = 80
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setLangOpen(false)
    setOpen(false)

    requestAnimationFrame(() => {
      scrollToSection(id)
    })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled
          ? 'bg-white border-b border-[var(--color-border)] shadow-[0_12px_30px_rgba(10,15,28,0.06)]'
          : 'bg-white border-b border-[var(--color-border)]'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-[26px] md:text-[30px] font-semibold tracking-[-0.06em] text-[var(--color-ink)]"
        >
          Geometry
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[12px] font-medium uppercase tracking-[0.18em] text-black/60 transition-colors hover:text-[var(--color-primary)]"
              >
                {t(`navbar.${link}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="h-11 min-w-[76px] px-4 border border-[var(--color-border)] bg-white text-[var(--color-ink)] flex items-center justify-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {i18n.language.toUpperCase()}
              <ChevronDown size={14} />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-[120px] overflow-hidden border border-[var(--color-border)] bg-white shadow-[0_18px_50px_rgba(10,15,28,0.10)]">
                {['en', 'es', 'pt'].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="w-full px-4 py-3 text-left text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="h-11 px-5 bg-[var(--color-primary)] text-white inline-flex items-center justify-center text-[12px] font-medium uppercase tracking-[0.16em] transition-colors hover:bg-[var(--color-primary-soft)]"
          >
            {t('hero.hireUs')}
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden h-11 w-11 border border-[var(--color-border)] bg-white text-[var(--color-ink)] flex items-center justify-center"
          aria-label="Open menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[var(--color-ink)] py-2 text-[12px] font-medium uppercase tracking-[0.18em]"
              >
                {t(`navbar.${link}`)}
              </a>
            ))}

            <div className="flex gap-2 pt-2">
              {['en', 'es', 'pt'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className="px-4 h-11 border border-[var(--color-border)] bg-white text-[var(--color-ink)] text-[12px] font-medium uppercase tracking-[0.12em]"
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 h-12 bg-[var(--color-primary)] text-white text-[12px] font-medium uppercase tracking-[0.16em] flex items-center justify-center"
            >
              {t('hero.hireUs')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}