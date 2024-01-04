import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponentComponent } from './LandingPage/hero-component/hero-component.component';
import { HeroNavbarComponent } from './LandingPage/hero-navbar/hero-navbar.component';
import { HeroContentComponent } from './LandingPage/hero-content/hero-content.component';
import { CardsComponent } from './LandingPage/cards/cards.component';
import { CTAComponent } from './LandingPage/cta/cta.component';
import { FooterComponent } from './LandingPage/footer/footer.component';
import { FeaturesComponent } from './Features/features/features.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { ServicesComponent } from './Services/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    HeroNavbarComponent,
    HeroContentComponent,
    CardsComponent,
    CTAComponent,
    FooterComponent,
    FeaturesComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
