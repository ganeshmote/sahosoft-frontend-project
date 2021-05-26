import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/classes/order';
import { ProductsService } from 'src/app/shared/services/products.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  orderDetails: Order = {};
  constructor(public productsService: ProductsService, private orderService: OrderService,private cartService: CartService) { }

  ngOnInit(): void {
    this.orderDetails = this.orderService.getOrderItems();
  //  this.cartService.clearAllItemFromCart();
  }

}
