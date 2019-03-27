import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardValidatorRoutingModule } from './card-validator-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardValidatorComponent } from './card-validator.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { CardTypeService } from './services/card-type.service';

@NgModule({
  declarations: [
    CardValidatorComponent,
  ],
  imports: [
    CommonModule,
    CardValidatorRoutingModule,
    FormsModule,
    CreditCardDirectivesModule,
    ReactiveFormsModule
  ],
  exports: [
    CardValidatorComponent,
  ],
  providers: [
    CardTypeService
  ]
})
export class CardValidatorModule { }
