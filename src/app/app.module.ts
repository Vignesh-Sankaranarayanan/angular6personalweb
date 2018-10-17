import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { CodingComponent } from './coding/coding.component';
import { PublishedComponent } from './published/published.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    CodingComponent,
    PublishedComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
