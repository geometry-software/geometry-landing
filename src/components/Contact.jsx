import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const contactItems = [
  {
    key: 'email',
    icon: Mail,
    href: 'mailto:hellogeometrysoftware@gmail.com',
    value: 'hellogeometrysoftware@gmail.com',
  },
  {
    key: 'address',
    icon: MapPin,
    href: 'https://www.google.com/maps/search/?api=1&query=Av.+Hercílio+Luz,+639+-+11+Andar,+Centro,+Florianópolis',
    value: 'Av. Hercílio Luz, 639 - 11° Andar, Centro, Florianópolis',
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    href: 'https://wa.me/5548991081987',
    value: '+55 48 99108-1987',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-white px-4 py-8 sm:px-6 sm:py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-hidden border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] fade-up min-w-0">
            <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
              {t('contact.eyebrow')}
            </div>

            <h2 className="mt-6 text-[32px] leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] font-semibold md:text-[52px]">
              {t('contact.title')}
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
              {t('contact.description')}
            </p>

            <div className="mt-10 space-y-4">
              {contactItems.map(({ key, icon: Icon, href, value }) => (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel={key === 'email' ? undefined : 'noreferrer'}
                  className="block border border-[var(--color-border)] p-4 sm:p-5 transition-colors hover:bg-[var(--color-primary-light)] overflow-hidden"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="h-11 w-11 min-w-[44px] border border-[var(--color-primary-border)] bg-white flex items-center justify-center text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[12px] uppercase tracking-[0.16em] text-black/40">
                        {t(`contact.info.${key}Title`)}
                      </div>

                      <div
                        className={`mt-2 text-[16px] text-[var(--color-ink)] ${key === 'email'
                          ? 'break-all'
                          : 'break-words'
                          }`}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 min-w-0">
            <div className="w-full overflow-hidden border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]">
              <iframe
                title="Geometry location"
                src="https://www.google.com/maps?q=Av.+Hercílio+Luz,+639+-+11+Andar,+Centro,+Florianópolis&z=16&output=embed"
                className="block w-full h-[320px] sm:h-[380px] lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}