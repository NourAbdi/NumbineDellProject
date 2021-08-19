import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { ParameterService } from 'src/app/demo/dell/services/ParameterService/parameter.service';
import { DataTable } from '../../../models/DataTable';
import { Product } from '../../../models/Product';
import { Release } from '../../../models/Release';
import { Value } from '../../../models/Value';
import { DataService } from '../../../services/DataService/data.service';

@Component({
  selector: 'app-new-param-mapping',
  templateUrl: './new-param-mapping.component.html',
  styleUrls: ['./new-param-mapping.component.scss']
})
export class NewParamMappingComponent implements OnInit
{

  title = ['Value', 'Start Release', 'End Release'];
  rows = [[1, "", ""], [2, "", ""]];
  dataTable = new DataTable();

  public parameters: Parameter[] = [];
  public currentParameter: Parameter;

  currentProduct: Product;
  productSubscription: Subscription;
  parameterSubscription: Subscription;

  releases: Release[] = [];

  constructor(private parameterService: ParameterService, private dataService: DataService) { }

  ngOnInit(): void
  {
    // Initialize Table
    this.dataTable.rows = this.rows;
    this.dataTable.titles = this.title;

    // Get all parameters
    let obs = this.parameterService.getDummyParameters();
    obs.subscribe(parameters =>
    {
      this.parameters = parameters;
      // Add loading?
    }, error =>
    {
      alert("Error in loading parameters, new-param-mapping.component.ts");
    });

    // Subscribe the currentProduct to the value saved in the Data Service
    this.productSubscription = this.dataService.currentProduct.subscribe(currentProduct =>
    {
      this.currentProduct = currentProduct;
      if (this.currentProduct != null)
      {
        this.releases = this.currentProduct.releases;
      }
      this.updateRows();
    });

    // Subscribe the currentParameter to the value saved in the Data Service
    this.parameterSubscription = this.dataService.currentParameter.subscribe(currentParameter =>
    {
      this.currentParameter = currentParameter;
      this.updateValues(this.currentParameter);
    });
  }

  updateValues(currentParameter: Parameter)
  {
    if (currentParameter != null)
    {
      this.currentParameter = currentParameter;
      this.updateRows();
    }
  }
  updateRows()
  {
    if (this.currentParameter != null)
    {
      let values = this.currentParameter.values;
      this.rows.length = 0;
      values.forEach(element =>
      {
        this.rows.push([element.name, "", ""]);
      });
    }
  }
}


