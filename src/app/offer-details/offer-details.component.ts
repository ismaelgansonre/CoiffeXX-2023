import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Offer } from '../models/Offer';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent {

  public offer: Offer | undefined;

  constructor(public service: OffersService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let offerIndex: number = params['id'];
      this.offer = this.service.getOfferById(offerIndex);
    });
  }
}
