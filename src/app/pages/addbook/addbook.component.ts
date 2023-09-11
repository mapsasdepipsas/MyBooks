import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
//import { AlertService } from 'src/app/alert.service'; //importamos el servicio de alertas
import { ToastrService } from 'ngx-toastr';
import { HeaderpagService } from 'src/app/shared/headerpag.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddbookComponent {

  libroForm: FormGroup;

  //cambiamos la ubicacion de todo lo de abajo que antes estaba en books.component.ts a aqui para que el formulario funcione
  //newBook: Book = new Book(0, 0, '', '', '', '', '');
  public mibooks: Book;
  constructor(private BooksService: BooksService,
    private toastr: ToastrService,
    private pageService: HeaderpagService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.libroForm = this.fb.group({
      id_user: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
      photo: ['', Validators.required],
    })
  }

  public addlibro(): void {

    console.log(this.libroForm);

    const book = this.libroForm.value;

    console.log(book);

    this.BooksService.add(book).subscribe((resp:any) => {
      if(resp.error === false){
        /* REDIRIJO */
        console.log(resp);
        this.router.navigate(['/books'])
      }else {
      /* alert error */
      alert(resp.message)
      }
      
    })
  }

}