<script lang="ts">
  export let searchQuery: string
  export let updateFilteredTimeZones: () => void
  export let timeZones: string[]
  export let addTimeZone: (timezone: string) => void
  export let selectedTimeZones: string[]
  export let handleRemoveTimeZone: (timezone: string) => void

  const removeTimeZone = (timezone: string): void => {
    handleRemoveTimeZone(timezone)
  }

  const isTimeZoneSelected = (timezone: string): boolean => {
    return selectedTimeZones.includes(timezone)
  }

  function filterSelectedTimeZones(timeZones: string[]): string[] {
    return timeZones.filter((timezone) => !isTimeZoneSelected(timezone))
  }
</script>

<h2 class="text-lg font-bold">Select an international clock</h2>
<div class="p-4">
  <input
    type="text"
    placeholder="Search time zones"
    bind:value={searchQuery}
    on:input={updateFilteredTimeZones}
    class="mb-4 w-full rounded border border-gray-300 p-2"
  />
  <div
    class="grid max-h-[200px] w-full grid-cols-1 gap-2 overflow-y-auto overflow-x-hidden pt-4 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each selectedTimeZones as timezone (timezone)}
      <div
        class="relative flex items-center justify-center gap-2 rounded bg-blue-300 p-2 text-sm hover:bg-blue-300/20"
      >
        {timezone}
        <button
          type="button"
          class="absolute left-0 top-0 h-full w-full break-all text-center opacity-0 hover:bg-red-500 hover:opacity-100"
          on:click={() => removeTimeZone(timezone)}
        >
          Remove
        </button>
      </div>
    {/each}
  </div>
  <div
    class="grid max-h-[300px] w-full grid-cols-1 gap-1 overflow-y-auto overflow-x-hidden pt-4 md:max-h-[400px] md:grid-cols-2 lg:grid-cols-3"
  >
    {#each filterSelectedTimeZones(timeZones) as timezone (timezone)}
      <button
        type="button"
        class="flex items-center justify-center gap-2 break-all rounded p-2 py-4 text-sm hover:bg-blue-300/20"
        on:click={() => addTimeZone(timezone)}
      >
        {timezone}
      </button>
    {/each}
  </div>
</div>
