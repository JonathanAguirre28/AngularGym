import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './views/exercises/exercises.component';
import { RoutineComponent } from './views/routine/routine.component';
import { VideosComponent } from './views/videos/videos.component';

const routes: Routes = [
  {
    path: 'exercises',
    component: ExercisesComponent
  },
  {
    path: 'routine',
    component: RoutineComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path:'**',
    component:ExercisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
