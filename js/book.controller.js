'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooksForDisplay()
    const strHtml = books.map(book => {
        return `<tr>
           <td><img src="${book.imgURL}" alt="Sorry, picture is unavailable" /></td>
           <td>${book.id}</td>
           <td>${book.name}</td>
           <td>${book.price}</td>
           <td>
               <button onclick="onReadDetails('${book.id}')">Read</button>
               <button onclick="onUpdateBook('${book.id}')">Update</button>
               <button onclick="onRemoveBook('${book.id}')">Delete</button>
           </td>
       </tr>`})
    const elTBody = document.querySelector('tbody')
    elTBody.innerHTML = strHtml.join('')
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    const bookName = prompt('What is the name of the book?')
    const bookPrice = prompt('Please enter price')
    if (bookName && bookPrice) {
        addBook(bookName, bookPrice)
        renderBooks()
    }
}

function onUpdateBook(bookId) {
    console.log('bookId:', bookId)
    const book = getBookById(bookId)
    const newPrice = prompt('What is the updated price of this book?', book.price)
    if (newPrice && newPrice !== book.price) {
        updateBook(bookId, newPrice)
        renderBooks()
    }
}

function onReadDetails(bookId) {
    const book = getBookById(bookId)
    console.log('book:', book)
    const elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = book.name
    elModal.querySelector('h4').innerText = book.price
    elModal.querySelector('p').innerText = book.description
    elModal.classList.add('open')
}

function onCloseModal() {
    const elModal = document.querySelector('.modal')
    elModal.classList.remove('open')
}

function onChangeRate(ev) {
    ev.preventDefault()
}