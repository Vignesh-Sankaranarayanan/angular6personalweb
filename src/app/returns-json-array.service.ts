import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ReturnsJsonArrayService {

  constructor(private http: Http) {}
  private projects: Observable<any>;
  getPeople(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

        return this.http.get('./assets/data/data.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCoding(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/
        
        this.projects= this.http.get('https://api.github.com/users/vignesh-sankaranarayanan/repos')
        .map((res:Response) => res.json())
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
       
         return this.projects;
          }

          
        }

        