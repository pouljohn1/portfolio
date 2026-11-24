import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const routes = [
  "domalert",
  "lighter-support",
  "familijna-gra-support",
  "familijna-gra",
  "en/familijna-gra",
  "pl/familijna-gra",
  "en",
  "pl",
  "en/domalert",
  "pl/domalert",
  "en/lighter-support",
  "pl/lighter-support",
  "lighter",
  "en/lighter",
  "pl/lighter",
  "cachelift",
  "en/cachelift",
  "pl/cachelift",
  "en/familijna-gra-support",
  "pl/familijna-gra-support",
  "familijna-gra-support/1.1",
  "en/familijna-gra-support/1.1",
  "pl/familijna-gra-support/1.1",
  "familijna-gra-support/1.2",
  "en/familijna-gra-support/1.2",
  "pl/familijna-gra-support/1.2",
  "familijna-gra-support/1.3",
  "en/familijna-gra-support/1.3",
  "pl/familijna-gra-support/1.3",
  "familijna-gra-support/1.5",
  "en/familijna-gra-support/1.5",
  "pl/familijna-gra-support/1.5",
  "familijna-gra-support/1.6",
  "en/familijna-gra-support/1.6",
  "pl/familijna-gra-support/1.6",
]

for (const route of routes) {
  const directory = join("dist", route)
  mkdirSync(directory, { recursive: true })
  copyFileSync("dist/index.html", join(directory, "index.html"))
}

// Give direct visits and link previews the app metadata before JavaScript loads.
const pages = [
  {
    path: "cachelift",
    name: { pl: "CacheLift", en: "CacheLift" },
    defaultLocale: "en",
    image: () => "https://pjanecze.xyz/images/cachelift/scan.webp",
    card: () => "summary_large_image",
    title: {
      pl: "CacheLift - odzyskaj miejsce na swoim Macu",
      en: "CacheLift - reclaim space on your Mac",
    },
    description: {
      pl: "CacheLift - darmowa aplikacja na Maca. Znajdź pamięć podręczną aplikacji, stare pobrane pliki i pozostałości, sprawdź ryzyko i wybierz, co usunąć.",
      en: "CacheLift - a free macOS app to find app caches, old downloads and unused files, review their risks and choose what to clean.",
    },
  },
  {
    path: "familijna-gra",
    name: { pl: "Familijna Gra", en: "Family Showdown" },
    defaultLocale: "pl",
    // The social image is Polish artwork, so the English page has none until an English one exists.
    image: (locale) => (locale === "pl" ? "https://pjanecze.xyz/images/familijna-gra/social.webp" : null),
    card: (locale) => (locale === "pl" ? "summary_large_image" : "summary"),
    title: {
      pl: "Familijna Gra — Quiz na iPhone’a",
      en: "Family Showdown - a family guessing game for iPhone",
    },
    description: {
      pl: "Familijna Gra — quiz na iPhone’a: pytanie dnia, wyzwania Solo, pojedynki online i gra z botem bez internetu. Zgaduj odpowiedzi i zdobywaj punkty.",
      en: "Family Showdown - a family guessing game for iPhone with a Daily Question, Solo challenges, online duels and offline bot matches.",
    },
  },
  {
    path: "lighter",
    name: { pl: "Lighter Simulator", en: "Lighter Simulator" },
    defaultLocale: "en",
    image: (locale) => `https://pjanecze.xyz/images/lighter/flame-${locale}.webp`,
    card: () => "summary",
    title: {
      pl: "Lighter Simulator - realistyczna zapalniczka na iPhone’a",
      en: "Lighter Simulator - a realistic lighter for iPhone",
    },
    description: {
      pl: "Lighter Simulator - zapalniczki 3D, palniki Twin Jet i Studio do własnych projektów na iPhone’a i iPada.",
      en: "Lighter Simulator - 3D lighters, Twin Jet torches and a Studio for your own designs on iPhone and iPad.",
    },
  },
]

for (const page of pages) {
  for (const route of [page.path, `en/${page.path}`, `pl/${page.path}`]) {
    const locale = route.startsWith("en/") ? "en" : route.startsWith("pl/") ? "pl" : page.defaultLocale
    const description = page.description[locale]
    const image = page.image(locale)
    const file = join("dist", route, "index.html")
    const url = `https://pjanecze.xyz/${locale}/${page.path}`
    const html = readFileSync(file, "utf8")
      .replace('<html lang="en">', `<html lang="${locale}">`)
      .replace(/<title>.*?<\/title>/, `<title>${page.title[locale]}</title>`)
      .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
      .replace("</head>", `    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="pl" href="https://pjanecze.xyz/pl/${page.path}" />
    <link rel="alternate" hreflang="en" href="https://pjanecze.xyz/en/${page.path}" />
    <meta property="og:title" content="${page.name[locale]}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
${image ? `    <meta property="og:image" content="${image}" />\n` : ""}    <meta name="twitter:card" content="${page.card(locale)}" />
  </head>`)
    writeFileSync(file, html)
  }
}
