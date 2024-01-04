import { Component, OnInit } from '@angular/core';
import { HeroContentComponent } from '../hero-content/hero-content.component';
import { HeroNavbarComponent } from '../hero-navbar/hero-navbar.component';
@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
