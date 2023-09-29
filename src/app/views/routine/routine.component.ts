import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent {
  
  @Input() titulo: string = "";
  @Input() imagen: string = "";
  @Input() ejercicios: string = '';
  @Input() series: string = "";
  @Input() repeticiones: string = "";

  exercises: string [] = ['PECTORALES','TRICEPS','ESPALDA','BICEPS','TRAPECIOS','HOMBROS','GEMELOS','ANTEBRAZOS','CUADRICEPS','IZQUIOTIBIALES','CARDIO','ABDOMINALES','DESCANZO','ESTIRAMIENTO','DIETA']

  mobile: boolean = false;  
  
  rutines = [
    {
      titulo: "PECTORALES",
      imagen: "https://i.ytimg.com/vi/cCUWW80DVMA/maxresdefault.jpg",
      ejercicios: [
        {
          name: "PRESS CON BARRA EN BANCO PLANO",
        },
        {
          name: "PRESS CON BARRA EN BANCO DECLINADO",
        },
        {
          name: "PRESS CON BARRA EN BANCO INCLINADO",

        },
        {
          name: "PRESS CON MAQUINA"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "TRICEPS",
      imagen: "https://album.mediaset.es/eimg/10000/2020/10/29/clipping_auJ8bQ_2243.jpg?w=1200",
      ejercicios: [
        {
          name: "EXTENSIÓN DE TRÍCEPS EN POLEA",
        },
        {
          name: "EXTENSIÓN VERTICAL CON MANCUERNA",
        },
        {
          name: "PRESS CERRADO CON BARRA",

        },
        {
          name: "FONDOS DE TRICEPS"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "ESPALDA",
      imagen: "https://www.cambiatufisico.com/wp-content/uploads/rutinas-espalda6-696x392.jpg",
      ejercicios: [
        {
          name: "REMO EN POLEA BAJA",
        },
        {
          name: "DOMINADAS",
        },
        {
          name: "REMO CON MANCUERNA",

        },
        {
          name: "JALON AL PECHO"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "BICEPS",
      imagen: "https://i.blogs.es/4e636e/istock-1277242852/1366_2000.jpeg",
      ejercicios: [
        {
          name: "CURL CON BARRA",
        },
        {
          name: "CURL CON MANCUERNAS",
        },
        {
          name: "MARTILLO",

        },
        {
          name: "CURL CON BARRA W EN BANCO SCOTT"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "TRAPECIOS",
      imagen: "https://www.blog.mymusclefactory.com/wp-content/uploads/2016/05/arnold-hombrobra.jpg",
      ejercicios: [
        {
          name: "REMO AL CUELLO CON BARRA EN POLEA BAJA",
        },
        {
          name: "ENCOGIMIENTOS CON MANCUENAS",
        },
        {
          name: "REMO ALTO EN POLEA CON SOGA",

        },
        {
          name: "ENCOGIMIENTOS CON BARRA"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "HOMBROS",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/sometimes-you-gotta-have-your-own-back-royalty-free-image-1574847443.jpg?crop=0.670xw:1.00xh;0.240xw,0&resize=1200:*",
      ejercicios: [
        {
          name: "PRESS MILITAR CON MANCUERNA SENTADO",
        },
        {
          name: "ELEVACIONES LATERALES",
        },
        {
          name: "ELEVACIONES FRONTALES",

        },
        {
          name: "ARNOL PRESS"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "GEMELOS",
      imagen: "https://as01.epimg.net/deporteyvida/imagenes/2020/12/09/portada/1607504260_451286_1607504315_noticia_normal_recorte1.jpg",
      ejercicios: [
        {
          name: "ELEVACION DE PUNTERAS",
        },
        {
          name: "ELEVACION AL TALON A UNA PIERNA",
        },
        {
          name: "STEPS ALTERNOS CONO SALTO",

        },
        {
          name: "PRENSA"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "ANTEBRAZOS",
      imagen: "https://www.calistenia.net/wp-content/uploads/2018/02/forearm-workouts.jpg",
      ejercicios: [
        {
          name: "CURL DE MUÑECA INVERSO",
        },
        {
          name: "CURL DE MUÑECA",
        },
        {
          name: "PASEO DEL GRANJERO",

        },
        {
          name: "RODILLO DE MUÑECA"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "CUADRICEPS",
      imagen: "https://blogscdn.thehut.net/app/uploads/sites/450/2021/08/shutterstock_1410466751opt_hero_1627301884_1628077319.jpg",
      ejercicios: [
        {
          name: "EXTENSION DE CUADRICEPS",
        },
        {
          name: "ESTOCADAS CON MANCUERNAS",
        },
        {
          name: "STEP-UP",

        },
        {
          name: "PRENSA"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "IZQUIOTIBIALES",
      imagen: "https://blogscdn.thehut.net/app/uploads/sites/450/2021/08/shutterstock_1410466751opt_hero_1627301884_1628077319.jpg",
      ejercicios: [
        {
          name: "PESO MUERTO",
        },
        {
          name: "SENTADILLA CON PISTOLA",
        },
        {
          name: "SENTADILLA DIVIDIDA",

        },
        {
          name: "FEMORALES EN CAMILLA"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "CARDIO",
      imagen: "https://eresdeportista.com/wp-content/uploads/2019/02/maquinas-de-cardio-en-el-gimnasio-cinta-de-correr.jpg",
      ejercicios: [
        {
          name: "BICICLETA",
        },
        {
          name: "BURPEES",
        },
        {
          name: "SNTAR LA SOGA",

        },
        {
          name: "JUMPING JACKS"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "ABDOMINALES",
      imagen: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/01/31/16436341263545.jpg",
      ejercicios: [
        {
          name: "ELEVACION DE PIERNAS",
        },
        {
          name: "CRUNCH ABDOMINAL CON PIERNAS ELEVADAS",
        },
        {
          name: "SNTRUEDA ABDOMINAL",

        },
        {
          name: "ABDOMINALES TRADICIONALES"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "DESCANZO",
      imagen: "https://www.fundacioorienta.com/wp-content/uploads/2014/01/F.Orienta_aprendre_dormir_sol-1.jpg",
      ejercicios: [
        {
          name: "DESCANSAR 1 MINUTO ENTRE CADA EJERCICIO",
        },
        {
          name: "DORMIR 8 HORAS DIARIAS",
        },
        {
          name: "NO HACER 2 DIAS EL MISMO MUSCULO",

        },
        {
          name: "1 O 2 DIAS A LA SEMANA DESCANSO ACTIVO (CARDIO)"
        },
      ],
      series:'4',
      repeticiones:'12',
    },
    {
      titulo: "ESTIRAMIENTO",
      imagen: "https://previews.123rf.com/images/imagerymajestic/imagerymajestic0903/imagerymajestic090300015/4421444-tipo-de-estiramiento-muscular-las-piernas-y-manos-en-una-acci%C3%B3n-aislada-de-fondo.jpg",
      ejercicios: [
        {
          name: "ESTIRAR EL GRUPO DE MUSCULOS QUE SE UTILIZO DESPUES DE CADA ENTRENARMIENTO",
        },
        {
          name: "ESTIRAR EL GRUPO DE MUSCULOS QUE SE UTILIZO ANTES DE CADA ENTRENAMIENTO",
        },
        {
          name: "SI TENES ALGUNA LESION NO ESTIRAR DESPUES DE ENTRENAR",

        },
      ],
      series:'1 MIN',
      repeticiones:'3',
    },
    {
      titulo: "DIETA",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/dieta-fodmap-pros-contras-elle-1660415938.jpg",
      ejercicios: [
        {
          name: "PROTEINAS(CARNE, POLLO, PESCADO, CERDO, LACTEOS)",
        },
        {
          name: "CARBOHIDRATOS(FRTUAS, ARROZ, LEGUMBRES, LENTEJAS)",
        },
        {
          name: "VERDURAS",
          
        },
      ],
      series:'4',
      repeticiones:'COMIDAS DIARIAS',
    }
  ]
  
  originalRutines = [...this.rutines];

constructor(private breakpointObserver: BreakpointObserver) {}

ngOnInit() {
this.breakpointObserver.observe(Breakpoints.HandsetPortrait).subscribe(result => {
if (result.matches) {
// hacer algo si el ancho de la pantalla es menor o igual a 599.99px y está en orientación vertical
this.mobile = true;
}
});
}

FiltrarRutina(titulo: string) {
  this.rutines = this.originalRutines.filter((rutine) => {
    return rutine.titulo === titulo;
  });
}
}


