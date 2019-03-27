import { Component, OnInit } from '@angular/core';
import { CreditCardValidator } from 'angular-cc-library';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CardTypeService } from './services/card-type.service';

@Component({
  selector: 'app-card-validator',
  templateUrl: './card-validator.component.html',
  styleUrls: ['./card-validator.component.scss']
})
export class CardValidatorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private cardTypeService: CardTypeService) { }

  public cardType: any;
  alerts = {
    creditCard: true,
    expirationDate: true,
    cvc: true,
  };
  public cardValid = '';

  form: any;
  submitted = false;

  cardNumberValidation(event) {
    console.log('event :', event);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      creditCard: ['', [CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [CreditCardValidator.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.cardValid = 'Card data valid. Redirection...';
    } else {
      this.cardValid = '';
    }
    const object = form.controls;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        this.alerts[key] = element.valid;
      }
    }
  }

  cardTypeFunc(event) {
    this.cardType = this.cardTypeService.cardType(event);
  }

}
