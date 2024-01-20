import { Component, OnInit } from '@angular/core';
import { TypesserviceService } from 'src/services/typesservice.service';
import { JobType } from 'src/types/jobtype.model';
import { JobService } from 'src/services/job.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  types: JobType[];
  dataLoaded: boolean = false;
  categorieNums: any;
  constructor(
    private service: TypesserviceService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.service.getTypes().subscribe((response) => {
      console.log(response);
      this.types = response;
    });
    this.jobService.getCategorieNums().subscribe((response) => {
      console.log(response.jobTypeCounts);
      this.categorieNums = response.jobTypeCounts;
      this.dataLoaded = true
    });
  }
}
