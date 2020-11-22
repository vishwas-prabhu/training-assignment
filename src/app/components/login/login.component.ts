import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  err: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.err = this.authService.checkLogin(this.username, this.password);
    if(!this.err) {
      this.username = '';
      this.password = '';
    }
  }

}
