import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorService } from 'src/app/services/administrator.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  customers:any;

  constructor(private router: Router,private adminService:AdministratorService,private customerService:CustomerService) {}

  ngOnInit() {
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    });
  }
}
