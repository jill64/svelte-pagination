<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import { attempt } from '@jill64/attempt'
  import clamp from 'lodash/clamp.js'
  import Navigation from './Navigation.svelte'
  import PageLink from './PageLink.svelte'
  import RestIndicator from './RestIndicator.svelte'
  import { natural } from './natural.js'

  export let lastPage: number
  export let slug: `[${string}]` | `[${string}=${string}]`
  export let sideSize = 2
  export let centerSize = 3
  export let Class = ''
  export let previousLabel = '＜ Previous'
  export let nextLabel = 'Next ＞'

  $: routeId = $page.route.id
  $: key = slug.slice(1, slug.includes('=') ? slug.indexOf('=') : -1)
  $: current = attempt(() => parseInt($page.params[key]), 1)

  $: last = Math.ceil(clamp(lastPage, 1, Infinity))
  $: side = Math.ceil(clamp(sideSize, 1, last))
  $: wing = clamp(Math.floor((centerSize - 1) / 2), 0, last)

  $: remainLeft = clamp(current - 1, 0, last - 1)
  $: remainRight = clamp(last - current, 0, last - 1)

  $: baseDepth = base.match(/\//g)?.length ?? 0
  $: pathArray = $page.url.pathname.split('/')
  $: replaceIndex = routeId
    ? routeId.split('/').indexOf(slug) + baseDepth
    : null

  $: makeHref = (target: number) => {
    if (!replaceIndex) {
      return ''
    }

    const pathname = [
      ...pathArray.slice(0, replaceIndex),
      target.toString(),
      ...pathArray.slice(replaceIndex + 1)
    ].join('/')

    return `${pathname}${$page.url.search}${$page.url.hash}`
  }
</script>

<div
  style:display="flex"
  style:justify-content="center"
  style:align-items="center"
  style:container-type="inline-size"
  class="paginate-container {Class}"
>
  <Navigation
    show={remainLeft > 0}
    label={previousLabel}
    page={current - 1}
    {last}
    {makeHref}
  />
  {#each natural(side) as n}
    <PageLink show={remainLeft > n} page={n + 1} {last} {makeHref} />
  {/each}
  <RestIndicator show={side < current - wing - 1} />
  {#each natural(wing) as n}
    {@const reverseIndex = wing - n}
    {@const page = current - reverseIndex}
    <PageLink show={page > side} {page} {last} {makeHref} />
  {/each}
  <span class="paginate-current-page">
    {current}
  </span>
  {#each natural(wing) as n}
    {@const page = current + n + 1}
    <PageLink show={page <= last - side} {page} {last} {makeHref} />
  {/each}
  <RestIndicator show={current + wing < last - side} />
  {#each natural(side) as n}
    {@const reverseIndex = side - n - 1}
    <PageLink
      show={remainRight > reverseIndex}
      page={last - reverseIndex}
      {last}
      {makeHref}
    />
  {/each}
  <Navigation
    show={remainRight > 0}
    label={nextLabel}
    page={current + 1}
    {last}
    {makeHref}
  />
</div>

<style>
  div {
    gap: 1rem;
  }
</style>
