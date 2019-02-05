import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { filter } from 'rxjs/operators';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
@Injectable()
export class ReturnsJsonArrayService {
  private projects: Observable<any>;
  private ProjectFiltered : Observable<any>;
  private doctors=[];
  
  constructor(protected http: Http) {
   /* var myarr = ["GithubDeploy","VigneshSankaranarayanan_PersonalWebsite","BurgerBuilder","Sample","Webhook"
    ,"WebhookApi","quickstart-ios","ionic-preview-app","Geethamandalam","php-github-api","Tools"
  ,"ionic2-slides-test","m3uStreamPlayer"];
    http.get('http://jsonplaceholder.typicode.com/users/')
        .map((response) => response.json())
        .filter((person) => myarr.indexOf(person.name) > -1)
        
        .subscribe((data) => {
          this.doctors.push(data);
        });*/
  }
 
  getPeople( ): Observable<any> {
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
        
        
        var myarr = ["GithubDeploy","VigneshSankaranarayanan_PersonalWebsite","BurgerBuilder","Sample","Webhook"
    ,"WebhookApi","quickstart-ios","ionic-preview-app","Geethamandalam","php-github-api","Tools"
  ,"ionic2-slides-test","m3uStreamPlayer"];
  
  this.projects= this.http.get('https://api.github.com/users/vignesh-sankaranarayanan/repos')
  .map((res:Response) => res.json())
  
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  //console.log(this.filterByString(this.projects, 'Alexa'));
  
  return this.projects;
    }
     
   
   
   
    
  }

        