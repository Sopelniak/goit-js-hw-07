import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

gallery.innerHTML = markup;

gallery.addEventListener("click", onClickImg);

function onClickImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const urlImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${urlImg} width="800" height="600">     
`);
  instance.show();

  document.addEventListener("keydown", onKeyDown);
  function onKeyDown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
