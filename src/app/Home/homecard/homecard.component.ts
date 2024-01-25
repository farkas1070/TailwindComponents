import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Job } from 'src/types/job.model';
@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
