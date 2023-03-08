import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootUrl:string="http://localhost:8090/abc-telecom"
  constructor(private http :HttpClient) { }

  login(data:object){
    this.http.post(this.rootUrl+'/login',data,{responseType:'text'}).subscribe(data => {
      console.log(data);
    });
  }
}
