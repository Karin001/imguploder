import { Component, OnInit, ViewEncapsulation, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({

  selector: 'app-imglist',
  templateUrl: './imglist.component.html',
  styleUrls: ['./imglist.component.scss']
})
export class ImglistComponent implements OnInit {
  @ViewChild('editTmplImg') editTmplImg: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  @ViewChild('editTmplName') editTmplName: TemplateRef<any>;
  //@ViewChild('hdrTplName') hdrTplName: TemplateRef<any>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  //@ViewChild('hdrTplType') hdrTplType: TemplateRef<any>;
  @ViewChild('editTmplSize') editTmplSize: TemplateRef<any>;
  //@ViewChild('hdrTplSize') hdrTplSize: TemplateRef<any>;
  @Input() dackMode = false;
  rows = [];
  columns = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  ngOnInit() {
    this.columns = [{
      cellTemplate: this.editTmplImg,
      headerTemplate: this.hdrTpl,
      name: 'imglist',
      prop: 'src'
    },
    {
      cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
      name: 'name'
    },
    {
      cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
      name: 'type'
    },
    {
      cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
      name: 'size'
    }
  ];
  }
  onSelect({ selected }) {
    console.log('Select Event', selected);
  }
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/imglist.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
