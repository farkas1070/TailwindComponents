import { Component, OnInit } from '@angular/core';
import { CompaniesserviceService } from 'src/services/companiesservice.service';

@Component({
  selector: 'app-home-companies',
  templateUrl: './home-companies.component.html',
  styleUrls: ['./home-companies.component.css'],
})
export class HomeCompaniesComponent implements OnInit {
  companies: any[];
  constructor(private companiesservice: CompaniesserviceService) {}

  ngOnInit(): void {
    this.companiesservice.getCompanies().subscribe((response) => {
      console.log(response);
      this.companies = response;
    });
  }
}
