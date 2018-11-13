import { Component } from '@angular/core';

/**
 * Generated class for the CounterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'counter',
  templateUrl: 'counter.html'
})
export class CounterComponent {

  text: string;

  constructor() {
    console.log('Hello CounterComponent Component');
    this.text = 'counter';
  }

}
