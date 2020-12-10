import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  acceptPptx: string;
  acceptXlsx: string;
  dateStart: Date;
  dateEnd: Date;
  minStartDate;
  minEndDate;

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
    this.minStartDate = new Date(Date.now());
    this.minEndDate = new Date(Date.now());
  }

  setEndDate(date: Date): void {
    this.dateEnd = date;
    this.minEndDate = date;
  }

  hai(msg): void {
    console.log(msg);
  }
}
