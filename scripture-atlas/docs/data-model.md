# Data Model

Each node is a local JSON document validated by `src/data/node.schema.json`.

Required fields:
- `slug`
- `title`
- `figures`
- `themes`
- `passages` (`torah`, `christian_bible`, `quran` arrays)
- `similarities`
- `differences` (typed objects)
- `commentary_notes`
