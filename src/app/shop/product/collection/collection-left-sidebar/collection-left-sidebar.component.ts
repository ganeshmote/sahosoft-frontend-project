import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Product } from 'src/app/shared/classes/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-collection-left-sidebar',
  templateUrl: './collection-left-sidebar.component.html',
  styleUrls: ['./collection-left-sidebar.component.scss']
})
export class CollectionLeftSidebarComponent implements OnInit {

  products: Product[] = [];
  items: Product[] = [];
  allItems: Product[] = [];
  colorFilters: any[] = [];
  tagFilters: any[] = [];
  tags: any[] = [];
  colors: any[] = [];
  IsMen: boolean = true;
  finished: boolean = false;
  lastKey = 0;


  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(params => {
      let category = params['category'];
      if (category == 'men') {
        this.IsMen = true;
      } else {
        this.IsMen = false;
      }


      this.productService.getProductByCategory(category).subscribe(res => {
        debugger;
        this.allItems = res;
        this.products = res.slice(0, 8) // only 8 items
        this.items =  this.products;
        this.getTags(res);
        this.getColors(res);
      });
    });
  }


  ngOnInit(): void {
  }


  getTags(products: any) {
    let uniqueBrands = [];
    let itemBrands = [];
    // get unique tags 
    products.map((product) => {
      if (product.tags) {
        product.tags.map((tag) => {
          let index = uniqueBrands.indexOf(tag);
          if (index === -1) {
            uniqueBrands.push(tag);
          }
        })
      }
    });

    for (let i = 0; i < uniqueBrands.length; i++) {
      itemBrands.push({ brand: uniqueBrands[i] });
    }

    this.tags = itemBrands;
  }

  getColors(products: any) {
    let uniqueColors = [];
    let itemColors = [];
    // get unique colors 
    products.map((product) => {
      if (product.colors) {
        product.colors.map((color) => {
          let index = uniqueColors.indexOf(color);
          if (index === -1) {
            uniqueColors.push(color);
          }
        })
      }
    });

    for (let i = 0; i < uniqueColors.length; i++) {
      itemColors.push({ color: uniqueColors[i] });
    }

    this.colors = itemColors;
  }


  // Update Tag Filter
  updateTagFilters(tags: any[]) {
    this.tagFilters = tags;
    debugger;
  }

  // Update Color Filter
  updateColorFilters(colors: any[]) {
    this.colorFilters = colors;
  }

  // Update Price Filter
  updatePriceFilters(Price: any) {
    let items: any[] = [];
    this.products.filter((item: Product) => {
      if (item.price >= Price[0] && item.price <= Price[1]) {
        items.push(item);
      }
    });
    this.items = items;
  }

  mobileFilter() {
    $(".collection-filter").css("left", "-15px");
  }

  onScroll() {
    this.lastKey = this.allItems[this.allItems.length - 1]['id']; // get ;ast record id value
    if (this.lastKey != this.products[this.products.length - 1]['id']) {
      this.finished = false;
    } else {
      this.finished = true;
    }

    if (this.products.length < this.allItems.length) {
      let len = this.products.length;
      for (let i = len; i < len + 4; i++) { // only 4 item add on every on scroll event
        if (this.allItems[i] == undefined) {
          return true;
        }
        this.products.push(this.allItems[i]);
      }
    }
  }

  filterItems(): Product[] {
    let itemData = this.items.filter((item: Product) => {
      let Colors: boolean = this.colorFilters.reduce((prev, curr) => { // Match Colors

        if (item.colors) {
          if (item.colors.includes(curr.color)) {
          
            return true;
          }
        }

      }, true);


      let Tags: boolean = this.tagFilters.reduce((prev, curr) => { // Match Tags

        if (item.tags) {
          if (item.tags.includes(curr)) {
            return true;
          }
        }

      }, true);


      return Colors && Tags;

    });
    return itemData;

  }


  twoCol() {
    $(".product-wrapper-grid").children().children().children().removeClass();
    $(".product-wrapper-grid").children().children().children().addClass("col-lg-6");
  }

  threeCol() {
    $(".product-wrapper-grid").children().children().children().removeClass();
    $(".product-wrapper-grid").children().children().children().addClass("col-lg-4");
  }

  fourCol() {
    $(".product-wrapper-grid").children().children().children().removeClass();
    $(".product-wrapper-grid").children().children().children().addClass("col-lg-3");
  }

  sixCol() {
    $(".product-wrapper-grid").children().children().children().removeClass();
    $(".product-wrapper-grid").children().children().children().addClass("col-lg-2");
  }
}

