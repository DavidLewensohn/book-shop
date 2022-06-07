'use strict'
const STORAGE_KEY = 'booksDB'

var gBooks
createBooks()


function getBooks() {
    return gBooks
}

function createBook() {
    var book = {
        id: makeId(),
        title: makeLorem(),
        price: getRandomIntInclusive(10, 200),
        description: makeLorem(25),
        rate: 0,
    }
    return book
}

function createBooks() {
    var books = loadFromStorage(STORAGE_KEY)

    if (!books || !books.length) {
        books = []
        for (let i = 0; i < 10; i++) {
            //add argument
            books.push(createBook())
        }
    }
    gBooks = books
    _saveBooksToStorage

}
function addBook(title, price, description) {
    console.log('read')
    var book = {
        id: makeId(),
        title,
        price,
        description,
    }
    gBooks.push(book)
    _saveBooksToStorage()

}
function updateBook(id, price) {
    console.log(id, 'update', price)
    var book = gBooks.find(book => book.id == id)
    book.price = price
    _saveBooksToStorage()
}
function deleteBook(id) {
    var idx = gBooks.findIndex((book) => id == book.id)
    gBooks.splice(idx, 1)
    _saveBooksToStorage()
}

function getBookById(id) {
    return gBooks.find(book => book.id == id)
}

function rateMinus(id) {
    var book = gBooks.find(book => book.id == id)
    console.log(book);
    if (book.rate >0)book.rate--
    console.log(id, book.rate)
    _saveBooksToStorage()
}



function ratePlus(id) {
    var book = gBooks.find(book => book.id == id)
    if (book.rate < 9)book.rate++
    console.log(id, book.rate)
    _saveBooksToStorage()
}






function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
