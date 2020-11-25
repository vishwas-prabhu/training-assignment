import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  acceptPptx: string = ".pptx";
  acceptXlsx: string = ".xlsx";

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
  ]
  constructor() { }

  ngOnInit(): void {
  }

  hai(msg) {
    console.log(msg)
  }

}
