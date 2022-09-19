let myLibrary = [];

const closeBtn = document.getElementById("closeBtn");

const addBtn = document.getElementById("add");

const result = document.getElementById("result");

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  document.getElementById("form-library-container").style.display = "flex";
}

addBtn.addEventListener("click", addBookToLibrary);

closeBtn.addEventListener("click", function () {
  document.getElementById("form-library-container").style.display = "none";
});

function addBookToLibrary() {
  event.preventDefault();
  document.getElementById("form-library-container").style.display = "none";
  const bTitle = document.getElementById("title").value;
  const bAuthor = document.getElementById("author").value;
  const bPages = document.getElementById("pages").value;
  const bRead = document.getElementById("read").value;
  const bAdd = new book(bTitle, bAuthor, bPages, bRead);
  myLibrary.push(bAdd);
  createBookDOM(bAdd);
}

function createBookDOM(book) {
  const newBook = document.createElement("div");
  const newBookTitle = document.createElement("div");
  const newBookAuthor = document.createElement("div");
  const newBookPages = document.createElement("div");
  const newBookRead = document.createElement("div");
  const trash = document.createElement("i");
  const edit = document.createElement("i");
  trash.setAttribute("class", "fa fa-trash");
  trash.setAttribute("id", "trashCan");
  edit.setAttribute("class", "fa fa-pencil-square-o");
  edit.setAttribute("id", "pencil");
  newBook.setAttribute("id", "bookCard");
  newBookTitle.setAttribute("id", "header");
  newBookRead.setAttribute("id", "footer");
  newBookTitle.textContent += book.title;
  newBookTitle.appendChild(trash);
  newBookTitle.appendChild(edit);
  newBookRead.textContent += book.Read;
  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookRead);

  result.appendChild(newBook);
}
