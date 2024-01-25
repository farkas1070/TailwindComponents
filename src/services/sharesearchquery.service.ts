import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharesearchqueryService {
  searchQuery: string
  constructor() { }
  setSearchData(data:any){
    this.searchQuery = data;
  }

  getSearchData(){
    return this.searchQuery;
  }
  

}
