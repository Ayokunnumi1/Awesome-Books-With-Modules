import BookLibrary from './modules/class.js';

import {
  addNewLink, listLink, contactInfo, formSection, list, contactLink, addButton,
} from './modules/variables.js';

// BookLibrary.displayBooks();
addNewLink.addEventListener('click', () => {
  formSection.style.display = 'flex';
  list.style.display = 'none';
  contactInfo.style.display = 'none';
  // console.log('new');
});
listLink.addEventListener('click', () => {
  BookLibrary.displayBooks();
  list.style.display = 'flex';
  formSection.style.display = 'none';
  contactInfo.style.display = 'none';
});
contactLink.addEventListener('click', () => {
  contactInfo.style.display = 'flex';
  list.style.display = 'none';
  formSection.style.display = 'none';
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  BookLibrary.createBook();
  BookLibrary.setToLocalStorage();
});
window.addEventListener('DOMContentLoaded', () => {
  BookLibrary.displayBooks();
  list.style.display = 'flex';
});
