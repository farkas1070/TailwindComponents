import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { JobType } from 'src/types/jobtype.model';
@Component({
  selector: 'app-home-tyes',
  templateUrl: './home-tyes.component.html',
  styleUrls: ['./home-tyes.component.css'],
})
export class HomeTyesComponent implements OnInit {
  @Input() data: JobType[];
  @Input() categorieNums: any[];
  @Input() dataLoaded: boolean;

  constructor() {}

  ngOnInit(): void {
    
  }
  returnSlicedArray(data:any[], sliceStart:number, sliceEnd:number){
    return data.slice(sliceStart, sliceEnd);

  }
  
  adjustedIndex(index: number): number {
    return index + 4;
  }
}
