# SpiritOS

SpiritOS is an open-source platform for comparative sacred-text exploration. Its first module, **Scripture Atlas**, maps shared stories, figures, and themes across the Torah, Christian Bible, and Qur’an.

The project does not attempt to flatten these traditions into sameness. Instead, it visualizes how related sacred traditions preserve, reinterpret, and diverge around shared narrative memory.

## Core Question

How do Abrahamic traditions remember the same figures and events differently?

## Initial Nodes

- Creation / Adam
- Noah / Nuh
- Abraham / Ibrahim
- Joseph / Yusuf
- Moses / Musa

## Project Structure

```
scripture-atlas/
  README.md
  package.json
  src/
    app/
      page.tsx
      nodes/[slug]/page.tsx
    components/
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
  public/
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
