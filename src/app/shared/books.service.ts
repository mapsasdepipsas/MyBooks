import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
//private books: Book[] = [];
private url = "http://localhost:3000";
  constructor(private http: HttpClient){} 
  // {this.books.push(
  //   new Book(7409, 0, "La casa de los espíritus", "Realismo mágico", "Isabel Allende", "12", "../../../assets/img/casaespiritus.jpg"),
  //   new Book(43, 306, "Al Faro", "Novela", "Virginia Woolf", "14", "../../../assets/img/alfaro.jpeg"),
  //   new Book(3945, 64, "Balada de pájaros cantores y serpientes", "Ficción", "Suzanne Collins", "19", "../../../assets/img/baladapajaros.jpg"),
  //   new Book(9, 32, "The Bluest Eye", "Bildungsroman", "Toni Morrison", "14", "../../../assets/img/thebluesteye.jpg")
  // )}; //añadimos aqui el array de libros para que aparezca en la pagina books. //se guarda en el servicio y dsps se le llama en books


  getBookByIdUser(id_user: number){
    const params = {
      id_user: id_user
    }
    return this.http.get(`${this.url}/books`, {params});
  }

  getBookByIdUserAndId_book(id_user: number, id_book: number){

    const params = {
      id_user: id_user,
      id_book
    }

    return this.http.get(`${this.url}/books`, {params});
    
  }


  //metodos publicos del servicio
  getAll(id_user: number):Observable<Object>{
    return this.http.get(this.url + "/books/" + id_user);
  }
  //para que salgan books de array //lo llamamos en books.ts xra q salga el array

  // getOne(id_book: number): Book{
  //   return this.books.find(book => book.id_book == id_book)
  // }
  getOne(id_user:number, id_book:number):Observable<Object>{
    return this.http.get(this.url + '/books/' + id_user + id_book);
  }
  //para buscar un book x idbook //lo llamamos en books para buscador x idbook

  add(book: Book):Observable<Object>{
    //this.books.push(book);
    return this.http.post(this.url+"/books", book);
  }
  //para añadir 1 libro //lo llamamos en books.ts para añadir libro al array

  edit(book: any):Observable<Object>{
  //edit(book:Books):Observable<Object>{
    /* let index = this.books.findIndex(libro => libro.id_book == book.id_book);
    if(index != -1){
      this.books[index] = book;
      return true;
    }else{
      return false;
    } */
    return this.http.put(this.url + "/books", book);
  }
  /* edit(book: Book): boolean{
    let index = this.books.findIndex(libro => libro.id_book == book.id_book);
    if(index != -1){
      this.books[index] = book;
      return true;
    }else{
      return false;
    }
  } */
  //para editar libro //lo llamamos en updatebook para editar libro

  delete(id_book: number):Observable<Object>{

    return this.http.request('delete', this.url + "/books", {body:{id_book:id_book}});
    /* let index = this.books.findIndex(book => book.id_book == id_book);
    if(index != -1){
      this.books.splice(index, 1);
      return true
    }else{
      return false;
    }
  } */
  //para eliminar libro //llamamos en books para eliminar libro
  }
}