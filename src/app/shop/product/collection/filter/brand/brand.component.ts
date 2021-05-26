import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  @Input() tagsFilters: any = [];
  @Output() tagFilters: EventEmitter<any[]> = new EventEmitter<any[]>();

  checkedTagArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tagFilters.emit(this.checkedTagArray);

    $(".collapse-block-title").on('click', function (event) {
      event.preventDefault();
      let speed = 300; // millisecond
      let thisItem = $(this).parent();
      let nextItem = $(this).next('.collection-collapse-block-content');

      if (thisItem.hasClass('open')) {
        thisItem.removeClass('open');
        nextItem.slideUp(speed);// hide
      } else {
        thisItem.addClass('open');
        nextItem.slideDown(speed);// hide
      }
    });
  }


  checkedFilter(event: any) {
    if (event.target.checked) {
      this.checkedTagArray.push(event.target.value);
    } else {
      let index = this.checkedTagArray.indexOf(event.targer.value);
      this.checkedTagArray.splice(index, 1);
    }

    this.tagFilters.emit(this.checkedTagArray); // pass value using emit
  }




}
