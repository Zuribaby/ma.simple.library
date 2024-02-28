// Book constructor function that takes the following parameters: title, author, and year.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Author constructor function that takes the following parameters: firstName, lastName.
function Author(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = []; // Initialize the books array
}

// Method to add a book to the Author's books array
Author.prototype.addBook = function(book) {
  this.books.push(book);
}

// Create a few Author and Book objects to represent authors and their books in the library.
let author1 = new Author("J.K.", "Rowling");
let author2 = new Author("George", "Orwell");

let book1 = new Book("Harry Potter and the Philosopher's Stone", author1, 1997);
let book2 = new Book("Animal Farm", author2, 1945);
let book3 = new Book("1984", author2, 1949);

// Use the addBook method to add books to the respective authors.
author1.addBook(book1);
author2.addBook(book2);
author2.addBook(book3);

// Display the authors and their books in the console.
console.log(author1.firstName + " " + author1.lastName);
author1.books.forEach(function(book) {
    console.log("- " + book.title + " (" + book.year + ")");
});

console.log(author2.firstName + " " + author2.lastName);
author2.books.forEach(function(book) {
    console.log("- " + book.title + " (" + book.year + ")");
});


