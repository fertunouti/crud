import { ProductService } from '../product.service';
import { Product } from './../product.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

 products: Product[]

 constructor (private productService: ProductService) {}

 ngOnInit(): void {
  this.productService.read().subscribe(products => {
    this.products = products;
    console.log(products)
  })
 }

}