import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnsJsonArrayService } from '../returns-json-array.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css'],
  providers: [ReturnsJsonArrayService]
})
export class PublishedComponent implements OnInit {
  public projects: Observable<any>;
  private http: Http;
  constructor(private service: ReturnsJsonArrayService) {
    this.projects = service.getCoding();
    console.log("AppComponent.projects:" + this.projects);
  }


  
  ngOnInit() {
  }
  

}