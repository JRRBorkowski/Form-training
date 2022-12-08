import { Component, OnInit, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  isRegistered: boolean = false;

  shopForm = this.builder.group({
    storeName: this.builder.control('', {
      validators: [Validators.required],
    }),
    industry: this.builder.control('', {
      validators: [Validators.required],
    }),
    isRegistered: this.builder.control(false),
    location: this.builder.group({
      companyName: this.builder.control(''),
      vat: this.builder.control(''),
      adress: this.builder.control(''),
      zipCode: this.builder.control(''),
      city: this.builder.control(''),
      country: this.builder.control(''),
    }),
  });

  submitForm() {
    this.shopForm.markAllAsTouched();

    if (this.shopForm.invalid) {
      return;
    }
    // handle...
    console.log(this.shopForm.value);
  }

  constructor(private builder: FormBuilder) {
    this.shopForm.controls.isRegistered.valueChanges.subscribe(
      check => {
        this.onRegisterCheck(check)
      }
    );
  }

  ngOnInit() {
    this.onRegisterCheck(false);
  }

  onRegisterCheck(check) {
    this.isRegistered = check
    console.log("checked", this.isRegistered);
    if (this.isRegistered === true) {
      this.shopForm.get('location.vat').addValidators([Validators.required]);
      this.shopForm.get('location').updateValueAndValidity();
    } else {
      this.shopForm.get('location.vat').clearValidators();
      this.shopForm.get('location').updateValueAndValidity();
    }
  }
}
