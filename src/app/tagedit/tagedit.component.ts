import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GetTagModelService } from '../get-tag-model.service';
@Component({
  selector: 'app-tagedit',
  templateUrl: './tagedit.component.html',
  styleUrls: ['./tagedit.component.scss']
})
export class TageditComponent implements OnInit {
  tagTypes;
  details = [];
  tagModel: FormGroup;
  constructor( private fb: FormBuilder, private gt: GetTagModelService) {
    this.gt.getlocalModel().subscribe((data)=>{
      this.tagTypes = data;
      console.log(this.tagTypes);
      this.createForm();
    });
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.tagModel.value);
  }
  resetForm(event){
    console.log(event);
    this.createForm(event.value);
  }
  createForm( tagtype = 'anime' ) {
    let groupModel = {};
    let detailModel = {};
    this.tagTypes['ImgType'].forEach(element => {
      if(tagtype === element['type']) {
        groupModel['type'] = element['type'];
        this.details = element['details'];
        element['details'].forEach(detail => {
          detailModel[detail] = '';
        });
        groupModel['detail'] = this.fb.group(detailModel);
      }
    });
    this.tagModel = this.fb.group(groupModel);
  }

}
