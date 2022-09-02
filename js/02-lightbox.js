import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems.reduce((acc, item) => {
  return (
    acc +
    `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a></li>`
  );
}, "");

gallery.innerHTML = markup;

gallery.addEventListener("click", onClickImg);

function onClickImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    // do something…
  });
}
