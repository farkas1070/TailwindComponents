import { Component, OnInit } from '@angular/core';
import * as list from 'postcss/lib/list';
import { Job } from 'src/types/job.model';
import { SelectedJobService } from 'src/services/selected-job.service';
@Component({
  selector: 'app-landng-page-jobs-content',
  templateUrl: './landng-page-jobs-content.component.html',
  styleUrls: ['./landng-page-jobs-content.component.css'],
})
export class LandngPageJobsContentComponent implements OnInit {
  
  
  placeholderList: Job[] = [
    {
      company: 'Microsoft',
      startSalary: 50000,
      endSalary: 80000,
      postDate: '2022-03-01',
      jobTitle: 'Software Developer',
      jobShortDescription: 'Exciting opportunity for a software developer.',
      jobType: 'Full Time',
      jobPlace: 'City, Country',
      companyWebsiteLink: 'https://www.microsoft.com/de-at/',
      jobLongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      companyLogoURL: 'https://www.cyberlinkasp.com/wp-content/uploads/2017/07/Microsoft-Logo-PNG.png',
    },
    {
      company: 'Meta',
      startSalary: 60000,
      endSalary: 90000,
      postDate: '2022-03-02',
      jobTitle: 'Web Designer',
      jobShortDescription: 'Join our team as a creative web designer.',
      jobType: 'Part Time',
      jobPlace: 'City, Country',
      companyWebsiteLink: 'https://www.xyzltd.com',
      jobLongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      companyLogoURL: 'https://www.example.com/logo2.png',
    },
    
    {
      company: 'Meta',
      startSalary: 60000,
      endSalary: 90000,
      postDate: '2022-03-02',
      jobTitle: 'Web Designer',
      jobShortDescription: 'Join our team as a creative web designer.',
      jobType: 'Part Time',
      jobPlace: 'City, Country',
      companyWebsiteLink: 'https://www.xyzltd.com',
      jobLongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      companyLogoURL: 'https://www.example.com/logo2.png',
    }
    ,
    {
      company: 'Meta',
      startSalary: 60000,
      endSalary: 90000,
      postDate: '2022-03-02',
      jobTitle: 'Web Designer',
      jobShortDescription: 'Join our team as a creative web designer.',
      jobType: 'Part Time',
      jobPlace: 'City, Country',
      companyWebsiteLink: 'https://www.xyzltd.com',
      jobLongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      companyLogoURL: 'https://www.example.com/logo2.png',
    }
    ,
    {
      company: 'Meta',
      startSalary: 60000,
      endSalary: 90000,
      postDate: '2022-03-02',
      jobTitle: 'Web Designer',
      jobShortDescription: 'Join our team as a creative web designer.',
      jobType: 'Part Time',
      jobPlace: 'City, Country',
      companyWebsiteLink: 'https://www.xyzltd.com',
      jobLongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      companyLogoURL: 'https://www.example.com/logo2.png',
    }
    ,
    {
      company: 'Meta',
      startSalary: 60000,
      endSalary: 90000,
      postDate: '2022-03-02',
      jobTitle: 'Web Designer',
      jobShortDescription: 'Join our team as a creative web designer.',
      jobType: 'Part Time',
      jobPlace: 'City, Country',
      companyWebsiteLink: 'https://www.xyzltd.com',
      jobLongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      companyLogoURL: 'https://www.example.com/logo2.png',
    }
    
    // Add more job postings as needed
  ];
  constructor(private selectedJobService: SelectedJobService) {}

  ngOnInit(): void {
     // Get the first job from your placeholderList
     const firstJob: Job | undefined = this.placeholderList[0];

     // Set the first job as the initial selected job
     this.selectedJobService.setSelectedJob(firstJob);
   
  }
  selectJob(job: Job): void {
    this.selectedJobService.setSelectedJob(job);
  }
}
