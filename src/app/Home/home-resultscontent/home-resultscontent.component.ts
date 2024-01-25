import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/types/job.model';
import { SelectedJobService } from 'src/services/selected-job.service';
import { SharedDataService } from 'src/services/shared-data.service';
import { SharesearchqueryService } from 'src/services/sharesearchquery.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-resultscontent',
  templateUrl: './home-resultscontent.component.html',
  styleUrls: ['./home-resultscontent.component.css'],
})
export class HomeResultscontentComponent implements OnInit {
  searchData: any;
  searchDataSubscription: Subscription;

  isTurnedOn = false;
  searchQuery: string;
  placeholderList: Job[] = [];

  constructor(
    private selectedJobService: SelectedJobService,
    private sharedDataService: SharedDataService,
    private sharedSearchqueryService: SharesearchqueryService
  ) {}

  ngOnInit(): void {
    this.searchDataSubscription = this.sharedDataService
      .getSearchData()
      .subscribe((data) => {
        this.searchData = data;
        this.sharedDataService.setOriginalData(data);
      });
    this.searchQuery = this.sharedSearchqueryService.getSearchData();
    console.log(this.searchData);
  }
  selectJob(job: Job): void {
    this.selectedJobService.setSelectedJob(job);
  }
  onCountrySelected(country: string): void {
    this.sharedDataService.filterByCountry(country);
  }
}
