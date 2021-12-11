import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryCreate = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}" /> </a>
</div>`;
  })
  .join('');

galleryEl.addEventListener('click', event => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    <a class="close-lightbox">Close</a>
    </div>`,
    {
      onShow: instance => {
        instance
          .element('.modal')
          .querySelector('.close-lightbox')
          .addEventListener('click', instance.close, { once: true });
      },
    },
  );
  instance.show();
});
galleryEl.insertAdjacentHTML('afterbegin', galleryCreate);

// ===========================вариант 2 ====================================
// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);
// const refs = {
//     list: document.querySelector('.gallery'),
// };
// console.log(refs.list);

// const listImageElements = createListImageElements(galleryItems);
// function createListImageElements(galleryItems) {
//     return galleryItems.map(galleryItem => `<li style = "list-style-type: none"> <div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}" /> </a> </div> </li>`).join("");
// }
// // console.log(listImageElements);
// // refs.list.innerHTML = listImageElements;
// refs.list.insertAdjacentHTML("beforeend", listImageElements)

// refs.list.addEventListener('click', onGalleryItemsClick)  

// function onGalleryItemsClick(event) {
//     if (event.target.nodeName != 'IMG') {
//     return
//   } else {
//     event.preventDefault();
//      //  console.log(event.target.nodeName);
//     // console.log(event.target);
//     // console.log(event.target.dataset.source);
//     refs.list.onclick = () => { basicLightbox.create(`<img width="1400" height="900" src= "${event.target.dataset.source}">`).show() }
//   }
//   }
