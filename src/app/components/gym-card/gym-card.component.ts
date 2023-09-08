import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent {
 @Input() title: string = "";
 @Input() data: string = "";
 @Input() button: string = "";
 @Input() image: string = "";
 @Output() ejercicios = new EventEmitter<string>();
 
 emitirEjercicios() {
  console.log(this.title)
  this.ejercicios.emit(this.title);
 }
}
