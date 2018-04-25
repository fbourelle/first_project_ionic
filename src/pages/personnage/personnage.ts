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
   personnages = ['Eugénie', 'Louise', 'Agathe'];
  /*personnages = [
    {
      name: "Eugénie",
      fonction: "Maîtresse de maison",
      image: "assets/imgs/avatar_1.jpg"
    },
    {
      name: "Louise",
      fonction: "Infirmière",
      image: "assets/imgs/avatar_2.jpg"
    },
    {
      name: "Agathe",
      fonction: "Modèle",
      image: "assets/imgs/avatar_3.jpg"
    },
  ];*/
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonnagePage');
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Personnage',
      message: "Enter a name",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.personnages.push(data.title);
          }
        }
      ]
    });
    prompt.present();
  }


  showPromptUpdate(i) {
    let prompt = this.alertCtrl.create({
      title: 'Update Personnage',
      message: "Enter a new name",
      inputs: [
        {
          name: 'title',
          placeholder: 'Enter a new name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => { 
            this.personnages.splice(i, 1, data.title);
          }
        }
      ]
    });
    prompt.present();
  }

  suppPerso(index) {
    this.personnages.splice(index, 1);
  }

addPersonnage() {
    this.personnages.push();
}

}
