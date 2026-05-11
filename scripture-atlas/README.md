# SpiritOS

SpiritOS is a digital humanities platform for comparative sacred-text research.

**Scripture Atlas** is its first module/application: an alignment workspace for tracing how related traditions narrate shared figures, events, and themes.

## Mission Statement

SpiritOS supports rigorous, transparent comparison of sacred traditions while preserving theological difference and historical context.

## Core Principles

- Alignment without forced equivalence
- Comparative sacred-text mapping
- Preservation of theological difference
- Interpretive transparency
- Historical contextualization
- Archival/research tone

## Scripture Atlas (Module 01)

Scripture Atlas currently maps selected narrative nodes across the Torah, Christian Bible, and Qur’an. Each node includes aligned passages, difference lenses, and source metadata for interpretive traceability.

## Current Node Set

- Creation / Adam
- Noah / Nuh
- Abraham / Ibrahim
- Joseph / Yusuf
- Moses / Musa

## Repository Structure

```text
scripture-atlas/
  README.md
  package.json
  src/
    app/
      page.tsx
      nodes/[slug]/page.tsx
      philosophy/page.tsx
    components/
      MainNav.tsx
      TriptychReader.tsx
      StoryNodeCard.tsx
      TimelineView.tsx
      DifferenceTags.tsx
    data/
      nodes/
        creation.json
        noah.json
        abraham.json
        joseph.json
        moses.json
  docs/
    concept.md
    data-model.md
    roadmap.md
```

## Quick Start

```bash
npm install
npm run dev
```
