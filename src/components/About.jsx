import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CheckCircle, Users, Code2, Zap } from 'lucide-react'

const stats = [
  { icon: Code2, valueKey: 'about.stat1Value', labelKey: 'about.stat1Label' },
  { icon: Users, valueKey: 'about.stat2Value', labelKey: 'about.stat2Label' },
  { icon: CheckCircle, valueKey: 'about.stat3Value', labelKey: 'about.stat3Label' },
  { icon: Zap, valueKey: 'about.stat4Value', labelKey: 'about.stat4Label' },
]

export default function About() {
  const { t } = useTranslation()
  const ref = useScrollReveal()

  return (
    <section
      id='about'
      className="py-28 px-6 bg-brand-dark"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
     
        <div className="text-center mb-16 reveal">
          <div className="section-divider" />
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">{t('about.eyebrow', 'Who We Are')}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle', 'A passionate team of engineers and designers building scalable digital products.')}
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
       
          <div className="reveal reveal-delay-1">
            <p className="text-white/65 leading-relaxed mb-6 text-lg">
              {t('about.text1')}
            </p>
            <p className="text-white/65 leading-relaxed mb-8 text-lg">
              {t('about.text2')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-500 transition-all duration-300 glow-orange hover:scale-105"
            >
              {t('hero.getQuote')}
            </a>
          </div>

    
          <div className="reveal reveal-delay-2">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/8 p-8">
            
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-[50px]" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, valueKey, labelKey }) => (
                  <div
                    key={labelKey}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-orange/40 hover:bg-white/8 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-brand-orange mb-3" />
                    <div className="text-2xl font-black text-white">{t(valueKey)}</div>
                    <div className="text-xs text-white/50 mt-1">{t(labelKey)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
