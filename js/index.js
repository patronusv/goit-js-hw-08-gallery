'use strict';
import galleryItems from '/gallery-items.js';
import { refs } from './refs.js';
import { createGallery } from './createGallery.js';
import { openModal } from './openModal.js';
console.log(galleryItems);
createGallery(galleryItems);
refs.galleryList.addEventListener('click', openModal);
refs.lightboxCloseBtn.addEventListener('click', () => {
  refs.lightbox.classList.toggle('is-open');
});