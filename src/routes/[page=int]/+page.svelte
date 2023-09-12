<script lang="ts">
  import { Paginate } from '$lib/index.js'

  let lastPage = 10
  let centerSize = 3
  let sideSize = 2
</script>

<div>
  Last Page
  <input type="number" bind:value={lastPage} />
  Center Size
  <input type="number" bind:value={centerSize} />
  Side Size
  <input type="number" bind:value={sideSize} />
</div>
<Paginate {lastPage} {centerSize} {sideSize} slug="[page=int]" />

<style>
  div {
    display: inline-grid;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 0.5rem;
  }
  input {
    width: 5em;
    height: 1.5rem;
    background: inherit;
    color: inherit;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
  }
  :global(body) {
    font-family: sans-serif;
  }
  :global(a) {
    color: #0070f3;
    text-decoration: none;
  }
  :global(a:hover) {
    text-decoration: underline;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #222;
      color: #eee;
    }
  }
</style>
