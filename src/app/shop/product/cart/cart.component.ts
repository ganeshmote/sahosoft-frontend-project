import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/classes/cart-item';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(res => this.shoppingCartItems = res);
  }

  increment(product: any, quantity: number = 1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  // get total
  getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

}
