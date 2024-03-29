import { AlertsService } from './../alerts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0.00,
    reference: ''
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private alertsService: AlertsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.alertsService.alertSucess('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    }, (error) => {
      this.alertsService.alertErro('Verifique as informações e tente novamente.');
      console.error(error);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
