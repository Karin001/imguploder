import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  a = 'kk';
  c = ['kk'];
  b = {'kk': '123'};
  dackMode = false;
  userSelect = null;
  changeMode() {
    this.dackMode = this.dackMode === false ? true : false;
    console.log('app-dack=' + this.dackMode);
  }


}
