import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dackMode = false;
  userSelect = null;
  changeMode() {
    this.dackMode = this.dackMode === false ? true : false;
    console.log('app-dack=' + this.dackMode);
  }
  getSelect(data) {

    console.log('get!!!');
    console.log(data);
    this.userSelect = data[0];
  }

}
