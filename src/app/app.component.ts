import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products = new Array<Product>();

  public constructor() {
    let produto = {
      name: "Geladeira",
      price: 1200.99,
      productCode: "123AA",
      releaseDate: new Date()
    } as Product;

    this.products.push(produto);

    let produto2 = {
      name: "Fogao",
      price: 699.99,
      productCode: "123BB",
      releaseDate: new Date()
    } as Product;

    this.products.push(produto2);

  }
}
