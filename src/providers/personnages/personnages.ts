import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personnage } from '../../models/PersonnageModel';
import { Groupe } from '../../models/GroupeModels';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the PersonnagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonnagesProvider {
modeleSubject = new Subject<Groupe>();
public perso1 = new Personnage("Eugénie", "Maîtresse de maison", "avatar_1.jpg");
public perso2 = new Personnage("Louise", "Infirmière", "avatar_2.jpg");
public perso3 = new Personnage("Agathe", "Modèle", "avatar_3.jpg");

public modele = new Groupe([this.perso1, this.perso2, this.perso3]);

apiUrl = 'https://bonnard-17c91.firebaseio.com/';

  constructor(public httpClient: HttpClient) {}

  emitMusiqueSubject() {
    this.modeleSubject.next(this.modele);
  }

  getModele(){
    return this.modele;
  }

  getPeople() {
    let people = new Promise(resolve => {
      this.httpClient.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    return people;
  }

  envoyer() {
    this.httpClient.put(this.apiUrl + '/tableau.json', this.modele)
                    .subscribe(
                      () => {
                        console.log('ok');
                      }, (error) => {
                        console.log('error');
                      }
                    );
  }

  postPerson(groupe: Groupe) {
    return new Promise((resolve, reject) => {
      // this.http.post(this.apiUrl + 'users/', JSON.stringify(person), {
      this.http.post(this.apiUrl, JSON.stringify(groupe), {
        // Si votre API nécessite des headers et paramètres additionnels
        // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        // params: new HttpParams().set('id', '3'),
      }).subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }
}
