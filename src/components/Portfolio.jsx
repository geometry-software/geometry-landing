import { useState } from 'react'
import img1 from '../assets/crud.png'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    titleKey: 'portfolio.projects.crm',
    descKey: 'portfolio.projects.crmDesc',
    category: 'web',
    image: img1,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    badge: 'Web App',
  },
  {
    titleKey: 'portfolio.projects.ecommerce',
    descKey: 'portfolio.projects.ecommerceDesc',
    category: 'web',
    image: img1,
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    badge: 'Web App',
  },
  {
    titleKey: 'portfolio.projects.banking',
    descKey: 'portfolio.projects.bankingDesc',
    category: 'mobile',
    image: img1,
    tags: ['React Native', 'NestJS', 'Firebase'],
    badge: 'Mobile',
  },
  {
    titleKey: 'portfolio.projects.inventory',
    descKey: 'portfolio.projects.inventoryDesc',
    category: 'api',
    image: img1,
    tags: ['NestJS', 'Redis', 'Docker'],
    badge: 'API',
  },
  {
    titleKey: 'portfolio.projects.reporting',
    descKey: 'portfolio.projects.reportingDesc',
    category: 'automation',
    image: img1,
    tags: ['Node.js', 'Python', 'AWS Lambda'],
    badge: 'Automation',
  },
]

const categories = ['all', 'web', 'mobile', 'api', 'automation']

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useScrollReveal()

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-28 px-6 bg-brand-dark2" id="portfolio" ref={ref}>
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-12 reveal">
          <div className="section-divider" />
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">{t('portfolio.eyebrow', 'Our Work')}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

       
        <div className="flex justify-center gap-2 mb-12 flex-wrap reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold
                transition-all duration-300
                ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white/8 text-white/60 border border-white/10 hover:bg-white/15 hover:text-white'
                }
              `}
            >
              {t(`portfolio.categories.${cat}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <div
              key={p.titleKey}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl bg-zinc-900">
            
                <div className="relative overflow-hidden h-52">
                  <img
                    src={p.image}
                    alt={t(p.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
             
                  <span className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                 
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 text-white font-semibold text-sm border border-white/40 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                      {t('portfolio.viewProject', 'View Project')}
                    </span>
                  </div>
                </div>

       
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2">{t(p.titleKey)}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {t(p.descKey, 'A custom-built solution tailored to client needs, delivering high performance and scalability.')}
                  </p>
               
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/60 bg-white/8 border border-white/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
