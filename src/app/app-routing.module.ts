import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'check-email', component: CheckEmailComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
