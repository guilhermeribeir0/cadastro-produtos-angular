import { ProductService } from './../product.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products$: Observable<Product[]>;

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'reference', 'price', 'action']

  constructor(private productService: ProductService, private dialog: MatDialog) {
    this.products$ = this.productService.read().pipe(
      catchError(error => {
        this.onError('Error loading product list.')
        return of([])
      })
    );
  }

  onError(errormsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errormsg
    });
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
        this.products = products
        console.log(products)
    })
  }

  
}
