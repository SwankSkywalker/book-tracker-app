

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
//     updateIndex();
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
//     const title = document.createElement('p')
//     const author = document.createElement('p')
//     const pages = document.createElement('p')
//     const btnDiv = document.createElement('div')
//     const readBtn = document.createElement('button')
//     const rmBtn = document.createElement('button')
//     //add class to book card elements
//     bookCard.classList.add('book-card')
//     btnDiv.classList.add('card-btns')
//     readBtn.classList.add('card-button-read')
//     rmBtn.classList.add('card-button-remove')
//     //add text content to book card
//     title.textContent = `Title: ${book.title}`;
//     author.textContent = book.author;
//     pages.textContent = `${book.pages} pages`;
//     rmBtn.textContent = `Remove book`;
//     //appends card to DOM 
//     bookCard.appendChild(title)
//     bookCard.appendChild(author)
//     bookCard.appendChild(pages)
//     btnDiv.appendChild(readBtn)
//     btnDiv.appendChild(rmBtn)
//     bookCard.appendChild(btnDiv)
//     bookShelf.appendChild(bookCard)  

//     const toggleRead = () => {
//         const checkBox = document.querySelector('.checkbox'); 
        
//         if (checkBox.checked) {
//             readBtn.classList.add('book-read');
//             readBtn.textContent = 'Book Read';
//         } else {
//             readBtn.classList.add('not-read');
//             readBtn.textContent = 'Not Read';
//         }
//     }
//     toggleRead();
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

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const isBookRead = document.querySelector('#is-read');
const submitBtn = document.querySelector('#submitBtn');
const bookShelf = document.querySelector('#booksGrid');
const bookForm = document.querySelector('#addBookForm');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#book-modal');
const newBookBtn = document.querySelector('#newBook');

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = read;
    this.index = 0;
}

const book = new Book(title, author, pages,);

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookInfo();
    if (library.includes(newBook.title)) {
        return;
    } else {
        console.log(newBook);
        library.push(newBook);
        formReset();
        setLocal();
        updateShelf();
    }
    closeBookModal();
}

const getBookInfo = () => {
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    read = isBookRead.checked;
    id = this.id;
    return book;
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
    bookCard.setAttribute('id', book.id);
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

    readBtn.classList.add('readBtn')
    bookCard.appendChild(readBtn);
    if (book.read) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('book-read');
    } else {
        readBtn.textContent = ' Not Read';
        readBtn.classList.add('not-read');
    }

    rmBtn.addEventListener('click', () => {
        library.splice(library.indexOf(book), 1);
        // noBooksAdded();
        // setLocal();
        updateShelf();
    });

    readBtn.addEventListener('click', () => {
        book.read = !book.read;
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
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    isBookRead.value = '';
};

//Library in local storage
function setLocal() {
    localStorage.setItem(`library`, JSON.stringify(library));
};

//Access local storage when page is refreshed
function restoreLocal() {
    library = JSON.parse(localStorage.getItem('library'));
    if (library === null) {
        library =[];
    } else {
        updateShelf();
    };
};

restoreLocal();