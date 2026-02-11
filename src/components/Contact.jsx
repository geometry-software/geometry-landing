import { useState } from 'react'
import bgContact from '../assets/background-about.png'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ email: '', name: '', message: '' })
  const [status, setStatus] = useState(null)

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
      className="relative min-h-[600px] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgContact})` }}
    >
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">
          {t('contact.title')}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/80 p-10 rounded-3xl backdrop-blur shadow-xl"
        >
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={t('contact.email')}
            className="p-4 rounded-xl border border-brand-gray/20 text-gray-800 w-full"
          />

          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={t('contact.name')}
            className="p-4 rounded-xl border border-brand-gray/20 text-gray-800 w-full"
          />

          <textarea
            name="message"
            required
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder={t('contact.message')}
            className="p-4 rounded-xl border border-brand-gray/20 text-gray-800 w-full md:col-span-2"
          />

          <button
            type="submit"
            className="bg-brand-gray text-white py-4 rounded-xl text-lg font-medium md:col-span-2 hover:bg-brand-gray/90"
          >
            {status === 'loading' ? t('contact.sending') : t('contact.submit')}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-sm text-center md:col-span-2 mt-2">
              {t('contact.success')}
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-sm text-center md:col-span-2 mt-2">
              {t('contact.error')}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
