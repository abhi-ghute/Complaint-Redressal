import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role:any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getRole();
  }

  logout() {

    sessionStorage.setItem('user', "");
    sessionStorage.setItem('role', "");
    alert("logged out");
    this.getRole();
    this.router.navigate(['/login']);
  }

  getRole(){
    this.role=sessionStorage.getItem('role');
  }
}
