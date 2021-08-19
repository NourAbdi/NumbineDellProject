import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/demo/dell/models/Product'
import { ProductService } from 'src/app/demo/dell/services/ProductService/product.service';
import { DataTable } from '../../../models/DataTable';
import { DataService } from '../../../services/DataService/data.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss']
})
export class NewReleaseComponent implements OnInit {
  public products: Product[] = [];
  productSubscription: Subscription;
  public title = ['Release', 'Version', 'Status'];
  public rows = [["Temp"], ["Temp"]];
  public dataTable = new DataTable();
  currentProduct: Product;
  public Flag: boolean = false;
  constructor(private productService: ProductService, private dataService: DataService) {
    // this.DeleteFunction = this.deleteFunction.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }

  ngOnInit(): void {
    // Initialize Table
    this.dataTable.rows = this.rows;
    this.dataTable.titles = this.title;

    // Get All Products
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
      this.updateRows();
    });
  }

  updateRows() {
    if (this.currentProduct != null) {
      this.rows.length = 0;
      this.currentProduct.releases.forEach(rel => {
        this.rows.push([rel.releaseName, rel.version, rel.status + '']);
      });
    }
  }

  updateFunction(index: number) {
    alert("Updating item " + index);
  }
  updateProducts(product: Product) {
    
    if (this.currentProduct != product) {
      if (this.currentProduct != null) {
        this.Flag = true;
      }
      // this.currentProduct = currentProduct;
      this.dataService.changeProduct(product);
    }
  }
}