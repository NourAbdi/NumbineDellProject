import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { Release } from '../../models/Release';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  static getPath = "http://localhost:8081/";
  constructor(private httpClient : HttpClient) { }

  public getDummyProducts() : Observable<Product[]>
  {
    let obs = new Observable<Product[]>(observer => 
      {
        try {
          setTimeout(() => {
            const release1 = new Release(1, "A", false, "1.0", "78/9/900");
            const release2 = new Release(1, "B", false, "1.2", "2/2/2010");
            const releases: Release[] = [release1, release2];
            const product1 = new Product(1, "Apple", true, releases);
            const product2 = new Product(2, "Car", true, releases);
            const products: Product[] = [product1, product2];
            observer.next(products);
          }, 500);
          
        } catch (error) {
          observer.error(error);
        }
      });
    return obs;
  }
  public getProductsAsync() : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(ProductService.getPath + "Product/getAllProducts");
  }
}