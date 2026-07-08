# Work Section Interactions Design

## Goal

Add three portfolio interactions that make the selected work section more useful without making the landing page feel longer: project quick preview, filterable archive, and a Clean/Proof build mode.

## Features

### Project Quick Preview

Each featured project card includes a `Quick preview` button. Activating it opens an accessible modal panel with the selected project's title, platform/type, goal, role, conversion focus, stack, proof note, and live site link when available.

The modal can be closed with a visible close button. The feature must work on desktop and mobile, so it is click-driven rather than hover-only.

### Filterable Compact Archive

The compact archive gets filter pills for `All`, `Shopify`, `WordPress`, and `Advertorial`. Filtering updates the archive rows and count, resets pagination to page 1, and preserves the existing page-size behavior.

Pagination reflects the filtered project count. If a filter has fewer than one full page of projects, invisible placeholder rows keep the archive height stable.

### Clean/Proof Build Mode

The selected work section gets a mode toggle with `Clean mode` and `Proof mode`.

Clean mode keeps the featured cards compact and portfolio-like. Proof mode reveals extra project strategy details such as conversion focus, build role, and stack/proof notes. This gives visitors a playful inspection layer without cluttering the default view.

## UI Placement

- Place the Build Mode toggle near the selected work section header.
- Place each `Quick preview` button beside the existing `Visit live site` action on featured cards.
- Place archive filter pills above the archive list, below the `Compact project archive` heading.

## Data Model

Featured projects use existing fields and add optional fields for:

- `goal`
- `conversionFocus`
- `stack`

Archive projects use their existing `platform` field for filtering.

## Accessibility

- Quick preview opens a `dialog` with an accessible name.
- Modal close button is keyboard reachable.
- Filter buttons expose active state with `aria-pressed`.
- Build mode buttons expose active state with `aria-pressed`.

## Testing

Tests should verify:

- Quick preview opens with the selected project details and closes.
- Archive filters show matching projects, hide non-matching projects, and reset to page 1.
- Filtered pagination count and disabled states are correct.
- Proof mode reveals extra project details while Clean mode hides them.
