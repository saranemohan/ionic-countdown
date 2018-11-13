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
      {name:'blugate', awardCount:120, currentCount:80},
      {name:'blugate', awardCount:140, currentCount:60},
      {name:'blugate', awardCount:150, currentCount:90},
      {name:'blugate', awardCount:100, currentCount:50},
      {name:'blugate', awardCount:120, currentCount:40}
    ]

  }

  getProjectList(){
    return this.projectList;
  }
}
