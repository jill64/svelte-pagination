<script lang="ts">
  import { inRange } from './utils/inRange.js'

  let {
    makeHref,
    show,
    page,
    last
  }: {
    makeHref: (page: number) => string
    show: boolean
    page: number
    last: number
  } = $props()

  let hidden = $derived(show ? !inRange(page, 1, last + 1) : true)
</script>

<a href={makeHref(page)} class="paginate-page-link" {hidden}>
  {page}
</a>

<style>
  a {
    white-space: nowrap;
  }
</style>
