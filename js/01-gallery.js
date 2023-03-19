import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};
const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class = 'gallery__item'>
        <a class ='gallery__link' href = '${original}'>
            <img class='gallery__image' src = '${preview}' data-source = '${original} ' alt = '${description}' loading ='lazy'>
        </a>
    </li>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

refs.gallery.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  let img = basicLightbox.create(
    `
  		<img src = '${event.target.dataset.source}'>
  	`
  );

  img.show();

  refs.gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      img.close();
    }
  });
}
