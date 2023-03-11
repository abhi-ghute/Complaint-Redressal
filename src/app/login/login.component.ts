import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login = new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
  });

  ngOnInit(){
    let data = sessionStorage.getItem('user');
    if(data=='admin'){

    }
  }
  constructor(private loginService:LoginService,private router:Router){}

  onSubmit(){
    this.loginService.login(this.login.value).subscribe(data => {
      if(data!=='failure'){
        sessionStorage.setItem("user",data);
        if(data=='admin')
          this.router.navigate(['/admin/create/customer']);
      }else{
        this.login.reset();
        alert("Wrong Credentials..");
      }
    });
  }
}
