export class Book {
    public id_book: number
    public id_user: number
    public title: string
    public type: string
    public author: string
    public price: string
    public photo: string

    constructor(id_book: number = 0, id_user: number = 0, title: string, type: string, author: string, price: string, photo: string){
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}