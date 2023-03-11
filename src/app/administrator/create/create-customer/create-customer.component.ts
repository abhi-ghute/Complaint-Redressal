import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministratorService } from 'src/app/services/administrator.service';
import { Country, State, City } from 'country-state-city';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: FormGroup= new FormGroup({});
  states:any;
  cities:any;

  constructor(private fb: FormBuilder, private router: Router,private adminService:AdministratorService) {}

  ngOnInit() {
    this.states =  State.getStatesOfCountry('IN');  

    this.customer = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      mobileService:[true],
      landLineService:[false],
      broadbandService:[false],
      address:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
    });
  }

  getCities(event:any) {
    const currentState = this.states.find((state: { name: string; }) => state.name === event.target.value);
    this.cities=City.getCitiesOfState('IN',currentState.isoCode);  
  }

  onSubmit() {
    console.log(this.customer.value);
  }
}
