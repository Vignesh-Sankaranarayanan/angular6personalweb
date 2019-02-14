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
import { ReturnsJsonArrayService } from './returns-json-array.service';

import {filterPipe} from './filterPipe';
import { UiModule } from './ui/ui.module';
import { RouterModule, Routes } from '@angular/router';

// routes are configured in this object
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'coding', component: CodingComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'projects', component: PublishedComponent},

  
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    CodingComponent,
    PublishedComponent,
    NotFoundComponent,
    filterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    UiModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ReturnsJsonArrayService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
