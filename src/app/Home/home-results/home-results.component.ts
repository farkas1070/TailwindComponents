import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/services/shared-data.service';
@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.component.html',
  styleUrls: ['./home-results.component.css'],
})
export class HomeResultsComponent implements OnInit {
  searchData: any;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.searchData = this.sharedDataService.getSearchData();
    console.log(this.searchData);
  }
}
