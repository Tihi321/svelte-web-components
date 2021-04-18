import { domReady } from './utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Modal
  if (document.querySelector('ts-modal')) {
    import('./components/Modal.svelte');
  }

});
