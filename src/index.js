import './styles/style.css';

import { domReady } from './utils/dom';

domReady(() => {

  // -------------------------------------------------------------
  // Modal
  if (document.querySelector('.js-modal')) {
    const NO_SCROLL_CLASS = 'u-no-scroll';

    const body = document.querySelector('.js-body');
    const modal = document.querySelector('ts-modal');

    document.querySelector('.js-modal').addEventListener('click', () => {
      modal.setAttribute('show', 'true');
      body.classList.add(NO_SCROLL_CLASS);
    });

    modal.addEventListener('close', (e) => {
      body.classList.remove(NO_SCROLL_CLASS);
    })
  }

});