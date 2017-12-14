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
      console.log(4);
    });
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.tagModel.value);
  }
  resetForm(event) {
    console.log(event);
    this.createForm(event.value, true);
  }
  createForm(tagtype = this.tagData['type'] || 'person', reset: boolean = false) {
    const groupModel = {};
    const detailModel = {};
    let temp;
    const temp2 = [];
    const temp3 = [];
    this.tagTypes['ImgType'].forEach(element => {
      if (tagtype === element['type']) {
        groupModel['type'] = element['type'];
        this.details = element['details'];
        element['details'].forEach(detail => {
          temp2.push(detail);
          temp3.push(this.tagData['detail'][detail]);
          temp = this.detailType[detail]['prop'] === 'multi' ? [''] : '';
          console.log('start');
          console.log(temp);
          detailModel[detail] = temp;
        });
        console.log(0);
        console.log(detailModel);
        groupModel['detail'] = this.fb.group(detailModel);
        if (!reset) {
          for (let index = 0; index < temp2.length; index++) {
            groupModel['detail'].controls[temp2[index]].setValue(temp3[index]);
          }
        }
        return;
      }
    });
    this.tagModel = this.fb.group(groupModel);
    console.log('表单group对象如下');
    console.log(this.tagModel);
  }

}
