import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  lists = [
    {
      title: 'Secure coding Guidelines',
      selected: true
    },
    {
      title: 'ISMS Questionnaire',
      selected: false
    },
    {
      title: 'PA Questionnaire',
      selected: false
    },
    {
      title: 'Process Guidelines',
      selected: false
    }
  ];

  ngOnInit(): void {
  }

  select(list): void {
    this.lists.find((item) => {
      if (item === list) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }
}
