<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-pagination

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/npm/v/@jill64/svelte-pagination" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/npm/l/@jill64/svelte-pagination" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/npm/dm/@jill64/svelte-pagination" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-pagination"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-pagination" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-pagination/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-pagination/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-pagination.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-pagination.jill64.dev" alt="website" /></a><!----- END GHOST DOCS BADGES ----->

📖 Pagination component for Svelte

## [Demo](https://svelte-pagination.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Installation

```bash
npm i @jill64/svelte-pagination
```

## Quick Example

```svelte
<!-- /src/route/[page=int]/+page.svelte -->
<script>
  import { PaginateItems } from '@jill64/svelte-pagination'

  export let data

  $: ({ lastPage } = data)
</script>

<div>
  <PaginateItems {lastPage} slug="[page=int]" />
</div>

<style>
  div {
    /* Your Navigation Box Style */
  }
  div :global(.paginate-page-link) {
    /* Page Link Style */
  }
  div :global(.paginate-navigation) {
    /* Navigation Link Style */
  }
  div :global(.paginate-rest-indicator) {
    /* Rest Indicator (...) Style */
  }
  div :global(.paginate-current-page) {
    /* Current Page Indicator Style */
  }
</style>
```

## Key Feature

This component uses SvelteKit route parameters for page management.  
This enables SvelteKit features like preloading and prefetching when out of the box.  
Therefore, it is necessary to pass the ID of the route parameter that manages the number of pages to the `Paginate` component as the `slug` property.

## Keyboard Navigation

By default, the `PaginateItems` component is keyboard navigable.

| key     | action        |
| ------- | ------------- |
| `→`     | Next Page     |
| `⌘ + →` | Last Page     |
| `←`     | Previous Page |
| `⌘ + ←` | First Page    |

This behavior can be disabled by passing `disableKeyboardNavigation`prop.

## Optional Props

| name            | default       | description                         |
| --------------- | ------------- | ----------------------------------- |
| `sideSize`      | `2`           | Number of pages from start/end page |
| `centerSize`    | `3`           | Number of pages from current page   |
| `previousLabel` | `＜ Previous` | Previous button label               |
| `nextLabel`     | `Next ＞`     | Next button label                   |
| `firstLabel`    | `＜＜`        | First button label                  |
| `lastLabel`     | `＞＞`        | Last button label                   |

> [!NOTE]
> You can always hide that label by setting the value of the label prop to Falsy.

## Calculate Last Page

You can also use the included utility functions to calculate the last page.

```svelte
<!-- /src/route/[page=int]/+page.svelte -->
<script>
  import { PaginateItems, calcLastPage } from '@jill64/svelte-pagination'

  export let data

  $: ({ totalCount } = data)
</script>

<div>
  <PaginateItems
    lastPage={calcLastPage({
      total: totalCount
      per: 30 // Count per page
    })}
    slug="[page=int]"
  />
</div>
```

## Prepared Page Param Matcher

Integer parameter matcher (commonly used for pagination) is available.

```js
// /src/params/int.js
export { int as match } from '@jill64/svelte-pagination'
```

## Migrate from v1

In v2, container elements are now user-managed.  
Instead of `<Paginate>`, you must use `<PaginateItems>` and wrap it with any element.  
This allows for more fine-grained styling and manipulation of container elements.

- The `.paginate-container` class is no longer used.

```diff
<script>
-  import { Paginate } from '@jill64/svelte-pagination'
+  import { PaginateItems } from '@jill64/svelte-pagination'

  export let data

  $: ({ lastPage } = data)
</script>

+ <div>
-  <Paginate {lastPage} slug="[page=int]" />
+  <PaginateItems {lastPage} slug="[page=int]" />
+ </div>
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
