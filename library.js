let myLibrary = [
    //{ title: "A Book ", author: "An Author", pages: "100", read: "read" },
    //{ title: "Another Book", author: "Another Author", pages: "200", read:"not read" },


];

// Book constructor 
function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, I have ${read} it.`
    }
}

//add to lib function
function addBookToLibrary() {
    let title = prompt('what is the title of the book you wish to add?');
    let author = prompt('who is the author?');
    let pages = prompt('How many pages is it?');
    let read = prompt('Have you read it(yes/no)?');

    read = read.toLowerCase();
    
    while (!(read === 'yes' || read === 'no')) {
        read = prompt('That is not "yes" or "no" please enter again.');
        read = read.toLowerCase();
    };

    if (read === 'yes') {
        read = 'read';
    }else read = 'not read';

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

//display lib function

function displayLib() {

    myLibrary.forEach(e => {
        const div = document.createElement('div');
        const main = document.querySelector('.main');
        const textNode = document.createTextNode("e.info()");

        div.classList.add('card');
        main.appendChild(div.cloneNode(true));
        div.appendChild(textNode);
    
    
    });
}