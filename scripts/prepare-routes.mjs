import { copyFileSync, mkdirSync } from "node:fs"
import { join } from "node:path"

const routes = [
  "lighter-support",
  "familijna-gra-support",
  "en",
  "pl",
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
