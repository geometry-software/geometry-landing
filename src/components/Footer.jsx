import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const navLinks = ['home', 'services', 'about', 'portfolio', 'contact']

const services = ['frontend', 'backend', 'mobile', 'devops', 'automation', 'database']

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
    
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <span className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center text-white font-black text-sm">
                SF
              </span>
              <span className="text-xl font-black tracking-tight">
                Seven<span className="text-brand-orange">Fox</span>
              </span>
            </a>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
           
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              {t('footer.navTitle', 'Navigation')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-white/45 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {t(`navbar.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

 
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              {t('footer.servicesTitle', 'Services')}
            </h4>
            <ul className="space-y-2.5">
              {services.map(key => (
                <li key={key}>
                  <span className="text-white/45 text-sm">
                    {t(`services.items.${key}.title`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

    
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} SevenFox. {t('footer.rights', 'All rights reserved.')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/70 text-sm transition-colors">{t('footer.privacy', 'Privacy Policy')}</a>
            <a href="#" className="text-white/30 hover:text-white/70 text-sm transition-colors">{t('footer.terms', 'Terms of Service')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
