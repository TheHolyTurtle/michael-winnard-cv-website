import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
    // you have to add animations in each component in order to use that animation in the xxxxxx.component.html
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
