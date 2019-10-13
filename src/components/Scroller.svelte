<svelte:options tag="ts-scroller" />

<script>

	import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import { throttle, debounce } from 'lodash';
	import { onMount } from 'svelte';

  // default values, color of the loader.
  export let color = '#3d7e9a';

  let loader;

  const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

  function remapValues(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  function scroll(e) {
    const { scrollY } = window;
    const { top, height, y, bottom } = loader.getBoundingClientRect();

    // calculate starting position, distance of top part of the element and document top.
    const start = scrollY + y;

    // calculate end position, when bottom part of element reaches window bottom.
    const stop =  window.innerHeight || document.documentElement.clientHeight;

    // current value/position of element on screen.
    const value = scrollY + Math.abs(top);
  
    // remap current position to munbers between 1 and 0, so we can pass them to tweened function.
    const positionValue = remapValues(value, start, stop, 0, 1);
    const position = (positionValue > 1) ? 1 : positionValue;
    progress.set(position);
  }

  onMount(() => {
    window.addEventListener('scroll', debounce(scroll, 10));

		return () => window.removeEventListener('scroll', debounce(scroll, 10));
	});

</script>

<style>
  .loader {
    position: relative;
  }

  .inner {
    position: sticky;
    width: 100%;
    top: 0;
    overflow: hidden;
    background-color: #FFFFFF;
    height: var(--ts-scroller-height, 5px);
    box-shadow: var(--ts-scroller-shadow, 0 1px 4px 0 rgba(0,0,0,0.3));
  }

  .scroller {
    position: relative;
    left: -100%;
    height: 100%;
    width: 100%;
  }

</style>

<div bind:this={loader} class="loader">
  <div class="inner">
    <div style="background-color:{color}; transform: translateX({$progress * 100}%);" class="scroller"></div>
  </div>
  <slot>Scrolling element</slot>
</div>
