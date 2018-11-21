import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnsJsonArrayService } from '../returns-json-array.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css'],
  providers: [ReturnsJsonArrayService]
})
export class PublishedComponent implements OnInit {
  projects: Observable<Array<any>>;
  constructor(private service: ReturnsJsonArrayService) {
    this.projects = service.getCoding();
    console.log("AppComponent.projects:" + this.projects);
  }


  
  ngOnInit() {
  }
  

}