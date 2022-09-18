let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let bTitle = document.getElementById("title").value;
  let bAuthor = document.getElementById("author").value;
  let bPages = document.getElementById("pages").value;
  let bRead = document.getElementById("read").value;
  myLibrary += [bTitle, bAuthor, bPages, bRead];
}

function addBook() {
  document.getElementById("form-library-container").style.display = "flex";
}
const closeBtn = document.getElementsByClassName("closeBtn")[0];

closeBtn.onclick = function () {
  document.getElementById("form-library-container").style.display = "none";
};
