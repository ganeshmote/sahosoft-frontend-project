import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  OrderDetails: Order;

  constructor(private router: Router) { }

  // Create Order
  createOrder(product: any, details: any, orderId: any, paymentDate: any, expectedDate: any, amount: any) {
    let item = {
      shippingDetails: details,
      product: product,
      orderId: orderId,
      paymentDate: paymentDate,
      expectedDate: expectedDate,
      totalAmount: amount
    }

    this.OrderDetails = item;
    this.router.navigate(['/home/checkout/success']);
  }

  getOrderItems(): Order {
    return this.OrderDetails;
  }

}
