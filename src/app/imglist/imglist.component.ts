import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  
  selector: 'app-imglist',
  templateUrl: './imglist.component.html',
  styleUrls: ['./imglist.component.scss']
})
export class ImglistComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
