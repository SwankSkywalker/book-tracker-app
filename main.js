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
        // setLocal();
        updateShelf();
        bookForm.reset();
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
    rmBtn.classList.add('red');

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
        readBtn.classList.add('book-read');
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
    bookForm.title = '';
    bookForm.author = '';
    bookForm.pages = '';
    bookForm.read = false;
};