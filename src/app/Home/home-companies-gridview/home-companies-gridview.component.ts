import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-home-companies-gridview',
  templateUrl: './home-companies-gridview.component.html',
  styleUrls: ['./home-companies-gridview.component.css']
})
export class HomeCompaniesGridviewComponent implements OnInit {
  @Input() companies:any;
  constructor() { }

  ngOnInit(): void {
  }

}
