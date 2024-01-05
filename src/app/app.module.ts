import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponentComponent } from './LandingPage/hero-component/hero-component.component';
import { HeroNavbarComponent } from './LandingPage/hero-navbar/hero-navbar.component';
import { HeroContentComponent } from './LandingPage/hero-content/hero-content.component';
import { CardsComponent } from './LandingPage/cards/cards.component';
import { CTAComponent } from './LandingPage/cta/cta.component';
import { FooterComponent } from './LandingPage/footer/footer.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';
import { InformationComponent } from './AboutUs/information/information.component';
import { AboutUSStatsComponent } from './AboutUs/about-usstats/about-usstats.component';
import { LandngPageJobsComponent } from './LandingPageJobs/landng-page-jobs/landng-page-jobs.component';
import { LandngPageJobsContentComponent } from './LandingPageJobs/landng-page-jobs-content/landng-page-jobs-content.component';
import { LandngPageJobsCardComponent } from './LandingPageJobs/landng-page-jobs-card/landng-page-jobs-card.component';
import { LandngPageJobsInformationComponent } from './LandingPageJobs/landng-page-jobs-information/landng-page-jobs-information.component';
import { SelectedJobService } from 'src/services/selected-job.service';
import { LandngPageJobsPlaceholderComponent } from './LandingPageJobs/landng-page-jobs-placeholder/landng-page-jobs-placeholder.component';
import { ServicesComponent } from './Services/services/services.component';
import { ServicesContentComponent } from './Services/services-content/services-content.component';
import { ServicesStatsComponent } from './Services/services-stats/services-stats.component';
import { RegisterFormComponent } from './Register/register-form/register-form.component';
import { JobService } from 'src/services/job.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    HeroNavbarComponent,
    HeroContentComponent,
    CardsComponent,
    CTAComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    InformationComponent,
    AboutUSStatsComponent,
    LandngPageJobsComponent,
    LandngPageJobsContentComponent,
    LandngPageJobsCardComponent,
    LandngPageJobsInformationComponent,
    LandngPageJobsPlaceholderComponent,
    ServicesComponent,
    ServicesContentComponent,
    ServicesStatsComponent,
    RegisterFormComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [SelectedJobService,JobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
