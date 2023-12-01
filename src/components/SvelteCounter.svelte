<script>
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div>Svelte Counter</div>
<div class="flex gap-3 items-center">
  <button type="button" class="rounded bg-slate-400 p-4" on:click={subtract}>-</button>
  <pre>{count}</pre>
  <button type="button" class="rounded bg-slate-400 p-4" on:click={add}>+</button>
</div>
