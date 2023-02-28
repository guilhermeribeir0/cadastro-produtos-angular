import { AlertsService } from './../alerts.service';
import { Product } from './../product.module';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

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
    });
  }

  deleteProduct(): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Isso não poderá ser revertido!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1A6AFF',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, pode excluir!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.delete(this.product.id!).subscribe(() => {
          this.router.navigate(['/products']);
        }, (error) => {
          this.alertsService.alertErro('Verifique as informações e tente novamente.');
          console.error(error);
        });
        Swal.fire(
          'Excluído!',
          'Produto excluído com sucesso!',
          'success'
        )
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
