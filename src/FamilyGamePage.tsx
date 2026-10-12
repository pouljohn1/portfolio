import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react"
import { Link } from "react-router"

import { content, type Locale } from "./content"

export function FamilyGamePage({ locale }: { locale: Locale }) {
  const t = content[locale].familyGame
  const supportPath = `/${locale}/familijna-gra-support`

  return (
    <div className="family-game mx-auto max-w-5xl px-6 pb-12 pt-10 md:pt-16">
      <Link to={`/${locale}`} className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" aria-hidden="true" />{content[locale].controls.back}
      </Link>

      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16" aria-labelledby="family-title">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t.eyebrow}</p>
          <h1 id="family-title" className="text-5xl font-extralight tracking-tight md:text-6xl">{t.title}</h1>
          <p className="mb-5 mt-5 text-3xl font-semibold tracking-tight">{t.headline}</p>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">{t.introduction}</p>
          <a href="https://apps.apple.com/pl/app/familijna-gra-quiz/id6805541234" target="_blank" rel="noopener noreferrer" className="family-store-link mt-8 inline-flex items-center gap-4 rounded-xl bg-foreground px-5 py-3.5 text-background transition-opacity hover:opacity-80">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true"><path d="M17.05 12.04c.02 2.96 2.59 3.95 2.62 3.97-.02.07-.41 1.41-1.36 2.8-.82 1.2-1.67 2.4-3.01 2.43-1.32.03-1.75-.78-3.26-.78-1.5 0-1.98.75-3.23.81-1.3.05-2.28-1.3-3.11-2.5-1.7-2.46-3-6.96-1.25-10 .87-1.51 2.43-2.47 4.12-2.49 1.29-.02 2.5.87 3.28.87.78 0 2.24-1.08 3.77-.92.64.03 2.46.26 3.63 1.97-.1.06-2.17 1.27-2.2 3.84ZM14.57 4.59c.69-.84 1.15-2.01 1.02-3.17-.99.04-2.2.66-2.91 1.5-.64.74-1.21 1.93-1.06 3.06 1.1.09 2.23-.56 2.95-1.39Z" /></svg>
            <span><span className="block text-[11px] leading-tight">{t.download}</span><span className="block text-xl font-medium leading-tight">App Store</span></span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.availability}</p>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {t.highlights.map((item) => <li key={item} className="flex items-center gap-1.5"><Check className="size-3.5" aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
        <figure className="family-hero-art mx-auto w-full max-w-[340px] overflow-hidden rounded-[1.8rem] bg-[#14d9e3]">
          <img src="/images/familijna-gra/guess.webp" width="860" height="1864" alt={t.heroAlt} fetchPriority="high" className="block h-auto w-full" />
        </figure>
      </section>

      <section className="mt-20 border-t border-border pt-10 md:mt-24" aria-labelledby="family-how">
        <div className="mb-9 flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="family-how" className="text-2xl font-light tracking-tight">{t.howTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.howSubtitle}</p>
        </div>
        <ol className="grid gap-7 sm:grid-cols-3 sm:gap-8">
          {t.steps.map(([title, description], index) => (
            <li key={title}>
              <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground">0{index + 1}</span>
              <h3 className="mb-2 text-base font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="family-gallery">
        <h2 id="family-gallery" className="mb-3 text-2xl font-light tracking-tight">{t.galleryTitle}</h2>
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.galleryDescription}</p>
        <div className="family-gallery flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
          {t.screenshots.map(({ image, title, description, alt }) => (
            <figure key={image} className="min-w-0 shrink-0 basis-[76%] snap-start sm:basis-auto">
              <img src={`/images/familijna-gra/${image}.webp`} width="860" height="1864" alt={alt} loading="lazy" decoding="async" className="block h-auto w-full rounded-xl bg-[#14d9e3] sm:rounded-2xl" />
              <figcaption className="mt-4"><h3 className="text-sm font-medium sm:text-base">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p></figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">{t.gameLanguage}</p>
      </section>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-5 border-t border-border pt-6 text-sm">
        <span className="text-muted-foreground">Familijna Gra · Paweł Janeczek</span>
        <nav aria-label={t.linksTitle} className="flex flex-wrap gap-x-6 gap-y-3">
          <Link to={supportPath} className="inline-flex items-center gap-1 hover:underline hover:underline-offset-4">{t.support}<ChevronRight className="size-3.5" aria-hidden="true" /></Link>
          <Link to={`${supportPath}#policy`} className="hover:underline hover:underline-offset-4">{t.privacy}</Link>
        </nav>
      </footer>
    </div>
  )
}
