import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)

  const links = ["home", "services", "about", "portfolio", "contact"]

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  return (
    <header className="fixed top-0 w-full z-50 bg-black">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-white">SevenFox</span>

        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-white font-bold hover:text-[var(--color-brand-orange)] transition-colors"
              >
                {t(`navbar.${link}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Selector de idioma */}
        <div className="relative ml-4">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="text-white border px-2 py-1 rounded"
          >
            {i18n.language.toUpperCase()}
          </button>
          {langOpen && (
            <div className="absolute top-full left-0 bg-white text-black rounded shadow mt-1">
              {['en', 'es', 'pt'].map(lng => (
                <button
                  key={lng}
                  onClick={() => { changeLanguage(lng); setLangOpen(false) }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm">
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-[var(--color-brand-orange)] transition-colors"
                >
                  {t(`navbar.${link}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
