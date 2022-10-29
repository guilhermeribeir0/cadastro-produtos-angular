import { Product } from './product.module';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable ({
    providedIn: 'root'
})

export class ProductService {

    private readonly baseUrl = 'api/products';

    constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }
    
    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top"
        })
    }

    create(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(this.baseUrl, product);
    }

    read(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.baseUrl).pipe(delay(2000));
    }

    readById(id: string): Observable<Product> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<Product>(url);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.httpClient.put<Product>(url, product);
    }

    delete(id: number): Observable<Product> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.delete<Product>(url);
    }

}