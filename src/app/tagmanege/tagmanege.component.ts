import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetTagModelService } from '../get-tag-model.service';

@Component({
  selector: 'app-tagmanege',
  templateUrl: './tagmanege.component.html',
  styleUrls: ['./tagmanege.component.scss']
})
export class TagmanegeComponent implements OnInit {
  tagTypes;
  imgTypes;
  constructor(private fb: FormBuilder, private gt: GetTagModelService) {
    this.gt.getlocalModel().subscribe((data) => {
      this.tagTypes = data['ImgType'];

    });
  }


  ngOnInit() {
  }
  manege(tag) {
    console.log(tag);
  }
}
