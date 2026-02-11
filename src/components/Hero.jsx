import bgImage from '../assets/background1.png'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id='home'
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-3xl text-center text-[var(--color-brand-orange)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line">
          {t('hero.title')}
        </h1>

        <p className="text-black mb-8">{t('hero.description')}</p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-brand-gray text-brand-white rounded-lg hover:bg-brand-gray/90">
            {t('hero.getQuote')}
          </button>

          <button className="px-6 py-3 border border-brand-gray rounded-lg hover:bg-brand-silver">
            {t('hero.hireUs')}
          </button>
        </div>
      </div>
    </section>
  )
}
