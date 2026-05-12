# SpiritOS Visual Design System Proposal

## North Star
SpiritOS should feel like a **quiet instrument for study**, not a social feed or growth dashboard. The visual language combines:
- a sacred archive’s restraint,
- a manuscript vault’s texture,
- an observatory’s precision,
- and a cartographic interface’s legibility.

The interface should feel like it has been curated over centuries, then translated carefully into a modern terminal.

---

## 1) Typography

### Type Roles
Use a **three-tier typography stack**:

1. **Canonical Serif (display + longform context)**
   - Purpose: titles, chapter labels, artifact headers, quotations.
   - Character: scholarly, calm, humanist; visible stroke contrast.
   - Suggested families: `Fraunces`, `Cormorant Garamond`, or `Source Serif 4`.

2. **Archival Sans (UI chrome + navigation)**
   - Purpose: menus, controls, metadata labels, chips.
   - Character: neutral, legible, low-ego.
   - Suggested families: `Inter`, `IBM Plex Sans`, or `Public Sans`.

3. **Monospace Ledger (coordinates + system metadata)**
   - Purpose: references, IDs, geocodes, timestamps, textual diffs.
   - Character: catalog terminal; strict rhythm.
   - Suggested families: `IBM Plex Mono`, `JetBrains Mono`, or `Source Code Pro`.

### Scale & Rhythm
- Base body size: **16px** (1rem).
- Scale ratio: **1.2 modular** (minor third) for readability.
- Recommended ramp:
  - Display: 48/56
  - H1: 40/48
  - H2: 32/40
  - H3: 26/34
  - H4: 22/30
  - Body L: 18/30
  - Body: 16/28
  - Body S: 14/22
  - Metadata: 12/18
- Tracking:
  - Serif headings: slight negative (`-0.01em` to `-0.02em`).
  - Sans UI labels: slight positive (`+0.01em`) in all-caps micro labels.

### Typographic Tone Rules
- Avoid loud weight shifts; prefer **weight 400–600** for most UI.
- Italics reserved for commentary, marginalia, or quoted fragments.
- Keep line length between **55–75 characters** in reading modes.

---

## 2) Spacing System

Use an **8px base grid** with 4px sub-steps for dense metadata contexts.

### Token Set
- `space-1` = 4
- `space-2` = 8
- `space-3` = 12
- `space-4` = 16
- `space-5` = 24
- `space-6` = 32
- `space-7` = 48
- `space-8` = 64
- `space-9` = 96

### Spatial Philosophy
- “Library breathing room”: default component padding should feel generous, not compressed.
- Dense clusters (tables, key-value metadata) may drop to 4/8 spacing.
- Major layout jumps should use 32/48/64 only.

### Borders & Radius
- Radius restrained: `4px` standard, `8px` for overlays/cards, no pill-heavy shapes.
- Hairline border style: `1px` low-contrast strokes.
- Emphasize grouping through spacing before color blocks.

---

## 3) Color Palette (Archival + Celestial)

### Core Neutrals
- `Ink-950` `#121417` (primary text)
- `Slate-900` `#1B2128` (dense surfaces)
- `Slate-800` `#28313B` (secondary surfaces)
- `Parchment-100` `#F2EBDD` (soft paper base)
- `Parchment-50` `#F8F4EB` (reading background)
- `Fog-200` `#D8D2C6` (rules/dividers)

### Accent Family
- `Oxide-700` `#7A4B3A` (artifact emphasis)
- `Verdigris-600` `#3E6B68` (interactive affirmations)
- `Indigo-700` `#3C476B` (navigational emphasis)
- `Astral-500` `#6A7896` (map overlays / focus paths)
- `Goldleaf-500` `#A48749` (rare highlights only)

### Semantic Usage
- Background defaults: parchment tones in study modes, slate tones in map/night modes.
- Interactive color should not exceed **10–15% total screen area**.
- “Sacred highlight” (goldleaf) limited to key discoveries, selected nodes, or canonical waypoints.

### Contrast Targets
- Body text: WCAG AA minimum (4.5:1).
- Metadata text: 4.5:1 minimum despite smaller size.
- Key overlays on maps: prefer dual encoding (color + pattern/icon) for accessibility.

---

## 4) Layout Philosophy

### Structural Model
Adopt a **three-band composition**:
1. **Left rail**: taxonomy, filters, corpus navigation.
2. **Primary canvas**: map, manuscript pane, or relationship graph.
3. **Right context panel**: metadata, provenance, references, linked entities.

### Guiding Principles
- Every screen should answer: **Where am I? What am I viewing? How is it related?**
- Encourage lateral exploration via linked references, not modal overload.
- Treat panels like drawers in an archive cabinet: predictable, reusable, labeled.

### Grid
- Desktop: 12-column fluid grid, max content width ~1440.
- Reading mode: constrain prose to ~760–820 px.
- Sticky headers for section identity and breadcrumb continuity.

### Motion
- Minimal and purposeful: fade/slide 120–220ms, standard easing.
- Motion should communicate archival retrieval (reveal, annotate, compare), never gamification.

---

## 5) Component Tone

### Surfaces
- Cards resemble catalog slips: subtle border, light background offset, modest shadow or none.
- Panels should feel “laminated metadata” rather than glossy product cards.

### Buttons
- Primary buttons are calm, low-saturation, rectangular.
- Destructive actions avoid bright red unless irreversible; prefer sober confirmation flows.
- Avoid oversized CTA language (“Boost”, “Unlock”, “Go Viral”).

### Inputs
- Form fields should read like archival entry lines:
  - clear label above,
  - helper text below,
  - subdued focus ring (indigo/verdigris).

### Tables & Metadata Blocks
- Strong support for key-value rows, provenance timelines, source citations.
- Alternate row tinting should be subtle (2–3% luminance shift).
- Monospace for identifiers and coordinate values.

### Empty States
- Tone: invitational and contemplative.
- Include a small prompt + suggested query pathways (“Browse by era”, “Locate by region”, “Trace lineage”).

---

## 6) Icon Direction

### Visual Language
- Stroke-based icons, consistent optical weight.
- Geometry references wayfinding symbols, cartographic marks, and archival stamps.
- Avoid emoji-like or playful mascot iconography.

### Style Specs
- 20px and 24px masters.
- 1.75px stroke baseline.
- Rounded joins, restrained terminals.
- Filled variants only for selected/active states.

### Motif Library
Prioritize symbols such as:
- compass, astrolabe, star chart,
- stacked folios, cabinet drawers, citation marks,
- route lines, nodes, intersections, waypoints,
- seal/ribbon marks for canonical references.

---

## 7) Token Starter (Implementation-Ready)

```css
:root {
  /* Typography */
  --font-serif: "Source Serif 4", serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;

  /* Color */
  --ink-950: #121417;
  --slate-900: #1b2128;
  --parchment-50: #f8f4eb;
  --parchment-100: #f2ebdd;
  --fog-200: #d8d2c6;
  --indigo-700: #3c476b;
  --verdigris-600: #3e6b68;
  --oxide-700: #7a4b3a;
  --goldleaf-500: #a48749;
}
```

---

## 8) Anti-Patterns Checklist

Do **not**:
- use neon gradients, glassmorphism-heavy overlays, or high-chroma glows,
- over-animate state changes,
- anthropomorphize sacred data into game mechanics,
- treat interface copy as growth marketing.

Do:
- privilege legibility,
- preserve quiet hierarchy,
- design for sustained research sessions,
- make relationships and provenance first-class UI citizens.

---

## 9) Signature SpiritOS Experience

A user opens SpiritOS and immediately senses:
- the calm of a reading room,
- the rigor of a museum database,
- and the wonder of tracing constellations across time, place, and text.

The design should disappear into the act of study.
