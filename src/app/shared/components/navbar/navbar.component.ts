import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  locationRef: string;
  constructor() {
    this.locationRef = window.location.href;
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        // nav.classList.add("bg-dark", "shadow");
        nav.classList.add('bg-light', 'shadow');
      } else {
        // nav.classList.remove("bg-dark", "shadow");
        nav.classList.remove('bg-light', 'shadow');
      }
    });
  }
}
