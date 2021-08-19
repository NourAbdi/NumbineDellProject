import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { ProductService } from 'src/app/demo/dell/services/ProductService/product.service';
import { ParameterService } from 'src/app/demo/dell/services/ParameterService/parameter.service';
import { DataTable } from '../../../models/DataTable';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/demo/dell/services/DataService/data.service';

@Component({
  selector: 'app-product-release-mapping',
  templateUrl: './product-release-mapping.component.html',
  styleUrls: ['./product-release-mapping.component.scss']
})
export class ProductReleaseMappingComponent implements OnInit, OnDestroy
{
  trash: Boolean = true;
  edit: Boolean = true;

  public products: Product[] = [];
  public params: Parameter[] = [];

  public title = ['Param Name(^v)'];
  public rows = [["Temp"], ["Temp"]];
  public dataTable = new DataTable();

  currentProduct: Product;
  productSubscription: Subscription;
  currentParameter: Parameter;
  parameterSubscription: Subscription;

  constructor(private productService: ProductService, private paramService: ParameterService, private dataService: DataService) 
  {
    this.deleteFunction = this.deleteFunction.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }


  ngOnInit(): void
  {
    // Initialize Table
    this.dataTable.rows = this.rows;
    this.dataTable.titles = this.title;

    // Get All Products
    let obsProducts = this.productService.getDummyProducts();
    obsProducts.subscribe(products =>
    {
      this.products = products;
      // Add loading?
    }, error =>
    {
      alert("Error in loading products, product-release-mapping.component.ts");

    });

    // Subscribe the currentProduct to the value saved in the Data Service
    this.productSubscription = this.dataService.currentProduct.subscribe(currentProduct =>
    {
      this.updateParams(currentProduct);
    });
    // Subscribe the currentParameter to the value saved in the Data Service
    this.parameterSubscription = this.dataService.currentParameter.subscribe(currentParameter =>
    {
      this.currentParameter = currentParameter;
    });
  }

  // We must unsubscribe before the component gets destroyed!
  ngOnDestroy(): void
  {
    this.productSubscription.unsubscribe();
    this.parameterSubscription.unsubscribe();
  }

  updateParams(currentProduct: Product)
  {
    if(this.currentProduct)
    {
      // this.currentProduct = currentProduct;
      this.dataService.changeProduct(currentProduct);
    }
    if(currentProduct != null)
    {
      let obsParams = this.paramService.getDummyParamsById(currentProduct.id);
      obsParams.subscribe(params =>
      {
        this.params = params;
        this.updateRows();
        // Add loading?
      }, error =>
      {
        alert("Error in loading params, product-release-mapping.component.ts " + error);
      });
    }
  }

  updateRows()
  {
    this.rows.length = 0;
    this.params.forEach(element =>
    {
      this.rows.push([element.parameterName]);
    });
  }

  deleteFunction(index: number)
  {
    this.paramService.deleteDummyProductFromParam(this.params[index], this.currentProduct);
    this.params.splice(index, 1);
    this.updateRows();
  }

  updateFunction(index: number)
  {
    // TODO:
    // This only saves the parameter to update... need to route to the new param mapping page to edit it
    this.dataService.changeParameter(this.params[index]);
  }
}