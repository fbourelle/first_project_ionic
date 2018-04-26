import { Component, Input } from '@angular/core';

/**
 * Generated class for the CustomBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-bar',
  templateUrl: 'custom-bar.html'
})
export class CustomBarComponent {

@Input('progression') progress;

  text: string;

  constructor() {
    console.log('Hello CustomBarComponent Component');
  }

  increaseProgress() {
    if (this.progress < 100) this.progress += 5;
    console.log ("la barre progresse de ", this.progress);
  }

}
