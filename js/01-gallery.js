import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

const gallery = document.querySelector(".gallery");
const markup = galleryItems.reduce((acc, item) => {
  return (
    acc +
    `<img class="js-gallery-item" src="${item.original}" alt="${item.description}" />`
  );
}, "");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClickImg);
function onClickImg(e) {
  if (!e.target.classList.contains("js-gallery-item")) {
    return;
  }
  const urlImg = e.target.getAttribute("src");
  console.log("target:", e.target);
  console.log("url:", urlImg);
}
