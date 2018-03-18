function GetAllBooks() {
    var books = [
        { title: 'Mathematics', author: 'R.D.Sharma', available: true },
        { title: 'A Farewell to Arms', author: 'Ernest', available: false },
        { title: 'I know Why the Caged Bird Sings', author: 'Maya', available: false }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
