<script lang="ts">
  import { onMount, onDestroy } from 'svelte'

  interface Time {
    hours: string
    minutes: string
    seconds: string
  }

  let time: Time = formatTime(new Date())
  let date: string = formatDate(new Date())
  let interval: number

  const updateTime = () => {
    const currentTime = new Date()
    time = formatTime(currentTime)
    date = formatDate(currentTime)
  }

  onMount(() => {
    interval = setInterval(updateTime, 1000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
    }
    return date.toLocaleDateString(undefined, options)
  }

  function formatTime(date: Date): Time {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }
    const formattedTime = date.toLocaleTimeString(undefined, options).split(':')

    return {
      hours: formattedTime[0]!,
      minutes: formattedTime[1]!,
      seconds: formattedTime[2]!,
    }
  }
</script>

<div
  class="w-[70vw] rounded-xl bg-black/30 p-2 text-center text-white drop-shadow-lg md:p-4"
>
  <div
    class="mx-auto flex w-fit flex-nowrap px-2 text-center drop-shadow-lg text-xl md:text-[10vw] 2xl:text-[10rem]"
  >
    <div class="w-fit md:w-[15vw]">{time.hours}</div>
    <span>:</span>
    <div class="w-fit md:w-[15vw]">{time.minutes}</div>
    <span>:</span>
    <div class="w-fit md:w-[30vw] whitespace-nowrap">{time.seconds}</div>
  </div>
  <div class="flex items-center justify-center space-x-1">
    <p class="text-lg">{date}</p>
  </div>
</div>
