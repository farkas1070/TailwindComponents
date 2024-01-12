import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CompaniesserviceService {
  private apiUrl = 'http://localhost:8000/api/companies';

  constructor(private http: HttpClient) {}
  getCompanies() {
    return this.http.get<any>(this.apiUrl);
  }
}
