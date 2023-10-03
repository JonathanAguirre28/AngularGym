import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  constructor(public sanitizer: DomSanitizer) { }


  @Input() titulo: string = "";
  @Input() video: string = "";

  videos = [
    {
    titulo:'PECTORALES',
    video:'https://www.youtube.com/embed/VB09kLgJDo0',
  },
  {
    titulo:'TRICEPS',
    video:'https://www.youtube.com/embed/sOxeVwRaoYc',
  },
  {
    titulo:'ESPALDA',
    video:'https://www.youtube.com/embed/fyctbKQgClY',
  },
  {
    titulo:'BICEPS',
    video:'https://www.youtube.com/embed/N0ss1-swva',
  },
  {
    titulo:'TRAPECIOS',
    video:'https://www.youtube.com/embed/yvzYxVqMCH4',
  },
  {
    titulo:'HOMBROS',
    video:'https://www.youtube.com/embed/xHU2Jr_Seho',
  },
  {
    titulo:'GEMELOS',
    video:'https://www.youtube.com/embed/KEJOm7blXoE',
  },
  {
    titulo:'ANTEBRAZOS',
    video:'https://www.youtube.com/embed/7ALPO7tjnBk',
  },
  {
    titulo:'CUADRICEPS',
    video:'https://www.youtube.com/embed/bnJ5WXSnW98',
  },
  {
    titulo:'IZQUIOTIBIALES',
    video:'https://www.youtube.com/embed/5X3NqbieXhg',
  },
  {
    titulo:'CARDIO',
    video:'https://www.youtube.com/embed/9FUT6NUo-gE',
  },
  {
    titulo:'ABDOMINALES',
    video:'https://www.youtube.com/embed/J5FZeUV6l0E',
  },
  {
    titulo:'DESCANZO',
    video:'https://www.youtube.com/embed/7g5-tGmmokA',
  },
  {
    titulo:'ESTIRAMIENTO',
    video:'https://www.youtube.com/embed/YQqzapLDFHM',
  },
  {
    titulo:'DIETA',
    video:'https://www.youtube.com/embed/PywLLbyD2SA',
  }
]

}
