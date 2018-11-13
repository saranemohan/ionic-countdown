import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public projectList: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public homeService: HomeProvider) {
                
    this.projectList = homeService.getProjectList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
