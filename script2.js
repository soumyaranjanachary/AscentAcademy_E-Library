console.log("using ES6 classes");

class Book {
    constructor(name, author, stream) {
        this.name = name;
        this.author = author;
        this.stream = stream;
    }
}
class Display {
    add(book) {
        console.log("Adding");
        let tablebody = document.getElementById('tablebody');
        let uistring = `
                    <tr>                   
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.stream}</td>
                </tr>`
        tablebody.innerHTML += uistring;
    }
    clear() {
        let libraryform = document.getElementById('libraryform');
        libraryform.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {

            return true;
        }
    }
    show(stream, dismessage) {
        let mssg = document.getElementById('messg');
        mssg.innerHTML = `
        <div class="alert alert-${stream} alert-dismissible fade show" role="alert">
        <strong>Note </strong>  ${dismessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`

        setTimeout(() => {
            mssg.innerHTML = '';
        }, 3000);
    }}
    
    let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;


    let science = document.getElementById('science');
    let commerse = document.getElementById('commerse');
    let humanities = document.getElementById('humanities');
    let stream;

    if (science.checked) {
        stream = science.value;
    }

    else if (commerse.checked) {
        stream = commerse.value;
    }
    else if (humanities.checked) {
        stream = humanities.value;
    }
    let book = new Book(name, author, stream);
    console.log(book);
    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', '  your book has been successfully added.')
    }
    else {
        display.show('danger', '  Invalid book pls check the book and author.')
    }


    e.preventDefault();
    

}