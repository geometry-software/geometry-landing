import { ArrowRight, Check, Clock3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SmallBusinessCrm from './LightCrm'

const pilotHighlights = [
  'uiux',
  'frontend',
  'backend',
  'database',
  'validation',
  'performance',
  'integrations',
  'aiAgent',
]

const pilotCapabilities = ['design', 'product', 'data', 'quality']

export default function PilotOffer() {
  const { t } = useTranslation()

  return (
    <section id="pilot" className="bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden border border-[var(--color-primary-border)] bg-[var(--color-primary-light)] p-8 text-[var(--color-ink)] shadow-[var(--shadow-card)] soft-reveal md:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/40">
              {t('pricing.pilot.eyebrow')}
            </div>
            <h2 className="mt-5 max-w-2xl text-[36px] font-semibold leading-[0.95] tracking-[-0.055em] md:text-[54px]">
              {t('pricing.pilot.title')}
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[var(--color-muted)]">
              {t('pricing.pilot.description')}
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-[var(--color-primary)] pl-5 text-[18px] font-medium leading-8 text-[var(--color-ink)]">
              {t('pricing.pilot.message')}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {pilotHighlights.map((key) => (
                <span key={key} className="border border-[var(--color-primary-border)] bg-white/70 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {t(`pricing.pilot.highlights.${key}`)}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-[var(--color-primary-border)] bg-white/70 p-6 md:p-8">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {t('pricing.pilot.pilotPrice')}
            </div>
            <div className="mt-2 text-[36px] font-semibold tracking-[-0.05em]">R$ 2.900</div>
            <div className="mt-5 flex items-start gap-3 border-t border-[var(--color-primary-border)] pt-5 text-[14px] leading-6 text-[var(--color-muted)]">
              <Clock3 className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={18} />
              {t('pricing.pilot.timeline')}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {pilotCapabilities.map((key) => (
                <div key={key} className="flex items-start gap-2 text-[13px] leading-6 text-[var(--color-muted)]">
                  <Check className="mt-1 shrink-0 text-[var(--color-primary)]" size={14} />
                  {t(`pricing.pilot.capabilities.${key}`)}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 bg-[var(--color-primary)] px-5 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-all hover:bg-[var(--color-primary-dark)]"
            >
              {t('pricing.pilot.cta')}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <SmallBusinessCrm />
    </section>
  )
}
