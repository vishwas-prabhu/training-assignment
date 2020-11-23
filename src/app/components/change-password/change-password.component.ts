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
  disabledButton: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickUpdatePassword(){
    if(this.reEnterNewPassword !== this.newPassword){
      alert('password does not match');
      this.reEnterNewPassword = '';
    } else {
      this.router.navigate(['/home']);
      this.authService.updatePassword(this.newPassword);
    }
  }
}
