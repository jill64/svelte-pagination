<script lang="ts">
  import { goto } from '$app/navigation'
  import { base } from '$app/paths'

  $effect(() => {
    goto(`${base}/1`)
  })
</script>
