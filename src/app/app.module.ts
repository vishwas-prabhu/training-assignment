import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlicePipePipe } from './pipes/slice-pipe.pipe';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChangePasswordComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    DetailsComponent,
    SlicePipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
