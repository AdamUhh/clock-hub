<script lang="ts">
  export let showModal: boolean

  let dialog: HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="relative w-[90%] shadow p-4 rounded-lg h-[70%] lg:w-[70%] lg:max-w-[1000px] overflow-hidden"
>
  <button class="absolute right-2 top-2 p-1" on:click={() => dialog.close()}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M18 6l-12 12"
      /><path d="M6 6l12 12" /></svg
    ></button
  >

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <slot />
  </div>
</dialog>

<style>
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
