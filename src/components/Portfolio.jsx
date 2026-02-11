import { useState } from 'react'
import img1 from '../assets/crud.png'
import { useTranslation } from 'react-i18next'

const projects = [
  { titleKey: 'portfolio.projects.crm', category: 'web', image: img1 },
  { titleKey: 'portfolio.projects.ecommerce', category: 'web', image: img1 },
  { titleKey: 'portfolio.projects.banking', category: 'mobile', image: img1 },
  { titleKey: 'portfolio.projects.inventory', category: 'api', image: img1 },
  { titleKey: 'portfolio.projects.reporting', category: 'automation', image: img1 },
]

const categories = ['all', 'web', 'mobile', 'api', 'automation']

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 px-6 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {t('portfolio.title')}
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('portfolio.description')}
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full border
                transition-all duration-300
                ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white hover:bg-brand-orange hover:text-white hover:shadow-md'
                }
              `}
            >
              {t(`portfolio.categories.${cat}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(p => (
            <div
              key={p.titleKey}
              className="
                group relative overflow-hidden rounded-2xl
                shadow-md
                transition-all duration-300 ease-out
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              <img
                src={p.image}
                alt={t(p.titleKey)}
                className="
                  w-full h-64 object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-black/50
                  flex flex-col items-center justify-center
                  text-white text-center px-4
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              >
                <h3 className="text-xl font-semibold mb-1">
                  {t(p.titleKey)}
                </h3>
                <p className="text-sm opacity-80">
                  {t(`portfolio.categories.${p.category}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
