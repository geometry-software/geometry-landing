import { Monitor, Server, Cloud, Smartphone, RefreshCw, Database } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { key: 'frontend', icon: Monitor, color: '#61DAFB', gradient: 'from-cyan-500/20 to-blue-500/10' },
  { key: 'backend', icon: Server, color: '#68A063', gradient: 'from-green-500/20 to-emerald-500/10' },
  { key: 'mobile', icon: Smartphone, color: '#DD0031', gradient: 'from-red-500/20 to-pink-500/10' },
  { key: 'devops', icon: Cloud, color: '#f56300', gradient: 'from-orange-500/20 to-amber-500/10' },
  { key: 'automation', icon: RefreshCw, color: '#A855F7', gradient: 'from-purple-500/20 to-violet-500/10' },
  { key: 'database', icon: Database, color: '#F29111', gradient: 'from-amber-500/20 to-orange-500/10' },
]

export default function Services() {
  const { t } = useTranslation()
  const ref = useScrollReveal()

  return (
    <section
      id="services"
      className="py-28 px-6 bg-brand-dark2"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 reveal">
          <div className="section-divider" />
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">{t('services.eyebrow', 'What We Do')}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

    
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon: Icon, color, gradient }, i) => (
            <div
              key={key}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div
                className={`
                  group relative h-full
                  bg-gradient-to-br ${gradient}
                  border border-white/8
                  hover:border-white/20
                  p-8 rounded-2xl
                  transition-all duration-400 ease-out
                  hover:shadow-2xl hover:-translate-y-2
                  cursor-default
                `}
              >
              
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-xl"
                  style={{ backgroundColor: color + '15' }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color + '20' }}
                  >
                    <Icon size={26} color={color} />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">
                    {t(`services.items.${key}.title`)}
                  </h3>

                  <p className="text-white/55 text-sm leading-relaxed">
                    {t(`services.items.${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
