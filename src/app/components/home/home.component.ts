import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked = false;
  adminCategory;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickOpenModal(category): void {
    this.adminCategory = category;
    this.openDialog();
  }

  openDialog(): void {
    this.clicked = !this.clicked;
  }
}
