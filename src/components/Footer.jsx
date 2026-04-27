import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-white px-6">
      <div className="max-w-6xl mx-auto border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="grid gap-8 p-[40px] lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div>
            <div className="logo">
              <span>Geometry</span>
            </div>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--color-muted)]">
              {t('footer.description')}
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-[12px] uppercase tracking-[0.16em]">
            {['home', 'about', 'services', 'technologies', 'portfolio', 'contact'].map(link => (
              <a
                key={link}
                href={`#${link}`}
                style={{ cursor: 'default' }}
                className="text-black/55 transition-colors hover:text-[var(--color-primary)]"
              >
                {t(`navbar.${link}`)}
              </a>
            ))}
          </nav>

          {/* <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="h-11 w-11 border border-[var(--color-border)] bg-white text-[var(--color-ink)] flex items-center justify-center transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-[var(--shadow-soft)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div> */}
        </div>

        <div className="border-t border-[var(--color-border)] px-8 py-5 md:px-12 text-[12px] uppercase tracking-[0.16em] text-black/40">
          © {new Date().getFullYear()}, www.Geometry. {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}