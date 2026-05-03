import { Monitor, Server, Palette, Bot } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const services = [
  { key: 'frontend', icon: Monitor, price: 150 },
  { key: 'backend', icon: Server, price: 150 },
  { key: 'webDesign', icon: Palette, price: 80 },
  { key: 'agents', icon: Bot, price: 200 },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b border-[var(--color-border)] fade-up">
          <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
            {t('services.eyebrow')}
          </div>

          <h2 className="mt-6 max-w-4xl text-[34px] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] font-semibold md:text-[52px]">
            {t('services.title')}
          </h2>

          <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-4">
          {services.map(({ key, icon: Icon, price }, index) => (
            <div
              key={key}
              className={`p-8 transition-all hover:bg-[var(--color-primary-light)] ${index !== services.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''
                } border-[var(--color-border)]`}
            >
              <div className="h-14 w-14 border border-[var(--color-primary-border)] bg-white flex items-center justify-center text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 text-[28px] leading-[1] tracking-[-0.04em] font-semibold text-[var(--color-ink)]">
                {t(`services.items.${key}.title`)}
              </h3>

              <p className="mt-6 text-[15px] leading-8 text-[var(--color-muted)]">
                {t(`services.items.${key}.description`)}
              </p>

              <div className="mt-8 text-[13px] uppercase tracking-[0.16em] text-[var(--color-primary)] font-medium">
                {t('common.from')}: ${price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}