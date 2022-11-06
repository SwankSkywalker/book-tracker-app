

let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 357,
        isRead: false 
    },
        
    {
        title: 'Amelia Bedelia',
        author: 'Nesreen Elsaadi',
        pages: 114,
        isRead: false
    },

    {
        title: 'The Book of Time',
        author: 'Guillame Prevost',
        pages: 347,
        isRead: true
    }
];

const bookForm = document.getElementById('addBookForm');
const newBookBtn = document.getElementById('newBook');
const modal = document.getElementById('book-modal');
const bookShelf = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const book = new Book();

function addToLibrary() {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const btnDiv = document.createElement('div')
    const readBtn = document.createElement('button')
    const rmBtn = document.createElement('button')
    
    bookCard.classList.add('book-card')
    btnDiv.classList.add('card-btns')
    readBtn.classList.add('card-button-read')
    rmBtn.classList.add('card-button-remove')
    
    title.textContent = `Title: ${book.title}`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    rmBtn.textContent = `Remove book`;
    
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    btnDiv.appendChild(readBtn)
    btnDiv.appendChild(rmBtn)
    bookCard.appendChild(btnDiv)
    bookShelf.appendChild(bookCard)  
     
    myLibrary .forEach(book => {
        console.log(book);
    });
    
}
const openBookModal = () => {
    bookForm.reset()
    modal.classList.add('show')
    overlay.classList.add('active')
}

const closeBookModal = () => {
    modal.classList.remove('show')
    overlay.classList.remove('active');
}

newBookBtn.addEventListener('click', openBookModal);
overlay.addEventListener('click', closeBookModal);