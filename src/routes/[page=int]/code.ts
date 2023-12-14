export const code = ({
  lastPage,
  centerSize,
  sideSize
}: {
  lastPage: number
  centerSize: number
  sideSize: number
}) => /* html */ `
<!-- src/routes/[page=int]/+page.svelte -->
<script>
  import { PaginateItems } from '@jill64/svelte-pagination'
</script>

<nav>
  <PaginateItems
    lastPage={${lastPage}} 
    centerSize={${centerSize}} 
    sideSize={${sideSize}} 
    slug="[page=int]" 
  />
</nav>
`
