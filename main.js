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
        if (!this.isOnShelf(newBook)) {
            this.books.push(newBook)
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
    }

    isOnShelf(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const shelf = new Shelf()

const loginBtn = document.getElementById('logInBtn');
const addBookBtn = document.getElementById('newBook');
const bookShelf = document.querySelector('.books-grid');
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

const addBookToShelf = (book) => {
    //Creates book card elements
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const cardBtns = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    //Assigns classes to new elements
    bookCard.classList.add('book-card');
    cardBtns.classList.add('card-btns');
    readBtn.classList.add('card-button');
    removeBtn.classList.add('card-button');
    readBtn.onclick = toggleRead;
    removeBtn.onclick = removeBook;
    //Adds content for card elements
    title.textContent = `Title: ${book.title}`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove book';
  

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    cardBtns.appendChild(readBtn)
    cardBtns.appendChild(removeBtn)
    bookCard.appendChild(cardBtns)
    bookShelf.appendChild(bookCard)
}

const getBookInfo = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('is-read').checked
    return new Book(title, author, pages, isRead)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookInfo()

    if (shelf.isOnShelf(newBook)) {
        return 
    } else { 
        shelf.addBook(newBook) 
        addBookToShelf()
    }
    closeNewBookModal()
}

const toggleRead = () => {
     //Toggles books read status
     if (book.isRead) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('book-read')
    } else {
        readBtn.textContent = 'Not read'
        readBtn.classList.add('not-read')
    }
}

const removeBook = () => {
    
}
bookForm.addEventListener('submit', addBook);
addBookBtn.addEventListener('click', openNewBookModal);
overlay.addEventListener('click', closeNewBookModal);