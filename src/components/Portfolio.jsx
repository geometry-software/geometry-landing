import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { jsPDF } from 'jspdf'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import robotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf'
import robotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf'

const companyInfo = {
  website: 'https://www.geometry.software',
  github: 'https://github.com/geometry-software',
  whatsapp: '+55 48 99108 1987',
  address: 'Coworking XYZ, Av. Hercílio Luz, 639, Florianópolis - SC, Brasil',
  taxId: '65.822.742/0001-48',
}

// consider ProjectDto
const projects = [
  {
    key: 'frontend-react',
    category: 'frontend',
    image: ['1', '2', '3', '4', '5'],
    briefKey: 'portfolio.projects.frontend-react.brief',
    price: 450,
    technologies: ['React', 'ShadeCN', 'Firebase'],
    pdfFileName: 'geometry-frontend-react.pdf',
    links: [
      { type: 'github', href: 'https://github.com/geometry-software/frontend-react' },
      { type: 'demo', href: 'https://geometry-frontend-react.web.app' },
    ]
  },
  {
    key: 'backend-nestjs',
    category: 'backend',
    image: ['1', '2', '3', '4'],
    briefKey: 'portfolio.projects.backend-nestjs.brief',
    price: 150,
    technologies: ['NestJS', 'MongoDB', 'Fly.io'],
    pdfFileName: 'geometry-backend-nestjs.pdf',
    links: [
      { type: 'github', href: 'https://github.com/geometry-software/nestjs-products' },
      { type: 'demo', href: 'https://geometry-frontend-react.web.app' },
    ]
  },
  {
    key: 'auth-nestjs',
    category: 'backend',
    image: ['1', '2', '3', '4'],
    briefKey: 'portfolio.projects.auth-nestjs.brief',
    price: 150,
    technologies: ['NestJS', 'MongoDB', 'Fly.io'],
    pdfFileName: 'geometry-auth-nestjs.pdf',
    links: [
      { type: 'github', href: 'https://github.com/geometry-software/nestjs-auth' },
      { type: 'demo', href: 'https://geometry-frontend-react.web.app' },
    ]
  },
  {
    key: 'clinic',
    category: 'webDesign',
    image: ['1', '2', '3', '4', '5'],
    briefKey: 'portfolio.projects.clinic.brief',
    price: 80,
    technologies: ['HTML', 'Stitch', 'Firebase'],
    pdfFileName: 'geometry-web-clinic .pdf',
    links: [
      { type: 'github', href: 'https://github.com/geometry-software/geometry-web-clinic' },
      { type: 'demo', href: 'https://geometry-web-clinic.web.app' },
    ]
  },
  {
    key: 'gym',
    category: 'webDesign',
    image: ['1', '2', '3', '4', '5'],
    briefKey: 'portfolio.projects.gym.brief',
    price: 80,
    technologies: ['HTML', 'Stitch', 'Firebase'],
    pdfFileName: 'geometry-web-gym.pdf',
    links: [
      { type: 'github', href: 'https://github.com/geometry-software/geometry-web-gym' },
      { type: 'demo', href: 'https://geometry-web-gym.web.app' },
    ]
  },
  {
    key: 'beauty',
    category: 'webDesign',
    image: ['1', '2', '3', '4'],
    briefKey: 'portfolio.projects.beauty.brief',
    price: 80,
    technologies: ['HTML', 'Stitch', 'Firebase'],
    pdfFileName: 'geometry-web-beauty.pdf',
    links: [
      { type: 'github', href: 'https://github.com/geometry-software/geometry-web-beauty' },
      { type: 'demo', href: 'https://geometry-web-beauty.web.app' },
    ]
  },
]

const categories = ['all', 'frontend', 'backend', 'webDesign']

const projectImages = import.meta.glob('../assets/*/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

const getProjectPreviewImage = (key) =>
  projectImages[`../assets/${key}/min.png`]

const getProjectGalleryImages = (project) =>
  project.image.map((fileName) => projectImages[`../assets/${project.key}/${fileName}.png`])

function preloadProjectImages(projectsList) {
  projectsList.forEach((project) => {
    const preview = new Image()
    preview.src = getProjectPreviewImage(project.key)

    getProjectGalleryImages(project).forEach((src) => {
      const img = new Image()
      img.src = src
    })
  })
}

function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const chunkSize = 0x8000

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize)
    binary += String.fromCharCode(...chunk)
  }

  return btoa(binary)
}

async function loadFontAsBase64(fontUrl) {
  const response = await fetch(fontUrl)
  if (!response.ok) {
    throw new Error(`Failed to load font: ${fontUrl}`)
  }
  const buffer = await response.arrayBuffer()
  return arrayBufferToBase64(buffer)
}

async function generateCommercialPdf({ project, t }) {
  const regularFontBase64 = await loadFontAsBase64(robotoRegular)
  const boldFontBase64 = await loadFontAsBase64(robotoBold)

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  doc.addFileToVFS('Roboto/Roboto-Regular.ttf', regularFontBase64)
  doc.addFont('Roboto/Roboto-Regular.ttf', 'Roboto', 'normal')
  doc.addFileToVFS('Roboto/Roboto-Bold.ttf', boldFontBase64)
  doc.addFont('Roboto/Roboto-Bold.ttf', 'Roboto', 'bold')

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const marginX = 20
  const topY = 20
  const contentWidth = pageWidth - marginX * 2

  const title = t(`portfolio.projects.${project.key}.title`)
  const description = t(`portfolio.projects.${project.key}.description`)
  const aboutGeometry = t('portfolio.pdf.aboutGeometry')
  const projectOverview = t(`portfolio.projects.${project.key}.pdfOverview`)

  const githubLink = project.links.find((link) => link.type === 'github')?.href
  const demoLink = project.links.find((link) => link.type === 'demo')?.href

  const ensureSpace = (currentY, neededHeight) => {
    if (currentY + neededHeight <= pageHeight - 36) return currentY
    addFooter(doc.getNumberOfPages())
    doc.addPage()
    return topY
  }

  const addParagraph = (text, y, size = 11) => {
    doc.setFont('Roboto', 'normal')
    doc.setFontSize(size)
    doc.setTextColor(35)

    const lines = doc.splitTextToSize(text, contentWidth)
    y = ensureSpace(y, lines.length * 5 + 8)
    doc.text(lines, marginX, y)
    return y + lines.length * 5 + 8
  }

  const addFooter = (pageNumber) => {
    doc.setDrawColor(220)
    doc.line(marginX, pageHeight - 30, pageWidth - marginX, pageHeight - 30)

    doc.setFont('Roboto', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(90)

    let y = pageHeight - 24
    doc.text(`${t('portfolio.pdf.website')}: ${companyInfo.website}`, marginX, y)
    y += 4.5
    doc.text(`${t('portfolio.pdf.github')}: ${companyInfo.github}`, marginX, y)
    y += 4.5
    doc.text(`${t('portfolio.pdf.whatsapp')}: ${companyInfo.whatsapp}`, marginX, y)
    y += 4.5
    doc.text(`${t('portfolio.pdf.address')}: ${companyInfo.address}`, marginX, y)
    y += 4.5
    doc.text(`${t('portfolio.pdf.taxId')}: ${companyInfo.taxId}`, marginX, y)

    // doc.text(
    //   `${t('portfolio.pdf.page')} ${pageNumber}`,
    //   pageWidth - marginX,
    //   pageHeight - 6,
    //   { align: 'right' }
    // )
  }

  let y = topY

  doc.setFont('Roboto', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(20)
  doc.text('Geometry Software', marginX, y)

  y += 9
  doc.setFont('Roboto', 'normal')
  doc.setFontSize(13)
  doc.text(t('portfolio.commercialProposal'), marginX, y)

  y += 12
  doc.setFont('Roboto', 'normal')
  doc.setFontSize(16)
  doc.text(title, marginX, y)

  y += 10
  y = addParagraph(aboutGeometry, y)
  y = addParagraph(projectOverview, y)
  y = addParagraph(description, y)

  if (project.technologies?.length) {
    y = ensureSpace(y, 8)
    doc.setFont('Roboto', 'normal')
    doc.setFontSize(11)
    doc.text(
      `${t('portfolio.pdf.technologies')}: ${project.technologies.join(', ')}`,
      marginX,
      y
    )
    y += 10
  }

  y = ensureSpace(y, 12)
  doc.setFont('Roboto', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(20)
  doc.text(`${t('portfolio.pdf.price')}: $${project.price}`, marginX, y)
  y += 10

  doc.setFont('Roboto', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(35)

  if (githubLink) {
    y = ensureSpace(y, 7)
    doc.textWithLink(`${t('portfolio.pdf.code')}: ${githubLink}`, marginX, y, {
      url: githubLink,
    })
    y += 7
  }

  if (demoLink) {
    y = ensureSpace(y, 7)
    doc.textWithLink(`${t('portfolio.pdf.demo')}: ${demoLink}`, marginX, y, {
      url: demoLink,
    })
    y += 7
  }

  const totalPages = doc.getNumberOfPages()
  for (let page = 1; page <= totalPages; page += 1) {
    doc.setPage(page)
    addFooter(page)
  }

  doc.save(project.pdfFileName || `geometry-commercial-proposal-${project.key}.pdf`)
}

function ProjectModal({ project, onClose }) {
  const { t } = useTranslation()
  const gallery = useMemo(() => getProjectGalleryImages(project), [project])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [gallery.length, onClose])

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  const handleDownloadPdf = async () => {
    try {
      setIsDownloadingPdf(true)
      await generateCommercialPdf({ project, t })
    } catch (error) {
      console.error('PDF generation failed:', error)
    } finally {
      setIsDownloadingPdf(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70"
      onClick={onClose}
    >
      <div className="h-full w-full px-[10vw] py-[5vh] max-md:px-4 max-md:py-4">
        <div
          className="relative grid h-full w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-2xl lg:grid-cols-[1.35fr_0.9fr]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            <X size={18} />
          </button>

          <div className="flex min-h-0 flex-col border-b border-[var(--color-border)] lg:border-b-0 lg:border-r">
            <div className="relative flex min-h-[280px] flex-1 items-center justify-center bg-[#f7f7f7]">
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    <ArrowRight size={18} />
                  </button>
                </>
              )}

              <img
                src={gallery[activeImageIndex]}
                alt={`${t(`portfolio.projects.${project.key}.title`)} ${activeImageIndex + 1}`}
                className="h-full w-full object-contain"
              />
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto border-t border-[var(--color-border)] p-4">
                {gallery.map((imageSrc, index) => (
                  <button
                    type="button"
                    key={imageSrc}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-20 min-w-[96px] overflow-hidden border transition-all ${activeImageIndex === index
                      ? 'border-[var(--color-primary)]'
                      : 'border-[var(--color-border)]'
                      }`}
                  >
                    <img
                      src={imageSrc}
                      alt={`${t(`portfolio.projects.${project.key}.title`)} preview ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="min-h-0 overflow-y-auto p-6 md:p-8 lg:p-10">
            <div className="w-fit rounded-full border border-[var(--color-primary-border)] bg-white px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
              {t(`portfolio.categories.${project.category}`)}
            </div>

            <h3 className="mt-6 text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)] md:text-[36px]">
              {t(`portfolio.projects.${project.key}.title`)}
            </h3>

            <p className="mt-5 text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
              {t(`portfolio.projects.${project.key}.description`)}
            </p>

            {project.technologies?.length > 0 && (
              <div className="mt-6">
                <div className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-black/45">
                  {t('portfolio.technologies')}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={`${project.key}-${technology}`}
                      className="inline-flex items-center border border-[var(--color-border)] bg-white px-3 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 mb-1 text-[12px] font-medium uppercase tracking-[0.14em] text-black/45">
              {t('portfolio.priceLabel')}
            </div>
            <div className="text-[18px] font-semibold text-[var(--color-ink)] md:text-[22px]">
              ${project.price}
            </div>

            <div className="mt-6 mb-1 text-[12px] font-medium uppercase tracking-[0.14em] text-black/45">
              {t('portfolio.links')}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={`${project.key}-${link.type}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 border border-[var(--color-border)] bg-white px-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
                >
                  {link.type === 'github' ? <Code size={16} /> : <ArrowUpRight size={16} />}
                  {link.type === 'github' ? 'Code' : 'Demo'}
                </a>
              ))}

              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isDownloadingPdf}
                style={{ fontSize: '14px' }}
                className="inline-flex h-11 items-center gap-2 border border-[var(--color-border)] text-black px-4 font-medium uppercase transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[var(--color-primary)] hover:text-white"
              >
                {isDownloadingPdf
                  ? t('portfolio.generatingPdf')
                  : t('portfolio.downloadPdf')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    preloadProjectImages(projects)
  }, [])

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const getLinkLabel = (type) => {
    if (type === 'github') return 'Code'
    if (type === 'demo') return 'Demo'
    return type
  }

  const getLinkIcon = (type) => {
    if (type === 'github') return <Code size={16} />
    return <ArrowUpRight size={16} />
  }

  return (
    <>
      <section id="portfolio" className="bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] soft-reveal">
          <div className="border-b border-[var(--color-border)] px-8 py-10 fade-up md:px-12 md:py-14 lg:px-16 lg:py-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-black/40">
              {t('portfolio.eyebrow')}
            </div>

            <h2 className="mt-6 max-w-4xl text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--color-ink)] md:text-[52px]">
              {t('portfolio.title')}
            </h2>

            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[var(--color-muted)] md:text-[16px]">
              {t('portfolio.description')}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-item h-11 border px-5 text-[11px] font-medium uppercase tracking-[0.14em] transition-all ${activeCategory === cat
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-soft)]'
                    : 'border-[var(--color-border)] bg-white text-black/70 hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]'
                    }`}
                >
                  {t(`portfolio.categories.${cat}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article
                key={project.key}
                onClick={() => setSelectedProject(project)}
                className={`p-[40px] group cursor-pointer border-[var(--color-border)] border-b transition-colors hover:bg-[var(--color-primary-light)] ${index % 3 !== 2 ? 'xl:border-r' : ''
                  } ${index < filteredProjects.length - 3 ? 'xl:border-b' : ''} md:border-b`}
              >
                <div className="relative h-72 overflow-hidden border-b border-[var(--color-border)]">
                  <img
                    src={getProjectPreviewImage(project.key)}
                    alt={t(`portfolio.projects.${project.key}.title`)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(37,99,235,0.09))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-[var(--color-primary-border)] bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-[var(--shadow-soft)]">
                    {t(`portfolio.categories.${project.category}`)}
                  </div>
                </div>

                <div className="py-6 md:py-8">
                  <h3 className="text-[28px] font-semibold leading-[1] tracking-[-0.04em] text-[var(--color-ink)]">
                    {t(`portfolio.projects.${project.key}.title`)}
                  </h3>

                  <p className="mt-5 text-[15px] leading-5 text-[var(--color-muted)]">
                    {t(project.briefKey)}
                  </p>

                  <div className="mt-5 text-[16px] font-semibold text-[var(--color-ink)]">
                    ${project.price}
                  </div>

                  {project.links?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={`${project.key}-${link.type}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex h-11 items-center gap-2 border border-[var(--color-border)] bg-white px-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white"
                        >
                          {getLinkIcon(link.type)}
                          {getLinkLabel(link.type)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  )
}