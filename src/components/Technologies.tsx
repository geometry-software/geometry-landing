import React from 'react'
import { useEffect, useState } from 'react'
import { X, Type, Code, Database, Box, Layers, Cpu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const technologies = [
  { key: 'typescript', color: '#3178C6', icon: Type },
  { key: 'angular', color: '#111111', icon: Code },
  { key: 'react', color: '#61DAFB', icon: Box },
  { key: 'reactNative', color: '#61DAFB', icon: Layers },
  { key: 'node', color: '#339933', icon: Cpu },
  { key: 'nestjs', color: '#E0234E', icon: Code },
  { key: 'next', color: '#21759B', icon: Code },
  { key: 'databases', color: '#F29111', icon: Database },
]

export default function Technologies() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }

    document.body.style.overflow = selected ? 'hidden' : 'auto'
    window.addEventListener('keydown', handleEsc)

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [selected])

  return (
    <section id="technologies" className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b border-[var(--color-border)] text-center fade-up">
          <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
            {t('technologies.eyebrow')}
          </div>

          <h2 className="mt-6 text-[34px] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] font-semibold md:text-[52px]">
            {t('technologies.title')}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
            {t('technologies.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map(({ key, icon: Icon, color }, index) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              className={`px-6 py-8 text-left transition-all hover:bg-[var(--color-primary-light)] ${
                index % 4 !== 3 ? 'lg:border-r border-[var(--color-border)]' : ''
              } ${
                index < technologies.length - 4 ? 'lg:border-b border-[var(--color-border)]' : ''
              } border-b sm:border-b border-[var(--color-border)] last:border-b-0`}
            >
              <Icon size={34} color={color} className="mb-4" />
              <div className="text-[20px] leading-tight tracking-[-0.03em] font-semibold text-[var(--color-ink)]">
                {t(`technologies.items.${key}.title`)}
              </div>
              <div className="mt-3 text-[14px] leading-6 text-black/55">
                {t(`technologies.items.${key}.short`)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-[rgba(10,15,28,0.28)] backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] px-8 py-6">
              <div>
                <h3 className="text-[30px] leading-none tracking-[-0.04em] font-semibold text-[var(--color-ink)]">
                  {t(`technologies.items.${selected}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-black/55">
                  {t(`technologies.items.${selected}.short`)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="h-11 w-11 border border-[var(--color-border)] bg-white text-[var(--color-ink)] flex items-center justify-center transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 px-8 py-8 text-[15px] leading-8 text-[var(--color-muted)]">
              <p>{t(`technologies.items.${selected}.paragraph1`)}</p>
              <p>{t(`technologies.items.${selected}.paragraph2`)}</p>
              <p>{t(`technologies.items.${selected}.paragraph3`)}</p>
              <p>{t(`technologies.items.${selected}.paragraph4`)}</p>
              <p>{t(`technologies.items.${selected}.paragraph5`)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}