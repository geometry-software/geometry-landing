import { RefreshCw, Globe, Cuboid } from "lucide-react"
import { useTranslation } from 'react-i18next'

const services = [
  { key: 'architecture', icon: Cuboid },
  { key: 'automation', icon: RefreshCw },
  { key: 'global', icon: Globe },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <section
      id="services"
      className="py-24 px-6 bg-gradient-to-br from-brand-orange to-orange-300"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          {t('services.title')}
        </h2>

        <p className="text-center text-white/80 mb-12">
          {t('services.subtitle')}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="
                group
                bg-white p-8 rounded-2xl
                shadow-md
                transition-all duration-300 ease-out
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              <Icon
                className="
                  w-10 h-10 mb-4 text-brand-blue
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              <h3 className="font-semibold mb-2">
                {t(`services.items.${key}.title`)}
              </h3>

              <p className="text-sm text-gray-600">
                {t(`services.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
