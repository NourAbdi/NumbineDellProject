import { Component,NgZone, OnInit } from '@angular/core';
import {ButtonClass} from 'src/app/demo/enums/myenum.enum'
import { NextConfig } from '../../../../app-config';
import {NumbineChartData} from 'src/app/app/fack-db/numbine-chart-data';
import { Location } from '@angular/common';
import { DataTable } from '../../models/DataTable';
import { User } from '../../models/User';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  public user = new User();

  public name : string;

  // Actions Example
  trash : Boolean = true;
  edit : Boolean = false;
  
  public trashClickTest(){
    alert('test trash')
  }
  public textet = "";

  public editClickTest(){
    alert('test edit')
  }

  heloo(event: KeyboardEvent){
    this.helo =(event.target as HTMLInputElement).value ;
    
  }
  title = ['Param Name(^v)'];
  rows = [[1],[3]];
  dataTable = new DataTable();
  // charts
  public numbineChartData: any;
  // other
  public helo='';
  buttonClass = ButtonClass;
  public flatConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;

  constructor(private zone: NgZone, private location: Location) {
    this.flatConfig = NextConfig.config;
    let currentURL = this.location.path();
    const baseHerf = this.location['_baseHref'];
    if (baseHerf) {
      currentURL = baseHerf + this.location.path();
    }
    this.numbineChartData = NumbineChartData;

    this.windowWidth = window.innerWidth;

    if (currentURL === baseHerf + '/layout/collapse-menu'
      || currentURL === baseHerf + '/layout/box'
      || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
      this.flatConfig.collapseMenu = true;
    }

    this.navCollapsed = (this.windowWidth >= 992) ? this.flatConfig.collapseMenu : false;
    this.navCollapsedMob = false;

  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      this.flatConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        (document.querySelector('#nav-ps-flat-able') as HTMLElement).style.maxHeight = '100%'; // 100% amit
      }, 500);
    }
    this.dataTable.titles=this.title;
    this.dataTable.rows=this.rows;

  }

  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }

  public show(){

    alert("the name is : " + this.name);
  }

}


