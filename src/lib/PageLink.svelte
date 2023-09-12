<script lang="ts">
  export let makeHref: (page: number) => string
  export let show: boolean
  export let page: number
</script>

<a href={makeHref(page)} class="paginate-page-link" hidden={show ? null : true}>
  {page}
</a>
