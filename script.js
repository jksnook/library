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

  for  (let i = 0; i < library.length; i++) {
    const book = library[i];
    const row = document.createElement('tr');
    for (key in book) {
      const tableSection = document.createElement('td');
      tableSection.textContent = book[key];
      row.appendChild(tableSection);
    }
    const deleteButton = document.createElement('button');
    const buttonSection = document.createElement('td');
    deleteButton.type = 'button';
    deleteButton.dataset.index = i;
    deleteButton.textContent = 'delete book';
    deleteButton.addEventListener('click', () => {
      library.splice(deleteButton.dataset.index, 1);
      displayBooks(library);
    })

    buttonSection.appendChild(deleteButton);
    row.appendChild(buttonSection);
    bookshelf.appendChild(row);
  }
}

const bookButton = document.querySelector('#addBook');
const bookForm = document.querySelector('form')

bookButton.addEventListener('click', () => {
  bookForm.classList.toggle('hidden');
});

const submit = document.querySelector('#submitButton');

submit.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  
  let newBook = new Book(title, author, pages);
  addBook(newBook);
  displayBooks(myLibrary);
  bookForm.classList.toggle('hidden');
})