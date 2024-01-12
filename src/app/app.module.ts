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
import { AuthserviceService } from 'src/services/authservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { HomeNavbarComponent } from './Home/home-navbar/home-navbar.component';
import { HomeContentComponent } from './Home/home-content/home-content.component';
import { HomeCtaComponent } from './Home/home-cta/home-cta.component';
import { HomeTyesComponent } from './Home/home-tyes/home-tyes.component';
import { HomeResultsComponent } from './Home/home-results/home-results.component';
import { HomeResultsInfoComponent } from './Home/home-results-info/home-results-info.component';
import { HomeResultscontentComponent } from './Home/home-resultscontent/home-resultscontent.component';
import { HomeResultscardComponent } from './Home/home-resultscard/home-resultscard.component';
import { SharedDataService } from 'src/services/shared-data.service';
import { HomefotterComponent } from './Home/homefotter/homefotter.component';
import { HomebottomctaComponent } from './Home/homebottomcta/homebottomcta.component';
import { HomeCompaniesComponent } from './Home/home-companies/home-companies.component';
import { HomeCompaniescontentComponent } from './Home/home-companiescontent/home-companiescontent.component';
import { HomeCompaniesHeaderComponent } from './Home/home-companies-header/home-companies-header.component';
import { HomeCompaniesGridviewComponent } from './Home/home-companies-gridview/home-companies-gridview.component';
import { HomeCompaniesGridCardComponent } from './Home/home-companies-grid-card/home-companies-grid-card.component';
import { CompaniesserviceService } from 'src/services/companiesservice.service';
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
    HomeComponent,
    HomeNavbarComponent,
    HomeContentComponent,
    HomeCtaComponent,
    HomeTyesComponent,
    HomeResultsComponent,
    HomeResultsInfoComponent,
    HomeResultscontentComponent,
    HomeResultscardComponent,
    HomefotterComponent,
    HomebottomctaComponent,
    HomeCompaniesComponent,
    HomeCompaniescontentComponent,
    HomeCompaniesHeaderComponent,
    HomeCompaniesGridviewComponent,
    HomeCompaniesGridCardComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  providers: [SelectedJobService,JobService,AuthserviceService,SharedDataService,CompaniesserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
