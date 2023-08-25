import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  registerForm: FormGroup;

  constructor() {

    let mincontra = 8;
    let validurl = "https?://.+";
    let contramayus = ".*[A-Z].*"

    this.registerForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      url: new FormControl('', [Validators.required, Validators.pattern(validurl)]),
      contra: new FormControl('', [Validators.required, Validators.minLength(mincontra), Validators.pattern(contramayus)]),
      repcontra: new FormControl('', [Validators.required])
    });


    this.registerForm.get('repcontra')?.valueChanges.subscribe(() => {
      this.registerForm.get('repcontra')?.updateValueAndValidity(); // Actualizar la validación en tiempo real
    });
    
  }

  coincidecontra(control: AbstractControl): { [key: string]: boolean } | null {
    let password = control.get('contra')?.value;
    let contraconfirm = control.get('repcontra')?.value; 
  
    if (password !== contraconfirm) {
      return { 'nocoincide': true };
    }
    return null;
  }
  
}

