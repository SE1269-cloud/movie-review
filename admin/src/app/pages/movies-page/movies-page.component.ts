import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies = [];
  filters = { keyword: '', page: 1, itemsPerPage: 12 };
  totalMovies = 0;
  totalPages = 0;
  canLoadMoreMovies: boolean = false;
  isLoading: boolean = false;
  pages = [];
  timeout = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  async getMovies(){
    this.isLoading = true;
     try {
      const res: any = await this.movieService.getMovies(this.filters);
      this.movies = res.content;
      this.totalMovies = res.totalElements;
      this.totalPages = res.totalPages;
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      if(res.last) this.canLoadMoreMovies = false;

      console.log(res);
     } catch (error) {
       console.log(error);
     }
     this.isLoading = false;
  }

  changePage(page){
    this.filters = { ...this.filters, page: page };
    this.getMovies();
  }

  changeKeyword(e){
    this.filters = { ...this.filters, keyword: e.target.value, page: 1 };
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getMovies();
    }, 300);
  }

}
