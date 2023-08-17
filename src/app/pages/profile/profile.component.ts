import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  public miUsuario: User;

  constructor(){
    this.miUsuario = new User(674390, "Lucia", "Perez Martinez", "luciapm@gmail.com", "../../../assets/img/chica.avif", "holabuenas")
  }

  cambiardatos(
    inputId: HTMLInputElement,
    inputName:HTMLInputElement,
    inputLastName: HTMLInputElement,
    inputEmail: HTMLInputElement,
    inputPhoto: HTMLInputElement,
    inputPassword: HTMLInputElement)
    {
      this.miUsuario.Id_user = +inputId.value;
      this.miUsuario.name = inputName.value;
      this.miUsuario.last_name = inputLastName.value;
      this.miUsuario.email = inputEmail.value;
      this.miUsuario.photo = inputPhoto.value;
      this.miUsuario.password = inputPassword.value;
  }
}