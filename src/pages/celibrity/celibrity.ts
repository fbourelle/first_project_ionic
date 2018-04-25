import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinationPage } from '../destination/destination';
import { PersonnagePage } from '../personnage/personnage';

/**
 * Generated class for the CelibrityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-celibrity',
  templateUrl: 'celibrity.html',

})
export class CelibrityPage {
  
  nextPage = DestinationPage;
  nextPage2 = PersonnagePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CelibrityPage');
  }

  findCard() {
    this.navCtrl.push(DestinationPage);
  }

}
