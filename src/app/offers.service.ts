import { Injectable } from '@angular/core';

import { Offer } from './models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private offers: Offer[];

  constructor() { 

    this.offers = [];

    const offer1: Offer = {
      id: 1,
      name: 'Simple Haircut',
      hairdresser: 'John Doe',
      description: "A simple haircut",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 30,
      price: 20,
      localisation: 'Paris'
    };

    const offer2: Offer = {
      id: 2,
      name: 'Long Haircut',
      hairdresser: 'John Doe',
      description: "A long haircut",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 60,
      price: 40,
      localisation: 'Paris'
    };

    const offer3: Offer = {
      id: 3,
      name: 'Simple Haircut + Beard',
      hairdresser: 'John Doe',
      description: "Simple haircut + beard trimming",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 45,
      price: 30,
      localisation: 'Paris'
    };

    const offer4: Offer = {
      id: 4,
      name: 'Long Haircut + Beard',
      hairdresser: 'John Doe',
      description: "Long haircut + beard trimming",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 75,
      price: 50,
      localisation: 'Paris'
    };

    const offer5: Offer = {
      id: 1,
      name: 'Simple Haircut',
      hairdresser: 'John Doe',
      description: "A simple haircut",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 30,
      price: 20,
      localisation: 'Paris'
    };

    const offer6: Offer = {
      id: 2,
      name: 'Long Haircut',
      hairdresser: 'John Doe',
      description: "A long haircut",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 60,
      price: 40,
      localisation: 'Paris'
    };

    const offer7: Offer = {
      id: 3,
      name: 'Simple Haircut + Beard',
      hairdresser: 'John Doe',
      description: "Simple haircut + beard trimming",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 45,
      price: 30,
      localisation: 'Paris'
    };

    const offer8: Offer = {
      id: 4,
      name: 'Long Haircut + Beard',
      hairdresser: 'John Doe',
      description: "Long haircut + beard trimming",
      imageURL: "https://sonofelicebychristine.com/wp-content/uploads/2022/05/Male-haircut-near-me-Hair-Salon-Los-Angeles-Sono-Felice-by-Christine-scaled.jpg",
      duration: 75,
      price: 50,
      localisation: 'Paris'
    };

    this.offers.push(offer1);
    this.offers.push(offer2);
    this.offers.push(offer3);
    this.offers.push(offer4);
    this.offers.push(offer5);
    this.offers.push(offer6);
    this.offers.push(offer7);
    this.offers.push(offer8);
  }

  public getOffers(): Offer[] {
    return this.offers;
  }

  public getOfferById(id: number): Offer | undefined {
    for(let offer of this.offers) {
      if(offer.id == id) {
        return offer;
      }
    }

    return undefined;
  }

  public addOffer(offer: Offer): void {
    this.offers.push(offer);
  }
}
