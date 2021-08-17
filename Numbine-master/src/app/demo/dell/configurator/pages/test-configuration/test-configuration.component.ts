import { Component, Input, OnInit } from '@angular/core';
import { ParameterService } from '../../../services/ParameterService/parameter.service';
import { Parameter } from 'src/app/demo/dell/models/Parameter';
import { DataTable } from '../../../models/DataTable';
import { WebServiseService } from '../../../services/WebService/web-service.service';
@Component({
  selector: 'app-test-configuration',
  templateUrl: './test-configuration.component.html',
  styleUrls: ['./test-configuration.component.scss']
})
export class TestConfigurationComponent implements OnInit {
  parameters: Parameter[] = [];
  loading = false;
  titles =['Param Name','Values'];
  public rows:any=[];
  
  dataTable= new DataTable()
  index :number[];
  constructor(private Param : ParameterService) {
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



}