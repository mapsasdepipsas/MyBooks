import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service'; //para cuando dsps de editar y se busque el libro, no aparezca
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
  // books: Book[] = [];
  public books: Book[];
  // newBook: Book = new Book(0, 0, '', '', '', '', '');
  // @Output() cardborrada: EventEmitter <void> = new EventEmitter<void>();
  //con el decorador output, el componente hijo (card) puede emitir eventos hacia su padre (books) (M3.4)
  // librosfiltrados: Book[] = []; //creamos librosfiltrados para guardar los libros que contengan el idbook que introducimos en el buscador
  // buscarid: number | undefined;

constructor(private BooksService: BooksService, private router: Router, private alertService: AlertService, private toastr: ToastrService){

//esto es para obtener todos los libros
  this.BooksService.getAll().subscribe((res:Respuesta) =>{
    console.log(res);
    
    this.books = res.res;
    console.log(res.res);
    })
}

borrar(id_Book:number):void{
  this.BooksService.delete(id_Book).subscribe((res:Respuesta)=>{
    console.log(id_Book);
    
    if (res.error == false) {
     
      this.books = this.books.filter(book => book.id_book != id_Book);
        console.log(res);
      

        this.BooksService.getAll().subscribe((res:Respuesta) =>{
          console.log(res);
          
          this.books = res.res;
          console.log(res.res);
          })

    }
  })
}
filtrarlibros(id_Book:number){
console.log("num search_id: ", id_Book);
  
  if(id_Book){
    this.BooksService.getOne(id_Book).subscribe((res:Respuesta)=>{
      this.books = [res.res_book];
      console.log([res.res_book]);
      
    });
  }else{
    this.BooksService.getAll().subscribe((res:Respuesta)=>{
      this.books = res.res;
    });
  }
}



}


  // filtrarlibros(): void{
  //   if(this.buscarid != undefined){
  //     let librofiltrado = this.booksService.getOne(this.buscarid);
  //     if(librofiltrado && !this.editarlibro(librofiltrado)){
  //       this.alertService.alerta1("No se ha encontrado el libro editado")
  //     }
  //     this.librosfiltrados = [librofiltrado]
  //   }else{
  //     this.librosfiltrados = this.books
  //   }
  // }
  

//   editarlibro(book:Book): boolean{
//     let editado = this.booksService.edit(book).subscribe((resp:any) => {
//       console.log(resp);
//     });
//     if(editado){
//       this.router.navigate(['/books'])
//     } return true;
//   }
// }
