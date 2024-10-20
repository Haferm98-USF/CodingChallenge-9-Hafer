//Task 1: Create a 'Book' Class

class Book
{
    #_isAvailable;
    constructor(tile, author, ISBN)
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