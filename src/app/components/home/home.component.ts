import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    // this.clicked = !this.clicked;
    // const dialogRef = this.dialog.open(OptionsComponent);

    // dialogRef.afterClosed().subscribe(() => this.clicked = !this.clicked);
    this.clicked = !this.clicked
  }
}
