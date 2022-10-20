//Construct Classes

class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = 0,
        isRead = false
    ) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

class Shelf {
    constructor() {
        this.books = []
    }

    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const shelf = new Shelf()

const loginBtn = document.getElementById('logInBtn');
const addBookBtn = document.getElementById('newBook');
const bookGrid = document.querySelector('.books-grid');
const bookModal = document.getElementById('book-modal');
const bookForm = document.getElementById('addBookForm');
const overlay = document.getElementById('overlay');


//Making Book modal show

const openNewBookModal = () => {
    bookForm.reset()
    bookModal.classList.add('show'); 
    overlay.classList.add('active');
}

const closeNewBookModal = () => {
    bookModal.classList.remove('show');
    overlay.classList.remove('active');
}

addBookBtn.addEventListener('click', openNewBookModal);
overlay.addEventListener('click', closeNewBookModal);