import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Company } from 'src/types/company.model';
@Component({
  selector: 'app-home-companies-grid-card',
  templateUrl: './home-companies-grid-card.component.html',
  styleUrls: ['./home-companies-grid-card.component.css']
})
export class HomeCompaniesGridCardComponent implements OnInit {
  @Input() data:Company;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
