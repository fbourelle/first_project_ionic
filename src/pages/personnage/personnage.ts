import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  name = String;

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.name = navParams.get("name");
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


getToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}

  suppPerso(index) {
    let message = "Personnage " + this.personnages[index] + " supprimé"
    this.personnages.splice(index, 1);
    this.getToast(message);
  }

addPersonnage() {
    this.personnages.push();
}

editPersonnage(index) {
  this.navCtrl.push(AddpersonnagePage, {
    name: this.personnages[index]
  })
}


}
