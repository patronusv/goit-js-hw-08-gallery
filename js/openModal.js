'use strict';
import { refs } from './refs.js';
export const openModal = event => {
  event.preventDefault();
  const target = event.target;
  //   console.log('event target: ', target);
  if (target.nodeName !== 'IMG') return;
  console.log('need to open bigger image');
  refs.lightbox.classList.toggle('is-open');
};
