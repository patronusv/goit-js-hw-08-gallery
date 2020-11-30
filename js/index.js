'use strict';
import galleryItems from '../gallery-items.js';
import { refs } from './refs.js';
import { createGallery } from './createGallery.js';
import { openModal } from './modal.js';

createGallery(galleryItems);
refs.galleryList.addEventListener('click', openModal);
