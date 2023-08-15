const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const bookCollectionContainer = document.querySelector('#book-collection-container');

class BookLibrary {
  static getFromLocalStorage = () => {
    const getData = localStorage.getItem('bookArray');
    if (getData) {
      return JSON.parse(getData);
    }
    return [];
  }

  static books = this.getFromLocalStorage();

  static getTitleInput = () => titleInput.value.trim();

  static getAuthorInput =() => authorInput.value.trim();

  static createBook = () => {
    const title = this.getTitleInput();
    const author = this.getAuthorInput();
    if (title && author) {
      const newBook = { title, author };
      this.books = [...this.books, newBook];
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  static setToLocalStorage = () => localStorage.setItem('bookArray', JSON.stringify(this.books));

  static displayBooks =() => {
    bookCollectionContainer.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookItem = document.createElement('div');
      bookItem.setAttribute('class', 'book-item');
      bookCollectionContainer.appendChild(bookItem);

      const bookParagraph = document.createElement('p');
      bookParagraph.setAttribute('class', 'list-paragraph-text');
      bookParagraph.textContent = `"${book.title}" by ${book.author} `;
      bookItem.appendChild(bookParagraph);

      const removeButtonContainer = document.createElement('div');
      removeButtonContainer.setAttribute('class', 'remove-button-container');
      bookItem.appendChild(removeButtonContainer);

      const removeButton = document.createElement('button');
      removeButton.setAttribute('class', 'remove-button');
      removeButton.textContent = 'remove';
      removeButton.addEventListener('click', () => {
        this.books = this.books.filter((_book, i) => (i !== index));
        this.setToLocalStorage();
        this.displayBooks();
      });
      removeButtonContainer.appendChild(removeButton);
    });
  }
}

export default BookLibrary;
