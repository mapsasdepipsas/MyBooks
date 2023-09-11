import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute, Router } from '@angular/router';
//import { AlertService } from 'src/app/alert.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/local-storage.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  libroForm: FormGroup;
  public id_book = null;
  public id_user = null;
  public mibooks:Book;
  // updateBook: Book = new Book(0, 0, "", "", "", "", "");


  constructor(private BooksService: BooksService,
     private route: Router, 
     private router: ActivatedRoute, 
     private toastr: ToastrService,
     private fb: FormBuilder,
     private localStorageService: LocalStorageService){}

  ngOnInit(): void{

    this.libroForm = this.fb.group({
      id_book: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
      photo: ['', Validators.required],
    })

   const user = JSON.parse(this.localStorageService.getItem('user'));
   this.id_user = user?.id_user;
    
    this.router.paramMap.subscribe( paramas => {
      this.id_book = +paramas.get('id');
      console.log(this.id_book);
    })

    this.BooksService.getBookByIdUserAndId_book(this.id_user, this.id_book).subscribe((resp:any) => {
      this.createForm(resp);
    })

    

   


    /* this.BooksService.getBookByIdUserAndId_book() */

   

   


    /* ESTO ES PARA EL BOTÓN MODIFICAR */
    /* let libroparaact = Number(this.route.snapshot.paramMap.get('id'))
    this.updateBook = this.booksService.getOne(libroparaact) */
  }


  public createForm(resp:any){


    if(resp.error === false){

      const libro = resp.result[0];
      
      /* llamo al servicio, cojo los datos de ese libro
      y relleno el formulario con esos datos */
      /* this.libroForm = this.fb.group({
        id_book: [libro.id_book, Validators.required],
        title: [libro.title, Validators.required],
        type: [libro.type, Validators.required],
        author: [libro.author, Validators.required],
        price: [libro.price, Validators.required],
        photo: [libro.photo, Validators.required],
      }) */

      /* console.log(this.libroForm); */

      this.libroForm.get('id_book').setValue(libro.id_book);
      this.libroForm.get('id_book').disable();
      this.libroForm.get('title').setValue(libro.title)
      this.libroForm.get('type').setValue(libro.type);
      this.libroForm.get('author').setValue(libro.author);
      this.libroForm.get('price').setValue(libro.price);
      this.libroForm.get('author').setValue(libro.author);
      this.libroForm.get('photo').setValue(libro.photo);

    } 
  }
  
  
  public modificarlibro(){
    this.libroForm.get('id_book').enable()
   /*  const libro = this.libroForm.value; */

    const libro = {
      id_user: this.id_user,
      id_book: this.libroForm.get('id_book').value,
      title: this.libroForm.get('title').value,
      type: this.libroForm.get('type').value,
      author: this.libroForm.get('author').value,
      price: this.libroForm.get('price').value,
      photo: this.libroForm.get('photo').value,
    }

    this.BooksService.edit(libro).subscribe((resp:any) => {
      console.log(resp);
    })

  }
}