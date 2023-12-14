<script lang="ts">
  export let show: boolean
</script>

<span class="paginate-rest-indicator" hidden={show ? null : true}> ... </span>

<style>
  span {
    white-space: nowrap;
  }
</style>
