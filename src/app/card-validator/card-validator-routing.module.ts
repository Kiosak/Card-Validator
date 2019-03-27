import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardValidatorComponent } from './card-validator.component';

const routes: Routes = [
  { path: '', component: CardValidatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardValidatorRoutingModule { }
