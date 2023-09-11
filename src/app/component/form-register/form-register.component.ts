import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, EmailValidator } from '@angular/forms';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public registerForm: FormGroup;
  public user: User; //usamos el servicio User (proyectoMySql)
  public exitoregistro: string | null = null;
  public errorregistro: string | null = null;

  constructor(public userService: UserService) {

    let mincontra = 8;
    let validurl = "https?://.+";
    let contramayus = ".*[A-Z].*"

    this.registerForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      url: new FormControl('', [Validators.required, Validators.pattern(validurl)]),
      contra: new FormControl('', [Validators.required, Validators.minLength(mincontra), Validators.pattern(contramayus)]),
      repcontra: new FormControl('', [Validators.required, this.coincidecontra.bind(this)])
    });


    this.registerForm.get('repcontra')?.valueChanges.subscribe(() => {
      /* this.registerForm.get('repcontra')?.updateValueAndValidity();  */// validacion conforme vas escribiedno
    /* this.coincidecontra(); */
    });
    
  }
/* local-storage */
/*   coincidecontra(control: AbstractControl): { [key: string]: boolean } | null { */
  coincidecontra(control: AbstractControl): { [key: string]: boolean } | null {
    let password = control?.value;
    let contraconfirm = this.registerForm?.controls['contra']?.value;
  
    if (password !== contraconfirm) {
      return { 'nocoincide': true };
    }
    return null;
  }
  

  //funcionalidad para registrarse (PROYECTO MYSQL)

  public register(){
    let {nombre,apellidos,email, url, contra} = this.registerForm.value
    console.log(nombre,apellidos,email, url, contra)

    let user = new User(0,nombre,apellidos,email, url, contra)//para crear un nuevo objeto de la Clase User y mandarlo al registerUser


    this.userService.register(user).subscribe((res: any)=>{
      console.log(res)
      if (res.error == false) {
       console.log(res)
      }
    })
  }
}
//     let name= this.registerForm.get('name').value;
//     let last_name = this.registerForm.get('last_name').value;
//     let email= this.registerForm.get('email').value;
//     let photo= this.registerForm.get('photo').value;
//     let password= this.registerForm.get('contra').value;
//     let repcontra= this.registerForm.get('repcontra').value;
//     //con los datos de arriba creamos un usuario

//     this.user = new User(name,last_name,email,photo,password, repcontra);

//     if(password === repcontra){
//       //Se registra al usuario con UserService
//       this.userService.register(this.user).subscribe((data:Respuesta)=>{
//         console.log(data);
//         this.exitoregistro = '¡Bienvenido :)!';
//         this.errorregistro = null;
//         this.registerForm.reset();
//       })
//   }else{
//     this.exitoregistro = null;
//     this.errorregistro = 'Las contraseñas no coinciden o los campos no están completados.'
//   }
// }
// }
