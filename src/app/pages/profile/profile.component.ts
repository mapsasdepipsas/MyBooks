import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  public miUsuario: User;

  constructor(private userService: UserService){
    //this.miUsuario = new User(674390, "Lucia", "Perez Martinez", "luciapm@gmail.com", "../../../assets/img/chica.avif", "holabuenas")
  }


  // ngOnInit(): void {
  //   // En el método ngOnInit, puedes cargar los datos del usuario desde el servicio.
  //   // Por ejemplo, puedes hacerlo en una función que llames aquí.
  //   this.cargarDatosUsuario();
  // }

  // cargarDatosUsuario() {
  //   // Llama al servicio para obtener los datos del usuario.
  //   // Esto asume que tienes un método en el servicio para obtener los datos del usuario.
  //   this.userService.login().subscribe((usuario: User) => {
  //     this.miUsuario = usuario;
  //   });
  // }
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