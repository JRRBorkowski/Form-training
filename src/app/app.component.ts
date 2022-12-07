import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  shopForm = this.builder.group({
    storeName: this.builder.control('', {
      validators: [Validators.required],
    }),
    industry: this.builder.control('', {
      validators: [Validators.required],
    }),
    isRegistered: this.builder.control(false),
    companyName: this.builder.control('', {
      validators: [Validators.required],
    }),
    vat: this.builder.control(''),

    location: this.builder.group({
      adress: this.builder.control(''),
      zipCode: this.builder.control(''),
      city: this.builder.control(''),
      country: this.builder.control(''),
    },{
      validator: Validators.required
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

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}
}
