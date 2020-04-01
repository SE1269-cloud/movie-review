import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PREFIX_API_ENDPOINT } from '../configs/api';
import { ValidationUtils } from '../utils/validation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  async login(user){
    const url = PREFIX_API_ENDPOINT + `/users/login`;
    return this.httpClient.post(url, user).toPromise();
  }
 
  async logout(){
    this.clearTokenToLocal();
    this.router.navigate(['login']);
  }

  saveTokenToLocal(token: string){
    window.localStorage.setItem('movie-review-jwt-token', token);
  }

  getTokenFromLocal(){
    return window.localStorage.getItem('movie-review-jwt-token');
  }

  clearTokenToLocal(){
    window.localStorage.removeItem('movie-review-jwt-token');
  }

  isAuth(){
    const token = this.getTokenFromLocal();
    console.log(token);
    return !ValidationUtils.isEmpty(token);
  }

}

