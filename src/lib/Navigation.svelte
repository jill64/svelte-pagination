<script lang="ts">
  export let href: string
  export let show: boolean
  export let label: string
</script>

<a {href} class="paginate-navigation" hidden={show ? null : true}>
  {label}
</a>
