import {Component, Input, OnInit} from '@angular/core';

import {Restaurant} from './restaurant.model';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant[]

  constructor() { }

  ngOnInit() {
  }

}
