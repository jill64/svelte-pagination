<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-pagination

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/npm/v/@jill64/svelte-pagination" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/npm/l/@jill64/svelte-pagination" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/npm/dm/@jill64/svelte-pagination" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-pagination" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-pagination/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-pagination/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a><!----- END GHOST DOCS BADGES ----->

📖 Pagination component for Svelte

## [Demo](https://stackblitz.com/edit/jill64-svelte-pagination?file=src%2Froutes%2FDemo.svelte)

<!----- END GHOST DOCS HEADER ----->

## Installation

```bash
npm i @jill64/svelte-pagination
```

## Quick Example

```svelte
<!-- /src/route/[page=int]/+page.svelte -->
<script>
  import { Paginate } from '@jill64/svelte-pagination'

  export let data

  $: ({ lastPage } = data)
</script>

<Paginate {lastPage} slug="[page=int]" />
```

## Key Feature

This component uses SvelteKit route parameters for page management.  
This enables SvelteKit features like preloading and prefetching when out of the box.  
Therefore, it is necessary to pass the ID of the route parameter that manages the number of pages to the `Paginate` component as the `slug` property.

## Optional Props

| name            | default       | description                         |
| --------------- | ------------- | ----------------------------------- |
| `sideSize`      | `2`           | Number of pages from start/end page |
| `centerSize`    | `3`           | Number of pages from current page   |
| `previousLabel` | `＜ Previous` | Previous button label               |
| `nextLabel`     | `Next ＞`     | Next button label                   |

## Calculate Last Page

You can also use the included utility functions to calculate the last page.

```svelte
<!-- /src/route/[page=int]/+page.svelte -->
<script>
  import { Paginate, calcLastPage } from '@jill64/svelte-pagination'

  export let data

  $: ({ totalCount } = data)
</script>

<Paginate
  lastPage={calcLastPage({
    total: totalCount
    per: 30 // Count per page
  })}
  slug="[page=int]"
/>
```

## Styling

| class                      | description            |
| -------------------------- | ---------------------- |
| `.paginate-container`      | Container Area         |
| `.paginate-page-link`      | Page Link              |
| `.paginate-navigation`     | Navigation Link        |
| `.paginate-rest-indicator` | Rest Indicator (...)   |
| `.paginate-current-page`   | Current Page Indicator |
