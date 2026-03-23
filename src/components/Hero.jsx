import bgImage from '../assets/background1.png'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id='home'
      className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-brand-blue/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

    
      <div className="relative z-10 max-w-4xl mx-auto text-center">
 
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-white/80 text-sm">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          {t('hero.badge', 'Full-Stack Software Agency')}
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line">
          {t('hero.titleLine1', 'New Age of')}
          <br />
          <span className="gradient-text">{t('hero.titleLine2', 'Business Models')}</span>
        </h1>

        <p className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-500 transition-all duration-300 glow-orange hover:scale-105"
          >
            {t('hero.getQuote')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <Play className="w-4 h-4" />
            {t('hero.seeWork', 'See Our Work')}
          </a>
        </div>

     
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10+', label: t('hero.stat1', 'Projects') },
            { value: '5+', label: t('hero.stat2', 'Years Exp.') },
            { value: '100%', label: t('hero.stat3', 'Satisfaction') },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-brand-orange">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce">
        <span>{t('hero.scroll', 'Scroll')}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
