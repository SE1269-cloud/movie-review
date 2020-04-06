import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { ValidationUtils } from '../../utils/validation';
import { AlertUtils } from '../../utils/alert';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})

export class MovieDetailsPageComponent implements OnInit {
  // @ViewChild('myswal', { read: false, static: true }) myswal: SwalComponent;

  movie: any = {};
  isLoading: boolean = false;
  notfound: boolean = false;
  isInsertMovie: boolean = true;
  pageTitle: string = 'Insert Movies'

  constructor(private movieService: MovieService, private router: ActivatedRoute, private myRouter: Router) { }

  ngOnInit() {
   
    if(this.router.snapshot.routeConfig.path.indexOf('movies/insert') == -1){
        const movieId = this.router.snapshot.params.movieId;
        this.isInsertMovie = false;
        this.pageTitle = 'Update Movie'
        this.getMovieDetails(movieId);
    }
  }

  async getMovieDetails(movieId){
    this.isLoading = true;
    try {
      const res: any = await this.movieService.getMovieById(movieId);
      if(ValidationUtils.isEmpty(res)) this.notfound = true;
      else {
        const startDate = res.startDate.substring(0, res.startDate.indexOf('T'));
        this.movie = { ...res, startDate };
      }
    } catch (error) {
      console.log(error);
      this.notfound = true;
    }
    this.isLoading = false;
  }

  async handleDelete(){
    const result = await AlertUtils.showConfirm({
      title: 'Are you sure?',
      text: this.movie.title + ' will be deleted forever!'
    });
    if(result.value){
      try {
        const res = await this.movieService.delete(this.movie.id);
        console.log(res);
        if(ValidationUtils.isEmpty(res)){
          AlertUtils.showAlert({ 
            icon: 'error', 
            title: 'Error', 
            text: 'Movie not found', 
            timer: 2000 
          })
        } else {
          AlertUtils.showAlert({ 
            icon: 'success', 
            title: 'Success', 
            text: 'You have deleted '+ this.movie.title +'!', 
            timer: 2000 
          })
        }
       
        window.setTimeout(() => this.myRouter.navigate(['movies']), 1000);
      } catch (error) {
        console.log(error);
        AlertUtils.showAlert({ 
          icon: 'error', 
          title: 'Oops...', 
          text: 'Can not delete this movie for some reasons!', 
          timer: 4000 
        })
      }
    }
  }

  async save(e){
    e.preventDefault();
    this.isLoading = true;
    try {
      if(this.isInsertMovie){
        const res = await this.movieService.insert(this.movie);
        
      } else {
        const res = await this.movieService.update(this.movie);
      }
      AlertUtils.showAlert({ 
        icon: 'success', 
        title: 'Success', 
        text: 'You have saved this movie!', 
        timer: 4000 
      })
    } catch (error) {
      console.log(error);
      AlertUtils.showAlert({ 
        icon: 'error', 
        title: 'Oops...', 
        text: 'Can not save this movie for some reasons!', 
        timer: 4000 
      })
    }

    this.isLoading = false;
  }

}
