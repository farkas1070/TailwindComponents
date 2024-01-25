import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Job } from 'src/types/job.model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() jobs:Job[];
  @Input() isLoaded:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
