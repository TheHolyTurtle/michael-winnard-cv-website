import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-overview',
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.scss'],
  // you have to add animations in each component in order to use that animation in the xxxxxx.component.html
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SkillsOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    //if we want to scroll to the top "just quick"
    // document.documentElement.scrollTop = 0;

    //if we want to scroll to the top "slow but nice"
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
