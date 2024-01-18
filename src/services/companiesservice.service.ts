import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CompaniesserviceService {
  private apiUrl = 'http://localhost:8000/api/companies';

  constructor(private http: HttpClient) {}
  getCompanies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getCompanyData(companyID: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${companyID}`);
  }
}
