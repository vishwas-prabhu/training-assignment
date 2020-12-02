import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  reEnterNewPassword: string;
  newPassword: string;
  disabledButton: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.reEnterNewPassword = '';
    this.newPassword = '';
    this.disabledButton = true;
  }

  validate(): void {
    if (this.reEnterNewPassword !== this.newPassword || this.newPassword.length < 5) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }

  onClickUpdatePassword(): void {
    this.router.navigate(['/home']);
    this.authService.updatePassword(this.newPassword);
  }
}
