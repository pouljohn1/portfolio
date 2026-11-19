import { AppWindow, ArrowLeft, ArrowUpRight, Check, Clock, Code2, Download, Layers3, Mail } from "lucide-react"
import { Link } from "react-router"

import { Button } from "@/components/ui/button"
import { content, type Locale } from "./content"

// Keep the asset name stable so this URL follows the latest public release.
const cacheLiftRelease: { downloadUrl: string | null } = {
  downloadUrl: "https://github.com/pouljohn1/cachelift-releases/releases/latest/download/CacheLift.dmg",
}
const featureIcons = [Layers3, Download, AppWindow, Code2, Clock]

export function CacheLiftPage({ locale }: { locale: Locale }) {
  const t = content[locale].cachelift

  return (
    <div className="mx-auto max-w-5xl px-6 pb-12 pt-10 md:pt-16">
      <Link to={`/${locale}`} className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" aria-hidden="true" />{content[locale].controls.back}
      </Link>

      <section className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12" aria-labelledby="cachelift-title">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t.eyebrow}</p>
          <h1 id="cachelift-title" className="text-5xl font-extralight tracking-tight md:text-6xl">{t.title}</h1>
          <p className="mb-5 mt-5 max-w-lg text-balance text-3xl font-semibold tracking-tight md:text-4xl">{t.headline}</p>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">{t.introduction}</p>
          <div className="mt-8">
            {cacheLiftRelease.downloadUrl ? (
              <Button asChild size="lg" className="h-auto gap-3 px-5 py-3.5">
                <a href={cacheLiftRelease.downloadUrl}>
                  <Download className="size-5" aria-hidden="true" />{t.download}
                </a>
              </Button>
            ) : (
              <>
                <Button disabled size="lg" aria-describedby="cachelift-download-status" className="h-auto gap-3 px-5 py-3.5">
                  <Download className="size-5" aria-hidden="true" />{t.downloadSoon}
                </Button>
                <p id="cachelift-download-status" className="mt-3 text-sm text-muted-foreground">{t.downloadStatus}</p>
              </>
            )}
            <p className="mt-3 text-xs text-muted-foreground">{t.requirements}</p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {t.highlights.map((item) => <li key={item} className="flex items-center gap-1.5"><Check className="size-3.5" aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
        <img
          src="/images/cachelift/icon.webp"
          width="640"
          height="640"
          alt={t.iconAlt}
          fetchPriority="high"
          className="mx-auto w-full max-w-[240px] md:max-w-[360px]"
        />
      </section>

      <section className="mt-20 border-t border-border pt-10 md:mt-24" aria-labelledby="cachelift-how">
        <h2 id="cachelift-how" className="mb-9 text-2xl font-light tracking-tight">{t.howTitle}</h2>
        <ol className="grid gap-8 sm:grid-cols-3">
          {t.steps.map(({ title, description }, index) => (
            <li key={title}>
              <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-medium">0{index + 1}</span>
              <h3 className="mb-2 text-base font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="cachelift-gallery">
        <h2 id="cachelift-gallery" className="mb-3 text-2xl font-light tracking-tight">{t.galleryTitle}</h2>
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.galleryDescription}</p>
        <div className="grid gap-12">
          {t.screenshots.map(({ image, title, description, alt }) => (
            <figure key={image}>
              <img
                src={`/images/cachelift/${image}.webp`}
                width="1440"
                height="960"
                alt={alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-xl border border-border bg-background"
              />
              <figcaption className="mt-4 max-w-2xl">
                <h3 className="text-base font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="cachelift-features">
        <h2 id="cachelift-features" className="mb-8 max-w-xl text-balance text-2xl font-light tracking-tight">{t.featuresTitle}</h2>
        <div className="grid gap-x-12 md:grid-cols-2">
          {t.features.map(({ title, description }, index) => {
            const Icon = featureIcons[index]
            return (
              <div key={title} className="flex items-start gap-4 border-t border-border py-6">
                <Icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div>
                  <h3 className="mb-2 text-base font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-10" aria-labelledby="cachelift-control">
        <h2 id="cachelift-control" className="mb-3 text-2xl font-light tracking-tight">{t.controlTitle}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.controlDescription}</p>
        <dl className="my-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {t.risks.map(({ title, description }) => (
            <div key={title} className="border-l border-border pl-4">
              <dt className="mb-2 text-sm font-medium">{title}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{description}</dd>
            </div>
          ))}
        </dl>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{t.deletionNote}</p>
      </section>

      <section className="mt-12 max-w-3xl" aria-labelledby="cachelift-access">
        <h2 id="cachelift-access" className="mb-3 text-lg font-medium">{t.accessTitle}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{t.accessDescription}</p>
      </section>

      <section className="mt-16 border-t border-border pt-8" aria-labelledby="cachelift-support">
        <h2 id="cachelift-support" className="mb-3 text-xl font-light">{t.supportTitle}</h2>
        <p className="mb-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.supportDescription}</p>
        <a href="mailto:pjanecze@gmail.com" className="inline-flex items-center gap-2 text-sm hover:underline hover:underline-offset-4">
          <Mail className="size-4" aria-hidden="true" />{t.contact}<ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </section>

      <footer className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">{t.footerName}</footer>
    </div>
  )
}
