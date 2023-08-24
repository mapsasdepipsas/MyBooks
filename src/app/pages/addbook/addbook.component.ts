import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { AlertService } from 'src/app/alert.service'; //importamos el servicio de alertas

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddbookComponent {
  //cambiamos la ubicacion de todo lo de abajo que antes estaba en books.component.ts a aqui para que el formulario funcione

  newBook: Book = new Book(0, 0, '', '', '', '', '');

  constructor(private BooksService: BooksService, private alertService: AlertService){}

  addlibro() {
    if (this.newBook.title && this.newBook.type && this.newBook.author && this.newBook.price && this.newBook.photo) {
      this.BooksService.add(this.newBook); // añadir libro //cambiamos a this.BooksService para que se añada al servicio
      this.newBook = new Book(0, 0, '', '', '', '', ''); // cuando se añada, limpiar formulario
    
      this.alertService.alerta1("Libro añadido :)") //añadimos la alerta
    }
  }

//creamos metodo para que el boton tenga funcionalidad y borre la card(M3.4)

  //borrarcard(book: any){
    //let index = this.books.indexOf(book);
    //if(index != -1){
      //this.books.splice(index,1);
    //}
  
}
