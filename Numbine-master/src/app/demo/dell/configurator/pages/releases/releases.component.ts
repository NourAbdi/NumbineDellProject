import { Component, OnInit } from '@angular/core';
import { DataTable } from '../../../models/DataTable';
import { Product } from '../../../models/Product';
import { Release } from '../../../models/Release';
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

  public title = ['SeqID', 'Param Name(^v)', 'Release', 'Version', 'Status'];
  // 
  public rows = [["Temp"], ["Temp"]];
  public dataTable = new DataTable();
  currentProduct: Product;
  constructor(private productService: ProductService) {
    // this.deleteFunction = this.deleteFunction.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
  }

  ngOnInit(): void {
    this.dataTable.rows = this.rows;
    this.dataTable.titles = this.title;

    let obsProducts = this.productService.getDummyProducts();
    obsProducts.subscribe(products => {
      this.products = products;
      // Add loading?
    }, error => {
      alert("Error in loading products, product-release-mapping.component.ts");

    });
  }

  updateRows() {
    this.rows.length = 0;
    this.products.forEach(element => {
      this.products.forEach(element => {
        this.rows.push(["element.productName"]);
        this.rows.push(["element.releases"]);
        this.rows.push(["element.status"]);
      });
    });
  }
  updateFunction(index: number)
  {
    alert("Updating item " + index);
  }

}
