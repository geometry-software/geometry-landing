import bgAbout from '../assets/background-about.png' 
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-[500px] w-full bg-cover bg-center" id='about'
      style={{ backgroundImage: `url(${bgAbout})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24 text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('about.title')}
        </h2>

        <p className="text-gray/80 mb-6 max-w-3xl mx-auto">
          {t('about.text1')}
        </p>
        <p className="text-gray/80 mb-6 max-w-3xl mx-auto">
          {t('about.text2')}
        </p>

        <button className="px-6 py-3 bg-brand-gray text-white rounded-lg hover:bg-brand-orange">
          {t('hero.getQuote')} 
        </button>
      </div>
    </section>
  )
}
