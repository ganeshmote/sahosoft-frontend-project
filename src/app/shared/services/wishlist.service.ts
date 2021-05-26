import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { Product } from '../classes/products';

//get product from localhost
let products = JSON.parse(localStorage.getItem("wishlistItem"));

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _toastr: ToastrService) { }

  //

  // get Products
  getProducts(): Observable<Product[]> {
    let item: Observable<Product[]> = of(products);
    return item;
  }

  // If item is already added in whishlist
  hasProduct(product: Product): boolean {
    let item = products.find(item => item.id === product.id);
    return item !== undefined;
  }

  // add to wishlist
  addToWishlist(product: Product): Product | boolean {
    let item: Product | boolean = false;

    if (this.hasProduct(product)) {
      item = products.find(item => item.id === product.id);
    } else {
      products.push(product);
      localStorage.setItem('wishlistItem', JSON.stringify(products));
      this._toastr.success("This product added to wishlist !!");
    }
    return item;
  }

  //Remove item from wishlit
  removeFromWishlist(product: Product) {
    if (product === undefined) {
      return false;
    }
    let index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem('wishlistItem', JSON.stringify(products));
  }

}
