import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddpersonnagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpersonnage',
  templateUrl: 'addpersonnage.html',
})
export class AddpersonnagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logForm(form) {
    console.log(form.value)
    this.navCtrl.pop();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpersonnagePage');
  }

}
