import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from 'src/types/job.model'; // Adjust the path based on your project structure

@Injectable({
  providedIn: 'root',
})
export class SelectedJobService {
  private selectedJobSubject = new BehaviorSubject<Job | null>(null);
  selectedJob$ = this.selectedJobSubject.asObservable();

  setSelectedJob(job: Job): void {
    this.selectedJobSubject.next(job);
  }
}