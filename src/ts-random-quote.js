import { domReady } from './utils/dom';

domReady(() => {
  // RandomQuote
  if (document.querySelector('ts-random-quote')) {
    import('./components/RandomQuote.svelte');
  }
})
