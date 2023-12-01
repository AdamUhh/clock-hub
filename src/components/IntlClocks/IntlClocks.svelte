<script lang="ts">
	import Modal from '../Modal.svelte';
	import { onMount, onDestroy } from 'svelte';
	import ToggleVisibilityButton from './ToggleVisibilityButton.svelte';
	import SelectIntlClocksButton from './SelectIntlClocksButton.svelte';
	import IntlClocksModal from './IntlClocksModal.svelte';
	import SelectedTimeZonesDisplay from './SelectedTimeZonesDisplay.svelte';

	interface Time {
		hours: string;
		minutes: string;
	}

	let isVisible: boolean = true;
	let showModal: boolean = false;
	let searchQuery: string = '';
	let timeZones: string[] = [];
	let selectedTimeZones: string[] = [];
	let selectedTimeData: Record<string, Time> = {};
	let interval: number;

	const toggleVisibility = (): void => {
		isVisible = !isVisible;
	};

	const updateFilteredTimeZones = (): void => {
		if (searchQuery.trim() === '') {
			timeZones = Intl.supportedValuesOf('timeZone');
		} else {
			timeZones = Intl.supportedValuesOf('timeZone').filter((timezone: string) =>
				timezone.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}
	};

	const addTimeZone = (timezone: string): void => {
		selectedTimeZones = [...selectedTimeZones, timezone];
		selectedTimeData[timezone] = getCurrentTime(timezone);
		localStorage.setItem('clock-hub-saved-intl-timezones', JSON.stringify(selectedTimeZones));
		startClockForTimeZone(timezone);
	};
	const handleRemoveTimeZone = (timezone: string): void => {
		const updatedTimeZones = selectedTimeZones.filter((tz) => tz !== timezone);

		selectedTimeZones = updatedTimeZones;
		localStorage.setItem('clock-hub-saved-intl-timezones', JSON.stringify(selectedTimeZones));
	};

	const getCurrentTime = (timeZone: string): Time => {
		const now = new Date();
		const options: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			timeZone: timeZone
		};
		const formattedTime = now.toLocaleTimeString(undefined, options).split(':');

		return {
			hours: formattedTime[0]!,
			minutes: formattedTime[1]!
		};
	};

	const startClockForTimeZone = (timeZone: string): void => {
		interval = setInterval(() => {
			selectedTimeData[timeZone] = getCurrentTime(timeZone);
		}, 1000);
	};

	onDestroy(() => {
		clearInterval(interval);
	});

	onMount(() => {
		updateFilteredTimeZones();
		const initializeSavedTimezones = localStorage.getItem('clock-hub-saved-intl-timezones');

		if (!initializeSavedTimezones) return;

		JSON.parse(initializeSavedTimezones).map((t: string) => addTimeZone(t));
	});
</script>

<ToggleVisibilityButton {toggleVisibility} {isVisible} />

<SelectIntlClocksButton bind:showModal />

<Modal bind:showModal>
	<IntlClocksModal
		bind:searchQuery
		{updateFilteredTimeZones}
		{selectedTimeZones}
		{timeZones}
		{addTimeZone}
		{handleRemoveTimeZone}
	/>
</Modal>
<div
	class="mt-5 grid max-h-[300px] grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
	<SelectedTimeZonesDisplay
		{isVisible}
		{selectedTimeZones}
		{selectedTimeData}
		{handleRemoveTimeZone}
	/>
</div>
