import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];
  newBook: Book = new Book(0, 0, '', '', '', '', '');
  @Output() cardborrada: EventEmitter <void> = new EventEmitter<void>();
  //con el decorador output, el componente hijo (card) puede emitir eventos hacia su padre (books) (M3.4)

  ngOnInit(): void {

    this.books = [
      new Book(7409, undefined,"La casa de los espíritus", "Realismo mágico", "Isabel Allende", "12", "../../../assets/img/casaespiritus.jpg"),
      new Book(3945, 304, "Al Faro", "Novela", "Virginia Woolf", "14", "../../../assets/img/alfaro.jpeg"),
      new Book(3945, 304, "Balada de pájaros cantores y serpientes", "Ficción", "Suzanne Collins", "19", "../../../assets/img/baladapajaros.jpg"),
      new Book(undefined, 304, "The Bluest Eye", "Bildungsroman", "Toni Morrison", "14", "../../../assets/img/thebluesteye.jpg"),

    ];
  }
  //en vez de usar ngoninit tambien podriamos hacerlo metiendo el array books en el constructor, pero es mas recomendable hacerlo en ngoninit

  addlibro() {
    if (this.newBook.title && this.newBook.type && this.newBook.author && this.newBook.price && this.newBook.photo) {
      this.books.push(this.newBook); // añadir libro
      this.newBook = new Book(0, 0, '', '', '', '', ''); // cuando se añada, limpiar formulario
    }
  }

//creamos metodo para que el boton tenga funcionalidad y borre la card(M3.4)
  borrarcard(book: any){
    let index = this.books.indexOf(book);
    if(index != -1){
      this.books.splice(index,1);
    }
  }
}