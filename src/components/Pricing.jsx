import { ArrowRight, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const plans = [
  { key: 'expertise', price: '1.900' },
  { key: 'frontend', price: '4.900' },
  { key: 'full', price: '7.900' },
]

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="border-b border-[var(--color-border)] px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 fade-up">
          <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
            {t('pricing.eyebrow')}
          </div>
          <h2 className="mt-6 max-w-4xl text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] md:text-[52px]">
            {t('pricing.title')}
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
            {t('pricing.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3">
          {plans.map(({ key, price }, index) => (
            <article
              key={key}
              className={`flex min-w-0 flex-col bg-white p-8 md:p-10 ${index !== plans.length - 1 ? 'border-b border-[var(--color-border)] lg:border-b-0 lg:border-r' : ''}`}
            >
              <h3 className="min-h-[52px] text-[22px] font-semibold leading-[1.15] tracking-[-0.04em] text-[var(--color-ink)]">
                {t(`pricing.plans.${key}.title`)}
              </h3>
              <p className="mt-4 min-h-14 text-[14px] leading-7 text-[var(--color-muted)]">
                {t(`pricing.plans.${key}.description`)}
              </p>

              <div className="mt-7 border-y border-[var(--color-border)] py-6">
                <span className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                  {t('pricing.modulePrice')}
                </span>
                <div className="mt-1 text-[34px] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  R$ {price}
                </div>
              </div>

              <ul className="mt-7 flex-1 space-y-4">
                {t(`pricing.plans.${key}.features`, { returnObjects: true }).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14px] leading-6 text-[var(--color-muted)]">
                    <Check className="mt-1 shrink-0 text-[var(--color-primary)]" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {key === 'frontend' && (
                <div className="mt-8 border-t border-[var(--color-primary-border)] pt-6">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]">
                    {t('pricing.plans.frontend.mobileAddon')}
                  </div>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <span className="text-[16px] font-semibold text-[var(--color-ink)]">+ R$ 2.000</span>
                    <span className="text-right text-[13px] text-[var(--color-muted)]">
                      {t('pricing.plans.frontend.mobileTotal')}
                    </span>
                  </div>
                </div>
              )}

              <a
                href="#contact"
                className="mt-9 inline-flex h-12 items-center justify-center gap-2 border border-[var(--color-border)] bg-white px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-ink)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                {t('pricing.planCta')}
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
