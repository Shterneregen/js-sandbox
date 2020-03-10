console.log("==============================================================");
console.log("==== Point ====");
console.log("==============================================================");

function Point(x, y) {
    if (x === undefined || y === undefined) {
        throw "Error";
    }
    this.x = x;
    this.y = y;
    this.plus = (point) => {
        return new Point(this.x + point.x, this.y + point.y);
    };
}

let point1 = new Point(2, 4);
let point2 = new Point(5, 1);
let resultPoint = point1.plus(point2);
console.log(resultPoint.x, resultPoint.y);

console.log("==============================================================");
console.log("==== Speaker and Screamer ====");
console.log("==============================================================");

function Speaker(name) {
    if (name === undefined) {
        throw "Error";
    }
    this.name = name;
    this.speak = (speach) => {
        console.log(`${name} says ${speach}`);
    };
}
function Screamer(name) {
    Speaker.call(this, name);
    this.speak = (speach) => {
        console.log(`${name} shouts ${speach.toUpperCase()}`);
    };
}

const speaker = new Speaker("Michael");
speaker.speak("easy, man");

const screamer = new Screamer("Mr. Loud");
screamer.speak("hell yeah");

console.log("==============================================================");
console.log("==== The Reading list ====");
console.log("==============================================================");

function BookList(
    booksFinished,
    booksNotFinished,
    nextBook,
    currentBook,
    lastBook,
    books
) {
    this.booksFinished = booksFinished || 0;
    this.booksNotFinished = booksNotFinished || 0;
    this.nextBook = nextBook || null;
    this.currentBook = currentBook || null;
    this.lastBook = lastBook || null;
    this.books = books || [];
    this.add = (book) => {
        if (!(book instanceof Book)) {
            throw new Error();
        }
        if (this.books.length === 0) {
            this.currentBook = book;
        } else if (!this.nextBook) {
            this.nextBook = book;
        }
        this.books.push(book);
    };
    this.finishCurrentBook = () => {
        this.currentBook.markAsRead();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.books.find((b) => !b.isRead);
    };
}

function Book(object) {
    if (Object.keys(object).length === 0) {
        throw new Error();
    }
    this.title = object.title;
    this.genre = object.genre;
    this.author = object.author;
    this.isRead = object.isRead || false;
    this.dateFinished = object.dateFinished || null;
    this.markAsRead = () => {
        this.isRead = true;
        this.dateFinished = new Date(Date.now());
    };
}
