import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public book: Book[];


constructor(public apiService: BooksService)
{
  this.apiService.book = null

  this.apiService.getAll().subscribe((data: Respuesta) => {
    console.log(data);
    this.book = data.data;
    console.log();
    
  });
}

mostrarLibro(buscarid: number) //a medias
{
  console.log("buscarid", buscarid);
  if(buscarid){this.apiService.getOne(buscarid).subscribe((data: Respuesta) =>{
  this.book = [data.data_book];
  });
  
  }else{
    this.apiService.getAll().subscribe((data: Respuesta) =>{
    this.book = data.data;});
  }
}}


// filtrarlibros(): void {
//   if (this.buscarid !== undefined) {
//     this.apiService.getOne(this.buscarid).subscribe(
//       (respuesta: Respuesta) => {
//         if (!respuesta.error) {
//           const librofiltrado: Book = respuesta.data;
//           if (!this.editarlibro(librofiltrado)) {
//             this.alertService.alerta1("No se ha encontrado el libro editado");
//             this.libronoencontrado();
//             this.librosfiltrados = [];
//           } else {
//             this.librosfiltrados = [librofiltrado];
//           }
//         } else {
//           this.librosfiltrados = [];
//           this.libronoencontrado();
//         }
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   } else {
//     this.librosfiltrados = this.books;
//   }
// }


insertarLibro(title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement){
  let nuevolibro: Book = new Book(0, 0, title.value, type.value, author.value, price.value, photo.value);
  this.apiService.postLibros(nuevolibro)
  .subscribe((respuesta: Respuesta) =>
  {
    if(!respuesta.error)
    {
      alert("Libro añadido :)");
      title.value = ""
      type.value = ""
      author.value = ""
      price.value = ""
      photo.value = ""

      this.apiService.book = null;
    }
    else
    alert("El libro ya existe :/")
  })
}

  // addlibro() {
  //   if (this.newBook.title && this.newBook.type && this.newBook.author && this.newBook.price && this.newBook.photo) {
  //     this.booksService.postLibros(this.newBook); // añadir libro //llamamos a add (esta en el servicio) para que el libro que añadamos desde form aparezca en books
  //     this.newBook = new Book(0, 0, '', '', '', '', ''); // cuando se añada, limpiar formulario
  //     this.toastr.success("Libro añadido :)")
  //   }
  // }


// ngOnInit(): void{
//     this.apiService.getAll().subscribe((respuesta: Book[]) => {
//     this.librosfiltrados = respuesta;
//     this.books = respuesta,
//     (error: any) => console.log(error),
//   });
// }



borrarcard(id_book: number): void {
  this.apiService.delete(id_book).subscribe(
    (data: Respuesta) => {
      if (data.error == false) {
          this.book= this.books.filter(book => book.id_book != id_book);
          console.log(data);
      }
    })
  }
          
//         this.toastr.info('Libro borrado');
//         this.librosfiltrados = this.librosfiltrados.filter(
//           (libro) => libro.id_book !== book.id_book
//         );
//       } else {
//         console.error('Error al eliminar el libro:', respuesta.mensaje);
//       }
//     },
//     (error) => {
//       console.error('Error en la solicitud:', error);
//     }
//   );
// }


//creamos metodo para que el boton tenga funcionalidad y borre la card(M3.4)
  // borrarcard(book: any): void{
  //   let index = this.books.indexOf(book);
  //   if(index != -1){
  //     this.books.splice(index,1);
  //   }
  //   this.toastr.info("Libro borrado")
  // }

  // libronoencontrado(){
  //   this.toastr.warning("El libro no existe :(")
  // }


  
  
  
  editarlibro(book:Book): boolean{
    let editado = this.apiService.edit(book);
    if(editado){
      this.router.navigate(['/books'])
    } return editado;
  }
}
