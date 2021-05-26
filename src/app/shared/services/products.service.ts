import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Product } from '../classes/products';
import { Global } from './global';
import 'rxjs/add/operator/map';

//get product from localhost
let products = JSON.parse(localStorage.getItem("compareItem"));


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currency: string = 'INR';

  constructor(private _dataService: DataService, private _toastr: ToastrService) { }


  private products(): Observable<Product[]> {
    let data = this._dataService.get(Global.BASE_USER_ENDPOINT + "ProductMaster/GetProductList");
    return data;
  }

  //get products
  getProducts() {
    return this.products();
  }

  // get product by id
  getProduct(id: number): Observable<Product> {
    return this.products().map(items => items.find(item => item.id === id));
  }


  // get Product by Category
  getProductByCategory(category: string): Observable<Product[]> {
    return this.products().map(items =>
      items.filter((item: Product) => {
        if (category == 'all') {
          return;
        } else {
          return item.category === category;
        }
      })
    );
  }

  //get Compare Products
  getCompareProducts(): Observable<Product[]> {
    let item: Observable<Product[]> = of(products);
    return item;
  }

  // If item is already added in whishlist
  hasProduct(product: Product): boolean {
    let item = products.find(item => item.id === product.id);
    return item !== undefined;
  }

  // add to Compare
  addToCompare(product: Product): Product | boolean {
    let item: Product | boolean = false;

    if (this.hasProduct(product)) {
      item = products.find(item => item.id === product.id);
    } else {
      if(products.length<4){
        products.push(product);
        localStorage.setItem('compareItem', JSON.stringify(products));
      } else {
        this._toastr.warning("Maximum 4 products are in compare !!");
      }
    }
   
    return item;
  }

//Remove item from wishlit
removeFromCompare(product: Product) {
  if (product === undefined) {
    return false;
  }
  let index = products.indexOf(product);
  products.splice(index, 1);
  localStorage.setItem('compareItem', JSON.stringify(products));
}

}
