import { Injectable } from '@angular/core';
import { Job } from 'src/types/job.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedCountries: Set<string> = new Set<string>();
  private searchData: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>([]);
  searchData$: Observable<Job[]> = this.searchData.asObservable();
  private originalData: Job[] = [];

  constructor() { }
  setOriginalData(data: Job[]) {
    this.originalData = [...data];
  }
  setSearchData(data:Job[]){
    this.searchData.next(data); }

  getSearchData(){
    return this.searchData$;
  }
  filterByCountry(country: string): void {
    const filteredData = this.searchData.value.filter((job) => job.job_country === country);
    this.searchData.next(filteredData);
  }
}
