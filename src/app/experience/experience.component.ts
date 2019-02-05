import { Component, OnInit } from '@angular/core';
//import * as data_json from '../../assets/data/data.json';
//import  * as data from '../../../src/assets/data/data.json';
var json = require('../../assets/data/data.json');
import { Observable } from 'rxjs';
import { ReturnsJsonArrayService } from '../returns-json-array.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ReturnsJsonArrayService]
})

export class ExperienceComponent implements OnInit {
  data: Observable<Array<any>>;
  http : Http;
  constructor(private service: ReturnsJsonArrayService) {
    this.data = service.getPeople();
    console.log("AppComponent.data:" + this.data);
  }

  ngOnInit() {
  }

}
