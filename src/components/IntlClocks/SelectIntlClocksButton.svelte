<script lang="ts">
  export let showModal: boolean
</script>

<button
  type="button"
  class="absolute left-56 top-8 flex h-[56px] w-[100px] md:w-fit items-center justify-center gap-2 rounded p-2 text-sm hover:bg-blue-300/20 md:left-[25rem] md:top-0"
  on:click={() => (showModal = true)}
>
  Select International Clocks
</button>
