import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-engineer',
  templateUrl: './create-engineer.component.html',
  styleUrls: ['./create-engineer.component.css']
})
export class CreateEngineerComponent {

  engineer: FormGroup = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    pincodes: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
    this.addPincode();
   }

  get pincodes() {
    return this.engineer.get('pincodes') as FormArray;
  }

  addPincode() {
    this.pincodes.push(new FormControl('', Validators.required));
  }

  removePincode(index: number) {
    this.pincodes.removeAt(index);
  }

  onSubmit() {
    console.log(this.engineer.value);
  }
}
