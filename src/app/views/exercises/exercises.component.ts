import { Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  ejercicios: string = '';
  
  rutinas = [
    {
      titulo: "TRICEPS",
      imagen: "https://album.mediaset.es/eimg/10000/2020/10/29/clipping_auJ8bQ_2243.jpg?w=1200",
      boton: "Ir A LA RUTINA",
      texto: "Es el principal extensor del antebrazo en la articulación del codo, por lo que también puede extender y aducir el húmero.",
    },
    {
    titulo: "PECTORALES",
    imagen: "https://i.ytimg.com/vi/cCUWW80DVMA/maxresdefault.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Mantener tus pectorales te permitirá ganar equilibrio y postura.",
  },
  {
    titulo: "HOMBROS",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/sometimes-you-gotta-have-your-own-back-royalty-free-image-1574847443.jpg?crop=0.670xw:1.00xh;0.240xw,0&resize=1200:*",
    boton: "Ir A LA RUTINA",
    texto: "Unos hombros fuertes hacen que tus brazos sean capaces de coger y soportar más peso, aguantar cargas durante más tiempo y además mejorarán tu apariencia física.",
  }, 
  {
    titulo: "TRAPECIOS",
    imagen: "https://www.blog.mymusclefactory.com/wp-content/uploads/2016/05/arnold-hombrobra.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Importancia de trabajar los trapecios, con el fortalecimiento de esta zona mejoramos nuestra postura.",
  },
  {
    titulo: "BICEPS",
    imagen: "https://i.blogs.es/4e636e/istock-1277242852/1366_2000.jpeg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer biceps, puede evitar lesiones, al sufrir una caída o un accidente de brazo, cuanto más fuertes tengas esa parte del cuerpo mejor será para amortiguar el accidente.",
  },
  {
    titulo: "CUADRICEPS",
    imagen: "https://blogscdn.thehut.net/app/uploads/sites/450/2021/08/shutterstock_1410466751opt_hero_1627301884_1628077319.jpg",
    boton: "Ir A LA RUTINA",
    texto: "La importancia de hacer cuadriceps, este es imprescindible en todo tipo de actividades cotidianas como caminar, subir y bajar escaleras o transportar peso, y en el deporte.",
  },
  {
    titulo: "ISQUIOTIBIALES",
    imagen: "https://i.vimeocdn.com/video/753277480-156862e89604ea3eee0bff83bb9980aeca25176ea17631e830aed1d3ecd85544-d_640?f=webp",
    boton: "Ir A LA RUTINA",
    texto: "Trabajar los isquiotibiales permite evitar lesiones en espalda baja, rodillas, glúteos y pantorrillas.",
  },
  {
    titulo: "ESPALDA",
    imagen: "https://www.cambiatufisico.com/wp-content/uploads/rutinas-espalda6-696x392.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Los ejercicios para la espalda ayudan a reducir el estrés, hacer ejercicio puede reducir el estrés y la tensión muscular. El estrés es una de las causas que contribuyen al dolor de espalda. ",
  },
  {
    titulo: "GEMELOS",
    imagen: "https://as01.epimg.net/deporteyvida/imagenes/2020/12/09/portada/1607504260_451286_1607504315_noticia_normal_recorte1.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Unos gemelos fuertes ayudan en la sujeción y estabilización de la rodilla y del tobillo reduciendo el riesgo de sufrir lesiones.",
  },
  {
    titulo: "ANTEBRAZOS",
    imagen: "https://www.calistenia.net/wp-content/uploads/2018/02/forearm-workouts.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Unos antebrazos musculados y bien desarrollados, aparte de que te ofrecen buena imagen, te ayudan en un mayor rendimiento deportivo a la hora de entrenar.",
  },
  {
    titulo: "CARDIO",
    imagen: "https://eresdeportista.com/wp-content/uploads/2019/02/maquinas-de-cardio-en-el-gimnasio-cinta-de-correr.jpg",
    boton: "Ir A LA RUTINA",
    texto: "El cardio ayuda a quemar muchas calorías, acelera nuestro metabolismo y mejora nuestro Índice de Masa Corporal (IMC).",
  },
  {
    titulo: "ABDOMINALES",
    imagen: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/01/31/16436341263545.jpg",
    boton: "Ir A LA RUTINA",
    texto: "El fortalecimiento de la musculatura abdominal mantiene los niveles requeridos de fuerza y resistencia, y ayudar a mantener el equilibrio y estabilización de la columna.",
  },
  {
    titulo: "DESCANSO",
    imagen: "https://www.fundacioorienta.com/wp-content/uploads/2014/01/F.Orienta_aprendre_dormir_sol-1.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Cuando descansamos, nuestro cuerpo se recupera y reinicia: la memoria mejora, la concentración y capacidad mental mejora y se recupera la energía.",
  },
  {
    titulo: "ESTIRAMIENTO",
    imagen: "https://previews.123rf.com/images/imagerymajestic/imagerymajestic0903/imagerymajestic090300015/4421444-tipo-de-estiramiento-muscular-las-piernas-y-manos-en-una-acci%C3%B3n-aislada-de-fondo.jpg",
    boton: "Ir A LA RUTINA",
    texto: "Estirar ayuda a estimular la circulación saludable en las articulaciones y los músculos. Así pues, se puede evitar que éstas pierdan el flujo sanguíneo y la retención de líquidos.",
  },
  {
    titulo: "DIETA",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/dieta-fodmap-pros-contras-elle-1660415938.jpg",
    boton: "Ir A LA DIETA",
    texto: "Una alimentación saludable ayuda a mantener una buena salud y a prevenir enfermedades no transmisibles como la diabetes, las cardiopatías, los accidentes cerebrovasculares y el cáncer.",
  }
];

  cualEsElEjercicio(event:string) {
    alert(event);
  }
}



