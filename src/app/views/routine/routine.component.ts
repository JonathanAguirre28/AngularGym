import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent {
  exercises: string [] = ['PECTORALES','TRICEPS','ESPALDA','TRAPECIOS','HOMBROS','GEMELOS','ANTEBRAZOS','CUADRICEPS','IZQUIOTIBIALES','CARDIO','ABDOMINALES','DESCANZO','ESTIRAMIENTO','DIETA']

  mobile: boolean = false;

  rutines = [
    {
      titulo: "PECTORALES",
      imagen: "https://img.freepik.com/foto-gratis/hombre-fuerte-entrenando-gimnasio_1303-23478.jpg",
    },
  ]

constructor(private breakpointObserver: BreakpointObserver) {}

ngOnInit() {
this.breakpointObserver.observe(Breakpoints.HandsetPortrait).subscribe(result => {
if (result.matches) {
// hacer algo si el ancho de la pantalla es menor o igual a 599.99px y está en orientación vertical
this.mobile = true;
}
});
}
}
