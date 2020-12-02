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
  error: boolean;
  disabledButton: boolean;

  constructor(private authService: AuthService) {
    this.error = false;
    this.disabledButton = true;
  }

  ngOnInit(): void {
  }

  validate(): void {
    if (this.username === '' || this.password.length < 5) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }

  onClicklogin(): void {
    this.error = this.authService.checkUserCredentials(this.username, this.password);
    if (!this.error) {
      this.password = '';
    }
  }

}
