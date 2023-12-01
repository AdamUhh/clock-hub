<script lang="ts">
	interface Time {
		hours: string;
		minutes: string;
	}

	export let isVisible: boolean;
	export let selectedTimeZones: string[];
	export let selectedTimeData: Record<string, Time>;
	export let handleRemoveTimeZone: (timezone: string) => void;

	const removeTimeZone = (timezone: string): void => {
		handleRemoveTimeZone(timezone);
	};
</script>

{#if isVisible}
	{#each selectedTimeZones as timeZone (timeZone)}
		<div
			class="relative h-full rounded-lg bg-black/40 p-4 text-center drop-shadow-lg"
			style={`display: ${isVisible ? 'block' : 'none'}`}
		>
			<button
				type="button"
				class="absolute left-0 top-0 h-full w-full rounded-lg text-center opacity-0 hover:bg-red-500 hover:opacity-100"
				on:click={() => removeTimeZone(timeZone)}
				>Remove
			</button>
			<p>{timeZone}</p>
			<p>
				{selectedTimeData[timeZone].hours}:{selectedTimeData[timeZone].minutes}
			</p>
		</div>
	{/each}
{/if}
