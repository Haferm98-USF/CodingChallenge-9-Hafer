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
    return this.books.filter(book => book.isAvailable).lenth;
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

};