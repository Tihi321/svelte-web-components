<svelte:options tag="ts-modal" />

<script>
	import { quintIn } from 'svelte/easing';

  // default values
  export let show = false;
  export let zindex = 1;
  export let duration = 350;
  export let background = 'rgba(0,0,0,0.5)';

  let modalElement;

  // we create custom close event, we sned when modal is closed.
  let event = new CustomEvent("close", {
    detail: {
      show,
    },
     composed: true
     }
  );

  function modalOnClose(e) {
    if (e.target !== modalElement) {
      return;
    }

    // show will allways be false, though if we needed to send dynamic data this would update the value. 
    event.detail.show = show;

    // dispatch close event.
    e.target.dispatchEvent(event);

    show = false;
  }

  // for custom elements we need to use custom transitions.
  function fade(node, { duration }) {
    return {
      duration,
      tick: t => {
        const eased = quintIn(t);
        node.style.opacity = eased;
      }
    };
  }

</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: auto;
  }

  .container {
    margin: auto;
  }
</style>

{#if show}
<div style="background-color: {background}; z-index:{zindex};" transition:fade="{{duration: duration}}" bind:this={modalElement} class="modal" on:click|stopPropagation={modalOnClose}>
  <div class="container">
    <slot>Modal</slot>
  </div>
</div>
{/if}
