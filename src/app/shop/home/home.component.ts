import { Component, OnInit } from '@angular/core';
import{Product} from 'src/app/shared/classes/products';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: Product[] = [];
  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(res=>{
      if(res){
        this.product=res;
      }
    });
  }

}
