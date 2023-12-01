<script>
  export let toggleVisibility
  export let isVisible
</script>

<button
  type="button"
  class="absolute left-0 top-16 md:left-52 md:top-0 flex items-center justify-center gap-2 rounded p-2 text-sm hover:bg-blue-300/20"
  on:click={toggleVisibility}
>
  {#if isVisible}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-world"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
      /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path
        d="M11.5 3a17 17 0 0 0 0 18"
      /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg
    ><span>Intl Clocks: Visible</span>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-world-off"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672 -2.322a9 9 0 0 0 -12.066 -12.084"
      /><path d="M3.6 9h5.4m4 0h7.4" /><path d="M3.6 15h11.4m4 0h1.4" /><path
        d="M11.5 3a17.001 17.001 0 0 0 -1.493 3.022m-.847 3.145c-.68 4.027 .1 8.244 2.34 11.833"
      /><path
        d="M12.5 3a16.982 16.982 0 0 1 2.549 8.005m-.207 3.818a16.979 16.979 0 0 1 -2.342 6.177"
      /><path d="M3 3l18 18" /></svg
    ><span>Intl Clocks: Hidden</span>
  {/if}
</button>
