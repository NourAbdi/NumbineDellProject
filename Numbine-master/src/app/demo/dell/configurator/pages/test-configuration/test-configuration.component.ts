import { Component, Input, OnInit } from '@angular/core';
import { ParameterService } from '../../../services/ParameterService/parameter.service';
import { Parameter } from 'src/app/demo/dell/models/Parameter';
import { DataTable } from '../../../models/DataTable';
import { WebServiseService } from '../../../services/WebService/web-service.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
@Component({
  selector: 'app-test-configuration',
  templateUrl: './test-configuration.component.html',
  styleUrls: ['./test-configuration.component.scss']
})
export class TestConfigurationComponent implements OnInit {
  trash: Boolean = true;
  edit: Boolean = true;
  parameters: Parameter[] = [];
  loading = false;
  titles =['Param Name','Values'];
  public rows:any=[];
  
  dataTable= new DataTable()
  index :number[];
  constructor(private Param : ParameterService) {
    this.deleteRow = this.deleteRow.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
   }

  ngOnInit(): void {
  // let obs=this.Param.getParametersAsync(); we should put this
  let obs = this.Param.getDummyParameters();
  obs.subscribe((data) => {
    this.parameters = data;
this.updateRows();
  },
    (err) => {
      alert("error")
    })


    this.dataTable.titles=this.titles;
    this.dataTable.rows=this.rows
}
updateRows()
{
  this.rows.length = 0;
  this.parameters.forEach(element =>
  {
    this.rows.push([element.parameterName,element.values]);


  });
}
// we should get the id of the pararameter that we want to delete !
deleteRow(id:number):void{  
  
  this.dataTable.rows.splice(id,1);
  //return this.Param.deleteParameter(id);
  

}
// editRow(id:number) :void
// {

// }

updateFunction(index: number)
  {
    alert("Updating item " + index);
  }

}