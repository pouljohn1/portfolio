import { useEffect, type ReactNode } from "react"
import { ArrowLeft, BarChart3, Bell, Bookmark, ChevronRight, ExternalLink, History, Linkedin, MapPin, Moon, Search, Sun, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { Link, useLocation } from "react-router"

import { Button } from "@/components/ui/button"
import { content, type Locale } from "./content"
import { FamilyGamePage } from "./FamilyGamePage"

type Page = "home" | "domalert" | "lighter" | "family" | "familyGame"

function currentPage(pathname: string): Page {
  const path = pathname.replace(/^\/(en|pl)(?=\/|$)/, "").replace(/\/$/, "")
  if (path === "/domalert") return "domalert"
  if (path === "/lighter-support") return "lighter"
  if (path === "/familijna-gra") return "familyGame"
  if (path === "/familijna-gra-support") return "family"
  return "home"
}

function currentLocale(pathname: string): Locale {
  const match = pathname.match(/^\/(en|pl)(?=\/|$)/)
  if (match) return match[1] as Locale
  return navigator.language.toLowerCase().startsWith("pl") ? "pl" : "en"
}

function localizedPath(locale: Locale, page: Page) {
  const suffix = {
    home: "",
    domalert: "/domalert",
    lighter: "/lighter-support",
    family: "/familijna-gra-support",
    familyGame: "/familijna-gra",
  }[page]
  return `/${locale}${suffix}`
}

export function App() {
  const location = useLocation()
  const page = currentPage(location.pathname)
  const locale = currentLocale(location.pathname)
  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = `${page === "home" ? "Paweł Janeczek" : t[page].title} — Portfolio`
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta[page])
  }, [locale, page, t])

  useEffect(() => {
    if (location.hash) {
      document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <PageShell locale={locale} page={page}>
      {page === "domalert" ? <DomAlertPage locale={locale} /> : page === "lighter" ? <LighterSupportPage locale={locale} /> : page === "familyGame" ? <FamilyGamePage locale={locale} /> : page === "family" ? <FamilySupportPage locale={locale} /> : <HomePage locale={locale} />}
    </PageShell>
  )
}

function PageShell({ children, locale, page }: { children: ReactNode; locale: Locale; page: Page }) {
  const t = content[locale].controls
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`mx-auto flex ${page === "familyGame" ? "max-w-5xl" : "max-w-2xl"} items-center justify-between gap-3 px-6 pt-6`}>
        <nav aria-label={t.language} className="flex items-center gap-0.5">
          {(["en", "pl"] as const).map((option) => (
            <Button key={option} asChild variant={locale === option ? "secondary" : "ghost"} size="sm" className="h-8 min-w-11 px-2">
              <Link to={`${localizedPath(option, page)}${location.hash}`} lang={option} aria-current={locale === option ? "page" : undefined}>
                {option.toUpperCase()}
              </Link>
            </Button>
          ))}
        </nav>
        <ThemeControls locale={locale} />
      </header>
      <main>{children}</main>
    </div>
  )
}

function ThemeControls({ locale }: { locale: Locale }) {
  const { resolvedTheme, setTheme } = useTheme()
  const labels = content[locale].controls
  const options = [
    { value: "light", label: labels.light, icon: Sun },
    { value: "dark", label: labels.dark, icon: Moon },
  ]

  return (
    <div role="group" aria-label={labels.appearance} className="flex items-center gap-0.5">
      {options.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          type="button"
          variant={resolvedTheme === value ? "secondary" : "ghost"}
          size="icon"
          className="size-9"
          aria-label={label}
          title={label}
          aria-pressed={resolvedTheme === value}
          onClick={() => setTheme(value)}
        >
          <Icon className="size-4" aria-hidden="true" />
        </Button>
      ))}
    </div>
  )
}

function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale].home

  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-14 md:pb-32 md:pt-20">
      <section className="mb-24">
        <div className="mb-10 flex justify-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-full ring-1 ring-border">
            <img src="/images/awatar2-20-281-29.jpg" alt="Paweł Janeczek" className="h-full w-full object-cover" />
          </div>
        </div>
        <h1 className="mb-6 text-center text-5xl font-extralight tracking-tight text-foreground md:text-6xl">{t.greeting}</h1>
        <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-muted-foreground">{t.introduction}</p>
      </section>

      <section className="mb-24">
        <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground">{t.projects}</h2>
        <div className="space-y-4">
          <PortfolioLink href={localizedPath(locale, "domalert")} title="domalert.pl" description={t.domalert} />
          <PortfolioLink href={localizedPath(locale, "familyGame")} title="Familijna Gra" description={t.family} />
          <PortfolioLink href="https://apps.apple.com/us/app/lighter-simulator/id6758013623" title="Lighter Simulator" description={t.lighter} />
          <PortfolioLink href="https://poliswar.xyz" title="poliswar.xyz" description={t.poliswar} />
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground">{t.work}</h2>
        <ol className="space-y-6">
          {t.experience.map(({ organization, role, period, description, href }) => (
            <li key={`${organization}-${role}`} className="border-l border-border py-1 pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-light text-foreground">
                  {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-4">{organization}</a> : organization}
                </h3>
                <span className="text-sm text-muted-foreground">{period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-foreground">{role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground">{t.connect}</h2>
        <div className="flex gap-8">
          <SocialLink href="https://www.linkedin.com/in/pjaneczek/" label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
          <SocialLink href="https://x.com/paweljaneczek" label="X" icon={<Twitter className="h-5 w-5" />} />
        </div>
      </section>
    </div>
  )
}

function PortfolioLink({ href, title, description }: { href: string; title: string; description: string }) {
  const external = href.startsWith("http")
  const children = (
    <>
      <h3 className="flex items-center gap-2 text-lg font-light text-foreground">
        {title}
        {!external ? <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" /> : null}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </>
  )
  const className = "group block border-l border-border py-2 pl-6 transition-all hover:border-foreground/60 hover:pl-8"

  if (!external) return <Link to={href} className={className}>{children}</Link>

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-all hover:gap-3 hover:text-foreground">
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  )
}

function DomAlertPage({ locale }: { locale: Locale }) {
  const t = content[locale].domalert
  const featureIcons = [Search, MapPin, BarChart3, History, Bookmark, Bell]

  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-14 md:pb-32 md:pt-20">
      <Button asChild variant="ghost" className="-ml-3 mb-10 text-muted-foreground">
        <Link to={localizedPath(locale, "home")}><ArrowLeft className="size-4" aria-hidden="true" />{content[locale].controls.back}</Link>
      </Button>

      <section className="mb-20">
        <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">{t.eyebrow}</p>
        <h1 className="mb-6 text-5xl font-extralight tracking-tight text-foreground md:text-6xl">{t.title}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{t.introduction}</p>
        <Button asChild className="mt-8">
          <a href="https://domalert.pl" target="_blank" rel="noopener noreferrer">{t.visit}<ExternalLink className="size-4" aria-hidden="true" /></a>
        </Button>
        <nav aria-label={t.socialTitle} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-muted-foreground">{t.socialTitle}</span>
          <a href="https://x.com/DomAlertPl" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">X</a>
          <a href="https://www.facebook.com/people/DomAlert/61577237842845/" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">Facebook</a>
        </nav>
      </section>

      <section className="mb-20" aria-labelledby="domalert-showcase">
        <h2 id="domalert-showcase" className="mb-8 text-xl font-extralight tracking-wide text-muted-foreground">{t.showcaseTitle}</h2>
        <div className="space-y-14">
          <figure>
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-[#edf2ff] p-6 sm:min-h-88">
              <img src="/images/domalert/map-banner.webp" alt="" className="absolute inset-x-0 bottom-0 h-44 w-full object-cover" />
              <span className="absolute left-5 top-5 text-xs font-medium text-[#485779]">{t.exampleLabel}</span>
              <div className="relative w-full max-w-[300px] overflow-hidden rounded-2xl bg-white text-[#253047] shadow-xl">
                <div className="relative">
                  <img src="/images/domalert/offer-map.webp" alt={t.offerImageAlt} className="h-36 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#6684ef] px-2.5 py-1 text-xs font-medium text-white">-12.5% {t.cheaperLabel}</span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2"><strong className="text-lg">699 000 zł</strong><span className="text-xs text-[#617089]">15 499 zł/m²</span></div>
                  <p className="mt-1 text-sm text-[#617089]">Gdańsk, Śródmieście</p>
                </div>
              </div>
            </div>
            <figcaption className="mt-5"><h3 className="text-lg font-light text-foreground">{t.showcase[0][0]}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.showcase[0][1]}</p></figcaption>
          </figure>

          <figure>
            <div className="flex min-h-72 items-end justify-center overflow-hidden rounded-3xl bg-[#edf2ff] px-3 pt-10 sm:px-10">
              <img src="/images/domalert/app-preview.webp" alt={t.appImageAlt} className="w-full max-w-[484px]" />
            </div>
            <figcaption className="mt-5"><h3 className="text-lg font-light text-foreground">{t.showcase[1][0]}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.showcase[1][1]}</p></figcaption>
          </figure>

          <figure>
            <div className="rounded-3xl bg-[#edf2ff] px-5 py-9 sm:px-10">
              <div className="mx-auto max-w-sm rounded-2xl bg-white p-4 text-[#253047] shadow-xl">
                <div className="mb-4 flex items-center gap-2"><img src="/images/domalert/logo-icon.webp" alt="" className="size-7" /><strong className="text-base">{t.dealsLabel}</strong></div>
                {[
                  { image: "nearby-offer-1.webp", price: "729 000 zł", perMetre: "14 526 zł/m²", difference: "-13%" },
                  { image: "nearby-offer-2.webp", price: "698 000 zł", perMetre: "15 100 zł/m²", difference: "-7.8%" },
                ].map(({ image, price, perMetre, difference }) => (
                  <div key={image} className="mb-2 flex items-center gap-3 rounded-xl border border-[#e5eaf4] p-2 last:mb-0">
                    <img src={`/images/domalert/${image}`} alt={t.nearbyImageAlt} className="size-14 shrink-0 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1"><p className="text-xs text-[#617089]">{perMetre}</p><p className="text-sm font-semibold">{price}</p></div>
                    <span className="text-right text-xs text-[#6684ef]"><strong className="block text-sm">{difference}</strong>{t.lowerLabel}</span>
                  </div>
                ))}
              </div>
            </div>
            <figcaption className="mt-5"><h3 className="text-lg font-light text-foreground">{t.showcase[2][0]}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.showcase[2][1]}</p></figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="domalert-features">
        <h2 id="domalert-features" className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground">{t.featuresTitle}</h2>
        <ul className="divide-y divide-border">
          {t.features.map(([title, description], index) => {
            const Icon = featureIcons[index]
            return (
              <li key={title} className="flex gap-5 py-5 first:pt-0">
                <Icon className="mt-1 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div><h3 className="text-lg font-light text-foreground">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p></div>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

function SupportLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-14 md:pb-32 md:pt-20">
      <Button asChild variant="ghost" className="-ml-3 mb-8 text-muted-foreground">
        <Link to={localizedPath(locale, "home")}><ArrowLeft className="size-4" aria-hidden="true" />{content[locale].controls.back}</Link>
      </Button>
      <div className="space-y-12 leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

function MailLink() {
  return <a href="mailto:pjanecze@gmail.com" className="text-foreground underline underline-offset-4 hover:no-underline">pjanecze@gmail.com</a>
}

function GooglePrivacyLink({ children }: { children: ReactNode }) {
  return <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:no-underline">{children}</a>
}

function GoogleAdsPrivacyLink({ children }: { children: ReactNode }) {
  return <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:no-underline">{children}</a>
}

function LighterSupportPage({ locale }: { locale: Locale }) {
  const t = content[locale].lighter
  return (
    <SupportLayout locale={locale}>
      <h1 className="text-4xl font-extralight tracking-tight text-foreground md:text-5xl">{t.title}</h1>
      <section>
        <h2 className="mb-4 text-xl font-light text-foreground">{t.aboutTitle}</h2>
        <p>{t.about}</p>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-light text-foreground">{t.featuresTitle}</h2>
        <ul className="list-outside list-disc space-y-2 pl-5">
          {t.features.map(([title, description]) => <li key={title}><strong>{title}:</strong> {description}</li>)}
        </ul>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-light text-foreground">{t.contactTitle}</h2>
        <p className="mb-4">{t.contact}</p>
        <p>{t.email}: <MailLink /></p>
      </section>
      <section id="policy" className="scroll-mt-8">
        <h2 className="mb-4 text-xl font-light text-foreground">{t.privacyTitle}</h2>
        <div className="space-y-4">
          <p>{t.privacyBeforeLink}<GooglePrivacyLink>{t.privacyLink}</GooglePrivacyLink>{t.privacyAfterLink}</p>
          <p>{t.privacyLimits}</p>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-light text-foreground">{t.requirementsTitle}</h2>
        <ul className="list-outside list-disc space-y-2 pl-5">{t.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </SupportLayout>
  )
}

function FamilySupportPage({ locale }: { locale: Locale }) {
  const t = content[locale].family
  return (
    <SupportLayout locale={locale}>
      <div>
        <h1 className="mb-4 text-4xl font-extralight tracking-tight text-foreground md:text-5xl">{t.title}</h1>
        <p className="text-lg">{t.subtitle}</p>
      </div>
      <section>
        <h2 className="mb-4 text-xl font-light text-foreground">{t.contactTitle}</h2>
        <p>{t.contactBeforeEmail}<MailLink />.</p>
      </section>
      <section id="policy" className="scroll-mt-8">
        <h2 className="mb-2 text-2xl font-light text-foreground">{t.privacyTitle}</h2>
        <p className="mb-8 text-sm text-muted-foreground">{t.updated}</p>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.ownerTitle}</h3>
            <p>{t.ownerBeforeEmail}<MailLink />.</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.gameDataTitle}</h3>
            <p>{t.gameDataOne}</p>
            <p className="mt-3">{t.gameDataTwo}</p>
            <p className="mt-3">{t.gameDataThree}</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.analyticsTitle}</h3>
            <p>{t.analytics}</p>
            <p className="mt-3">{t.googleBeforeLink}<GooglePrivacyLink>{t.googleLink}</GooglePrivacyLink>.</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.adsTitle}</h3>
            <p>{t.ads}</p>
            <p className="mt-3">{t.adsBeforeLink}<GoogleAdsPrivacyLink>{t.adsLink}</GoogleAdsPrivacyLink>.</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.purchasesTitle}</h3>
            <p>{t.purchases}</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.storageTitle}</h3>
            <p>{t.storageBeforeEmail}<MailLink />{t.storageAfterEmail}</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.changesTitle}</h3>
            <p>{t.changes}</p>
          </div>
        </div>
      </section>
    </SupportLayout>
  )
}
