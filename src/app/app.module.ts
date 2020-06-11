
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';

// importacion http
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from './components/description/description.component';

import { app_routes } from "./app.routes";
import { SearchComponent } from './components/search/search.component';
import { HeroeMarcaDirective } from './directives/heroe-marca.directive';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/partials/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    HomeCardsComponent,
    DescriptionComponent,
    SearchComponent,
    HeroeMarcaDirective,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    app_routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
