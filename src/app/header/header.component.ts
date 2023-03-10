import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  id: string = 'noVal';
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  searchText: string = '';

  constructor(private router: Router) {
    let t = sessionStorage.getItem('id');

    if (t != null && t != '') {
      if (t == 'admin') {
        this.isAdmin = true;
      }
      this.id = t;
      this.loggedIn = true;
    }

  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.setItem('user', "");
    alert("logged out");
    this.router.navigate(['/login']);
  }
  search() {
    this.router.navigate(['/search'], { queryParams: { searchText: this.searchText } });
  }

}
