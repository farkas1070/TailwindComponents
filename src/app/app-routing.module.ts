import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { FeaturesComponent } from './Features/features/features.component';
import { RegisterComponent } from './Register/register/register.component';
import { ServicesComponent } from './Services/services/services.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component'; 

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Services', component: ServicesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
