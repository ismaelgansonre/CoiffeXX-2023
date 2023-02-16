import { Component } from '@angular/core';

import { Offer } from '../models/Offer';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  constructor(public service: OffersService) {}

}
