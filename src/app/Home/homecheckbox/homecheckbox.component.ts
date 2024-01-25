import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { SharedDataService } from 'src/services/shared-data.service';
@Component({
  selector: 'app-homecheckbox',
  templateUrl: './homecheckbox.component.html',
  styleUrls: ['./homecheckbox.component.css']
})
export class HomecheckboxComponent implements OnInit {
  @Input() checkboxTitle: string
  @Output() checkboxChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  isChecked: boolean = false

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }
  onCheckboxChange(): void {

    this.isChecked = !this.isChecked;
    this.sharedDataService.filterByCountry(this.checkboxTitle);
  }
}
