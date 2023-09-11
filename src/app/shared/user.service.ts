import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url: string = "http://localhost:3000";
public logueado: boolean = false
public user: User;


constructor(private http: HttpClient) {
  //this.url = 'http://localhost:3000';
  //this.logueado = false;
}

//register
register(user:User):Observable<Object>{
return this.http.post(this.url + "/register",user);
}

//login
login(user:any):Observable<Object>{
return this.http.post(this.url + "/login",user);
}

}
