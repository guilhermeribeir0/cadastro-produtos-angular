import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product!: Product;

  productForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    reference: new FormControl('', Validators.required),
    price: new FormControl(Number(''), [Validators.required, Validators.min(0.01)])
  })

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    const product = this.productForm.value as Product;
    this.productService.create(product).subscribe(() => {
      this.productService.showMessage('Produto Criado!');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
