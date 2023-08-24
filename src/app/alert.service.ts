//creamos alerta para que salgan alerts cada vez que hacemos x cosa
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerta1(mensaje: string): void{
    alert(mensaje)
  }

  constructor() { }
}
