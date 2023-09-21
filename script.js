const myLibrary = [{title: 'book1', author: 'author1', pages:10}, {title: 'book2', author: 'author1', pages:10}, {title: 'book3', author: 'author1', pages:10}];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBook(...books) {
  books.forEach((book) => myLibrary.push(book));
}

function displayBooks(library) {
  const bookshelf = document.querySelector('table tbody');
  bookshelf.innerHTML = '';

  for  (const book of library) {
    const row = document.createElement('tr');
    for (key in book) {
      const tableSection = document.createElement('td');
      tableSection.textContent = book[key];
      row.appendChild(tableSection);
    }
    bookshelf.appendChild(row);
  }
}

const bookButton = document.querySelector('#addBook');
const bookForm = document.querySelector('form')

bookButton.addEventListener('click', () => {
  bookForm.classList.toggle('hidden');
});