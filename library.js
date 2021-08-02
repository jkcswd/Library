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

//add to lib function not working?
function addBookToLibrary() {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const pages = document.querySelector('.pages').value;
    const read = (document.querySelector('.read').checked ? 'read' : 'not read');
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

//display lib function

function displayLib() {
    myLibrary.forEach(e => {
        const div = document.createElement('div');
        const main = document.querySelector('.main');
        const textNode = document.createTextNode(e.info());
        const removeButton = document.createElement('div');
        const btnTextNode = document.createTextNode('X');
        const readBtn =  document.createElement('div');
        const readTextNode = document.createTextNode('Read/Not Read');


        div.classList.add('card');
        removeButton.classList.add('btn');
        readBtn.classList.add('btn');
        removeButton.classList.add('remove-btn');
        readBtn.classList.add('read-btn');
        div.style = "white-space: pre;";
        main.appendChild(div);
        div.appendChild(textNode);
        div.appendChild(removeButton);
        removeButton.appendChild(btnTextNode);
        div.appendChild(readBtn);
        readBtn.appendChild(readTextNode);
        
    });
}

// add to library button listener (safe?)

function addButton() {
    const addBtn = document.querySelector('.add-book');
    const modal = document.querySelector('.modal');
    const saveBtn = document.querySelector('.save');
    const closeBtn = document.querySelector('.close');
    const inputs = document.querySelectorAll('.inputs');
    const check = document.querySelector('.check');
    const main = document.querySelector('.main');

    addBtn.addEventListener('click', () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
        inputs.forEach( input  => input.value = '');
        check.checked = false;
    });

    saveBtn.addEventListener('click', () => {
        modal.style.display = "none";
        addBookToLibrary();
        while (main.childNodes.length > 2) {main.removeChild(main.lastChild)};
        displayLib();
        inputs.forEach(input  => input.value = '');
        check.checked = false;
    });
}

//remove book function 

function removeBookButton() {
    const removeButton = document.querySelectorAll('.remove-btn');

    removeButton.forEach(btn => btn.addEventListener('click', () => {
        //add code to execute
    }));
}

//change read status function


function readStatusButton() {
    const readButton = document.querySelectorAll('.read-btn');

    readButton.forEach(btn => btn.addEventListener('click', () => {
        //add code to execute
    }));
}

