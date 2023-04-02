import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/manager"

  createManager(manager:object):Observable<any>{
    return this.http.post(this.rootUrl+'/create',manager,{responseType:'text'});
  }

  getAll():Observable<any>{
    return this.http.get(this.rootUrl+'/getAll');
  }
}
