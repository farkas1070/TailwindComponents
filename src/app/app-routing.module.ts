import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { LandngPageJobsComponent } from './LandingPageJobs/landng-page-jobs/landng-page-jobs.component';
import { RegisterComponent } from './Register/register/register.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component'; 
import { ServicesComponent } from './Services/services/services.component';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Home/Jobs', component: LandngPageJobsComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
