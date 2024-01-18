import { Component, OnInit,Input } from '@angular/core';
import { Job } from 'src/types/job.model';
import { SelectedJobService } from 'src/services/selected-job.service';
@Component({
  selector: 'app-landng-page-jobs-card',
  templateUrl: './landng-page-jobs-card.component.html',
  styleUrls: ['./landng-page-jobs-card.component.css']
})
export class LandngPageJobsCardComponent implements OnInit {
  @Input() job: Job | undefined;
  isSelected: boolean = false;

  constructor(private selectedJobService: SelectedJobService) { }
  ngOnInit(): void {
    this.selectedJobService.selectedJob$.subscribe((selectedJob) => {
      this.isSelected = selectedJob === this.job;
    });
  }
  onCardClick(): void {
    this.selectedJobService.setSelectedJob(this.job!);
    
    this.isSelected = true
    
  }

}
