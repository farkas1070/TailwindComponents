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
  isLoaded: boolean = false;
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((response) => {
      
      console.log(this.isLoaded)
      setTimeout(() => {
        this.jobs = response.slice(0, 6);
        this.isLoaded = true;
        console.log(this.isLoaded)
      }, 2000);
      
    });
  }
}
