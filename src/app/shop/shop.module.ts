import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { LogoComponent } from './home/logo/logo.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { SliderComponent } from './home/slider/slider.component';
import { CartComponent } from './product/cart/cart.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
import { ProductLeftSidebarComponent } from './product/product-details/product-left-sidebar/product-left-sidebar.component';
import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { SuccessComponent } from './product/success/success.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

// not supported in angular 9
//import { NgxImgZoomModule } from 'ngx-img-zoom';
//import { RangeSliderModule } from 'ngx-rangeslider-component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from 'ngx-bar-rating';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { CheckoutComponent } from './product/checkout/checkout.component';


@NgModule({
  declarations: [HomeComponent, ProductComponent, CollectionBannerComponent, LogoComponent, ParallaxBannerComponent, ProductSliderComponent, ProductTabComponent, SliderComponent, CartComponent, CollectionLeftSidebarComponent, BrandComponent, ColorComponent, PriceComponent, ProductLeftSidebarComponent, SidebarComponent, SuccessComponent, WishlistComponent, CategoriesComponent, NewProductComponent, ProductCompareComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    //NgxImgZoomModule,
    //RangeSliderModule,
    Ng5SliderModule,
    NgxImageZoomModule,
    InfiniteScrollModule,
    SlickCarouselModule,
    BarRatingModule
  ]
})
export class ShopModule { }
