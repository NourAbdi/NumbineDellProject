import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { Release } from '../../models/Release';
import { WebServiseService } from '../../services/WebService/web-service.service'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private webService : WebServiseService) { }

  public getDummyProducts() : Observable<Product[]>
  {
    let obs = new Observable<Product[]>(observer => 
      {
        try {
          setTimeout(() => {
            const release1 = new Release(1, "A", false, "1.0", "78/9/900");
            const release2 = new Release(2, "B", false, "1.2", "2/2/2010");
            const releases: Release[] = [release1, release2];
            const product1 = new Product(1, "Dell PC", true, releases);
            const product2 = new Product(2, "Dell Laptop", true, releases);
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
    return this.webService.callService<Product[]>("Product/getAllProducts");
  }
  
}
