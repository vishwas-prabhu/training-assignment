import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  reEnterNewPassword: string;
  newPassword: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  updatePassword(){
    if(this.reEnterNewPassword !== this.newPassword){
      alert('password does not match');
      this.reEnterNewPassword = '';
    } else {
      this.authService.changePassword(this.newPassword);
    }
  }
}
