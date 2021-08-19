import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTable } from '../../../models/DataTable';
import { Product } from '../../../models/Product';
import { DataService } from '../../../services/DataService/data.service';
import { ProductService } from '../../../services/ProductService/product.service';

@Component({
  selector: 'app-configurator-products-page',
  templateUrl: './configurator-products-page.component.html',
  styleUrls: ['./configurator-products-page.component.scss']
})
export class ConfiguratorProductsPageComponent implements OnInit {
  trash: Boolean = true;
  edit: Boolean = true;
  products:Product[]=[];
  loading = false;
  titles =['Name','Status'];
  public rows:any=[];
  dataTable= new DataTable()
  currentProduct: Product;
  productSubscription: Subscription;

  
  constructor(private productService: ProductService,private dataService: DataService) { 
    this.deleteRow = this.deleteRow.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }

  ngOnInit(): void {

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
     this.productSubscription = this.dataService.currentProduct.subscribe(currentProduct => {
       this.currentProduct = currentProduct
       console.log("Updated current product " + this);
     });
     this.dataTable.titles=this.titles;
    this.dataTable.rows=this.rows
  }
// We must unsubscribe before the component gets destroyed!
ngOnDestroy(): void
{
    this.productSubscription.unsubscribe();
}
updateRows()
{
  this.rows.length = 0;
  this.products.forEach(element =>
  {
    this.rows.push([element.productName,element.status]);


  });
}
deleteRow(id:number):void{  
  if(confirm("Are you sure?")) {
    this.dataTable.rows.splice(id,1);
  }
  //return this.Param.deleteParameter(id);
  

}
updateFunction(index: number)
  {
    alert("Updating item " + index);
    this.dataService.changeProduct(this.products[index]);

  }
}
