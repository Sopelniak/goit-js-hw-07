import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a></li>`,
  ""
);

gallery.innerHTML = markup;

function createLightbox() {
  const gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    // captionDelay = 250;
  });
}
createLightbox();
