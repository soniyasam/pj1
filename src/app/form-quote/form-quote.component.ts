import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css'],
})
export class FormQuoteComponent implements OnInit {
  quote: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quote = this.fb.group({
      company_name: '',
      email: '',
      phone: '',
      address_line1: '',
      address_line2: '',
      quote_no: '',
      date: '',
      items: this.fb.array([]),
    });

    this.quote.valueChanges.subscribe(console.log);
    this.addItem();
  }
  get itemForms() {
    return this.quote.get('items') as FormArray;
  }

  addItem() {
    const item = this.fb.group({
      description: [],
      quantity: [],
      pricePerQuantity: [],
      total: [],
    });
    this.itemForms.push(item);
  }

  deleteItem(i) {
    this.itemForms.removeAt(i);
  }
}
