# Lighter marketing page

`/lighter/`, `/en/lighter/` and `/pl/lighter/` use `src/LighterPage.tsx`,
the `lighterApp` translations in `src/content.ts`, and SEO metadata in
`scripts/prepare-routes.mjs`. The portfolio home page also has a short Lighter description.

## Store media

The current images were downloaded from the public App Store listing for version 3.5.0,
in Polish and English. Each language uses a hero and six gallery screenshots:
3D mode, Studio 3D, catalog, tilt, Studio photos and theme likes. They are stored as
860 × 1867 WebP files in `public/images/lighter/`.

The localized 29-second App Previews from release 3.4.0 carried forward to 3.5.0.
Their source files are in the Lighter iOS checkout under
`output/app-preview/release-3.4.0/{pl,en-US}/preview.mp4`.
The website copies are in `public/videos/lighter/preview-{pl,en}.mp4`, compressed
to H.264/AAC at 720 × 1560 with fast-start metadata, about 3 MB each.
Posters use the frame at two seconds, exported as WebP.

The player has native controls, inline playback and `preload="none"`. It starts
only on request, with no autoplay or initial video download. `key={locale}` reloads
the correct source when the visitor switches language. The preview has mechanical
sounds and localized onscreen captions, with no spoken narration.

Refresh images and copy together when the live App Store listing changes.
Keep the free/Premium distinction accurate; sharing Studio designs requires iCloud.
