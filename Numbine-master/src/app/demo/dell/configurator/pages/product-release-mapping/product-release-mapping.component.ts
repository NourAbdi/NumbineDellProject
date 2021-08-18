import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { ProductService } from 'src/app/demo/dell/services/ProductService/product.service';
import { ParameterService } from 'src/app/demo/dell/services/ParameterService/parameter.service';
import { DataTable } from '../../../models/DataTable';

@Component({
  selector: 'app-product-release-mapping',
  templateUrl: './product-release-mapping.component.html',
  styleUrls: ['./product-release-mapping.component.scss']
})
export class ProductReleaseMappingComponent implements OnInit
{
  trash: Boolean = true;
  edit: Boolean = true;

  public products: Product[] = [];
  public params: Parameter[] = [];

  public title = ['Param Name(^v)'];
  public rows = [["Temp"], ["Temp"]];
  public dataTable = new DataTable();
  currentProduct : Product;
  constructor(private productService: ProductService, private paramService: ParameterService) 
  {
    this.deleteFunction = this.deleteFunction.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }

  ngOnInit(): void
  {
    this.dataTable.rows = this.rows;
    this.dataTable.titles = this.title;

    let obsProducts = this.productService.getDummyProducts();
    obsProducts.subscribe(products =>
    {
      this.products = products;
      // Add loading?
    }, error =>
    {
      alert("Error in loading products, product-release-mapping.component.ts");

    });
  }

  updateParams(currentProduct: Product)
  {
    this.currentProduct = currentProduct;
    if (currentProduct != null)
    {
      let obsParams = this.paramService.getDummyParamsById(currentProduct.id);
      obsParams.subscribe(params =>
      {
        this.params = params;
        this.updateRows();
        console.log(this.params);
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
    alert("Updating item " + index);
  }
}