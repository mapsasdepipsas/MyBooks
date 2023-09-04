import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute, Router } from '@angular/router';
//import { AlertService } from 'src/app/alert.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public mibooks:Book;
  // updateBook: Book = new Book(0, 0, "", "", "", "", "");


  constructor(private BooksService: BooksService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void{
    /* ESTO ES PARA EL BOTÓN MODIFICAR */
    /* let libroparaact = Number(this.route.snapshot.paramMap.get('id'))
    this.updateBook = this.booksService.getOne(libroparaact) */
  }
  
  
  public modificarlibro(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)
    console.log(precioNum);
    

    let bookEdited = new Book (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto);
    this.BooksService.edit(bookEdited).subscribe((res:Respuesta)=>{
    // console.log('Respuesta del servicio:', res);
    console.log('Datos del libro a editar:', bookEdited);

    if (!res.error)
    {
      alert("Libro editado");
      this.mibooks = res.res_book;
      console.log(res.res_book);
    } 
    else
      alert("No se encuentra libro para editar");

   })
   console.log(this.mibooks);
  }

    
  }

    // this.booksService.edit(this.updateBook).subscribe((resp:any) => {
    //   console.log(resp);

    //   if(resp){
    //     this.toastr.success("Libro editado correctamente!")
    //   }else{
    //     this.toastr.error("No se ha encontrado el libro :(")
    //   }
    // })
