const myLibrary = [{title: 'book1', author: 'author1', pages:10, read: false}];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBook(...books) {
  books.forEach((book) => myLibrary.push(book));
}

function displayBooks(library) {
  const bookshelf = document.querySelector('table tbody');
  bookshelf.innerHTML = '';

  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const row = document.createElement('tr');
    for (key in book) {
      const tableSection = document.createElement('td');
      tableSection.textContent = book[key];
      row.appendChild(tableSection);
    }

    const deleteButton = document.createElement('button');
    const deleteButtonSection = document.createElement('td');
    deleteButton.type = 'button';
    deleteButton.textContent = 'delete book';
    deleteButton.addEventListener('click', () => {
      library.splice(i, 1);
      displayBooks(library);
    });

    deleteButtonSection.appendChild(deleteButton);
    row.appendChild(deleteButtonSection);

    const readButton = document.createElement('button');
    const readButtonSection = document.createElement('td');
    readButton.type = 'button';
    readButton.textContent = 'read book';
    readButton.addEventListener('click', () => {
      library[i].read = !library[i].read;
      displayBooks(library);
    });

    readButtonSection.appendChild(readButton);
    row.appendChild(readButtonSection);
    bookshelf.appendChild(row);
  }
}

displayBooks(myLibrary);

const bookButton = document.querySelector('#addBook');
const bookForm = document.querySelector('form');

bookButton.addEventListener('click', () => {
  bookForm.classList.toggle('hidden');
});

const submit = document.querySelector('#submitButton');

submit.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  
  let newBook = new Book(title, author, pages, read);
  addBook(newBook);
  displayBooks(myLibrary);
  bookForm.classList.toggle('hidden');
})