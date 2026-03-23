import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, MapPin, Clock, Phone } from 'lucide-react'

const contactInfo = [
  { icon: Mail, labelKey: 'contact.infoEmail', value: 'hellogeometrysoftware@gmail.com' },
  { icon: Phone, labelKey: 'contact.infoPhone', value: '+55 (555) 000-0000' },
  { icon: MapPin, labelKey: 'contact.infoLocation', value: 'Remote · Worldwide' },
  { icon: Clock, labelKey: 'contact.infoHours', value: 'Mon–Fri, 9am–6pm EST' },
]

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ email: '', name: '', message: '' })
  const [status, setStatus] = useState(null)
  const ref = useScrollReveal()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xxxxxxx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ email: '', name: '', message: '' })
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-brand-dark"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16 reveal">
          <div className="section-divider" />
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            {t('contact.eyebrow', 'Get In Touch')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t('contact.subtitle', "Ready to build something great? Let's talk.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
        
          <div className="lg:col-span-2 space-y-5 reveal reveal-delay-1">
            {contactInfo.map(({ icon: Icon, labelKey, value }) => (
              <div
                key={labelKey}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/4 border border-white/8 hover:border-brand-orange/30 hover:bg-white/6 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">{t(labelKey)}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

           
            <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-500 mt-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 blur-xl" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-2">
                  {t('contact.ctaTitle', 'Start a Project')}
                </h3>
                <p className="text-white/80 text-sm">
                  {t('contact.ctaText', 'From idea to launch — we handle everything.')}
                </p>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/4 border border-white/8 rounded-3xl p-8 space-y-5"
            >
             
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.name')}
                    className="w-full bg-white/6 border border-white/10 focus:border-brand-orange/60 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-white/30 text-sm outline-none transition-all duration-200"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.email')}
                    className="w-full bg-white/6 border border-white/10 focus:border-brand-orange/60 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-white/30 text-sm outline-none transition-all duration-200"
                  />
                </div>
              </div>

           
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/30 pointer-events-none" />
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.message')}
                  className="w-full bg-white/6 border border-white/10 focus:border-brand-orange/60 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-white/30 text-sm outline-none transition-all duration-200 resize-none"
                />
              </div>

            
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white py-4 rounded-xl text-sm font-bold hover:bg-orange-500 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed glow-orange"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.submit')}
                  </>
                )}
              </button>

              
              {status === 'success' && (
                <div className="flex items-center gap-3 bg-green-500/15 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  {t('contact.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-500/15 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {t('contact.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
