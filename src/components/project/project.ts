import { Component } from '@angular/core';

/**
 * Generated class for the ProjectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project',
  templateUrl: 'project.html'
})
export class ProjectComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectComponent Component');
    this.text = 'Project';
  }

}
