

let myLibrary = [];


//book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.index = 0;

    this.getTitle = function() {
        return this.title;
    }

    this.getAuthor = function() {
        return this.author;
    }

    this.getPages = function() {
        return this.pages;
    }

    this.setIndex = function(num) {
        return this.index = num;
    }

    this.getIndex = function() {
        return this.index;
    }

}

function getLibrarySize() {
    return myLibrary.length;
}

function addBookToLibrary(book) {
    book.setIndex(getLibrarySize());
    myLibrary.push(book);
}

function indexUpdate() {
    for (i = 0; i < myLibrary.length; i++) {
        myLibrary[i].setIndex = i
    }
}

function addNewBookToLibrary(title, author, pages, isRead) {
    updateLib();
}

function removeBook(index) {
    myLibrary = myLibrary.filter(book => book.getIndex() != index);
    updateIndex();
    updateLibrary();
}

function booksOnShelf() {
    myLibrary.forEach(book => {
        addBookCard(book);
    });
}

function updateLib() {
    while (bookShelf.firstElementChild != bookShelf.lastElementChild) {
        bookShelf.removeChild(bookShelf.lastChild);
    }
    booksOnShelf();
}

//new book object
const book = new Book();

//assign elements from document
const bookForm = document.getElementById('addBookForm');
const newBookBtn = document.getElementById('newBook');
const modal = document.getElementById('book-modal');
const bookShelf = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');
const checkBox = document.getElementById('is-read');

const openBookModal = () => {
    bookForm.reset()
    modal.classList.add('show')
    overlay.classList.add('active')
}

const closeBookModal = () => {
    modal.classList.remove('show')
    overlay.classList.remove('active');
}

const addBookCard = (book) =>  {
    
    //initialize bookcard elements
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const btnDiv = document.createElement('div')
    const readBtn = document.createElement('button')
    const rmBtn = document.createElement('button')
    //add class to book card elements
    bookCard.classList.add('book-card')
    btnDiv.classList.add('card-btns')
    readBtn.classList.add('card-button-read')
    rmBtn.classList.add('card-button-remove')
    //add text content to book card
    title.textContent = `Title: ${book.title}`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    rmBtn.textContent = `Remove book`;
    //appends card to DOM 
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    btnDiv.appendChild(readBtn)
    btnDiv.appendChild(rmBtn)
    bookCard.appendChild(btnDiv)
    bookShelf.appendChild(bookCard)  
}

const getBookInfo = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    return new Book(title, author, pages, isRead);
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookInfo()
    if (myLibrary.includes(newBook)) {
        return;
    } else {
        console.log(newBook);
        myLibrary.push(newBook);
        addNewBookToLibrary(newBook);
    }
    closeBookModal()
}
function toggleRead() {
    const readButton = document.getElementById('is-read').checked;

    if (book.isRead == !readButton) {
        return readButton.textContent = 'Not read';
    } else {
        return readButton.textContent = 'Read';
    }
}
 
bookForm.addEventListener('submit', addBook)
newBookBtn.addEventListener('click', openBookModal);
overlay.addEventListener('click', closeBookModal);