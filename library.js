addButton();

let myLibrary = [];

// Book constructor and prototype
function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype = {
    info : function() {return `
${this.title}
By ${this.author}


${this.pages} pages


I have ${this.read} it.`; }
}

//add to lib function
function addBookToLibrary() {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const pages = document.querySelector('.pages');
    const read = document.querySelector('.read');
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

//display lib function

function displayLib() {
    myLibrary.forEach(e => {
        const div = document.createElement('div');
        const main = document.querySelector('.main');
        const textNode = document.createTextNode(e.info());

        div.classList.add('card');
        div.style = "white-space: pre;";
        main.appendChild(div);
        div.appendChild(textNode);
    });
}

// add to library button listener

function addButton() {
    const addBtn = document.querySelector('.add-book');
    const modal = document.querySelector('.modal');
    const saveBtn = document.querySelector('.save');
    const closeBtn = document.querySelector('.close');

    addBtn.addEventListener('click', () => {
        modal.style.display = "block";
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
            displayLib();
        });
        saveBtn.addEventListener('click', () => {
            modal.style.display = "none";
            addBookToLibrary();
            displayLib();
        });
        
    });
}

