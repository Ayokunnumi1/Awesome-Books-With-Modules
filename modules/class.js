const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const bookCollectionContainer = document.querySelector('#book-collection-container');

class BookLibrary {
  static books = this.getFromLocalStorage();

  static getFromLocalStorage() {
    const getData = localStorage.getItem('bookArray');
    if (getData) {
      return JSON.parse(getData);
    }
    return [];
  }

  static getTitleInput() {
    return titleInput.value.trim();
  }

  static getAuthorInput() {
    return authorInput.value.trim();
  }

  static createBook() {
    const title = this.getTitleInput();
    const author = this.getAuthorInput();
    if (title && author) {
      const newBook = { title, author };
      this.books.push(newBook);
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  static setToLocalStorage() {
    return localStorage.setItem('bookArray', JSON.stringify(this.books));
  }

  static displayBooks() {
    // this.getFromLocalStorage();
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
      // eslint-disable-next-line no-unused-expressions
      removeButton.addEventListener('click', () => {
        this.books = this.books.filter((_book, i) => (i !== index));
        this.setToLocalStorage();
        this.displayBooks();
      });
      removeButtonContainer.appendChild(removeButton);
    });
  }
}

const bookCreation = new BookLibrary();
export default bookCreation;
