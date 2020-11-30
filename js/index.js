'use strict';
import galleryItems from '/gallery-items.js';
import { refs } from './refs.js';
import { createGallery } from './createGallery.js';
import { openModal } from './modal.js';
import { closeModal } from './modal.js';
console.log(galleryItems);
createGallery(galleryItems);
refs.galleryList.addEventListener('click', openModal);
refs.lightboxCloseBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', event => {
  if (event.code === 'Escape') closeModal();
});
refs.lightboxOverlay.addEventListener('click', event => {
  if (event.target === event.currentTarget) closeModal();
});
