import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/classes/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  variantImage: any = '';
  selectedImage: any = '';

  constructor(private cartService: CartService, private wishlistService: WishlistService, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  changeVariantImage(image: any) {
    this.variantImage = image;
    this.selectedImage = image;
  }

  //Add to Cart
  addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }

  addToCompare(product: Product) {
    this.productsService.addToCompare(product);
  }


}
