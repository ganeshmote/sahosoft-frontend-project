import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.scss']
})
export class ProductLeftSidebarComponent implements OnInit {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }

  product: Product = {};
  products: Product[] = [];
  counter: number = 1;
  selectedSize: any = '';

  constructor(public productService: ProductsService, private route: ActivatedRoute, private router: Router,
    private cartService: CartService, private wishListService: WishlistService
  ) {

    this.route.params.subscribe(parms => {
      let id = parms['id'];
      this.productService.getProduct(parseInt(id)).subscribe(res => {
        this.product = res;
      });

    });

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => this.products = res);
  }



  // // product Zoom in
  // onMouseOver() {
  //   $("#p-zoom").classList.add("product-zoom");
  // }

  // //product zoom out
  // onMouseOut() {
  //   $("#p-zoom").classList.remove("product-zoom");
  // }

  increment() {
    this.counter += 1;
  }

  decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }


  changeSizeVariant(variant: any) {
    this.selectedSize = variant;
  }


  mobileSidebar() {
    $(".collection-filter").css("left", "-15px");
  }

  addToCart(product: Product, quantity: number) {
    if (quantity == 0) {
      return false;
    }

    this.cartService.addToCart(product, quantity);
  }

  addToWishList(product: Product) {
    this.wishListService.addToWishlist(product);
  }


  buyNow(product: Product, quantity: number) {
    if (quantity > 0) {
      this.cartService.addToCart(product, quantity);
      this.router.navigate(['/home/checkout']);
    }
  }

}
