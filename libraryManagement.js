function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

function Library() {
    this.books = [];
}

Library.prototype.addBook = function(book) {
    this.books.push(book);
};

Library.prototype.removeBook = function(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
        this.books.splice(index, 1);
        return 'Book removed successfully';
    } else {
        return 'Book not found';
    }
};

Library.prototype.findBook = function(title) {
    const foundBook = this.books.find(book => book.title === title);
    return foundBook 
        ? `Found ${foundBook.title}, Author: ${foundBook.author}`
        : 'Book not found';
};

Library.prototype.listAvailableBooks = function() {
    const availableBooks = this.books.filter(book => book.status === 'available');
    return availableBooks.length ? availableBooks : 'No books available';
};

Library.prototype.borrowBook = function(title) {
    const theBook = this.books.find(book => book.title === title);
    if (theBook) {
        if (theBook.status === 'available') {
            theBook.status = 'borrowed';
            return 'Borrow Successful';
        } else {
            return 'Book already borrowed';
        }
    } else {
        return 'Book not found';
    }
};

Library.prototype.returnBook = function(title) {
    const theBook = this.books.find(book => book.title === title);
    if (theBook) {
        if (theBook.status === 'borrowed') {
            theBook.status = 'available';
            return 'Return Successful';
        } else {
            return 'Book is not currently borrowed';
        }
    } else {
        return 'Book not found';
    }
};