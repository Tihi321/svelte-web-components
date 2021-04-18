import { domReady } from './utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Date
  if (document.querySelector('ts-date')) {
    import('./components/Date.svelte');
  }

});
