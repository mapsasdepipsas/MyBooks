import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { AlertService } from 'src/app/alert.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  updateBook: Book = new Book(0, 0, "", "", "", "", "")

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void{
    let libroparaact = Number(this.route.snapshot.paramMap.get('id'))
    //this.updateBook = this.booksService.getOne(libroparaact)
  }
  
  
  modificarlibro(){

    let bieneditado = this.booksService.edit(this.updateBook)

    if(bieneditado){
      this.toastr.success("Libro editado correctamente!")
    }else{
      this.toastr.error("No se ha encontrado el libro :(")
    }

    this.router.navigate(['/books']);
  }


}
