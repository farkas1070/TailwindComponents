import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TypesserviceService {
  private apiUrl = 'http://localhost:8000/api/types';

  constructor(private http: HttpClient) {}

  getTypes() {
    return this.http.get<any>(this.apiUrl);
  }
  
}
