<script lang="ts">
  import { PaginateItems } from '$lib/index.js'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { Decimal } from '@jill64/svelte-input'
  import { code } from './code'

  let lastPage = $state(10)
  let centerSize = $state(3)
  let sideSize = $state(2)
</script>

<aside>
  <div class="form">
    <span>Last Page</span>
    <fieldset>
      <Decimal placeholder="Last Page" bind:value={lastPage} />
    </fieldset>
    <span>Center Size</span>
    <fieldset>
      <Decimal placeholder="Center Size" bind:value={centerSize} />
    </fieldset>
    <span>Side Size</span>
    <fieldset>
      <Decimal placeholder="Side Size" bind:value={sideSize} />
    </fieldset>
  </div>
  <section>
    <h2>Keyboard Navigation</h2>
    <dl>
      <dt>→</dt>
      <dd>Goto next page</dd>
      <dt>⌘ + →</dt>
      <dd>Jump to last page</dd>
      <dt>←</dt>
      <dd>Goto previous page</dd>
      <dt>⌘ + ←</dt>
      <dd>Jump to first page</dd>
    </dl>
  </section>
</aside>
<nav>
  <PaginateItems {lastPage} {centerSize} {sideSize} slug="[page=int]" />
</nav>
<div style:display="flex" style:justify-content="center">
  <span style:overflow-x="auto" style:font-size="large">
    <HighlightSvelte
      code={code({
        lastPage,
        centerSize,
        sideSize
      })}
    />
  </span>
</div>

<style>
  .form {
    display: inline-grid;
    grid-template-columns: auto auto;
    align-items: center;
  }

  aside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  @media (max-width: 600px) {
    aside {
      grid-template-columns: auto;
    }
  }
  dl {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    row-gap: 1rem;
    margin: 2rem;
  }
  nav :global(.paginate-current-page) {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  nav :global(a) {
    text-decoration: none;
    color: royalblue;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  nav :global(a):hover {
    background: rgba(0, 0, 0, 0.1);
  }
  nav :global(a):active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark) nav :global(a):hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark) nav :global(a):active {
    background: rgba(255, 255, 255, 0.2);
  }

  fieldset {
    display: flex;
    align-items: center;
    border: none;
    gap: 0.5rem;
  }
  fieldset :global(input) {
    width: 5rem;
  }
  fieldset :global(input),
  fieldset :global(button) {
    background: inherit;
    color: inherit;
    padding: 0.75rem;
    font-size: large;
    border: 1px solid #ddd;
  }

  :global(.dark) fieldset :global(input),
  :global(.dark) fieldset :global(button) {
    border: 1px solid #555;
  }
</style>
