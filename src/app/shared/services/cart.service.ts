import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Product } from '../classes/products';
import { CartItem } from '../classes/cart-item';
//get product from localhost
let products = JSON.parse(localStorage.getItem("cartItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

  constructor(private _toastr: ToastrService) { }

  getTotalAmount(): Observable<number> {
    return this.cartItems.map(() => {
      return products.reduce((total: number, curr: CartItem) => {
        return total + curr.product.price * curr.quantity;
      }, 0)
    })
  }

  // get Products
  getItems(): Observable<CartItem[]> {
    let item: Observable<CartItem[]> = of(products);
    return item;
  }

  //add to Cart 
  addToCart(product: Product, quantity: number): CartItem | boolean {
    let item: CartItem | boolean = false;

    // If Product Exists
    let hasItem = products.find((items, index) => {
      if (items.product.id == product.id) {
        let qty: number = products[index].quantity + quantity;
        let stock = this.calculateStockCounts(products[index], quantity);

        if (qty != 0 && stock) {
          products[index]["quantity"] = qty;
          localStorage.setItem('cartItem', JSON.stringify(products));
          this._toastr.success("This product added to cart !!");
        }
        return true;
      }
    });

    // if Products does not exists (add new product here)

    if (!hasItem) {
      item = { product: product, quantity: quantity }
      products.push(item);
      this._toastr.success("This product added to cart !!");
      localStorage.setItem('cartItem', JSON.stringify(products));
    }

    return item;

  }

  // update Cart
  updateCartQuantity(product: Product, quantity: number): CartItem | boolean {
    return products.find((items, index) => {
      if (items.product.id == product.id) {
        let qty: number = products[index].quantity + quantity;
        let stock = this.calculateStockCounts(products[index], quantity);

        if (qty != 0 && stock) {
          products[index]["quantity"] = qty;
          localStorage.setItem('cartItem', JSON.stringify(products));
        }
        return true;
      }
    });
  }

  //Remove item from cart
  removeFromCart(product: CartItem) {
    if (product === undefined) {
      return false;
    }
    let index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem('cartItem', JSON.stringify(products));
  }

  // get Stock
  calculateStockCounts(product: CartItem, quantity: number): CartItem | boolean {
    let qty = product.quantity + quantity;
    let stock = product.product.stock;
    if (stock < qty) {
      this._toastr.error("You can not add more item !!");
      return false
    }

    return true;
  }

  clearAllItemFromCart() {
    //products.splice(0, products.length);
    products = [];
    localStorage.setItem('cartItem', JSON.stringify(products));
  }

}
