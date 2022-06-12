import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBlock = document.querySelector('.gallery');
const marcupGallery = createMarcupGallery(galleryItems);
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

function onClickImage(evt) {
    evt.preventDefault();
    const ectivElem = evt.target;
    if (ectivElem.classList.contains('gallery')) return;
    const imageSrc = ectivElem.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
`);

    instance.show();
}
galleryBlock.addEventListener('click', onClickImage)