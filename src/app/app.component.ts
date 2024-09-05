import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PrimeNGConfig } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  menuOpen = false;

  /* The toggleMenu() function toggles the menuOpen boolean, which controls whether the navbar links are visible or hidden.*/
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle('change', this.menuOpen); // Toggle the change class for animation
    }
  }
  /*The closeMenu() function ensures the menu closes when a link is clicked, 
  which is particularly useful on mobile to collapse the menu after a selection.*/ 
  closeMenu() {
    this.menuOpen = false;
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
      hamburgerMenu.classList.remove('change'); // Remove the change class when closing the menu
    }
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
