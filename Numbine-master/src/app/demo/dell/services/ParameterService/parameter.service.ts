import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parameter } from '../../models/Parameter';
import { Product } from '../../models/Product';
import { Value } from '../../models/Value';
@Injectable({
  providedIn: 'root'
})
export class ParameterService
{
  static getPath = "http://localhost:8081/";
  parameters : Parameter[];
  constructor(private httpClient: HttpClient)
  {
    this.generateDummyParams();
  }



  private generateDummyParams()
  {
    const ramValue1 = new Value(1, "4GB");
    const ramValue2 = new Value(2, "8GB");
    const ramValue3 = new Value(3, "16GB");
    const ramValues: Value[] = [ramValue1, ramValue2, ramValue3];

    const parameter1 = new Parameter(1, "RAM", "The memory of the computer.", ramValues, [new Product(1,"",true,null)]);
    const gpuValue1 = new Value(4, "GTX 1050");
    const gpuValue2 = new Value(5, "GTX 3070");
    const gpuValue3 = new Value(6, "GTX 3090");
    const gpuValue4 = new Value(6, "None");
    const gpuValues: Value[] = [gpuValue1, gpuValue2, gpuValue3, gpuValue4];
    const parameter2 = new Parameter(2, "GPU", "The graphics processing unit.", gpuValues,[new Product(2,"",true,null)]);
    this.parameters = [parameter1, parameter2];
  }

  public getDummyParameters(): Observable<Parameter[]>
  {
    let obs = new Observable<Parameter[]>(observer => 
      {
        try
      {
        setTimeout(() =>
        {
          observer.next(this.parameters);
        }, 500);
        
      } catch (error)
      {
        observer.error(error);
      }
    });
    return obs;
  }
  public getDummyParamsById(id: number): Observable<Parameter[]>
  {
    let obs = new Observable<Parameter[]>(observer => 
      {
        let paramsById : Parameter[];
        try {
          this.parameters.forEach(element => {
            if(element.id == id)
            {
              paramsById.push(element);
            }
            setTimeout(() => {
              observer.next(paramsById);
            }, 500);
          });
          
        } catch (error) {
          
        }
      });
      return obs;
  }
  public getParametersAsync(): Observable<Parameter[]>
  {
    return this.httpClient.get<Parameter[]>(ParameterService.getPath + "Parameter/getAllParameters",);
  }


}
