import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service'; //para cuando dsps de editar y se busque el libro, no aparezca

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = new Book(0, 0, '', '', '', '', '');
  @Output() cardborrada: EventEmitter <void> = new EventEmitter<void>();
  //con el decorador output, el componente hijo (card) puede emitir eventos hacia su padre (books) (M3.4)
  librosfiltrados: Book[] = []; //creamos librosfiltrados para guardar los libros que contengan el idbook que introducimos en el buscador
  buscarid: number | undefined;

constructor(private booksService: BooksService, private router: Router, private alertService: AlertService){}

ngOnInit(): void{
  this.books = this.booksService.getAll(); //llamamos a getall(esta en el service) para mostrar libros del array
  this.librosfiltrados = this.books; //igualamos libros filtrados a books, para que busque ahi
}


  addlibro() {
    if (this.newBook.title && this.newBook.type && this.newBook.author && this.newBook.price && this.newBook.photo) {
      this.booksService.add(this.newBook); // añadir libro //llamamos a add (esta en el servicio) para que el libro que añadamos desde form aparezca en books
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

  filtrarlibros(): void{
    if(this.buscarid != undefined){
      let librofiltrado = this.booksService.getOne(this.buscarid);
      if(librofiltrado && !this.editarlibro(librofiltrado)){
        this.alertService.alerta1("No se ha encontrado el libro editado")
      }
      this.librosfiltrados = [librofiltrado]
    }else{
      this.librosfiltrados = this.books
    }
  }
  
  editarlibro(book:Book): boolean{
    let editado = this.booksService.edit(book);
    if(editado){
      this.router.navigate(['/books'])
    } return editado;
  }
}