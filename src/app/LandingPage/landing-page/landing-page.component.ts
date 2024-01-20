import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/services/job.service';
import { Job } from 'src/types/job.model';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((response) => {
      console.log(response);
      this.jobs = response.slice(0,6)
    });
  }
}
