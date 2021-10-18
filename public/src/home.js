function getTotalBooksCount(books) {
  let count = books.length;
  return count;
}

function getTotalAccountsCount(accounts) {
  let count = accounts.length;
  return count;
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  return checkedOut.length
}

function getMostCommonGenres(books) {

 let genresOnly = []

 books.forEach((book) => {
   if(!genresOnly.some(genre => genre.name === book.genre)){
     let genreObject = {name: book.genre}
     genresOnly.push(genreObject)
   }
 
   genresOnly.map((genre) => {
     let counter = 0;
     for(let i = 0; i < books.length; i++){
       if(books[i].genre === genre.name){
         counter++
       }
     }
     genre.count = counter
   })

   genresOnly.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1)
   genresOnly.length = 5;
 })
 return genresOnly
}

function getMostPopularBooks(books) {
  let bookNames = []

  books.forEach((book) => {
    if(!bookNames.some(bookName => bookName.name === book.title)){
      let bookObject = {name: book.title}
      bookNames.push(bookObject)
    }})
  
    bookNames.map((currentBook) => {
      let bookFound = books.find((book) => book.title === currentBook.name)
      currentBook.count = bookFound.borrows.length
    })
 
    bookNames.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1)
    bookNames.length = 5;
    return bookNames
}

function countAllBooksBorrows(books){
  let bookNames = []

  books.forEach((book) => {
    if(!bookNames.some(bookName => bookName.name === book.title)){
      let bookObject = {name: book.title}
      bookNames.push(bookObject)
    }})
  
    bookNames.map((currentBook) => {
      let bookFound = books.find((book) => book.title === currentBook.name)
      currentBook.count = bookFound.borrows.length
      currentBook.authorId = bookFound.authorId
    })
    return bookNames
}

function getMostPopularAuthors(books, authors) {
  let booksWithCount = countAllBooksBorrows(books);

  let authorsWithCount = [];
  for(let i = 0; i < authors.length; i++){
    let counter = 0;
    authorsWithCount[i] = {name: `${authors[i].name.first} ${authors[i].name.last}`};
    booksWithCount.forEach((book) => {
      if(book.authorId === authors[i].id){
        counter += book.count
      }
    })
    authorsWithCount[i].count = counter;
  }
  authorsWithCount.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1)
  authorsWithCount.length = 5;
  return authorsWithCount
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
