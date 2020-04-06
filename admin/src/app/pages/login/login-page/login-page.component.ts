import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async login(e){
    e.preventDefault();
    console.log(this.user);
    try {
      const res = await this.userService.login(this.user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

}
