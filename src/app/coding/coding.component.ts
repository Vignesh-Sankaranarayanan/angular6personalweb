import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnsJsonArrayService } from '../returns-json-array.service';
import { from } from 'rxjs/observable/from';



@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css'],
  providers: [ReturnsJsonArrayService]
})



export class CodingComponent implements OnInit {
  projects: Observable<Array<any>>;
  constructor(private service: ReturnsJsonArrayService) {
    this.projects = service.getCoding();
    console.log("AppComponent.projects:" + this.projects);
  }


  
  ngOnInit() {
  }
  

}

 

  

  
  
    
  
 