'use strict'
const STORAGE_KEY = 'bookDB'
var gBooks

_createBooks()

function getBooksForDisplay() {
    return gBooks
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}

function addBook(bookName, bookPrice) {
    const book = _createBook(bookName, bookPrice, 'img/default.png')
    gBooks.unshift(book)
    _saveBooksToStorage()
}

function updateBook(bookId, newPrice) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks[bookIdx].price = newPrice
    _saveBooksToStorage()
}

function getBookById(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        console.log('enter if')
        books = []
        books.push(_createBook('Harry Potter', '15$', 'img/Harry Potter.jpg'))
        books.push(_createBook('War and piece', '20$', 'img/War and piece.jpg'))
        books.push(_createBook('My family and other animals', '17$', 'img/My family and other animals.jpg'))
    }
    gBooks = books
    _saveBooksToStorage()
}

function _createBook(name, price, imgURL) {
    return {
        id: makeId(),
        name,
        price,
        imgURL,
        description: makeLorem(),
        rate: 0
    }
}
