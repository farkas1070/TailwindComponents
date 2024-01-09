import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/types/job.model';
import { SelectedJobService } from 'src/services/selected-job.service';
import { SharedDataService } from 'src/services/shared-data.service';

@Component({
  selector: 'app-home-resultscontent',
  templateUrl: './home-resultscontent.component.html',
  styleUrls: ['./home-resultscontent.component.css']
})
export class HomeResultscontentComponent implements OnInit {
  @Input() searchData:any;
  
  
  placeholderList: Job[] = [];
  constructor(private selectedJobService: SelectedJobService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.searchData = this.sharedDataService.getSearchData();
    console.log(this.searchData);
  }
  selectJob(job: Job): void {
    this.selectedJobService.setSelectedJob(job);
  }
}
