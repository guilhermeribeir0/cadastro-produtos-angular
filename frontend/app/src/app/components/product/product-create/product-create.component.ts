import { AlertsService } from './../alerts.service';
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

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    reference: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    price: new FormControl(Number(''), [Validators.required, Validators.min(0.01)])
  })

  constructor(private productService: ProductService, private router: Router, private alertsService: AlertsService) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    const product = this.productForm.value as Product;
    this.productService.create(product).subscribe(() => {
      this.alertsService.alertSucess('Produto cadastrado com sucesso!');
      this.router.navigate(['/products']);
    }, (error) => {
      this.alertsService.alertErro('Verifique as informações e tente novamente!');
      console.error(error);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
