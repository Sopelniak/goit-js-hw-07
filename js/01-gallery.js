import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js";

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems.reduce((acc, item) => {
  return (
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  );
}, "");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClickImg);
function onClickImg(e) {
  if (!e.target.classList.contains("js-gallery-item")) {
    return;
  }
  const urlImg = e.target.getAttribute("src");

  const instance = basicLightbox.create(`
    <img src=${urlImg} width="800" height="600">
`);

  instance.show();
}

// e.preventDefault();
