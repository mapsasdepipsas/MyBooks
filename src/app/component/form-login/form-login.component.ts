
// import { Component } from '@angular/core';
// import { UserService } from 'src/app/shared/user.service';
// import { FormGroup } from '@angular/forms';
// import { User } from 'src/app/models/user';
// import { Router } from '@angular/router';
// import { LocalStorageService } from 'src/app/shared/local-storage.service';

// @Component({
//   selector: 'app-form-login',
//   templateUrl: './form-login.component.html',
//   styleUrls: ['./form-login.component.css']
// })
// export class FormLoginComponent {
//   //modelo
//   correo: string;
//   password: string;
//   public form_login: FormGroup;
//   public user: User;
//   public exitologin: string | null = null;
//   public errorlogin: string | null = null;

// constructor(public userService: UserService, private router: Router, private localStorageService: LocalStorageService){}

// //para que funcionen validaciones
//   // submitForm() {
//   //   if (this.correo && this.password) {

//   //     const user = {
//   //       email: this.correo,
//   //       password: this.password
//   //     }

//   //     this.userService.login(user).subscribe((resp:any) => {
//   //       if(resp?.message === "Usuario encontrado"){
//   //         this.localStorageService.setItem('user', JSON.stringify(user));
//   //         this.router.navigate(['/books']);
//   //       } else {
//   //         alert('Usuario no encontrado. Verifica tu correo y contraseña.');
//   //       }
          
//   //     });
//   //   }

//   // }


//   submitForm() {
//     if (this.correo && this.password) {

//       const user = {
//         email: this.correo,
//         password: this.password
//       }

//       this.userService.login(user).subscribe((resp:any) => {
//         if(resp?.message === "Usuario encontrado"){
//           this.localStorageService.setItem('user', JSON.stringify(user));
//           this.router.navigate(['/books']);
//         } else {
//           /* TODO: meter mensale de error (un alert) */
//         }
          
//       });
//     }

//   } 

// //funcionalidad login (proyecto SQL)

//   onSubmit(){
//     let email = this.form_login.get('email').value;
//     let password = this.form_login.get('password').value;
//     //Crearmos un nuevo usuario para enviar en el body de la petición.
//     //Todos sus campos seran nulos (no tendrán valor) excepto email y password.
//     //Compararemos estos datos con la base de datos y obtendremos los datos del usuario registrado.

//     this.user = new User(null, null, null, email, null, password)


//       //Servicio de login, comprueba si el usuario esta registrado y si es asi lo loguea.
//     this.userService.login(this.user). subscribe((data: Response) =>{
//       if (email == email){
//         console.log(data);
//         this.exitologin = '¡Bienvenido :)!';
//         this.errorlogin = null;
//         this.form_login.reset();
      
//       }else{
//         this.exitologin = null;
//         this.errorlogin = 'El usuario no existe.'
//       }
//     })
//   }
// }





import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  //modelo
  correo: string;
  password: string;
  public form_login: FormGroup;
  public user: User;
  public exitologin: string | null = null;
  public errorlogin: string | null = null;

constructor(public userService: UserService, private router: Router, private localStorageService: LocalStorageService){}

//para que funcionen validaciones
  submitForm() {
    if (this.correo && this.password) {

      const user = {
        email: this.correo,
        password: this.password
      }

      this.userService.login(user).subscribe((resp:any) => {
        if(resp?.message === "Usuario encontrado"){
          this.localStorageService.setItem('user', JSON.stringify(resp?.result[0]));
          this.userService.logueado = true;
          this.router.navigate(['/books']);
        } else {
          /* TODO: meter mensale de error (un alert) */
        }
          
      });
    }

  }}


//para que funcionen validaciones
  // submitForm() {
  //   if (this.correo && this.password) {

  //     const user = {
  //       email: this.correo,
  //       password: this.password
  //     }

  //     this.userService.login(user).subscribe((resp:any) => {
  //       if(resp?.message === "Usuario encontrado"){
  //         this.localStorageService.setItem('user', JSON.stringify(user));
  //         this.router.navigate(['/books']);
  //       } else {
  //         /* TODO: meter mensale de error (un alert) */
  //       }
          
  //     });
  //   }

  // }

//funcionalidad login (proyecto SQL)

  // onSubmit(){
  //   let email = this.form_login.get('email').value;
  //   let password = this.form_login.get('password').value;
  //   //Crearmos un nuevo usuario para enviar en el body de la petición.
  //   //Todos sus campos seran nulos (no tendrán valor) excepto email y password.
  //   //Compararemos estos datos con la base de datos y obtendremos los datos del usuario registrado.

  //   this.user = new User(null, null, null, email, null, password)


  //     //Servicio de login, comprueba si el usuario esta registrado y si es asi lo loguea.
  //   this.userService.login(this.user). subscribe((data: Response) =>{
  //     if (email == email){
  //       console.log(data);
  //       this.exitologin = '¡Bienvenido :)!';
  //       this.errorlogin = null;
  //       this.form_login.reset();
      
  //     }else{
  //       this.exitologin = null;
  //       this.errorlogin = 'El usuario no existe.'
  //     }
  //   })
  // }
