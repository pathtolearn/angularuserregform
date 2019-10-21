import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reg-form',
  templateUrl: './user-reg-form.component.html',
  styleUrls: ['./user-reg-form.component.css']
})
export class UserRegFormComponent implements OnInit {

  concatenatedAddress: string = '';

  userRegForm: FormGroup = new FormGroup({
    'userName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.minLength(6)),
    'company': new FormControl('', Validators.required),
    'terms': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  captureDetails() {
    if (this.userRegForm.valid) {
      alert('Valid Form');
    } else {
      alert('Invalid Form');
    }
  }

  onAddressInput() {
    const { address } = this.userRegForm.value;
    if (address)
      this.concatenatedAddress = String(address).split('\n').join(',');
  }
}
