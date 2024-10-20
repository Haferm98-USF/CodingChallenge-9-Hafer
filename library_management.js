//Task 1: Create a 'Book' Class

class Book
{
    #_isAvailable;
    constructor(title, author, ISBN)
    {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.#_isAvailable = true;
    }

// Retrieve Details
getDetails() 
{
    return `Book: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
};

//Check Availibility
get _isAvailable()
{
    return this.#_isAvailable;
};

//Assign Availablility

set isAvailable(availability)
{
    this.#_isAvailable = avialability;
}
};

//Task 2: Create a Section Class

class Section 
{
    constructor(name, books)
    {
        this.name = name;
        this.books = books;
    };

// Add a book object to a Section
addBook(book) 
{
    this.books.push(book);
};

// Retrive available books from a Section

getAvailableBooks() 
{
    return this.books.filter(book => book.isAvailable).length;
};

// List the books in a Section
listBooks()
{
    this.books.forEach(book => 
    {
        console.log(`${book.getDetails()} - Available: ${book.isAbailabe}`);
    }
    )
};
// Task 5: Calsulate total books in a section
calculateTotalBooksAvailable()
{
    return this.books.filter(book => book.isAvailable).length;
}

};

//Task 3: Create a Patron Class
class Patron
{
    constructor(name, borrowedBooks)
    {
        this.name = name;
        this.borrowedBooks = [];
    }

//Borrow a Book
borrowBook(book)
{
    if (book._isAvailable)
    {
        this.borrowedBooks.push(book);
        book._isAvailable = false;
    };
};


//Return a Book

returnBook(book)
{
    const updateBooks = this.borrowedBooks.filter((borrowedBook) +. borrowedBook === book)
    this.borrowedBooks = updateBooks;
    book._isAvailable = true;
};
};

//Task 4: Create a VIP Patron Class that Inherits from Patron

class VIPPatron 
{
    constructor(name, priority = true)
    {
        this.name = name;
        this.priority = priority;
    }
//OVerriding borrowbook method
borrowBook(book)
{
    if (this.priority = true)
    {
        book.isAvailable = false;
        this.borrowedBooks.push(book);  
    };
};;
}
