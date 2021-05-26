import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() colorsFilters: any[] = [];
  @Output() colorFilters: EventEmitter<any[]> = new EventEmitter<any[]>();

  activeItem: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(varColors: any) {
    this.activeItem = varColors.color;
    if (varColors.color) {
      this.colorFilters.emit([varColors]);
    } else {
      this.colorFilters.emit([]);
    }
  }
  

}
