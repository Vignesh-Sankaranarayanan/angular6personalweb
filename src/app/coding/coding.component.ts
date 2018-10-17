import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnInit {

  color:string="your first color";
  constructor() { }

  ngOnInit() {
  }
  

  changebtn(){
   //change to your wanted color
    this.color="red";
  }
}
