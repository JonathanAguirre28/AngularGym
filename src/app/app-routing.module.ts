import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './views/exercises/exercises.component';
import { RoutineComponent } from './views/routine/routine.component';
import { VideosComponent } from './views/videos/videos.component';
import { UsersComponent } from './views/users/users.component';

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
    path: 'users',
    component: UsersComponent
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
