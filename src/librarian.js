class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }

  greetPatron(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`;
    }
    else {
      return `Hello, ${name}!`;
    }
  }

  findBook(givenBook) {
    if (this.library.shelves.fantasy.includes(givenBook)) {
      var bookGenre = 'fantasy'
      var index = this.library.shelves[bookGenre].findIndex(book => book.title === givenBook.title)
      this.library.shelves[bookGenre].splice(index, 1)
      return `Yes, we have ${givenBook.title}`
    }
    else if (this.library.shelves.fiction.includes(givenBook)) {
      var bookGenre = 'fiction'
      var index = this.library.shelves[bookGenre].findIndex(book => book.title === givenBook.title)
      this.library.shelves[bookGenre].splice(index, 1)
      return `Yes, we have ${givenBook.title}`
    }
    else if (this.library.shelves.nonFiction.includes(givenBook)) {
      var bookGenre = 'nonFiction'
      var index = this.library.shelves[bookGenre].findIndex(book => book.title === givenBook.title)
      this.library.shelves[bookGenre].splice(index, 1)
      return `Yes, we have ${givenBook.title}`
    }
    else {
      return `Sorry, we do not have ${givenBook.title}`
    }
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25)
  }

}


module.exports = Librarian;
