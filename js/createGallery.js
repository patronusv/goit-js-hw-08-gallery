'use strict';
import { refs } from './refs.js';
// import galleryItems from '/gallery-items.js';

export const createGallery = items => {
  const markUp = items.reduce((acc, item) => {
    acc += `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href=${item.original}
  >
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>
      `;
    return acc;
  }, '');
  refs.galleryList.innerHTML = markUp;
};
