'use strict';
import galleryItems from '../gallery-items.js';
import { refs } from './refs.js';

export const openModal = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  refs.lightbox.classList.toggle('is-open');
  lightboxImageSource(event.target);
  refs.lightboxCloseBtn.addEventListener('click', closeModal);
  refs.lightboxOverlay.addEventListener('click', onLightboxClick);
  window.addEventListener('keydown', onKeyPress);
};

const lightboxImageSource = ({ dataset = '', alt = '' }) => {
  refs.lightboxImage.src = dataset.source || '';
  refs.lightboxImage.alt = alt;
};

const closeModal = () => {
  refs.lightbox.classList.toggle('is-open');
  lightboxImageSource({});
  refs.lightboxCloseBtn.removeEventListener('click', closeModal);
  refs.lightboxOverlay.removeEventListener('click', onLightboxClick);
  window.removeEventListener('keydown', onKeyPress);
};

const onLightboxClick = event => {
  if (event.target === event.currentTarget) closeModal();
};

const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
  const imageRef = galleryItems.find(item => item.original === refs.lightboxImage.src);
  let index = galleryItems.indexOf(imageRef);
  if (event.code === 'ArrowLeft') {
    index === 0 ? (index = galleryItems.length - 1) : (index -= 1);
  } else if (event.code === 'ArrowRight') {
    index === galleryItems.length - 1 ? (index = 0) : (index += 1);
  }
  refs.lightboxImage.src = galleryItems[index].original;
  refs.lightboxImage.alt = galleryItems[index].description;
};
