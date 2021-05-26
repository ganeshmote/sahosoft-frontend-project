import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forntend';

  constructor(private _TranslateService : TranslateService){
    _TranslateService.setDefaultLang('en');
    _TranslateService.addLangs(['en','hi']);
  }

}

