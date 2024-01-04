import { Component, OnInit } from '@angular/core';
import 'alpinejs';

@Component({
  selector: 'app-hero-navbar',
  templateUrl: './hero-navbar.component.html',
  styleUrls: ['./hero-navbar.component.css'],
})
export class HeroNavbarComponent implements OnInit {
  isDropdownOpen = true;

  constructor() {}

  ngOnInit(): void {}
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
