import { useState } from 'react'
import { Mail, Clock3, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ email: '', name: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error()

      setStatus('success')
      setForm({ email: '', name: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] fade-up">
            <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
              {t('contact.eyebrow')}
            </div>

            <h2 className="mt-6 text-[34px] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] font-semibold md:text-[52px]">
              {t('contact.title')}
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
              {t('contact.description')}
            </p>

            <div className="mt-10 space-y-4">
              <div className="border border-[var(--color-border)] p-5 transition-colors hover:bg-[var(--color-primary-light)]">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 border border-[var(--color-primary-border)] bg-white flex items-center justify-center text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-black/40">
                      {t('contact.info.emailTitle')}
                    </div>
                    <div className="mt-2 text-[16px] text-[var(--color-ink)]">
                      {t('contact.info.emailValue')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--color-border)] p-5 transition-colors hover:bg-[var(--color-primary-light)]">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 border border-[var(--color-primary-border)] bg-white flex items-center justify-center text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                    <Clock3 size={18} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-black/40">
                      {t('contact.info.replyTitle')}
                    </div>
                    <div className="mt-2 text-[16px] text-[var(--color-ink)]">
                      {t('contact.info.replyValue')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
                className="h-14 border border-[var(--color-border)] bg-white px-5 text-[var(--color-ink)] placeholder:text-black/40 outline-none transition-all"
              />

              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.email')}
                className="h-14 border border-[var(--color-border)] bg-white px-5 text-[var(--color-ink)] placeholder:text-black/40 outline-none transition-all"
              />

              <textarea
                name="message"
                required
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.message')}
                className="border border-[var(--color-border)] bg-white px-5 py-4 text-[var(--color-ink)] placeholder:text-black/40 outline-none resize-none transition-all"
              />

              <button
                type="submit"
                className="h-14 bg-[var(--color-primary)] text-white text-[12px] font-medium uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all hover:bg-[var(--color-primary-soft)] hover:shadow-[var(--shadow-soft)]"
              >
                <Send size={16} />
                {status === 'loading' ? t('contact.sending') : t('contact.submit')}
              </button>

              {status === 'success' && (
                <p className="text-[14px] text-[var(--color-muted)]">{t('contact.success')}</p>
              )}

              {status === 'error' && (
                <p className="text-[14px] text-[var(--color-muted)]">{t('contact.error')}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}