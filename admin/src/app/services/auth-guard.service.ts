import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate{

  constructor(public userService: UserService, public router: Router) { }

  canActivate(): boolean {
    if (!this.userService.isAuth()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
