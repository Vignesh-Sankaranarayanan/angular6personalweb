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
  coding: Observable<Array<any>>;
  
  constructor(private service: ReturnsJsonArrayService) {
    this.coding = service.getCoding();
    
  
    
    console.log("AppComponent.coding:" + this.coding);
  }


  
  ngOnInit() {
  }
  

}

 

  

  
  
    
  
 