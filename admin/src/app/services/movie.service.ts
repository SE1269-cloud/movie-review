import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PREFIX_API_ENDPOINT } from '../configs/api';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpClient: HttpClient) { }

  async getMovies({ keyword, page, itemsPerPage }){
    const url = PREFIX_API_ENDPOINT + `/movies/search?keyword=${keyword}&page=${page}&itemsPerPage=${itemsPerPage}`;
    return this.httpClient.get(url).toPromise();
  }

  async getMovieById(id){
    const url = PREFIX_API_ENDPOINT + `/movies/${id}`;
    return this.httpClient.get(url).toPromise();
  }

  async update(movie){
    const url = PREFIX_API_ENDPOINT + '/movies';
    return this.httpClient.put(url, movie).toPromise();
  }

  async delete(movieId){
    const url = PREFIX_API_ENDPOINT + '/movies/' + movieId;
    return this.httpClient.delete(url).toPromise();
  }

  async insert(movie){
    const url = PREFIX_API_ENDPOINT + '/movies';
    return this.httpClient.post(url, movie).toPromise();
  }
}
