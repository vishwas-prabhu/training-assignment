import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  error: boolean = false;
  disabledButton: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  validate() {
    if (this.username === '' || this.password.length < 5) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }

  onClicklogin() {
    this.error = this.authService.checkUserCredentials(this.username, this.password);
    if (!this.error) {
      this.password = '';
    }
  }

}
