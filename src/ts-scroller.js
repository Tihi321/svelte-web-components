import { domReady } from './utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Scroller
  if (document.querySelector('ts-scroller')) {
    import('./components/Scroller.svelte');
  }

});
