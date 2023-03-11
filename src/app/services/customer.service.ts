import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/customer"

  createCustomer(customer:object):Observable<any>{
    console.log(customer);
    return this.http.post(this.rootUrl+'/create',customer,{responseType:'text'});
  }
}
