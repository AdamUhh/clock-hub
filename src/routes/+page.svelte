<script>
	import BackgroundImage from '../components/BackgroundImage.svelte';
	import DigitalClock from '../components/DigitalClock.svelte';
	import IntlDigitalClocks from '../components/IntlDigitalClocks.svelte';
	import Stopwatch from '../components/Stopwatch.svelte';
</script>

<svelte:head>
	<title>Clock Hub</title>
	<meta
		name="description"
		content="A clock app that features world wide clock support and selected wallpapers"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</svelte:head>

<section class="overflow-hidden text-white">
	<BackgroundImage>
		<DigitalClock />
		<Stopwatch />
		<IntlDigitalClocks />
	</BackgroundImage>
</section>

<style>
	* {
		font-family:
			'Poppins',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
