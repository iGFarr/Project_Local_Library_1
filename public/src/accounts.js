// compares each account id to input id and returns match to "found"
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);  
  return found;
}

// uses lowercase version of each last name to sort accounts A to Z by last name
function sortAccountsByLastName(accounts) {
  let AtoZ = accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return AtoZ;
}

/* uses a for loop to increment the totalBorrows variable for each matching ID 
   in the borrows array of a book, then returns totalBorrows */
function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    const borrowed = book.borrows;
    for(let i = 0; i < borrowed.length; i++){
      if(borrowed[i].id === account.id){
      totalBorrows += 1
      }
    }
  })
  return totalBorrows;
}

// returns all books checked out by a specific account, also adds author object to book object
function getBooksPossessedByAccount(account, books, authors) {
  // adds author key to each book, with value being the author object
  books.map((book) => {
    let authorValue = require("./books"); 
    book.author =  authorValue.findAuthorById(authors, book.authorId);
    return book;
  })

  /* checks for an object in borrows with a false return status and matching ID to account ID
     filters books object by those conditions */
  const checkedOut = books.filter((book) => book.borrows.some((borrow) => ((borrow.id === account.id) &&
  borrow.returned === false)))
  return checkedOut
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
