import { useEffect, type ReactNode } from "react"
import { ArrowLeft, Linkedin, Moon, Sun, Twitter } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { content, type Locale } from "./content"

type Page = "home" | "lighter" | "family"

function currentPage(pathname: string): Page {
  const path = pathname.replace(/^\/(en|pl)(?=\/|$)/, "").replace(/\/$/, "")
  if (path === "/lighter-support") return "lighter"
  if (path === "/familijna-gra-support") return "family"
  return "home"
}

function currentLocale(pathname: string): Locale {
  const match = pathname.match(/^\/(en|pl)(?=\/|$)/)
  if (match) return match[1] as Locale
  return navigator.language.toLowerCase().startsWith("pl") ? "pl" : "en"
}

function localizedPath(locale: Locale, page: Page) {
  const suffix = page === "lighter" ? "/lighter-support" : page === "family" ? "/familijna-gra-support" : ""
  return `/${locale}${suffix}`
}

export function App() {
  const page = currentPage(window.location.pathname)
  const locale = currentLocale(window.location.pathname)
  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = `${page === "home" ? "Paweł Janeczek" : t[page].title} — Portfolio`
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta[page])
  }, [locale, page, t])

  return (
    <PageShell locale={locale} page={page}>
      {page === "lighter" ? <LighterSupportPage locale={locale} /> : page === "family" ? <FamilySupportPage locale={locale} /> : <HomePage locale={locale} />}
    </PageShell>
  )
}

function PageShell({ children, locale, page }: { children: ReactNode; locale: Locale; page: Page }) {
  const t = content[locale].controls

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-6 pt-6">
        <nav aria-label={t.language} className="flex items-center gap-0.5">
          {(["en", "pl"] as const).map((option) => (
            <Button key={option} asChild variant={locale === option ? "secondary" : "ghost"} size="sm" className="h-8 min-w-11 px-2">
              <a href={`${localizedPath(option, page)}${window.location.hash}`} lang={option} aria-current={locale === option ? "page" : undefined}>
                {option.toUpperCase()}
              </a>
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
          <PortfolioLink href="https://domalert.pl" title="domalert.pl" description={t.domalert} />
          <PortfolioLink href="https://poliswar.xyz" title="poliswar.xyz" description={t.poliswar} />
          <PortfolioLink href="https://apps.apple.com/us/app/lighter-simulator/id6758013623" title="Lighter Simulator" description={t.lighter} />
          <PortfolioLink href={localizedPath(locale, "family")} title="Familijna Gra" description={t.family} />
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-10 text-xl font-extralight tracking-wide text-muted-foreground">{t.work}</h2>
        <div className="space-y-4">
          <PortfolioLink href="https://intercars.eu" title="intercars.eu" description={t.intercars} />
          <PortfolioLink href="https://hacklab.so" title="hacklab.so" label={t.previous} description={t.hacklab} />
        </div>
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

function PortfolioLink({ href, title, description, label }: { href: string; title: string; description: string; label?: string }) {
  const external = href.startsWith("http")
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="block border-l border-border py-2 pl-6 transition-all hover:border-foreground/60 hover:pl-8">
      <h3 className="text-lg font-light text-foreground">
        {title}
        {label ? <span className="ml-2 text-sm font-normal text-muted-foreground">{label}</span> : null}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </a>
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

function SupportLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-14 md:pb-32 md:pt-20">
      <Button asChild variant="ghost" className="-ml-3 mb-8 text-muted-foreground">
        <a href={localizedPath(locale, "home")}><ArrowLeft className="size-4" aria-hidden="true" />{content[locale].controls.back}</a>
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
          </div>
          <div>
            <h3 className="mb-3 text-lg font-light text-foreground">{t.analyticsTitle}</h3>
            <p>{t.analytics}</p>
            <p className="mt-3">{t.googleBeforeLink}<GooglePrivacyLink>{t.googleLink}</GooglePrivacyLink>.</p>
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
