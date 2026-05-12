# Data Model

Each node is a local JSON document validated by `src/data/node.schema.json`.

## Core required fields
- `slug`
- `title`
- `figures`
- `themes`
- `alignment_rows`
- `similarities`
- `differences`
- `source_metadata`
- `commentary_notes`

## Graph-compatible extension (lightweight, JSON-first)

SpiritOS now supports optional graph primitives directly inside each story node:

- `graph_entities`: local declarations of reusable node references.
- `relationships`: typed directed edges for many-to-many links.

This keeps the initial implementation lightweight (single JSON payload) while remaining forward-compatible with dedicated graph stores and visualization layers.

### `graph_entities`
Each entity includes:
- `id` (stable key, recommended format: `<entity_type>:<slug>`)
- `entity_type` (`story_node`, `figure`, `theme`, `location`, `concept`)
- `label` (display string)

### `relationships`
Each edge includes:
- `edge_id` (stable edge identifier)
- `from` (source entity id)
- `to` (target entity id)
- `type` (typed relationship)
- optional metadata (`weight`, `confidence`, `source_refs`, `metadata`)

Initial `type` values:
- `has_figure`
- `has_theme`
- `located_in`
- `related_concept`
- `parent_of`
- `sibling_of`
- `associated_with`
- `symbolizes`
- `fulfills`

## Scalability notes
- **Many-to-many by design:** any entity can connect to many others via edges.
- **Typed edges:** relation semantics can evolve without changing base node schema.
- **Migration-safe:** `graph_entities` and `relationships` are optional, so legacy nodes remain valid.
- **Visualization-ready:** stable ids and directed edges map cleanly to force graphs, trees, and path explorers later.
