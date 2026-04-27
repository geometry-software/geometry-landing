import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/hero/and-machines-vqTWfa4DjEk-unsplash.jpg'
import img2 from '../assets/hero/designerachit-Sd0tg9L6Qk0-unsplash.jpg'
import img3 from '../assets/hero/jason-leung-wHddViTmSvA-unsplash.jpg'
import img4 from '../assets/hero/lea-l-q--99IzY8Lw-unsplash.jpg'
import img5 from '../assets/hero/magicpattern-jbywvpa9vH8-unsplash.jpg'
import img6 from '../assets/hero/philip-oroni-EaFX0kRvXT8-unsplash.jpg'

const slides = [
  { key: 'slide1', image: img1 },
  { key: 'slide1', image: img2 },
  { key: 'slide1', image: img3 },
  { key: 'slide1', image: img4 },
  { key: 'slide1', image: img5 },
  { key: 'slide1', image: img6 }
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
      <div className="max-w-6xl mx-auto">
        <div className="border border-black/10 bg-white">
          <div className="grid lg:grid-cols-[6fr_4fr] min-h-[78vh]">
            <div className="flex flex-col justify-between px-8 py-10 md:px-12 md:py-0 lg:px-16 lg:py-16 border-b lg:border-b-0 lg:border-r border-black/10">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
                  {t(`hero.slides.${slides[active].key}.eyebrow`)}
                </div>

                <h1 className="mt-6 min-w-fit max-w-[10ch] text-black font-semibold text-[40px] md:text-[68px] leading-16">
                  {t(`hero.slides.${slides[active].key}.title`)}
                </h1>

                <p className="mt-8 min-w-fit max-w-xl text-[15px] leading-8 text-black/60 md:text-[16px]">
                  {t(`hero.slides.${slides[active].key}.description`)}
                </p>

                {/* <a
                  href="#contact"
                  className="mt-10 inline-flex h-14 items-center justify-center bg-black px-8 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/85"
                >
                  {t('hero.hireUs')}
                </a> */}
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-[var(--color-border)] pt-6 fade-up">
                <div>
                  <div className="text-center text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    Frontend
                  </div>
                  <div className="text-center mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    Interfaces
                  </div>
                </div>

                <div>
                  <div className="text-center text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    Backend
                  </div>
                  <div className="text-center mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    Systems
                  </div>
                </div>

                <div>
                  <div
                    style={{ minWidth: '160px' }}
                    className="text-center text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    Web Design
                  </div>
                  <div className="text-center mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    Graphics
                  </div>
                </div>

                <div>
                  <div
                    style={{ minWidth: '120px' }}
                    className="text-center text-[24px] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    Agents
                  </div>
                  <div className="text-center mt-1 text-[11px] uppercase tracking-[0.18em] text-black/40">
                    AI
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-full bg-[#f5f5f5] max-h-[50vh]">
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

              <div className="slider-title absolute right-6 top-6 border border-black/10 bg-white/92 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black">
                www.geometry.software
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}