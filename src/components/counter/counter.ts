import { Component, Input, OnInit } from '@angular/core';

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
export class CounterComponent implements OnInit{

  text: string;
  @Input() project:any;
  remaining : number;
  constructor() {
    this.text = 'counter';
  }
  
  ngOnInit(){
    this.remaining = this.project.awardCount - this.project.currentCount;
    if (this.project.awardCount>this.project.currentCount){

      let x= setInterval(()=>{
        this.project.currentCount++;
        if (this.project.currentCount == this.project.awardCount){
          clearInterval(x);
        }
      },1000);

    }
  }

}
