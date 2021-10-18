
function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let totalArray = [];

  const checkedOut = books.filter((book) => book.borrows.some((borrow) => 
  borrow.returned === false));

  const notCheckedOut = books.filter((book) => book.borrows.every((borrow) => 
  borrow.returned === true));

  totalArray.push(checkedOut);
  totalArray.push(notCheckedOut);

  return totalArray;
}

function getBorrowersForBook(book, accounts) {
  
  let borrowers = [];
  
  for (let i = 0;(borrowers.length < 10) && (i < book.borrows.length); i++){
    let currentID = book.borrows[i].id
    let currentReturnStatus = book.borrows[i].returned
    
    if(!borrowers.includes(currentID)){
      let foundAccount = accounts.find((account) => account.id === currentID)
      foundAccount.returned = currentReturnStatus;
      borrowers.push(foundAccount)
    }
  }
  
  return borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
