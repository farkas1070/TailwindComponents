import { Component, OnInit } from '@angular/core';
import { SelectedJobService } from 'src/services/selected-job.service';
import { Subscription } from 'rxjs';
import { Job } from 'src/types/job.model';
import { JobService } from 'src/services/job.service';
import { Company } from 'src/types/company.model';
@Component({
  selector: 'app-landng-page-jobs-information',
  templateUrl: './landng-page-jobs-information.component.html',
  styleUrls: ['./landng-page-jobs-information.component.css'],
})
export class LandngPageJobsInformationComponent implements OnInit {
  selectedJob: Job | null = null;
  selectedCompany:Company;
  selectedTypes:any[] = [];

  private subscription: Subscription = new Subscription();
  constructor(
    private selectedJobService: SelectedJobService,

    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.selectedJobService.selectedJob$.subscribe((selectedJob) => {
        this.selectedJob = selectedJob;
       
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
