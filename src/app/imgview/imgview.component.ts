import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgview',
  templateUrl: './imgview.component.html',
  styleUrls: ['./imgview.component.scss']
})
export class ImgviewComponent implements OnInit {
  userSelect;
  constructor() { }

  ngOnInit() {
  }
  getSelect(data) {

    console.log('get!!!');
    console.log(data);
    this.userSelect = data[0];
  }

}
