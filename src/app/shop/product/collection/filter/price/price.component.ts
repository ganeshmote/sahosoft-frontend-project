import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {

  @Output() priceFilters = new EventEmitter();
  // min: number = 100;
  // max: number = 1000;
  // range: any = [100, 1000];


  minValue: number = 1;
  maxValue: number = 1000;
  options: Options = {
    floor: 1,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> ' + value;
        case LabelType.High:
          return '<b>Max price:</b> ' + value;
        default:
          return '$' + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  priceChanged(event: any) {
    debugger;
    let arr = [];
    arr.push(event.value);
    arr.push(event.highValue);

    this.priceFilters.emit(arr);
  }

  // priceChanged(event: any) {
  //   setInterval(() => {
  //     this.priceFilters.emit(event);
  //   }, 1000);
  // }

}
