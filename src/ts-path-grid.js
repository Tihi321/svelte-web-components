import { domReady } from './utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Path Grid
  if (document.querySelector('ts-path-grid')) {
    import('./components/PathGrid.svelte');
  }

});
