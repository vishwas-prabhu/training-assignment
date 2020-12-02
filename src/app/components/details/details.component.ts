import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  acceptPptx: string;
  acceptXlsx: string;

  buttons = [
    {
      icon: 'save',
      title: 'SAVE'
    },
    {
      icon: 'preview',
      title: 'PREVIEW'
    },
    {
      icon: 'publish',
      title: 'PUBLISH'
    },
    {
      icon: 'add_alert',
      title: 'REMIND'
    },
    {
      icon: 'article',
      title: `GENERATE REPORT`
    },
  ];
  constructor() {
    this.acceptPptx = '.ppt';
    this.acceptXlsx = '.xlsx';
  }

  ngOnInit(): void {
  }

  hai(msg): void {
    console.log(msg);
  }
}
