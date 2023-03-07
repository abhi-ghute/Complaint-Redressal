import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  login(){
    this.http.get('/abc-telecom/login').subscribe(data => {
      
    });
  }
}
