import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
let instance;
const gallery = galleryItems.map((image) =>
    `<div class = "gallery__item"><a class = "gallery__link" href="${image.original}"><img class = "gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"><a/></div>`
    ).join("");

galleryEl.insertAdjacentHTML("beforeend", gallery);

galleryEl.addEventListener('click', onclickEv);

function onclickEv(evt) {
    
    evt.preventDefault();
    
    if (evt.target.nodeName !== 'IMG') {
        return;
    };
    
    instance = basicLightbox.create(
    `<div class="modal">
        <img src="${evt.target.dataset.source}" style="height:100vh; display:block"></img>
    </div>`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEsc);
        },
      onClose: instance => {
        window.removeEventListener('keydown', onEsc);
      },
    },
    );
    instance.show();
};

function onEsc(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}


