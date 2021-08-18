import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Parameter } from '../../models/Parameter';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorDataService 
{
  private productSource = new BehaviorSubject<Product>(null);
  currentProduct = this.productSource.asObservable();
  private parameterSource = new BehaviorSubject<Parameter>(null);
  currentParameter = this.parameterSource.asObservable();


  constructor() { }


  changeProduct(product : Product)
  {
    this.productSource.next(product);
  }
  changeParameter(parameter : Parameter)
  {
    this.parameterSource.next(parameter);
  }
}
