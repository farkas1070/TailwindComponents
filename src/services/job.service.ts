import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:8000/api/jobs';
  private getCategoriesUrl = 'http://localhost:8000/api/jobscategorienum';

  constructor(private http: HttpClient) {}
  getJobs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getSearchedJobs(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get<any>(`${this.apiUrl}/search`, { params });
  }
  getCategorieNums(): Observable<any> {
    return this.http.get<any>(this.getCategoriesUrl);
  }
  getJobTypes(jobID: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8000/api/job/${jobID}/types`);
  }
  
}
