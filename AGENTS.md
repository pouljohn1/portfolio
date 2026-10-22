# Instrukcje dla agentów

Statyczna strona `pjanecze.xyz`: portfolio autora oraz strony wsparcia, polityki prywatności i strony marketingowe jego aplikacji. Inne repozytoria (np. `~/Workspace/familiada`, `~/Workspace/LighterIOS`) linkują tutaj z App Store Connect i z samych aplikacji.

## Struktura

- Vite + React + `react-router`, budowane do `dist/`.
- Cała treść (en i pl) jest w `src/content.ts`. Routing stron w `src/App.tsx` (`currentPage`), osobne widoki np. `src/FamilyGamePage.tsx`.
- Obrazy w `public/images/<projekt>/`, pliki statyczne z korzenia domeny w `public/`.
- `scripts/prepare-routes.mjs` kopiuje `index.html` do katalogu każdej trasy i wstrzykuje metadane SEO dla `familijna-gra`. Nowa trasa wymaga wpisu w tym skrypcie i w `currentPage`.

## Adresy używane przez aplikacje

Nie zmieniaj ani nie usuwaj tych tras bez aktualizacji App Store Connect i aplikacji, które do nich linkują. Każda ma wersje `/en/...` i `/pl/...`.

- `/familijna-gra-support/` - wsparcie i polityka prywatności Familijnej Gry 1.0 (`#policy`), podpięte w ASC i w wydanej aplikacji.
- `/familijna-gra-support/1.1/` - ta sama strona z polityką dla wersji 1.1 aplikacji.

Polityka Familijnej Gry jest wersjonowana, bo wydana aplikacja i jej listing muszą wskazywać politykę zgodną z tym, co robi dana wersja. Najnowsza treść jest w `content.<locale>.family`; starsze wersje to obiekty nadpisań (np. `policy10`), a pusta sekcja jest ukrywana. Wersję i jej trasę wybierają `latestFamilyPolicy` i `familyPolicyVersion` w `src/App.tsx`. Zmiana polityki dla nowej wersji aplikacji: dodaj nową trasę (także w `prepare-routes.mjs`), a dotychczasową treść zachowaj jako nadpisania pod jej dotychczasowym adresem.
- `/familijna-gra/` - marketing URL Familijnej Gry. AdMob szuka `app-ads.txt` w tej domenie.
- `/lighter-support/` - wsparcie i polityka Lightera. Lighter w ASC nadal wskazuje stare hosty (`portfolio.pjanecze.chatgpt.site/lighter-support/#policy` i `v0-paul-lab.vercel.app/lighter-support`); nie wyłączaj ich, dopóki wydana wersja Lightera nie przejdzie na `pjanecze.xyz`.
- `/domalert/` - strona DomAlert.
- `/app-ads.txt` - wspólny dla wszystkich aplikacji z reklamami. Dopisuj wpisy, nie nadpisuj istniejących.

Zmiana zbieranych danych w aplikacji (SDK, analityka, reklamy, zakupy) wymaga aktualizacji polityki prywatności tutaj, daty „Last updated” w obu językach oraz App Privacy w ASC danej aplikacji.

## Build i publikacja

- Hosting: Cloudflare Workers static assets, worker `pjanecze-xyz` (`wrangler.jsonc`), konto Cloudflare `fecfc3afb2a5410b98496ac81d8b56b0`. Strefa DNS `pjanecze.xyz` jest w tym samym koncie.
- `pnpm build` buduje `dist/`. `pnpm run deploy` buduje i publikuje przez `wrangler deploy`. Push na GitHub niczego nie publikuje.
- Podgląd przed publikacją: `pnpm preview` lokalnie albo `https://pjanecze-xyz.pjanecze.workers.dev`.
- `www.pjanecze.xyz` obsługuje osobny Worker `pjanecze-xyz-www-redirect` (`workers/www-redirect/`), który przekierowuje 301 na domenę główną z zachowaniem ścieżki. Publikacja: `pnpm exec wrangler deploy -c workers/www-redirect/wrangler.jsonc`.
- `public/_headers` ustawia roczny cache `immutable` dla `/assets/*` (pliki z hashem). HTML i pozostałe pliki są rewalidowane przy każdym żądaniu, więc nowa wersja jest widoczna od razu.
- Publikacja jest operacją zewnętrzną: wykonuj ją tylko na prośbę użytkownika.

## Weryfikacja po publikacji

- Strona to SPA, więc `curl` trasy zwraca tylko szkielet HTML. Treść sprawdzaj w opublikowanym bundle'u: nazwa pliku z `<script src="/assets/index-*.js">`, potem `grep` charakterystycznych zdań.
- Sprawdź kody odpowiedzi tras z listy powyżej oraz treść `https://pjanecze.xyz/app-ads.txt`.
