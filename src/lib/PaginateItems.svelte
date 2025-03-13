<script lang="ts">
  import { goto } from '$app/navigation'
  import { base } from '$app/paths'
  import { page } from '$app/state'
  import Navigation from './Navigation.svelte'
  import PageLink from './PageLink.svelte'
  import RestIndicator from './RestIndicator.svelte'
  import { clamp } from './utils/clamp.js'
  import { convertInt } from './utils/convertInt'
  import { natural } from './utils/natural.js'

  let {
    lastPage,
    slug,
    sideSize = 2,
    centerSize = 3,
    previousLabel = '＜ Previous',
    firstLabel = '＜＜',
    nextLabel = 'Next ＞',
    lastLabel = '＞＞',
    disableKeyboardNavigation = false
  }: {
    lastPage: number
    slug:
      | `[[${string}]]`
      | `[${string}]`
      | `[${string}=${string}]`
      | `[[${string}=${string}]]`
    sideSize?: number
    centerSize?: number
    previousLabel?: string
    firstLabel?: string
    nextLabel?: string
    lastLabel?: string
    disableKeyboardNavigation?: boolean
  } = $props()

  let routeId = $derived(page.route.id)

  let key = $derived(
    slug.startsWith('[[')
      ? slug.slice(2, slug.includes('=') ? slug.indexOf('=') : -2)
      : slug.slice(1, slug.includes('=') ? slug.indexOf('=') : -1)
  )

  let current = $derived(convertInt(page.params[key], 1))

  let last = $derived(Math.ceil(clamp(lastPage, 1, Infinity)))
  let side = $derived(Math.ceil(clamp(sideSize, 1, last)))
  let wing = $derived(clamp(Math.floor((centerSize - 1) / 2), 0, last))

  let remainLeft = $derived(clamp(current - 1, 0, last - 1))
  let remainRight = $derived(clamp(last - current, 0, last - 1))

  let baseDepth = $derived(base.match(/\//g)?.length ?? 0)
  let pathArray = $derived(page.url.pathname.split('/'))
  let replaceIndex = $derived(
    routeId ? routeId.split('/').indexOf(slug) + baseDepth : null
  )

  let groupedRoute = $derived(
    routeId ? routeId.split('/').filter((x) => x.startsWith('(')).length : 0
  )

  const makeHref = (target: number) => {
    if (!replaceIndex) {
      return ''
    }

    const pathname = [
      ...pathArray.slice(0, replaceIndex - groupedRoute),
      target.toString(),
      ...pathArray.slice(replaceIndex + 1 - groupedRoute)
    ].join('/')

    return `${pathname}${page.url.search}${page.url.hash}`
  }

  const onKeyPress = (e: KeyboardEvent) => {
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
{#each natural(side) as n (n)}
  <PageLink show={remainLeft > n} page={n + 1} {last} {makeHref} />
{/each}
<RestIndicator show={side < current - wing - 1} />
{#each natural(wing) as n (n)}
  {@const reverseIndex = wing - n}
  {@const page = current - reverseIndex}
  <PageLink show={page > side} {page} {last} {makeHref} />
{/each}
<span class="paginate-current-page">
  {current}
</span>
{#each natural(wing) as n (n)}
  {@const page = current + n + 1}
  <PageLink show={page <= last - side} {page} {last} {makeHref} />
{/each}

<RestIndicator show={current + wing < last - side} />

{#each natural(side) as n (n)}
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
