import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  shopForm = this.builder.group({
    storeName: this.builder.control(''),
    industry: this.builder.control(''),
    isRegistered: this.builder.control(false),
    companyName: this.builder.control(''),
    vat: this.builder.control(''),

    location: this.builder.group({
      adress: this.builder.control(''),
      zipCode: this.builder.control(''),
      city: this.builder.control(''),
      country: this.builder.control(''),
    }),
  });

  submitForm() {
    console.log(this.shopForm.value);
  }

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}
}
