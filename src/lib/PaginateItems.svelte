<script lang="ts">
  import { goto } from '$app/navigation'
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  import Navigation from './Navigation.svelte'
  import PageLink from './PageLink.svelte'
  import RestIndicator from './RestIndicator.svelte'
  import { clamp } from './utils/clamp.js'
  import { convertInt } from './utils/convertInt'
  import { natural } from './utils/natural.js'

  export let lastPage: number
  export let slug:
    | `[[${string}]]`
    | `[${string}]`
    | `[${string}=${string}]`
    | `[[${string}=${string}]]`
  export let sideSize = 2
  export let centerSize = 3
  export let previousLabel: string | null = '＜ Previous'
  export let firstLabel: string | null = '＜＜'
  export let nextLabel: string | null = 'Next ＞'
  export let lastLabel: string | null = '＞＞'
  export let disableKeyboardNavigation = false

  $: routeId = $page.route.id
  $: key = slug.startsWith('[[')
    ? slug.slice(2, slug.includes('=') ? slug.indexOf('=') : -2)
    : slug.slice(1, slug.includes('=') ? slug.indexOf('=') : -1)
  $: current = convertInt($page.params[key], 1)

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

  $: onKeyPress = (e: KeyboardEvent) => {
    if (disableKeyboardNavigation || e.repeat) {
      return
    }

    const n =
      e.key === 'ArrowLeft' && current > 1
        ? e.metaKey
          ? 1
          : current - 1
        : e.key === 'ArrowRight' && current < last
          ? e.metaKey
            ? last
            : current + 1
          : 0

    if (n) {
      goto(makeHref(n))
      e.preventDefault()
    }
  }
</script>

<svelte:window on:keydown={onKeyPress} />

{#if firstLabel}
  <Navigation
    show={remainLeft > 1}
    label={firstLabel}
    page={1}
    {last}
    {makeHref}
  />
{/if}
{#if previousLabel}
  <Navigation
    show={remainLeft > 0}
    label={previousLabel}
    page={current - 1}
    {last}
    {makeHref}
  />
{/if}
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
{#if nextLabel}
  <Navigation
    show={remainRight > 0}
    label={nextLabel}
    page={current + 1}
    {last}
    {makeHref}
  />
{/if}
{#if lastLabel}
  <Navigation
    show={remainRight > 1}
    label={lastLabel}
    page={last}
    {last}
    {makeHref}
  />
{/if}
