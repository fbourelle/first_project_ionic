import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PersonnagePage } from '../personnage/personnage';

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
  public name;
  
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.name = navParams.get("name");
  }

  // logForm(form) {
  //   console.log(form.value)
  //   this.navCtrl.pop();
  // }

  sendParam() {
    this.navCtrl.push(PersonnagePage, {
      name: this.name
    })
  }

}
