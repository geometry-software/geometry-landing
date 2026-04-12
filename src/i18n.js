import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
}

const browserLang =
  typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'en'

const defaultLang = ['en', 'es', 'pt'].includes(browserLang) ? browserLang : 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n