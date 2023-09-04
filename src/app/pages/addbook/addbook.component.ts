import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
//import { AlertService } from 'src/app/alert.service'; //importamos el servicio de alertas
import { ToastrService } from 'ngx-toastr';
import { HeaderpagService } from 'src/app/shared/headerpag.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddbookComponent {
  //cambiamos la ubicacion de todo lo de abajo que antes estaba en books.component.ts a aqui para que el formulario funcione
  //newBook: Book = new Book(0, 0, '', '', '', '', '');
  public mibooks:Book;
  constructor(private BooksService: BooksService, private toastr: ToastrService, private pageService: HeaderpagService){}
  ngOnInit(): void {
  }
  public addlibro(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string):void{
    
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)

    let newBook = new Book (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto)

    this.BooksService.add(newBook).subscribe((res:Respuesta)=>{
     
      if (!res.error)
      {
        this.toastr.success('Libro añadido :)');
        this.mibooks = res.res_book;
        console.log(res.res_book);
        
      } 
      else
          this.toastr.error("No se agregó libro");

     })
     console.log(this.mibooks);
  }

}

  //   if (this.newBook.title && this.newBook.type && this.newBook.author && this.newBook.price && this.newBook.photo) {
  //     this.BooksService.add(this.newBook).subscribe((resp:any) =>{
  //       console.log(resp.data);
  //     });;
  //     this.newBook = new Book(0, 0, '', '', '', '', '');
  //     this.toastr.success('Libro añadido :)');
  //   }
  // }
  // ngOnInit() {
  //   this.pageService.setCurrentPage('books');
  // }

//creamos metodo para que el boton tenga funcionalidad y borre la card(M3.4)

  //borrarcard(book: any){
    //let index = this.books.indexOf(book);
    //if(index != -1){
      //this.books.splice(index,1);
    //}
