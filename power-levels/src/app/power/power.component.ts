import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: number; // initializing an empty variable called number.
  constructor() { }

  ngOnInit() {
    this.power = 10; //setting the power to 10 on the base component
  }

}
