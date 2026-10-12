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
  "en/familijna-gra-support",
  "pl/familijna-gra-support",
]

for (const route of routes) {
  const directory = join("dist", route)
  mkdirSync(directory, { recursive: true })
  copyFileSync("dist/index.html", join(directory, "index.html"))
}

// Give direct visits and link previews the game metadata before JavaScript loads.
for (const route of ["familijna-gra", "en/familijna-gra", "pl/familijna-gra"]) {
  const locale = route.startsWith("en/") ? "en" : "pl"
  const description = locale === "pl"
    ? "Familijna Gra — quiz po polsku na iPhone’a. Zgaduj popularne odpowiedzi, graj online lub z botem i zdobywaj punkty dla swojej rodziny."
    : "Familijna Gra — a Polish quiz for iPhone. Guess popular answers, play online or against a bot, and win points for your family."
  const file = join("dist", route, "index.html")
  const url = `https://pjanecze.xyz/${locale}/familijna-gra`
  const html = readFileSync(file, "utf8")
    .replace('<html lang="en">', `<html lang="${locale}">`)
    .replace(/<title>.*?<\/title>/, `<title>${locale === "pl" ? "Familijna Gra — Quiz na iPhone’a" : "Familijna Gra — Polish quiz for iPhone"}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace("</head>", `    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="pl" href="https://pjanecze.xyz/pl/familijna-gra" />
    <link rel="alternate" hreflang="en" href="https://pjanecze.xyz/en/familijna-gra" />
    <meta property="og:title" content="Familijna Gra" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="https://pjanecze.xyz/images/familijna-gra/social.webp" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>`)
  writeFileSync(file, html)
}
