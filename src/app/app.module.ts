import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GymCardComponent } from './components/gym-card/gym-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExercisesComponent } from './views/exercises/exercises.component';
import { RoutineComponent } from './views/routine/routine.component';
import { VideosComponent } from './views/videos/videos.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GymCardComponent,
    FooterComponent,
    ExercisesComponent,
    RoutineComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
