import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


import {CodingComponent} from "./coding/coding.component";
import {ExperienceComponent} from "./experience/experience.component";
import {PublishedComponent} from "./published/published.component";

import {  
  PlatformLocation,  
  Location,  
  LocationStrategy,  
  HashLocationStrategy,  
  PathLocationStrategy,  
  APP_BASE_HREF
} from '@angular/common'; 



const routes: Routes = [
  { path: 'angular6personalweb/home', component: HomeComponent },
  { path: 'angular6personalweb/coding', component: CodingComponent },
  { path: 'angular6personalweb/experience', component: ExperienceComponent },
  { path: 'angular6personalweb/projects', component: PublishedComponent },
  {path : '**', component : HomeComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class routing { }

