import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
//import { AlertService } from 'src/app/alert.service'; //importamos el servicio de alertas
import { ToastrService } from 'ngx-toastr';
import { HeaderpagService } from 'src/app/shared/headerpag.service'; //xra que marque en header en que pagina me encuentro
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddbookComponent {
  //cambiamos la ubicacion de todo lo de abajo que antes estaba en books.component.ts a aqui para que el formulario funcione

  newBook: Book = new Book(0, 0, '', '', '', '', '');

  constructor(private BooksService: BooksService, private toastr: ToastrService, private pageService: HeaderpagService, private apiService: BooksService){}

  addlibro(id_book: HTMLInputElement, id_user: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement) {
    if (id_book.value == ""){
      alert("Falta un campo obligatorio")

      }else{
      let nuevolibro: Book = new Book(parseInt(id_book.value), parseInt(id_user.value), title.value, type.value, author.value, price.value, photo.value)
      this.apiService.postLibros(nuevolibro)
      .subscribe((resp: Respuesta) =>{
        if (!resp.error)
        {
          alert("Libro insertado correctamente");
    
          id_book.value = "0";
          id_user.value = "0";
          title.value = "";
          type.value= "";
          author.value= "";
          price.value= "";
          photo.value= ""
        }
        else
          alert("El libro ya existe")
      })
    }}

  ngOnInit() {
    this.pageService.setCurrentPage('books');
  }

//creamos metodo para que el boton tenga funcionalidad y borre la card(M3.4)

  //borrarcard(book: any){
    //let index = this.books.indexOf(book);
    //if(index != -1){
      //this.books.splice(index,1);
    //}
  
}
