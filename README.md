# Sjøgren's Travel

A 1980s travel-agency style website for a 3-day, adults-only food, wine and pleasure trip to Palma de Mallorca.
There is exactly one bookable departure: **Friday 10 – Sunday 12 September 2027** (Copenhagen → Palma).

## Run it

It is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Files

- `index.html`: the page (hero, gallery, eat/wine/pleasure, programme, booking)
- `styles.css`: the retro 80s design (chrome type, neon, polaroids, boarding pass, Text-TV)
- `script.js`: the booking form. It is a demo and sends nothing; the confirmation is shown on the page.
- `images/`: vector illustrations

## Replacing the illustrations

To replace the illustrations with photos, use images matching these descriptions and keep the same file names (as `.jpg`/`.png`, updating the `src` in `index.html`):

| File | Prompt |
|---|---|
| hero-sunset | 1980s travel brochure photo, sunset over the Bay of Palma, La Seu cathedral, palm trees, party yacht with string lights, warm film grain, Kodachrome colours |
| yacht-party | 1980s magazine photo, adults toasting cava on a yacht deck at golden hour off Mallorca, pastel swimwear, film grain |
| rooftop-cocktails | 1985 travel ad, rooftop cocktail bar over Palma old town at dusk, neon, fairy lights, stylish adults |
| wine-tasting | 1980s postcard, wine tasting in a Binissalem vineyard during harvest, Tramuntana mountains, checkered tablecloth |
| tapas | overhead 1980s food photo, Mallorcan tapas: pa amb oli, sobrassada, olives, gambas, vermouth, blue tiled table |
| disco-night | 1980s disco in Palma, mirror ball, neon lights, adults dancing, flash photography |
| ensaimada | 1980s hotel brochure, breakfast tray with ensaïmada and cava by a sunny balcony overlooking the sea |
