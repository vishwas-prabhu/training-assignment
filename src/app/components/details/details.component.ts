import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  buttons = [
    {
      icon: 'save',
      title: 'SAVE',
      click: (msg) => {
        this.hai(msg);
      }
    },
    {
      icon: 'preview',
      title: 'PREVIEW',
      click: ''
    },
    {
      icon: 'publish',
      title: 'PUBLISH',
      click: ''
    },
    {
      icon: 'add_alert',
      title: 'REMIND',
      click: ''
    },
    {
      icon: 'article',
      title: 'GENERATE REPORT',
      click: ''
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  hai(msg){
    console.log(msg)
  }

}
