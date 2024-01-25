import { Company } from "./company.model";
import { Language } from "./language.model";
export interface Job {
    JobID: number;  
    company: Company;
    languages: Language[];
    start_salary: number;
    end_salary: number;
    post_date: string;
    job_title: string;
    job_short_description: string;
    job_type: string;
    job_place: string;
    company_website_link: string;
    job_long_description: string;
    company_logo_url: string;
    job_country: string;

  }