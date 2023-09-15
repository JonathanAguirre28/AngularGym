import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularGymPuma';
  ejercicios: string = '';

  rutinas = [
    {
      titulo: "TRICEPS",
      imagen: "https://img.freepik.com/foto-gratis/hombre-fuerte-entrenando-gimnasio_1303-23478.jpg",
      boton: "Ir A LA RUTINA",
      texto: "La importancia de hacer triceps",
    },
    {
    titulo: "PECTORALES",
    imagen: "https://bodytech.com.co/uploads/post/03d28af749454db285945cd083f60507/234-las-manos-en-el-gym.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer pectorales",
  },
  {
    titulo: "HOMBROS",
    imagen: "https://img.freepik.com/fotos-premium/primer-plano-masculino-gimnasio-eligiendo-pesas_23-2148353069.jpg?w=2000",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer hombros",
  }, 
  {
    titulo: "TRAPECIOS",
    imagen: "https://media.istockphoto.com/id/860056580/es/foto/barra-y-cinta-de-correr-fondo-de-gimnasio-fitness.jpg?s=170667a&w=0&k=20&c=JnUtw333LiKnmJuzHbkloslu4Yjx6lSXTJ2Yfo7i0qI=",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer trapecios",
  },
  {
    titulo: "BICEPS",
    imagen: "https://sportlife.com.br/wp-content/uploads/2021/10/shutterstock_644330383-1.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer biceps",
  },
  {
    titulo: "CUADRICEPS",
    imagen: "https://www.tribunapr.com.br/wp-content/uploads/sites/54/2021/09/29000027/erros-academia-musculacao-2-970x550.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer cuadriceps",
  },
  {
    titulo: "ISQUIOTIBIALES",
    imagen: "https://img.freepik.com/fotos-premium/culturista-trabajando-pesas-mancuernas-gimnasio_532405-2576.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer isquiotibiales",
  },
  {
    titulo: "ESPALDA",
    imagen: "https://img.freepik.com/foto-gratis/vista-angulo-hombre-musculoso-irreconocible-preparandose-levantar-barra-club-salud_637285-2497.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer espalda",
  },
  {
    titulo: "GEMELOS",
    imagen: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer gemelos",
  },
  {
    titulo: "CARDIO",
    imagen: "https://eresdeportista.com/wp-content/uploads/2019/02/maquinas-de-cardio-en-el-gimnasio-cinta-de-correr.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer cardio",
  },
  {
    titulo: "ABDOMINALES",
    imagen: "https://img.freepik.com/foto-gratis/ajuste-hombre-sosteniendo-pesas-vista-lateral_23-2149517265.jpg?w=2000",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer abdominales",
  },
  {
    titulo: "DESCANSO",
    imagen: "https://www.fundacioorienta.com/wp-content/uploads/2014/01/F.Orienta_aprendre_dormir_sol-1.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de descansar",
  }
];

  cualEsElEjercicio(event:string) {
    alert(event);
  }
}
