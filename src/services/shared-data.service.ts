import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  searchData:any;

  constructor() { }
  
  setSearchData(data:any){
    this.searchData = data;
  }

  getSearchData(){
    return this.searchData;
  }
}
