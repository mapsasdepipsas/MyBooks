import { Book } from "./book";

export class Respuesta {
    data?: Book;
    constructor(public error:boolean,
                public codigo:number,
                public mensaje:string,
                public res?:Book[],
                public res_book?: Book){}
                
}