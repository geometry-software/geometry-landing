import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/crud.png'
import bgImage from '../assets/background1.png'
import bgAbout from '../assets/background-about.png'

const projects = [
  { key: 'crm', category: 'web', image: img1 },
  { key: 'platform', category: 'web', image: bgImage },
  { key: 'mobile', category: 'mobile', image: bgAbout },
  { key: 'api', category: 'api', image: img1 },
  { key: 'automation', category: 'automation', image: bgImage },
]

const categories = ['all', 'web', 'mobile', 'api', 'automation']

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b border-[var(--color-border)] fade-up">
          <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
            {t('portfolio.eyebrow')}
          </div>

          <h2 className="mt-6 max-w-4xl text-[34px] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] font-semibold md:text-[52px]">
            {t('portfolio.title')}
          </h2>

          <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
            {t('portfolio.description')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`h-11 px-5 border text-[12px] font-medium uppercase tracking-[0.14em] transition-all ${
                  activeCategory === cat
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-soft)]'
                    : 'border-[var(--color-border)] bg-white text-black/70 hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]'
                }`}
              >
                {t(`portfolio.categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.key}
              className={`group transition-colors hover:bg-[var(--color-primary-light)] ${
                index % 3 !== 2 ? 'xl:border-r' : ''
              } ${
                index < filteredProjects.length - 3 ? 'xl:border-b' : ''
              } border-[var(--color-border)] border-b md:border-b`}
            >
              <div className="relative h-72 overflow-hidden border-b border-[var(--color-border)]">
                <img
                  src={project.image}
                  alt={t(`portfolio.projects.${project.key}.title`)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(37,99,235,0.09))]" />
                <div className="absolute left-5 top-5 border border-[var(--color-primary-border)] bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                  {t(`portfolio.categories.${project.category}`)}
                </div>
              </div>

              <div className="px-6 py-6 md:px-8 md:py-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[28px] leading-[1] tracking-[-0.04em] font-semibold text-[var(--color-ink)]">
                    {t(`portfolio.projects.${project.key}.title`)}
                  </h3>
                  <div className="h-11 w-11 border border-[var(--color-border)] bg-white text-[var(--color-ink)] flex items-center justify-center transition-all group-hover:border-[var(--color-primary-border)] group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-8 text-[var(--color-muted)]">
                  {t(`portfolio.projects.${project.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}