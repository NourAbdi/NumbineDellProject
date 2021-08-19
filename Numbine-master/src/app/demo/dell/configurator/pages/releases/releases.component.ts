import { Component, OnInit } from '@angular/core';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { Subscription } from 'rxjs';
import { DataTable } from '../../../models/DataTable';
import { Product } from '../../../models/Product';
import { Release } from '../../../models/Release';
import { DataService } from '../../../services/DataService/data.service';
import { ProductService } from '../../../services/ProductService/product.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  trash: Boolean = false;
  edit: Boolean = true;

  public products: Product[] = [];

  public title = ['Product Name(^v)', 'Release', 'Version', 'Status'];
  // 
  public rows = [["Temp"], ["Temp"]];
  public dataTable = new DataTable();
  currentProduct: Product;
  productSubscription: Subscription;
  currentRelease: Release;
  ReleaseSubscription: Subscription;


  constructor(private productService: ProductService, private dataService: DataService) {
    // this.deleteFunction = this.deleteFunction.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }

  ngOnInit(): void {
    this.dataTable.rows = this.rows;
    this.dataTable.titles = this.title;

    let obsProducts = this.productService.getDummyProducts();
    obsProducts.subscribe(products => {
      this.products = products;
      this.updateRows();
      // Add loading?
    }, error => {
      alert("Error in loading products, product-release-mapping.component.ts");

    });
    // Subscribe the currentProduct to the value saved in the Data Service
    this.productSubscription = this.dataService.currentProduct.subscribe(currentProduct => {
      this.currentProduct = currentProduct
      console.log("Updated current product " + this);
      // this.updateRelease(this.currentProduct);
    });
    this.ReleaseSubscription=this.dataService.currentRelease.subscribe(currentRelease=>{
      this.currentRelease=currentRelease
      console.log("Updated current release"+ this);
    });

  }
   // We must unsubscribe before the component gets destroyed!
   ngOnDestroy(): void
   {
     this.productSubscription.unsubscribe();
     this.ReleaseSubscription.unsubscribe();
   }


  updateRows() {
    this.rows.length = 0;
    this.products.forEach(prod => {
      prod.releases.forEach(rel => {
        this.rows.push([prod.productName , rel.releaseName , rel.version , rel.status+'']);
      });
    });
  }
  //
  updateFunction(index: number)
  { 
    alert("the index"+ index);
   let counter:number=0
    this.products.forEach(product=>{
      product.releases.forEach(rel=>{
        if(counter==index){
          this.dataService.changeProduct(product);
          this.dataService.changeRelease(rel);

        }//move the other page
        else{
          counter++;
        }

      })
    }
      )
  }

}
