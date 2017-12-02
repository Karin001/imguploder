import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imgdetail',
  templateUrl: './imgdetail.component.html',
  styleUrls: ['./imgdetail.component.scss']
})
export class ImgdetailComponent implements OnInit {
  @Input()selected;
  constructor() { }

  ngOnInit() {
  }

}
