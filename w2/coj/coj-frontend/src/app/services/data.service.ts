import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from  '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mockproblem';


@Injectable()
export class DataService {
  problems:Problem[] = PROBLEMS;
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) { }

  getProblems(): Observable<Problem[]> {
      this.http.get('api/v1/problems')
          .toPromise()
          .then((res: any) => {
            this._problemSource.next(res);
          })
          .catch(this.handleError);
      return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
               .toPromise()
               .then()
               .catch(this.handleError);
  }

  addProblem(problem:Problem){
    const options = {
      header: new HttpHeaders({
        'Content-Type': 'applicaiton/json'
      })
    };

    return this.http.get('api/v1/problems')
               .toPromise()
               .then((res:any) => {
                 this.getProblems();
                 return res;
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
      console.error('an error occured', error);
      return Promise.reject(error.body || error);
  }

}
