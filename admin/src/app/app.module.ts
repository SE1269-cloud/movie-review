import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MyLoaderComponent } from './components/my-loader.component';
import { NotfoundComponent } from './components/notfound.component';
import { MyNavbarComponent } from './components/my-navbar.component';
import { MyPaginationComponent } from './components/my-pagination.component';
import { MyFooterComponent } from './components/my-footer.component';

import { MovieService } from './services/movie.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const routes: Routes = [
  { path: '', component: MoviesPageComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginPageComponent },
  { path: 'movies', component: MoviesPageComponent,  canActivate: [AuthGuardService] },
  { path: 'movies/details/:movieId', component: MovieDetailsPageComponent, canActivate: [AuthGuardService] },
  { path: 'movies/insert', component: MovieDetailsPageComponent, canActivate: [AuthGuardService] },
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MovieDetailsPageComponent,
    MainLayoutComponent,
    MyLoaderComponent,
    NotfoundComponent,
    MyNavbarComponent,
    MyPaginationComponent,
    MyFooterComponent,
    LoginPageComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    MovieService,
    UserService,
    // AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
