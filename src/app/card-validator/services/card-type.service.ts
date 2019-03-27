import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardTypeService {

  constructor() { }

  private acceptedCreditCards = {
    visa: /^4/,
    mastercard: /^51|^52|^53|^54|^55|^22|^23|^24|^25|^26|^27/,
    amex: /^34|^37/,
    discover: /^60|^64|^65|^622/,
    diners_club: /^30|^36|^38|^39/,
    jcb: /^35/
  };

  private cardIcon = {
    visa: 'fab fa-cc-visa',
    mastercard: 'fab fa-cc-mastercard',
    amex: 'fab fa-cc-amex',
    discover: 'fab fa-cc-discover',
    diners_club: 'fab fa-cc-diners-club',
    jcb: 'fab fa-cc-jcb'
  };

  cardType(data): any {
    const object = this.acceptedCreditCards;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        const isMatched = data.match(element);
        if (isMatched) {
          return this.cardIcon[key];
        }
      }
    }
  }
}
