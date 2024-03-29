import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/services/job.service';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/services/shared-data.service';
import { SharesearchqueryService } from 'src/services/sharesearchquery.service';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  searchQuery: string = '';
  constructor(
    private jobService: JobService,
    private router: Router,
    private sharedDataService: SharedDataService,
    private sharedSearchqueryService: SharesearchqueryService
  ) {}

  ngOnInit(): void {}

  navigateToResults(data: any): void {
    this.router.navigate(['Home/Results']);
  }

  search(): void {
    this.jobService.getSearchedJobs(this.searchQuery).subscribe(
      (response) => {
        console.log(response);
        this.sharedDataService.setSearchData(response);
        this.sharedSearchqueryService.setSearchData(this.searchQuery)
        this.router.navigate(['Home/Results']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
