import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies = [];
  filters = { keyword: '' };
  pagination = { page: 1, itemsPerPage: 18, totalPages: 0 };
  totalMovies = 0;
  isLoading: boolean = false;
  timeout = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  async getMovies(){
    this.isLoading = true;
     try {
        const { keyword } = this.filters;
        const { page, itemsPerPage } = this.pagination;
        const res: any = await this.movieService.getMovies({ keyword, page, itemsPerPage });
        this.movies = res.content;
        this.totalMovies = res.totalElements;
        this.pagination = { ...this.pagination, totalPages: res.totalPages }
     } catch (error) {
       console.log(error);
     }
     this.isLoading = false;
  }

  changePage(page){
    this.pagination = { ...this.pagination, page: page };
    this.getMovies();
  }

  changeKeyword(e){
    this.filters = { ...this.filters, keyword: e.target.value };
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.pagination = { ...this.pagination, page: 1 };
      this.getMovies();
    }, 300);
  }

}
