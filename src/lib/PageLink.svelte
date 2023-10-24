<script lang="ts">
  import {inRange} from './utils/inRange.js'

  export let makeHref: (page: number) => string
  export let show: boolean
  export let page: number
  export let last: number

  $: hidden = show ? !inRange(page, 1, last + 1) : true
</script>

<a href={makeHref(page)} class="paginate-page-link" {hidden}>
  {page}
</a>
