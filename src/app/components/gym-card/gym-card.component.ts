import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent {
 @Input() image: string = "";
 @Input() button: string = "";
 @Input() title: string = "";
 @Input() text: string = "";
 @Output() ejercicios = new EventEmitter<string>();
 
 emitirEjercicios() {
  this.ejercicios.emit(this.button);
 }
}
