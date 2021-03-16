function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

function unshelfBook(bookTitle, shelf) {
  var index = shelf.findIndex(book => book.title === bookTitle)
  return shelf.splice(index, 1)
}

function listTitles(bookList) {
  str = ""
  for (var i = 0; i < bookList.length - 1; i++) {
    str = str.concat(`${bookList[i].title}, `);
}
  str = str.concat(`${bookList[bookList.length - 1].title}`)
  return str
}

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
