'use strict'

var IdReading



renderBooks()

function renderBooks() {
    var books = getBooks()
    var txtHtml = ''
    books.forEach(book => {
        txtHtml += ` <tr data-book-id=${book.id}>
        <td class="id">${book.id}</td>
        <td class="title">${book.title}</td>
        <td class="price">${book.price} $</td>
        <td><button class="read">Read</button></td>
        <td><button class="update">Update</button></td>
        <td><button class="delete">Delete</button></td>
        
    </tr>`
    })
    $('tbody').html(txtHtml)

    $('.update').on('click', function (){
        const bookId = $(this).closest('[data-book-id]').data('bookId')
        onUpdateBook(bookId)

    })

    $('.delete').on('click', function (){
        const bookId = $(this).closest('[data-book-id]').data('bookId')
        onDeleteBook(bookId)
    })

    $('.read').on('click',  function (){
        const bookId = $(this).closest('[data-book-id]').data('bookId')
        onReadBook(bookId)
    })

}

function onAddBook() {
    var title = prompt('Title:')
    var price = prompt('Price:')
    var description = prompt('Description:')
    addBook(title, price, description)
    renderBooks()
}

function onReadBook(id) {
    IdReading = id
    var book = getBookById(id)
    document.querySelector('.modal').style.display = 'block'
    document.querySelector('.modal h3').innerText = book.title
    document.querySelector('.modal p').innerText = book.description
    document.querySelector('.modal h4 span').innerText = book.rate


}
function onUpdateBook(id) {

    var price = +prompt('Price:')
    console.log(id, price);
    updateBook(id, price)
    renderBooks()

}
function onDeleteBook(id) {
    deleteBook(id)
    renderBooks()

}

function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'

}


function onRateMius() {
    rateMinus(IdReading)
    var book = getBookById(IdReading)
    document.querySelector(".modal span").innerText = book.rate
}

function onRateplus() {
    ratePlus(IdReading)
    var book = getBookById(IdReading)
    document.querySelector(".modal span").innerText = book.rate
}