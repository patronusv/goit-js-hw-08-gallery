'use strict';
import galleryItems from '../gallery-items.js';
import { refs } from './refs.js';
export const openModal = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  refs.lightbox.classList.toggle('is-open');
  refs.lightboxImage.setAttribute('src', galleryItems.find(item => item.original === event.target.dataset.source).original);
  refs.lightboxImage.setAttribute('alt', galleryItems.find(item => item.original === event.target.dataset.source).description);
  refs.lightboxCloseBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscPress);
  refs.lightboxOverlay.addEventListener('click', onLightboxClick);
  window.addEventListener('keydown', onArrowPress);
};
export const closeModal = () => {
  refs.lightbox.classList.toggle('is-open');
  refs.lightboxImage.setAttribute('src', '');
  refs.lightboxImage.setAttribute('alt', '');
  refs.lightboxCloseBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onEscPress);
  refs.lightboxOverlay.removeEventListener('click', onLightboxClick);
  window.removeEventListener('keydown', onArrowPress);
};
export const onEscPress = event => {
  if (event.code === 'Escape') closeModal();
};
export const onLightboxClick = event => {
  if (event.target === event.currentTarget) closeModal();
};
export const onArrowPress = event => {
  let index = galleryItems.indexOf(galleryItems.find(item => item.original === refs.lightboxImage.getAttribute('src')));
  if (event.code === 'ArrowLeft') {
    index === 0 ? (index = galleryItems.length - 1) : (index -= 1);
  } else if (event.code === 'ArrowRight') {
    index === galleryItems.length - 1 ? (index = 0) : (index += 1);
  }
  refs.lightboxImage.setAttribute('src', galleryItems[index].original);
  refs.lightboxImage.setAttribute('alt', galleryItems[index].description);
};
