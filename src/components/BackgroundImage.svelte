<script lang="ts">
	import { onMount } from 'svelte';
	import { imageArr } from '../lib/imageArr';

	let selectedImageIndex = 0;
	$: selectedImageSrc = imageArr[selectedImageIndex];

	onMount(() => {
		const storedValue = localStorage.getItem('clock-hub-saved-image-src-index');
		if (!storedValue) return;

		const intiializeImageSrcIndex = parseInt(storedValue, 10);

		if (!isNaN(intiializeImageSrcIndex) && intiializeImageSrcIndex >= 0) {
			updateImage(intiializeImageSrcIndex);
		}
	});

	const updateImage = (intiializeImageSrcIndex: number | null = null) => {
		if (!intiializeImageSrcIndex) {
			localStorage.setItem('clock-hub-saved-image-src-index', JSON.stringify(selectedImageIndex));
		}

		selectedImageIndex = intiializeImageSrcIndex ?? selectedImageIndex;
		selectedImageSrc = imageArr[selectedImageIndex];

		if (document)
			document.getElementById('image-container')!.style.backgroundImage =
				`url('${selectedImageSrc}')`;
	};

	const handlePreviousClick = () => {
		selectedImageIndex = (selectedImageIndex - 1 + imageArr.length) % imageArr.length;
		updateImage();
	};

	const handleNextClick = () => {
		selectedImageIndex = (selectedImageIndex + 1) % imageArr.length;
		updateImage();
	};
</script>

<div
	id="image-container"
	class="relative h-screen w-screen bg-cover bg-center bg-no-repeat p-2"
	style="background-image: url('/{selectedImageSrc}');"
>
	<div class="relative flex h-screen w-screen flex-col items-center justify-center gap-2">
		<slot />
	</div>
	<button
		id="prev-image"
		title="Previous Image"
		class="absolute left-2 top-[50%] -translate-y-[50%] cursor-pointer rounded bg-black/25 hover:bg-black/75"
		on:click={handlePreviousClick}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"
			></path></svg
		>
	</button>
	<button
		id="next-image"
		title="Next Image"
		class="absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer rounded bg-black/25 hover:bg-black/75"
		on:click={handleNextClick}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg
		>
	</button>
</div>
