const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBook(...books) {
  books.forEach((book) => myLibrary.push(book));
}
