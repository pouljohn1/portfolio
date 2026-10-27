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
  "en/familijna-gra-support",
  "pl/familijna-gra-support",
  "familijna-gra-support/1.1",
  "en/familijna-gra-support/1.1",
  "pl/familijna-gra-support/1.1",
]

for (const route of routes) {
  const directory = join("dist", route)
  mkdirSync(directory, { recursive: true })
  copyFileSync("dist/index.html", join(directory, "index.html"))
}

// Give direct visits and link previews the app metadata before JavaScript loads.
const pages = [
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
      pl: "Familijna Gra — quiz po polsku na iPhone’a. Zgaduj popularne odpowiedzi, graj online lub z botem i zdobywaj punkty dla swojej rodziny.",
      en: "Family Showdown - the English edition of the family guessing game for iPhone. Guess popular answers, play Solo chapters, duel online or against a bot, and win points for your family.",
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
      pl: "Lighter Simulator - realistyczna wirtualna zapalniczka na iPhone’a z płomieniem reagującym na ruch, gotowymi motywami i Studio na własne projekty.",
      en: "Lighter Simulator - a realistic virtual lighter for iPhone with a flame that reacts to tilt, ready-made themes and a Studio for your own designs.",
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
