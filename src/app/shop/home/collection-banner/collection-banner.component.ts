import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Global } from 'src/app/shared/services/global';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerComponent implements OnInit {
category:any;
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this._dataService.get(Global.BASE_USER_ENDPOINT+"Category/GetAll").subscribe(res=>{
      if(res.isSuccess){
        this.category=res.data;
      }
    });
  }

}
