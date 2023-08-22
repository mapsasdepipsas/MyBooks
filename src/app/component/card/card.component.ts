import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //con los decoradores input la info del padre (books) le llega al hijo (card). book e even estan en el padre. (M3.4)
  //con el decorador output, el componente hijo (card) puede emitir eventos hacia su padre (books) (M3.4)
  @Input() book: any;
  @Input() even: boolean;
  @Output() cardborrada: EventEmitter <void> = new EventEmitter<void>();

  borrarcard(){
    this.cardborrada.emit();
  }
//borrar card es el metodo para que a traves de un evento se notifique que se debe borrar x tarjeta borrada con borrarcard de books.ts(M3.4)
}