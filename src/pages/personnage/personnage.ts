import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddpersonnagePage } from '../addpersonnage/addpersonnage'
import { DestinationPage } from '../destination/destination'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PersonnagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personnage',
  templateUrl: 'personnage.html',
})
export class PersonnagePage {

  addPage = AddpersonnagePage;
  nextPage = DestinationPage;
  personnages = [
    {
      name: "Eugénie",
      fonction: "Maîtresse de maison"
    },
    {
      name: "Louise",
      fonction: "Infirmière"
    },
    {
      name: "Agathe",
      fonction: "Modèle"
    },
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonnagePage');
  }

}
