

// let myLibrary = [];


// //book constructor
// function Book(title, author, pages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
//     this.index = 0;

//     this.getTitle = function() {
//         return this.title;
//     }

//     this.getAuthor = function() {
//         return this.author;
//     }

//     this.getPages = function() {
//         return this.pages;
//     }

//     this.setIndex = function(num) {
//         return this.index = num;
//     }

//     this.getIndex = function() {
//         return this.index;
//     }

// }

// function getLibrarySize() {
//     return myLibrary.length;
// }

// function addBookToLibrary(book) {
//     book.setIndex(getLibrarySize());
//     myLibrary.push(book);
// }

// function indexUpdate() {
//     for (i = 0; i < myLibrary.length; i++) {
//         myLibrary[i].setIndex = i
//     }
// }

// function addNewBookToLibrary(_title, _author, _pages, _isRead) {
//     updateLib();
// }

// function removeBook(myLibraryBook) {
//     myLibraryBook = myLibrary.filter(book => book.getIndex() !== index);
//     indexUpdate();
//     updateLibrary();
// }

// function booksOnShelf() {
//     myLibrary.forEach(book => {
//         addBookCard(book);
//     });
// }

// function updateLib() {
//     while (bookShelf.firstElementChild != bookShelf.lastElementChild) {
//         bookShelf.removeChild(bookShelf.lastChild);
//     }
//     booksOnShelf();
// }

// //new book object
// const book = new Book();

// //assign elements from document
// const bookForm = document.getElementById('addBookForm');
// const newBookBtn = document.getElementById('newBook');
// const modal = document.getElementById('book-modal');
// const bookShelf = document.getElementById('booksGrid');
// const overlay = document.getElementById('overlay');
// const checkBox = document.getElementById('is-read');

// const openBookModal = () => {
//     bookForm.reset()
//     modal.classList.add('show')
//     overlay.classList.add('active')
// }

// const closeBookModal = () => {
//     modal.classList.remove('show')
//     overlay.classList.remove('active');
// }

// const addBookCard = (book) =>  {
    
//     //initialize book card elements
//     const bookCard = document.createElement('div')
//     const rmBtn = document.createElement('button')
//     const readBtn = document.createElement('button')
//     const title = document.createElement('h3')
//     const author = document.createElement('p')
//     const pages = document.createElement('p')
   
//     //add class to book card elements
//     rmBtn.className = 'outline';
//     bookCard.className = 'book-card';
//     bookShelf.appendChild(bookCard);
   
//     //add text content to book card
//     title.textContent = `${book.title}`;
//     author.textContent = `${book.author}`;
//     pages.textContent = `Total Pages: ${book.pages}`;
//     rmBtn.textContent = `Remove Book`;
//     rmBtn.setAttribute('id', 'removeBtn');

//     //appends card to DOM 
//     bookCard.appendChild(title);
//     bookCard.appendChild(author);
//     bookCard.appendChild(pages);
//     bookCard.appendChild(rmBtn);
    
//     readBtn.className = 'readBtn';
//     bookCard.appendChild(readBtn);

//     const checkBox = document.getElementById('is-read').checked;
    
//     if (checkBox.checked === true) {
//         readBtn.classList.add('book-read');
//         readBtn.textContent = 'Book Read';
//     } else {
//         readBtn.classList.add('not-read');
//         readBtn.textContent = 'Not Read';
//     } 
// }

// const getBookInfo = () => {
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const pages = document.getElementById('pages').value;
//     const isRead = document.getElementById('is-read').checked;
//     return new Book(title, author, pages, isRead);
// }

// const addBook = (e) => {
//     e.preventDefault()
//     const newBook = getBookInfo()
//     if (myLibrary.includes(newBook)) {
//         return;
//     } else {
//         console.log(newBook);
//         myLibrary.push(newBook);
//         addNewBookToLibrary(newBook);
//     }
//     closeBookModal()
// }


// bookForm.addEventListener('submit', addBook);
// newBookBtn.addEventListener('click', openBookModal);
// overlay.addEventListener('click', closeBookModal);

const submitBtn = document.getElementById('submitBtn');
const bookShelf = document.getElementById('booksGrid');
const bookForm = document.getElementById('addBookForm');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('book-modal');
const newBookBtn = document.getElementById('newBook');

let library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    } 
}

// const setIndex = () => {
//     for (i = 1; i < library.length; i++) {
//         return library[i].index = i
//     }
// }

const getLibSize = () => {
    return library.length();
}

const book = new Book();

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookInfo();
    if (library.includes(newBook.title)) {
        return;
    } else {
        console.log(library);
        library.push(newBook);
        formReset();
        // setLocal();
        updateShelf();
    }
    closeBookModal();
}

const getBookInfo = () => {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('is-read').checked;
    return new Book(title, author, pages, read);
}

const updateShelf = () => {
    const bookShelf = document.querySelector('.books-grid');
    bookShelf.querySelectorAll('div').forEach(n => n.remove());

    for (let i = 0; i < library.length; i++) {
        createBook(library[i]);
    }
}

const createBook = (book) => {
    const bookCard = document.createElement('div');
    const readBtn = document.createElement('button');
    const rmBtn = document.createElement('button');
    const bTitle = document.createElement('h3');
    const bAuthor = document.createElement('p');
    const bPages = document.createElement('p');
    const bRead = document.createElement('p'); 

    rmBtn.className = 'outline';
    bookCard.className = 'book-card';
    bookCard.setAttribute( 'id', library.indexOf(book));
    bookShelf.appendChild(bookCard);

    bTitle.innerText = book.title;
    bAuthor.innerText = `Author: ${book.author}`;
    bPages.innerText = `Total Pages: ${book.pages}`;
    bRead.innerText = `Read: ${book.read}`;
    rmBtn.textContent = 'Remove';
    rmBtn.setAttribute('id', 'removeBtn');

    bookCard.appendChild(bTitle);
    bookCard.appendChild(bAuthor);
    bookCard.appendChild(bPages);
    bookCard.appendChild(rmBtn);

    readBtn.className = 'readBtn';
    bookCard.appendChild(readBtn);
    if (book.read === false) {
        readBtn.textContent = 'Not Read';
        readBtn.classList.add('not-read')
    } else {
        readBtn.textContent = 'Book Read';
        
    }
    
    isRead.addEventListener('change', () => {
        if (this.checked) {
            readBtn.classList.add('book-read');
            readBtn.textContent = 'Book Read';
        } else {
            readBtn.classList.add('not-read');
            readBtn.textContent = 'Not Read';
        }
    });   

    rmBtn.addEventListener('click', () => {
        library.splice(library.indexOf(book), 1);
        // noBooksAdded();
        // setLocal();
        updateShelf();
    });

    readBtn.addEventListener('click', () => {
        isRead = !isRead;
        // setLocal();
        updateShelf();
    });
};

const openBookModal = () => {
    modal.classList.add('show');
    overlay.classList.add('active');
}

const closeBookModal = () => {
    modal.classList.remove('show');
    overlay.classList.remove('active');
}

newBookBtn.addEventListener('click', openBookModal)
overlay.addEventListener('click', closeBookModal);
submitBtn.addEventListener('click', addBook);

//form value reset
const formReset = () => {
    bookForm.title = '';
    bookForm.author = '';
    bookForm.pages = '';
    bookForm.read = false;
};

// //Library in local storage
// function setLocal() {
//     localStorage.setItem(`library`, JSON.stringify(library));
// };

// //Access local storage when page is refreshed
// function restoreLocal() {
//     library = JSON.parse(localStorage.getItem('library'));
//     if (library === null) {
//         library =[];
//     } else {
//         updateShelf();
//     };
// };

// restoreLocal();
// const newBtn = document.getElementById('newBook');
// const filter = document.getElementById('overlay');
// const openBookModal = document.getElementById('book-modal');
// const form = document.getElementById('addBookForm');

// let bookShelf = [];

// class Book {
//     constructor(title, author, pages, read) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.read = read;
//     }
// }

// const closeModal = () => {
//     openBookModal.classList.remove('show');
//     filter.classList.remove('active');
// }

// const openModal = () =>  {
//     openBookModal.classList.add('show');
//     filter.classList.add('active');
// }

// newBtn.addEventListener('click', openModal);

// filter.addEventListener('click', closeModal);


// const newBook = new Book();

// const addBookToShelf = (e) => {
//     e.preventDefault();
//     newBook = bookInfo();
//     if (bookShelf.includes(newBook.title)) {
//         console.log('Book already exist on shelf');
//         return;      
//     } else {
//         console.log(bookShelf);                                  
//         bookShelf.push(newBook);
//         placeBook();
//     }
//     closeModal();
// }

// function bookInfo() {
//     const titleVal = document.getElementById('title').value;
//     const authorVal = document.getElementById('author').value;
//     const pagesVal = document.getElementById('pages').value;
//     const readVal = document.getElementById('is-read').checked;

//     return newBook(titleVal, authorVal, pagesVal, readVal);
// }

// function placeBook() {
//     const shelf = document.getElementById('booksGrid');
//     const books = document.querySelectorAll('.bookCard');
//     books.forEach(book => shelf.removeChild(book));

//     for (let i = 0; i < bookShelf.length; i++) {
//         addBookCard(bookShelf[i]);
//     }
// }

// function addBookCard(newBook) {
//     const library = document.querySelector('.books-grid');
//     const bookCard = document.createElement('div');
//     const bookName = document.createElement('h3');
//     const bookAuthor = document.createElement('p');
//     const bookPages = document.createElement('p');
//     const bookRead = document.createElement('p');
//     const rmvBtn = document.createElement('button');
//     const rdBtn = document.createElement('button');

//     bookCard.className = 'bookCard';
//     bookCard.setAttribute('id', bookShelf.indexOf(newBook));

//     bookName.textContent = newBook.title;
//     bookCard.appendChild(bookName);

//     bookAuthor.textContent = `Author: ${newBook.author}`;
//     bookCard.appendChild(bookAuthor);

//     bookPages.textContent = `Total Pages: ${newBook.pages}`;
//     bookCard.appendChild(bookPages);

//     rdBtn.className = 'readBtn';
//     bookCard.appendChild(rdBtn);
//     if (newBook.read === false) {
//         rdBtn.textContent = 'Not Read';
//         rdBtn.classList.add('not-read');
//     } else {
//         rdBtn.textContent = ' Book Read';
//         rdBtn.classList.add('book-read');
//     }

//     rmvBtn.className = 'outline';
//     bookCard.appendChild(rmvBtn);

//     library.appendChild(bookCard);

//     rmvBtn.addEventListener('click', () => {
//         bookShelf.splice(bookShelf.indexOf(newBook), 1);
//         placeBook();
//     });
    
//     rdBtn.addEventListener('click', () => {
//         newBook.read = !newBook.read;
//         placeBook();
//     });
// };