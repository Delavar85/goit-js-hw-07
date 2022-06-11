import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBlock = document.querySelector('.gallery');
const marcupGallery = createMarcupGallery(galleryItems);
console.log(galleryItems);
function createMarcupGallery(items) {
    return items.map(({preview,original,description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
};
galleryBlock.innerHTML = marcupGallery;