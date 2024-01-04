import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { HeroNavbarComponent } from './hero-navbar/hero-navbar.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { CardsComponent } from './cards/cards.component';
import { CTAComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    HeroNavbarComponent,
    HeroContentComponent,
    CardsComponent,
    CTAComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
