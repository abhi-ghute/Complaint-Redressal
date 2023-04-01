import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/engineer"

  createCustomer(customer:object):Observable<any>{
    return this.http.post(this.rootUrl+'/create',customer,{responseType:'text'});
  }

  getByPincode(pinCode:string):Observable<any>{
    return this.http.get(this.rootUrl+'/getByPincode?pinCode='+pinCode);
  }
  
}
