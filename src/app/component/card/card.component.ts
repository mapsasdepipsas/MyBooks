import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  //con los decoradores input la info del padre (books) le llega al hijo (card). book e even estan en el padre. (M3.4)
  //con el decorador output, el componente hijo (card) puede emitir eventos hacia su padre (books) (M3.4)
  @Input() book: Book;
  @Input() even: boolean;
  // @Output() cardborrada: EventEmitter <void> = new EventEmitter<void>();
  @Output() cardborrada= new EventEmitter <Book>();
  public books: Book[];
//importamos Router para conectar el boton de modificar de las cards con la pagina UpdateBook
constructor(private router: Router, private BooksService: BooksService){}


borrarcard():void{
  this.cardborrada.emit(this.book); //emit--> hace que emita el evento cardborrada
}

navigateToUpdateBook(id: number){
  this.router.navigate(['/update-book', id])
}
}
//   borrarcard(){

//     /* RECO */
//     this.booksService.delete(this.book.id_book).subscribe( (resp:any) => {
//       console.log(resp);
//       /* actualizar el componente principal que los muestras */
//     });
//     this.cardborrada.emit();
//   }
// //borrar card es el metodo para que a traves de un evento se notifique que se debe borrar x tarjeta borrada con borrarcard de books.ts(M3.4)
// }