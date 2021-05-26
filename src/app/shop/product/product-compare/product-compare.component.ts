import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent implements OnInit {

  products: Product[] = [];

  constructor(public productService: ProductsService, public cartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getCompareProducts().subscribe(res => this.products = res);
  }

  // Add To Cart
  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  // Remove Items
  removeItem(product: any) {
    this.productService.removeFromCompare(product);
  }

}
