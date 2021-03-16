function createLibrary(name) {
  return {name: name, shelves: {fantasy: [], fiction: [], nonFiction: []}}
}

function addBook(library, book) {
  return library.shelves[`${book.genre}`].push(book)
}

function checkoutBook(library, bookTitle, bookGenre) {
  for (var i = 0; i < library.shelves[bookGenre].length; i++) {
    if (bookTitle === library.shelves[bookGenre][i].title) {
      var index = library.shelves[bookGenre].findIndex(book => book.title === bookTitle)
      library.shelves[bookGenre].splice(index, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
