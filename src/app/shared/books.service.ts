import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http'; //para la api
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  book: Book | null = null;
  private books: Book[] = [];

  private url = "http://localhost:3000/books"
  constructor(private http: HttpClient) //para que http tenga siempre el valor de HttpClient
  {this.books.push(
    new Book(7409, 0, "La casa de los espíritus", "Realismo mágico", "Isabel Allende", "12", "../../../assets/img/casaespiritus.jpg"),
    new Book(43, 306, "Al Faro", "Novela", "Virginia Woolf", "14", "../../../assets/img/alfaro.jpeg"),
    new Book(3945, 64, "Balada de pájaros cantores y serpientes", "Ficción", "Suzanne Collins", "19", "../../../assets/img/baladapajaros.jpg"),
    new Book(9, 32, "The Bluest Eye", "Bildungsroman", "Toni Morrison", "14", "../../../assets/img/thebluesteye.jpg")
  )}; //añadimos aqui el array de libros para que aparezca en la pagina books. //se guarda en el servicio y dsps se le llama en books

  //metodos publicos del servicio
  getAll(): Observable<Object>{ //HECHO (CREO QUE SI)
    return this.http.get(this.url + "/books")
  }//accedo al verbo get de mi api rest en la url que he determinado antes en este archivo
  
  //para que salgan books de array //lo llamamos en books.ts xra q salga el array

  getOne(id_book: number): Observable<Object>{ //HECHO(??????????)
    return this.http.get(this.url + '?id=' + id_book)  //bien (MIRAR SI LO DE + NOSQ ES ASI O SE BORRA)
    //return this.books.find(book => book.id_book == id_book)
  }
  //para buscar un book x idbook //lo llamamos en books para buscador x idbook

  postLibros(book: Book):Observable<Object>{ //HECHO(CREO QUE SI)
    return this.http.post(this.url + "/book", book);
  } //bien
  //para añadir 1 libro //lo llamamos en books.ts para añadir libro al array

  edit(book: Book): Observable<Object>{ //A MEDIAS
    return this.http.put(this.url + "/book",book)
  }
  //para editar libro //lo llamamos en updatebook para editar libro

  delete(id_book: number): Observable<Object>{ //A MEDIAS
    return this.http.request('delete', this.url + '/book', {body: {id_book:id_book}})
  }
  //para eliminar libro //llamamos en books para eliminar libro
}