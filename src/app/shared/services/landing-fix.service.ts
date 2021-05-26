import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class LandingFixService {

  constructor(@Inject(DOCUMENT) private documnet: Document) { }

  addNavFix() {
    this.documnet.getElementById('mySidenav').classList.add('open-side');
  }

  removeNavFix() {
    this.documnet.getElementById('mySidenav').classList.remove('open-side');
  }

}
