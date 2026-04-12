import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import bgImage from '../assets/background1.png'
import bgAbout from '../assets/background-about.png'
import img1 from '../assets/crud.png'

const slides = [
  { key: 'slide1', image: bgImage },
  { key: 'slide2', image: bgAbout },
  { key: 'slide3', image: img1 },
]

export default function Hero() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="bg-white px-6 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="border border-black/10 bg-white">
          <div className="grid lg:grid-cols-[1fr_1.2fr] min-h-[78vh]">
            <div className="flex flex-col justify-between px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 border-b lg:border-b-0 lg:border-r border-black/10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
                  {t(`hero.slides.${slides[active].key}.eyebrow`)}
                </div>

                <h1 className="mt-6 max-w-[10ch] text-[42px] leading-[0.95] tracking-[-0.06em] text-black font-semibold md:text-[64px] lg:text-[84px]">
                  {t(`hero.slides.${slides[active].key}.title`)}
                </h1>

                <p className="mt-8 max-w-xl text-[15px] leading-8 text-black/60 md:text-[16px]">
                  {t(`hero.slides.${slides[active].key}.description`)}
                </p>

                <a
                  href="#contact"
                  className="mt-10 inline-flex h-14 items-center justify-center bg-black px-8 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85"
                >
                  {t('hero.hireUs')}
                </a>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6 fade-up">
                <div>
                  <div className="text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-[30px]">
                    Web
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    Interfaces
                  </div>
                </div>

                <div>
                  <div className="text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-[30px]">
                    API
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    Systems
                  </div>
                </div>

                <div>
                  <div className="text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-[30px]">
                    AI
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    Agents
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-full bg-[#f5f5f5]">
              {slides.map((slide, index) => (
                <div
                  key={slide.key}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  <img
                    src={slide.image}
                    alt={t(`hero.slides.${slide.key}.title`)}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white/12" />
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 border-t border-black/10 bg-white/94 backdrop-blur-sm">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.key}
                        onClick={() => setActive(index)}
                        className={`transition-all ${index === active ? 'h-[2px] w-12 bg-black' : 'h-[2px] w-5 bg-black/20'
                          }`}
                        aria-label={t(`hero.slides.${slide.key}.title`)}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="h-11 w-11 border border-black/10 bg-white text-black flex items-center justify-center transition-colors hover:bg-black hover:text-white"
                      aria-label="Previous slide"
                    >
                      <ArrowLeft size={18} />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="h-11 w-11 border border-black/10 bg-white text-black flex items-center justify-center transition-colors hover:bg-black hover:text-white"
                      aria-label="Next slide"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute left-6 top-6 border border-black/10 bg-white/92 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black">
                Geometry
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}