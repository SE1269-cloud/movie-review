import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { MovieService } from './services/movie.service';

const routes: Routes = [
  { path: '', component: MoviesPageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'movies/details/:movieId', component: MovieDetailsPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MovieDetailsPageComponent,
    MainLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
