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
  const bTitle = document.getElementById("title");
  const bAuthor = document.getElementById("author");
  const bPages = document.getElementById("pages");
  const bRead = document.getElementById("read");
  let isRead = false;
  if (bRead.checked) {
    isRead = true;
  }
  const bAdd = new book(bTitle.value, bAuthor.value, bPages.value, isRead);
  myLibrary.push(bAdd);
  bTitle.value = "";
  bAuthor.value = "";
  bPages.value = "";
  bRead.checked = false;
  createAll();
}

function createAll() {
  document.getElementById("result").innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    createBookDOM(myLibrary[i]);
  }
}

function createBookDOM(book, index) {
  const newBook = document.createElement("div");
  const newBookTitle = document.createElement("div");
  const newBookAuthor = document.createElement("div");
  const newBookPages = document.createElement("div");
  const newBookRead = document.createElement("div");
  const info = document.createElement("div");
  const title = document.createElement("h1");
  const author = document.createElement("h2");
  const trash = document.createElement("i");
  trash.setAttribute("class", "fa fa-trash");
  trash.setAttribute("id", "trashCan");
  newBook.setAttribute("id", "bookCard");
  newBook.setAttribute("cellIndex", index);
  info.setAttribute("id", "cardInfo");
  newBookRead.setAttribute("id", "footer");
  title.textContent += book.title;
  author.textContent += book.author;
  info.appendChild(title);
  info.appendChild(author);
  newBook.appendChild(trash);
  if (book.read) {
    newBookRead.textContent += "Read";
  } else {
    newBookRead.textContent += "Not read";
  }
  newBook.appendChild(info);
  newBook.appendChild(newBookRead);

  result.appendChild(newBook);

  trash.addEventListener("click", function () {
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    createAll();
  });

  newBookRead.addEventListener("click", function () {
    let i = myLibrary.indexOf(book);
    if (book.read) {
      book.read = false;
      newBookRead.textContent = "Not Read";
    } else {
      book.read = true;
      newBookRead.textContent = "Read";
    }
  });
}
