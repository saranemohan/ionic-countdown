import { Injectable } from '@angular/core';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  public projectList:any = [];

  constructor() {
    console.log('Hello HomeProvider Provider');

    this.projectList = [
      {name:'blugate', awardCount:120, currentCount:130},
      {name:'p3', awardCount:140, currentCount:130},
      {name:'hyperbot', awardCount:150, currentCount:150},
      {name:'fishfarm', awardCount:100, currentCount:50},
      {name:'xpertin', awardCount:120, currentCount:40},
      {name:'jma', awardCount:145, currentCount:45}
    ]

  }

  getProjectList(){
    return this.projectList;
  }
}
