# Plant Care

A local-first web app for looking after your plants, tuned for homes and gardens in Denmark.

- **My plants** – your collection with a picture per plant (your own photo, a Wikipedia photo, or one you pick from Wikimedia Commons).
- **Care guides** – 80 common indoor and outdoor plants with watering, light, soil, temperature, feeding, repotting, pruning, problems and Denmark-specific seasonal tips. Danish and Latin names included; search in any of them.
- **Reminders** – adding a plant creates its default schedule (water, fertilize, repot, prune, …). Intervals stretch automatically October–March, seasonal jobs are limited to the right months, and every reminder can be edited, paused or snoozed. Marking a task done logs it in the plant's history.
- **Identify** – no AI. Pick the traits you can see (leaf shape, pattern, flower colour, habit, size, placement) and compare your own photo side by side with catalog photos. Everything stays on your device.
- **Installable** – works as a Progressive Web App on phone and desktop; data is stored in the browser (IndexedDB). Export/import a JSON backup from Settings.

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL. For a production build: `npm run build` and serve the `dist/` folder (any static host works, e.g. GitHub Pages, Netlify, Vercel).

## Reminders when the app is closed

Browsers do not let a web page wake itself up. The app shows a daily notification while it is open or installed and running; for reliable alerts, use **Settings → Export calendar (.ics)** and import the file into Google Calendar, Apple Calendar or Outlook. Re-export after adding plants or changing schedules.

## Project layout

```
src/data/types.ts        plant schema
src/data/plants/         catalog (indoor-a, indoor-b, outdoor-a, outdoor-b)
src/data/catalog.ts      aggregation + search
src/lib/db.ts            IndexedDB (Dexie) tables: userPlants, reminders, careLogs
src/lib/schedule.ts      due-date math (winter intervals, seasonal months)
src/lib/wikipedia.ts     Wikipedia / Wikimedia Commons image lookup
src/lib/identify.ts      trait matching
src/lib/ics.ts           calendar export
src/pages/               Today, My plants, Plant detail, Add/Edit, Catalog, Catalog plant, Identify, Settings
```

## Adding plants to the catalog

Add an entry to one of the files in `src/data/plants/` following `Plant` in `src/data/types.ts`. `wikipediaTitle` must be the exact English Wikipedia article title; the photo is fetched from there.

## Credits

Photos: Wikipedia and Wikimedia Commons, under their respective licences. Care advice is general guidance; adjust to your own conditions.
