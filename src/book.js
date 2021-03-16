function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(inputName, inputAge, inputPronouns) {
  return {name: inputName, age: inputAge, pronouns: inputPronouns}
}

function saveReview(review, array){
  if (array.includes(review) === false) {
    array.push(review)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
};

function writeBook(title, characterObject, genre) {
  return {title: title, mainCharacter: characterObject, pageCount: calculatePageCount(title), genre: genre}
}

function editBook(book) {
  return book.pageCount = (book.pageCount * 3 / 4)
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
