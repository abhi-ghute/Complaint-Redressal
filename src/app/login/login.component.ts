import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
  });

  constructor(private loginService:LoginService){}

  onSubmit(){
    console.log(this.login.value);
    this.loginService.login();
  }
}
