import { domReady } from './utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Modal
  if (document.querySelector('ts-modal')) {
    import('./components/Modal.svelte');
  }

  // -------------------------------------------------------------
  // Path Grid
  if (document.querySelector('ts-path-grid')) {
    import('./components/PathGrid.svelte');
  }

  // -------------------------------------------------------------
  // Scroller
  if (document.querySelector('ts-scroller')) {
    import('./components/Scroller.svelte');
  }

  // -------------------------------------------------------------
  // Date
  if (document.querySelector('ts-date')) {
    import('./components/Date.svelte');
  }

  // -------------------------------------------------------------
  // Path Grid
  if (document.querySelector('ts-path-grid')) {
    import('./components/PathGrid.svelte');
  }

});
