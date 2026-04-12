import { Sparkles, Rocket, Blocks } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const items = [
  { key: 'craft', icon: Sparkles },
  { key: 'delivery', icon: Rocket },
  { key: 'stack', icon: Blocks },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] fade-up">
            <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
              {t('about.eyebrow')}
            </div>

            <h2 className="mt-6 max-w-4xl text-[34px] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] font-semibold md:text-[52px]">
              {t('about.title')}
            </h2>

            <p className="mt-8 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
              {t('about.text1')}
            </p>

            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
              {t('about.text2')}
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex h-14 items-center justify-center bg-[var(--color-primary)] px-8 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all hover:bg-[var(--color-primary-soft)] hover:shadow-[var(--shadow-soft)]"
            >
              {t('about.cta')}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
            {items.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className={`px-8 py-8 md:px-10 transition-colors hover:bg-[var(--color-primary-light)] ${
                  index !== items.length - 1 ? 'border-b border-[var(--color-border)]' : ''
                } sm:${index < 2 ? 'border-r' : ''} lg:border-r-0 lg:border-b border-[var(--color-border)] last:border-b-0`}
              >
                <div className="h-12 w-12 border border-[var(--color-primary-border)] bg-white flex items-center justify-center text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-[22px] leading-tight tracking-[-0.04em] font-semibold text-[var(--color-ink)]">
                  {t(`about.items.${key}.title`)}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[var(--color-muted)]">
                  {t(`about.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}