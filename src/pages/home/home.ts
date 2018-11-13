import { HomeProvider } from './../../providers/home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  openDashboard(){
    this.navCtrl.push('DashboardPage');
  }

}
