import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counter app';
  count: number = 0;

  onIncrease = () => {
    
    this.count++;
  }
  onDecrease = () => {
    if(this.count === 0){
      this.count = 0
    } else {
      this.count--;
    }
  }

  onRest(){
    this.count = 0;
  }


}
  