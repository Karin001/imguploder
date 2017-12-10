import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetTagModelService } from '../get-tag-model.service';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-tagedit',
  templateUrl: './tagedit.component.html',
  styleUrls: ['./tagedit.component.scss']
})
export class TageditComponent implements OnInit {
  tagTypes;
  tagData;
  details = [];
  detailType = [];
  tagModel: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public tag: any,
    private fb: FormBuilder,
    private gt: GetTagModelService,

  ) {
    console.log(this.tag);
    this.tagData = this.tag['tag'];
    this.gt.getlocalModel().subscribe((data) => {
      this.tagTypes = data;
      this.detailType = this.tagTypes['DetailType'];
      console.log(this.tagTypes);
      this.createForm();
    });
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.tagModel.value);
  }
  resetForm(event) {
    console.log(event);
    this.createForm(event.value);
  }
  createForm(tagtype = this.tagData['type'] || 'person') {
    let groupModel = {};
    let detailModel = {};
    this.tagTypes['ImgType'].forEach(element => {
      if (tagtype === element['type']) {
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
