import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const gallery = galleryItems.map((image) =>
    `<li>
      <a class="gallery__item" href="${image.original}">
        <img style="display:block" class="gallery__image" src="${image.preview}" alt="${image.description}"/>
      </a>
    </li>`).join("");
  
galleryEl.insertAdjacentHTML("beforeend", gallery);

let galler = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


