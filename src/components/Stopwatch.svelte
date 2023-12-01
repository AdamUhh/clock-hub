<script lang="ts">
  import { onDestroy } from 'svelte'

  interface StopwatchTime {
    hours: string
    minutes: string
    seconds: string
  }

  let isVisible = false
  let isRunning = false
  let interval: number
  let formattedTime: StopwatchTime = {
    hours: '00',
    minutes: '00',
    seconds: '00',
  }

  const formatTime = (totalSeconds: number): StopwatchTime => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    }
  }

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(interval)
    } else {
      interval = setInterval(updateElapsedTime, 1000) // Update every 1000ms (1 second)
    }
    isRunning = !isRunning
  }

  const toggleVisibility = () => {
    isVisible = !isVisible
  }

  const resetStopwatch = () => {
    clearInterval(interval)
    isRunning = false
    updateFormattedTime(0)
  }

  const updateElapsedTime = () => {
    updateFormattedTime(formattedTimeToSeconds(formattedTime) + 1)
  }

  const formattedTimeToSeconds = (time: StopwatchTime): number => {
    return (
      parseInt(time.hours) * 3600 +
      parseInt(time.minutes) * 60 +
      parseInt(time.seconds)
    )
  }

  const updateFormattedTime = (totalSeconds: number) => {
    formattedTime = formatTime(totalSeconds)
  }

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<button
  type="button"
  class="absolute left-0 top-0 flex items-center justify-center gap-2 rounded p-2 text-sm hover:bg-blue-300/20"
  on:click={toggleVisibility}
>
  {#if isVisible}
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
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
      /><path d="M12 7v5l3 3" /></svg
    ><span>Stopwatch: Visible</span>
  {:else}
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
      ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
        d="M20.926 13.15a9 9 0 1 0 -7.835 7.784"
      /><path d="M12 7v5l2 2" /><path d="M22 22l-5 -5" /><path
        d="M17 22l5 -5"
      /></svg
    ><span>Stopwatch: Hidden</span>
  {/if}
</button>

<div
  class="mx-8 mt-5 bg-black/30 p-4 text-center drop-shadow-lg rounded-lg"
  style={`display: ${isVisible ? 'block' : 'none'}`}
>
  <div
    class="mx-auto grid w-fit grid-cols-[55px_15px_55px_15px_55px] px-2 text-center text-[40px] drop-shadow-lg"
  >
    <div>{formattedTime.hours}</div>
    <span>:</span>
    <div>{formattedTime.minutes}</div>
    <span>:</span>
    <div>{formattedTime.seconds}</div>
  </div>
  <div class="flex justify-center space-x-4">
    <button
      on:click={startStopwatch}
      class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      {isRunning ? 'Stop' : 'Start'}
    </button>
    <button
      on:click={resetStopwatch}
      class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Reset
    </button>
  </div>
</div>
