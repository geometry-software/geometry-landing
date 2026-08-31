import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  FileSpreadsheet,
  FolderOpen,
  Mail,
  MessageCircle,
  Zap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const featureKeys = [
  'backend',
  'cloud',
  'appsScript',
  'whatsapp',
  'sheets',
]

export default function SmallBusinessCrm() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto mt-8 max-w-6xl overflow-hidden border border-[#dbe8dd] bg-[#fbfdfb] shadow-[var(--shadow-card)] soft-reveal">
        <div className="grid lg:grid-cols-[2.5fr_1fr]">
          <div className="border-b border-[#dbe8dd] px-8 py-9 md:px-12 md:py-10 lg:border-b-0 lg:border-r">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/40">
              {t('lightCrm.eyebrow')}
            </div>

            <h2 className="mt-6 max-w-2xl text-[30px] font-semibold leading-[1] tracking-[-0.045em] text-[var(--color-ink)] md:text-[40px]">
              {t('lightCrm.title')}
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--color-muted)]">
              {t('lightCrm.description1')}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featureKeys.map((key) => (
                <span key={key} className="border border-black/10 bg-white/80 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {t(`lightCrm.features.${key}`)}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/45">
                  {t('lightCrm.priceLabel')}
                </div>
                <div className="mt-1 text-[30px] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  R$ 3.900
                </div>
                <div className="mt-1 text-[13px] text-[var(--color-muted)]">
                  {t('lightCrm.timeline')}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 bg-[var(--color-ink)] px-6 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-all hover:bg-[var(--color-primary)]"
              >
                {t('lightCrm.cta')}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="flex items-center bg-white p-5 md:p-6 lg:p-7">
            <div className="relative z-10 w-full">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-[#bce9ca] bg-[#effff4] p-3 text-[#187a35] shadow-[var(--shadow-soft)]">
                    <MessageCircle size={17} />
                    <div className="text-[11px] font-semibold">WhatsApp</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#ffd0cb] bg-[#fff3f1] p-3 text-[#c23b2f] shadow-[var(--shadow-soft)]">
                    <Mail size={17} />
                    <div className="text-[11px] font-semibold">Gmail</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="flex min-h-20 flex-col justify-between gap-2 rounded-xl border border-[#bce9ca] bg-[#effff4] p-3 text-[#187a35] shadow-[var(--shadow-soft)]">
                    <FileSpreadsheet size={17} />
                    <div className="text-[10px] font-semibold leading-tight">Sheets / Excel</div>
                  </div>
                  <div className="flex min-h-20 flex-col justify-between gap-2 rounded-xl border border-[#c6dcff] bg-[#f2f7ff] p-3 text-[#2867c7] shadow-[var(--shadow-soft)]">
                    <CalendarDays size={17} />
                    <div className="text-[10px] font-semibold leading-tight">Google Calendar</div>
                  </div>
                  <div className="flex min-h-20 flex-col justify-between gap-2 rounded-xl border border-[#b8d4ff] bg-[#edf5ff] p-3 text-[#1769c2] shadow-[var(--shadow-soft)]">
                    <FolderOpen size={17} />
                    <div className="text-[10px] font-semibold leading-tight">Drive</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-2 text-black/20">
                <ArrowDown size={16} />
              </div>

              <div className="rounded-xl border border-[#ffe3a5] bg-[#fff9e8] p-4 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3 text-[#8a6100]">
                  <Zap size={18} />
                  <div>
                    <div className="text-[13px] font-semibold">Google Apps Script</div>
                    <div className="mt-1 text-[11px] text-[#8a6100]/70">{t('lightCrm.flow.automation')}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}
