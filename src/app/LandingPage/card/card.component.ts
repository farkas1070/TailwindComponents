import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Job } from 'src/types/job.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
