'use strict';
import galleryItems from '../gallery-items.js';
import { refs } from './refs.js';
export const openModal = event => {
  event.preventDefault();
  const target = event.target;
  //   console.log('event target: ', target);
  if (target.nodeName !== 'IMG') return;
  console.log('need to open bigger image');
  refs.lightbox.classList.toggle('is-open');
  refs.lightboxImage.setAttribute('src', galleryItems.find(item => item.original === event.target.dataset.source).original);
  refs.lightboxImage.setAttribute('alt', galleryItems.find(item => item.original === event.target.dataset.source).description);
  console.log(galleryItems.find(item => item.original === event.target.dataset.source).original);
  // console.log(refs.galleryList[event.target.dataset.source]);
};
export const closeModal = () => {
  refs.lightbox.classList.toggle('is-open');
  refs.lightboxImage.setAttribute('src', '');
  refs.lightboxImage.setAttribute('alt', '');
};
