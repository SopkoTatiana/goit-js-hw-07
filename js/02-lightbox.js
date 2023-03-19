import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};
const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class ='gallery__item' href = '${original}'>
            <img class='gallery__image' src = '${preview}' alt = '${description}' loading ='lazy'>
        </a>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
