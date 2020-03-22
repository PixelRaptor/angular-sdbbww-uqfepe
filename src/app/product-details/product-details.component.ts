import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { CartService } from "../cart.service";

import { ProductsService } from "../products.service";
import { async } from "@angular/core/testing";

// import { products } from '../products';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  products;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
  updateList(data) {
    this.products = data;
    this.route.paramMap.subscribe(params => {
      this.product = this.products[+params.get("productId")];
    });
  }

  ngOnInit() {
    this.products = this.productsService.getProducts().subscribe(data => {this.updateList(data);
    });
  }
}
