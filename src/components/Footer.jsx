import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const links = ['home', 'services', 'about', 'portfolio', 'contact']

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-xl font-bold">SevenFox</span>
          <p className="text-white/80 text-sm text-center md:text-left">
            {t('footer.description', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptates...')}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-[var(--color-brand-orange)] transition-colors"
            >
              {t(`navbar.${link}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-center md:justify-end gap-4">
          <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-sm max-w-6xl mx-auto px-6">
        &copy; {new Date().getFullYear()} SevenFox. {t('footer.rights', 'All rights reserved.')}
      </div>
    </footer>
  )
}
