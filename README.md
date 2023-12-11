<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-pagination

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-pagination)](https://npmjs.com/package/@jill64/svelte-pagination) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-pagination)](https://npmjs.com/package/@jill64/svelte-pagination) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-pagination)](https://npmjs.com/package/@jill64/svelte-pagination) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-pagination)](https://npmjs.com/package/@jill64/svelte-pagination) [![ci.yml](https://github.com/jill64/svelte-pagination/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-pagination/actions/workflows/ci.yml) [![stackblitz](https://img.shields.io/badge/StackBlitz-jill64--svelte--pagination-dodgerblue)](https://stackblitz.com/edit/jill64-svelte-pagination?file=src%2Froutes%2FDemo.svelte)

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
