import { ProductService } from './../product.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products$: Observable<Product[]>;

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'reference', 'price', 'action']

  constructor(private productService: ProductService) {
    this.products$ = this.productService.read().pipe(
      catchError(error => {
        return of([])
      })
    );
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
        this.products = products
        console.log(products)
    })
  }

  
}
