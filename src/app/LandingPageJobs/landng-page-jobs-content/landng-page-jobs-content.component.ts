import { Component, OnInit } from '@angular/core';
import * as list from 'postcss/lib/list';
import { Job } from 'src/types/job.model';
import { SelectedJobService } from 'src/services/selected-job.service';
import { JobService } from 'src/services/job.service';
@Component({
  selector: 'app-landng-page-jobs-content',
  templateUrl: './landng-page-jobs-content.component.html',
  styleUrls: ['./landng-page-jobs-content.component.css'],
})
export class LandngPageJobsContentComponent implements OnInit {
  firstJob: Job | undefined = undefined;
  
  placeholderList: Job[] = [];
  constructor(private selectedJobService: SelectedJobService,private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (data) =>{
        this.placeholderList = data
        this.firstJob = data[0]
        console.log(data)
     // Set the first job as the initial selected job
        this.selectedJobService.setSelectedJob(data[0]);
      }
    )
     // Get the first job from your placeholderList
     
   
  }
  selectJob(job: Job): void {
    this.selectedJobService.setSelectedJob(job);
  }
}
